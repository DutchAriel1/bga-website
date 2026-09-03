/* HBCU Tour, Interest registration page.
   Brand: "The Black Girl Advocate HBCU Tour", a 90s collegiate scrapbook system.
   Composition-notebook marble tear-offs, torn paper, ruled notebook paper,
   washi tape, paper-clipped polaroids, marker headers, hand-drawn doodles
   (stars, hearts, squiggles, arrows), handwritten accents, multicolor display.
   Palette: maroon, golden yellow, bright orange, deep purple, denim blue,
   notebook cream, black, silver gray.
   Full application for the Oct 21\u201324 South Carolina tour, includes flight ID, parent/guardian, emergency contact, health, and consent.
   Submissions route to /api/hbcu-tour-application (notifies ariel@theblackgirladvocate.org).
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

/* ---------- Painted title lockup ----------
   One SVG so the whole lockup scales to its column and never overflows.
   Watercolor wash fills (two-stop gradients, mottle overlay, turbulence-roughened
   edges) recreate the brand sheet's hand-painted letters: H gold, B orange,
   C purple, U denim, rough black outlines, ADVOCATE brush bar, TOUR + scribbles. */
function HBCUTitleArt() {
  const grads = [
    ["gH", "#EFC33D", "#B87A0E"], ["gB", "#E06E22", "#9E3D08"],
    ["gC", "#6A4494", "#361F56"], ["gU", "#4A6BA0", "#1E3050"],
    ["gM", "#7E2530", "#4A0F19"]];
  const L = [
    { ch: "H", g: "gH", x: 78, r: 0 }, { ch: "B", g: "gB", x: 228, r: 0 },
    { ch: "C", g: "gC", x: 372, r: 0 }, { ch: "U", g: "gU", x: 518, r: 0 }];
  const dsp = hbcuFonts.display;
  return (
    <svg viewBox="0 0 640 462" style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }} aria-label="The Black Girl Advocate HBCU Tour">
      <defs>
        {grads.map(([id, a, b]) =>
        <linearGradient key={id} id={id} x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} />
        </linearGradient>)}
        <filter id="hbPaint" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.052" numOctaves="3" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
        </filter>
        <filter id="hbPaintSoft" x="-8%" y="-8%" width="116%" height="116%">
          <feTurbulence type="fractalNoise" baseFrequency="0.09" numOctaves="2" seed="3" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="4" />
        </filter>
        <filter id="hbWash">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" seed="11" result="n" />
          <feColorMatrix in="n" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.35 0" result="m" />
          <feComposite in="m" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      {/* THE */}
      <text x="14" y="40" fontFamily={dsp} fontSize="30" fill={HBCU.black}>THE</text>
      {/* BLACK GIRL, painted maroon */}
      <text x="12" y="128" fontFamily={dsp} fontSize="92" fill="url(#gM)" stroke={HBCU.black} strokeWidth="3.4" letterSpacing="2">BLACK GIRL</text>
      {/* ADVOCATE brush bar */}
      <g>
        <path d="M8 152 L448 146 L452 202 L4 208 Z" fill={HBCU.black} />
        <path d="M452 168 L492 160 L488 196 L452 198 Z M4 160 L-14 168 L0 196 Z" fill={HBCU.black} />
        <text x="36" y="192" fontFamily={dsp} fontSize="42" fill={HBCU.creamHi} letterSpacing="14">ADVOCATE</text>
      </g>
      {/* HBCU, giant uniform letters */}
      {L.map((l) =>
      <text key={l.ch} x={l.x} y="384" fontFamily={dsp} fontSize="200" fill={`url(#${l.g})`} stroke={HBCU.black} strokeWidth="6" paintOrder="stroke">{l.ch}</text>)}
      {/* TOUR + scribble energy marks */}
      <g>
        <text x="356" y="452" fontFamily={dsp} fontSize="74" fill={HBCU.black}>TOUR</text>
        <path d="M300 400 L330 414 M296 424 L326 430 M300 448 L328 444" stroke={HBCU.black} strokeWidth="5" strokeLinecap="round" />
        <path d="M598 408 L622 396 M604 428 L630 424 M600 446 L624 452" stroke={HBCU.gold} strokeWidth="5" strokeLinecap="round" />
        <path d="M20 440 Q 60 414, 108 434 Q 150 450, 196 428" stroke={HBCU.purple} strokeWidth="5" fill="none" strokeLinecap="round" />
        <path d="M40 456 Q 80 436, 130 452" stroke={HBCU.orange} strokeWidth="4.4" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}

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
function HBCrown({ size = 40, color = HBCU.gold, rotate = -6, style = {} }) {
  return (
    <svg width={size} height={size * 0.72} viewBox="0 0 40 29" fill="none" aria-hidden style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      <path d="M4 24 L2 8 L11 15 L20 3 L29 15 L38 8 L36 24 Z" fill={color} stroke={HBCU.black} strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 24 H34" stroke={HBCU.black} strokeWidth="2" strokeLinecap="round" />
      <circle cx="2" cy="7" r="2" fill={color} stroke={HBCU.black} strokeWidth="1.4" />
      <circle cx="20" cy="3" r="2" fill={color} stroke={HBCU.black} strokeWidth="1.4" />
      <circle cx="38" cy="7" r="2" fill={color} stroke={HBCU.black} strokeWidth="1.4" />
    </svg>
  );
}
function HBMegaphone({ size = 54, rotate = -12, style = {} }) {
  return (
    <svg width={size} height={size * 0.78} viewBox="0 0 54 42" fill="none" aria-hidden style={{ transform: `rotate(${rotate}deg)`, ...style }}>
      <path d="M6 18 L30 8 L30 30 L6 22 Z" fill={HBCU.black} stroke={HBCU.black} strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 8 C 38 10, 38 28, 30 30" fill={HBCU.black} stroke={HBCU.black} strokeWidth="2" />
      <rect x="3" y="17" width="5" height="7" rx="1.5" fill={HBCU.gold} stroke={HBCU.black} strokeWidth="1.6" />
      <path d="M12 23 L14 34 a2.4 2.4 0 0 0 4.7 -1 L17 24" fill={HBCU.gold} stroke={HBCU.black} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M40 12 L47 7 M42 19 L51 19 M40 26 L47 31" stroke={HBCU.orange} strokeWidth="2.6" strokeLinecap="round" />
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
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);

  const [legalFirstName, setLegalFirstName] = React.useState("");
  const [legalLastName, setLegalLastName] = React.useState("");
  const [preferredName, setPreferredName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [stateAbbr, setStateAbbr] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [gpa, setGpa] = React.useState("");
  const [graduationYear, setGraduationYear] = React.useState("2028");
  const [hasValidId, setHasValidId] = React.useState("");
  const [idType, setIdType] = React.useState("");
  const [tsaNumber, setTsaNumber] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [parentRelationship, setParentRelationship] = React.useState("");
  const [parentPhone, setParentPhone] = React.useState("");
  const [parentEmail, setParentEmail] = React.useState("");
  const [emergencyName, setEmergencyName] = React.useState("");
  const [emergencyRelationship, setEmergencyRelationship] = React.useState("");
  const [emergencyPhone, setEmergencyPhone] = React.useState("");
  const [allergies, setAllergies] = React.useState("");
  const [medicalConditions, setMedicalConditions] = React.useState("");
  const [medications, setMedications] = React.useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = React.useState("");
  const [accessibilityNeeds, setAccessibilityNeeds] = React.useState("");
  const [roommatePreference, setRoommatePreference] = React.useState("");
  const [whyJoin, setWhyJoin] = React.useState("");
  const [agreeConduct, setAgreeConduct] = React.useState(false);
  const [agreeMedia, setAgreeMedia] = React.useState(false);
  const [agreeTravel, setAgreeTravel] = React.useState(false);
  const [parentSignature, setParentSignature] = React.useState("");
  const [signatureDate, setSignatureDate] = React.useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true); setApiError(null);
    try {
      const r = await window.bgaApi("/api/hbcu-tour-application", {
        legalFirstName, legalLastName, preferredName, dob, email, phone,
        street, city, state: stateAbbr, zip, school, gpa, graduationYear,
        hasValidId, idType, tsaNumber,
        parentName, parentRelationship, parentPhone, parentEmail,
        emergencyName, emergencyRelationship, emergencyPhone,
        allergies, medicalConditions, medications, dietaryRestrictions, accessibilityNeeds,
        roommatePreference, whyJoin, agreeConduct, agreeMedia, agreeTravel, parentSignature, signatureDate
      });
      if (!r.ok) { setApiError("Please check your entries, every required field must be filled in."); setSubmitting(false); return; }
      setSubmitted(true);
    } catch (err) { setApiError("Network error. Try again."); } finally { setSubmitting(false); }
  };

  /* Title lockup lives in HBCUTitleArt (painted SVG per the brand sheet). */

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
        @media (max-width: 900px) { .hb-sig-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 901px) and (max-width: 1200px) { .hb-sig-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 980px) {
          .hb-hero-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .hb-main-grid { grid-template-columns: 1fr !important; gap: 44px !important; }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section style={{ position: "relative", overflow: "hidden", padding: "64px 0 78px" }}>
        <NotebookBg />
        {/* marble corner scraps + doodles, per the brand sheet */}
        <MarbleTear w={210} h={110} rotate={-14} edge="bottom" style={{ top: -34, left: -46, zIndex: 1 }} />
        <MarbleTear w={190} h={100} rotate={10} edge="bottom" style={{ top: -30, right: -42, zIndex: 1 }} />
        <div aria-hidden style={{ position: "absolute", top: 44, right: "12%" }}><HBStar size={30} color={HBCU.gold} /></div>
        <div aria-hidden style={{ position: "absolute", top: 150, left: "14%" }}><HBHeart size={24} color={HBCU.purple} /></div>

        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div className="hb-hero-grid" style={{ display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 36, alignItems: "center" }}>
            <div>
              <div style={{ marginBottom: 20 }}><Pennant>OUR LEGACY<br />OUR FUTURE</Pennant></div>
              <HBCUTitleArt />
              <p className="hb-hand" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", color: HBCU.ink, margin: "16px 0 0", maxWidth: 520, lineHeight: 1.2 }}>
                Where Black girl brilliance meets culture, campus, and possibility.
              </p>
              <div style={{ marginTop: 18 }}><HBSquiggle width={190} color={HBCU.purple} /></div>
            </div>

            {/* Polaroid cluster, paper-clipped */}
            <div style={{ position: "relative", height: 400 }}>
              <div style={{ position: "absolute", top: 0, right: 18 }}>
                <Polaroid src="assets/photos/hbcu-tour-vi-2025-sm.jpg" caption="University of the Virgin Islands" rotate={5} w={208} clip />
              </div>
              <div style={{ position: "absolute", bottom: 0, left: 0 }}>
                <Polaroid src="assets/photos/hbcu-tour-bethune-sm.jpg" caption="Bethune Cookman" rotate={-6} w={196} tape={HBCU.purple} />
              </div>
              <div aria-hidden style={{ position: "absolute", top: 168, left: 158, zIndex: 4 }}><HBStar size={40} color={HBCU.orange} /></div>
              <div aria-hidden style={{ position: "absolute", top: -26, left: 6, zIndex: 4 }}><HBMegaphone size={64} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATUS BANNER ===== */}
      <TornDivider color={HBCU.black} />
      <section style={{ background: HBCU.black, color: HBCU.creamHi, padding: "26px 0" }}>
        <div className="container-wide" style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center", textAlign: "center" }}>
          <HBStar size={22} color={HBCU.gold} />
          <span className="hb-display" style={{ fontSize: "clamp(16px, 2vw, 22px)", color: HBCU.gold }}>APPLICATIONS ARE OPEN</span>
          <span className="hb-hand" style={{ fontSize: 22, opacity: 0.95 }}>fly with us to South Carolina, apply below</span>
          <HBStar size={22} color={HBCU.orange} />
        </div>
      </section>
      <TornDivider color={HBCU.cream} flip />

      {/* ===== MAIN ===== */}
      <section style={{ position: "relative", padding: "78px 0 92px" }}>
        <NotebookBg lines={false} />
        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div className="hb-main-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 56, alignItems: "start" }}>

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
                "Has a valid, unexpired government-issued photo ID for flying",
                "Available for travel October 21\u201324 to South Carolina",
                "Parent or guardian completes and signs the full application"].
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
                  <h2 className="hb-display" style={{ margin: 0, fontSize: "clamp(30px, 4vw, 46px)", color: HBCU.maroon }}>APPLICATION RECEIVED!</h2>
                  <p className="hb-body" style={{ fontSize: 16, lineHeight: 1.6, marginTop: 14, opacity: 0.8, maxWidth: 440, margin: "14px auto 0", fontWeight: 500 }}>
                    We'll email <strong>{email || "you"}</strong> and your parent or guardian to confirm the cohort and follow up with flight details for the October 21\u201324 trip to South Carolina.
                  </p>
                  <div style={{ display: "inline-flex", gap: 12, marginTop: 28, flexWrap: "wrap", justifyContent: "center" }}>
                    <button className="hb-btn hb-btn-cream" onClick={() => setSubmitted(false)}>Submit another scholar</button>
                    <button className="hb-btn hb-btn-maroon" onClick={() => onNavigate("programming")}>Explore programs</button>
                  </div>
                </div> :

              <form onSubmit={submit}>
                  <MarkerHeader color={HBCU.orange}>THE APPLICATION</MarkerHeader>
                  <h2 className="hb-display" style={{ margin: "18px 0 0", fontSize: "clamp(30px, 4vw, 44px)", color: HBCU.ink, lineHeight: 0.95 }}>Apply for the tour.</h2>
                  <p className="hb-hand" style={{ fontSize: 23, lineHeight: 1.2, marginTop: 8, color: HBCU.purple }}>
                    this trip means a flight, so we need the details airlines and TSA require
                  </p>

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.purple} rotate={1}>STUDENT INFORMATION</MarkerHeader></div>
                  <p style={{ fontSize: 12.5, opacity: 0.65, marginTop: 8, fontWeight: 600 }}>Legal name must match her government-issued photo ID exactly, this is what goes on the boarding pass.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 14 }}>
                    <HBField label="Legal first name"><input className="hb-input" value={legalFirstName} onChange={(e) => setLegalFirstName(e.target.value)} required style={hbField} placeholder="Imani" /></HBField>
                    <HBField label="Legal last name"><input className="hb-input" value={legalLastName} onChange={(e) => setLegalLastName(e.target.value)} required style={hbField} placeholder="Williams" /></HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="Preferred name (optional)"><input className="hb-input" value={preferredName} onChange={(e) => setPreferredName(e.target.value)} style={hbField} placeholder="What she goes by" /></HBField>
                    <HBField label="Date of birth"><input className="hb-input" type="date" value={dob} onChange={(e) => setDob(e.target.value)} required style={hbField} /></HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="Email"><input className="hb-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={hbField} placeholder="you@example.com" /></HBField>
                    <HBField label="Phone"><input className="hb-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required style={hbField} placeholder="(303) 555-0100" /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="Home street address"><input className="hb-input" value={street} onChange={(e) => setStreet(e.target.value)} required style={hbField} placeholder="123 Main St" /></HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="City"><input className="hb-input" value={city} onChange={(e) => setCity(e.target.value)} required style={hbField} placeholder="Aurora" /></HBField>
                    <HBField label="State"><input className="hb-input" value={stateAbbr} onChange={(e) => setStateAbbr(e.target.value)} required style={hbField} placeholder="CO" /></HBField>
                    <HBField label="ZIP"><input className="hb-input" value={zip} onChange={(e) => setZip(e.target.value)} required style={hbField} placeholder="80011" /></HBField>
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

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.denim} rotate={-1}>FLIGHT & IDENTIFICATION</MarkerHeader></div>
                  <div style={{ marginTop: 14 }}>
                    <HBField label="Does she have a valid, unexpired government-issued photo ID for flying?">
                      <select className="hb-input" value={hasValidId} onChange={(e) => setHasValidId(e.target.value)} required style={hbField}>
                        <option value="">Select one</option>
                        <option value="Yes">Yes</option>
                        <option value="No, will get one before travel">No, will get one before travel</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="ID type (optional)"><input className="hb-input" value={idType} onChange={(e) => setIdType(e.target.value)} style={hbField} placeholder="State ID, passport, etc." /></HBField>
                    <HBField label="TSA Known Traveler # (optional)"><input className="hb-input" value={tsaNumber} onChange={(e) => setTsaNumber(e.target.value)} style={hbField} placeholder="If she has one" /></HBField>
                  </div>

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.maroon} rotate={1.5}>PARENT / GUARDIAN</MarkerHeader></div>
                  <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, marginTop: 14 }}>
                    <HBField label="Full name"><input className="hb-input" value={parentName} onChange={(e) => setParentName(e.target.value)} required style={hbField} placeholder="Parent or guardian" /></HBField>
                    <HBField label="Relationship to student"><input className="hb-input" value={parentRelationship} onChange={(e) => setParentRelationship(e.target.value)} required style={hbField} placeholder="Mother" /></HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="Phone"><input className="hb-input" type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} required style={hbField} placeholder="(303) 555-0100" /></HBField>
                    <HBField label="Email"><input className="hb-input" type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} required style={hbField} placeholder="parent@example.com" /></HBField>
                  </div>

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.orange} rotate={-1.5}>EMERGENCY CONTACT</MarkerHeader></div>
                  <p style={{ fontSize: 12.5, opacity: 0.65, marginTop: 8, fontWeight: 600 }}>Someone reachable while she's traveling, if different from her parent/guardian, list a second person.</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16, marginTop: 14 }}>
                    <HBField label="Full name"><input className="hb-input" value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} required style={hbField} placeholder="Emergency contact" /></HBField>
                    <HBField label="Relationship to student"><input className="hb-input" value={emergencyRelationship} onChange={(e) => setEmergencyRelationship(e.target.value)} required style={hbField} placeholder="Aunt" /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="Phone"><input className="hb-input" type="tel" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} required style={hbField} placeholder="(303) 555-0100" /></HBField>
                  </div>

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.purple} rotate={1}>HEALTH & ACCOMMODATIONS</MarkerHeader></div>
                  <div style={{ marginTop: 14 }}>
                    <HBField label="Allergies (optional)"><textarea className="hb-input" value={allergies} onChange={(e) => setAllergies(e.target.value)} style={{ ...hbField, minHeight: 60, resize: "vertical" }} placeholder="Food, medication, environmental" /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="Medical conditions we should know about (optional)"><textarea className="hb-input" value={medicalConditions} onChange={(e) => setMedicalConditions(e.target.value)} style={{ ...hbField, minHeight: 60, resize: "vertical" }} placeholder="Asthma, diabetes, etc." /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="Medications she takes during the day (optional)"><textarea className="hb-input" value={medications} onChange={(e) => setMedications(e.target.value)} style={{ ...hbField, minHeight: 50, resize: "vertical" }} /></HBField>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                    <HBField label="Dietary restrictions (optional)"><input className="hb-input" value={dietaryRestrictions} onChange={(e) => setDietaryRestrictions(e.target.value)} style={hbField} placeholder="Vegetarian, halal, allergy-related" /></HBField>
                    <HBField label="Roommate preference (optional)"><input className="hb-input" value={roommatePreference} onChange={(e) => setRoommatePreference(e.target.value)} style={hbField} placeholder="Friend's name, if any" /></HBField>
                  </div>
                  <div style={{ marginTop: 16 }}>
                    <HBField label="Accessibility needs (optional)"><textarea className="hb-input" value={accessibilityNeeds} onChange={(e) => setAccessibilityNeeds(e.target.value)} style={{ ...hbField, minHeight: 50, resize: "vertical" }} placeholder="Mobility, sensory, or other accommodations" /></HBField>
                  </div>

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.denim} rotate={-1}>WHY SHE WANTS TO GO</MarkerHeader></div>
                  <div style={{ marginTop: 14 }}>
                    <HBField label="In her own words, why does she want to join the tour?"><textarea className="hb-input" value={whyJoin} onChange={(e) => setWhyJoin(e.target.value)} required style={{ ...hbField, minHeight: 110, resize: "vertical" }} placeholder="A few sentences is plenty." /></HBField>
                  </div>

                  <div style={{ marginTop: 28 }}><MarkerHeader color={HBCU.maroon} rotate={1.5}>CONSENT & SIGNATURE</MarkerHeader></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
                    <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>
                      <input type="checkbox" checked={agreeTravel} onChange={(e) => setAgreeTravel(e.target.checked)} required style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0 }} />
                      I give permission for my student to travel by air to South Carolina, October 21\u201324, as part of the BGA HBCU Tour.
                    </label>
                    <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>
                      <input type="checkbox" checked={agreeConduct} onChange={(e) => setAgreeConduct(e.target.checked)} required style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0 }} />
                      I agree that my student will follow the tour's code of conduct for the full trip.
                    </label>
                    <label style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14, lineHeight: 1.5, fontWeight: 500 }}>
                      <input type="checkbox" checked={agreeMedia} onChange={(e) => setAgreeMedia(e.target.checked)} required style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0 }} />
                      I consent to photos and video of my student being used by BGA for promotional purposes.
                    </label>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16, marginTop: 18 }}>
                    <HBField label="Parent/guardian e-signature (type full name)"><input className="hb-input" value={parentSignature} onChange={(e) => setParentSignature(e.target.value)} required style={hbField} placeholder="Type your full legal name" /></HBField>
                    <HBField label="Date"><input className="hb-input" type="date" value={signatureDate} onChange={(e) => setSignatureDate(e.target.value)} required style={hbField} /></HBField>
                  </div>

                  {apiError && <div className="hb-body" style={{ marginTop: 18, fontSize: 14, color: HBCU.maroon, fontWeight: 700 }}>{apiError}</div>}

                  <button type="submit" className="hb-btn hb-btn-orange" disabled={submitting} style={{ marginTop: 26, opacity: submitting ? 0.6 : 1 }}>
                    {submitting ? "Submitting..." : "Submit application"}
                  </button>
                  <p className="hb-body" style={{ fontSize: 12, opacity: 0.6, marginTop: 14, fontWeight: 500 }}>
                    Your information is used only for the HBCU Tour and BGA cohort opportunities. No third-party sharing.
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE EXPERIENCE, the six pillars from the brand sheet ===== */}
      <TornDivider color={HBCU.creamHi} />
      <section style={{ background: HBCU.creamHi, position: "relative", padding: "64px 0 78px", overflow: "hidden" }}>
        <MarbleTear w={170} h={90} rotate={12} edge="top" style={{ bottom: -28, right: -38 }} />
        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center" }}>
            <MarkerHeader color={HBCU.black} rotate={-1}>THE SIGNATURE EXPERIENCE</MarkerHeader>
            <p className="hb-hand" style={{ fontSize: 26, color: HBCU.purple, margin: "14px 0 0" }}>what every scholar gets on tour</p>
          </div>
          <div className="hb-sig-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 34 }}>
            {[
            { t: "CAMPUS TOURS", b: "See it. Feel it. Believe it.", c: HBCU.purple, ic: <path d="M4 13 L16 7 L28 13 L16 19 Z M9 16 V 22 C 9 25, 23 25, 23 22 V 16 M27 14 V 21" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round" strokeLinecap="round" /> },
            { t: "COLLEGE READINESS", b: "Plan it. Prepare it. Own it.", c: HBCU.orange, ic: <path d="M8 5 H 22 a2 2 0 0 1 2 2 V 25 a2 2 0 0 1 -2 2 H 8 a2 2 0 0 1 -2 -2 V 7 a2 2 0 0 1 2 -2 Z M10 11 H 20 M10 16 H 20 M10 21 H 16" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" /> },
            { t: "LEADERSHIP", b: "Lead now. Impact always.", c: HBCU.maroon, ic: <path d="M10 27 V 14 M16 27 V 9 M22 27 V 14 M10 14 a3 3 0 1 1 0 -6 a3 3 0 0 1 0 6 M16 9 a3 3 0 1 1 0 -6 a3 3 0 0 1 0 6 M22 14 a3 3 0 1 1 0 -6 a3 3 0 0 1 0 6" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" /> },
            { t: "CULTURE & HISTORY", b: "Know your roots. Claim your power.", c: HBCU.purple, ic: <path d="M16 4 a12 12 0 1 0 0 24 a12 12 0 0 0 0 -24 M4 16 H 28 M16 4 C 11 10, 11 22, 16 28 M16 4 C 21 10, 21 22, 16 28" stroke="currentColor" strokeWidth="2" fill="none" /> },
            { t: "SISTERHOOD", b: "Your people. Your tribe. Your forever.", c: HBCU.gold, ic: <path d="M16 26 C 5 18, 6 8, 12 8 C 14.5 8, 16 10.5, 16 10.5 C 16 10.5, 17.5 8, 20 8 C 26 8, 27 18, 16 26 Z" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round" /> },
            { t: "TRAVEL & MEMORIES", b: "Collect moments. Create legacy.", c: HBCU.denim, ic: <path d="M5 10 H 11 L 13 7 H 19 L 21 10 H 27 V 25 H 5 Z M16 21 a4.5 4.5 0 1 0 0 -9 a4.5 4.5 0 0 0 0 9" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round" /> }].
            map((p, i) =>
            <div key={i} style={{ position: "relative", background: HBCU.paper, border: `2.5px solid ${HBCU.black}`, borderRadius: 14, padding: "22px 20px 20px", boxShadow: `5px 5px 0 ${p.c}`, transform: `rotate(${i % 2 ? 0.7 : -0.7}deg)`, display: "flex", gap: 15, alignItems: "flex-start" }}>
                <span style={{ width: 46, height: 46, borderRadius: "50%", background: `${p.c}18`, color: p.c, display: "grid", placeItems: "center", flexShrink: 0, border: `2px solid ${HBCU.black}` }}>
                  <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden>{p.ic}</svg>
                </span>
                <span>
                  <span className="hb-display" style={{ display: "block", fontSize: 15, color: p.c === HBCU.gold ? "#9C7418" : p.c, letterSpacing: "0.03em" }}>{p.t}</span>
                  <span className="hb-hand" style={{ display: "block", fontSize: 21, lineHeight: 1.15, color: HBCU.ink, marginTop: 4 }}>{p.b}</span>
                </span>
              </div>)}
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
