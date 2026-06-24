/* HBCU Tour, Interest registration page.
   Brand: "The Black Girl Advocate HBCU Tour", a 90s collegiate scrapbook system.
   Composition-notebook marble tear-offs, torn paper, ruled notebook paper,
   washi tape, paper-clipped polaroids, marker headers, hand-drawn doodles
   (stars, hearts, squiggles, arrows), handwritten accents, multicolor display.
   Palette: maroon, golden yellow, bright orange, deep purple, denim blue,
   notebook cream, black, silver gray.
   Application opens August 2026 for current juniors with a 3.0+ GPA.
   Submissions route to /api/hbcu-interest (notifies ariel@theblackgirladvocate.org).
*/

const HBCU = {
  maroon: "#7C2230",
  gold: "#ECB22E",
  orange: "#E2671E",
  purple: "#5E3B8B",
  denim: "#39588C",
  cream: "#F7F0DA",
  creamHi: "#FBF6E6",
  paper: "#FFFDF4",
  black: "#1A1714",
  silver: "#C8C5BC",
  ink: "#241F1A"
};

const hbcuFonts = {
  display: "'Luckiest Guy', 'Bungee', Impact, sans-serif",
  body: "'Work Sans', system-ui, sans-serif",
  hand: "'Caveat', 'Comic Sans MS', cursive"
};

/* ---------- Doodle motifs ---------- */
function HBStar({ size = 26, color = HBCU.orange }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2.4 L14.7 8.8 L21.6 9.3 L16.3 13.8 L18.2 20.6 L12 16.7 L5.8 20.6 L7.7 13.8 L2.4 9.3 L9.3 8.8 Z"
        fill={color} stroke={HBCU.black} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
function HBHeart({ size = 24, color = HBCU.purple }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21 C 3 14, 4 6, 9 6 C 11 6, 12 8, 12 8 C 12 8, 13 6, 15 6 C 20 6, 21 14, 12 21 Z"
        fill={color} stroke={HBCU.black} strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
function HBSquiggle({ width = 120, color = HBCU.purple }) {
  return (
    <svg width={width} height="14" viewBox="0 0 120 14" fill="none" aria-hidden>
      <path d="M2 8 Q 12 0, 22 8 T 42 8 T 62 8 T 82 8 T 102 8 T 118 8" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function HBArrow({ width = 90, color = HBCU.maroon, flip = false }) {
  return (
    <svg width={width} height="40" viewBox="0 0 90 40" fill="none" aria-hidden style={{ transform: flip ? "scaleX(-1)" : "none" }}>
      <path d="M4 30 Q 40 6, 78 18" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M78 18 L66 12 M78 18 L70 28" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Composition-notebook marble ---------- */
function CompositionMarble() {
  return (
    <svg aria-hidden preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <defs>
        <filter id="hbMarble">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 14 -6" />
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="#161310" />
      <rect width="100%" height="100%" filter="url(#hbMarble)" />
    </svg>
  );
}

/* A torn-off composition-notebook scrap (marble cover, ripped edge) */
function MarbleTear({ w = 230, h = 120, rotate = -8, edge = "bottom", style = {} }) {
  const clips = {
    bottom: "polygon(0 0, 100% 0, 100% 72%, 91% 80%, 96% 87%, 84% 90%, 88% 100%, 70% 93%, 58% 100%, 44% 92%, 30% 99%, 16% 90%, 6% 96%, 0 84%)",
    top: "polygon(0 16%, 12% 8%, 24% 14%, 40% 5%, 54% 13%, 70% 6%, 84% 14%, 100% 7%, 100% 100%, 0 100%)",
    left: "polygon(16% 0, 100% 0, 100% 100%, 16% 100%, 8% 88%, 14% 74%, 6% 60%, 13% 44%, 5% 30%, 12% 14%)"
  };
  return (
    <div aria-hidden style={{ position: "absolute", width: w, height: h, transform: `rotate(${rotate}deg)`, clipPath: clips[edge], overflow: "hidden", boxShadow: "0 6px 16px rgba(0,0,0,0.25)", ...style }}>
      <CompositionMarble />
    </div>
  );
}

/* Torn cream-paper divider strip */
function TornDivider({ color = HBCU.cream, flip = false }) {
  return (
    <div aria-hidden style={{
      height: 38, background: color, position: "relative", zIndex: 3, marginTop: flip ? 0 : -38, marginBottom: flip ? -38 : 0,
      clipPath: flip
        ? "polygon(0 100%, 6% 38%, 14% 74%, 24% 30%, 34% 70%, 46% 26%, 58% 68%, 70% 28%, 82% 72%, 92% 34%, 100% 70%, 100% 100%)"
        : "polygon(0 0, 100% 0, 100% 40%, 92% 78%, 82% 36%, 70% 74%, 58% 32%, 46% 76%, 34% 38%, 24% 72%, 14% 34%, 6% 68%, 0 32%)"
    }} />
  );
}

/* Paper clip */
function PaperClip({ size = 46, color = HBCU.silver, rotate = -18, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 40" fill="none" aria-hidden style={{ position: "absolute", transform: `rotate(${rotate}deg)`, filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.3))", ...style }}>
      <path d="M16 10 V 28 a5 5 0 0 1 -10 0 V 8 a3 3 0 0 1 6 0 V 26" stroke={color} strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* Washi tape */
function Tape({ color = HBCU.gold, w = 80, rotate = -6, style = {} }) {
  return (
    <div aria-hidden style={{
      position: "absolute", width: w, height: 26, background: color, opacity: 0.82, transform: `rotate(${rotate}deg)`,
      boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
      backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 6px, transparent 6px 12px)", ...style
    }} />
  );
}

/* Pennant flag */
function Pennant({ children }) {
  return (
    <div style={{
      display: "inline-block", background: HBCU.black, color: HBCU.gold,
      fontFamily: hbcuFonts.display, fontSize: 13, letterSpacing: "0.04em",
      padding: "12px 32px 12px 18px", lineHeight: 1.15,
      clipPath: "polygon(0 0, 100% 0, 86% 50%, 100% 100%, 0 100%)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
    }}>{children}</div>
  );
}

/* Paper-clipped polaroid */
function Polaroid({ src, caption, rotate = -4, w = 200, tape = HBCU.gold, clip = false }) {
  return (
    <div style={{ position: "relative", width: w, background: HBCU.paper, padding: "12px 12px 14px", transform: `rotate(${rotate}deg)`, boxShadow: "0 10px 26px rgba(0,0,0,0.22)", borderRadius: 2 }}>
      {clip
        ? <PaperClip style={{ top: -18, left: 24 }} rotate={rotate < 0 ? 14 : -14} />
        : <Tape color={tape} w={70} rotate={rotate < 0 ? 8 : -8} style={{ top: -12, left: "50%", marginLeft: -35 }} />}
      <div style={{ aspectRatio: "4/5", backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: HBCU.silver }} />
      {caption && <div className="hb-hand" style={{ fontSize: 22, color: HBCU.ink, textAlign: "center", marginTop: 6, lineHeight: 1 }}>{caption}</div>}
    </div>
  );
}

/* Marker highlighter header bar */
function MarkerHeader({ children, color = HBCU.maroon, rotate = -1.5 }) {
  return (
    <div style={{ display: "inline-block", transform: `rotate(${rotate}deg)` }}>
      <span style={{
        display: "inline-block", background: color, color: HBCU.creamHi,
        fontFamily: hbcuFonts.display, fontSize: 16, letterSpacing: "0.03em",
        padding: "8px 16px 6px", boxShadow: `3px 3px 0 ${HBCU.black}`,
        clipPath: "polygon(1% 4%, 99% 0, 100% 96%, 0% 100%)"
      }}>{children}</span>
    </div>
  );
}

/* Notebook-paper background layer */
function NotebookBg({ lines = true }) {
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {lines &&
      <div style={{ position: "absolute", inset: 0, backgroundImage: `repeating-linear-gradient(${HBCU.denim}1f 0 1px, transparent 1px 34px)`, backgroundPositionY: 12 }} />}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 64, width: 2, background: `${HBCU.maroon}55` }} />
      <div style={{ position: "absolute", top: 24, bottom: 24, left: 24, width: 16, display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
        {Array.from({ length: 16 }).map((_, i) =>
        <div key={i} style={{ width: 14, height: 14, borderRadius: "50%", background: HBCU.cream, boxShadow: `inset 0 2px 3px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.6)`, border: `1px solid ${HBCU.silver}` }} />)}
      </div>
    </div>
  );
}

const hbField = {
  width: "100%", padding: "14px 16px",
  background: HBCU.paper, color: HBCU.ink,
  border: `2px solid ${HBCU.black}`, borderRadius: 10,
  fontFamily: hbcuFonts.body, fontSize: 15, fontWeight: 500,
  outline: "none", boxShadow: `3px 3px 0 ${HBCU.silver}`
};

function HBField({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontFamily: hbcuFonts.body, fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: HBCU.maroon, marginBottom: 7 }}>{label}</div>
      {children}
    </label>
  );
}

function HBCUInterestPage({ onNavigate }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [gpa, setGpa] = React.useState("");
  const [graduationYear, setGraduationYear] = React.useState("2028");
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true); setApiError(null);
    try {
      const r = await window.bgaApi("/api/hbcu-interest", { firstName, lastName, email, school, gpa, graduationYear });
      if (!r.ok) { setApiError("Please check your entries."); setSubmitting(false); return; }
      setSubmitted(true);
    } catch (err) { setApiError("Network error. Try again."); } finally { setSubmitting(false); }
  };

  const HBCU_LETTERS = [
    { ch: "H", c: HBCU.maroon, r: -4 },
    { ch: "B", c: HBCU.orange, r: 3 },
    { ch: "C", c: HBCU.purple, r: -3 },
    { ch: "U", c: HBCU.denim, r: 4 }
  ];

  return (
    <div style={{ background: HBCU.cream, color: HBCU.ink, fontFamily: hbcuFonts.body, position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Caveat:wght@500;600;700&family=Work+Sans:wght@400;500;600;700;800&display=swap');
        .hb-display { font-family: ${hbcuFonts.display}; letter-spacing: 0.01em; }
        .hb-hand { font-family: ${hbcuFonts.hand}; }
        .hb-body { font-family: ${hbcuFonts.body}; }
        .hb-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-family: ${hbcuFonts.display}; font-size: 15px; letter-spacing: 0.04em; padding: 15px 28px; border-radius: 999px; border: 2.5px solid ${HBCU.black}; cursor: pointer; transition: transform .15s ease, box-shadow .15s ease; }
        .hb-btn:hover { transform: translateY(-2px); }
        .hb-btn-orange { background: ${HBCU.orange}; color: ${HBCU.creamHi}; box-shadow: 4px 4px 0 ${HBCU.black}; }
        .hb-btn-orange:hover { box-shadow: 6px 6px 0 ${HBCU.black}; }
        .hb-btn-maroon { background: ${HBCU.maroon}; color: ${HBCU.creamHi}; box-shadow: 4px 4px 0 ${HBCU.black}; }
        .hb-btn-maroon:hover { box-shadow: 6px 6px 0 ${HBCU.black}; }
        .hb-btn-cream { background: ${HBCU.paper}; color: ${HBCU.black}; box-shadow: 4px 4px 0 ${HBCU.black}; }
        .hb-btn-cream:hover { box-shadow: 6px 6px 0 ${HBCU.black}; }
        .hb-input:focus { border-color: ${HBCU.orange} !important; box-shadow: 3px 3px 0 ${HBCU.gold} !important; }
      `}</style>

      {/* ===== HERO ===== */}
      <section style={{ position: "relative", overflow: "hidden", padding: "64px 0 78px" }}>
        <NotebookBg />
        {/* doodles */}
        <div aria-hidden style={{ position: "absolute", top: 44, right: "12%" }}><HBStar size={30} color={HBCU.gold} /></div>
        <div aria-hidden style={{ position: "absolute", top: 150, left: "14%" }}><HBHeart size={24} color={HBCU.purple} /></div>

        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 36, alignItems: "center" }}>
            <div>
              <div style={{ marginBottom: 18 }}><Pennant>OUR LEGACY<br />OUR FUTURE</Pennant></div>

              <div className="hb-display" style={{ fontSize: "clamp(16px, 2vw, 24px)", color: HBCU.ink, lineHeight: 1, marginBottom: 2 }}>THE</div>
              <div className="hb-display" style={{ fontSize: "clamp(40px, 6.6vw, 86px)", color: HBCU.maroon, lineHeight: 0.9, textShadow: `3px 3px 0 rgba(0,0,0,0.12)` }}>BLACK GIRL</div>
              {/* ADVOCATE on a black brush bar */}
              <div style={{ display: "inline-block", transform: "rotate(-1.5deg)", margin: "8px 0 2px" }}>
                <span className="hb-display" style={{ display: "inline-block", background: HBCU.black, color: HBCU.creamHi, fontSize: "clamp(20px, 3vw, 38px)", padding: "6px 22px 4px", letterSpacing: "0.06em", clipPath: "polygon(2% 8%, 98% 0, 100% 92%, 0 100%)", boxShadow: `3px 3px 0 ${HBCU.maroon}` }}>ADVOCATE</span>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", gap: 2, margin: "4px 0 0", flexWrap: "wrap" }}>
                {HBCU_LETTERS.map((l, i) =>
                <span key={i} className="hb-display" style={{ fontSize: "clamp(64px, 12vw, 148px)", lineHeight: 0.84, color: l.c, transform: `rotate(${l.r}deg)`, textShadow: `4px 4px 0 ${HBCU.black}`, display: "inline-block" }}>{l.ch}</span>)}
                <span className="hb-display" style={{ fontSize: "clamp(32px, 5vw, 62px)", color: HBCU.black, marginLeft: 12, marginBottom: 8 }}>TOUR</span>
              </div>

              <p className="hb-hand" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", color: HBCU.ink, margin: "12px 0 0", maxWidth: 520, lineHeight: 1.2 }}>
                Where Black girl brilliance meets culture, campus, and possibility.
              </p>
              <div style={{ marginTop: 22 }}><HBSquiggle width={190} color={HBCU.purple} /></div>
            </div>

            {/* Polaroid cluster, paper-clipped */}
            <div style={{ position: "relative", height: 400 }}>
              <div style={{ position: "absolute", top: 0, right: 18 }}>
                <Polaroid src="assets/photos/hbcu-tour-vi-2025-sm.jpg" caption="yard energy" rotate={5} w={208} clip />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <Polaroid src="assets/photos/hbcu-tour-bethune-sm.jpg" caption="our legacy" rotate={-6} w={196} tape={HBCU.purple} />
              </div>
              <div aria-hidden style={{ position: "absolute", top: 168, left: 158, zIndex: 4 }}><HBStar size={40} color={HBCU.orange} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATUS BANNER ===== */}
      <TornDivider color={HBCU.black} />
      <section style={{ background: HBCU.black, color: HBCU.creamHi, padding: "26px 0" }}>
        <div className="container-wide" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
          <HBStar size={22} color={HBCU.gold} />
          <span className="hb-display" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: HBCU.gold }}>APPLICATIONS OPEN AUGUST 2026</span>
          <span className="hb-hand" style={{ fontSize: 22, opacity: 0.95 }}>get on the list now, we'll email you the moment the form is live</span>
          <HBStar size={22} color={HBCU.orange} />
        </div>
      </section>
      <TornDivider color={HBCU.cream} flip />

      {/* ===== MAIN ===== */}
      <section style={{ position: "relative", padding: "78px 0 92px" }}>
        <NotebookBg lines={false} />
        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 56, alignItems: "start" }}>

            {/* Left: eligibility & timeline */}
            <aside>
              <MarkerHeader color={HBCU.maroon}>WHO THIS IS FOR</MarkerHeader>
              <p className="hb-hand" style={{ fontSize: 26, color: HBCU.maroon, margin: "16px 0 6px", lineHeight: 1.1 }}>is this you? read on...</p>
              <h3 className="hb-display" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", color: HBCU.ink, margin: "0 0 18px", lineHeight: 1 }}>Eligibility for the 2026, 27 tour.</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 13 }}>
                {[
                "Currently a junior (11th grade) at the time of the tour",
                "Cumulative weighted or unweighted GPA of 3.0 or higher",
                "Resides in or attends school in Colorado",
                "Available for travel during the tour week (dates announced August 2026)",
                "Parent or guardian co-signs the travel and conduct agreement"].
                map((s, i) =>
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15.5, lineHeight: 1.5, fontWeight: 500 }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: HBCU.gold, color: HBCU.black, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1, border: `2px solid ${HBCU.black}` }}>
                      <Icon.Check size={12} />
                    </span>
                    {s}
                  </li>)}
              </ul>

              <div style={{ marginTop: 40 }}><MarkerHeader color={HBCU.purple} rotate={1.5}>THE TIMELINE</MarkerHeader></div>
              <ol style={{ listStyle: "none", padding: 0, margin: "22px 0 0", display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                { d: "Aug 2026", t: "Applications open", b: "Email goes out to everyone on this list.", c: HBCU.maroon },
                { d: "Sep 2026", t: "Applications close and cohort announced", b: "Rolling review. Earlier is better.\nSelected scholars + parent intake calls.", c: HBCU.orange },
                { d: "Oct 2026", t: "We tour", b: "A multi-campus journey across historic HBCUs in South Carolina.", c: HBCU.purple }].
                map((row, i) =>
                <li key={i} style={{ display: "grid", gridTemplateColumns: "30px 1fr", gap: 16, padding: "16px 0", borderTop: `2px dashed ${HBCU.silver}` }}>
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: row.c, border: `2px solid ${HBCU.black}`, marginTop: 4 }} />
                    <div>
                      <div className="hb-display" style={{ fontSize: 13, color: row.c, letterSpacing: "0.04em" }}>{row.d}</div>
                      <div style={{ fontWeight: 700, fontSize: 16, marginTop: 2 }}>{row.t}</div>
                      <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.5, opacity: 0.72, whiteSpace: "pre-line", fontWeight: 500 }}>{row.b}</p>
                    </div>
                  </li>)}
              </ol>

              <p className="hb-hand" style={{ fontSize: 24, lineHeight: 1.25, marginTop: 24, color: HBCU.maroon }}>
                Travel, lodging, and meals are all covered in the cost!
              </p>
            </aside>

            {/* Right: interest form */}
            <div style={{ position: "relative", background: HBCU.paper, borderRadius: 16, padding: "44px 40px 40px", border: `2.5px solid ${HBCU.black}`, boxShadow: `8px 8px 0 ${HBCU.maroon}` }}>
              <Tape color={HBCU.gold} w={120} rotate={-5} style={{ top: -16, left: 40 }} />
              <Tape color={HBCU.purple} w={90} rotate={7} style={{ top: -12, right: 40 }} />
              <div aria-hidden style={{ position: "absolute", left: -70, top: 60 }} className="hb-hand"><HBArrow width={80} color={HBCU.maroon} /></div>

              {submitted ?
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}><HBStar size={56} color={HBCU.gold} /></div>
                  <h2 className="hb-display" style={{ margin: 0, fontSize: "clamp(30px, 4vw, 46px)", color: HBCU.maroon }}>YOU'RE ON THE LIST!</h2>
                  <p className="hb-body" style={{ fontSize: 16, lineHeight: 1.6, marginTop: 14, opacity: 0.8, maxWidth: 440, margin: "14px auto 0", fontWeight: 500 }}>
                    We'll email <strong>{email || "you"}</strong> in <strong>August 2026</strong> with the live application link, the deadline, and the schools we're touring.
                  </p>
                  <div style={{ display: "inline-flex", gap: 12, marginTop: 28, flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="hb-btn hb-btn-cream" onClick={() => setSubmitted(false)}>Add another scholar</button>
                    <button className="hb-btn hb-btn-maroon" onClick={() => onNavigate("programming")}>Explore programs</button>
                  </div>
                </div> :

              <form onSubmit={submit}>
                  <MarkerHeader color={HBCU.orange}>NOTIFY ME WHEN IT OPENS</MarkerHeader>
                  <h2 className="hb-display" style={{ margin: "18px 0 0", fontSize: "clamp(30px, 4vw, 44px)", color: HBCU.ink, lineHeight: 0.95 }}>Get on the list.</h2>
                  <p className="hb-hand" style={{ fontSize: 23, lineHeight: 1.2, marginTop: 8, color: HBCU.purple }}>
                    drop your info, we'll be in touch the moment the 2026 application opens
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 22 }}>
                    <HBField label="First name"><input className="hb-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={hbField} placeholder="Imani" /></HBField>
                    <HBField label="Last name"><input className="hb-input" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={hbField} placeholder="Williams" /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="Email"><input className="hb-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={hbField} placeholder="you@example.com" /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="High school"><input className="hb-input" value={school} onChange={(e) => setSchool(e.target.value)} required style={hbField} placeholder="East High School" /></HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="Current GPA">
                      <input className="hb-input" value={gpa} onChange={(e) => setGpa(e.target.value)} required style={hbField} placeholder="3.6" inputMode="decimal" />
                      <div style={{ fontSize: 12, opacity: 0.6, marginTop: 6, fontWeight: 600 }}>3.0 minimum to apply.</div>
                    </HBField>
                    <HBField label="Graduation year">
                      <select className="hb-input" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} style={hbField}>
                        <option value="2027">2027 (current senior)</option>
                        <option value="2028">2028 (current junior)</option>
                        <option value="2029">2029 (current sophomore)</option>
                        <option value="2030">2030 (current freshman)</option>
                      </select>
                      <div style={{ fontSize: 12, opacity: 0.6, marginTop: 6, fontWeight: 600 }}>Tour is for students who'll be juniors when it runs.</div>
                    </HBField>
                  </div>

                  {apiError && <div className="hb-body" style={{ marginTop: 18, fontSize: 14, color: HBCU.maroon, fontWeight: 700 }}>{apiError}</div>}

                  <button type="submit" className="hb-btn hb-btn-orange" disabled={submitting} style={{ marginTop: 26, opacity: submitting ? 0.6 : 1 }}>
                    {submitting ? "Sending..." : "Notify me when it opens"}
                  </button>
                  <p className="hb-body" style={{ fontSize: 12, opacity: 0.6, marginTop: 14, fontWeight: 500 }}>
                    We'll only use your email for HBCU Tour updates and BGA cohort opportunities. No third-party sharing.
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING BAND ===== */}
      <TornDivider color={HBCU.maroon} />
      <section style={{ background: HBCU.maroon, color: HBCU.creamHi, padding: "46px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: 16, left: "8%" }}><HBStar size={22} color={HBCU.gold} /></div>
        <div aria-hidden style={{ position: "absolute", bottom: 16, right: "10%" }}><HBHeart size={22} color={HBCU.gold} /></div>
        <div className="container-wide" style={{ textAlign: "center" }}>
          <div className="hb-display" style={{ fontSize: "clamp(24px, 3.4vw, 44px)", lineHeight: 1.05 }}>
            ONE TOUR. MANY CAMPUSES. <span style={{ color: HBCU.gold }}>LIMITLESS POSSIBILITIES.</span>
          </div>
          <div className="hb-hand" style={{ fontSize: "clamp(24px, 2.8vw, 32px)", color: HBCU.gold, marginTop: 8 }}>
            Dream. Prepare. Represent. The world is your campus.
          </div>
        </div>
      </section>
    </div>
  );
}

window.HBCU_BRAND = HBCU;
window.HBCUInterestPage = HBCUInterestPage;
