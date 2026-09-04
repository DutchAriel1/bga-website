/* Single dispatcher function. All /api/<name> requests are rewritten here
   (see vercel.json) so the whole backend counts as ONE serverless function. */
import h0 from "./_handlers/apply.js";
import h1 from "./_handlers/coloradogives-total.js";
import h2 from "./_handlers/contact.js";
import h3 from "./_handlers/donate-books.js";
import h4 from "./_handlers/elite-eight.js";
import h5 from "./_handlers/event-rsvp.js";
import h6 from "./_handlers/events-notify.js";
import h7 from "./_handlers/hbcu-tour-application.js";
import h8 from "./_handlers/igotnext-enroll.js";
import h9 from "./_handlers/newsletter.js";
import h10 from "./_handlers/orchid.js";
import h11 from "./_handlers/tickets.js";
const routes = { "apply": h0, "coloradogives-total": h1, "contact": h2, "donate-books": h3, "elite-eight": h4, "event-rsvp": h5, "events-notify": h6, "hbcu-tour-application": h7, "igotnext-enroll": h8, "newsletter": h9, "orchid": h10, "tickets": h11 };
export default async function handler(req, res) {
  let name = req.query && req.query.name;
  if (!name) { try { name = new URL(req.url, "http://x").searchParams.get("name"); } catch {} }
  const fn = routes[name];
  if (!fn) { res.statusCode = 404; res.setHeader("Content-Type", "application/json"); return res.end(JSON.stringify({ ok: false, message: "Not found" })); }
  return fn(req, res);
}
