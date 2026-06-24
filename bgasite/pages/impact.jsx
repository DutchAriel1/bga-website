/* Impact & Financial Transparency — donor-facing accountability page.
   Outcomes, where-your-dollar-goes, a giving ladder, and transparency documents.
   Core BGA brand (chocolate / beige / lavender / bronze). */

function ImpactPage({ onNavigate }) {
  return (
    <div data-screen-label="Impact & Transparency">
      <PageHero
        eyebrow="Impact & Transparency"
        title={<>Every dollar, <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>accounted for.</span></>}
        kicker="We measure what matters and show our math. Here is what your support builds, where it goes, and how to give with confidence."
      />
      <ImpactOutcomes />
      <ImpactAllocation />
      <ImpactGivingLadder onNavigate={onNavigate} />
      <ImpactTransparency onNavigate={onNavigate} />
    </div>
  );
}

/* ---- OUTCOMES ---- */
function ImpactOutcomes() {
  const stats = [
    { n: "300+", l: "Girls served", s: "across Colorado since founding", c: "bronze" },
    { n: "94%", l: "College graduation", s: "among multi-year cohort scholars", c: "lavender" },
    { n: "6", l: "Programs", s: "from middle school through college", c: "taupe" },
  ];
  return (
    <section className="section">
      <div className="container-wide">
        <div className="eyebrow" style={{ color: "var(--bronze)" }}>The Outcomes</div>
        <h2 className="display d-lg" style={{ margin: "20px 0 16px", maxWidth: 720 }}>Results, not just <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>activity.</span></h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: 620, margin: "0 0 52px" }}>
          We track each girl as a person, not a headcount. These are the numbers we hold ourselves to,
          reported annually and verified against our program records.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "var(--beige-deep)", border: "1px solid var(--line-dark)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 8, minHeight: 220 }}>
              <div className="display" style={{ fontSize: "clamp(40px, 4vw, 60px)", fontWeight: 400, color: `var(--${s.c})`, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "Noto Serif", fontSize: 20, fontWeight: 500, marginTop: 6 }}>{s.l}</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.7, marginTop: "auto" }}>{s.s}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12.5, opacity: 0.55, marginTop: 20, fontStyle: "italic" }}>
          Figures reflect program-year reporting. A full methodology is available in our annual report below.
        </p>
      </div>
    </section>
  );
}

/* ---- ALLOCATION ---- */
function ImpactAllocation() {
  const alloc = [
    { label: "Programming & direct services", pct: 82, c: "var(--bronze)" },
    { label: "Fundraising", pct: 11, c: "var(--lavender)" },
    { label: "Administration", pct: 7, c: "var(--taupe)" },
  ];
  return (
    <section className="section" style={{ background: "var(--chocolate-2)", color: "var(--beige)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--bronze-soft)" }}>Where your dollar goes</div>
            <h2 className="display d-lg" style={{ margin: "20px 0 24px" }}>82&cent; of every dollar <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>reaches a girl.</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, opacity: 0.82, margin: 0 }}>
              We run lean on purpose. The vast majority of every gift funds Saturday sessions, college
              tours, stipends, and the advocates who show up, not overhead.
            </p>
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 20 }}>
              {alloc.map((a, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, marginBottom: 8 }}>
                    <span style={{ fontWeight: 500 }}>{a.label}</span>
                    <span style={{ fontFamily: "Noto Serif", fontStyle: "italic" }}>{a.pct}%</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 999, background: "rgba(245,240,230,0.12)", overflow: "hidden" }}>
                    <div style={{ width: `${a.pct}%`, height: "100%", borderRadius: 999, background: a.c }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", placeItems: "center" }}>
            <DonutChart segments={alloc} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DonutChart({ segments }) {
  const size = 300, stroke = 46, r = (size - stroke) / 2, c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(245,240,230,0.1)" strokeWidth={stroke} />
      {segments.map((s, i) => {
        const len = (s.pct / 100) * c;
        const el = (
          <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.c} strokeWidth={stroke}
            strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

/* ---- GIVING LADDER ---- */
function ImpactGivingLadder({ onNavigate }) {
  const tiers = [
    { amt: "$25", t: "A book in her hands", d: "Stocks the Black Girl Hair Project library with a title that reflects her crown.", c: "taupe" },
    { amt: "$50", t: "A Saturday of programming", d: "Funds one girl's seat at a full Saturday session, materials and breakfast included.", c: "bronze" },
    { amt: "$250", t: "A month of mentorship", d: "Sustains a cohort's advocate-led mentoring for a full month.", c: "lavender", featured: true },
    { amt: "$1,000", t: "A seat on the Elite Eight", d: "Sends a scholar on the Ivy League tour, travel, lodging, and admissions access.", c: "chocolate" },
  ];
  return (
    <section className="section">
      <div className="container-wide">
        <div className="eyebrow" style={{ color: "var(--bronze)" }}>Give with intention</div>
        <h2 className="display d-lg" style={{ margin: "20px 0 16px", maxWidth: 720 }}>Choose what your gift <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>becomes.</span></h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: 600, margin: "0 0 48px" }}>
          Every level is tied to something real a girl receives. Give once, or make it monthly to
          multiply the impact.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22 }}>
          {tiers.map((t, i) => (
            <div key={i} style={{
              background: t.featured ? "var(--chocolate)" : "var(--beige-deep)",
              color: t.featured ? "var(--beige)" : "var(--ink)",
              border: t.featured ? "none" : "1px solid var(--line-dark)",
              borderRadius: 20, padding: 30, display: "flex", flexDirection: "column", gap: 12, minHeight: 280,
              position: "relative",
            }}>
              {t.featured && <div style={{ position: "absolute", top: 16, right: 16, fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: "var(--bronze-soft)" }}>Most loved</div>}
              <div className="display" style={{ fontSize: 42, fontWeight: 400, color: t.featured ? "var(--bronze-soft)" : `var(--${t.c})`, lineHeight: 1 }}>{t.amt}</div>
              <div style={{ fontFamily: "Noto Serif", fontSize: 21, fontWeight: 500 }}>{t.t}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: t.featured ? 0.85 : 0.72, margin: 0 }}>{t.d}</p>
              <button onClick={() => { onNavigate("home"); setTimeout(() => { const el = document.getElementById("donate-widget"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }, 450); }} className={t.featured ? "btn btn-primary" : "btn btn-outline-dark"} style={{ marginTop: "auto", justifyContent: "center" }}>
                Give {t.amt}
              </button>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 28, textAlign: "center" }}>
          <button onClick={() => { onNavigate("home"); setTimeout(() => { const el = document.getElementById("donate-widget"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }, 450); }} className="btn btn-dark">Give another amount <Icon.Arrow size={16} /></button>
        </div>
      </div>
    </section>
  );
}

/* ---- TRANSPARENCY ---- */
function ImpactTransparency({ onNavigate }) {
  const docs = [
    { t: "Annual Report 2025", d: "Outcomes, stories, and program highlights from the past year.", icon: <Icon.Book size={22} /> },
    { t: "Form 990", d: "Our most recent IRS filing, available on request and via GuideStar.", icon: <Icon.FileText size={22} /> },
    { t: "Financial Statements", d: "Income, expenses, and fund allocation, reviewed annually.", icon: <Icon.FileText size={22} /> },
  ];
  return (
    <section className="section" style={{ background: "var(--beige-deep)" }}>
      <div className="container-wide">
        <div className="eyebrow" style={{ color: "var(--taupe)" }}>Open books</div>
        <h2 className="display d-lg" style={{ margin: "20px 0 16px", maxWidth: 720 }}>Transparency you can <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>verify.</span></h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: 620, margin: "0 0 44px" }}>
          The Black Girl Advocate is a registered 501(c)(3) nonprofit (EIN 99-0725880). Contributions
          are tax-deductible to the fullest extent allowed by law. Our documents are available below.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {docs.map((d, i) => (
            <div key={i} style={{ background: "var(--beige)", border: "1px solid var(--line-dark)", borderRadius: 18, padding: 28, display: "flex", flexDirection: "column", gap: 14, minHeight: 200 }}>
              <span style={{ width: 48, height: 48, borderRadius: 12, background: "var(--chocolate)", color: "var(--bronze-soft)", display: "grid", placeItems: "center" }}>{d.icon}</span>
              <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 21, fontWeight: 500 }}>{d.t}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.72, margin: 0 }}>{d.d}</p>
              <a href={`mailto:president@theblackgirladvocate.org?subject=${encodeURIComponent("Document request: " + d.t)}`} style={{ marginTop: "auto", alignSelf: "flex-start", background: "none", border: "none", padding: 0, cursor: "pointer", color: "var(--bronze)", fontFamily: "inherit", fontSize: 14, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6, textDecoration: "none" }}>
                Request document <Icon.Arrow size={14} />
              </a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 36, padding: "24px 28px", background: "var(--beige)", border: "1px solid var(--line-dark)", borderRadius: 16, fontSize: 14.5, lineHeight: 1.6, opacity: 0.85 }}>
          <strong>A note on accountability:</strong> these figures and documents are maintained by our
          board treasurer and reviewed annually. To request current financials or ask a question about
          how funds are used, <a href="mailto:president@theblackgirladvocate.org?subject=Financial%20records%20request" style={{ background: "none", border: "none", padding: 0, color: "var(--bronze)", textDecoration: "underline", cursor: "pointer", font: "inherit" }}>contact our team</a>.
        </div>
      </div>
    </section>
  );
}

window.ImpactPage = ImpactPage;
