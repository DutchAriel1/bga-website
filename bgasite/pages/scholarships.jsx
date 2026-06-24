/* Scholarships directory page, BGA branded.
   Filter by focus + grade level, free text search, results in card grid.
*/
function ScholarshipsPage({ onNavigate }) {
  const [focus, setFocus] = React.useState("all");
  const [level, setLevel] = React.useState("all");
  const [query, setQuery] = React.useState("");

  const all = window.SCHOLARSHIPS || [];
  const focuses = window.SCHOLARSHIP_FOCUS || [];
  const levels = window.SCHOLARSHIP_LEVELS || [];

  const filtered = all.filter((s) => {
    if (focus !== "all" && !s.focus.includes(focus)) return false;
    if (level !== "all" && !s.level.includes(level)) return false;
    if (query) {
      const q = query.toLowerCase();
      const blob = (s.name + " " + s.description + " " + s.eligibility).toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });

  return (
    <>
      <PageHero
        eyebrow="College Scholarships"
        title={<>The <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>directory</span> we wish we'd had.</>}
        kicker="Curated scholarships for Black girls, Colorado students, and high earning alternatives to traditional college. Updated as new awards open. If you know of one we should add, tell us."
      />

      {/* Filters */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div style={{
            background: "var(--beige-deep)",
            borderRadius: 20,
            padding: "32px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}>
            <div>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, eligibility, or focus..."
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  borderRadius: 12,
                  border: "1px solid var(--line-dark)",
                  background: "var(--beige)",
                  fontSize: 15.5,
                  fontFamily: "inherit",
                  color: "var(--chocolate)",
                  outline: "none",
                }}
              />
            </div>
            <div>
              <div className="eyebrow" style={{ color: "var(--taupe)", marginBottom: 14 }}>Focus</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {focuses.map((f) => (
                  <FilterChip key={f.id} active={focus === f.id} onClick={() => setFocus(f.id)}>{f.label}</FilterChip>
                ))}
              </div>
            </div>
            <div>
              <div className="eyebrow" style={{ color: "var(--taupe)", marginBottom: 14 }}>Grade Level</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {levels.map((l) => (
                  <FilterChip key={l.id} active={level === l.id} onClick={() => setLevel(l.id)}>{l.label}</FilterChip>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500, color: "var(--chocolate)" }}>
              {filtered.length} {filtered.length === 1 ? "scholarship" : "scholarships"}
            </div>
            <div style={{ fontSize: 13, color: "var(--taupe)" }}>
              Updated regularly · Always verify deadlines on the funder's site
            </div>
          </div>

          <div style={{
            marginTop: 24,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: 20,
          }}>
            {filtered.map((s) => (
              <ScholarshipCard key={s.id} s={s} focusList={focuses} />
            ))}
            {filtered.length === 0 && (
              <div style={{
                gridColumn: "1 / -1",
                padding: "64px 32px",
                textAlign: "center",
                background: "var(--beige-deep)",
                borderRadius: 16,
                color: "var(--taupe)",
              }}>
                <div style={{ fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 22, marginBottom: 12 }}>No scholarships match those filters.</div>
                <div style={{ fontSize: 14.5 }}>Try clearing a filter or expanding your search.</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Submit a scholarship CTA */}
      <section className="section" style={{ background: "var(--chocolate-2)", color: "var(--beige)" }}>
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--lavender-soft)", marginBottom: 20 }}>Help us grow this directory</div>
            <h2 className="display d-lg" style={{ margin: 0 }}>Know a scholarship <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>we should add?</span></h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 24, opacity: 0.82, maxWidth: 540 }}>
              We add new scholarships every cycle. If you administer one, or your daughter received one, send it our way and we'll vet and publish it.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button className="btn btn-primary" style={{ justifyContent: "center" }} onClick={() => onNavigate("contact")}>Submit a Scholarship <Icon.Arrow size={16} /></button>
            <button className="btn btn-outline-light" style={{ justifyContent: "center" }} onClick={() => onNavigate("contact")}>Ask Senior Suite for help</button>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterChip({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        borderRadius: 999,
        border: active ? "1.5px solid var(--chocolate)" : "1px solid var(--line-dark)",
        background: active ? "var(--chocolate)" : "var(--beige)",
        color: active ? "var(--beige)" : "var(--chocolate)",
        fontFamily: "inherit",
        fontSize: 13.5,
        fontWeight: active ? 600 : 500,
        cursor: "pointer",
        transition: "all 0.15s ease",
      }}
    >
      {children}
    </button>
  );
}

function ScholarshipCard({ s, focusList }) {
  const focusLabels = s.focus.map((id) => (focusList.find((f) => f.id === id) || {}).label).filter(Boolean);
  return (
    <article style={{
      background: "var(--beige)",
      border: "1px solid var(--line-dark)",
      borderRadius: 18,
      padding: 28,
      display: "flex",
      flexDirection: "column",
      gap: 16,
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px -12px rgba(61,44,41,0.15)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {focusLabels.slice(0, 2).map((l) => (
          <span key={l} style={{
            fontSize: 10.5,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 600,
            padding: "5px 10px",
            borderRadius: 999,
            background: "var(--lavender-soft)",
            color: "var(--chocolate-2)",
          }}>{l}</span>
        ))}
      </div>
      <h3 style={{
        margin: 0,
        fontFamily: "Noto Serif",
        fontSize: 24,
        fontWeight: 500,
        letterSpacing: "-0.01em",
        color: "var(--chocolate)",
        lineHeight: 1.2,
      }}>{s.name}</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <DetailKV k="Amount" v={s.amount} />
        <DetailKV k="Deadline" v={s.deadline} />
      </div>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--chocolate)", opacity: 0.78 }}>
        {s.description}
      </p>
      <div style={{ fontSize: 13, color: "var(--taupe)", lineHeight: 1.5, paddingTop: 14, borderTop: "1px solid var(--line-dark)" }}>
        <span style={{ fontWeight: 600, color: "var(--chocolate)" }}>Eligibility: </span>{s.eligibility}
      </div>
      <a
        href={s.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          marginTop: "auto",
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          fontSize: 14,
          fontWeight: 600,
          color: "var(--lavender)",
          textDecoration: "none",
        }}
      >
        Visit funder & apply <Icon.Arrow size={14} />
      </a>
    </article>
  );
}

function DetailKV({ k, v }) {
  return (
    <div>
      <div style={{ fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "var(--taupe)", marginBottom: 4 }}>{k}</div>
      <div style={{ fontSize: 14.5, color: "var(--chocolate)", fontWeight: 500 }}>{v}</div>
    </div>
  );
}

window.ScholarshipsPage = ScholarshipsPage;
