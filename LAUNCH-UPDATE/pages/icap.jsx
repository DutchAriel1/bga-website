/* Senior Suite — ICAP for Post-Secondary Success. Public page, program of The Black Girl Advocate.
   Colorado ICAP (Individual Career and Academic Plan) aligned: self-assessment, postsecondary path mapping,
   application timeline, portfolio/milestone tracking, and the funding directory.
   Brand: Suite Pink #F2ACCE, Plum Jam #5C1250, Buttercream #F7D97D, Pool Blue #7DCFE0, Apple Green #A9CC5B,
   Notebook Cream #FFF8EC, Chocolate Ink #2B211D. Headlines: Fraunces. Body: Nunito Sans. Accent: Caveat.
*/
const ICAP = {
  pink: "#F2ACCE", plum: "#5C1250", butter: "#F7D97D", pool: "#7DCFE0", green: "#A9CC5B",
  cream: "#FFF8EC", ink: "#2B211D", white: "#FFFFFF"
};

function ICStar({ size = 20, color = ICAP.plum }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 1l2.6 7.6L22 11l-7.4 2.4L12 21l-2.6-7.6L2 11l7.4-2.4z" /></svg>;
}
function ICEyebrow({ children, color = ICAP.plum }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: ICAP.white, border: `1.5px solid ${color}`, borderRadius: 999, padding: "6px 16px", fontFamily: "'Nunito Sans', sans-serif", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color }}>
      <ICStar size={13} color={color} /> {children}
    </div>);
}
function ICCard({ children, tilt = 0, bg = ICAP.white, style = {} }) {
  return (
    <div style={{ background: bg, border: `2px solid ${ICAP.ink}`, borderRadius: 18, padding: "26px 28px", transform: `rotate(${tilt}deg)`, boxShadow: "6px 6px 0 rgba(43,33,29,0.1)", ...style }}>
      {children}
    </div>);
}

const SELF_ASSESSMENT = [
{ t: "Interests", d: "What subjects, causes, or problems pull your attention even outside of class? Career clusters map from here, not the other way around." },
{ t: "Strengths", d: "What do teachers, coaches, or family already trust you to do well? Name three, with a specific example of each." },
{ t: "Values", d: "What does a good workday look like: people-facing or heads-down, structured or flexible, local or well-traveled?" },
{ t: "Constraints", d: "Be honest about cost, distance from family, and timeline. A plan that ignores these isn't a plan." }];

const PATHS = [
{ n: "01", t: "College, 2-Year or 4-Year", bg: ICAP.pool, d: "An associate degree at community college, a bachelor's at a 4-year school, or both in sequence through Colorado's guaranteed transfer pathways. Best when the target career requires a degree or licensure tied to one (medicine, law, engineering, teaching).", cost: "$4K\u2013$12K for an AA; $40K\u2013$240K sticker for a 4-year, often far less with aid", time: "2 years (AA) or 4 years (BA/BS)" },
{ n: "02", t: "Rolex Watchmaking Training Center", bg: ICAP.butter, d: "A precision-trades pathway backed by Rolex, training WOSTEP-certified watchmakers. BGA has a direct application relationship with this program for Senior Suite scholars, a high-earning skilled trade outside a traditional degree.", cost: "Tuition assistance available, apply directly", time: "Program length set by the Training Center" },
{ n: "03", t: "Stock Broker / SIE Licensing Path", bg: ICAP.green, d: "The Securities Industry Essentials (SIE) exam is the entry credential for a career in finance and brokerage, no college degree required to sit for it. Pair it with a sponsoring firm for the Series 7 or 63 to practice.", cost: "SIE exam fee is under $100; prep materials vary", time: "Most students prep 6\u201312 weeks before sitting the exam" }];

const TIMELINE = [
{ m: "August \u2013 September", items: ["Finalize college/path list", "Request transcripts + letters of recommendation", "QuestBridge and Coca-Cola Scholars applications due Sept 30"] },
{ m: "October", items: ["File the FAFSA the day it opens (Oct 1)", "Daniels Scholarship and Tom Joyner Foundation deadlines", "Finish early action/early decision essays"] },
{ m: "November", items: ["Submit early action/early decision applications", "Elks Most Valuable Student deadline", "Start regular-decision essays"] },
{ m: "December \u2013 January", items: ["Submit regular decision applications", "CSS Profile if required by your schools", "Ron Brown Scholar and Jackie Robinson Foundation deadlines"] },
{ m: "February \u2013 March", items: ["Compare financial aid award letters line by line", "Local and Colorado-specific scholarship deadlines cluster here", "Visit top-choice campuses if possible"] },
{ m: "April \u2013 May", items: ["Decision Day, May 1 for most schools", "Send final transcript to your chosen school", "Thank every recommender and mentor by name"] }];

const MILESTONES = [
"Resume documenting activities, jobs, and leadership since 9th grade",
"Personal statement / essay draft, reviewed by an adult who isn't family",
"FAFSA and, if required, CSS Profile submitted",
"At least 3 scholarship applications submitted beyond the college application itself",
"A financial aid award comparison, side by side, before deciding",
"A named backup plan if the first-choice path doesn't come through"];

function ICAPPage({ onNavigate }) {
  const all = window.SCHOLARSHIPS || [];
  const [focus, setFocus] = React.useState("all");
  const focuses = window.SCHOLARSHIP_FOCUS || [];
  const filtered = focus === "all" ? all : all.filter((s) => s.focus.includes(focus));

  return (
    <>
      <style>{`
        .ic-page { font-family: 'Nunito Sans', sans-serif; background: ${ICAP.cream}; }
        .ic-h1, .ic-h2, .ic-h3 { font-family: 'Fraunces', serif; font-weight: 900; }
        .ic-hand { font-family: 'Caveat', cursive; }
        .ic-page a { color: ${ICAP.plum}; }
        .ic-page a:hover { color: #7d1670; }
      `}</style>
      <div className="ic-page">
        <section style={{ background: ICAP.plum, color: ICAP.cream, padding: "clamp(56px,7vw,92px) 0 clamp(48px,6vw,72px)" }}>
          <div className="container-wide">
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 22 }}>
              <span style={{ background: ICAP.cream, color: ICAP.plum, borderRadius: 999, padding: "6px 16px", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>A Program of The Black Girl Advocate</span>
              <span style={{ background: ICAP.pink, color: ICAP.ink, borderRadius: 999, padding: "6px 16px", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>ICAP for Colorado Seniors</span>
            </div>
            <h1 className="ic-h1" style={{ margin: 0, fontSize: "clamp(44px,6.5vw,84px)", lineHeight: 0.98 }}>Senior Suite</h1>
            <p style={{ fontSize: "clamp(18px,2vw,24px)", fontWeight: 700, margin: "10px 0 0", opacity: 0.92 }}>for Post-Secondary Success</p>
            <p className="ic-hand" style={{ fontSize: 28, color: ICAP.butter, margin: "12px 0 0" }}>her Individual Career and Academic Plan, built out in full</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, maxWidth: 640, margin: "22px 0 0", opacity: 0.88 }}>
              Colorado requires every student to leave high school with an Individual Career and Academic Plan. This page is that plan, done right: know yourself, map every real path forward, build the senior-year timeline, track the milestones, and fund it.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <button className="btn" style={{ background: ICAP.pink, color: ICAP.ink, fontWeight: 800 }} onClick={() => { const el = document.getElementById("ic-directory"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }}>
                Jump to scholarships &amp; grants
              </button>
            </div>
          </div>
        </section>

        {/* Self-assessment */}
        <section style={{ padding: "clamp(48px,6vw,72px) 0" }}>
          <div className="container-wide">
            <ICEyebrow>Step One: Self-Assessment</ICEyebrow>
            <h2 className="ic-h2" style={{ fontSize: "clamp(28px,3.4vw,42px)", color: ICAP.ink, margin: "16px 0 0" }}>Know yourself before you pick a path.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 20, marginTop: 28 }}>
              {SELF_ASSESSMENT.map((s, i) => (
                <ICCard key={s.t} tilt={i % 2 === 0 ? -0.5 : 0.5}>
                  <h3 className="ic-h3" style={{ fontSize: 19, color: ICAP.plum, margin: 0 }}>{s.t}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: ICAP.ink, opacity: 0.82, margin: "10px 0 0" }}>{s.d}</p>
                </ICCard>
              ))}
            </div>
          </div>
        </section>

        {/* Path mapping */}
        <section style={{ padding: "0 0 clamp(48px,6vw,72px)" }}>
          <div className="container-wide">
            <ICEyebrow color={ICAP.ink}>Step Two: Map Every Path</ICEyebrow>
            <h2 className="ic-h2" style={{ fontSize: "clamp(28px,3.4vw,42px)", color: ICAP.ink, margin: "16px 0 0" }}>Three real ways forward, not just one.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: 22, marginTop: 28 }}>
              {PATHS.map((p) => (
                <ICCard key={p.n} bg={p.bg}>
                  <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 30, color: ICAP.ink, opacity: 0.4 }}>{p.n}</div>
                  <h3 className="ic-h3" style={{ fontSize: 20, color: ICAP.ink, margin: "6px 0 0" }}>{p.t}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.55, color: ICAP.ink, opacity: 0.82, margin: "10px 0 14px" }}>{p.d}</p>
                  <div style={{ fontSize: 12, fontWeight: 700, color: ICAP.ink, opacity: 0.7 }}>Cost: {p.cost}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: ICAP.ink, opacity: 0.7, marginTop: 2 }}>Time: {p.time}</div>
                </ICCard>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "0 0 clamp(48px,6vw,72px)" }}>
          <div className="container-wide">
            <ICEyebrow>Step Three: The Senior-Year Timeline</ICEyebrow>
            <h2 className="ic-h2" style={{ fontSize: "clamp(28px,3.4vw,42px)", color: ICAP.ink, margin: "16px 0 0" }}>Month by month, so nothing slips.</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 28 }}>
              {TIMELINE.map((row) => (
                <div key={row.m} style={{ background: ICAP.white, border: `2px solid ${ICAP.ink}`, borderRadius: 16, padding: "20px 24px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 20 }}>
                  <div className="ic-h3" style={{ fontSize: 17, color: ICAP.plum }}>{row.m}</div>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                    {row.items.map((it) => (
                      <li key={it} style={{ fontSize: 14, lineHeight: 1.5, color: ICAP.ink, opacity: 0.85, paddingLeft: 18, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0 }}>&bull;</span>{it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section style={{ padding: "0 0 clamp(48px,6vw,72px)" }}>
          <div className="container-wide">
            <ICEyebrow color={ICAP.ink}>Step Four: Portfolio &amp; Milestones</ICEyebrow>
            <h2 className="ic-h2" style={{ fontSize: "clamp(28px,3.4vw,42px)", color: ICAP.ink, margin: "16px 0 0" }}>What should be true by graduation.</h2>
            <div style={{ background: ICAP.white, border: `2px solid ${ICAP.ink}`, borderRadius: 18, padding: "28px 30px", marginTop: 24, display: "flex", flexDirection: "column", gap: 14 }}>
              {MILESTONES.map((m) => (
                <label key={m} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 15, lineHeight: 1.5, color: ICAP.ink }}>
                  <input type="checkbox" style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0, accentColor: ICAP.plum }} />
                  {m}
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* Directory */}
        <section id="ic-directory" style={{ padding: "0 0 clamp(56px,7vw,80px)" }}>
          <div className="container-wide">
            <ICEyebrow>Step Five: Fund It</ICEyebrow>
            <h2 className="ic-h2" style={{ fontSize: "clamp(28px,3.4vw,42px)", color: ICAP.ink, margin: "16px 0 0" }}>The directory we wish we'd had.</h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: ICAP.ink, opacity: 0.78, maxWidth: 620, margin: "12px 0 0" }}>
              Scholarships, need-based grants, and merit awards curated for Black girls, Colorado students, and paths beyond a traditional four-year degree.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 24 }}>
              {focuses.map((f) => (
                <button key={f.id} onClick={() => setFocus(f.id)} style={{ padding: "8px 16px", borderRadius: 999, border: `1.5px solid ${ICAP.ink}`, background: focus === f.id ? ICAP.plum : ICAP.white, color: focus === f.id ? ICAP.cream : ICAP.ink, fontFamily: "inherit", fontSize: 13, fontWeight: focus === f.id ? 700 : 600, cursor: "pointer" }}>{f.label}</button>
              ))}
            </div>
            <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))", gap: 18 }}>
              {filtered.map((s) => (
                <article key={s.id} style={{ background: ICAP.white, border: `2px solid ${ICAP.ink}`, borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
                  <h3 className="ic-h3" style={{ margin: 0, fontSize: 18, color: ICAP.plum, lineHeight: 1.2 }}>{s.name}</h3>
                  <div style={{ fontSize: 13, color: ICAP.ink, opacity: 0.75 }}><strong>{s.amount}</strong> &middot; {s.deadline}</div>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.5, color: ICAP.ink, opacity: 0.8 }}>{s.description}</p>
                  <a href={s.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: 700 }}>Visit funder &amp; apply &rarr;</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Submit CTA */}
        <section style={{ background: ICAP.ink, color: ICAP.cream, padding: "clamp(40px,5vw,56px) 0" }}>
          <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40, alignItems: "center" }}>
            <div>
              <ICEyebrow color={ICAP.pink}>Help us grow this directory</ICEyebrow>
              <h2 className="ic-h2" style={{ fontSize: "clamp(24px,3vw,34px)", margin: "14px 0 0" }}>Know a scholarship <span className="ic-hand" style={{ color: ICAP.butter, fontWeight: 700 }}>we should add?</span></h2>
            </div>
            <button className="btn" style={{ background: ICAP.pink, color: ICAP.ink, fontWeight: 800, justifyContent: "center" }} onClick={() => onNavigate("contact")}>Submit a Scholarship</button>
          </div>
        </section>
      </div>
    </>);
}

window.ICAPPage = ICAPPage;
