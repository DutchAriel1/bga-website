import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

/* I Got Next athlete enrollment.
   Notifications route to ariel@theblackgirladvocate.org. */
const REVIEWER = "ariel@theblackgirladvocate.org";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res); // silently accept bots

  const limit = rateLimit(req, { max: 4, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    athleteFirst: "required",
    athleteLast: "required",
    grade: "required",
    school: "required",
    parentName: "required",
    parentEmail: "email",
  });
  if (!valid) return bad(res, errors);

  try {
    const fields = {
      "Athlete First Name": s(body.athleteFirst, 80),
      "Athlete Last Name": s(body.athleteLast, 80),
      "Grade": s(body.grade, 10),
      "School": s(body.school, 200),
      "City / State": s(body.cityState, 120),
      "Athlete Email": s(body.athleteEmail, 200),
      "Parent Name": s(body.parentName, 160),
      "Parent Email": s(body.parentEmail, 200),
      "Parent Phone": s(body.parentPhone, 40),
      "Goals": s(body.goals, 4000),
      "Status": "New",
      "Submitted At": new Date().toISOString(),
    };
    try { await createRecord(TABLES.igotnext, fields); } catch (e) { console.error("Airtable write failed:", e); }

    await sendNoticeTo(
      REVIEWER,
      `I Got Next enrollment — ${s(body.athleteFirst)} ${s(body.athleteLast)} (Grade ${s(body.grade)})`,
      wrap(
        "New I Got Next enrollment",
        `<p><strong>${s(body.athleteFirst)} ${s(body.athleteLast)}</strong> · Grade ${s(body.grade)}</p>
         <p><strong>School:</strong> ${s(body.school)}${body.cityState ? ` , ${s(body.cityState)}` : ""}${body.athleteEmail ? `<br/><strong>Athlete:</strong> ${s(body.athleteEmail)}` : ""}</p>
         <p><strong>Parent / Guardian:</strong> ${s(body.parentName)} — ${s(body.parentEmail)}${body.parentPhone ? ` · ${s(body.parentPhone)}` : ""}</p>
         ${body.goals ? `<p><em>Goals:</em><br/>${s(body.goals, 4000).replace(/\n/g, "<br/>")}</p>` : ""}`
      )
    );

    await sendConfirmation(
      body.parentEmail,
      "Your I Got Next enrollment is in",
      wrap(
        `${s(body.athleteFirst, 80)} is on the roster.`,
        `<p>Thanks for enrolling your athlete in I Got Next. Our team will reach out with next steps and the season calendar.</p>
         <p style="opacity:.7">I Got Next — girls in sports, free for every BGA athlete.</p>`
      )
    );

    return ok(res, { message: "Enrollment received" });
  } catch (err) {
    return serverError(res, err);
  }
}
