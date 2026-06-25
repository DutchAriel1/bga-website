function ProgrammingPage({ onNavigate }) {
  const [activeTab, setActiveTab] = React.useState("eliteeight");

  const programs = [
  {
    id: "eliteeight",
    label: "The Elite Eight",
    title: "The Elite Eight",
    tag: "Ivy League Tour · Grades 9-11",
    body: "An Ivy League tour for Black girls in grades 9 through 11. We expose our girls to the campuses, the application process, the dorms, and the alumni who walked in first..",
    points: ["Multi campus Ivy League tour", "Admissions sessions", "Alumni panels", "Application coaching: essays, recs, interviews", "Travel, lodging, and meals fully covered"],
    ph: "ph-portrait-2",
    ivyMark: true,
    primaryCta: "Explore the Elite Eight",
    primaryRoute: "eliteeight",
    expect: { cost: "Paid program · scholarships available", schedule: "Annual cohort", apply: "Application opens each January", transport: "All travel, lodging and meals included" }
  },
  {
    id: "hbcu",
    label: "HBCU Tour",
    title: "HBCU Tour",
    tag: "Annual · Open to high schoolers",
    body: "An immersion across historic Black colleges and universities. Campus tours, admissions sessions, alumni panels, dorm experiences, and the kind of on the ground exposure that turns possibility into a plan.",
    points: [" HBCU campus visits", "Admissions and financial aid sessions", "Alumni and current student panels", "Cultural and historical site tours", "All travel, meals, and lodging covered"],
    ph: "ph-portrait-3",
    photo: "assets/photos/hbcu-tour-bethune-sm.jpg",
    photoCaption: "BGA scholars at the Dr. Mary McLeod Bethune statue, Bethune-Cookman University.",
    expect: { cost: "Paid program · scholarships available", schedule: "Annual ", apply: "Application opens each November", transport: "All travel, meals, & lodging covered" }
  },
  {
    id: "arts",
    label: "Black Girls at the Arts",
    title: "Black Girls at the Arts",
    tag: "Year round · All ages",
    photo: "assets/photos/black-girls-at-arts-2.jpeg",
    photoCaption: "BGA scholars and advocates at recent Black Girls at the Arts nights.",
    primaryCta: "Request Tickets",
    primaryRoute: "tickets",
    body: "Theatre nights, gallery walks, museum visits, dance performances, and behind-the-scenes access. Programming designed to remind our girls that the arts are their inheritance, their language, and their stage.",
    points: ["Monthly arts experiences", "Artist meet and greets when possible", "Family friendly evenings", "Open to all enrolled BGA girls"],
    ph: "ph-portrait-4",
    expect: { cost: "Free for enrolled BGA girls and their families", schedule: "Varies", apply: " RSVP per event", transport: "DCPA - Various Venues" }
  },
  {
    id: "hair",
    label: "Black Girl Hair Project",
    title: "The Black Girl Hair Project",
    tag: "Identity & Wellness · All ages",
    body: "Our hair is heritage, language, and labor of love. The Black Girl Hair Project is a year round series of styling sessions, workshops, and conversations that affirm Black hair as crown, not coinitsmentary. We pair our girls with Black stylists, education on care, and the kind of mirror moments that root identity early.",
    photo: "assets/photos/black-girl-hair-project.jpeg",
    photoCaption: "Black Girl Hair Project, sisterhood and crown care.",
    secondaryCta: "Donate Black Girl Hair Books",
    secondaryRoute: "donatebooks",
    points: ["Annual styling sessions with licensed stylists", "Hair care education for girls and parents", "Discrimination & CROWN Act advocacy", "Self portrait and storytelling workshops", "Free product kits for participants"],
    ph: "ph-portrait-4",
    expect: { cost: "Free · product kits included", schedule: "Quarterly ", apply: "RSVP ", transport: "Held at our Denver studio" }
  },
  {
    id: "sports",
    label: "I Got Next",
    title: "I Got Next: Girls in Sports",
    tag: "Athletics · Grades 6-12",
    body: "Black girls don't just play, they lead. I Got Next brings athletic advocacy, training opportunities, and exposure to women athletes who reflect the careers our girls can build on and off the court.",
    photo: "assets/photos/maya-nelson.png",
    photoCaption: "Led by Maya Nelson and Wrestle Full Nelson.",
    primaryCta: "Visit the I Got Next Hub",
    primaryRoute: "igotnext",
    points: ["Athletic skill building sessions", "Advocacy from women athletes & coaches", "Game day experiences across Colorado", "Health, recovery, and mental performance coaching", "Career pathways: sports media, training, leadership"],
    ph: "ph-portrait-1",
    expect: { cost: "Free ", schedule: "Year round ", apply: "Rolling enrollment, intake call and physical required", transport: "Held at Wrestle Full Nelson " }
  },
  {
    id: "education",
    label: "Black Women in Education",
    title: "Black Women in Education",
    tag: "Career Exposure · Grades 9-12",
    body: "A Black Women Health Initiative. Everything from health fairs to appreciation popups",
    points: ["Classroom and admin wellness practices", "Advocate training for educators", "College + grad school pathway support", "Paid summer placements when funded", "Annual retreat  with speakers and healers"],
    ph: "ph-portrait-2",
    photo: "assets/photos/black-women-in-education.png",
    photoCaption: "Black Women in Education advocates and the educators we celebrate.",
    expect: { cost: "Free ", schedule: "Year round · monthly cohort meet ups", apply: "Annual cohort, applications each December", transport: "Colorado" }
  },
  {
    id: "senior",
    label: "Senior Suite",
    title: "Senior Suite",
    tag: "College Bridge · Grade 12",
    body: "A high-touch senior year program: weekly office hours for college essays, FAFSA, scholarships, and the emotional work of leaving home. Every Senior Suite alum graduates with a plan and a circle that doesn't disappear at commencement.",
    points: ["Weekly senior year office hours", "Common App + essay coaching", "FAFSA and scholarship navigation", "Decision day celebration", "First year of college check ins", "High-earning alternatives: pilot school, trading & stockbroking, Rolex Watchmaking University, etc."],
    ph: "ph-portrait-3",
    photo: "assets/photos/senior-suite.png",
    photoCaption: "Senior Suite scholars at our annual senior retreat, the room never closes.",
    primaryCta: "Explore College Scholarships",
    expect: { cost: "Free · scholarship matching included", schedule: "Weekly · senior year, Aug–May", apply: "Open to rising seniors, June 1 deadline", transport: "Hybrid · in-person Saturdays + virtual office hours" }
  }];


  const c = programs.find((p) => p.id === activeTab) || programs[0];

  return (
    <>
      <PageHero
        eyebrow="Programming"
        title={<>Six programs. One <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>womanist</span> sisterhood.</>}
        kicker="Year round programming built to move with her, from middle school through her first year of college and beyond. Most experiences are offered at no cost to families; select programs like our college tours are paid, with scholarships available. We Seed, Shape, Sharpen, and Soar at every stage of her journey." />
      

      <section className="section">
        <div className="container-wide">
          <div style={{ display: "flex", gap: 2, flexWrap: "nowrap", overflowX: "auto", marginBottom: 56, borderBottom: "1px solid var(--line-dark)", paddingBottom: 8 }}>
            {programs.map((t, i) =>
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                padding: "10px 14px",
                border: "none",
                borderLeft: i === 0 ? "none" : "1px solid var(--line-dark)",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "inherit",
                whiteSpace: "nowrap",
                flexShrink: 0,
                fontSize: "clamp(11px, 1.15vw, 15px)",
                fontWeight: activeTab === t.id ? 800 : 700,
                color: activeTab === t.id ? "var(--chocolate)" : "rgba(61,44,41,0.55)",
                borderBottom: activeTab === t.id ? "2px solid var(--lavender)" : "2px solid transparent",
                marginBottom: -9,
                transition: "color 0.15s"
              }}>
              
                {t.label}
              </button>
            )}
          </div>

          <div key={activeTab} style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "center", animation: "fadeIn 0.4s ease" }}>
            <div>
              <div className="chip chip-bronze" style={{ marginBottom: 20, background: "var(--lavender)", color: "var(--beige)" }}>{c.tag}</div>
              <h2 className="display d-xl" style={{ margin: 0 }}>{c.title}</h2>
              <p style={{ fontSize: 19, lineHeight: 1.6, marginTop: 28, opacity: 0.82, fontWeight: 400 }}>{c.body}</p>
              <ul style={{ listStyle: "none", padding: 0, marginTop: 36, display: "flex", flexDirection: "column", gap: 12 }}>
                {c.points.map((p, i) =>
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 15.5 }}>
                    <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--lavender)", color: "var(--beige)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Icon.Check size={14} />
                    </span>
                    {p}
                  </li>
                )}
              </ul>
              {c.expect &&
              <div style={{ marginTop: 36, background: "var(--beige-deep)", borderRadius: 16, padding: "24px 26px", border: "1px solid var(--line-dark)" }}>
                  <div className="eyebrow" style={{ color: "var(--lavender)", marginBottom: 14, fontSize: 11 }}>What to expect</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 28px" }}>
                    {[
                  { l: "Cost", v: c.expect.cost },
                  { l: "Schedule", v: c.expect.schedule },
                  { l: "How to apply", v: c.expect.apply },
                  { l: "Where & how", v: c.expect.transport }].
                  map((row, i) =>
                  <div key={i}>
                        <div style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.6, fontWeight: 600, marginBottom: 4 }}>{row.l}</div>
                        <div style={{ fontSize: 14.5, lineHeight: 1.45, color: "var(--chocolate-2)" }}>{row.v}</div>
                      </div>
                  )}
                  </div>
                </div>
              }
              <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
                {c.id !== "education" && c.id !== "hair" &&
                <button className="btn btn-dark" onClick={() => onNavigate(c.primaryRoute || (c.id === "senior" ? "scholarships" : c.id === "hbcu" ? "hbcuinterest" : "apply"))}>{c.primaryCta || "Enroll a Student"} <Icon.Arrow size={16} /></button>
                }
                {c.secondaryCta &&
                <button className="btn btn-primary" onClick={() => onNavigate(c.secondaryRoute || "contact")}>{c.secondaryCta} <Icon.Arrow size={16} /></button>
                }
                {c.id !== "hbcu" && c.id !== "education" &&
                <button className="btn" onClick={() => onNavigate(c.id === "arts" ? "tickets" : c.id === "eliteeight" ? "eliteeight" : "comingsoon")} style={{ background: "var(--lavender)", color: "var(--beige)" }}>
                  <Icon.Calendar size={16} /> {c.id === "eliteeight" ? "The Tour Hub" : "Upcoming Events"}
                </button>
                }
              </div>
            </div>
            {c.photo ?
            <div>
                <div style={{
                borderRadius: 20,
                aspectRatio: "4/3",
                backgroundImage: `url(${c.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "var(--beige-deep)"
              }} />
                {c.photoExtra &&
              <div style={{
                marginTop: 14,
                borderRadius: 14,
                aspectRatio: "16/9",
                backgroundImage: `url(${c.photoExtra})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor: "var(--beige-deep)"
              }} />
              }
                {c.photoCaption &&
              <div style={{ marginTop: 14, fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 14, color: "var(--taupe)" }}>
                    {c.photoCaption}
                  </div>
              }
              </div> :
            c.ivyMark ?
            <IvyTypographicMark /> :

            <div className={`img-ph ${c.ph}`} style={{ borderRadius: 20, aspectRatio: "4/5" }} />
            }
          </div>
          <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </div>
      </section>

      {/* 2026 Inaugural Orchid Awards, only shown for Black Women in Education */}
      {activeTab === "education" && <OrchidAwardsSection onNavigate={onNavigate} />}

      {/* A girl's BGA journey */}
      <section className="section" style={{ background: "var(--lavender-soft)", color: "var(--chocolate-2)", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{
          position: "absolute", right: "-8%", bottom: "-12%",
          fontFamily: "Noto Serif", fontStyle: "italic", fontSize: "30vw",
          lineHeight: 0.8, fontWeight: 300,
          color: "rgba(61,44,41,0.06)", pointerEvents: "none"
        }}>S</div>
        <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
          <div className="eyebrow" style={{ color: "var(--chocolate-2)", opacity: 0.7 }}>Seed · Shape · Sharpen · Soar</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 64px", maxWidth: 720 }}>The four movements of <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>her becoming.</span></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {[
            { age: "Grades 8th - 9th Grade", t: "Seed", body: "Black Girls at the Arts. I Got Next. Saturday rooms full of women who look like her, planting belonging from day one." },
            { age: "Grades 9th -10th Grade", t: "Shape", body: "The Elite Eight Ivy League tour. Black Women in Education. Womanist identity work and the campuses that turn possibility into a plan." },
            { age: "Grade 11th Grade", t: "Sharpen", body: "HBCU Tour. Future Options Programming that changes the application." },
            { age: "Grade 12+", t: "Soar", body: "Senior Suite. College decisions. Scholarships. Ongoing alumnae sisterhood. The room never closes." }].
            map((s, i) => {
              const palettes = [
              { bg: "var(--beige)", fg: "var(--chocolate)" },
              { bg: "var(--lavender)", fg: "var(--beige)" },
              { bg: "var(--chocolate)", fg: "var(--beige)" },
              { bg: "var(--beige)", fg: "var(--chocolate)" }];

              const p = palettes[i];
              return (
                <div key={i} style={{
                  background: p.bg,
                  color: p.fg,
                  borderRadius: 16,
                  padding: "32px 28px",
                  minHeight: 240,
                  display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}>
                  <div>
                    <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, opacity: 0.7 }}>{s.age}</div>
                    <h3 className="display" style={{ fontSize: 32, fontWeight: 500, margin: "12px 0 0", letterSpacing: "-0.015em" }}>{s.t}</h3>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.55, margin: 0, opacity: 0.85 }}>{s.body}</p>
                </div>);

            })}
          </div>
        </div>
      </section>

      {/* Enrollment CTA removed */}
    </>);

}

/*, 2026 Inaugural Orchid Award Winners, */
function OrchidAwardsSection({ onNavigate }) {
  const winners = [
  { name: "Ms. Lexi Kelly", category: "ECE Educator of the Year", img: "assets/orchid/1-lexi-kelly.png" },
  { name: "Mrs. Juanita Stevenson", category: "Elementary Educator of the Year", img: "assets/orchid/2-juanita-stevenson.png" },
  { name: "Tatianna McKinney Stokes", category: "Middle School Educator of the Year", img: "assets/orchid/3-tatianna-mckinney-stokes.png" },
  { name: "Ms. K'iara Roberts", category: "High School Educator of the Year", img: "assets/orchid/4-kiara-roberts.png" },
  { name: "Deneshia Hearon", category: "Post Secondary Educator of the Year", img: "assets/orchid/5-deneshia-hearon.png" },
  { name: "Lifetime Achievement", category: "Honoring a Lifetime in Education", img: "assets/orchid/6-lifetime.png" }];


  return (
    <section className="section" style={{ background: "var(--lavender-soft)", color: "var(--chocolate-2)", position: "relative", overflow: "hidden" }}>
      {/* Decorative orchid silhouettes */}
      <div aria-hidden style={{
        position: "absolute", left: "-6%", top: "8%",
        fontFamily: "Noto Serif", fontStyle: "italic", fontSize: "32vw",
        lineHeight: 0.8, fontWeight: 300,
        color: "rgba(61,44,41,0.05)", pointerEvents: "none"
      }}>O</div>

      <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", maxWidth: 820, margin: "0 auto 72px" }}>
          <div className="chip chip-lavender" style={{ marginBottom: 24, background: "var(--chocolate-2)", color: "var(--lavender-soft)" }}>
            <Icon.Flower size={14} /> 2026 Inaugural Class
          </div>
          <h2 className="display d-xl" style={{ margin: 0 }}>
            The <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>Orchid</span> Award.
          </h2>
          <p style={{ fontSize: 19, lineHeight: 1.6, marginTop: 28, opacity: 0.85 }}>
            Each year, the Black Women in Education program honors the educators who shape our daughters' futures. The orchid blooms in difficult conditions, returns season after season, and refuses to be ordinary, exactly the women we celebrate. Congratulations to our 2026 inaugural class.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {winners.map((w, i) =>
          <OrchidCard key={i} {...w} />
          )}
        </div>

        <div style={{ marginTop: 80, padding: "48px 56px", background: "var(--chocolate-2)", color: "var(--beige)", borderRadius: 24, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--bronze-soft)", marginBottom: 20 }}>Nominate · 2027</div>
            <h3 className="display d-md" style={{ margin: 0 }}>Know an educator who deserves an Orchid?</h3>
            <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 20, opacity: 0.78, maxWidth: 540 }}>
              Nominations for the 2027 Orchid Awards open this fall. Tell us about the Black woman educator who is shaping your daughter, niece, student, or self.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button className="btn btn-primary" style={{ justifyContent: "center" }} onClick={() => onNavigate("orchids")}>Nominate an Educator <Icon.Arrow size={16} /></button>
            <button className="btn btn-outline-light" style={{ justifyContent: "center" }} onClick={() => onNavigate("orchids?intent=sponsor")}>Sponsor the 2027 Orchids</button>
          </div>
        </div>
      </div>
    </section>);

}

function OrchidCard({ name, category, img }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--beige)",
        borderRadius: 20,
        padding: 24,
        transform: hover ? "translateY(-6px)" : "translateY(0)",
        boxShadow: hover ? "0 20px 40px rgba(61,44,41,0.18)" : "0 4px 12px rgba(61,44,41,0.06)",
        transition: "all 0.3s ease"
      }}>
      
      <div style={{
        aspectRatio: "1/1",
        borderRadius: 14,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "var(--beige-deep)"
      }} />
      <div style={{ padding: "20px 4px 4px" }}>
        <div className="eyebrow" style={{ color: "var(--bronze)", fontSize: 10, marginBottom: 10 }}>
          <Icon.Flower size={10} /> Orchid Award · 2026
        </div>
        <h4 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 24, fontWeight: 500, letterSpacing: "-0.015em", color: "var(--chocolate-2)" }}>{name}</h4>
        <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.5, opacity: 0.72, color: "var(--chocolate-2)" }}>{category}</p>
      </div>
    </div>);

}

window.ProgrammingPage = ProgrammingPage;

/* Elite Eight, an Ivy League logo collage rendered as a 4×2 crest grid. */
function IvyTypographicMark() {
  const schools = [
    { name: "Brown",        short: "Brown",   color: "#7B2D26", crest: "B" },
    { name: "Columbia",     short: "Columbia",color: "#1F3A6E", crest: "C" },
    { name: "Cornell",      short: "Cornell", color: "#A02B2B", crest: "C" },
    { name: "Dartmouth",    short: "Dartmouth", color: "#1F6B3A", crest: "D" },
    { name: "Harvard",      short: "Harvard", color: "#7A1F1F", crest: "H" },
    { name: "Pennsylvania", short: "Penn",    color: "#1A3568", crest: "P" },
    { name: "Princeton",    short: "Princeton", color: "#C8741C", crest: "P" },
    { name: "Yale",         short: "Yale",    color: "#1A3D7A", crest: "Y" },
  ];

  return (
    <div>
      <div style={{
        position: "relative",
        aspectRatio: "4/5",
        background: "var(--chocolate-2)",
        borderRadius: 20,
        overflow: "hidden",
        padding: "32px 28px",
        display: "flex", flexDirection: "column"
      }}>
        {/* subtle gold corner glow */}
        <div aria-hidden style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 80% 20%, rgba(200,168,116,0.18), transparent 55%), radial-gradient(ellipse at 20% 85%, rgba(199,187,205,0.12), transparent 60%)",
          pointerEvents: "none"
        }} />
        {/* Hairline frame */}
        <div aria-hidden style={{
          position: "absolute", inset: 16,
          border: "1px solid rgba(200,168,116,0.28)",
          borderRadius: 14,
          pointerEvents: "none"
        }} />
        {/* Top eyebrow */}
        <div style={{
          position: "relative",
          textAlign: "center",
          fontSize: 11, letterSpacing: "0.32em", textTransform: "uppercase",
          color: "var(--bronze-soft)", fontWeight: 600,
          marginBottom: 24
        }}>
          Eight Schools · One Tour
        </div>

        {/* Logos grid: 4 cols × 2 rows */}
        <div style={{
          position: "relative",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: 14,
          padding: "8px 12px"
        }}>
          {schools.map((s) => (
            <div key={s.name} style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              gap: 8,
              padding: "10px 6px",
              borderRadius: 12,
              background: "rgba(245,240,230,0.04)",
              border: "1px solid rgba(200,168,116,0.18)"
            }}>
              {/* Crest shield */}
              <svg viewBox="0 0 64 72" width="44" height="50" aria-hidden>
                <defs>
                  <linearGradient id={`g-${s.short}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={s.color} stopOpacity="1" />
                    <stop offset="100%" stopColor={s.color} stopOpacity="0.78" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 6 Q4 4 6 4 L58 4 Q60 4 60 6 L60 38 Q60 54 32 68 Q4 54 4 38 Z"
                  fill={`url(#g-${s.short})`}
                  stroke="rgba(245,240,230,0.55)"
                  strokeWidth="1.2"
                />
                <text
                  x="32" y="40"
                  textAnchor="middle"
                  fontFamily="Noto Serif, Georgia, serif"
                  fontStyle="italic"
                  fontWeight="500"
                  fontSize="28"
                  fill="rgba(245,240,230,0.96)"
                >{s.crest}</text>
              </svg>
              <div style={{
                fontFamily: "Noto Serif, Georgia, serif",
                fontSize: 11.5,
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "rgba(245,240,230,0.88)",
                textAlign: "center",
                lineHeight: 1.1
              }}>
                {s.short}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom caption */}
        <div style={{
          position: "relative",
          textAlign: "center",
          fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 13,
          color: "rgba(245,240,230,0.6)",
          marginTop: 20
        }}>
          The Elite Eight · An Ivy League Tour for Black girls.
        </div>
      </div>
    </div>);

}