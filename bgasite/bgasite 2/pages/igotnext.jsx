/* I Got Next: Girls in Sports, themed page using the I GN brand palette. */

/* ============ BRAND PALETTE ============ */
const IGN = {
  pink: "#F45BA5", // Black Girl Magic Pink
  navy: "#0B1F3A", // Victory Navy
  gold: "#F4B233", // Court Gold
  crimson: "#8B202E", // Champion Crimson
  sky: "#66A9D9", // Sky Blue Jersey
  green: "#2E7D48", // Turf Green
  purple: "#6B4BB3", // Royal Purple
  white: "#FFFFFF", // Clean White
  black: "#111111", // Matte Black
  cream: "#F7F2E8" // bg cream
};

/* ============ TYPOGRAPHY HELPER ============ */
const ignFonts = {
  varsity: '"Lilita One", "Bungee", "Arial Black", system-ui, sans-serif',
  headline: '"Anton", "Bebas Neue", "Oswald", Impact, sans-serif',
  body: '"Montserrat", "Poppins", system-ui, sans-serif'
};

/* ============ STACKED VARSITY LOGO ============ */
function StackedVarsityLogo({ scale = 1 }) {
  // Letters with their fill colors + slight rotation for hand-set varsity feel
  const row1 = [
  { ch: "I", c: IGN.pink, r: -3 },
  { ch: "G", c: IGN.navy, r: 2 },
  { ch: "O", c: IGN.pink, r: -2 },
  { ch: "T", c: IGN.gold, r: 3 }];

  const row2 = [
  { ch: "N", c: IGN.crimson, r: -2 },
  { ch: "E", c: IGN.green, r: 3 },
  { ch: "X", c: IGN.purple, r: -3 },
  { ch: "T", c: IGN.gold, r: 2 }];


  const renderLetter = (l, i) =>
  <span
    key={i}
    style={{
      display: "inline-block",
      fontFamily: ignFonts.varsity,
      fontSize: `${10 * scale}vw`,
      lineHeight: 0.9,
      color: l.c,
      WebkitTextStroke: `${2 * scale}px ${IGN.navy}`,
      textShadow: `${4 * scale}px ${4 * scale}px 0 ${IGN.navy}`,
      transform: `rotate(${l.r}deg)`,
      padding: "0 0.4vw",
      letterSpacing: "-0.02em"
    }}>
    
      {l.ch}
    </span>;


  return (
    <div style={{ textAlign: "center", lineHeight: 1 }}>
      <div style={{ marginBottom: `${1.4 * scale}vw` }}>{row1.map(renderLetter)}</div>
      <div>{row2.map(renderLetter)}</div>
    </div>);

}

/* ============ BRUSH STROKE ACCENT (SVG) ============ */
function Brush({ color = IGN.pink, width = 220, height = 18, style = {} }) {
  return (
    <svg width={width} height={height} viewBox="0 0 220 18" style={style} aria-hidden>
      <path
        d="M2 9 Q 50 1, 110 9 T 218 9 L 215 14 Q 150 18, 90 13 T 4 14 Z"
        fill={color} />
      
    </svg>);

}

/* ============ PAGE ============ */
function IGotNextPage({ onNavigate }) {
  return (
    <div
      style={{
        background: IGN.cream,
        color: IGN.navy,
        fontFamily: ignFonts.body
      }}>
      
      {/* Inject IGN-specific font + style overrides scoped to this page */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Lilita+One&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        .ign-h { font-family: ${ignFonts.headline}; letter-spacing: 0.02em; line-height: 0.95; }
        .ign-v { font-family: ${ignFonts.varsity}; letter-spacing: -0.01em; line-height: 0.95; }
        .ign-eyebrow {
          font-family: ${ignFonts.body};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .ign-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 26px;
          font-family: ${ignFonts.body};
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease;
        }
        .ign-btn:hover { transform: translateY(-2px); }
        .ign-btn-pink   { background: ${IGN.pink};  color: ${IGN.white}; box-shadow: 4px 4px 0 ${IGN.navy}; }
        .ign-btn-pink:hover   { box-shadow: 6px 6px 0 ${IGN.navy}; }
        .ign-btn-gold   { background: ${IGN.gold};  color: ${IGN.navy};  box-shadow: 4px 4px 0 ${IGN.navy}; }
        .ign-btn-gold:hover   { box-shadow: 6px 6px 0 ${IGN.navy}; }
        .ign-btn-navy   { background: ${IGN.navy};  color: ${IGN.white}; box-shadow: 4px 4px 0 ${IGN.pink}; }
        .ign-btn-navy:hover   { box-shadow: 6px 6px 0 ${IGN.pink}; }
        .ign-btn-outline {
          background: transparent; color: ${IGN.navy};
          border: 2px solid ${IGN.navy};
        }
        .ign-btn-outline:hover { background: ${IGN.navy}; color: ${IGN.white}; }
        .ign-card-tilt:hover { transform: translateY(-6px) rotate(-0.3deg); }
        .ign-no-underline { text-decoration: none; color: inherit; }
      `}</style>

      {/* ============== HERO ============== */}
      <IGNHero onNavigate={onNavigate} />

      {/* ============== TICKER BAR ============== */}
      <IGNTicker />

      {/* ============== SPORTS ============== */}
      <IGNSports onNavigate={onNavigate} />

      {/* ============== PROGRAM COMPONENTS ============== */}
      <IGNComponents />

      {/* ============== NCAA / NAIA RESOURCES ============== */}
      <IGNResources onNavigate={onNavigate} />

      {/* ============== CTA ============== */}
      <IGNCta onNavigate={onNavigate} />
    </div>);

}

/* ====================================================================
   HERO
   ==================================================================== */
function IGNHero({ onNavigate }) {
  return (
    <section
      style={{
        background: IGN.cream,
        position: "relative",
        overflow: "hidden",
        padding: "80px 0 100px"
      }}>
      
      {/* Decorative scatter dots */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `radial-gradient(${IGN.navy}10 1.2px, transparent 1.2px)`,
        backgroundSize: "28px 28px",
        opacity: 0.5
      }} />

      <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
        {/* Eyebrow strip */}
        <div style={{
          display: "flex", justifyContent: "center", alignItems: "center",
          gap: 14, marginBottom: 36, color: IGN.navy
        }}>
          <Brush color={IGN.pink} width={60} height={10} />
          <span className="ign-eyebrow" style={{ color: IGN.navy }}>
            A Program of The Black Girl Advocate
          </span>
          <Brush color={IGN.pink} width={60} height={10} style={{ transform: "scaleX(-1)" }} />
        </div>

        {/* The big stacked logo */}
        <StackedVarsityLogo scale={1.05} />

        {/* GIRLS IN SPORTS */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <div
            className="ign-h"
            style={{
              fontSize: "clamp(36px, 5.5vw, 78px)",
              color: IGN.navy,
              fontWeight: 400
            }}>
            
            GIRLS&nbsp;&nbsp;IN&nbsp;&nbsp;SPORTS
          </div>
          {/* Tagline with brush flanks */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 16,
            marginTop: 16
          }}>
            <span style={{ width: 28, height: 2, background: IGN.navy }} />
            <span className="ign-h" style={{
              fontSize: "clamp(20px, 2.4vw, 32px)",
              color: IGN.navy, fontWeight: 400
            }}>
              PLAY BOLD. <span style={{ color: IGN.pink }}>★</span> LEAD LOUD.
            </span>
            <span style={{ width: 28, height: 2, background: IGN.navy }} />
          </div>
        </div>

        {/* CTAs */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 16,
          marginTop: 56, flexWrap: "wrap"
        }}>
          <button className="ign-btn ign-btn-pink" onClick={() => onNavigate("igotnextenroll")}>
            Enroll Your Athlete →
          </button>
          <button className="ign-btn ign-btn-gold" onClick={() => {
            document.getElementById("ign-ncaa")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}>
            NCAA Resources
          </button>
        </div>

        {/* Bottom stat strip */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
          marginTop: 96,
          paddingTop: 32,
          borderTop: `2px solid ${IGN.navy}20`
        }}>
          {[
          { n: "3", l: "Sports & Counting" },
          { n: "150+", l: "Athletes Served" },
          { n: "12", l: "Coaches & Facilitators" },
          { n: "$0", l: "Cost to Families" }].
          map((s, i) =>
          <div key={i} style={{ textAlign: "center" }}>
              <div className="ign-v" style={{
              fontSize: "clamp(38px, 5vw, 64px)",
              color: [IGN.pink, IGN.gold, IGN.green, IGN.purple][i],
              WebkitTextStroke: `1.5px ${IGN.navy}`
            }}>
                {s.n}
              </div>
              <div className="ign-eyebrow" style={{ color: IGN.navy, marginTop: 4 }}>{s.l}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ====================================================================
   TICKER
   ==================================================================== */
function IGNTicker() {
  const words = [
  "BRILLIANT GIRLS. BIG DREAMS. BOLD MOVES.",
  "GAME READY. LIFE READY.",
  "YOU GOT NEXT.",
  "CONFIDENT. STRONG. UNSTOPPABLE.",
  "PLAY BOLD. LEAD LOUD."];

  const line = words.join("   ★   ");
  return (
    <div style={{
      background: IGN.navy, color: IGN.white,
      borderTop: `4px solid ${IGN.pink}`,
      borderBottom: `4px solid ${IGN.pink}`,
      padding: "18px 0",
      overflow: "hidden",
      position: "relative"
    }}>
      <style>{`
        @keyframes ignMarq {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div style={{
        display: "inline-flex",
        whiteSpace: "nowrap",
        animation: "ignMarq 40s linear infinite",
        fontFamily: ignFonts.headline,
        fontSize: 22,
        letterSpacing: "0.18em"
      }}>
        <span style={{ paddingRight: 60 }}>{line}&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;{line}&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;</span>
        <span style={{ paddingRight: 60 }}>{line}&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;{line}&nbsp;&nbsp;&nbsp;★&nbsp;&nbsp;&nbsp;</span>
      </div>
    </div>);

}

/* ====================================================================
   SPORTS
   ==================================================================== */
function IGNSports({ onNavigate }) {
  const sessions = [
  { wk: "1", date: "Jul 5", focus: "Kickoff + bra-donation entry; situational awareness" },
  { wk: "1a", date: "Jul 7", focus: "Sports Bra Social Media Campaign kickoff", highlight: true },
  { wk: "2", date: "Jul 12", focus: "Stance, balance & personal-space boundaries" },
  { wk: "3", date: "Jul 19", focus: "Escapes from common holds & grabs" },
  { wk: "4", date: "Jul 26", focus: "Strikes and effective targets" },
  { wk: "5", date: "Aug 2", focus: "De-escalation and verbal boundary-setting" },
  { wk: "6", date: "Aug 9", focus: "Ground defense fundamentals" },
  { wk: "7", date: "Aug 16", focus: "Scenario drills & pressure-testing skills" },
  { wk: "8", date: "Aug 30", focus: "Review, and next steps" }];


  const facts = [
  { l: "When", v: "Sundays · 12–1 PM" },
  { l: "Dates", v: "Jul 5–Aug 30, 2026" },
  { l: "Who", v: "Ages 9 to 99" }];


  return (
    <section style={{ padding: "120px 0 100px", background: IGN.cream }}>
      <div className="container-wide">
        <SectionHeader
          eyebrow="Self-Defense Series + Sports Bra Drive"
          title="Join Our Weekly Self Defense Classes"
          accent={IGN.pink}
          subtitle="An 8-week Sunday series led by a Team USA Olympic wrestler. Entry is one new sports bra, your donation is your ticket in." />


        {/* ===== FLYER PANEL ===== */}
        <div style={{
          position: "relative",
          background: IGN.navy,
          border: `4px solid ${IGN.navy}`,
          borderRadius: 28,
          padding: "clamp(28px, 4vw, 52px)",
          marginTop: 56,
          overflow: "hidden",
          boxShadow: `10px 10px 0 ${IGN.pink}`
        }}>
          {/* glow */}
          <div aria-hidden style={{
            position: "absolute", top: "-30%", right: "-10%", width: 460, height: 460,
            borderRadius: "50%", background: `radial-gradient(circle, ${IGN.gold}33 0%, transparent 70%)`,
            pointerEvents: "none"
          }} />

          {/* Coach badge */}
          <div style={{
            position: "absolute", top: "clamp(24px,3vw,44px)", right: "clamp(24px,3vw,44px)",
            display: "flex", alignItems: "center", gap: 16, zIndex: 3
          }}>
            <div style={{ textAlign: "right" }}>
              <div className="ign-eyebrow" style={{ color: IGN.sky, fontSize: 11 }}>Led By</div>
              <div className="ign-h" style={{ color: IGN.gold, fontSize: 24, lineHeight: 1 }}>Maya Nelson</div>
              <div className="ign-eyebrow" style={{ color: IGN.white, opacity: 0.75, fontSize: 10.5, marginTop: 2 }}>Team USA Olympic Wrestler</div>
            </div>
            <div style={{
              width: 84, height: 84, borderRadius: "50%", flexShrink: 0,
              background: IGN.cream, border: `4px solid ${IGN.gold}`,
              display: "grid", placeItems: "center",
              fontFamily: ignFonts.varsity, fontSize: 30, color: IGN.navy,
              WebkitTextStroke: `1px ${IGN.navy}`
            }}>MN</div>
          </div>

          <div className="ign-eyebrow" style={{ color: IGN.gold, position: "relative", zIndex: 2 }}>
            A Program of The Black Girl Advocate
          </div>
          <h3 className="ign-v" style={{
            margin: "20px 0 0", position: "relative", zIndex: 2,
            fontSize: "clamp(40px, 6.5vw, 92px)", lineHeight: 0.92
          }}>
            <span style={{ color: IGN.white, display: "block", WebkitTextStroke: `2px ${IGN.navy}` }}>Built to Compete.</span>
            <span style={{ color: IGN.pink, display: "block", WebkitTextStroke: `2px ${IGN.navy}` }}>Built to Protect Herself.</span>
          </h3>

          {/* facts row */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: "clamp(20px,4vw,64px)",
            marginTop: 40, position: "relative", zIndex: 2
          }}>
            {facts.map((f, i) =>
            <div key={i} style={{
              borderLeft: i === 0 ? "none" : `2px solid ${IGN.sky}55`,
              paddingLeft: i === 0 ? 0 : "clamp(20px,4vw,64px)"
            }}>
                <div className="ign-eyebrow" style={{ color: IGN.sky, fontSize: 11, marginBottom: 6 }}>{f.l}</div>
                <div className="ign-h" style={{ color: IGN.white, fontSize: "clamp(20px,2.4vw,30px)" }}>{f.v}</div>
              </div>
            )}
          </div>

          {/* entry pill */}
          <div style={{ marginTop: 36, position: "relative", zIndex: 2 }}>
            <div style={{
              display: "inline-block", background: IGN.pink, color: IGN.white,
              borderRadius: 999, padding: "18px 34px", border: `3px solid ${IGN.navy}`,
              boxShadow: `5px 5px 0 ${IGN.gold}`
            }}>
              <div className="ign-h" style={{ fontSize: "clamp(18px,2.2vw,26px)", letterSpacing: "0.04em" }}>Entry = One New Sports Bra</div>
              <div style={{ fontFamily: ignFonts.body, fontWeight: 600, fontSize: 14, opacity: 0.92, marginTop: 2 }}>Your donation is your ticket in</div>
            </div>
          </div>
        </div>

        {/* ===== 8-WEEK PLAN TABLE ===== */}
        <div style={{ marginTop: 64 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 16, flexWrap: "wrap", marginBottom: 22 }}>
            <h3 className="ign-v" style={{ margin: 0, fontSize: "clamp(30px,4vw,52px)", color: IGN.navy }}>The 8-Week Plan</h3>
            <span className="ign-eyebrow" style={{ color: IGN.navy, opacity: 0.65 }}>Sunday Session Focus · 12–1 PM</span>
          </div>

          <div style={{
            border: `3px solid ${IGN.navy}`, borderRadius: 20, overflow: "hidden",
            background: IGN.white
          }}>
            {/* header */}
            <div style={{
              display: "grid", gridTemplateColumns: "84px 120px 1fr",
              background: IGN.navy, color: IGN.white,
              fontFamily: ignFonts.body, fontWeight: 800, fontSize: 12,
              letterSpacing: "0.14em", textTransform: "uppercase"
            }}>
              <div style={{ padding: "16px 20px" }}>Wk</div>
              <div style={{ padding: "16px 8px" }}>Date</div>
              <div style={{ padding: "16px 20px" }}>Session Focus</div>
            </div>
            {/* rows */}
            {sessions.map((s, i) =>
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "84px 120px 1fr",
              alignItems: "center",
              background: s.highlight ? "#FCE4F0" : i % 2 ? "#FBF7EF" : IGN.white,
              borderTop: `1.5px solid ${IGN.navy}1A`
            }}>
                <div style={{ padding: "14px 20px" }}>
                  <span style={{
                    display: "grid", placeItems: "center",
                    width: 34, height: 34, borderRadius: "50%",
                    background: s.highlight ? IGN.pink : IGN.navy, color: IGN.white,
                    fontFamily: ignFonts.body, fontWeight: 800, fontSize: 13
                  }}>{s.wk}</span>
                </div>
                <div style={{
                  padding: "14px 8px", fontFamily: ignFonts.body, fontWeight: 800,
                  fontSize: 16, color: s.highlight ? IGN.pink : IGN.navy
                }}>{s.date}</div>
                <div style={{
                  padding: "14px 20px", fontFamily: ignFonts.body,
                  fontWeight: s.highlight ? 700 : 500, fontSize: 15.5,
                  color: s.highlight ? IGN.pink : IGN.navy
                }}>{s.focus}</div>
              </div>
            )}
          </div>
        </div>

        {/* ===== INFO CARDS ===== */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.2fr 1.1fr", gap: 24, marginTop: 32
        }}>
          {/* register */}
          <div style={{
            background: IGN.navy, color: IGN.white, borderRadius: 20,
            padding: "30px 28px", border: `3px solid ${IGN.navy}`,
            display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20
          }}>
            <div>
              <div className="ign-eyebrow" style={{ color: IGN.gold, marginBottom: 10 }}>Ready to Roll?</div>
              <div className="ign-v" style={{ fontSize: 30, lineHeight: 0.95, color: IGN.white }}>Save Your Spot</div>
              <p style={{ fontFamily: ignFonts.body, fontWeight: 500, fontSize: 14, opacity: 0.82, marginTop: 12, lineHeight: 1.5 }}>
                Register online and bring your sports bra to your first Sunday.
              </p>
            </div>
            <button
              onClick={() => window.open("https://docs.google.com/forms/d/1cBEoNT8eIXAJHDZGPYNDTw7rAmkdUBZnpHqL1rKzUsQ/viewform", "_blank", "noopener")}
              style={{
                background: IGN.pink, color: IGN.white, border: `3px solid ${IGN.navy}`,
                borderRadius: 999, padding: "14px 24px", cursor: "pointer",
                fontFamily: ignFonts.body, fontWeight: 800, fontSize: 14,
                letterSpacing: "0.06em", textTransform: "uppercase",
                boxShadow: `4px 4px 0 ${IGN.gold}`, alignSelf: "flex-start"
              }}>Register now</button>
          </div>

          {/* mail a bra */}
          <div style={{
            background: IGN.white, borderRadius: 20, padding: "30px 28px",
            border: `3px solid ${IGN.navy}`
          }}>
            <div className="ign-eyebrow" style={{ color: IGN.pink, marginBottom: 10 }}>Can't Make It? Mail a Bra</div>
            <div className="ign-v" style={{ fontSize: 30, lineHeight: 0.95, color: IGN.navy }}>Send a Sports Bra</div>
            <p style={{ fontFamily: ignFonts.body, fontWeight: 700, fontSize: 16, color: IGN.navy, marginTop: 16, lineHeight: 1.55 }}>
              The Black Girl Advocate<br />
              5485 E Bails Drive · Denver, CO 80222
            </p>
          </div>

          {/* good to know */}
          <div style={{
            background: IGN.gold, borderRadius: 20, padding: "30px 28px",
            border: `3px solid ${IGN.navy}`
          }}>
            <div className="ign-eyebrow" style={{ color: IGN.navy, marginBottom: 14 }}>Good to Know</div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <span style={{
                display: "grid", placeItems: "center", width: 24, height: 24, borderRadius: "50%",
                background: IGN.navy, color: IGN.gold, fontWeight: 800, fontSize: 13, flexShrink: 0
              }}>✓</span>
              <span style={{ fontFamily: ignFonts.body, fontWeight: 800, fontSize: 16, color: IGN.navy }}>One new sports bra = entry</span>
            </div>
            <p style={{ fontFamily: ignFonts.body, fontWeight: 500, fontSize: 15, color: IGN.navy, margin: 0, lineHeight: 1.55 }}>
              <strong style={{ fontWeight: 800 }}>Required:</strong> a one-time Athletics & Beyond Gym membership.
            </p>
          </div>
        </div>

        {/* collaboration */}
        <div style={{
          marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center",
          gap: 14, flexWrap: "wrap", textAlign: "center"
        }}>
          <span className="ign-eyebrow" style={{ color: IGN.navy, opacity: 0.65 }}>In Collaboration With</span>
          <span className="ign-h" style={{ color: IGN.crimson, fontSize: 18 }}>Athletics &amp; Beyond</span>
          <span style={{ color: IGN.navy, opacity: 0.5, fontWeight: 800 }}>×</span>
          <span className="ign-h" style={{ color: IGN.navy, fontSize: 18 }}>The Black Girl Advocate</span>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   PROGRAM COMPONENTS
   ==================================================================== */
function IGNComponents() {
  const items = [
  {
    t: "SPORTS BRA DRIVE",
    body: "Sports bras and athletic essentials for every girl, so she can play comfortable and confident.",
    color: IGN.pink, glyph: "bra"
  },
  {
    t: "CONDITIONING CLINICS",
    body: "Strength, speed, agility, and endurance training to build strong bodies and stronger minds.",
    color: IGN.navy, glyph: "weight"
  },
  {
    t: "SELF-DEFENSE",
    body: "Teaching safety, awareness, and confidence on and off the field.",
    color: IGN.crimson, glyph: "shield"
  },
  {
    t: "MENTORSHIP",
    body: "Connecting our girls with Black women in sports and wellness careers.",
    color: IGN.green, glyph: "users"
  },
  {
    t: "CAREER EXPOSURE",
    body: "Exploring careers behind and beyond the game, training, media, medicine, leadership.",
    color: IGN.purple, glyph: "briefcase"
  },
  {
    t: "GAME-DAY ACCESS",
    body: "Tickets, tunnels, and tours. Bringing our girls face-to-face with women athletes who reflect them.",
    color: IGN.gold, glyph: "ticket"
  }];


  return (
    <section style={{ background: IGN.navy, color: IGN.white, padding: "120px 0" }}>
      <div className="container-wide">
        <SectionHeader
          eyebrow="Program Components"
          title="Everything she needs to show up."
          accent={IGN.gold}
          subtitle="Built around the whole athlete, body, mind, and future."
          onDark />
        

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24, marginTop: 56
        }}>
          {items.map((it, i) =>
          <div key={i} style={{
            background: IGN.white, color: IGN.navy,
            borderRadius: 20,
            padding: "28px 26px 30px",
            border: `3px solid ${IGN.navy}`,
            position: "relative",
            minHeight: 200
          }}>
              <h3 className="ign-h" style={{
              margin: 0, fontSize: 24, color: IGN.navy
            }}>{it.t}</h3>
              <p style={{
              margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.55,
              color: IGN.navy, opacity: 0.85, fontWeight: 500
            }}>{it.body}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function ComponentGlyph({ kind }) {
  const props = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "bra":
      return <svg {...props}><path d="M3 10c2-2 5-3 9-3s7 1 9 3" /><path d="M3 10v4a3 3 0 0 0 3 3l3-2 3 1 3-1 3 2a3 3 0 0 0 3-3v-4" /></svg>;
    case "weight":
      return <svg {...props}><path d="M3 9v6M21 9v6M6 6v12M18 6v12M6 12h12" /></svg>;
    case "shield":
      return <svg {...props}><path d="M12 2l8 3v6c0 5-3 9-8 11-5-2-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></svg>;
    case "users":
      return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9.5" cy="7" r="3.5" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "briefcase":
      return <svg {...props}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>;
    case "ticket":
      return <svg {...props}><path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8z" /><path d="M12 6v12" strokeDasharray="2 3" /></svg>;
    default:
      return null;
  }
}

/* ====================================================================
   EVENTS
   ==================================================================== */
function IGNEvents({ onNavigate }) {
  return (
    <section id="ign-events" style={{ background: IGN.cream, padding: "120px 0" }}>
      <div className="container-wide">
        <SectionHeader
          eyebrow="On the Schedule"
          title="Check Back July 2026."
          accent={IGN.gold}
          subtitle="The 2026 season schedule drops in July. Panels, drives, and showcases, all free for enrolled BGA athletes." />
        

        {/* Big "save the date" callout in place of the event grid */}
        <div style={{
          marginTop: 56,
          background: IGN.white,
          border: `3px solid ${IGN.navy}`,
          borderRadius: 24,
          padding: "72px 48px",
          textAlign: "center",
          boxShadow: `10px 10px 0 ${IGN.pink}`,
          position: "relative",
          overflow: "hidden"
        }}>
          {/* Background dot pattern */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: `radial-gradient(${IGN.navy}10 1.2px, transparent 1.2px)`,
            backgroundSize: "28px 28px",
            opacity: 0.6,
            pointerEvents: "none"
          }} />

          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Big calendar block */}
            <div style={{
              display: "inline-block",
              background: IGN.navy,
              color: IGN.white,
              borderRadius: 18,
              padding: "20px 28px 24px",
              border: `3px solid ${IGN.navy}`,
              marginBottom: 32,
              boxShadow: `5px 5px 0 ${IGN.gold}`
            }}>
              <div className="ign-eyebrow" style={{ color: IGN.gold, fontSize: 13 }}>SAVE THE DATE</div>
              <div className="ign-v" style={{
                fontSize: 72, lineHeight: 1, marginTop: 6,
                color: IGN.white,
                WebkitTextStroke: `1.5px ${IGN.pink}`
              }}>JUN<span style={{ color: IGN.gold }}>·</span>2026</div>
            </div>

            <h3 className="ign-h" style={{
              margin: 0,
              fontSize: "clamp(32px, 4.4vw, 56px)",
              color: IGN.navy,
              letterSpacing: "0.01em"
            }}>
              CHECK BACK <span style={{ color: IGN.pink }}>JUNE 2026.</span>
            </h3>
            <p style={{
              margin: "20px auto 0",
              maxWidth: 600,
              fontSize: 17, lineHeight: 1.55,
              color: IGN.navy, opacity: 0.82,
              fontWeight: 600
            }}>
              We're building the 2026 season calendar now. Drop your info and we'll let you know the moment dates go live.
            </p>

            <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 32 }}>
              <button className="ign-btn ign-btn-pink" onClick={() => onNavigate("contact?intent=enroll")}>
                Get Notified →
              </button>
              <button
                className="ign-btn ign-btn-outline"
                onClick={() => onNavigate("contact")}>
                
                Host an Event with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function EventCard({ month, day, year, title, sport, sportColor, time, where, tag, desc }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: IGN.white,
        border: `3px solid ${IGN.navy}`,
        borderRadius: 20,
        padding: "22px 24px 24px",
        display: "grid",
        gridTemplateColumns: "92px 1fr",
        gap: 22,
        alignItems: "start",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? `8px 8px 0 ${IGN.pink}` : `4px 4px 0 ${IGN.pink}`,
        transition: "all .18s ease",
        position: "relative"
      }}>
      
      {/* Date block */}
      <div style={{
        background: IGN.navy,
        color: IGN.white,
        borderRadius: 14,
        textAlign: "center",
        padding: "14px 8px 12px",
        border: `2px solid ${IGN.navy}`
      }}>
        <div className="ign-eyebrow" style={{ color: IGN.gold, fontSize: 12 }}>{month}</div>
        <div className="ign-v" style={{ fontSize: 40, lineHeight: 1, color: IGN.white, marginTop: 2 }}>{day}</div>
        <div style={{ fontSize: 11, opacity: 0.7, marginTop: 4, letterSpacing: "0.1em" }}>{year}</div>
      </div>

      {/* Body */}
      <div>
        <div style={{
          display: "inline-block",
          background: sportColor, color: IGN.white,
          fontFamily: ignFonts.headline,
          fontSize: 13, letterSpacing: "0.16em",
          padding: "4px 10px", borderRadius: 6,
          border: `1.5px solid ${IGN.navy}`,
          marginBottom: 10
        }}>{sport}</div>
        {tag &&
        <div className="ign-eyebrow" style={{
          color: IGN.navy, opacity: 0.55,
          display: "inline-block", marginLeft: 10, fontSize: 10.5
        }}>· {tag}</div>
        }
        <h3 className="ign-h" style={{
          margin: "4px 0 10px", fontSize: 24, color: IGN.navy,
          letterSpacing: "0.01em"
        }}>{title}</h3>
        <div style={{
          display: "flex", gap: 16, flexWrap: "wrap",
          color: IGN.navy, opacity: 0.78,
          fontSize: 13.5, fontWeight: 600, marginBottom: 10
        }}>
          <span>{time}</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>{where}</span>
        </div>
        <p style={{
          margin: 0, fontSize: 14, lineHeight: 1.5,
          color: IGN.navy, opacity: 0.82, fontWeight: 500
        }}>{desc}</p>
      </div>
    </article>);

}

/* ====================================================================
   NCAA RESOURCES
   ==================================================================== */
function IGNResources({ onNavigate }) {
  const divisions = [
  {
    org: "D1",
    label: "Highest competition · 350+ schools",
    color: IGN.pink,
    summary: "The top tier of collegiate athletics. Full and partial athletic scholarships, the largest budgets, and the toughest recruiting timeline. Eligibility Center registration required.",
    links: [
    { t: "D1 Initial Eligibility", u: "https://www.ncaa.org/sports/2014/10/8/initial-eligibility-academic-requirements.aspx" },
    { t: "D1 Recruiting Calendar", u: "https://www.ncaa.org/sports/2018/5/8/division-i-and-ii-recruiting-calendars.aspx" }]

  },
  {
    org: "D2",
    label: "Balanced experience · 300+ schools",
    color: IGN.gold,
    summary: "Competitive athletics with more flexibility, partial scholarships are common and athletes balance sport with a broader campus life. Eligibility Center registration required.",
    links: [
    { t: "D2 Initial Eligibility", u: "https://www.ncaa.org/sports/2014/10/8/initial-eligibility-academic-requirements.aspx" },
    { t: "D2 Recruiting Calendar", u: "https://www.ncaa.org/sports/2018/5/8/division-i-and-ii-recruiting-calendars.aspx" }]

  },
  {
    org: "D3",
    label: "Academic-first · 440+ schools",
    color: IGN.green,
    summary: "No athletic scholarships, but generous merit + need-based aid. The largest NCAA division, with strong academics and a true student-athlete experience. No Eligibility Center registration required.",
    links: [
    { t: "D3 Overview", u: "https://www.ncaa.org/sports/2013/11/27/about-division-iii.aspx" },
    { t: "Find D3 Schools", u: "https://www.ncaa.com/schools" }]

  }];


  const checklist = [
  { grade: "9th", items: ["Open NCAA Eligibility Center profile", "Track all core courses with a counselor", "Start a highlight film folder"] },
  { grade: "10th", items: ["Take PSAT / pre-ACT", "Build a balanced sport + GPA plan", "Attend at least one combine or showcase"] },
  { grade: "11th", items: ["Confirm NCAA Eligibility Center registration", "Take SAT / ACT (still recommended by many programs)", "Email coaches with film + transcript"] },
  { grade: "12th", items: ["Submit final transcripts to Eligibility Center", "Complete FAFSA + CSS Profile", "Finalize official visits + signing decisions"] }];


  const faqs = [
  {
    q: "Do I need to register with the NCAA Eligibility Center?",
    a: "If she wants to play D1 or D2, yes, open her profile as early as 9th grade. D3 has a separate process with no Eligibility Center registration; we walk families through each track."
  },
  {
    q: "What core courses count?",
    a: "16 NCAA core courses across English, math, science, social science, and additional academic electives. We have a printable tracker available on request."
  },
  {
    q: "Are test scores still required?",
    a: "NCAA D1 and D2 are test-optional through 2026, but many programs still ask. We help families decide whether to test, and prep her if so."
  },
  {
    q: "How do scholarship awards work?",
    a: "Most NCAA D1 and D2 scholarships are partial and renewable yearly. D3 does not offer athletic aid, but merit and need-based packages can be generous, we coordinate the full picture."
  }];


  return (
    <section id="ign-ncaa" style={{ background: IGN.white, padding: "120px 0", borderTop: `4px solid ${IGN.pink}` }}>
      <div className="container-wide">
        <SectionHeader
          eyebrow="College Pathway"
          title={<>NCAA <span style={{ color: IGN.pink }}>Resources.</span></>}
          accent={IGN.purple}
          subtitle="The college recruiting timeline is a contact sport. Here's what every BGA family needs to know about Division I, II, and III, and the links that matter most." />
        

        {/* Three division cards */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, marginTop: 64
        }}>
          {divisions.map((tr, i) => <TrackCard key={i} {...tr} />)}
        </div>

        {/* Grade-by-grade checklist */}
        <div style={{ marginTop: 96 }}>
          <h3 className="ign-h" style={{
            fontSize: 32, color: IGN.navy, margin: "0 0 24px"
          }}>THE 9–12 PLAYBOOK</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18
          }}>
            {checklist.map((c, i) => {
              const colors = [IGN.pink, IGN.gold, IGN.green, IGN.purple];
              const col = colors[i];
              return (
                <div key={i} style={{
                  background: IGN.cream,
                  border: `3px solid ${IGN.navy}`,
                  borderRadius: 18,
                  padding: "22px 22px 24px",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute", top: -18, left: 18,
                    background: col, color: IGN.white,
                    fontFamily: ignFonts.varsity,
                    fontSize: 26, lineHeight: 1,
                    padding: "8px 14px 6px",
                    borderRadius: 10,
                    border: `3px solid ${IGN.navy}`,
                    WebkitTextStroke: `1px ${IGN.navy}`
                  }}>{c.grade}</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "16px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
                    {c.items.map((t, j) =>
                    <li key={j} style={{
                      display: "flex", gap: 10, alignItems: "flex-start",
                      fontSize: 13.5, lineHeight: 1.45, fontWeight: 600,
                      color: IGN.navy
                    }}>
                        <span style={{
                        width: 18, height: 18, marginTop: 2,
                        background: col, color: IGN.white,
                        borderRadius: 4, flexShrink: 0,
                        display: "grid", placeItems: "center",
                        border: `1.5px solid ${IGN.navy}`
                      }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                        </span>
                        {t}
                      </li>
                    )}
                  </ul>
                </div>);

            })}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ marginTop: 96, display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56, alignItems: "start" }}>
          <div>
            <h3 className="ign-h" style={{ fontSize: 32, color: IGN.navy, margin: "0 0 16px" }}>
              QUESTIONS WE GET A LOT.
            </h3>
            <p style={{ margin: 0, color: IGN.navy, opacity: 0.78, fontSize: 15, lineHeight: 1.6, fontWeight: 500 }}>
              Don't see yours here? Our college pathway team meets with every family one-on-one as early as 9th grade.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => <FaqItem key={i} {...f} />)}
          </div>
        </div>

        {/* Resource link grid */}
        <div style={{
          marginTop: 88,
          background: IGN.navy,
          color: IGN.white,
          borderRadius: 24,
          padding: "44px 48px 48px",
          border: `4px solid ${IGN.navy}`
        }}>
          <div className="ign-eyebrow" style={{ color: IGN.gold, marginBottom: 14 }}>Official Resources · Bookmark These</div>
          <h3 className="ign-h" style={{ fontSize: 30, color: IGN.white, margin: "0 0 24px" }}>The Links That Matter.</h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 12
          }}>
            {[
            { t: "NCAA Eligibility Center", u: "https://web3.ncaa.org/ecwr3/", c: IGN.pink },
            { t: "Initial Eligibility Requirements", u: "https://www.ncaa.org/sports/2014/10/8/initial-eligibility-academic-requirements.aspx", c: IGN.gold },
            { t: "NCAA Recruiting Calendar", u: "https://www.ncaa.org/sports/2018/5/8/division-i-and-ii-recruiting-calendars.aspx", c: IGN.green },
            { t: "Find NCAA Schools", u: "https://www.ncaa.com/schools", c: IGN.pink },
            { t: "FAFSA", u: "https://studentaid.gov/h/apply-for-aid/fafsa", c: IGN.gold },
            { t: "CSS Profile", u: "https://cssprofile.collegeboard.org/", c: IGN.green }].
            map((r, i) =>
            <a key={i} href={r.u} target="_blank" rel="noreferrer noopener" style={{
              background: "rgba(255,255,255,0.06)",
              border: `1.5px solid ${r.c}`,
              padding: "14px 18px",
              borderRadius: 12,
              color: IGN.white,
              textDecoration: "none",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              fontWeight: 700, fontSize: 14.5,
              transition: "background .15s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
              
                <span>{r.t}</span>
                <span style={{ color: r.c }}>↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function TrackCard({ org, label, color, summary, links }) {
  return (
    <div style={{
      background: IGN.cream,
      border: `3px solid ${IGN.navy}`,
      borderRadius: 24,
      padding: "28px 28px 30px",
      position: "relative",
      boxShadow: `8px 8px 0 ${color}`,
      display: "flex", flexDirection: "column"
    }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
        <div className="ign-v" style={{
          fontSize: 64, lineHeight: 1,
          color: color,
          WebkitTextStroke: `2px ${IGN.navy}`,
          textShadow: `3px 3px 0 ${IGN.navy}`
        }}>{org}</div>
        <div className="ign-eyebrow" style={{ color: IGN.navy, opacity: 0.7, fontSize: 10.5, textAlign: "right", lineHeight: 1.3 }}>{label}</div>
      </div>
      <p style={{
        margin: "12px 0 22px",
        fontSize: 15.5, lineHeight: 1.55,
        color: IGN.navy, fontWeight: 500
      }}>{summary}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {links.map((l, i) =>
        <a key={i} href={l.u} target="_blank" rel="noreferrer noopener" style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px",
          background: IGN.white,
          border: `2px solid ${IGN.navy}`,
          borderRadius: 10,
          color: IGN.navy,
          textDecoration: "none",
          fontWeight: 700,
          fontSize: 14.5,
          transition: "transform .12s ease, background .12s ease"
        }}
        onMouseEnter={(e) => {e.currentTarget.style.background = color;e.currentTarget.style.color = IGN.white;}}
        onMouseLeave={(e) => {e.currentTarget.style.background = IGN.white;e.currentTarget.style.color = IGN.navy;}}>
          
            <span>{l.t}</span>
            <span>→</span>
          </a>
        )}
      </div>
    </div>);

}

function FaqItem({ q, a }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      background: IGN.cream,
      border: `2.5px solid ${IGN.navy}`,
      borderRadius: 14,
      overflow: "hidden"
    }}>
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "18px 22px",
          textAlign: "left",
          cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          fontFamily: ignFonts.headline,
          fontSize: 20, color: IGN.navy,
          letterSpacing: "0.01em"
        }}>
        
        <span>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: "50%",
          background: open ? IGN.pink : IGN.navy,
          color: IGN.white,
          display: "grid", placeItems: "center",
          fontSize: 18, lineHeight: 1, fontWeight: 800,
          flexShrink: 0,
          transition: "background .15s"
        }}>{open ? "–" : "+"}</span>
      </button>
      {open &&
      <div style={{
        padding: "0 22px 20px",
        fontSize: 15, lineHeight: 1.6,
        color: IGN.navy, opacity: 0.85, fontWeight: 500
      }}>{a}</div>
      }
    </div>);

}

/* ====================================================================
   BUILT STRIP, riff on the guide's "BUILT TO COMPETE" / LEAD / SOAR / MORE
   ==================================================================== */
function IGNBuiltStrip() {
  const tiles = [
  { t: "BUILT TO COMPETE.", bg: IGN.pink, fg: IGN.white },
  { t: "BUILT TO LEAD.", bg: IGN.navy, fg: IGN.white },
  { t: "BUILT TO SOAR.", bg: IGN.purple, fg: IGN.white },
  { t: "BUILT FOR MORE.", bg: IGN.green, fg: IGN.white }];

  return (
    <section style={{ background: IGN.cream, padding: "0", overflow: "hidden" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        borderTop: `4px solid ${IGN.navy}`,
        borderBottom: `4px solid ${IGN.navy}`
      }}>
        {tiles.map((t, i) =>
        <div key={i} style={{
          background: t.bg, color: t.fg,
          padding: "90px 28px",
          display: "grid", placeItems: "center",
          borderRight: i < tiles.length - 1 ? `4px solid ${IGN.navy}` : "none",
          textAlign: "center"
        }}>
            <div className="ign-h" style={{
            fontSize: "clamp(22px, 2.4vw, 36px)",
            letterSpacing: "0.04em"
          }}>{t.t}</div>
          </div>
        )}
      </div>
    </section>);

}

/* ====================================================================
   CTA
   ==================================================================== */
function IGNCta({ onNavigate }) {
  return (
    <section style={{ background: IGN.cream, padding: "120px 0 140px" }}>
      <div className="container-wide" style={{
        background: IGN.pink, color: IGN.white,
        border: `4px solid ${IGN.navy}`,
        borderRadius: 28,
        padding: "72px 56px",
        textAlign: "center",
        boxShadow: `12px 12px 0 ${IGN.navy}`,
        position: "relative",
        overflow: "hidden"
      }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          backgroundImage: `radial-gradient(${IGN.white}25 1.5px, transparent 1.5px)`,
          backgroundSize: "32px 32px",
          opacity: 0.6,
          pointerEvents: "none"
        }} />
        <div style={{ position: "relative", zIndex: 2 }}>
          <div className="ign-eyebrow" style={{ color: IGN.white, marginBottom: 18 }}>You Got Next.</div>
          <h2 className="ign-h" style={{
            margin: 0, fontSize: "clamp(40px, 6vw, 88px)",
            color: IGN.white,
            textShadow: `4px 4px 0 ${IGN.navy}`
          }}>
            BRILLANT GIRLS.<br />
            BIG DREAMS.<br />
            <span style={{ color: IGN.gold }}>BOLD MOVES.</span>
          </h2>
          <p style={{
            margin: "24px auto 40px", maxWidth: 620,
            fontSize: 17, lineHeight: 1.55, fontWeight: 600
          }}>
            Free programming. Coaches who look like her. A pathway to the next level, and the next level after that.
          </p>
          <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="ign-btn ign-btn-gold" onClick={() => onNavigate("igotnextenroll")}>
              Enroll Your Athlete →
            </button>
            <button className="ign-btn ign-btn-navy" onClick={() => { onNavigate("home"); setTimeout(() => { const el = document.getElementById("donate-widget"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }, 450); }}>
              Donate to I Got Next
            </button>
          </div>
        </div>
      </div>
    </section>);

}

/* ====================================================================
   SECTION HEADER
   ==================================================================== */
function SectionHeader({ eyebrow, title, subtitle, accent = "#F4B233", onDark = false }) {
  const ink = onDark ? IGN.white : IGN.navy;
  return (
    <div style={{ maxWidth: 820 }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
        <span style={{
          display: "inline-block", width: 36, height: 4,
          background: accent, borderRadius: 2
        }} />
        <span className="ign-eyebrow" style={{ color: ink, opacity: 0.85 }}>{eyebrow}</span>
      </div>
      <h2 className="ign-h" style={{
        margin: 0, color: ink,
        fontSize: "clamp(40px, 5.5vw, 76px)",
        letterSpacing: "0.01em"
      }}>{title}</h2>
      {subtitle &&
      <p style={{
        margin: "20px 0 0", maxWidth: 720,
        fontSize: 17.5, lineHeight: 1.55,
        color: ink, opacity: 0.78, fontWeight: 500
      }}>{subtitle}</p>
      }
    </div>);

}

window.IGotNextPage = IGotNextPage;

/* ====================================================================
   I GOT NEXT — ATHLETE ENROLLMENT (branded form)
   Submissions route to ariel@theblackgirladvocate.org via /api/igotnext-enroll.
   ==================================================================== */
const ignInput = {
  width: "100%",
  padding: "15px 16px",
  background: IGN.white,
  color: IGN.navy,
  border: `2px solid ${IGN.navy}`,
  borderRadius: 12,
  fontFamily: ignFonts.body,
  fontSize: 15,
  fontWeight: 600,
  outline: "none",
  boxShadow: `3px 3px 0 ${IGN.navy}18`
};

function IGNField({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div className="ign-eyebrow" style={{ color: IGN.navy, fontSize: 11, marginBottom: 8 }}>{label}</div>
      {children}
    </label>);

}

function IGotNextEnrollPage({ onNavigate }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);
  const [athleteFirst, setAthleteFirst] = React.useState("");
  const [athleteLast, setAthleteLast] = React.useState("");
  const [grade, setGrade] = React.useState("9");
  const [school, setSchool] = React.useState("");
  const [cityState, setCityState] = React.useState("");
  const [athleteEmail, setAthleteEmail] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [parentEmail, setParentEmail] = React.useState("");
  const [parentPhone, setParentPhone] = React.useState("");
  const [goals, setGoals] = React.useState("");

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const canSubmit =
  athleteFirst && athleteLast && grade && school &&
  parentName && emailOk(parentEmail) && !submitting;

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);setApiError(null);
    try {
      const r = await window.bgaApi("/api/igotnext-enroll", {
        athleteFirst, athleteLast, grade, school, cityState,
        athleteEmail,
        parentName, parentEmail, parentPhone, goals
      });
      if (!r.ok) {setApiError("Please review the highlighted fields.");setSubmitting(false);return;}
      setSubmitted(true);
    } catch (err) {setApiError("Network error. Please try again.");} finally
    {setSubmitting(false);}
  };

  return (
    <div style={{ background: IGN.cream, color: IGN.navy, fontFamily: ignFonts.body }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Lilita+One&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        .ign-h { font-family: ${ignFonts.headline}; letter-spacing: 0.02em; line-height: 0.95; }
        .ign-v { font-family: ${ignFonts.varsity}; letter-spacing: -0.01em; line-height: 0.95; }
        .ign-eyebrow { font-family: ${ignFonts.body}; font-size: 12px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; }
        .ign-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 26px; font-family: ${ignFonts.body}; font-size: 14px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 999px; border: none; cursor: pointer; transition: transform .15s ease, box-shadow .15s ease, background .15s ease, color .15s ease; }
        .ign-btn:hover { transform: translateY(-2px); }
        .ign-btn-pink { background: ${IGN.pink}; color: ${IGN.white}; box-shadow: 4px 4px 0 ${IGN.navy}; }
        .ign-btn-pink:hover { box-shadow: 6px 6px 0 ${IGN.navy}; }
        .ign-btn-navy { background: ${IGN.navy}; color: ${IGN.white}; box-shadow: 4px 4px 0 ${IGN.pink}; }
        .ign-btn-navy:hover { box-shadow: 6px 6px 0 ${IGN.pink}; }
        .ign-btn-outline { background: transparent; color: ${IGN.navy}; border: 2px solid ${IGN.navy}; }
        .ign-btn-outline:hover { background: ${IGN.navy}; color: ${IGN.white}; }
        .ign-enroll-input:focus { box-shadow: 4px 4px 0 ${IGN.pink} !important; }
        .ign-chip { font-family: ${ignFonts.body}; font-size: 13px; font-weight: 800; letter-spacing: 0.04em; padding: 10px 16px; border-radius: 999px; border: 2px solid ${IGN.navy}; cursor: pointer; background: ${IGN.white}; color: ${IGN.navy}; transition: transform .12s ease, box-shadow .12s ease; }
        .ign-chip:hover { transform: translateY(-1px); }
        .ign-chip-on { background: ${IGN.pink}; color: ${IGN.white}; box-shadow: 3px 3px 0 ${IGN.navy}; }
      `}</style>

      {/* Compact branded hero */}
      <section style={{ background: IGN.navy, color: IGN.white, position: "relative", overflow: "hidden", padding: "72px 0 84px" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(${IGN.white}14 1.4px, transparent 1.4px)`, backgroundSize: "30px 30px", opacity: 0.5, pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", top: "-30%", right: "-8%", width: 460, height: 460, borderRadius: "50%", background: `radial-gradient(circle, ${IGN.pink}44 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div className="container-wide" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          <div className="ign-eyebrow" style={{ color: IGN.gold, marginBottom: 16 }}>I Got Next · Athletics</div>
          <h1 className="ign-h" style={{ margin: 0, fontSize: "clamp(46px, 7vw, 104px)", color: IGN.white }}>
            ENROLL YOUR <span style={{ color: IGN.pink, WebkitTextStroke: `2px ${IGN.gold}` }}>ATHLETE.</span>
          </h1>
          <p style={{ margin: "20px auto 0", maxWidth: 600, fontSize: 17, lineHeight: 1.55, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
            Skill-building, advocacy, game days, and college pathways, free for every BGA athlete. This cohort will also hear directly from panelists and speakers about the route to playing in college. Fill this out and our team will reach out to get her in the game.
          </p>
          <div style={{ display: "inline-block", marginTop: 24, background: IGN.gold, color: IGN.navy, borderRadius: 999, padding: "10px 22px", fontFamily: ignFonts.body, fontWeight: 800, fontSize: 13.5, letterSpacing: "0.06em", boxShadow: `4px 4px 0 ${IGN.pink}` }}>
            Programming for student athletes begins in September.
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 0 110px" }}>
        <div className="container-wide" style={{ maxWidth: 800, margin: "0 auto" }}>
          {submitted ?
          <div style={{ background: IGN.white, border: `3px solid ${IGN.navy}`, borderRadius: 24, padding: "72px 44px", textAlign: "center", boxShadow: `10px 10px 0 ${IGN.pink}` }}>
              <div className="ign-v" style={{ fontSize: 56, color: IGN.pink, WebkitTextStroke: `1.5px ${IGN.navy}`, marginBottom: 12 }}>SHE'S IN!</div>
              <h2 className="ign-h" style={{ margin: 0, fontSize: "clamp(30px, 4vw, 48px)", color: IGN.navy }}>
                Welcome to the <span style={{ color: IGN.pink }}>roster.</span>
              </h2>
              <p style={{ margin: "18px auto 0", maxWidth: 520, fontSize: 16.5, lineHeight: 1.55, fontWeight: 600, color: IGN.navy, opacity: 0.82 }}>
                Thanks, {parentName || "team"}. We got {athleteFirst || "your athlete"}'s enrollment. Our I Got Next team will reach out at <strong>{parentEmail}</strong> with next steps. Programming for student athletes begins in September.
              </p>
              <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 34 }}>
                <button className="ign-btn ign-btn-navy" onClick={() => onNavigate("igotnext")}>Back to I Got Next</button>
              </div>
            </div> :

          <form onSubmit={submit} style={{ background: IGN.white, border: `3px solid ${IGN.navy}`, borderRadius: 24, padding: "44px 44px 48px", boxShadow: `10px 10px 0 ${IGN.navy}` }}>
              <h2 className="ign-h" style={{ margin: 0, fontSize: "clamp(26px, 3.4vw, 40px)", color: IGN.navy }}>THE ATHLETE</h2>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
                <IGNField label="First name"><input className="ign-enroll-input" value={athleteFirst} onChange={(e) => setAthleteFirst(e.target.value)} style={ignInput} placeholder="Maya" /></IGNField>
                <IGNField label="Last name"><input className="ign-enroll-input" value={athleteLast} onChange={(e) => setAthleteLast(e.target.value)} style={ignInput} placeholder="Nelson" /></IGNField>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                <IGNField label="Current grade">
                  <select className="ign-enroll-input" value={grade} onChange={(e) => setGrade(e.target.value)} style={ignInput}>
                    {["6", "7", "8", "9", "10", "11", "12"].map((g) => <option key={g} value={g}>{g}th grade</option>)}
                  </select>
                </IGNField>
                <IGNField label="Athlete email (optional)"><input className="ign-enroll-input" type="email" value={athleteEmail} onChange={(e) => setAthleteEmail(e.target.value)} style={ignInput} placeholder="athlete@example.com" /></IGNField>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                <IGNField label="School"><input className="ign-enroll-input" value={school} onChange={(e) => setSchool(e.target.value)} style={ignInput} placeholder="East High School" /></IGNField>
                <IGNField label="City / state"><input className="ign-enroll-input" value={cityState} onChange={(e) => setCityState(e.target.value)} style={ignInput} placeholder="Denver, CO" /></IGNField>
              </div>

              <div style={{ marginTop: 24, background: IGN.cream, border: `2px solid ${IGN.navy}`, borderRadius: 16, padding: "20px 22px" }}>
                <div className="ign-eyebrow" style={{ color: IGN.pink, fontSize: 11, marginBottom: 8 }}>What this cohort gets</div>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, fontWeight: 600, color: IGN.navy }}>
                  Beyond training and game days, this cohort will hear directly from panelists and speakers about the route to playing in college. Programming for student athletes begins in September.
                </p>
              </div>

              <h2 className="ign-h" style={{ margin: "40px 0 0", fontSize: "clamp(26px, 3.4vw, 40px)", color: IGN.navy }}>PARENT / GUARDIAN</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
                <IGNField label="Full name"><input className="ign-enroll-input" value={parentName} onChange={(e) => setParentName(e.target.value)} style={ignInput} placeholder="Jane Nelson" /></IGNField>
                <IGNField label="Email"><input className="ign-enroll-input" type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} style={ignInput} placeholder="parent@example.com" /></IGNField>
              </div>
              <div style={{ marginTop: 16 }}>
                <IGNField label="Phone (optional)"><input className="ign-enroll-input" type="tel" value={parentPhone} onChange={(e) => setParentPhone(e.target.value)} style={ignInput} placeholder="(303) 555-0123" /></IGNField>
              </div>

              <div style={{ marginTop: 22 }}>
                <IGNField label="Her goals (optional)">
                  <textarea className="ign-enroll-input" rows="4" value={goals} onChange={(e) => setGoals(e.target.value)} style={{ ...ignInput, resize: "vertical" }}
                  placeholder="What does she want out of sport, college recruitment, leadership, community, all of it?" />
                </IGNField>
              </div>

              {apiError && <div style={{ marginTop: 22, fontSize: 14, fontWeight: 700, color: IGN.crimson }}>{apiError}</div>}

              <button type="submit" className="ign-btn ign-btn-pink" disabled={!canSubmit}
              style={{ marginTop: 32, opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}>
                Enroll Your Athlete →
              </button>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: IGN.navy, opacity: 0.6, marginTop: 16 }}>
                By submitting, you confirm a parent or guardian has reviewed this enrollment. I Got Next programming is free for enrolled BGA athletes.
              </p>
            </form>
          }
        </div>
      </section>
    </div>);

}

window.IGotNextEnrollPage = IGotNextEnrollPage;