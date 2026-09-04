import { createRecord, TABLES } from "../_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "../_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "../_lib/utils.js";

/* Event RSVP with youth data tracking.
   Notifications route to ariel@theblackgirladvocate.org. */
const REVIEWER = "ariel@theblackgirladvocate.org";

const list = (v) => Array.isArray(v) ? v.join(", ") : s(v, 500);

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 5, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    studentFirst: "required",
    studentLast: "required",
    grade: "required",
    school: "required",
    parentName: "required",
    parentEmail: "email",
    parentPhone: "required",
  });
  if (!valid) return bad(res, errors);

  const student = `${s(body.studentFirst)} ${s(body.studentLast)}`;

  try {
    const fields = {
      "Event": s(body.eventTitle, 200),
      "Event Date": s(body.eventDate, 60),
      "Student First Name": s(body.studentFirst, 80),
      "Student Last Name": s(body.studentLast, 80),
      "Grade": s(body.grade, 10),
      "Date of Birth": s(body.dob, 20),
      "School": s(body.school, 200),
      "Student Email": s(body.studentEmail, 200),
      "Student Phone": s(body.studentPhone, 40),
      "Parent Name": s(body.parentName, 160),
      "Parent Relationship": s(body.parentRelationship, 60),
      "Parent Email": s(body.parentEmail, 200),
      "Parent Phone": s(body.parentPhone, 40),
      "Preferred Contact": s(body.preferredContact, 30),
      "Emergency Contact": s(body.emergencyName, 160),
      "Emergency Phone": s(body.emergencyPhone, 40),
      "Zip Code": s(body.zip, 12),
      "Race / Ethnicity": list(body.race),
      "Free or Reduced Lunch": s(body.lunch, 40),
      "First Generation College": s(body.firstGen, 60),
      "Household": s(body.household, 60),
      "Baseline Belonging": Number(body.bBelong) || "",
      "Baseline College Knowledge": Number(body.bCollege) || "",
      "Baseline Coping": Number(body.bStress) || "",
      "Baseline Physical Activity": Number(body.bActive) || "",
      "Baseline Leadership": Number(body.bLead) || "",
      "Baseline Deferred": body.baselineSkip ? "Yes" : "No",
      "Survey Wave": "Pre",
      "First BGA Program": s(body.firstProgram, 40),
      "Media Release": body.media ? "Yes" : "No",
      "Data Use Consent": body.dataUse ? "Yes" : "No",
      "Guardian Permission": body.pickup ? "Yes" : "No",
      "Status": "Registered",
      "Submitted At": new Date().toISOString(),
    };
    try { await createRecord(TABLES.eventRsvps, fields); } catch (e) { console.error("Airtable write failed:", e); }

    await sendNoticeTo(
      REVIEWER,
      `Event RSVP: ${s(body.eventTitle)} , ${student} (Grade ${s(body.grade)})`,
      wrap(
        "New event RSVP",
        `<p><strong>${student}</strong> · Grade ${s(body.grade)} · ${s(body.school)}</p>
         <p><strong>Event:</strong> ${s(body.eventTitle)} (${s(body.eventDate)})</p>
         <p><strong>Parent / Guardian:</strong> ${s(body.parentName)} (${s(body.parentRelationship)})<br/>
            ${s(body.parentEmail)} · ${s(body.parentPhone)} · prefers ${s(body.preferredContact)}</p>
         ${body.emergencyName ? `<p><strong>Emergency:</strong> ${s(body.emergencyName)} · ${s(body.emergencyPhone)}</p>` : ""}
         <hr/>
         <p><strong>Zip:</strong> ${s(body.zip)} · <strong>Identifies as:</strong> ${list(body.race)}<br/>
            <strong>Free / reduced lunch:</strong> ${s(body.lunch)} · <strong>First gen:</strong> ${s(body.firstGen)} · <strong>Household:</strong> ${s(body.household)}</p>
         <p><strong>Baseline (1 to 5):</strong> belonging ${s(body.bBelong)} · college ${s(body.bCollege)} · coping ${s(body.bStress)} · activity ${s(body.bActive)} · leadership ${s(body.bLead)}${body.baselineSkip ? " (deferred, she will answer at the event)" : ""}</p>
         <hr/>
         <p><strong>Media release:</strong> ${body.media ? "Yes" : "No"} · <strong>First BGA program:</strong> ${s(body.firstProgram)}</p>`
      )
    );

    await sendConfirmation(
      body.parentEmail,
      `RSVP confirmed: ${s(body.eventTitle, 120)}`,
      wrap(
        `${s(body.studentFirst, 80)} is registered.`,
        `<p>We have ${s(body.studentFirst, 80)} down for <strong>${s(body.eventTitle, 200)}</strong> on ${s(body.eventDate, 60)}.</p>
         <p>You will get a reminder two days before with the exact address, the arrival window, and the cell number of the BGA facilitator on site. If your plans change, reply to this email so we can offer the spot to a girl on the waitlist.</p>
         <p style="opacity:.7">The Black Girl Advocate · (720) 585-1015 · ariel@theblackgirladvocate.org</p>`
      )
    );

    return ok(res, { message: "RSVP received" });
  } catch (err) {
    return serverError(res, err);
  }
}
