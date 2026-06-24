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
    name: "required",
    email: "email",
    show: "required",
    quantity: (v) => Number.isInteger(+v) && +v >= 1 && +v <= 6,
  });
  if (!valid) return bad(res, errors);

  try {
    await createRecord(TABLES.tickets, {
      "Name": s(body.name, 200),
      "Email": s(body.email, 200),
      "Phone": s(body.phone, 40),
      "Show": s(body.show, 200),
      "Quantity": +body.quantity,
      "Notes": s(body.notes, 2000),
      "Status": "Requested",
      "Submitted At": new Date().toISOString(),
    });
    await sendConfirmation(body.email,
      "Your ticket request is in",
      wrap("We received your request.",
        `<p>You requested <strong>${+body.quantity} ticket(s)</strong> for <strong>${s(body.show)}</strong>.</p>
         <p>Our team will confirm availability within two business days.</p>`
      )
    );
    await sendNoticeTo(
      "ariel@theblackgirladvocate.org",
      `Ticket request — ${s(body.show)} (${+body.quantity})`,
      wrap("New ticket request",
        `<p><strong>${s(body.name)}</strong> · ${s(body.email)}${body.phone ? ` · ${s(body.phone)}` : ""}</p>
         <p>Show: ${s(body.show)} · Qty: ${+body.quantity}</p>
         ${body.notes ? `<p>${s(body.notes)}</p>` : ""}`
      )
    );
    return ok(res);
  } catch (err) {
    return serverError(res, err);
  }
}
