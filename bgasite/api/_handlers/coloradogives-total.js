/* Live EOY total from ColoradoGives. Fetches the org page server-side (no CORS in browser),
   parses "$X raised", caches for 10 minutes. Falls back to null so the site keeps its static number. */
const ORG_URL = "https://www.coloradogives.org/organization/Black-Girl-Advocate";
let cache = { at: 0, raised: null, donors: null };

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
    const m = html.match(/\$([\d,]+)(?:\.\d+)?\s+raised/i);
    const d = html.match(/raised by\s+([\d,]+)\s+donors?/i);
    if (!m) throw new Error("raised total not found in page");
    const raised = parseInt(m[1].replace(/,/g, ""), 10);
    const donors = d ? parseInt(d[1].replace(/,/g, ""), 10) : null;
    cache = { at: now, raised, donors };
    return res.status(200).json({ raised, donors, cached: false });
  } catch (err) {
    console.error("coloradogives fetch failed:", err);
    if (cache.raised !== null) return res.status(200).json({ raised: cache.raised, donors: cache.donors, cached: true, stale: true });
    return res.status(502).json({ error: "unavailable" });
  }
}
