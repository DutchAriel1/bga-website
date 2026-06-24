/* Shop, Coming Soon. */
function ShopPage({ onNavigate }) {
  const [email, setEmail] = React.useState("");
  const [signedUp, setSignedUp] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email.trim()) setSignedUp(true);
  };

  return (
    <>
      {/* Coming-soon hero */}
      <section style={{ background: "var(--chocolate-2)", color: "var(--beige)", padding: "96px 0 120px", position: "relative", overflow: "hidden", minHeight: "calc(100vh - 76px)", display: "flex", alignItems: "center" }}>
        {/* Decorative giant glyph */}
        <div aria-hidden style={{
          position: "absolute", left: "-8%", top: "10%",
          fontFamily: "Noto Serif", fontStyle: "italic",
          fontSize: "55vw", lineHeight: 0.8,
          color: "rgba(245,240,230,0.025)",
          pointerEvents: "none",
          fontWeight: 400
        }}>
          S
        </div>
        <div aria-hidden style={{
          position: "absolute", right: -160, bottom: -160,
          width: 540, height: 540, borderRadius: "50%",
          border: "1px solid rgba(173,138,86,0.2)"
        }} />
        <div aria-hidden style={{
          position: "absolute", right: -80, bottom: -80,
          width: 380, height: 380, borderRadius: "50%",
          border: "1px solid rgba(173,138,86,0.14)"
        }} />

        <div className="container-wide" style={{ position: "relative", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div className="chip chip-on-dark" style={{ marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--bronze-soft)", display: "inline-block", animation: "pulse 2s ease in out infinite" }} />
              Coming Soon
            </div>
            <h1 className="display d-xxl" style={{ margin: 0, fontWeight: 400 }}>
              <span>The </span>
              <span className="serif" style={{ fontStyle: "italic" }}>Shop</span>
            </h1>
            <p style={{ fontSize: 22, lineHeight: 1.45, fontFamily: "Noto Serif", fontStyle: "italic", marginTop: 36, maxWidth: 540, fontWeight: 400 }}>Apparel, books, and gives-back goods designed by, and for, Black girls. Every dollar funds a weekly programming gathering.

            </p>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 24, opacity: 0.7, maxWidth: 480 }}>
              We're building something worth waiting for. Drop your email and we'll let you know the moment the doors open.
            </p>

            {signedUp ?
            <div style={{
              marginTop: 36,
              padding: "24px 28px",
              background: "rgba(173,138,86,0.18)",
              border: "1px solid var(--bronze)",
              borderRadius: 16,
              display: "flex", alignItems: "center", gap: 18,
              maxWidth: 520
            }}>
                <span style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--bronze)", color: "var(--chocolate-2)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon.Check size={20} />
                </span>
                <div>
                  <div style={{ fontFamily: "Noto Serif", fontSize: 19, fontWeight: 500 }}>You're on the list.</div>
                  <div style={{ fontSize: 14, opacity: 0.75, marginTop: 4 }}>We'll let you know the moment the shop opens.</div>
                </div>
              </div> :

            <form onSubmit={submit} style={{ marginTop: 36, display: "flex", gap: 8, maxWidth: 520, flexWrap: "wrap" }}>
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                style={{
                  flex: 1, minWidth: 240,
                  padding: "16px 20px",
                  background: "rgba(245,240,230,0.06)",
                  color: "var(--beige)",
                  border: "1px solid rgba(245,240,230,0.22)",
                  borderRadius: 999,
                  fontFamily: "inherit", fontSize: 15
                }} />
              
                <button type="submit" className="btn btn-primary">
                  Notify Me <Icon.Arrow size={16} />
                </button>
              </form>
            }
          </div>

          {/* Decorative product preview tower */}
          <div style={{ position: "relative", height: 540 }}>
            <PreviewCard label="Apparel · Fall '26" rotate="-6deg" top="0%" left="8%" color="bronze-soft" textColor="chocolate-2" />
            <PreviewCard label="Books & Resources" rotate="4deg" top="22%" left="32%" color="lavender-soft" textColor="chocolate" />
            <PreviewCard label="Gives Back Goods" rotate="-3deg" top="44%" left="6%" color="taupe" textColor="beige" />
            <PreviewCard label="Accessories" rotate="6deg" top="60%" left="38%" color="beige" textColor="chocolate" />
          </div>
        </div>

        <style>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.3); }
          }
        `}</style>
      </section>

      {/* What's coming */}
      <section className="section">
        <div className="container-wide">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32, marginBottom: 64 }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--bronze)" }}>What's Coming</div>
              <h2 className="display d-lg" style={{ margin: "20px 0 0", maxWidth: 720 }}>Designed with intention. <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>Built to give back.</span></h2>
            </div>
            <p style={{ maxWidth: 380, fontSize: 16, lineHeight: 1.6, opacity: 0.78, margin: 0 }}>
              Every item in the BGA shop will fund the work, directly. Here's a peek at the categories we're prepping for launch.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
            { t: "Apparel", body: "Tees, hoodies, and cohort gear designed in collaboration with BGA alumnae.", icon: "✦" },
            { t: "Books & Resources", body: "Workbooks, journals, and reading lists curated by Black women educators.", icon: "✦" },
            { t: "Accessories", body: "Totes, pins, mugs, and-small things made to make a Saturday feel like home.", icon: "✦" },
            { t: "Gives Back Goods", body: "Sponsor cards, group gift bundles, and holiday packages.", icon: "✦" }].
            map((c, i) =>
            <div key={i} style={{
              padding: 32,
              background: "var(--beige-deep)",
              borderRadius: 16,
              border: "1px solid var(--line-dark)",
              minHeight: 240,
              display: "flex", flexDirection: "column", justifyContent: "space-between"
            }}>
                <div style={{ fontSize: 28, color: "var(--bronze)", fontFamily: "Noto Serif" }}>{c.icon}</div>
                <div>
                  <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 24, fontWeight: 500 }}>{c.t}</h3>
                  <p style={{ margin: "12px 0 0", fontSize: 14.5, lineHeight: 1.55, opacity: 0.78 }}>{c.body}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Donate CTA, until shop is live */}
      <section className="section" style={{ background: "var(--beige-deep)" }}>
        <div className="container-wide">
          <div style={{
            background: "var(--chocolate)",
            color: "var(--beige)",
            borderRadius: 28,
            padding: "72px 64px",
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: 48,
            alignItems: "center"
          }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--bronze-soft)", marginBottom: 20 }}>Until the doors open…</div>
              <h2 className="display d-md" style={{ margin: 0 }}>The fastest way to support BGA <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>is a direct gift.</span></h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, marginTop: 20, opacity: 0.8, maxWidth: 540 }}>
                Every dollar funds The Elite Eight Ivy League tour, the HBCU tour, and the Saturday rooms our girls call home.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }}>
              <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 24px" }} onClick={() => { onNavigate("home"); setTimeout(() => { const el = document.getElementById("donate-widget"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }, 450); }}>
                Donate Now <Icon.Heart size={16} />
              </button>
              <button className="btn btn-outline-light" style={{ width: "100%", justifyContent: "center", padding: "16px 24px" }} onClick={() => onNavigate("programming")}>
                Explore Programs
              </button>
            </div>
          </div>
        </div>
      </section>
    </>);

}

function PreviewCard({ label, rotate, top, left, color, textColor }) {
  return (
    <div style={{
      position: "absolute",
      top, left,
      width: 220, height: 280,
      transform: `rotate(${rotate})`,
      background: `var(--${color})`,
      color: `var(--${textColor})`,
      borderRadius: 16,
      padding: 24,
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      boxShadow: "0 24px 60px -20px rgba(0,0,0,0.5)",
      transition: "transform 0.4s ease"
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(0deg) scale(1.04)`}
    onMouseLeave={(e) => e.currentTarget.style.transform = `rotate(${rotate})`}>
      
      <div style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, opacity: 0.7 }}>BGA Shop</div>
      <div>
        <div style={{ fontFamily: "Noto Serif", fontSize: 22, lineHeight: 1.2, fontWeight: 500 }}>{label}</div>
        <div style={{ marginTop: 12, fontSize: 12, opacity: 0.65 }}>Coming soon</div>
      </div>
    </div>);

}

window.ShopPage = ShopPage;