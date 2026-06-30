import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendInternalNotice, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 5, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    name: "required",
    email: "email",
    titles: "required",
    count: (v) => Number.isInteger(+v) && +v >= 1 && +v <= 500,
  });
  if (!valid) return bad(res, errors);

  try {
    await createRecord(TABLES.bookDonations, {
      "Name": s(body.name, 200),
      "Email": s(body.email, 200),
      "Titles": s(body.titles, 4000),
      "Count": +body.count,
      "Condition": s(body.condition, 40) || "new",
      "Delivery": s(body.shipping, 40) || "ship",
      "Submitted At": new Date().toISOString(),
    });
    await sendInternalNotice(
      `Book donation — ${s(body.name)} (${+body.count} books)`,
      wrap("New book donation",
        `<p><strong>${s(body.name)}</strong> · ${s(body.email)}</p>
         <p>${+body.count} books · ${s(body.condition) || "new"} · ${s(body.shipping) || "ship"}</p>
         <p>${s(body.titles).replace(/\n/g, "<br/>")}</p>`
      )
    );
    return ok(res);
  } catch (err) {
    return serverError(res, err);
  }
}
