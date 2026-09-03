import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 5, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    firstName: "required",
    lastName: "required",
    email: "email",
    school: "required",
    gpa: (v) => v && !isNaN(parseFloat(v)) && parseFloat(v) >= 0 && parseFloat(v) <= 5,
    graduationYear: "required",
  });
  if (!valid) return bad(res, errors);

  try {
    await createRecord(TABLES.hbcuInterest, {
      "First Name": s(body.firstName, 80),
      "Last Name": s(body.lastName, 80),
      "Email": s(body.email, 200),
      "School": s(body.school, 200),
      "GPA": parseFloat(body.gpa),
      "Graduation Year": s(body.graduationYear, 8),
      "Submitted At": new Date().toISOString(),
    });

    await sendConfirmation(
      body.email,
      "You're on the HBCU Tour list",
      wrap(
        "You're on the list.",
        `<p>When applications open in <strong>August 2026</strong>, we'll email you the live form, the deadline, and the schools we're touring.</p>
         <p>Eligibility reminder: rising juniors with a 3.0+ GPA, travel & lodging covered.</p>`
      )
    );
    await sendNoticeTo(
      "ariel@theblackgirladvocate.org",
      `HBCU interest — ${s(body.firstName)} ${s(body.lastName)}`,
      wrap("New HBCU Tour interest",
        `<p><strong>${s(body.firstName)} ${s(body.lastName)}</strong> · ${s(body.school)} · GPA ${s(body.gpa)} · Grad ${s(body.graduationYear)}</p>
         <p>Email: ${s(body.email)}</p>`
      )
    );
    return ok(res);
  } catch (err) {
    return serverError(res, err);
  }
}
