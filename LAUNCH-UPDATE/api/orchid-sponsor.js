import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

/* Orchid Award 2027 sponsorship inquiry. Notifications route to ariel@theblackgirladvocate.org. */
const REVIEWER = "ariel@theblackgirladvocate.org";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 4, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    sponsorName: "required",
    contactName: "required",
    email: "email",
    level: "required",
  });
  if (!valid) return bad(res, errors);

  try {
    const fields = {
      "Sponsor": s(body.sponsorName, 200),
      "Contact Name": s(body.contactName, 160),
      "Email": s(body.email, 200),
      "Phone": s(body.phone, 40),
      "Level": s(body.level, 80),
      "Message": s(body.message, 4000),
      "Status": "New",
      "Submitted At": new Date().toISOString(),
    };
    try { await createRecord(TABLES.orchidSponsor, fields); } catch (e) { console.error("Airtable write failed:", e); }

    await sendNoticeTo(
      REVIEWER,
      `Orchid Award sponsorship, ${s(body.sponsorName)} (${s(body.level)})`,
      wrap(
        "New Orchid Award 2027 sponsorship",
        `<p><strong>${s(body.sponsorName)}</strong> , ${s(body.level)}</p>
         <p><strong>Contact:</strong> ${s(body.contactName)} , ${s(body.email)}${body.phone ? ` , ${s(body.phone)}` : ""}</p>
         ${body.message ? `<p><em>Message:</em><br/>${s(body.message, 4000).replace(/\n/g, "<br/>")}</p>` : ""}`
      )
    );

    await sendConfirmation(
      body.email,
      "Thank you for sponsoring the 2027 Orchid Award",
      wrap(
        `Thank you, ${s(body.contactName, 80)}.`,
        `<p>We've received your interest in sponsoring the 2027 Orchid Award at the <strong>${s(body.level)}</strong> level. Our team will reach out to confirm the details and your benefits.</p>
         <p style="opacity:.7">The Orchid Award , honoring the Black women who shape our daughters' futures.</p>`
      )
    );

    return ok(res, { message: "Sponsorship received" });
  } catch (err) {
    return serverError(res, err);
  }
}
