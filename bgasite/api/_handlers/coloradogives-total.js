/* Live EOY total from ColoradoGives. Fetches the org page server-side (no CORS in browser),
   parses the "$X raised by N donors" line, caches for 10 minutes.
   Falls back to null so the site keeps its static number. */
const ORG_URL = "https://www.coloradogives.org/organization/Black-Girl-Advocate";
let cache = { at: 0, raised: null, donors: null };

function parseTotals(html) {
  // Strip tags so "$630</b> raised by <b>11" still reads as one sentence.
  const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ");
  // The goal, so we never mistake it for the raised amount.
  const gm = text.match(/\$([\d,]+)(?:\.\d+)?\s*Goal/i);
  const goal = gm ? parseInt(gm[1].replace(/,/g, ""), 10) : null;
  // Best signal: "$X raised by N donors".
  let m = text.match(/\$([\d,]+)(?:\.\d+)?\s*raised\s+by\s+([\d,]+)\s*donors?/i);
  if (m) return { raised: parseInt(m[1].replace(/,/g, ""), 10), donors: parseInt(m[2].replace(/,/g, ""), 10) };
  // Fallback: any "$X raised" that is NOT the goal amount.
  const re = /\$([\d,]+)(?:\.\d+)?\s*raised/gi;
  let c;
  while ((c = re.exec(text))) {
    const n = parseInt(c[1].replace(/,/g, ""), 10);
    if (goal === null || n !== goal) return { raised: n, donors: null };
  }
  return null;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=3600");
  const now = Date.now();
  if (cache.raised !== null && now - cache.at < 10 * 60 * 1000) {
    return res.status(200).json({ raised: cache.raised, donors: cache.donors, cached: true });
  }
  try {
    const r = await fetch(ORG_URL, { headers: { "User-Agent": "Mozilla/5.0 (BGA site raised-total fetch)" } });
    const html = await r.text();
    const totals = parseTotals(html);
    if (!totals) throw new Error("raised total not found in page");
    cache = { at: now, raised: totals.raised, donors: totals.donors };
    return res.status(200).json({ ...totals, cached: false });
  } catch (err) {
    console.error("coloradogives fetch failed:", err);
    if (cache.raised !== null) return res.status(200).json({ raised: cache.raised, donors: cache.donors, cached: true, stale: true });
    return res.status(502).json({ error: "unavailable" });
  }
}
