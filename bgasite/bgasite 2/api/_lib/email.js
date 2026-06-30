/* Transactional email via Resend.
   Two helpers:
     - sendConfirmation(to, subject, html) — to the submitter
     - sendInternalNotice(subject, html)   — to BGA staff
*/
import { Resend } from "resend";

let _client;
function client() {
  if (_client) return _client;
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY in env.");
  }
  _client = new Resend(process.env.RESEND_API_KEY);
  return _client;
}

const FROM = () => process.env.EMAIL_FROM || "BGA <hello@example.com>";
const INTERNAL = () => process.env.EMAIL_TO_INTERNAL || "team@example.com";

export async function sendConfirmation(to, subject, html) {
  if (!to) return null;
  try {
    return await client().emails.send({ from: FROM(), to, subject, html });
  } catch (err) {
    console.error("Resend confirmation error:", err);
    return null;
  }
}

export async function sendInternalNotice(subject, html) {
  try {
    return await client().emails.send({ from: FROM(), to: INTERNAL(), subject, html });
  } catch (err) {
    console.error("Resend internal-notice error:", err);
    return null;
  }
}

/* Send to a specific address, optionally with attachments.
   attachments: [{ filename, content }] where content is a base64 string. */
export async function sendNoticeTo(to, subject, html, attachments) {
  if (!to) return null;
  try {
    const msg = { from: FROM(), to, subject, html };
    if (attachments && attachments.length) msg.attachments = attachments;
    return await client().emails.send(msg);
  } catch (err) {
    console.error("Resend notice error:", err);
    return null;
  }
}

/* Tiny HTML helper for transactional templates — wraps content in a branded shell. */
export function wrap(title, body) {
  return `<!doctype html>
<html><body style="font-family: -apple-system, system-ui, sans-serif; background: #F5F0E6; color: #2A1D1B; padding: 32px;">
  <div style="max-width: 560px; margin: 0 auto; background: #fff; border-radius: 18px; padding: 36px; border: 1px solid rgba(61,44,41,0.08);">
    <h1 style="font-family: Georgia, serif; font-weight: 500; margin: 0 0 8px; font-size: 26px; color: #2A1D1B;">${title}</h1>
    <div style="font-size: 15px; line-height: 1.6; color: #3D2C29;">${body}</div>
    <hr style="border: 0; border-top: 1px solid rgba(61,44,41,0.1); margin: 32px 0;">
    <div style="font-size: 12px; color: #5D5349;">The Black Girl Advocate · 501(c)(3) · EIN 99-0725880</div>
  </div>
</body></html>`;
}
