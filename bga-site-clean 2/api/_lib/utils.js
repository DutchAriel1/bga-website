/* Request helpers: method gate, JSON parse, validation, honeypot, rate limit.

   Rate limiting is a soft, in-memory per-IP counter — it survives within a single
   warm Vercel function instance and resets on cold start. For real abuse
   protection, swap in Upstash Redis. For now this is enough to slow bots.
*/

export function methodGuard(req, res, methods = ["POST"]) {
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return false;
  }
  if (!methods.includes(req.method)) {
    res.status(405).json({ error: "Method not allowed" });
    return false;
  }
  return true;
}

export async function readJson(req) {
  // Vercel parses JSON body when content-type is application/json
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try { return JSON.parse(req.body); } catch { return {}; }
  }
  return {};
}

/* Honeypot: any non-empty value in `_hp` means a bot filled an invisible field. */
export function honeypotTripped(body) {
  return !!(body && body._hp && String(body._hp).trim().length > 0);
}

/* Naive in-memory rate limit. key -> {count, resetAt}. */
const buckets = new Map();
export function rateLimit(req, { max = 5, windowMs = 60_000 } = {}) {
  const ip =
    req.headers["x-forwarded-for"]?.toString().split(",")[0].trim() ||
    req.headers["x-real-ip"] ||
    "unknown";
  const now = Date.now();
  const b = buckets.get(ip);
  if (!b || b.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: max - 1 };
  }
  b.count += 1;
  if (b.count > max) return { ok: false, retryAfter: b.resetAt - now };
  return { ok: true, remaining: max - b.count };
}

/* Field validation. Returns { ok, errors }. Schema is { fieldName: rule }
   where rule is one of:
     "required"  — non-empty string
     "email"     — non-empty, looks like email
     ["min", N]  — at least N chars
     fn(value)   — custom; truthy = pass
*/
export function validate(body, schema) {
  const errors = {};
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  for (const [field, rule] of Object.entries(schema)) {
    const v = body?.[field];
    if (rule === "required") {
      if (!v || String(v).trim().length === 0) errors[field] = "Required";
    } else if (rule === "email") {
      if (!v || !emailRe.test(String(v).trim())) errors[field] = "Valid email required";
    } else if (Array.isArray(rule) && rule[0] === "min") {
      if (!v || String(v).trim().length < rule[1]) errors[field] = `Min ${rule[1]} chars`;
    } else if (typeof rule === "function") {
      if (!rule(v)) errors[field] = "Invalid";
    }
  }
  return { ok: Object.keys(errors).length === 0, errors };
}

/* Strip + clamp string. */
export function s(v, max = 2000) {
  if (v == null) return "";
  return String(v).trim().slice(0, max);
}

/* Standard 200/400/422/429 responders. */
export function ok(res, data = {}) {
  res.status(200).json({ ok: true, ...data });
}
export function bad(res, errors) {
  res.status(422).json({ ok: false, errors });
}
export function tooMany(res, retryAfter) {
  res.setHeader("Retry-After", Math.ceil(retryAfter / 1000));
  res.status(429).json({ ok: false, error: "Too many requests" });
}
export function serverError(res, err) {
  console.error(err);
  res.status(500).json({ ok: false, error: "Server error" });
}
