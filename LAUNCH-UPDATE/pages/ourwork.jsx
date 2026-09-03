function OurWorkPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title={<>Our work is <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>education,</span> our work is <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>culture,</span> our work is <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>advocacy.</span></>}
        kicker="Six signature programs, one continuous promise: every Black girl in Colorado deserves a community that knows her name."
        accent="terra" />
      

      {/* Seed · Shape · Sharpen · Soar, the four movements */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ color: "var(--bronze)" }}>Our Values · The Four Movements</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 24px", maxWidth: 760 }}>Seed. Shape. Sharpen. <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>Soar.</span></h2>
          <p style={{ fontSize: 17.5, lineHeight: 1.7, opacity: 0.82, maxWidth: 680, margin: "0 0 56px" }}>
            Inspired by Octavia Butler's truth that all that we touch, we change, and all that we change
            changes us, our work moves a girl through four movements of her becoming. She is never a
            program. She is a person, growing.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
            { n: "Seed", c: "bronze", essence: "We plant.", body: "Identity, belonging, and possibility, set down from the very first Saturday in a room full of women who look like her." },
            { n: "Shape", c: "lavender", essence: "She forms.", body: "Cultural programming, the arts, and womanist study. Black girlhood as inheritance, not a barrier to overcome." },
            { n: "Sharpen", c: "taupe", essence: "She rises.", body: "Academic enrichment, college prep, and advocacy in every school meeting, where the application becomes a plan." },
            { n: "Soar", c: "chocolate", essence: "She flies.", body: "The Elite Eight, the HBCU tour, scholarships, and a sisterhood of advocates who stay long after the diploma." }].
            map((p, i) =>
            <div key={i} style={{
              background: "var(--beige-deep)",
              border: "1px solid var(--line-dark)",
              borderRadius: 20,
              padding: 36,
              display: "flex", flexDirection: "column", gap: 18, minHeight: 340
            }}>
                <div className="display" style={{ fontSize: 36, fontWeight: 400, color: `var(--${p.c})`, lineHeight: 1 }}>0{i + 1}</div>
                <div>
                  <h3 className="display d-sm" style={{ margin: 0 }}>{p.n}</h3>
                  <div style={{ fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 18, opacity: 0.65, marginTop: 6 }}>{p.essence}</div>
                </div>
                <p style={{ fontSize: 15.5, lineHeight: 1.6, opacity: 0.8, margin: "auto 0 0" }}>{p.body}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section" style={{ background: "var(--chocolate-2)", color: "var(--beige)" }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ color: "var(--lavender-soft)" }}>Voices · Ladies First</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 64px", maxWidth: 720 }}>Three girls. One <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>Ladies First sisterhood.</span></h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
            {
              name: "Koco-Tiana",
              headline: "A safe haven.",
              body: "As a student of color who transferred into a new high school, previously from a predominantly white high school, this group of girls made me feel loved, empowered, and welcomed without any hesitation or inconvenience to others. The girls of the cohort create a safe space and home for everyone who seeks sisterhood. The sponsors and faculty make certain that the cohort activities and events exceed what people might initially think, and they will always be reliable adults to lean on. This sisterhood has stuck with me through high school and we still stay in touch now that many of us have graduated. I personally don't think anyone can do it better than the East High Ladies First cohort, but if possible, I think a girls unity cohort should be implemented into every school to create a safe haven for young women to be their true authentic self.",
              tag: "Ladies First · East High",
              ph: "ph-portrait-1",
              photo: "assets/photos/koco-tiana.png"
            },
            {
              name: "Ciena J.",
              headline: "More than a cohort. A family.",
              body: "Imagine the perfect space where you can truly be yourself, surrounded by a sisterhood that uplifts and supports one another. Ladies First has changed my perspective on many things. If it wasn't for Ladies First I wouldn't be in college. Ladies First changed my mind for the better and I am grateful for it. If there was something I would change about it, it would be nothing. I really enjoyed getting closer to the people I met in Ladies First. The trips we took and the time we spent in room 320 was my favorite part of high school. The sense of community is strong, and it's amazing how everyone came together. This was more than a cohort to me, it was like a family.",
              tag: "Ladies First · Now in college",
              ph: "ph-portrait-2",
              photo: "assets/photos/ciena.png"
            },
            {
              name: "Sanaìa H.",
              headline: "Ladies First sent me to Howard.",
              body: "Ladies First has set me up for success not just academically, but for life as well. I learned leadership and how to build bonds with my fellow Black sisters. Being the former president of this club has taught me how to manage and be creative with the projects we would do. I've received so many opportunities, scholarships, service, and so much more. Because of Ladies First, I received a huge scholarship that allowed me to attend Howard University. We were the first cohort to go on an HBCU trip and continue it for upcoming years, just shows the success of the cohort. This wasn't possible without Ms. Ariel. She taught me how to be a womanist and showed me what Black empowerment was. I'd never had a sisterhood up until this cohort started. I'm very thankful for having the opportunity to make and join Ladies First.",
              tag: "Ladies First · Howard University",
              ph: "ph-portrait-3",
              photo: "assets/photos/sanaia.png"
            }].
            map((c, i) =>
            <article key={i} style={{
              display: "grid",
              gridTemplateColumns: "340px 1fr",
              gap: 48,
              padding: 32,
              background: "rgba(245,240,230,0.04)",
              border: "1px solid var(--line)",
              borderRadius: 20,
              alignItems: "center"
            }}>
                {c.photo ?
              <div style={{
                borderRadius: 14,
                aspectRatio: "4/5",
                backgroundImage: `url(${c.photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center 20%"
              }} /> :

              <div className={`img-ph ${c.ph}`} style={{ borderRadius: 14, aspectRatio: "4/5" }} />
              }
                <div>
                  <div className="chip chip-on-dark" style={{ marginBottom: 20 }}>{c.tag}</div>
                  <h3 className="display d-md" style={{ margin: 0 }}>{c.headline}</h3>
                  <p style={{ fontSize: 17, lineHeight: 1.65, marginTop: 20, opacity: 0.8 }}>{c.body}</p>
                  <div style={{ marginTop: 24, fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 18, color: "var(--lavender-soft)" }}>{c.name}</div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section">
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--taupe)" }}>Methodology</div>
              <h2 className="display d-lg" style={{ margin: "20px 0 24px" }}>How we work.</h2>
              <p style={{ fontSize: 17, lineHeight: 1.7, opacity: 0.8, margin: 0 }}>Four practices that show up in every program, every Saturday, every cohort. Co developed with the girls and women BGA serves.</p>
              <button className="btn btn-outline-dark" style={{ marginTop: 32 }} onClick={() => onNavigate("contact")}>
                Learn how to partner <Icon.Arrow size={16} />
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
              { n: "01", t: "We listen first", b: "Every program begins with the girls in the room, what they need, what they already know, what they want to become." },
              { n: "02", t: "We wrap together", b: "Education, culture, and advocacy are not silos. The Elite Eight gets the arts. Senior Suite gets the HBCU tour. Every girl, every door." },
              { n: "03", t: "We center culture", b: "Black womanhood is not a barrier we overcome. It is the lens, the inheritance, and the strategy." },
              { n: "04", t: "We stay", b: "BGA is a multi year relationship. We meet girls in 8th grade and keep showing up through college and beyond." }].
              map((m, i) =>
              <div key={i} style={{ padding: 28, background: "var(--beige-deep)", borderRadius: 16 }}>
                  <div className="display" style={{ fontSize: 40, fontWeight: 400, color: "var(--lavender)", lineHeight: 1 }}>{m.n}</div>
                  <h4 style={{ margin: "16px 0 8px", fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500 }}>{m.t}</h4>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, opacity: 0.75 }}>{m.b}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Funders */}
      <section className="section" style={{ background: "var(--beige-deep)" }}>
        <div className="container-wide" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ color: "var(--lavender)" }}>Funders & Partners</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 16px", maxWidth: 760, marginLeft: "auto", marginRight: "auto" }}>Sustained by people who believe.</h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: 0.78, maxWidth: 580, margin: "0 auto 56px" }}>
            BGA is supported by individual donors, family foundations, and Colorado community partners. Most programming is offered at no cost to families, with scholarships available for paid experiences like our college tours.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, maxWidth: 880, margin: "0 auto" }}>
            <FeaturedFunder name="Chinook Fund" tagline="Funding Colorado's grassroots social justice movements." logo="assets/funders/chinook-fund.png" />
            <FeaturedFunder name="The Women's Foundation" tagline="Building economic security for Colorado women and girls." subname="of Colorado" logo="assets/funders/wfco.png" />
            <FeaturedFunder name="The Colorado Health Foundation" tagline="Bringing health in reach for all Coloradans." logo="assets/funders/colorado-health-foundation.png" />
          </div>
        </div>
      </section>
    </>);

}

window.OurWorkPage = OurWorkPage;

function FeaturedFunder({ name, subname, tagline, logo }) {
  return (
    <div style={{
      background: "var(--beige)",
      border: "1px solid var(--line-dark)",
      borderRadius: 18,
      padding: "36px 32px",
      textAlign: "left",
      flex: "1 1 380px",
      maxWidth: 428,
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: 24,
      alignItems: "center"
    }}>
      {logo ?
      <div style={{
        width: 88, height: 88, borderRadius: 14,
        background: "var(--beige-deep, #f6efe5)",
        display: "grid", placeItems: "center",
        padding: 8,
        flexShrink: 0
      }}>
          <img src={logo} alt={`${name} logo`} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
        </div> :

      <div style={{
        width: 72, height: 72, borderRadius: 14,
        background: "var(--chocolate-2)",
        color: "var(--lavender-soft)",
        display: "grid", placeItems: "center",
        fontFamily: "Noto Serif", fontStyle: "italic", fontSize: 36, fontWeight: 400,
        letterSpacing: "-0.02em",
        flexShrink: 0
      }}>
          {name.charAt(0)}
        </div>
      }
      <div>
        <h4 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--chocolate-2)" }}>
          {name}{subname && <span style={{ display: "block", fontSize: 14, fontWeight: 400, opacity: 0.7, letterSpacing: 0, marginTop: 2 }}>{subname}</span>}
        </h4>
        <p style={{ margin: "8px 0 0", fontSize: 13.5, lineHeight: 1.5, opacity: 0.7, color: "var(--chocolate-2)" }}>
          {tagline}
        </p>
      </div>
    </div>);

}