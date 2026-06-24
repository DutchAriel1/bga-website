/* The Elite Eight, Ivy League College Tour hub.
   A luxury, coastal-prep brand world (Oak Bluffs × Ralph Lauren heritage):
   deep navy, camel, cream, soft lavender, forest green, antique gold. */

const EE = {
  navy: "#16243F",
  navyDeep: "#0E1A30",
  camel: "#C2945B",
  cream: "#F6EFE0",
  creamHi: "#FBF7EE",
  lavender: "#D7D0E4",
  forest: "#244B36",
  gold: "#BE8E2E",
  goldSoft: "#D9B872",
  ink: "#2A2A2A"
};

const eeFonts = {
  serif: '"Cormorant Garamond", "Noto Serif", Georgia, serif',
  sans: '"Montserrat", "Helvetica Neue", system-ui, sans-serif',
  script: '"Pinyon Script", "Cormorant Garamond", cursive'
};

/* ============ LIGHTHOUSE CREST ============ */
function LighthouseCrest({ size = 96, color = EE.gold }) {
  return (
    <svg width={size} height={size * 1.16} viewBox="0 0 120 140" fill="none" aria-hidden>
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* laurel sprigs */}
        <path d="M40 30 Q22 40 20 66 Q19 86 30 100" fill="none" />
        <path d="M80 30 Q98 40 100 66 Q101 86 90 100" fill="none" />
        {[0, 1, 2, 3, 4].map((i) =>
        <g key={`l${i}`}>
            <path d={`M${21 + i * 1.5} ${50 + i * 11} q -9 -3 -12 -10`} fill="none" />
            <path d={`M${99 - i * 1.5} ${50 + i * 11} q 9 -3 12 -10`} fill="none" />
          </g>
        )}
        {/* shield */}
        <path d="M60 18 L92 26 L92 64 Q92 92 60 108 Q28 92 28 64 L28 26 Z" fill="none" />
        {/* lighthouse */}
        <path d="M54 46 L52 78 L68 78 L66 46 Z" fill="none" />
        <path d="M51 78 L69 78 L71 84 L49 84 Z" fill="none" />
        <path d="M55 46 L65 46 L63 40 L57 40 Z" fill="none" />
        <path d="M57 40 L63 40 L62 35 L58 35 Z" fill="none" />
        <circle cx="60" cy="32" r="2.4" fill={color} stroke="none" />
        {/* light rays */}
        <path d="M54 32 L46 29 M66 32 L74 29" fill="none" />
        {/* stripes + door */}
        <path d="M53 58 L67 58 M53.5 68 L66.5 68" fill="none" strokeWidth="1.4" />
        {/* waves */}
        <path d="M40 90 q 6 -5 12 0 t 12 0 t 12 0" fill="none" strokeWidth="1.5" />
      </g>
    </svg>);

}

/* small sailboat motif used in the brand footer rule */
function Sailboat({ size = 22, color = EE.gold }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden>
      <g stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 L20 26 M20 8 L31 26 L20 26 Z" fill="none" />
        <path d="M18 26 L9 26 L18 16 Z" fill="none" />
        <path d="M7 30 Q20 36 33 30" fill="none" />
      </g>
    </svg>);

}

/* decorative gold rule with a centered diamond */
function GoldRule({ width = 220, color = EE.gold }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, width }}>
      <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, transparent, ${color})` }} />
      <span style={{ width: 6, height: 6, transform: "rotate(45deg)", background: color }} />
      <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>);

}

/* ============ PAGE ============ */
function EliteEightPage({ onNavigate }) {
  return (
    <div style={{ background: EE.cream, color: EE.navy, fontFamily: eeFonts.sans }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600&family=Pinyon+Script&display=swap');
        .ee-serif { font-family: ${eeFonts.serif}; }
        .ee-script { font-family: ${eeFonts.script}; }
        .ee-eyebrow {
          font-family: ${eeFonts.sans}; font-weight: 500; font-size: 12px;
          letter-spacing: 0.34em; text-transform: uppercase;
        }
        .ee-h1 { font-family: ${eeFonts.serif}; font-weight: 600; line-height: 0.98; letter-spacing: 0.04em; }
        .ee-h2 { font-family: ${eeFonts.serif}; font-weight: 600; line-height: 1.05; letter-spacing: 0.02em; }
        .ee-body { font-family: ${eeFonts.sans}; font-weight: 300; line-height: 1.75; }
        .ee-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 34px; border: 1.5px solid ${EE.gold};
          font-family: ${eeFonts.sans}; font-weight: 500; font-size: 12px;
          letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer;
          background: transparent; color: ${EE.navy};
          transition: background .25s ease, color .25s ease, transform .2s ease;
        }
        .ee-btn:hover { transform: translateY(-2px); }
        .ee-btn-gold { background: ${EE.gold}; color: ${EE.cream}; }
        .ee-btn-gold:hover { background: ${EE.navy}; border-color: ${EE.navy}; color: ${EE.creamHi}; }
        .ee-btn-navy { background: ${EE.navy}; color: ${EE.creamHi}; border-color: ${EE.navy}; }
        .ee-btn-navy:hover { background: ${EE.gold}; border-color: ${EE.gold}; color: ${EE.navy}; }
        .ee-btn-outline-cream { color: ${EE.creamHi}; border-color: ${EE.goldSoft}; }
        .ee-btn-outline-cream:hover { background: ${EE.creamHi}; color: ${EE.navy}; border-color: ${EE.creamHi}; }
        .ee-link { color: ${EE.gold}; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color .2s; font-weight: 500; }
        .ee-link:hover { border-color: ${EE.gold}; }
        .ee-photo {
          position: relative; background: ${EE.navyDeep};
          background-size: cover; background-position: center;
          overflow: hidden;
        }
        .ee-photo::after {
          content: ""; position: absolute; inset: 12px;
          border: 1px solid rgba(217,184,114,0.5); pointer-events: none;
        }
      `}</style>

      <EEHero onNavigate={onNavigate} />
      <EEIntro />
      <EESchools />
      <EEExperience />
      <EEPlanningGuide />
      <EEItinerary />
      <EEEligibility />
      <EEJourney onNavigate={onNavigate} />
      <EEInvestment onNavigate={onNavigate} />
      <EEFaq />
      <EECta onNavigate={onNavigate} />
      <EEFooterRule />
    </div>);

}

/* ====================================================================
   HERO
   ==================================================================== */
function EEHero({ onNavigate }) {
  return (
    <section style={{ background: EE.navy, color: EE.creamHi, position: "relative", overflow: "hidden" }}>
      {/* top hairline */}
      <div style={{ height: 6, background: EE.navyDeep }} />
      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${EE.gold}, transparent)` }} />

      <div className="container-wide" style={{ padding: "76px 0 92px", textAlign: "center", position: "relative" }}>
        {/* faint coastal photo band behind crest */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 0%, rgba(190,142,46,0.16), transparent 60%)",
          pointerEvents: "none"
        }} />

        <div style={{ position: "relative" }}>
          <h1 className="ee-h1" style={{
            margin: 0, color: EE.creamHi,
            fontSize: "clamp(54px, 9vw, 138px)",
            fontWeight: 600
          }}>
            THE ELITE EIGHT
          </h1>

          <div className="ee-eyebrow" style={{ color: EE.goldSoft, marginTop: 18 }}>
            Ivy League College Tour for Black Girls
          </div>

          <div style={{ display: "flex", justifyContent: "center", margin: "30px 0 8px" }}>
            <GoldRule width={260} color={EE.goldSoft} />
          </div>

          <p className="ee-serif" style={{
            margin: "18px auto 0", maxWidth: 640,
            fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(21px, 2.6vw, 30px)",
            lineHeight: 1.45, color: EE.lavender
          }}>
            Where Black girl brilliance meets legacy, leadership, and limitless possibility.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 46, flexWrap: "wrap" }}>
            <button className="ee-btn ee-btn-gold" onClick={() => onNavigate("eliteeightapply")}>
              Begin Your Application
            </button>
            <button className="ee-btn ee-btn-outline-cream" onClick={() => {
              document.getElementById("ee-itinerary")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}>
              View the Journey
            </button>
          </div>
        </div>
      </div>
      <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${EE.gold}, transparent)` }} />
    </section>);

}

/* ====================================================================
   INTRO, editorial split
   ==================================================================== */
function EEIntro() {
  return (
    <section style={{ background: EE.cream, padding: "108px 0" }}>
      <div className="container-wide" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center"
      }}>
        <div>
          <div className="ee-eyebrow" style={{ color: EE.camel, marginBottom: 22 }}>The Invitation</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(34px, 4.2vw, 56px)", color: EE.navy }}>
            An education in <span style={{ fontStyle: "italic", color: EE.forest }}>belonging</span>, on the campuses that shaped a nation.
          </h2>
          <p className="ee-body" style={{ margin: "28px 0 0", fontSize: 17.5, color: EE.ink }}>
            The Elite Eight is a curated Ivy League tour for Black girls in grades 9 through 11. Over one
            unforgettable journey, our scholars walk the quads, sit in the admissions offices, sleep in
            the residence halls, and break bread with the alumnae who walked through those gates first.
          </p>
          <p className="ee-body" style={{ margin: "18px 0 0", fontSize: 17.5, color: EE.ink }}>
            It is more than a college tour. It is a rehearsal for the life she is already entitled to, polished, prepared, and surrounded by sisterhood.
          </p>
          <div style={{ marginTop: 30 }}>
            <span className="ee-script" style={{ fontSize: 38, color: EE.camel }}>Excellence is our signature.</span>
          </div>
        </div>

        <PhotoPlate
          ratio="4/5"
          caption="Scholars on the steps, blazers, pleats, and quiet confidence."
          tint={EE.navy}
          label="Campus Portrait" />
        
      </div>
    </section>);

}

/* ====================================================================
   THE EIGHT, crest grid
   ==================================================================== */
function EESchools() {
  const schools = [
  { name: "Brown", city: "Providence, RI", color: "#7B2D26", crest: "B" },
  { name: "Columbia", city: "New York, NY", color: "#1F3A6E", crest: "C" },
  { name: "Cornell", city: "Ithaca, NY", color: "#A02B2B", crest: "C" },
  { name: "Dartmouth", city: "Hanover, NH", color: "#1F6B3A", crest: "D" },
  { name: "Harvard", city: "Cambridge, MA", color: "#7A1F1F", crest: "H" },
  { name: "Penn", city: "Philadelphia, PA", color: "#1A3568", crest: "P" },
  { name: "Princeton", city: "Princeton, NJ", color: "#C8741C", crest: "P" },
  { name: "Yale", city: "New Haven, CT", color: "#1A3D7A", crest: "Y" }];

  return (
    <section style={{ background: EE.navy, color: EE.creamHi, padding: "104px 0" }}>
      <div className="container-wide" style={{ textAlign: "center" }}>
        <div className="ee-eyebrow" style={{ color: EE.goldSoft, marginBottom: 16 }}>Eight Schools · One Tour</div>
        <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(34px, 4.6vw, 60px)", color: EE.creamHi }}>The Elite Eight

        </h2>
        <p className="ee-body" style={{ margin: "20px auto 0", maxWidth: 560, fontSize: 16.5, color: EE.lavender, fontWeight: 300 }}>
          Every campus on the itinerary, hand-selected for its history, its honors, and the
          Black women who have made it their own.
        </p>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 22, marginTop: 56
        }}>
          {schools.map((s) =>
          <div key={s.name} style={{
            border: `1px solid rgba(217,184,114,0.32)`,
            padding: "30px 16px 26px",
            background: "rgba(246,239,224,0.03)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 14
          }}>
              <svg viewBox="0 0 64 72" width="52" height="58" aria-hidden>
                <defs>
                  <linearGradient id={`ee-g-${s.name}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={s.color} />
                    <stop offset="100%" stopColor={s.color} stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path d="M4 6 Q4 4 6 4 L58 4 Q60 4 60 6 L60 38 Q60 54 32 68 Q4 54 4 38 Z"
              fill={`url(#ee-g-${s.name})`} stroke={EE.goldSoft} strokeWidth="1.3" />
                <text x="32" y="42" textAnchor="middle" fontFamily="Cormorant Garamond, serif"
              fontStyle="italic" fontWeight="600" fontSize="30" fill={EE.creamHi}>{s.crest}</text>
              </svg>
              <div className="ee-serif" style={{ fontSize: 22, fontWeight: 600, color: EE.creamHi }}>{s.name}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: EE.goldSoft, opacity: 0.85 }}>{s.city}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ====================================================================
   SIGNATURE EXPERIENCE, five pillars from the brand guide
   ==================================================================== */
function EEExperience() {
  const pillars = [
  { t: "Curated College Access", d: "Private admissions sessions, dean introductions, and the doors that don't open on a public tour.", icon: "columns" },
  { t: "AP Excellence & Academic Readiness", d: "Coursework strategy, rigor planning, and the academic profile selective schools look for.", icon: "books" },
  { t: "Sisterhood Across Campuses", d: "A cohort of like-minded Black girls and mentors who become a lifelong network.", icon: "sisters" },
  { t: "Legacy-Minded Leadership", d: "Conversations with alumnae and trailblazers on carrying, and creating, legacy.", icon: "compass" },
  { t: "Dependable Travel Experience", d: "lodging, dining, and seamless travel from campus to campus", icon: "trunk" }];

  return (
    <section style={{ background: EE.creamHi, padding: "108px 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="ee-eyebrow" style={{ color: EE.camel, marginBottom: 16 }}>The Signature Experience</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(34px, 4.4vw, 58px)", color: EE.navy }}>
            Every detail, considered.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, border: `1px solid ${EE.camel}33` }}>
          {pillars.map((p, i) =>
          <div key={i} style={{
            padding: "40px 26px 44px", textAlign: "center", background: EE.cream,
            borderRight: i < 4 ? `1px solid ${EE.camel}33` : "none"
          }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 22, color: EE.gold }}>
                <PillarIcon kind={p.icon} />
              </div>
              <h3 className="ee-serif" style={{ margin: 0, fontSize: 21, fontWeight: 600, color: EE.navy, lineHeight: 1.2 }}>{p.t}</h3>
              <p className="ee-body" style={{ margin: "14px 0 0", fontSize: 14, color: EE.ink }}>{p.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function PillarIcon({ kind }) {
  const p = { width: 40, height: 40, viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "columns":
      return <svg {...p}><path d="M6 18 L24 8 L42 18 Z" /><path d="M9 18 V38 M18 18 V38 M30 18 V38 M39 18 V38" /><path d="M5 42 H43" /></svg>;
    case "books":
      return <svg {...p}><path d="M8 14 H22 a3 3 0 0 1 3 3 V40 a3 3 0 0 0 -3 -3 H8 Z" /><path d="M40 14 H26 a3 3 0 0 0 -3 3 V40 a3 3 0 0 1 3 -3 H40 Z" /></svg>;
    case "sisters":
      return <svg {...p}><circle cx="17" cy="16" r="6" /><circle cx="31" cy="16" r="6" /><path d="M7 40 c0-7 5-12 10-12 s10 5 10 12" /><path d="M21 40 c0-7 5-12 10-12 s10 5 10 12" /></svg>;
    case "compass":
      return <svg {...p}><circle cx="24" cy="24" r="18" /><path d="M31 17 L26 26 L17 31 L22 22 Z" /></svg>;
    case "trunk":
      return <svg {...p}><rect x="8" y="14" width="32" height="24" rx="3" /><path d="M8 24 H40 M20 14 V10 a2 2 0 0 1 2 -2 h4 a2 2 0 0 1 2 2 V14" /><path d="M22 24 V28 M26 24 V28" /></svg>;
    default:return null;
  }
}

/* ====================================================================
   ITINERARY, the journey, campus by campus
   ==================================================================== */
function EEItinerary() {
  const days = [
  { day: "Day One · Tue, March 23", title: "Arrival & Welcome Reception", body: "Scholars arrive and settle into our boutique hotel. An opening dinner with the cohort, chaperones, and alumnae hosts.", region: "New England" },
  { day: "Day Two · Wed, March 24", title: "Cambridge & New Haven", body: "Harvard and Yale, admissions sessions, student-led tours, and an evening student panel. Essay coaching between visits.", region: "Massachusetts · Connecticut" },
  { day: "Day Three · Thu, March 25", title: "Providence & New York", body: "Brown and Columbia, with a coastal lunch reset and a curated city evening celebrating the arts and the cohort.", region: "Rhode Island · New York" },
  { day: "Day Four · Fri, March 26", title: "Princeton, Penn & Legacy Brunch", body: "Capstone admissions strategy at Princeton and Penn, a leadership conversation, and a farewell brunch. Departures March 27.", region: "New Jersey · Pennsylvania" }];

  return (
    <section id="ee-itinerary" style={{ background: EE.cream, padding: "108px 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div className="ee-eyebrow" style={{ color: EE.camel, marginBottom: 16 }}>The Journey</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(34px, 4.4vw, 58px)", color: EE.navy }}>
            Four days. Eight legacies.
          </h2>
          <p className="ee-body" style={{ margin: "18px auto 0", maxWidth: 540, fontSize: 16.5, color: EE.ink }}>
            March 23–27, 2027. A sample itinerary, each cohort's journey is finalized with families before departure.
          </p>
        </div>

        <div style={{ maxWidth: 820, margin: "56px auto 0", position: "relative" }}>
          {/* vertical line */}
          <div style={{ position: "absolute", left: 13, top: 8, bottom: 8, width: 1, background: `${EE.camel}55` }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {days.map((d, i) =>
            <div key={i} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 26, padding: "20px 0", alignItems: "start" }}>
                <div style={{ position: "relative", zIndex: 1, display: "flex", justifyContent: "center" }}>
                  <span style={{ width: 11, height: 11, transform: "rotate(45deg)", background: EE.gold, marginTop: 8, boxShadow: `0 0 0 5px ${EE.cream}` }} />
                </div>
                <div style={{ borderBottom: i < days.length - 1 ? `1px solid ${EE.camel}30` : "none", paddingBottom: 22 }}>
                  <div className="ee-eyebrow" style={{ color: EE.camel, fontSize: 11, marginBottom: 6 }}>{d.day} · {d.region}</div>
                  <h3 className="ee-serif" style={{ margin: 0, fontSize: 25, fontWeight: 600, color: EE.navy }}>{d.title}</h3>
                  <p className="ee-body" style={{ margin: "8px 0 0", fontSize: 15.5, color: EE.ink }}>{d.body}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   ELIGIBILITY, who the tour is for
   ==================================================================== */
function EEEligibility() {
  const criteria = [
  { t: "Grades 9–11", d: "Open to girls in their freshman through junior years of high school." },
  { t: "Academic Standing", d: "Enrolled in private school or rigorous AP / IB coursework, in good academic standing." },
  { t: "Selective-College Track", d: "On a pathway toward, or curious about, selective and Ivy League admissions." },
  { t: "Sisterhood-Minded", d: "Ready to show up for herself and her cohort with grace, curiosity, and leadership." }];

  return (
    <section style={{ background: EE.forest, color: EE.creamHi, padding: "104px 0" }}>
      <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 72, alignItems: "center" }}>
        <PhotoPlate
          ratio="5/6"
          caption="Quiet study, cable-knit, and a scarf at the harbor."
          tint={EE.navyDeep}
          label="The Scholar"
          frameColor={EE.goldSoft} />
        
        <div>
          <div className="ee-eyebrow" style={{ color: EE.goldSoft, marginBottom: 18 }}>Who She Is</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(32px, 4.2vw, 54px)", color: EE.creamHi }}>
            An invitation, by design.
          </h2>
          <p className="ee-body" style={{ margin: "22px 0 36px", fontSize: 17, color: EE.lavender, fontWeight: 300 }}>
            The Elite Eight is intentionally intimate. We seek scholars who are ready to be poured into, and to pour back into the sisters beside them.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(217,184,114,0.3)", border: "1px solid rgba(217,184,114,0.3)" }}>
            {criteria.map((c, i) =>
            <div key={i} style={{ background: EE.forest, padding: "26px 24px" }}>
                <h3 className="ee-serif" style={{ margin: 0, fontSize: 22, fontWeight: 600, color: EE.goldSoft }}>{c.t}</h3>
                <p className="ee-body" style={{ margin: "8px 0 0", fontSize: 14.5, color: EE.creamHi, opacity: 0.9 }}>{c.d}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   APPLICATION JOURNEY, steps
   ==================================================================== */
function EEJourney({ onNavigate }) {
  const steps = [
  { n: "I", t: "Submit Her Application", d: "Tell us her story, academics, aspirations, and what legacy means to her. Applications open each January." },
  { n: "II", t: "Family Conversation", d: "A warm interview with our team to ensure the journey is right for your scholar and your family." },
  { n: "III", t: "Welcome to the Cohort", d: "Acceptance, scholarship review, and a personal welcome packet with her itinerary and reading list." },
  { n: "IV", t: "Prepare & Depart", d: "Pre-tour workshops, the cohort meet-and-greet, and the curated wardrobe guide before wheels up." }];

  return (
    <section style={{ background: EE.creamHi, padding: "108px 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 58 }}>
          <div className="ee-eyebrow" style={{ color: EE.camel, marginBottom: 16 }}>The Path In</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(34px, 4.4vw, 58px)", color: EE.navy }}>
            Four steps to the journey.
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 28 }}>
          {steps.map((s, i) =>
          <div key={i} style={{ textAlign: "center" }}>
              <div className="ee-serif" style={{
              fontSize: 34, fontStyle: "italic", color: EE.gold,
              width: 76, height: 76, borderRadius: "50%", border: `1.5px solid ${EE.gold}`,
              display: "grid", placeItems: "center", margin: "0 auto 22px"
            }}>{s.n}</div>
              <h3 className="ee-serif" style={{ margin: 0, fontSize: 22, fontWeight: 600, color: EE.navy }}>{s.t}</h3>
              <p className="ee-body" style={{ margin: "12px 0 0", fontSize: 15, color: EE.ink }}>{s.d}</p>
            </div>
          )}
        </div>
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <button className="ee-btn ee-btn-navy" onClick={() => onNavigate("eliteeightapply")}>Begin Your Application</button>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   INVESTMENT, tuition & scholarships
   ==================================================================== */
function EEInvestment({ onNavigate }) {
  return (
    <section style={{ background: EE.navy, color: EE.creamHi, padding: "104px 0" }}>
      <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
        <div>
          <div className="ee-eyebrow" style={{ color: EE.goldSoft, marginBottom: 18 }}>The Investment</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(32px, 4.2vw, 54px)", color: EE.creamHi }}>
            A worthy investment, and never a barrier.
          </h2>
          <p className="ee-body" style={{ margin: "24px 0 0", fontSize: 17, color: EE.lavender, fontWeight: 300 }}>
            The Elite Eight is a paid program, with travel, lodging, dining, and programming included.
            We believe brilliance should never be priced out, generous need-based scholarships are
            available, and our team works with every family individually.
          </p>
          <p className="ee-body" style={{ margin: "18px 0 0", fontSize: 17, color: EE.lavender, fontWeight: 300 }}>
            No scholar who belongs on this journey is ever turned away for cost.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 36, flexWrap: "wrap" }}>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, border: "1px solid rgba(217,184,114,0.3)" }}>
          {[
          { l: "All Travel", v: "Flights & ground transfers, fully arranged" },
          { l: "Lodging", v: "Boutique hotels, double-occupancy with cohort" },
          { l: "Dining", v: "Curated meals throughout the journey" },
          { l: "Programming", v: "Admissions sessions, coaching & alumnae access" },
          { l: "Scholarships", v: "Need-based aid available for every family" }].
          map((row, i) =>
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "150px 1fr", gap: 20,
            padding: "22px 26px", background: "rgba(246,239,224,0.03)", alignItems: "center"
          }}>
              <div className="ee-eyebrow" style={{ color: EE.goldSoft, fontSize: 11 }}>{row.l}</div>
              <div className="ee-serif" style={{ fontSize: 18, color: EE.creamHi, fontWeight: 500 }}>{row.v}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ====================================================================
   FAQ
   ==================================================================== */
function EEFaq() {
  const faqs = [
  { q: "When do applications open?", a: "Applications for each annual cohort open in August, with the tour taking place in the spring. Spots are limited and admitted on a rolling basis." },
  { q: "Is chaperonage provided the entire trip?", a: "Yes. Our scholars are accompanied by vetted BGA chaperones at all times, with a low scholar-to-chaperone ratio." },
  { q: "What should she pack?", a: "Every admitted scholar receives a curated wardrobe and packing guide, think blazers, cable-knit, and coastal-prep polish, so she arrives campus-ready." },
  { q: "Do families travel along?", a: "The journey is designed for scholars and the cohort. Families are warmly included in the welcome reception, the legacy brunch, and updates throughout the cohort." },
  { q: "How are scholarships awarded?", a: "Need-based scholarships are reviewed confidentially during the family conversation. Our team partners with each family to make the journey possible." }];

  return (
    <section style={{ background: EE.cream, padding: "104px 0" }}>
      <div className="container-wide" style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div className="ee-eyebrow" style={{ color: EE.camel, marginBottom: 16 }}>Questions</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(32px, 4.2vw, 54px)", color: EE.navy }}>
            For the thoughtful family.
          </h2>
        </div>
        <div>
          {faqs.map((f, i) => <EEFaqItem key={i} {...f} last={i === faqs.length - 1} />)}
        </div>
      </div>
    </section>);

}

function EEFaqItem({ q, a, last }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderTop: `1px solid ${EE.camel}40`, borderBottom: last ? `1px solid ${EE.camel}40` : "none" }}>
      <button onClick={() => setOpen((o) => !o)} style={{
        width: "100%", background: "transparent", border: "none", cursor: "pointer",
        padding: "26px 4px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, textAlign: "left"
      }}>
        <span className="ee-serif" style={{ fontSize: 24, fontWeight: 600, color: EE.navy }}>{q}</span>
        <span className="ee-serif" style={{ fontSize: 30, color: EE.gold, lineHeight: 1, fontWeight: 400, flexShrink: 0 }}>{open ? "–" : "+"}</span>
      </button>
      {open &&
      <p className="ee-body" style={{ margin: "0 4px 28px", fontSize: 16.5, color: EE.ink, maxWidth: 720 }}>{a}</p>
      }
    </div>);

}

/* ====================================================================
   CTA
   ==================================================================== */
function EECta({ onNavigate }) {
  return (
    <section style={{ background: EE.navy, color: EE.creamHi, padding: "108px 0", textAlign: "center", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 100%, rgba(190,142,46,0.18), transparent 60%)" }} />
      <div className="container-wide" style={{ position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <LighthouseCrest size={72} color={EE.goldSoft} />
        </div>
        <h2 className="ee-h1" style={{ margin: 0, fontSize: "clamp(38px, 6vw, 84px)", color: EE.creamHi, fontWeight: 600 }}>
          Her seat is waiting.
        </h2>
        <p className="ee-serif" style={{ margin: "20px auto 0", maxWidth: 560, fontStyle: "italic", fontSize: "clamp(19px, 2.4vw, 26px)", color: EE.lavender, lineHeight: 1.45 }}>
          Eight campuses. One unforgettable summer. A lifetime of belonging.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
          <button className="ee-btn ee-btn-gold" onClick={() => onNavigate("eliteeightapply")}>Begin Your Application</button>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   FOOTER RULE, "A Program of The Black Girl Advocate"
   ==================================================================== */
function EEFooterRule() {
  return (
    <div style={{ background: EE.navyDeep, color: EE.goldSoft, padding: "20px 0" }}>
      <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22 }}>
        <Sailboat size={20} />
        <span className="ee-serif" style={{ fontSize: 16, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 500 }}>
          A Program of The Black Girl Advocate
        </span>
        <Sailboat size={20} />
      </div>
    </div>);

}

/* ====================================================================
   PHOTO PLATE, elegant framed placeholder
   ==================================================================== */
function PhotoPlate({ ratio = "4/5", caption, label = "Imagery", tint = EE.navy, frameColor = EE.camel }) {
  return (
    <div>
      <div className="ee-photo" style={{
        aspectRatio: ratio,
        background: `linear-gradient(135deg, ${tint}, ${EE.navyDeep})`
      }}>
        <div style={{
          position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: 24
        }}>
          <div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 14, opacity: 0.55 }}>
              <LighthouseCrest size={56} color={frameColor} />
            </div>
            <div className="ee-eyebrow" style={{ color: frameColor, opacity: 0.85, fontSize: 11 }}>{label}</div>
          </div>
        </div>
      </div>
      {caption &&
      <div className="ee-serif" style={{ marginTop: 14, fontStyle: "italic", fontSize: 14.5, color: EE.camel, textAlign: "center" }}>
          {caption}
        </div>
      }
    </div>);

}

/* ====================================================================
   PLANNING GUIDE — the monthly cohort calendar, September → March
   ==================================================================== */
function EEPlanningGuide() {
  const plan = [
  { m: "September", k: "Kickoff", t: "Application Opens · Interest Meeting", d: "Parents and students gather for the cohort interest meeting as applications open." },
  { m: "October", k: "Cohort Meeting I", t: "History of the Ivies", d: "The origins, traditions, and legacy of the eight Ivy League institutions." },
  { m: "November", k: "Cohort Meeting II", t: "Panel · Black Women at the Ivies", d: "A panel discussion with Black women who have walked through those gates." },
  { m: "December", k: "Cohort Meeting III", t: "Ivy League Admissions Coach", d: "A working session with an Ivy League admissions coach." },
  { m: "January", k: "Cohort Meeting IV", t: "Parent Meeting · Payment Due · Schedule Released", d: "Family meeting, tuition due, and the finalized tour schedule released." },
  { m: "February", k: "Cohort Meeting V", t: "Black & African History of the Ivy Leagues", d: "The deeper history of Black and African presence across the Ivy League." },
  { m: "March", k: "The Tour", t: "Ivy League Tour · March 23–27", d: "Wheels up. Eight campuses, one unforgettable journey.", tour: true }];

  return (
    <section style={{ background: EE.navy, color: EE.creamHi, padding: "108px 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div className="ee-eyebrow" style={{ color: EE.goldSoft, marginBottom: 16 }}>The Planning Guide</div>
          <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(34px, 4.4vw, 58px)", color: EE.creamHi }}>
            Seven months to the journey.
          </h2>
          <p className="ee-body" style={{ margin: "18px auto 0", maxWidth: 560, fontSize: 16.5, color: EE.lavender, fontWeight: 300 }}>
            One cohort meeting each month, September through February, preparing every scholar for the tour in March.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: "30px 0 8px" }}>
          <GoldRule width={220} color={EE.goldSoft} />
        </div>

        <div style={{ maxWidth: 860, margin: "44px auto 0" }}>
          {plan.map((row, i) =>
          <div key={row.m} style={{
            display: "grid", gridTemplateColumns: "190px 1fr", gap: 30,
            alignItems: "baseline", padding: "26px 0",
            borderTop: `1px solid rgba(217,184,114,0.28)`,
            borderBottom: i === plan.length - 1 ? `1px solid rgba(217,184,114,0.28)` : "none"
          }}>
              <div>
                <div className="ee-serif" style={{ fontSize: 27, fontWeight: 600, color: row.tour ? EE.goldSoft : EE.creamHi, lineHeight: 1 }}>{row.m}</div>
                <div className="ee-eyebrow" style={{ color: EE.goldSoft, fontSize: 10.5, marginTop: 8 }}>{row.k}</div>
              </div>
              <div>
                <h3 className="ee-serif" style={{ margin: 0, fontSize: 22, fontWeight: 600, color: row.tour ? EE.goldSoft : EE.creamHi, lineHeight: 1.2 }}>{row.t}</h3>
                <p className="ee-body" style={{ margin: "8px 0 0", fontSize: 15, color: EE.lavender, fontWeight: 300 }}>{row.d}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ====================================================================
   ELITE EIGHT APPLICATION — branded, with transcript upload + counselor.
   Submissions route to ariel@theblackgirladvocate.org via /api/elite-eight.
   ==================================================================== */
const eeField = {
  width: "100%", padding: "14px 16px",
  background: EE.creamHi, color: EE.ink,
  border: `1px solid ${EE.camel}66`, borderRadius: 2,
  fontFamily: eeFonts.sans, fontSize: 15, fontWeight: 300,
  outline: "none"
};

function EEAppSection({ title, note, children }) {
  return (
    <div style={{ marginTop: 30, paddingTop: 26, borderTop: `1px solid ${EE.camel}44` }}>
      <div className="ee-eyebrow" style={{ color: EE.camel, fontSize: 11, marginBottom: note ? 6 : 18 }}>{title}</div>
      {note && <p className="ee-body" style={{ margin: "0 0 18px", fontSize: 13.5, color: EE.ink, opacity: 0.7 }}>{note}</p>}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
    </div>);

}

function EEAppRow({ children }) {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>{children}</div>;
}

function EEAppField({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontFamily: eeFonts.sans, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500, color: EE.navy, opacity: 0.78, marginBottom: 7 }}>{label}</div>
      {children}
    </label>);

}

function EliteEightApplyPage({ onNavigate }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [grade, setGrade] = React.useState("9");
  const [school, setSchool] = React.useState("");
  const [cityState, setCityState] = React.useState("");
  const [gpa, setGpa] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [parentEmail, setParentEmail] = React.useState("");
  const [parentPhone, setParentPhone] = React.useState("");
  const [counselorName, setCounselorName] = React.useState("");
  const [counselorEmail, setCounselorEmail] = React.useState("");
  const [why, setWhy] = React.useState("");
  const [transcript, setTranscript] = React.useState(null);
  const [fileError, setFileError] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);

  const onFile = (e) => {
    setFileError(null);
    const f = e.target.files && e.target.files[0];
    if (!f) {setTranscript(null);return;}
    if (f.size > 8 * 1024 * 1024) {setFileError("Please upload a file under 8 MB.");setTranscript(null);return;}
    const reader = new FileReader();
    reader.onload = () => {
      const data = String(reader.result).split(",")[1] || "";
      setTranscript({ name: f.name, type: f.type || "application/octet-stream", size: f.size, data });
    };
    reader.onerror = () => setFileError("Could not read that file. Try another.");
    reader.readAsDataURL(f);
  };

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const canSubmit =
  firstName && lastName && emailOk(email) && school && grade &&
  parentName && emailOk(parentEmail) &&
  counselorName && emailOk(counselorEmail) &&
  transcript && !submitting;

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);setApiError(null);
    try {
      const r = await window.bgaApi("/api/elite-eight", {
        firstName, lastName, email, phone, grade, school, cityState, gpa,
        parentName, parentEmail, parentPhone,
        counselorName, counselorEmail, why,
        transcriptName: transcript.name, transcriptType: transcript.type, transcriptData: transcript.data
      });
      if (!r.ok) {setApiError(r.errors ? "Please review the highlighted fields." : "Something went wrong. Please try again.");setSubmitting(false);return;}
      setSubmitted(true);
    } catch (err) {setApiError("Network error. Please try again.");} finally
    {setSubmitting(false);}
  };

  return (
    <div style={{ background: EE.cream, color: EE.navy, fontFamily: eeFonts.sans }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Montserrat:wght@300;400;500;600&family=Pinyon+Script&display=swap');
        .ee-serif { font-family: ${eeFonts.serif}; }
        .ee-eyebrow { font-family: ${eeFonts.sans}; font-weight: 500; font-size: 12px; letter-spacing: 0.34em; text-transform: uppercase; }
        .ee-h1 { font-family: ${eeFonts.serif}; font-weight: 600; line-height: 0.98; letter-spacing: 0.04em; }
        .ee-h2 { font-family: ${eeFonts.serif}; font-weight: 600; line-height: 1.05; letter-spacing: 0.02em; }
        .ee-body { font-family: ${eeFonts.sans}; font-weight: 300; line-height: 1.7; }
        .ee-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 34px; border: 1.5px solid ${EE.gold}; font-family: ${eeFonts.sans}; font-weight: 500; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; background: transparent; color: ${EE.navy}; transition: background .25s ease, color .25s ease, transform .2s ease; }
        .ee-btn:hover { transform: translateY(-2px); }
        .ee-btn-gold { background: ${EE.gold}; color: ${EE.cream}; }
        .ee-btn-gold:hover { background: ${EE.navy}; border-color: ${EE.navy}; color: ${EE.creamHi}; }
        .ee-btn-navy { background: ${EE.navy}; color: ${EE.creamHi}; border-color: ${EE.navy}; }
        .ee-btn-navy:hover { background: ${EE.gold}; border-color: ${EE.gold}; color: ${EE.navy}; }
        .ee-btn-outline-cream { color: ${EE.creamHi}; border-color: ${EE.goldSoft}; }
        .ee-btn-outline-cream:hover { background: ${EE.creamHi}; color: ${EE.navy}; border-color: ${EE.creamHi}; }
        .ee-app-input:focus { border-color: ${EE.gold} !important; }
      `}</style>

      {/* Compact branded hero */}
      <section style={{ background: EE.navy, color: EE.creamHi, position: "relative" }}>
        <div style={{ height: 6, background: EE.navyDeep }} />
        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${EE.gold}, transparent)` }} />
        <div className="container-wide" style={{ padding: "64px 0 70px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <LighthouseCrest size={64} color={EE.goldSoft} />
          </div>
          <div className="ee-eyebrow" style={{ color: EE.goldSoft, marginBottom: 16 }}>The Elite Eight · Application</div>
          <h1 className="ee-h1" style={{ margin: 0, color: EE.creamHi, fontSize: "clamp(40px, 6vw, 84px)", fontWeight: 600 }}>
            Begin her journey.
          </h1>
          <p className="ee-serif" style={{ margin: "18px auto 0", maxWidth: 580, fontStyle: "italic", fontWeight: 400, fontSize: "clamp(18px, 2.4vw, 26px)", lineHeight: 1.45, color: EE.lavender }}>
            A few details about your scholar, her family, and her school counselor, and her transcript to complete the file.
          </p>
        </div>
        <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${EE.gold}, transparent)` }} />
      </section>

      <section style={{ padding: "84px 0 108px" }}>
        <div className="container-wide" style={{ maxWidth: 820, margin: "0 auto" }}>
          {submitted ?
          <div style={{ background: EE.creamHi, border: `1px solid ${EE.camel}55`, padding: "60px 44px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
                <LighthouseCrest size={64} color={EE.gold} />
              </div>
              <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(30px, 4vw, 46px)", color: EE.navy }}>Her application is in.</h2>
              <p className="ee-body" style={{ margin: "18px auto 0", maxWidth: 520, fontSize: 16.5, color: EE.ink }}>
                Thank you, {firstName || "scholar"}. Our team has received your application and transcript. We'll be in touch at <strong>{email || "your email"}</strong> to schedule the family conversation. Her seat is being held.
              </p>
              <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                <button className="ee-btn ee-btn-navy" onClick={() => onNavigate("eliteeight")}>Back to The Elite Eight</button>
              </div>
            </div> :

          <form onSubmit={submit} style={{ background: EE.creamHi, border: `1px solid ${EE.camel}55`, padding: "44px 44px 48px" }}>
              <h2 className="ee-h2" style={{ margin: 0, fontSize: "clamp(26px, 3.4vw, 40px)", color: EE.navy }}>The Scholar's Application</h2>
              <p className="ee-body" style={{ margin: "12px 0 0", fontSize: 15, color: EE.ink, opacity: 0.78 }}>
                Fields marked with <span style={{ color: EE.gold }}>·</span> are required.
              </p>

              {/* Scholar */}
              <EEAppSection title="The Scholar">
                <EEAppRow>
                  <EEAppField label="First name ·"><input className="ee-app-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} style={eeField} placeholder="Imani" /></EEAppField>
                  <EEAppField label="Last name ·"><input className="ee-app-input" value={lastName} onChange={(e) => setLastName(e.target.value)} style={eeField} placeholder="Williams" /></EEAppField>
                </EEAppRow>
                <EEAppRow>
                  <EEAppField label="Email ·"><input className="ee-app-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={eeField} placeholder="scholar@example.com" /></EEAppField>
                  <EEAppField label="Phone"><input className="ee-app-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={eeField} placeholder="(303) 555-0123" /></EEAppField>
                </EEAppRow>
                <EEAppRow>
                  <EEAppField label="Current grade ·">
                    <select className="ee-app-input" value={grade} onChange={(e) => setGrade(e.target.value)} style={eeField}>
                      <option value="9">9th, Freshman</option>
                      <option value="10">10th, Sophomore</option>
                      <option value="11">11th, Junior</option>
                    </select>
                  </EEAppField>
                  <EEAppField label="GPA (optional)"><input className="ee-app-input" value={gpa} onChange={(e) => setGpa(e.target.value)} style={eeField} placeholder="3.9" /></EEAppField>
                </EEAppRow>
                <EEAppRow>
                  <EEAppField label="School ·"><input className="ee-app-input" value={school} onChange={(e) => setSchool(e.target.value)} style={eeField} placeholder="East High School" /></EEAppField>
                  <EEAppField label="City / state"><input className="ee-app-input" value={cityState} onChange={(e) => setCityState(e.target.value)} style={eeField} placeholder="Denver, CO" /></EEAppField>
                </EEAppRow>
              </EEAppSection>

              {/* Family */}
              <EEAppSection title="Parent or Guardian">
                <EEAppRow>
                  <EEAppField label="Full name ·"><input className="ee-app-input" value={parentName} onChange={(e) => setParentName(e.target.value)} style={eeField} placeholder="Jane Williams" /></EEAppField>
                  <EEAppField label="Email ·"><input className="ee-app-input" type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} style={eeField} placeholder="parent@example.com" /></EEAppField>
                </EEAppRow>
                <EEAppField label="Phone"><input className="ee-app-input" type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} style={eeField} placeholder="(303) 555-0123" /></EEAppField>
              </EEAppSection>

              {/* Counselor */}
              <EEAppSection title="School Counselor" note="So we can verify standing and coordinate her records. We'll only reach out with your family's awareness.">
                <EEAppRow>
                  <EEAppField label="Counselor name ·"><input className="ee-app-input" value={counselorName} onChange={(e) => setCounselorName(e.target.value)} style={eeField} placeholder="Mr. / Ms. ..." /></EEAppField>
                  <EEAppField label="Counselor email ·"><input className="ee-app-input" type="email" value={counselorEmail} onChange={(e) => setCounselorEmail(e.target.value)} style={eeField} placeholder="counselor@school.edu" /></EEAppField>
                </EEAppRow>
              </EEAppSection>

              {/* Transcript */}
              <EEAppSection title="Transcript" note="Upload her most recent transcript or report card. PDF, Word, or an image, under 8 MB.">
                <label style={{
                display: "flex", alignItems: "center", gap: 18, cursor: "pointer",
                padding: "22px 24px", background: EE.cream,
                border: `1.5px dashed ${transcript ? EE.gold : EE.camel + "88"}`, borderRadius: 2
              }}>
                  <div style={{ color: EE.gold, flexShrink: 0 }}><Icon.FileText size={28} /></div>
                  <div style={{ flex: 1 }}>
                    {transcript ?
                    <>
                        <div className="ee-serif" style={{ fontSize: 18, fontWeight: 600, color: EE.navy }}>{transcript.name}</div>
                        <div className="ee-body" style={{ fontSize: 13, color: EE.ink, opacity: 0.7 }}>{(transcript.size / 1024).toFixed(0)} KB · click to replace</div>
                      </> :

                    <>
                        <div className="ee-serif" style={{ fontSize: 18, fontWeight: 600, color: EE.navy }}>Choose a file…</div>
                        <div className="ee-body" style={{ fontSize: 13, color: EE.ink, opacity: 0.7 }}>PDF, DOC, DOCX, PNG, or JPG</div>
                      </>
                    }
                  </div>
                  <span className="ee-eyebrow" style={{ color: EE.gold, fontSize: 11 }}>Browse</span>
                  <input type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,application/pdf,image/*" onChange={onFile} style={{ display: "none" }} />
                </label>
                {fileError && <div className="ee-body" style={{ fontSize: 13, color: "#9B2C2C" }}>{fileError}</div>}
              </EEAppSection>

              {/* Voice */}
              <EEAppSection title="Her Voice (optional)">
                <EEAppField label="Why The Elite Eight?">
                  <textarea className="ee-app-input" rows="4" value={why} onChange={(e) => setWhy(e.target.value)} style={{ ...eeField, resize: "vertical" }}
                  placeholder="A few sentences in her own words, what this journey means to her." />
                </EEAppField>
              </EEAppSection>

              {apiError && <div className="ee-body" style={{ marginTop: 22, fontSize: 14, color: "#9B2C2C" }}>{apiError}</div>}

              <button type="submit" className="ee-btn ee-btn-gold" disabled={!canSubmit}
              style={{ marginTop: 34, opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}>
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
              <p className="ee-body" style={{ fontSize: 12.5, color: EE.ink, opacity: 0.6, marginTop: 16 }}>
                By submitting, you confirm a parent or guardian has reviewed this application. Your scholar's transcript is sent securely to our admissions team.
              </p>
            </form>
          }
        </div>
      </section>
      <EEFooterRule />
    </div>);

}

window.EliteEightPage = EliteEightPage;
window.EliteEightApplyPage = EliteEightApplyPage;