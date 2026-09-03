import { createRecord, TABLES } from "./_lib/airtable.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 5, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, { email: "email" });
  if (!valid) return bad(res, errors);

  try {
    await createRecord(TABLES.eventsNotify, {
      "Email": s(body.email, 200),
      "Submitted At": new Date().toISOString(),
    });
    return ok(res);
  } catch (err) {
    return serverError(res, err);
  }
}
