import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendInternalNotice, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

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
    why: ["min", 60],
    signature: "required",
    commitMonthly: (v) => v === true,
    commitAmbassador: (v) => v === true,
    commitForfeit: (v) => v === true,
  });
  if (!valid) return bad(res, errors);

  try {
    const fields = {
      "First Name": s(body.firstName, 80),
      "Last Name": s(body.lastName, 80),
      "Email": s(body.email, 200),
      "Phone": s(body.phone, 40),
      "School": s(body.school, 200),
      "City": s(body.city, 120),
      "Grade": s(body.grade, 20),
      "Parent Name": s(body.parentName, 160),
      "Parent Email": s(body.parentEmail, 200),
      "Why": s(body.why, 4000),
      "Advocacy Moment": s(body.advocacy, 4000),
      "Signature": s(body.signature, 120),
      "Status": "New",
      "Submitted At": new Date().toISOString(),
    };
    await createRecord(TABLES.applications, fields);

    await sendConfirmation(
      body.email,
      "Your BGA Ambassador application is in",
      wrap(
        `Welcome to the cohort, ${s(body.firstName, 80)}.`,
        `<p>Your application is in. A BGA advocate will email you within seven business days to set up your intake conversation.</p>
         <p>Until then, the room is already saving your seat.</p>
         <p style="opacity:.7">Cohort selected: <strong>${s(body.grade)}</strong></p>`
      )
    );
    await sendInternalNotice(
      `New BGA Ambassador application — ${s(body.firstName)} ${s(body.lastName)}`,
      wrap(
        "New Ambassador application",
        `<p><strong>${s(body.firstName)} ${s(body.lastName)}</strong> · ${s(body.grade)} · ${s(body.school)}</p>
         <p>Student email: ${s(body.email)}<br/>Parent: ${s(body.parentName)} (${s(body.parentEmail)})</p>
         <p><em>Why:</em><br/>${s(body.why).replace(/\n/g, "<br/>")}</p>`
      )
    );

    return ok(res, { message: "Application received" });
  } catch (err) {
    return serverError(res, err);
  }
}
