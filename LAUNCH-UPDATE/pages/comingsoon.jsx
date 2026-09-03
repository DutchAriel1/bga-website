/* Upcoming Events, placeholder page.
   "Check back soon (July 2026)."
   Black Girls at the Arts has its own dedicated tickets flow and routes there directly.
*/
function ComingSoonPage({ onNavigate }) {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const [submitting, setSubmitting] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const r = await window.bgaApi("/api/events-notify", { email });
      if (r.ok) setSubmitted(true);
    } finally { setSubmitting(false); }
  };

  return (
    <section style={{
      minHeight: "calc(100vh - 96px)",
      background: "var(--lavender-soft)",
      color: "var(--chocolate-2)",
      display: "grid",
      placeItems: "center",
      padding: "120px 24px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative oversized italic glyph */}
      <div aria-hidden style={{
        position: "absolute", right: "-6%", top: "8%",
        fontFamily: "Noto Serif", fontStyle: "italic", fontSize: "32vw",
        lineHeight: 0.8, fontWeight: 300,
        color: "rgba(61,44,41,0.06)", pointerEvents: "none",
      }}>S</div>
      <div aria-hidden style={{
        position: "absolute", left: "-4%", bottom: "-8%",
        fontFamily: "Noto Serif", fontStyle: "italic", fontSize: "24vw",
        lineHeight: 0.8, fontWeight: 300,
        color: "rgba(61,44,41,0.05)", pointerEvents: "none",
      }}>n</div>

      <div className="container-wide" style={{ position: "relative", zIndex: 2, maxWidth: 880, textAlign: "center" }}>
        <div className="chip chip-lavender" style={{ marginBottom: 32, background: "var(--chocolate-2)", color: "var(--lavender-soft)" }}>
          <Icon.Calendar size={14} /> Upcoming Events
        </div>

        <h1 className="display d-xl" style={{ margin: 0, lineHeight: 1.05 }}>
          Check back <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>soon.</span>
        </h1>
        <p style={{ fontFamily: "Noto Serif", fontStyle: "italic", fontWeight: 300, fontSize: 28, margin: "24px 0 0", opacity: 0.78 }}>
          July 2026
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.6, margin: "32px auto 0", maxWidth: 600, opacity: 0.82 }}>
          Our 2026–27 program calendar drops in July. Cohort dates, Saturday sessions, leadership meetings, family nights, all of it. Drop your email and we'll send the calendar the day it's live.
        </p>

        {/* Email capture */}
        <div style={{ marginTop: 44, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
          {submitted ? (
            <div style={{
              padding: "20px 24px",
              background: "var(--beige)",
              border: "1px solid var(--line-dark)",
              borderRadius: 14,
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
            }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--bronze-soft)", color: "var(--chocolate-2)", display: "grid", placeItems: "center" }}>
                <Icon.Check size={14} />
              </span>
              <span style={{ fontSize: 15 }}>You're on the list. We'll email you in <strong>July 2026</strong>.</span>
            </div>
          ) : (
            <form
              onSubmit={submit}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 8,
                background: "var(--beige)",
                padding: 8,
                borderRadius: 14,
                border: "1px solid var(--line-dark)",
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "transparent",
                  color: "var(--ink)",
                  border: "none",
                  outline: "none",
                  fontFamily: "inherit",
                  fontSize: 15,
                }}
              />
              <button type="submit" className="btn btn-dark" style={{ padding: "12px 22px", fontSize: 14 }}>
                Notify me <Icon.Arrow size={14} />
              </button>
            </form>
          )}
        </div>

        {/* Side door: arts has its own ticket flow */}
        <div style={{ marginTop: 56, padding: "28px 32px", background: "var(--beige)", borderRadius: 18, border: "1px solid var(--line-dark)", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center", textAlign: "left" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--lavender)", marginBottom: 8 }}>Looking for arts nights?</div>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, opacity: 0.78 }}>
              Black Girls at the Arts runs year-round with its own ticketing flow. The current season is open now.
            </p>
          </div>
          <button className="btn btn-outline-dark" onClick={() => onNavigate("tickets")}>
            View this season <Icon.Arrow size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

window.ComingSoonPage = ComingSoonPage;
