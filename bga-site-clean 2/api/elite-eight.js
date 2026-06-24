import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

/* The Elite Eight application.
   Reviewer copy (with the transcript attached) is routed to ariel@theblackgirladvocate.org.
   The transcript arrives as a base64 string in the JSON body and is forwarded as an email attachment.
*/
const REVIEWER = "ariel@theblackgirladvocate.org";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res); // silently accept bots

  const limit = rateLimit(req, { max: 3, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    firstName: "required",
    lastName: "required",
    email: "email",
    school: "required",
    grade: "required",
    parentName: "required",
    parentEmail: "email",
    counselorName: "required",
    counselorEmail: "email",
    transcriptData: "required",
    transcriptName: "required",
  });
  if (!valid) return bad(res, errors);

  try {
    const fields = {
      "First Name": s(body.firstName, 80),
      "Last Name": s(body.lastName, 80),
      "Email": s(body.email, 200),
      "Phone": s(body.phone, 40),
      "Grade": s(body.grade, 10),
      "GPA": s(body.gpa, 10),
      "School": s(body.school, 200),
      "City / State": s(body.cityState, 120),
      "Parent Name": s(body.parentName, 160),
      "Parent Email": s(body.parentEmail, 200),
      "Parent Phone": s(body.parentPhone, 40),
      "Counselor Name": s(body.counselorName, 160),
      "Counselor Email": s(body.counselorEmail, 200),
      "Why": s(body.why, 4000),
      "Transcript File": s(body.transcriptName, 240),
      "Status": "New",
      "Submitted At": new Date().toISOString(),
    };
    // Airtable record is best-effort — the reviewer email is the source of truth.
    try { await createRecord(TABLES.eliteEight, fields); } catch (e) { console.error("Airtable write failed:", e); }

    // Build the transcript attachment from the base64 payload.
    const attachments = [];
    if (body.transcriptData) {
      attachments.push({
        filename: s(body.transcriptName, 240) || "transcript",
        content: String(body.transcriptData), // base64
      });
    }

    // Reviewer copy → ariel@theblackgirladvocate.org, transcript attached.
    await sendNoticeTo(
      REVIEWER,
      `Elite Eight application — ${s(body.firstName)} ${s(body.lastName)} (Grade ${s(body.grade)})`,
      wrap(
        "New Elite Eight application",
        `<p><strong>${s(body.firstName)} ${s(body.lastName)}</strong> · Grade ${s(body.grade)}${body.gpa ? ` · GPA ${s(body.gpa)}` : ""}</p>
         <p><strong>School:</strong> ${s(body.school)}${body.cityState ? ` — ${s(body.cityState)}` : ""}<br/>
            <strong>Scholar:</strong> ${s(body.email)}${body.phone ? ` · ${s(body.phone)}` : ""}</p>
         <p><strong>Parent / Guardian:</strong> ${s(body.parentName)} — ${s(body.parentEmail)}${body.parentPhone ? ` · ${s(body.parentPhone)}` : ""}</p>
         <p><strong>School Counselor:</strong> ${s(body.counselorName)} — ${s(body.counselorEmail)}</p>
         ${body.why ? `<p><em>Why The Elite Eight:</em><br/>${s(body.why, 4000).replace(/\n/g, "<br/>")}</p>` : ""}
         <p style="opacity:.7"><strong>Transcript:</strong> ${s(body.transcriptName, 240)} (attached)</p>`
      ),
      attachments
    );

    // Confirmation to the scholar.
    await sendConfirmation(
      body.email,
      "Your Elite Eight application is in",
      wrap(
        `Thank you, ${s(body.firstName, 80)}.`,
        `<p>Your Elite Eight application and transcript have been received. Our admissions team will review your file and reach out to schedule the family conversation.</p>
         <p>Her seat is being held.</p>
         <p style="opacity:.7">The Elite Eight — an Ivy League journey for Black girls.</p>`
      )
    );

    return ok(res, { message: "Application received" });
  } catch (err) {
    return serverError(res, err);
  }
}
