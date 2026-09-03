/* Black Women in Education, Resource Hub.
   Uses the retro-floral "Black Women in Education" BGA program brand system:
   sage green, dusty blush, terracotta, mustard, soft peach, creamy white. */

/* ============ BRAND PALETTE ============ */
const BWE = {
  sage: "#9DAA7E", // Sage Green
  blush: "#E6A2A1", // Dusty Blush
  terracotta: "#B26C5F", // Terracotta
  mustard: "#E0B45F", // Mustard Yellow
  peach: "#F0CDB0", // Soft Peach
  cream: "#F8F0E1", // Creamy White
  forest: "#5B6E48", // Forest Sage
  ink: "#3F3A33" // warm text ink
};

const bweFonts = {
  display: '"Bagel Fat One", "Chewy", "Arial Black", system-ui, cursive',
  body: 'Calibri, "Carlito", "Segoe UI", system-ui, sans-serif'
};

/* ============ FLORAL MOTIFS (simple hand-drawn-feel SVG) ============ */
function Daisy({ size = 44, petal = "#F8F0E1", center = "#E0B45F", outline = "#5B6E48", style = {} }) {
  const petals = Array.from({ length: 8 });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="2.5">
        {petals.map((_, i) => {
          const a = i * 360 / 8;
          return (
            <ellipse key={i} cx="50" cy="24" rx="9" ry="18" fill={petal}
            transform={`rotate(${a} 50 50)`} />);

        })}
        <circle cx="50" cy="50" r="13" fill={center} />
      </g>
    </svg>);

}

function Marigold({ size = 44, color = "#E0B45F", outline = "#B26C5F", style = {} }) {
  const ring = (r, n, fill) =>
  Array.from({ length: n }).map((_, i) => {
    const a = i * 360 / n;
    return <ellipse key={`${r}-${i}`} cx="50" cy={50 - r} rx="7" ry={r * 0.55} fill={fill}
    stroke={outline} strokeWidth="2" transform={`rotate(${a} 50 50)`} />;
  });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      {ring(30, 12, color)}
      {ring(20, 10, "#F0CDB0")}
      <circle cx="50" cy="50" r="10" fill={color} stroke={outline} strokeWidth="2" />
    </svg>);

}

function Sprig({ w = 70, h = 30, color = "#9DAA7E", outline = "#5B6E48", style = {} }) {
  return (
    <svg width={w} height={h} viewBox="0 0 120 50" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="2.5" fill={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 25 Q 60 18, 112 25" fill="none" />
        {[24, 44, 64, 84].map((x, i) =>
        <g key={i}>
            <ellipse cx={x} cy="14" rx="9" ry="5" transform={`rotate(-30 ${x} 14)`} />
            <ellipse cx={x + 8} cy="36" rx="9" ry="5" transform={`rotate(30 ${x + 8} 36)`} />
          </g>
        )}
      </g>
    </svg>);

}

/* ============ PAGE ============ */
function EducationHubPage({ onNavigate }) {
  return (
    <div style={{ background: BWE.cream, color: BWE.ink, fontFamily: bweFonts.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Chewy&family=Carlito:ital,wght@0,400;0,700;1,400&display=swap');
        .bwe-display { font-family: ${bweFonts.display}; font-weight: 400; line-height: 0.96; letter-spacing: 0.01em; }
        .bwe-eyebrow { font-family: ${bweFonts.body}; font-weight: 700; font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase; }
        .bwe-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 15px 26px; border-radius: 999px; border: 2.5px solid ${BWE.forest};
          font-family: ${bweFonts.body}; font-weight: 700; font-size: 15px;
          letter-spacing: 0.02em; cursor: pointer;
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
        }
        .bwe-btn:hover { transform: translateY(-2px); }
        .bwe-btn-terra { background: ${BWE.terracotta}; color: ${BWE.cream}; box-shadow: 3px 4px 0 ${BWE.forest}; }
        .bwe-btn-terra:hover { box-shadow: 4px 6px 0 ${BWE.forest}; }
        .bwe-btn-sage { background: ${BWE.sage}; color: ${BWE.ink}; box-shadow: 3px 4px 0 ${BWE.forest}; }
        .bwe-btn-sage:hover { box-shadow: 4px 6px 0 ${BWE.forest}; }
        .bwe-btn-ghost { background: transparent; color: ${BWE.forest}; }
        .bwe-btn-ghost:hover { background: ${BWE.forest}; color: ${BWE.cream}; }
        .bwe-link { color: ${BWE.terracotta}; font-weight: 700; text-decoration: none; border-bottom: 2px solid transparent; transition: border-color .15s; }
        .bwe-link:hover { border-color: ${BWE.terracotta}; }
      `}</style>

      <BWEHero onNavigate={onNavigate} />
      <BWEVoiceStrip />
      <BWESection
        id="bwe-pd"
        eyebrow="01 · Grow"
        title="Professional Development"
        blurb="Real support for the real labor of teaching, leading, and advocating. Funding, mentorship, and rooms full of women who get it."
        accent={BWE.sage}
        bg={BWE.cream}
        items={PD_ITEMS}
        onNavigate={onNavigate}
        ctaLabel="Join the Educator Cohort"
        ctaRoute="contact?intent=education" />
      
      <BWESection
        id="bwe-wellness"
        eyebrow="02 · Restore"
        title={<>Wellness Resources <span style={{ whiteSpace: "nowrap" }}>&amp; Stipends</span></>}
        blurb="Rest is part of the work. Direct stipends and wellness resources so our educators are cared for the way they care for everyone else."
        accent={BWE.blush}
        bg={BWE.peach}
        items={WELLNESS_ITEMS}
        onNavigate={onNavigate}
        ctaLabel="Request a Stipend"
        ctaRoute="contact?intent=education" />
      
      <BWECta onNavigate={onNavigate} />
    </div>);

}

/* ====================================================================
   HERO
   ==================================================================== */
function BWEHero({ onNavigate }) {
  const titleWords = ["BLACK", "WOMEN", "IN", "EDUCATION"];
  const colors = [BWE.forest, BWE.blush, BWE.mustard, BWE.terracotta];
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "84px 0 96px", background: BWE.cream }}>
      {/* corner florals */}
      <Daisy size={90} style={{ position: "absolute", top: 40, left: 36, transform: "rotate(-12deg)", opacity: 0.9 }} />
      <Marigold size={72} style={{ position: "absolute", top: 120, left: 130, transform: "rotate(8deg)", opacity: 0.85 }} />
      <Marigold size={84} color={BWE.terracotta} style={{ position: "absolute", top: 50, right: 60, transform: "rotate(-10deg)", opacity: 0.9 }} />
      <Daisy size={64} petal={BWE.blush} center={BWE.terracotta} style={{ position: "absolute", top: 150, right: 150, opacity: 0.9 }} />
      <Sprig w={150} h={60} style={{ position: "absolute", bottom: 30, left: 70, transform: "rotate(6deg)", opacity: 0.8 }} />
      <Sprig w={130} h={54} style={{ position: "absolute", bottom: 40, right: 80, transform: "scaleX(-1) rotate(6deg)", opacity: 0.8 }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 26 }}>
          <span style={{ color: BWE.mustard, fontSize: 22 }}>✦</span>
          <span className="bwe-eyebrow" style={{ color: BWE.forest }}>A BGA Program · Resource Hub</span>
          <span style={{ color: BWE.mustard, fontSize: 22 }}>✦</span>
        </div>

        <h1 className="bwe-display" style={{ margin: 0, fontSize: "clamp(48px, 9vw, 132px)" }}>
          {titleWords.map((w, i) =>
          <span key={i} style={{ color: colors[i], display: "inline-block", padding: "0 0.12em" }}>{w}</span>
          )}
        </h1>

        <p style={{
          margin: "30px auto 0", maxWidth: 660, fontSize: 19, lineHeight: 1.6,
          color: BWE.ink, fontWeight: 400
        }}>We hold more than the lesson. We hold the future. Everything a Black woman educator needs to grow her practice, and be cared for while she does it.


        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 38, flexWrap: "wrap" }}>
          <button className="bwe-btn bwe-btn-terra" onClick={() => {
            document.getElementById("bwe-pd")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}>Professional Development →</button>
          <button className="bwe-btn bwe-btn-sage" onClick={() => {
            document.getElementById("bwe-wellness")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}>Wellness & Stipends →</button>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   VOICE STRIP
   ==================================================================== */
function BWEVoiceStrip() {
  const tiles = [
  { t: "ROOTED.", c: BWE.forest },
  { t: "RESILIENT.", c: BWE.terracotta },
  { t: "REDEFINING.", c: BWE.mustard }];

  return (
    <div style={{
      background: BWE.forest, color: BWE.cream,
      display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
      borderTop: `4px solid ${BWE.mustard}`, borderBottom: `4px solid ${BWE.mustard}`
    }}>
      {tiles.map((t, i) =>
      <div key={i} style={{
        padding: "34px 20px", textAlign: "center",
        borderRight: i < 2 ? `2px solid rgba(248,240,225,0.25)` : "none"
      }}>
          <span className="bwe-display" style={{ fontSize: "clamp(26px, 3.2vw, 44px)", color: t.c }}>{t.t}</span>
        </div>
      )}
    </div>);

}

/* ====================================================================
   SECTION (shared by both PD + Wellness)
   ==================================================================== */
function BWESection({ id, eyebrow, title, blurb, accent, bg, items, onNavigate, ctaLabel, ctaRoute }) {
  return (
    <section id={id} style={{ background: bg, padding: "104px 0" }}>
      <div className="container-wide">
        <div style={{ maxWidth: 760, marginBottom: 12 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ width: 34, height: 5, borderRadius: 3, background: accent }} />
            <span className="bwe-eyebrow" style={{ color: BWE.forest }}>{eyebrow}</span>
          </div>
          <h2 className="bwe-display" style={{ margin: 0, fontSize: "clamp(38px, 5.4vw, 72px)", color: BWE.ink }}>{title}</h2>
          <p style={{ margin: "20px 0 0", fontSize: 18, lineHeight: 1.6, maxWidth: 660, color: BWE.ink, opacity: 0.85 }}>{blurb}</p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 52
        }}>
          {items.map((it, i) => <ResourceCard key={i} {...it} />)}
        </div>

        <div style={{ marginTop: 48 }}>
          <button className="bwe-btn bwe-btn-terra" onClick={() => onNavigate(ctaRoute)}>{ctaLabel} →</button>
        </div>
      </div>
    </section>);

}

function ResourceCard({ flower, fcolor, title, body, meta, link }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: BWE.cream,
        border: `2.5px solid ${BWE.forest}`,
        borderRadius: 22,
        padding: "26px 26px 28px",
        transform: hover ? "translateY(-5px)" : "none",
        boxShadow: hover ? `5px 7px 0 ${fcolor}` : `3px 4px 0 ${fcolor}`,
        transition: "all .18s ease",
        display: "flex", flexDirection: "column"
      }}>
      
      <div style={{ marginBottom: 16 }}>
        {flower === "daisy" && <Daisy size={52} center={fcolor} />}
        {flower === "marigold" && <Marigold size={52} color={fcolor} />}
        {flower === "blush-daisy" && <Daisy size={52} petal={BWE.blush} center={fcolor} />}
      </div>
      <h3 className="bwe-display" style={{ margin: 0, fontSize: 23, color: BWE.ink, lineHeight: 1.05 }}>{title}</h3>
      <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.55, color: BWE.ink, opacity: 0.85, flex: 1 }}>{body}</p>
      {meta &&
      <div style={{
        marginTop: 16, display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 8,
        background: BWE.peach, color: BWE.terracotta,
        border: `2px solid ${BWE.terracotta}`, borderRadius: 999,
        padding: "5px 13px", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.03em"
      }}>{meta}</div>
      }
    </article>);

}

/* ====================================================================
   CONTENT
   ==================================================================== */
const PD_ITEMS = [
{
  flower: "daisy", fcolor: BWE.mustard,
  title: "Advocate Training",
  body: "Equip educators to advocate for Black girls, and for themselves, inside the systems they work in every day.",
  meta: "Quarterly workshops"
},
{
  flower: "marigold", fcolor: BWE.terracotta,
  title: "Monthly Cohort Meet-ups",
  body: "Year-round gatherings with other Black women educators across Colorado. Strategy, community, and honest conversation.",
  meta: "Monthly · statewide"
},
{
  flower: "blush-daisy", fcolor: BWE.blush,
  title: "Pathway Support",
  body: "Guidance and references for the college, grad school, and certification routes that move a career forward.",
  meta: "Grad school + certs"
},
{
  flower: "daisy", fcolor: BWE.sage,
  title: "Conference Stipends",
  body: "Funding to attend the professional conferences and trainings that keep our educators at the front of their field.",
  meta: "Application-based"
},
{
  flower: "marigold", fcolor: BWE.mustard,
  title: "Mentorship Circles",
  body: "Early-career educators paired with veterans who've walked the path. Real mentorship, not a one-time match.",
  meta: "Ongoing pairs"
},
{
  flower: "blush-daisy", fcolor: BWE.terracotta,
  title: "Annual Retreat",
  body: "A weekend of speakers, healers, and strategy. The room where the next season of the work gets planned.",
  meta: "Once a year"
}];


const WELLNESS_ITEMS = [
{
  flower: "daisy", fcolor: BWE.blush,
  title: "Wellness Stipend",
  body: "A direct self-care fund, for the gym membership, the massage, the thing that keeps her whole. No receipts of worthiness required.",
  meta: "Direct stipend"
},
{
  flower: "marigold", fcolor: BWE.terracotta,
  title: "Mental Health Support",
  body: "Reimbursed sessions with culturally affirming therapists and counselors who understand the specific weight of this work.",
  meta: "Therapy reimbursement"
},
{
  flower: "blush-daisy", fcolor: BWE.mustard,
  title: "Paid Summer Placements",
  body: "When funded, paid summer roles that let educators grow their practice without giving up a season of income.",
  meta: "Seasonal · when funded"
},
{
  flower: "daisy", fcolor: BWE.sage,
  title: "Health Fairs",
  body: "Screenings, wellness checks, and trusted health resources, brought directly to our community of educators.",
  meta: "Seasonal events"
},
{
  flower: "marigold", fcolor: BWE.blush,
  title: "Appreciation Pop-ups",
  body: "Surprise celebrations and gifts throughout the year. Small, frequent reminders that this labor is seen.",
  meta: "Throughout the year"
},
{
  flower: "blush-daisy", fcolor: BWE.terracotta,
  title: "Rest & Recovery Grants",
  body: "Rest is part of the work. Recovery grants for the educators who keep showing up, so they can step back when they need to.",
  meta: "Need-based"
}];


/* ====================================================================
   CTA
   ==================================================================== */
function BWECta({ onNavigate }) {
  return (
    <section style={{ background: BWE.cream, padding: "100px 0 120px" }}>
      <div className="container-wide" style={{
        position: "relative", overflow: "hidden",
        background: BWE.sage, color: BWE.ink,
        border: `3px solid ${BWE.forest}`, borderRadius: 28,
        padding: "72px 48px", textAlign: "center",
        boxShadow: `6px 8px 0 ${BWE.forest}`
      }}>
        <Marigold size={70} color={BWE.mustard} style={{ position: "absolute", top: 26, left: 36, opacity: 0.9 }} />
        <Daisy size={64} petal={BWE.cream} center={BWE.terracotta} style={{ position: "absolute", bottom: 26, right: 40, opacity: 0.9 }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="bwe-eyebrow" style={{ color: BWE.forest, marginBottom: 16 }}>We hold the future.</div>
          <h2 className="bwe-display" style={{ margin: 0, fontSize: "clamp(34px, 5vw, 64px)", color: BWE.ink }}>
            We teach. We lead.<br />We grow futures.
          </h2>
          <p style={{ margin: "22px auto 34px", maxWidth: 560, fontSize: 17.5, lineHeight: 1.55 }}>
            Applications for the annual educator cohort open each December. Reach out anytime to learn
            about stipends, mentorship, and the next retreat.
          </p>
          <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="bwe-btn bwe-btn-terra" onClick={() => onNavigate("contact?intent=education")}>Join the Cohort →</button>
            <button className="bwe-btn bwe-btn-ghost" onClick={() => onNavigate("programming")}>Back to Programs</button>
          </div>
        </div>
      </div>
    </section>);

}

window.EducationHubPage = EducationHubPage;