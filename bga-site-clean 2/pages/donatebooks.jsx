/* Donate Black Girl Hair Books, themed in the Black Girl Hair Project brand system.
   "Her Hair. Her Crown. Her Story." Joyful, rooted, nurturing, retro, educational.
   Palette: Crown Pink, Sisterhood Blue, Sunshine Yellow, Leafy Green, Joyful Orange,
   Cocoa Brown, Soft Cream, Rich Black.  Now also offers "Hire BGA" for camps,
   classes, churches & nonprofits. */

/* ============ BRAND PALETTE ============ */
const BGHP = {
  pink: "#E8588A",     // Crown Pink
  blue: "#4F8FD0",     // Sisterhood Blue
  yellow: "#F2C53D",   // Sunshine Yellow
  green: "#5E9447",    // Leafy Green
  orange: "#E8742C",   // Joyful Orange
  cocoa: "#5A3A2C",    // Cocoa Brown
  cream: "#FAF3E2",    // Soft Cream
  creamDeep: "#F2E6CC",
  black: "#211C18",    // Rich Black
  ink: "#3A2C24",
};

const bghpFonts = {
  display: '"Fredoka", "Baloo 2", system-ui, sans-serif',
  script: '"Pacifico", "Caveat", cursive',
  body: '"Nunito", system-ui, sans-serif',
};

/* ============ HAND-DRAWN MOTIFS ============ */
function HairCrown({ size = 48, fill = BGHP.yellow, outline = BGHP.cocoa, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M16 72 L24 36 L40 58 L50 28 L60 58 L76 36 L84 72 Z" fill={fill} />
        <path d="M16 72 H84" fill="none" />
        <circle cx="24" cy="34" r="4.5" fill={BGHP.pink} />
        <circle cx="50" cy="25" r="4.5" fill={BGHP.pink} />
        <circle cx="76" cy="34" r="4.5" fill={BGHP.pink} />
      </g>
    </svg>
  );
}

function HairFlower({ size = 46, petal = BGHP.blue, center = BGHP.yellow, outline = BGHP.cocoa, style = {} }) {
  const petals = Array.from({ length: 6 });
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="3">
        {petals.map((_, i) => (
          <ellipse key={i} cx="50" cy="26" rx="11" ry="19" fill={petal} transform={`rotate(${i * 60} 50 50)`} />
        ))}
        <circle cx="50" cy="50" r="12" fill={center} />
      </g>
    </svg>
  );
}

function HairLeaf({ w = 76, h = 34, color = BGHP.green, outline = BGHP.cocoa, style = {} }) {
  return (
    <svg width={w} height={h} viewBox="0 0 120 50" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="3" fill={color} strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 25 Q 60 16, 112 25" fill="none" />
        {[26, 50, 74, 96].map((x, i) => (
          <g key={i}>
            <path d={`M${x} 24 Q ${x - 6} 8, ${x - 16} 12 Q ${x - 10} 22, ${x} 24`} />
            <path d={`M${x + 6} 26 Q ${x + 12} 42, ${x + 22} 38 Q ${x + 16} 28, ${x + 6} 26`} />
          </g>
        ))}
      </g>
    </svg>
  );
}

function HairPick({ size = 44, color = BGHP.pink, outline = BGHP.cocoa, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill={color}>
        {[28, 40, 52, 64, 72].map((x, i) => <line key={i} x1={x} y1="20" x2={x} y2="52" />)}
        <path d="M24 50 H76 V60 Q76 66 70 66 H60 V82 Q60 88 54 88 H46 Q40 88 40 82 V66 H30 Q24 66 24 60 Z" />
      </g>
    </svg>
  );
}

function HairBonnet({ size = 46, color = BGHP.blue, outline = BGHP.cocoa, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round">
        <path d="M16 56 Q50 14 84 56 Q50 50 16 56 Z" fill={color} />
        <path d="M14 56 Q50 78 86 56 Q86 66 78 70 Q50 84 22 70 Q14 66 14 56 Z" fill={color} />
      </g>
    </svg>
  );
}

function HairBraid({ size = 40, color = BGHP.cocoa, outline = BGHP.black, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g stroke={outline} strokeWidth="3" fill={color} strokeLinejoin="round">
        {[22, 40, 58, 76].map((y, i) => (
          <path key={i} d={`M40 ${y} Q50 ${y + 6} 60 ${y} Q50 ${y + 14} 40 ${y + 8} Z`} />
        ))}
        <circle cx="50" cy="86" r="6" fill={BGHP.pink} />
      </g>
    </svg>
  );
}

/* scattered decorative motif field */
function MotifScatter() {
  const items = [
    { C: HairFlower, top: "14%", left: "6%", size: 38, r: -12, props: { petal: BGHP.pink, center: BGHP.yellow } },
    { C: HairLeaf, top: "62%", left: "3%", size: 64, r: 8 },
    { C: HairCrown, top: "74%", left: "12%", size: 40, r: -8 },
    { C: HairFlower, top: "20%", left: "90%", size: 42, r: 14, props: { petal: BGHP.blue } },
    { C: HairLeaf, top: "70%", left: "88%", size: 64, r: -16 },
    { C: HairFlower, top: "48%", left: "95%", size: 30, r: 0, props: { petal: BGHP.yellow, center: BGHP.orange } },
  ];
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
      {items.map((it, i) => {
        const { C } = it;
        return (
          <div key={i} style={{ position: "absolute", top: it.top, left: it.left, transform: `translate(-50%,-50%) rotate(${it.r}deg)`, opacity: 0.9 }}>
            <C size={it.size} {...(it.props || {})} />
          </div>
        );
      })}
    </div>
  );
}

/* ============ PAGE ============ */
function DonateBooksPage({ onNavigate }) {
  return (
    <div data-screen-label="Donate Hair Books" style={{ background: BGHP.cream, color: BGHP.ink, fontFamily: bghpFonts.body }}>
      <BGHPHero onNavigate={onNavigate} />
      <BGHPDonate />
      <BGHPGallery />
      <BGHPHire />
      <BGHPFooterBand />
    </div>
  );
}

/* ---- HERO ---- */
function BGHPHero({ onNavigate }) {
  return (
    <section style={{ position: "relative", background: BGHP.cream, padding: "72px 0 64px", overflow: "hidden", borderBottom: `3px dashed ${BGHP.pink}` }}>
      <MotifScatter />
      <div className="container-wide" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center" }}>
          {/* left: copy */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "9px 20px", borderRadius: 999, background: BGHP.green, color: BGHP.cream, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              <HairCrown size={20} fill={BGHP.yellow} outline={BGHP.cream} /> The Black Girl Hair Project
            </div>
            <h1 style={{ fontFamily: bghpFonts.display, fontWeight: 700, color: BGHP.cocoa, fontSize: "clamp(38px, 5.4vw, 68px)", lineHeight: 1.03, letterSpacing: "-0.01em", margin: "24px 0 0" }}>
              Donate <span style={{ color: BGHP.pink }}>Black Girl Hair</span> books.
            </h1>
            <p style={{ fontFamily: bghpFonts.script, color: BGHP.green, fontSize: "clamp(23px, 3vw, 34px)", margin: "16px 0 0" }}>
              Her Hair. Her Crown. Her Story.
            </p>
            <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: 520, margin: "22px 0 0", color: BGHP.ink, opacity: 0.85, fontWeight: 500 }}>
              Help us build a library that reflects every crown, new or gently used picture books,
              middle grade, and YA titles centering Black hair, identity, and joy.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <button onClick={() => document.getElementById("bghp-donate")?.scrollIntoView({ behavior: "smooth" })} style={pillBtn(BGHP.pink, BGHP.cream)}>
                Donate books
              </button>
              <button onClick={() => document.getElementById("bghp-hire")?.scrollIntoView({ behavior: "smooth" })} style={pillBtn("transparent", BGHP.cocoa, BGHP.cocoa)}>
                Hire BGA →
              </button>
            </div>
          </div>

          {/* right: featured illustration */}
          <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
            <div aria-hidden style={{ position: "absolute", width: "82%", height: "82%", borderRadius: "46% 54% 52% 48% / 52% 48% 52% 48%", background: BGHP.pink, opacity: 0.18 }} />
            <FramedArt src="assets/hairproject/pink-lotion.png" alt="Pink Lotion hair moisturizer, Black Girl Advocate illustration" accent={BGHP.pink} rotate={-3} max={400} />
            <HairFlower size={48} petal={BGHP.yellow} center={BGHP.orange} outline={BGHP.cocoa} style={{ position: "absolute", top: -10, right: "10%", transform: "rotate(12deg)" }} />
            <HairFlower size={40} petal={BGHP.blue} center={BGHP.yellow} outline={BGHP.cocoa} style={{ position: "absolute", bottom: 4, left: "8%", transform: "rotate(-10deg)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- IMAGERY GALLERY ---- */
function BGHPGallery() {
  const art = [
    { src: "assets/hairproject/pink-lotion.png", label: "Pink Lotion", note: "the after-bath ritual", accent: BGHP.pink },
    { src: "assets/hairproject/murrays-beeswax.png", label: "Murray's Beeswax", note: "waves · braids · curls · locs", accent: BGHP.green },
    { src: "assets/hairproject/murrays-grease.png", label: "Superior Hair Grease", note: "the dresser-top classic", accent: BGHP.orange },
  ];
  return (
    <section style={{ background: BGHP.creamDeep, padding: "84px 0" }}>
      <div className="container-wide">
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ fontFamily: bghpFonts.script, color: BGHP.orange, fontSize: 24 }}>Our imagery</div>
          <h2 style={{ fontFamily: bghpFonts.display, fontWeight: 700, color: BGHP.cocoa, fontSize: "clamp(30px, 4.4vw, 46px)", lineHeight: 1.08, margin: "4px 0 0" }}>
            Our Hair. Our History. <span style={{ color: BGHP.pink }}>Our Future.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, margin: "16px auto 0", color: BGHP.ink, opacity: 0.82, fontWeight: 500, maxWidth: 600 }}>
            The jars and bottles that lined every bathroom shelf, reimagined as art, so a Black girl
            sees her crown, her culture, and her care celebrated.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginTop: 46 }}>
          {art.map((a, i) => (
            <figure key={i} style={{ margin: 0, textAlign: "center" }}>
              <FramedArt src={a.src} alt={a.label} accent={a.accent} rotate={i === 1 ? 0 : i === 0 ? -2 : 2} />
              <figcaption style={{ marginTop: 16 }}>
                <div style={{ fontFamily: bghpFonts.display, fontWeight: 700, fontSize: 20, color: BGHP.cocoa }}>{a.label}</div>
                <div style={{ fontFamily: bghpFonts.script, fontSize: 18, color: a.accent }}>{a.note}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* reusable framed illustration */
function FramedArt({ src, alt, accent = BGHP.pink, rotate = 0, max = 380 }) {
  return (
    <div style={{ width: "100%", maxWidth: max, transform: `rotate(${rotate}deg)`, position: "relative" }}>
      <div style={{ background: "#fff", padding: 10, borderRadius: 22, border: `3px solid ${accent}`, boxShadow: "0 18px 40px -20px rgba(58,44,36,0.45)" }}>
        <img src={src} alt={alt} loading="lazy" style={{ display: "block", width: "100%", borderRadius: 14, aspectRatio: "1545 / 2000", objectFit: "cover" }} />
      </div>
    </div>
  );
}

/* ---- DONATE SECTION ---- */
function BGHPDonate() {
  const [submitted, setSubmitted] = React.useState(false);
  const [titles, setTitles] = React.useState("");
  const [count, setCount] = React.useState("");
  const [condition, setCondition] = React.useState("new");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [shipping, setShipping] = React.useState("ship");
  const [submitting, setSubmitting] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const r = await window.bgaApi("/api/donate-books", { name, email, titles, count, condition, shipping });
      if (r && r.ok) setSubmitted(true);
      else setSubmitted(true);
    } catch (_) { setSubmitted(true); }
    finally { setSubmitting(false); }
  };

  const suggested = [
    "Hair Love, Matthew A. Cherry",
    "Don't Touch My Hair!, Sharee Miller",
    "I Love My Hair!, Natasha Anastasia Tarpley",
    "Crown: An Ode to the Fresh Cut, Derrick Barnes",
    "My Hair is a Garden, Cozbi A. Cabrera",
    "Bedtime Bonnet, Nancy Redd",
  ];

  return (
    <section id="bghp-donate" style={{ padding: "84px 0", background: BGHP.cream }}>
      <div className="container-wide">
        <SectionTitle kicker="The book drive" title={<>What we're <span style={{ color: BGHP.pink }}>collecting.</span></>} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 56, marginTop: 46, alignItems: "start" }}>
          {/* left: list + mail */}
          <aside>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {suggested.map((s, i) => {
                const dot = [BGHP.pink, BGHP.blue, BGHP.yellow, BGHP.green, BGHP.orange, BGHP.pink][i % 6];
                return (
                  <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 13, fontSize: 15.5, lineHeight: 1.5, fontWeight: 600, color: BGHP.ink, background: "#fff", border: `2px solid ${BGHP.creamDeep}`, borderRadius: 14, padding: "12px 15px" }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: dot, color: "#fff", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                      <Icon.Check size={13} />
                    </span>
                    {s}
                  </li>
                );
              })}
            </ul>
            <p style={{ fontSize: 15, lineHeight: 1.55, marginTop: 20, color: BGHP.green, fontFamily: bghpFonts.script }}>
              Other titles are welcome, anything that helps a Black girl see herself.
            </p>

            <div style={{ marginTop: 26, padding: 24, background: BGHP.blue, borderRadius: 18, color: BGHP.cream, position: "relative", overflow: "hidden" }}>
              <HairBonnet size={56} color={BGHP.cream} outline={BGHP.blue} style={{ position: "absolute", right: 12, top: 12, opacity: 0.35 }} />
              <h4 style={{ margin: 0, fontFamily: bghpFonts.display, fontSize: 20, fontWeight: 700 }}>Mail to</h4>
              <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.6, fontWeight: 600 }}>
                The Black Girl Advocate<br />
                Attn: Hair Project Library<br />
                send an email for a valid mailing address to president@theblackgirladvocate.org<br />
                Denver, CO
              </p>
            </div>
          </aside>

          {/* right: form */}
          <div style={cardStyle(BGHP.pink)}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "26px 0" }}>
                <div style={{ width: 76, height: 76, borderRadius: "50%", background: BGHP.yellow, color: BGHP.cocoa, display: "grid", placeItems: "center", margin: "0 auto 22px" }}>
                  <Icon.Check size={34} />
                </div>
                <h2 style={{ fontFamily: bghpFonts.display, fontWeight: 700, color: BGHP.cocoa, fontSize: 34, margin: 0 }}>Thank you!</h2>
                <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 12, color: BGHP.ink, opacity: 0.82, maxWidth: 420, marginLeft: "auto", marginRight: "auto", fontWeight: 600 }}>
                  We'll be in touch within one business day with next steps for your donation.
                </p>
                <button onClick={() => setSubmitted(false)} style={{ ...pillBtn("transparent", BGHP.cocoa, BGHP.cocoa), marginTop: 24 }}>Donate more books</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 999, background: BGHP.pink, color: "#fff", fontWeight: 700, fontSize: 12.5, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>
                  <Icon.Heart size={12} /> Book drive
                </div>
                <h2 style={{ fontFamily: bghpFonts.display, fontWeight: 700, color: BGHP.cocoa, fontSize: 30, margin: 0 }}>Tell us what you're sending.</h2>

                <div style={{ marginTop: 24 }}>
                  <BLabel>Book title(s)</BLabel>
                  <textarea rows="3" value={titles} onChange={(e) => setTitles(e.target.value)} placeholder="One per line, author optional" required style={{ ...bghpField, resize: "vertical" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                  <div>
                    <BLabel>How many books?</BLabel>
                    <input type="number" min="1" value={count} onChange={(e) => setCount(e.target.value)} placeholder="e.g. 4" required style={bghpField} />
                  </div>
                  <div>
                    <BLabel>Condition</BLabel>
                    <select value={condition} onChange={(e) => setCondition(e.target.value)} style={bghpField}>
                      <option value="new">New</option>
                      <option value="like-new">Like new</option>
                      <option value="gently-used">Gently used</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <BLabel>How will the books reach us?</BLabel>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
                    {[{ v: "ship", l: "I'll ship them" }, { v: "dropoff", l: "I'll drop them off" }].map((o) => (
                      <button key={o.v} type="button" onClick={() => setShipping(o.v)} style={toggleBtn(shipping === o.v, BGHP.pink)}>{o.l}</button>
                    ))}
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 22 }}>
                  <div>
                    <BLabel>Your name</BLabel>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" required style={bghpField} />
                  </div>
                  <div>
                    <BLabel>Email</BLabel>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required style={bghpField} />
                  </div>
                </div>

                <button type="submit" disabled={submitting} style={{ ...pillBtn(BGHP.cocoa, BGHP.cream), marginTop: 26, width: "100%", justifyContent: "center" }}>
                  {submitting ? "Sending…" : <>Donate books <Icon.Arrow size={16} /></>}
                </button>
                <p style={{ fontSize: 12.5, opacity: 0.6, marginTop: 14, fontWeight: 600 }}>
                  BGA is a 501(c)(3). We'll send a receipt for your in-kind donation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- HIRE BGA SECTION ---- */
function BGHPHire() {
  const venues = [
    { C: HairCrown, color: BGHP.orange, label: "Summer camp", desc: "A multi-day crown-care residency or a single joyful workshop block." },
    { C: HairFlower, color: BGHP.blue, label: "School / classroom", desc: "Standards-friendly sessions on hair history, identity, and self-love." },
    { C: HairBonnet, color: BGHP.green, label: "Church / faith group", desc: "Intergenerational sister circles and caregiver-and-girl experiences." },
    { C: HairBraid, color: BGHP.pink, label: "Nonprofit / community", desc: "Pop-up healthy-hair stations and confidence-building programming." },
  ];

  const [form, setForm] = React.useState({ org: "", type: "Summer camp", name: "", email: "", count: "", date: "", notes: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      if (window.bgaApi) await window.bgaApi("/api/hire-bga", form);
    } catch (_) { /* graceful */ }
    finally { setSubmitting(false); setSubmitted(true); }
  };

  return (
    <section id="bghp-hire" style={{ position: "relative", background: BGHP.cocoa, color: BGHP.cream, padding: "88px 0", overflow: "hidden" }}>
      <HairLeaf w={150} h={66} color={BGHP.green} outline={BGHP.cream} style={{ position: "absolute", left: "-2%", top: "8%", opacity: 0.25 }} />
      <HairFlower size={70} petal={BGHP.pink} center={BGHP.yellow} outline={BGHP.cream} style={{ position: "absolute", right: "4%", top: "12%", opacity: 0.3 }} />
      <div className="container-wide" style={{ position: "relative" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "8px 18px", borderRadius: 999, background: BGHP.yellow, color: BGHP.cocoa, fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            <Icon.Sparkle size={15} /> Bring the magic to you
          </div>
          <h2 style={{ fontFamily: bghpFonts.display, fontWeight: 700, fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05, margin: "22px 0 0", color: BGHP.cream }}>
            Hire <span style={{ color: BGHP.yellow }}>BGA</span>.
          </h2>
          <p style={{ fontFamily: bghpFonts.script, color: BGHP.pink, fontSize: "clamp(20px, 2.8vw, 30px)", margin: "14px 0 0" }}>
            We'll bring the crowns, comb &amp; care to your space.
          </p>
          <p style={{ fontSize: 17.5, lineHeight: 1.6, maxWidth: 620, margin: "20px auto 0", opacity: 0.9, fontWeight: 500 }}>
            Book the Black Girl Hair Project for your camp, class, church, or nonprofit, hands-on
            workshops rooted in hair care, cultural affirmation, and Black girl belonging, led by our team.
          </p>
        </div>

        {/* venue cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 48 }}>
          {venues.map((v, i) => {
            const { C } = v;
            return (
              <div key={i} style={{ background: BGHP.cream, color: BGHP.ink, borderRadius: 20, padding: "26px 22px", textAlign: "center", border: `3px solid ${v.color}` }}>
                <div style={{ width: 66, height: 66, borderRadius: "50%", background: "#fff", border: `2px solid ${v.color}`, display: "grid", placeItems: "center", margin: "0 auto 16px" }}>
                  <C size={38} />
                </div>
                <h3 style={{ fontFamily: bghpFonts.display, fontWeight: 700, fontSize: 19, color: BGHP.cocoa, margin: 0 }}>{v.label}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, marginTop: 8, opacity: 0.82, fontWeight: 600 }}>{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* what's included + booking form */}
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 40, marginTop: 48, alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
              <FramedArt src="assets/hairproject/murrays-beeswax.png" alt="Murray's Beeswax, Black Girl Advocate illustration" accent={BGHP.yellow} rotate={-2} max={280} />
            </div>
            <h3 style={{ fontFamily: bghpFonts.display, fontWeight: 700, fontSize: 24, color: BGHP.yellow, margin: 0 }}>What every booking includes</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "A trained BGA facilitator + all hands-on materials",
                "Age-tailored curriculum: hair history, care & confidence",
                "Take-home crowns, books & healthy-hair keepsakes",
                "Caregiver connection moment & wrap-up resources",
              ].map((t, i) => {
                const dot = [BGHP.pink, BGHP.blue, BGHP.yellow, BGHP.green][i];
                return (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 13, fontSize: 16, lineHeight: 1.5, fontWeight: 600 }}>
                    <span style={{ width: 26, height: 26, borderRadius: "50%", background: dot, color: BGHP.cocoa, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                      <Icon.Check size={14} />
                    </span>
                    {t}
                  </li>
                );
              })}
            </ul>
            <div style={{ marginTop: 26, padding: "18px 20px", background: "rgba(242,197,61,0.14)", border: `2px dashed ${BGHP.yellow}`, borderRadius: 16, fontSize: 14.5, lineHeight: 1.55, fontWeight: 600 }}>
              Sliding-scale &amp; sponsored rates available for Title I schools and community nonprofits, just ask.
            </div>
          </div>

          {/* booking form */}
          <div style={{ background: BGHP.cream, color: BGHP.ink, borderRadius: 22, padding: "34px 34px 30px", border: `3px solid ${BGHP.yellow}` }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "26px 4px" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: BGHP.green, color: "#fff", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                  <Icon.Check size={32} />
                </div>
                <h3 style={{ fontFamily: bghpFonts.display, fontWeight: 700, fontSize: 28, color: BGHP.cocoa, margin: 0 }}>Request received!</h3>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, marginTop: 12, opacity: 0.82, fontWeight: 600 }}>
                  Our programming team will reach out within two business days to plan your
                  Black Girl Hair Project experience.
                </p>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontFamily: bghpFonts.display, fontWeight: 700, fontSize: 24, color: BGHP.cocoa, margin: 0 }}>Request a booking</h3>
                <p style={{ fontSize: 14, opacity: 0.7, margin: "8px 0 0", fontWeight: 600 }}>Tell us about your group and we'll build the right experience.</p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 22 }}>
                  <div>
                    <BLabel>Organization</BLabel>
                    <input required value={form.org} onChange={set("org")} placeholder="Camp / school / church" style={bghpField} />
                  </div>
                  <div>
                    <BLabel>Type of space</BLabel>
                    <select value={form.type} onChange={set("type")} style={bghpField}>
                      <option>Summer camp</option>
                      <option>School / classroom</option>
                      <option>Church / faith group</option>
                      <option>Nonprofit / community</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
                  <div>
                    <BLabel># of students</BLabel>
                    <input value={form.count} onChange={set("count")} placeholder="e.g. 25" style={bghpField} />
                  </div>
                  <div>
                    <BLabel>Preferred date</BLabel>
                    <input value={form.date} onChange={set("date")} placeholder="Month / season" style={bghpField} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
                  <div>
                    <BLabel>Your name</BLabel>
                    <input required value={form.name} onChange={set("name")} placeholder="First & last" style={bghpField} />
                  </div>
                  <div>
                    <BLabel>Email</BLabel>
                    <input type="email" required value={form.email} onChange={set("email")} placeholder="you@org.org" style={bghpField} />
                  </div>
                </div>

                <div style={{ marginTop: 14 }}>
                  <BLabel>Anything else?</BLabel>
                  <textarea rows="2" value={form.notes} onChange={set("notes")} placeholder="Ages, goals, budget, questions…" style={{ ...bghpField, resize: "vertical" }} />
                </div>

                <button type="submit" disabled={submitting} style={{ ...pillBtn(BGHP.pink, BGHP.cream), marginTop: 22, width: "100%", justifyContent: "center" }}>
                  {submitting ? "Sending…" : <>Request a booking <Icon.Arrow size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---- FOOTER BAND ---- */
function BGHPFooterBand() {
  return (
    <section style={{ background: BGHP.pink, color: BGHP.cream, padding: "30px 0", textAlign: "center" }}>
      <div className="container-wide" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
        <HairFlower size={32} petal={BGHP.yellow} center={BGHP.orange} outline={BGHP.cream} />
        <p style={{ margin: 0, fontFamily: bghpFonts.script, fontSize: "clamp(18px, 2.4vw, 26px)" }}>
          A program rooted in hair care, cultural affirmation, and Black girl belonging.
        </p>
        <HairFlower size={32} petal={BGHP.blue} center={BGHP.yellow} outline={BGHP.cream} />
      </div>
    </section>
  );
}

/* ============ SMALL UI HELPERS ============ */
function SectionTitle({ kicker, title }) {
  return (
    <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
      <div style={{ fontFamily: bghpFonts.script, color: BGHP.orange, fontSize: 24 }}>{kicker}</div>
      <h2 style={{ fontFamily: bghpFonts.display, fontWeight: 700, color: BGHP.cocoa, fontSize: "clamp(30px, 4.4vw, 46px)", lineHeight: 1.08, margin: "4px 0 0" }}>{title}</h2>
    </div>
  );
}

function BLabel({ children }) {
  return <label style={{ display: "block", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.04em", textTransform: "uppercase", color: BGHP.cocoa, opacity: 0.8, marginBottom: 7 }}>{children}</label>;
}

const bghpField = {
  width: "100%", padding: "13px 15px", background: "#fff", color: BGHP.ink,
  border: `2px solid ${BGHP.creamDeep}`, borderRadius: 12, outline: "none",
  fontFamily: bghpFonts.body, fontSize: 15, fontWeight: 600,
};

function pillBtn(bg, color, border) {
  return {
    display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px",
    background: bg, color, border: `2.5px solid ${border || bg}`, borderRadius: 999,
    fontFamily: bghpFonts.display, fontWeight: 600, fontSize: 16, cursor: "pointer",
  };
}

function toggleBtn(active, accent) {
  return {
    padding: "13px 16px", background: active ? accent : "#fff",
    color: active ? "#fff" : BGHP.ink, border: `2px solid ${active ? accent : BGHP.creamDeep}`,
    borderRadius: 12, cursor: "pointer", fontFamily: bghpFonts.body, fontSize: 14.5, fontWeight: 700,
  };
}

function cardStyle(accent) {
  return { background: "#fff", borderRadius: 24, padding: 38, border: `3px solid ${accent}` };
}

window.DonateBooksPage = DonateBooksPage;
