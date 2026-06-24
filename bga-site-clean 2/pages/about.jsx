function AboutPage({ onNavigate }) {
  return (
    <>
      <PageHero
        eyebrow="About BGA"
        title={<>We are the advocates <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>our younger selves</span> needed.</>}
        kicker="The Black Girl Advocate is a Colorado based nonprofit cultivating a vibrant, supportive community for Black girls and young women across the state, through education, cultural awareness, and advocacy."
      />

      <section className="section">
        <div className="container-wide" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 64, alignItems: "start" }}>
          <div style={{ borderRadius: 20, aspectRatio: "5/4", position: "sticky", top: 120, alignSelf: "start", backgroundImage: "url(assets/about-hero-sm.jpg)", backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "var(--beige-deep)", boxShadow: "0 24px 60px rgba(61,44,41,0.16)" }} />
          <div>
            <div className="eyebrow" style={{ color: "var(--bronze)" }}>Our Story</div>
            <h2 className="display d-lg" style={{ margin: "20px 0 32px" }}>Built by Black women, <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>for Black girls in Colorado.</span></h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: 17, lineHeight: 1.7, opacity: 0.85 }}>
              <p>The Black Girl Advocate exists because Black girls deserve rooms designed with them in mind. In Colorado, where Black girls are too often the only one, we build the cohort, the table, and the village.</p>
              <p>Our advocates are Black women. Our framework is womanist, rooted in education, cultural awareness, and advocacy: we <em style={{ fontFamily: "Noto Serif" }}>Seed, Shape, Sharpen,</em> and watch every girl <em style={{ fontFamily: "Noto Serif" }}>Soar.</em> From <em style={{ fontFamily: "Noto Serif" }}>Black Girls at the Arts</em> to the <em style={{ fontFamily: "Noto Serif" }}>HBCU Tour</em> to <em style={{ fontFamily: "Noto Serif" }}>The Elite Eight</em>, we meet girls where they are and stay until they arrive.</p>
              <p>BGA is a 501(c)(3) nonprofit. We are sustained by individual donors, family foundations, and partners who believe Black girls are worth the investment, every time, all the way.</p>
            </div>

            <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
              <ValueCard title="We center the girl" body="Not the system. Not the paperwork. Not the funder. Her." />
              <ValueCard title="We stay" body="Programming isn't a workshop. It's a relationship measured in years." />
              <ValueCard title="We honor culture" body="Black girlhood is a tradition we steward, not a deficit we fix." />
              <ValueCard title="Joy is the strategy" body="Rest, arts, laughter, and beauty are not rewards, they are method." />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--beige-deep)" }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ color: "var(--taupe)" }}>Leadership</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 64px", maxWidth: 720 }}>The women at the table.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              { name: "Ariel Ruempolhamer", role: "Founder & Executive Director", ph: "ariel" },
              { name: "Hanifah Turner", role: "Co President", ph: "hanifah" },
              { name: "Elia Martin", role: "Co President", ph: "elia" },
              { name: "Desirea Thames", role: "Mission Keeper", ph: "desirea" },
              { name: "Brittany Paris", role: "Community Director", ph: "brittany" },
              { name: "Niani Scott", role: "Director of Communications", ph: "niani" },
              { name: "Kristy Walker", role: "Secretary", ph: "kristy" },
              { name: "Macia Massey", role: "Treasurer", ph: "macia" },
              { name: "Maya Nelson", role: "I Got Next : Girls in Sports Program Manager", ph: "maya" },
            ].map((p, i) => (
              <div key={i}>
                <div style={{ aspectRatio: "3/4", borderRadius: 16, backgroundImage: `url(assets/team/${p.ph}.jpg)`, backgroundSize: "cover", backgroundPosition: "center 20%", backgroundColor: "var(--beige-warm)" }} />
                <h4 style={{ margin: "20px 0 4px", fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{p.name}</h4>
                <p style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ color: "var(--bronze)" }}>What We Believe</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 64px", maxWidth: 760 }}>Our promise to <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>every girl who walks in.</span></h2>
          <div style={{ borderTop: "1px solid var(--line-dark)" }}>
            {[
              { y: "01", t: "You will be seen", b: "Not as a statistic, not as a problem to solve, not as a recipient. As a girl with vision, voice, and a future." },
              { y: "02", t: "You will be supported", b: "Through tutoring, advocacy, college prep, and rooms full of Black women advocates who refuse to let you fall through." },
              { y: "03", t: "You will be celebrated", b: "On stages, in galleries, on HBCU campuses, and at every Saturday session, culture is your inheritance." },
              { y: "04", t: "You will be advocated for", b: "In school meetings, in systems, in the rooms where decisions about you are being made without you." },
              { y: "05", t: "You will not be alone", b: "BGA is a sisterhood. Once you're in, you're in, graduation, college, motherhood, life." },
            ].map((m, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "120px 1fr",
                gap: 48,
                padding: "36px 0",
                borderBottom: "1px solid var(--line-dark)",
              }}>
                <div className="display" style={{ fontSize: 48, fontWeight: 400, lineHeight: 1, color: "var(--lavender)" }}>{m.y}</div>
                <div>
                  <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 28, fontWeight: 500, letterSpacing: "-0.015em" }}>{m.t}</h3>
                  <p style={{ margin: "10px 0 0", fontSize: 16, lineHeight: 1.6, opacity: 0.75, maxWidth: 720 }}>{m.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, body }) {
  return (
    <div>
      <h4 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</h4>
      <p style={{ margin: "10px 0 0", fontSize: 15, lineHeight: 1.6, opacity: 0.75 }}>{body}</p>
    </div>
  );
}

window.AboutPage = AboutPage;
