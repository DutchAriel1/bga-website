/* Home page, anchored on reference screenshot. */

function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection onNavigate={onNavigate} />
      <StatBar />
      <MissionSection onNavigate={onNavigate} />
      <PillarsSection onNavigate={onNavigate} />
      <VoicesSection />
      <TeenVoiceStrip />
      <ImpactSection onNavigate={onNavigate} />
      <DonorSection onNavigate={onNavigate} />
    </>);

}

/*,,, Hero, echoes the reference: dark bg, outlined display type, dual info cards,,, */
function HeroSection({ onNavigate }) {
  return (
    <section style={{
      background: "var(--ink)",
      color: "var(--beige)",
      position: "relative",
      overflow: "hidden",
      padding: "48px 0 0",
      minHeight: "calc(100vh - 76px)",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Portrait removed */}

      <div className="container-wide" style={{ position: "relative", zIndex: 2, flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ marginTop: 64, display: "flex", alignItems: "center", gap: 14 }}>
          <span className="chip chip-on-dark">
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--bronze-soft)", display: "inline-block" }} />
            Est. 2021 · Colorado
          </span>
        </div>

        {/* Headline */}
        <div style={{ marginTop: 40, maxWidth: "100%" }}>
          <h1 className="display d-xxl" style={{ margin: 0, fontWeight: 300 }}>
            <span>Black </span>
            <span className="outlined">Girl</span>
            <br />
            <span className="outlined">Advo</span>
            <span>cate</span>
          </h1>
        </div>

        {/* Subhead + CTA, bottom left */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "420px 1fr",
          alignItems: "end",
          flex: 1,
          marginTop: 48,
          gap: 40,
          paddingBottom: 240
        }}>
          <div>
            <p style={{ fontSize: 22, lineHeight: 1.4, fontWeight: 400, fontFamily: "Noto Serif", fontStyle: "italic", margin: 0, maxWidth: 360 }}>Empowering Brilliant girls through academics, athletics and the arts.

            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => onNavigate("programming")}>
                Check out our Programs <Icon.Arrow size={16} />
              </button>
              <button className="btn btn-outline-light" onClick={() => {
                const el = document.getElementById("fund-the-year");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
              }}>
                Donate Today <Icon.Heart size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Dual info cards, bottom */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          marginTop: 64,
          paddingBottom: 40
        }}>
          <div />
        </div>
      </div>

      {/* Dual info cards floating over bottom */}
      <div className="container-wide" style={{ position: "relative", zIndex: 3, marginTop: "-200px", paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 24 }}>
          <HeroInfoCard
            title="For Parents & Students"
            body="Programs for Black girls in grades 6-12: cultural enrichment, academic support, advocacy, and HBCU pathways. We Seed, Shape, Sharpen, and watch her Soar, designed with families, not around them."
            cta="Explore Programs"
            onClick={() => onNavigate("programming")} />
          
          <HeroInfoCard
            title="For Donors & Funders"
            body="Your gift funds The Elite Eight cohorts, HBCU tours, and Saturday programming across Colorado. Every dollar moves a girl closer to herself."
            cta="See Our Impact"
            onClick={() => onNavigate("ourwork")} />
          
        </div>
      </div>
    </section>);

}

function HeroInfoCard({ title, body, cta, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      style={{
        background: "rgba(42, 29, 27, 0.72)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(245, 240, 230, 0.12)",
        borderRadius: 20,
        padding: "28px 30px",
        transition: "border color 0.25s, transform 0.25s",
        borderColor: hover ? "rgba(173, 138, 86, 0.45)" : "rgba(245, 240, 230, 0.12)"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      
      <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontWeight: 500, fontSize: 22, letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.78, margin: "12px 0 22px", maxWidth: 380 }}>
        {body}
      </p>
      <button
        onClick={onClick}
        style={{
          background: "transparent", border: "none", color: "var(--beige)",
          display: "inline flex", alignItems: "center", gap: 12,
          padding: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 14.5, fontWeight: 600
        }}>
        
        <span style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "var(--bronze-soft)", color: "var(--chocolate-2)",
          display: "grid", placeItems: "center",
          transition: "transform 0.2s",
          transform: hover ? "translateX(4px)" : "translateX(0)"
        }}>
          <Icon.Arrow size={16} color="var(--chocolate-2)" />
        </span>
        {cta}
      </button>
    </div>);

}

/*,,, Outcome stat bar, funder & parent forward,,, */
function StatBar() {
  const stats = [
  { n: "100%", l: "Senior Suite alumnae enrolled in college, since 2022" },
  { n: "400+", l: "Girls & families served since 2021" },
  { n: "$2.9M+", l: "Scholarships unlocked for our scholars" }];

  return (
    <section style={{ background: "var(--ink)", color: "var(--beige)", padding: "60px 0", borderTop: "1px solid var(--line)" }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center" }}>
          {stats.map((s, i) =>
          <div key={i}>
              <div className="display" style={{ fontSize: 56, lineHeight: 1, fontWeight: 300, letterSpacing: "-0.02em", color: i % 2 === 1 ? "var(--lavender-soft)" : "var(--beige)" }}>{s.n}</div>
              <div style={{ marginTop: 12, fontSize: 13.5, letterSpacing: "0.06em", textTransform: "uppercase", opacity: 0.65, fontWeight: 500, lineHeight: 1.45 }}>{s.l}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/*,,, Mission,,, */
function MissionSection({ onNavigate }) {return (
    <section className="section">
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 120 }}>
            <div className="eyebrow" style={{ color: "var(--lavender)" }}>01, Our Mission</div>
            <h2 className="display d-lg" style={{ margin: "24px 0 0" }}>
              A space where Black girls
              <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}> arrive whole </span>
              and leave unshaken.
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 20, lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
              The Black Girl Advocate is a <em style={{ fontFamily: "Noto Serif" }}>Black Feminist centered</em> organization that exists to <em style={{ fontFamily: "Noto Serif" }}>Seed, Shape, Sharpen, and Soar</em> with Black girls and young women through education, cultural awareness, and advocacy.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.7, marginTop: 24, opacity: 0.8 }}>
              We build the rooms our girls deserve: Saturday programming, HBCU pathways, sports, the arts, and a cohort of Black women who refuse to let any one of them walk in alone.
            </p>
            <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid var(--line-dark)" }}>
              <PillarMini icon={<Icon.Flower />} title="Seed" body="We plant identity, belonging, and possibility from the very first Saturday." />
              <PillarMini icon={<Icon.Sparkle />} title="Shape" body="Cultural programming, the arts, and womanist study, she comes into form." left />
              <PillarMini icon={<Icon.Book />} title="Sharpen" body="Academic enrichment, college prep, advocacy in every school meeting." />
              <PillarMini icon={<Icon.Users />} title="Soar" body="The Elite Eight, the HBCU tour, and a sisterhood of advocates who stay." left />
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function PillarMini({ icon, title, body, left = false }) {
  return (
    <div style={{
      padding: "28px 0",
      paddingLeft: left ? 32 : 0,
      borderBottom: "1px solid var(--line-dark)",
      borderLeft: left ? "1px solid var(--line-dark)" : "none"
    }}>
      <div style={{ color: "var(--lavender)", marginBottom: 14 }}>{icon}</div>
      <h4 style={{ margin: 0, fontSize: 18, fontFamily: "Noto Serif", fontWeight: 500 }}>{title}</h4>
      <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: "8px 0 0", opacity: 0.72 }}>{body}</p>
    </div>);

}

/*,,, Pillars, alternating image/text rows,,, */
function PillarsSection({ onNavigate }) {
  const pillars = [
  {
    chip: "Soar · Ivy League Tour",
    title: "The Elite Eight",
    body: "An Ivy League tour for Black girls grades 9 through 11. Campuses, dorms, alumni, applications, the year that turns possibility into a plan.",
    cta: "Apply for the cohort",
    photo: "assets/photos/elite-eight-harvard.png",
    nav: "eliteeightapply"
  },
  {
    chip: "Sharpen · Cultural Programming",
    title: "HBCU Tour",
    body: "A multi campus journey through historic HBCUs. We don't just visit, we connect girls with admissions, alumni, and the version of themselves they meet on those campuses.",
    cta: "Apply for the tour",
    photo: "assets/photos/hbcu-tour-bethune-sm.jpg",
    nav: "hbcuinterest"
  },
  {
    chip: "Seed · Identity & Joy",
    title: "Black Girls at the Arts",
    body: "Theatre nights, gallery walks, dance, museums, and behind-the-scenes access. Programming designed to remind our girls that culture is birthright, not luxury.",
    cta: "View this season",
    photo: "assets/photos/black-girls-at-arts.jpeg",
    nav: "tickets"
  }];

  return (
    <section className="section" style={{ background: "var(--beige-deep)" }}>
      <div className="container-wide">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 32, marginBottom: 72 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--taupe)" }}>02, The Four Movements</div>
            <h2 className="display d-lg" style={{ margin: "24px 0 0", maxWidth: 720 }}>
              Seed. Shape. Sharpen. <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>Soar.</span>
            </h2>
          </div>
          <button className="btn btn-outline-dark" onClick={() => onNavigate("programming")}>
            All Programs <Icon.Arrow size={16} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {pillars.map((p, i) =>
          <PillarRow key={i} {...p} onNavigate={onNavigate} flip={i % 2 === 1} number={i + 1} />
          )}
        </div>
      </div>
    </section>);

}

function PillarRow({ chip, title, body, cta, photo, nav, onNavigate, flip, number }) {
  const Img =
  <div style={{
    borderRadius: 16,
    minHeight: 360,
    backgroundImage: `url(${photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "var(--beige-deep)",
    order: flip ? 2 : undefined
  }} />;

  return (
    <article style={{
      display: "grid",
      gridTemplateColumns: flip ? "1.25fr 1fr" : "1fr 1.25fr",
      gap: 48,
      alignItems: "stretch",
      background: "var(--beige)",
      borderRadius: 24,
      padding: 20
    }}>
      {!flip && Img}
      <div style={{ padding: "32px 32px 32px", display: "flex", flexDirection: "column", justifyContent: "space-between", order: flip ? 1 : 2 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div className="display" style={{ fontSize: 48, fontWeight: 300, color: "var(--lavender)", lineHeight: 1 }}>
              0{number}
            </div>
            <div className="chip chip-chocolate">{chip}</div>
          </div>
          <h3 className="display d-md" style={{ margin: 0, fontWeight: 700 }}>{title}</h3>
          <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 20, maxWidth: 480, opacity: 0.82 }}>{body}</p>
        </div>
        <button className="btn btn-ghost" onClick={() => onNavigate(nav)} style={{ alignSelf: "flex-start", marginTop: 32, paddingLeft: 0 }}>
          <Icon.Arrow size={18} /> {cta}
        </button>
      </div>
      {flip && Img}
    </article>);

}

/*,,, Voices (testimonials),,, */
function VoicesSection() {
  const voices = [
  {
    quote: "BGA gave my daughter a community she didn't know she was missing. She came home from the HBCU tour with a new sense of who she could become.",
    name: "Shantel W.",
    role: "Parent · Colorado"
  },
  {
    quote: "The Elite Eight wasn't a program. It was a year of women looking me in the eye and telling me the truth, about myself, about the world, about what I was made for.",
    name: "Imani, 17",
    role: "Elite Eight · Class of '25"
  },
  {
    quote: "BGA's vision for Black girls in Colorado is rare and deeply needed. Every dollar we've moved here has come back tenfold in outcomes and community trust.",
    name: "R. Okonkwo",
    role: "Program Officer · Regional Foundation"
  }];

  return (
    <section className="section" style={{ background: "var(--chocolate-2)", color: "var(--beige)" }}>
      <div className="container-wide">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 64, flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--lavender-soft)" }}>03, Voices</div>
            <h2 className="display d-lg" style={{ margin: "24px 0 0", maxWidth: 700 }}>
              Witness is <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>evidence.</span>
            </h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {voices.map((v, i) =>
          <figure key={i} style={{
            margin: 0,
            padding: 36,
            background: i === 1 ? "var(--lavender-soft)" : "rgba(245, 240, 230, 0.04)",
            color: i === 1 ? "var(--chocolate-2)" : "var(--beige)",
            border: i === 1 ? "none" : "1px solid var(--line)",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            gap: 32
          }}>
              <div style={{ fontFamily: "Noto Serif", fontSize: 72, lineHeight: 0.8, fontStyle: "italic", fontWeight: 300 }}>"</div>
              <blockquote style={{
              margin: 0,
              fontFamily: "Noto Serif",
              fontSize: 21,
              fontWeight: 300,
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              flex: 1
            }}>
                {v.quote}
              </blockquote>
              <figcaption style={{ fontFamily: "Noto Sans", fontSize: 14 }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ opacity: 0.7, marginTop: 4 }}>{v.role}</div>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}

/*,,, Impact ticker,,, */
function ImpactSection({ onNavigate }) {
  return (
    <section className="section-sm" style={{ background: "var(--ink)", color: "var(--beige)", padding: "72px 0", overflow: "hidden" }}>
      <div style={{
        display: "flex", gap: 64, whiteSpace: "nowrap",
        fontFamily: "Noto Serif", fontSize: 96, fontStyle: "italic", fontWeight: 300, letterSpacing: "-0.02em",
        animation: "tickerSlide 40s linear infinite"
      }}>
        {Array.from({ length: 2 }).flatMap((_, k) => [
        <span key={`a-${k}`}>Seed.</span>,
        <span key={`b-${k}`} className="outlined">Shape.</span>,
        <span key={`c-${k}`}>Sharpen.</span>,
        <span key={`d-${k}`} className="outlined">Soar.</span>,
        <span key={`e-${k}`}>Womanist.</span>,
        <span key={`f-${k}`} className="outlined">Sisterhood.</span>]
        )}
      </div>
      <style>{`@keyframes tickerSlide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </section>);

}

/*,,, Donor CTA,,, */
function DonorSection({ onNavigate }) {
  return (
    <section id="fund-the-year" className="section" style={{ background: "var(--beige-deep)" }}>
      <div className="container-wide">
        <div style={{
          background: "var(--chocolate)",
          color: "var(--beige)",
          borderRadius: 28,
          padding: "80px 72px",
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 64,
          alignItems: "center",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{ position: "relative" }}>
            <div className="chip chip-on-dark" style={{ marginBottom: 24 }}>
              <Icon.Heart size={12} /> For Funders
            </div>
            <h2 className="display d-lg" style={{ margin: 0 }}>
              Fund a girl's
              <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}> whole year.</span>
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 24, opacity: 0.85, maxWidth: 520 }}>
              Most of what we run is offered at no cost to families; select experiences like our college tours are paid, with scholarships available. Your gift puts a girl in The Elite Eight, on the HBCU tour, and in every Saturday room she chooses.
              Sustainers join the Sister Funders Circle and our quarterly impact briefings.
            </p>
            <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn btn-primary" onClick={() => {
                const el = document.getElementById("donate-widget");
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
              }}>
                Donate Now <Icon.Arrow size={16} />
              </button>
              <button className="btn btn-outline-light" onClick={() => onNavigate("contact")}>
                Download Impact Report
              </button>
            </div>
          </div>

          <div id="donate-widget" style={{ position: "relative", background: "var(--beige)", borderRadius: 20, padding: 12, overflow: "visible", minHeight: 560 }}>
            <div
              dangerouslySetInnerHTML={{
                __html: '<dbox-widget campaign="blackgirlunityspacedonations" type="donation_form" enable-auto-scroll="true"></dbox-widget>'
              }} />
            
          </div>
        </div>
      </div>
    </section>);

}

function GiveTier({ amount, desc, highlight }) {
  return (
    <div style={{
      background: highlight ? "var(--bronze-soft)" : "rgba(245,240,230,0.06)",
      color: highlight ? "var(--chocolate-2)" : "var(--beige)",
      border: highlight ? "none" : "1px solid rgba(245,240,230,0.14)",
      borderRadius: 16,
      padding: "22px 24px",
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      alignItems: "center",
      gap: 20,
      cursor: "pointer",
      transition: "transform 0.2s"
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = "translateX(4px)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "translateX(0)"}>
      
      <div className="display" style={{ fontSize: 36, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em" }}>{amount}</div>
      <div style={{ fontSize: 14, opacity: highlight ? 0.8 : 0.75, lineHeight: 1.5 }}>{desc}</div>
      <Icon.Arrow size={18} />
    </div>);

}

/*,,, Teen voice strip, peer-to-peer pull quotes,,, */
function TeenVoiceStrip() {
  const teens = [
  { q: "I came in shy. I left with a whole sisterhood and a college list.", n: "Aaliyah", g: "Grade 11 · Aurora" },
  { q: "BGA Saturdays are the only place I don't have to explain myself first.", n: "Janae", g: "Grade 9 · Denver" },
  { q: "The HBCU tour rewrote my whole future. I'm going to Spelman.", n: "Imani", g: "Senior Suite '25" },
  { q: "I told my coach about I Got Next. Now we both show up.", n: "Mariah", g: "Grade 8 · Colorado Springs" }];

  return (
    <section className="section-sm" style={{ background: "var(--lavender-soft)", color: "var(--chocolate-2)", padding: "88px 0" }}>
      <div className="container-wide">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 24, marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--lavender)" }}>In her words</div>
            <h2 className="display d-lg" style={{ margin: "20px 0 0", maxWidth: 720 }}>
              The girls <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>say it best.</span>
            </h2>
          </div>
          <p style={{ fontSize: 14.5, opacity: 0.7, maxWidth: 320, margin: 0 }}>
            Pull quotes from BGA scholars, shared with permission. First names + grade only.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {teens.map((t, i) => {
            const palettes = [
            { bg: "var(--beige)", fg: "var(--chocolate-2)", initial: "var(--lavender)" },
            { bg: "var(--chocolate-2)", fg: "var(--beige)", initial: "var(--bronze-soft)" },
            { bg: "var(--beige)", fg: "var(--chocolate-2)", initial: "var(--lavender)" },
            { bg: "var(--lavender)", fg: "var(--beige)", initial: "var(--beige-deep)" }];

            const p = palettes[i];
            return (
              <figure key={i} style={{
                margin: 0,
                padding: "28px 24px 24px",
                background: p.bg,
                color: p.fg,
                borderRadius: 18,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                minHeight: 260
              }}>
                <blockquote style={{
                  margin: 0,
                  fontFamily: "Noto Serif",
                  fontStyle: "italic",
                  fontSize: 19,
                  lineHeight: 1.4,
                  fontWeight: 400
                }}>
                  "{t.q}"
                </blockquote>
                <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 28 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: p.initial, color: p.bg,
                    display: "grid", placeItems: "center",
                    fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 17, fontWeight: 500
                  }}>{t.n.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{t.n}</div>
                    <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>{t.g}</div>
                  </div>
                </figcaption>
              </figure>);

          })}
        </div>
      </div>
    </section>);

}

window.HomePage = HomePage;

/*,,, Animated hero motion: drifting words, gold motes, arcing ropes,,, */
function HeroMotion() {
  // Stable random offsets for the gold motes
  const motes = React.useMemo(
    () => Array.from({ length: 18 }, (_, i) => ({
      left: i * 53 % 100,
      delay: i * 0.7 % 9,
      duration: 9 + i * 1.3 % 6,
      size: 2 + i * 7 % 5,
      drift: -8 + i * 11 % 16
    })),
    []
  );

  const words = ["joy", "sisterhood", "freedom", "play", "becoming", "advocacy"];

  // Lavender particles
  const lav = React.useMemo(
    () => Array.from({ length: 14 }, (_, i) => ({
      left: (i * 41 + 7) % 100,
      delay: i * 1.1 % 11,
      duration: 11 + i * 1.7 % 7,
      size: 3 + i * 5 % 4,
      drift: -10 + i * 13 % 20
    })),
    []
  );

  return (
    <div aria-hidden className="bga-motion">
      {/* Soft golden sun-glow upper right */}
      <div className="bga-sun" />

      {/* Drifting italic words */}
      <div className="bga-words">
        {words.map((w, i) =>
        <span
          key={w}
          className="bga-drift"
          style={{
            top: `${15 + i * 12}%`,
            animationDelay: `${i * 2.4}s`,
            animationDuration: `${28 + i * 3}s`,
            fontSize: `clamp(14px, ${1.4 + i % 3 * 0.4}vw, ${28 + i % 3 * 6}px)`,
            opacity: 0.06 + i % 3 * 0.025
          }}>
          
            {w}
          </span>
        )}
      </div>

      {/* Two arcing rope curves around the headline area */}
      <svg className="bga-ropes" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="ropeGrad1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(200,168,116,0)" />
            <stop offset="40%" stopColor="rgba(200,168,116,0.55)" />
            <stop offset="60%" stopColor="rgba(200,168,116,0.55)" />
            <stop offset="100%" stopColor="rgba(200,168,116,0)" />
          </linearGradient>
          <linearGradient id="ropeGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(199,187,205,0)" />
            <stop offset="40%" stopColor="rgba(199,187,205,0.45)" />
            <stop offset="60%" stopColor="rgba(199,187,205,0.45)" />
            <stop offset="100%" stopColor="rgba(199,187,205,0)" />
          </linearGradient>
        </defs>
        {/* Rope 1: arcs over the headline, animates the curve */}
        <path className="bga-rope bga-rope-1"
        d="M -50 420 Q 600 220 1250 420"
        stroke="url(#ropeGrad1)" strokeWidth="2.2"
        strokeLinecap="round" fill="none" />
        {/* Rope 2: arcs under the headline, opposite rhythm */}
        <path className="bga-rope bga-rope-2"
        d="M -50 540 Q 600 740 1250 540"
        stroke="url(#ropeGrad2)" strokeWidth="2"
        strokeLinecap="round" fill="none" />
      </svg>

      {/* Gold motes rising from below */}
      <div className="bga-motes">
        {motes.map((m, i) =>
        <span
          key={i}
          className="bga-mote"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            ["--drift"]: `${m.drift}vw`
          }} />

        )}
      </div>

      {/* Lavender particles drifting up */}
      <div className="bga-motes">
        {lav.map((m, i) =>
        <span
          key={`lav-${i}`}
          className="bga-lav"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
            ["--drift"]: `${m.drift}vw`
          }} />

        )}
      </div>

      <style>{`
        .bga-motion {
          position: absolute; inset: 0;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }
        .bga-sun {
          position: absolute;
          top: -12%; right: -8%;
          width: 60vw; height: 60vw;
          max-width: 900px; max-height: 900px;
          background: radial-gradient(circle at center,
            rgba(200,168,116,0.18) 0%,
            rgba(200,168,116,0.08) 30%,
            rgba(200,168,116,0) 60%);
          filter: blur(20px);
          animation: bgaSunPulse 9s ease-in-out infinite;
        }
        @keyframes bgaSunPulse {
          0%, 100% { opacity: 0.65; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.08); }
        }

        /* Drifting italic background words */
        .bga-words { position: absolute; inset: 0; }
        .bga-drift {
          position: absolute;
          font-family: 'Noto Serif', Georgia, serif;
          font-style: italic;
          font-weight: 300;
          color: var(--bronze-soft);
          letter-spacing: 0.02em;
          white-space: nowrap;
          animation: bgaDrift linear infinite;
          left: -25%;
        }
        @keyframes bgaDrift {
          0%   { transform: translateX(0)    translateY(0); opacity: 0; }
          10%  { opacity: var(--o, 0.08); }
          50%  { transform: translateX(70vw) translateY(-12px); }
          90%  { opacity: var(--o, 0.08); }
          100% { transform: translateX(150vw) translateY(0);    opacity: 0; }
        }

        /* Rope arcs: subtle wave motion */
        .bga-ropes {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .bga-rope-1 {
          animation: bgaRope1 4.2s ease-in-out infinite;
          transform-origin: 50% 50%;
        }
        .bga-rope-2 {
          animation: bgaRope2 4.2s ease-in-out infinite;
          transform-origin: 50% 50%;
        }
        @keyframes bgaRope1 {
          0%, 100% { d: path("M -50 420 Q 600 220 1250 420"); }
          50%      { d: path("M -50 420 Q 600 280 1250 420"); }
        }
        @keyframes bgaRope2 {
          0%, 100% { d: path("M -50 540 Q 600 740 1250 540"); }
          50%      { d: path("M -50 540 Q 600 680 1250 540"); }
        }

        /* Gold motes rising */
        .bga-motes { position: absolute; inset: 0; }
        .bga-mote {
          position: absolute;
          bottom: -2%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(200,168,116,0.95) 0%, rgba(200,168,116,0) 70%);
          opacity: 0;
          animation: bgaMote linear infinite;
        }
        @keyframes bgaMote {
          0%   { transform: translate(0,    0)     scale(0.8); opacity: 0; }
          10%  { opacity: 0.85; }
          50%  { transform: translate(calc(var(--drift) * 0.5), -55vh) scale(1); }
          90%  { opacity: 0.4; }
          100% { transform: translate(var(--drift), -110vh)   scale(0.4); opacity: 0; }
        }

        /* Headline + sheen */
        .bga-headline {
          position: relative;
          display: inline-block;
        }
        .bga-headline .bga-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(28px);
          animation: bgaWordIn 1.1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .bga-headline .bga-w-1 { animation-delay: 0.10s; }
        .bga-headline .bga-w-2 { animation-delay: 0.30s; }
        .bga-headline .bga-w-3 { animation-delay: 0.55s; }
        .bga-headline .bga-w-4 { animation-delay: 0.80s; }
        @keyframes bgaWordIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .bga-sheen {
          position: absolute;
          top: 0; bottom: 0;
          left: -30%;
          width: 35%;
          background: linear-gradient(110deg,
            rgba(200,168,116,0) 0%,
            rgba(200,168,116,0.32) 50%,
            rgba(200,168,116,0) 100%);
          mix-blend-mode: screen;
          pointer-events: none;
          animation: bgaSheen 7s ease-in-out 1.6s infinite;
          filter: blur(4px);
        }
        @keyframes bgaSheen {
          0%   { left: -30%; opacity: 0; }
          15%  { opacity: 1; }
          50%  { opacity: 1; }
          75%  { left: 110%; opacity: 0; }
          100% { left: 110%; opacity: 0; }
        }

        /* GIRL bounce + rope wraps */
        .bga-girl-wrap {
          position: relative;
          display: inline-block;
          padding: 0 0.06em;
        }
        .bga-girl-ropes {
          position: absolute;
          inset: -22% -6% -22% -6%;
          width: 112%;
          height: 144%;
          pointer-events: none;
          overflow: visible;
        }
        .bga-girl-rope-a { animation: bgaGirlRopeA 1.6s ease-in-out infinite; }
        .bga-girl-rope-b { animation: bgaGirlRopeB 1.6s ease-in-out infinite; }
        @keyframes bgaGirlRopeA {
          0%, 100% { d: path("M 4 24 Q 160 -14 316 24"); }
          50%      { d: path("M 4 24 Q 160 18 316 24"); }
        }
        @keyframes bgaGirlRopeB {
          0%, 100% { d: path("M 4 116 Q 160 154 316 116"); }
          50%      { d: path("M 4 116 Q 160 122 316 116"); }
        }
        .bga-girl-bounce {
          display: inline-block;
          transform-origin: 50% 80%;
          animation: bgaGirlBounce 1.6s ease-in-out infinite;
          animation-delay: 1.1s;
        }
        @keyframes bgaGirlBounce {
          0%, 100% { transform: translateY(0)     scaleY(1); }
          15%      { transform: translateY(0)     scaleY(0.92); }
          50%      { transform: translateY(-0.08em) scaleY(1.02); }
          85%      { transform: translateY(0)     scaleY(0.96); }
        }

        /* Lavender particle, same motion as gold mote but lavender */
        .bga-lav {
          position: absolute;
          bottom: -2%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(199,187,205,0.85) 0%, rgba(199,187,205,0) 70%);
          opacity: 0;
          animation: bgaMote linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .bga-drift, .bga-rope-1, .bga-rope-2, .bga-mote, .bga-lav, .bga-sheen, .bga-sun,
          .bga-girl-rope-a, .bga-girl-rope-b, .bga-girl-bounce,
          .bga-headline .bga-word { animation: none !important; }
          .bga-headline .bga-word { opacity: 1; transform: none; }
        }
      `}</style>
    </div>);

}
