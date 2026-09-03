import { createRecord, TABLES } from "./_lib/airtable.js";
import { sendConfirmation, sendNoticeTo, wrap } from "./_lib/email.js";
import { methodGuard, readJson, honeypotTripped, rateLimit, validate, s, ok, bad, tooMany, serverError } from "./_lib/utils.js";

/* Orchid Award 2027 nomination. Notifications route to ariel@theblackgirladvocate.org. */
const REVIEWER = "ariel@theblackgirladvocate.org";

export default async function handler(req, res) {
  if (!methodGuard(req, res)) return;
  const body = await readJson(req);
  if (honeypotTripped(body)) return ok(res);

  const limit = rateLimit(req, { max: 4, windowMs: 60_000 });
  if (!limit.ok) return tooMany(res, limit.retryAfter);

  const { ok: valid, errors } = validate(body, {
    nomineeName: "required",
    institution: "required",
    category: "required",
    reason: ["min", 40],
    nominatorName: "required",
    nominatorEmail: "email",
  });
  if (!valid) return bad(res, errors);

  try {
    const fields = {
      "Nominee Name": s(body.nomineeName, 160),
      "Nominee Email": s(body.nomineeEmail, 200),
      "Institution": s(body.institution, 200),
      "Category": s(body.category, 120),
      "Reason": s(body.reason, 4000),
      "Nominator Name": s(body.nominatorName, 160),
      "Nominator Email": s(body.nominatorEmail, 200),
      "Relationship": s(body.relationship, 160),
      "Status": "New",
      "Submitted At": new Date().toISOString(),
    };
    try { await createRecord(TABLES.orchidNominate, fields); } catch (e) { console.error("Airtable write failed:", e); }

    await sendNoticeTo(
      REVIEWER,
      `Orchid Award nomination, ${s(body.nomineeName)} (${s(body.category)})`,
      wrap(
        "New Orchid Award 2027 nomination",
        `<p><strong>${s(body.nomineeName)}</strong> , ${s(body.category)}</p>
         <p><strong>Institution:</strong> ${s(body.institution)}${body.nomineeEmail ? `<br/><strong>Nominee email:</strong> ${s(body.nomineeEmail)}` : ""}</p>
         <p><strong>Nominated by:</strong> ${s(body.nominatorName)} (${s(body.nominatorEmail)})${body.relationship ? ` , ${s(body.relationship)}` : ""}</p>
         <p><em>Why she deserves an Orchid:</em><br/>${s(body.reason, 4000).replace(/\n/g, "<br/>")}</p>`
      )
    );

    await sendConfirmation(
      body.nominatorEmail,
      "Your Orchid Award nomination is in",
      wrap(
        `Thank you, ${s(body.nominatorName, 80)}.`,
        `<p>Your nomination of <strong>${s(body.nomineeName)}</strong> for the 2027 Orchid Award has been received. The Orchid Award committee reviews every nomination ahead of the ceremony.</p>
         <p style="opacity:.7">The Orchid Award , honoring the Black women who shape our daughters' futures.</p>`
      )
    );

    return ok(res, { message: "Nomination received" });
  } catch (err) {
    return serverError(res, err);
  }
}
