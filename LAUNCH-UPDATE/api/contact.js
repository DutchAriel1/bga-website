import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendInternalNotice, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 5, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const allowed = new Set(["enroll", "partner", "volunteer", "press", "general"]);
  const intent = allowed.has(body.intent) ? body.intent : "general";

  const { ok: valid, errors } = validate(body, {
    name: "required",
    email: "email",
    message: ["min", 10],
  });
  if (!valid) return bad(res, errors);

  try {
    await createRecord(TABLES.contact, {
      "Intent": intent,
      "Name": s(body.name, 200),
      "Email": s(body.email, 200),
      "Phone": s(body.phone, 40),
      "Org": s(body.org, 200),
      "Student Age": s(body.studentAge, 20),
      "Student School": s(body.studentSchool, 200),
      "Message": s(body.message, 4000),
      "Submitted At": new Date().toISOString(),
    });

    await sendInternalNotice(
      `Contact form (${intent}) — ${s(body.name)}`,
      wrap(`New ${intent} message`,
        `<p><strong>${s(body.name)}</strong> · ${s(body.email)}${body.phone ? ` · ${s(body.phone)}` : ""}</p>
         ${body.org ? `<p>Org: ${s(body.org)}</p>` : ""}
         <p>${s(body.message).replace(/\n/g, "<br/>")}</p>`
      )
    );
    return ok(res);
  } catch (err) {
    return serverError(res, err);
  }
}
