/* Ladies First, sponsor & facilitator portal.
   Currently in a gated "in progress / coming soon" state: the portal is being built,
   access is limited to approved sponsors & facilitators, and schools can request to
   bring Ladies First to their building.
   Built in the core BGA brand (chocolate / beige / lavender / bronze). */

function LadiesFirstPage({ onNavigate }) {
  return (
    <div data-screen-label="Ladies First portal">
      <LFHero />
      <LFPreview />
      <LFBringToSchool />
      <LFAccess />
    </div>
  );
}

/* ====================================================================
   HERO, in-progress / coming soon
   ==================================================================== */
function LFHero() {
  return (
    <section style={{ background: "var(--chocolate-2)", color: "var(--beige)", padding: "96px 0 108px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: "-10%", top: "-20%", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle, rgba(156,138,165,0.20) 0%, transparent 70%)" }} />
      <div aria-hidden style={{ position: "absolute", left: "-8%", bottom: "-32%", width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle, rgba(173,138,86,0.16) 0%, transparent 70%)" }} />
      <div aria-hidden style={{ position: "absolute", left: "-3%", top: "4%", fontFamily: "Noto Serif", fontStyle: "italic", fontSize: "30vw", lineHeight: 0.8, color: "rgba(245,240,230,0.04)", pointerEvents: "none" }}>L</div>
      <div className="container-wide" style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 24 }}>
          <div className="chip" style={{ background: "rgba(173,138,86,0.18)", color: "var(--bronze-soft)" }}>
            <LFPulse /> In progress · building now
          </div>
          <div className="chip chip-on-dark">
            <Icon.Lock size={13} /> Members area · limited access
          </div>
        </div>
        <h1 className="display d-xl" style={{ margin: 0, maxWidth: 1020 }}>
          Ladies First is <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>on its way.</span>
        </h1>
        <p style={{ marginTop: 30, fontSize: 20, lineHeight: 1.55, maxWidth: 660, opacity: 0.84, fontWeight: 300 }}>
          One private room for everyone who pours into our girls. Sponsors and facilitators will come
          here to grab exactly what they need for the week, the curriculum, the how-to walkthroughs,
          and the field-trip details for every conference we host for the city. We're assembling it now.
        </p>

        {/* build progress */}
        <div style={{ marginTop: 44, maxWidth: 560 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, letterSpacing: "0.04em", opacity: 0.7, marginBottom: 10 }}>
            <span>Portal build progress</span>
            <span>Opening Fall 2026</span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: "rgba(245,240,230,0.14)", overflow: "hidden" }}>
            <div style={{ width: "62%", height: "100%", borderRadius: 999, background: "linear-gradient(90deg, var(--bronze) 0%, var(--lavender) 100%)" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 40 }}>
          <button className="btn btn-primary" onClick={() => document.getElementById('lf-access')?.scrollIntoView({ behavior: "smooth" })}>
            <Icon.Lock size={15} /> Request access
          </button>
          <button className="btn btn-outline-light" onClick={() => document.getElementById('lf-school')?.scrollIntoView({ behavior: "smooth" })}>
            Bring it to your school
          </button>
        </div>
      </div>
    </section>
  );
}

function LFPulse() {
  return (
    <span style={{ position: "relative", display: "inline-flex", width: 8, height: 8 }}>
      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--bronze-soft)", animation: "lfPing 1.8s cubic-bezier(0,0,0.2,1) infinite" }} />
      <span style={{ position: "relative", width: 8, height: 8, borderRadius: "50%", background: "var(--bronze-soft)" }} />
      <style>{`@keyframes lfPing{0%{transform:scale(1);opacity:.7}70%,100%{transform:scale(2.6);opacity:0}}`}</style>
    </span>
  );
}

/* ====================================================================
   WHAT'S INSIDE, locked previews
   ==================================================================== */
function LFPreview() {
  const zones = [
    {
      tag: "Grab & go",
      title: "This week's kit",
      desc: "Every Monday, the full ready-to-run pack: lesson plan, slides, materials list, permission slips, and sign-in sheets.",
      icon: <Icon.Download size={20} />,
      status: "Building",
    },
    {
      tag: "All year",
      title: "Weekly curriculum",
      desc: "The school-year schedule of lessons, each tagged to a movement, Seed, Shape, Sharpen, Soar, so you always know where she is.",
      icon: <Icon.Book size={20} />,
      status: "Building",
    },
    {
      tag: "How-to library",
      title: "Facilitator videos",
      desc: "Short walkthroughs from our lead facilitators, so a first-time sponsor can step in and lead any room the BGA way.",
      icon: <Icon.Play size={16} />,
      status: "Filming",
    },
    {
      tag: "Field trips",
      title: "City conferences",
      desc: "Dates, venues, transportation, and paperwork for every citywide conference BGA hosts during the school year.",
      icon: <Icon.Bus size={20} />,
      status: "Scheduling",
    },
  ];
  return (
    <section className="section" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="container-wide">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow" style={{ color: "var(--lavender)", marginBottom: 16 }}>What's coming inside</div>
          <h2 className="display d-lg" style={{ margin: 0 }}>Four rooms, <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>one weekly habit.</span></h2>
          <p style={{ margin: "20px 0 0", fontSize: 18, lineHeight: 1.6, opacity: 0.82 }}>
            Here's what unlocks the day you're approved. Everything is being built now, a peek at the
            shelves sponsors and facilitators will reach into each week.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {zones.map((z, i) => <LockedZone key={i} {...z} />)}
        </div>
      </div>
    </section>
  );
}

function LockedZone({ tag, title, desc, icon, status }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative", background: "var(--beige-deep)", border: "1px solid var(--line-dark)",
        borderRadius: 22, padding: "34px 34px 30px", overflow: "hidden",
        transition: "transform 0.18s, box-shadow 0.18s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 18px 40px -22px rgba(61,44,41,0.4)" : "none",
      }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, marginBottom: 22 }}>
        <span style={{ width: 52, height: 52, borderRadius: 14, background: "var(--chocolate)", color: "var(--bronze-soft)", display: "grid", placeItems: "center" }}>
          {icon}
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, letterSpacing: "0.04em", color: "var(--lavender)", background: "rgba(156,138,165,0.16)", padding: "7px 13px", borderRadius: 999 }}>
          <Icon.Lock size={12} /> {status}
        </span>
      </div>
      <div className="eyebrow" style={{ color: "var(--bronze)", marginBottom: 10 }}>{tag}</div>
      <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.6, opacity: 0.82 }}>{desc}</p>

      {/* faux locked content shelf */}
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 8 }}>
        {[0, 1, 2].map((r) => (
          <div key={r} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", borderRadius: 11, background: "var(--beige)", border: "1px solid var(--line-dark)", filter: "blur(0.4px)", opacity: 0.7 }}>
            <span style={{ width: 26, height: 26, borderRadius: 7, background: "rgba(156,138,165,0.22)" }} />
            <span style={{ height: 8, borderRadius: 999, background: "rgba(61,44,41,0.16)", flex: r === 1 ? 0.6 : r === 2 ? 0.8 : 1 }} />
            <Icon.Lock size={14} />
          </div>
        ))}
      </div>
    </article>
  );
}

/* ====================================================================
   BRING LADIES FIRST TO YOUR SCHOOL
   ==================================================================== */
function LFBringToSchool() {
  const [form, setForm] = React.useState({ name: "", role: "Educator / staff", school: "", email: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      if (window.bgaApi) await window.bgaApi("/api/ladies-first-school", form);
    } catch (_) { /* graceful */ }
    finally { setSubmitting(false); setSubmitted(true); }
  };

  const steps = [
    { n: "01", t: "Tell us about your school", d: "Grades, number of girls, and the staff sponsor who'll champion it." },
    { n: "02", t: "We build your cohort", d: "BGA sets your weekly session, pairs a facilitator, and connects a sponsor." },
    { n: "03", t: "Ladies First runs weekly", d: "Your sponsor pulls the kit each week, and your girls join every city conference." },
  ];

  return (
    <section id="lf-school" className="section" style={{ background: "var(--lavender-soft)", paddingTop: 100, paddingBottom: 100 }}>
      <div className="container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
          {/* left: pitch + steps */}
          <div>
            <div className="eyebrow" style={{ color: "var(--lavender)", marginBottom: 16 }}>For schools &amp; educators</div>
            <h2 className="display d-lg" style={{ margin: 0 }}>Bring Ladies First <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>to your school.</span></h2>
            <p style={{ margin: "20px 0 0", fontSize: 18, lineHeight: 1.6, color: "var(--chocolate-2)", opacity: 0.88 }}>
              Want a weekly Sister Circle in your building? BGA partners with schools across the city to
              stand up cohorts, train a facilitator, and pair a sponsor, so your girls get the full
              Ladies First experience all year.
            </p>
            <div style={{ marginTop: 36, display: "flex", flexDirection: "column", gap: 4 }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 20, padding: "20px 0", borderTop: i === 0 ? "none" : "1px solid rgba(61,44,41,0.14)" }}>
                  <span className="display" style={{ fontSize: 24, fontWeight: 500, color: "var(--lavender)" }}>{s.n}</span>
                  <div>
                    <div style={{ fontFamily: "Noto Serif", fontSize: 19, fontWeight: 500, color: "var(--chocolate)" }}>{s.t}</div>
                    <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--chocolate-2)", opacity: 0.8, marginTop: 4 }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right: request form */}
          <div style={{ background: "var(--beige)", borderRadius: 24, padding: "38px 38px 34px", border: "1px solid var(--line-dark)", boxShadow: "0 24px 60px -34px rgba(61,44,41,0.4)" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "32px 8px" }}>
                <span style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--bronze-soft)", color: "var(--chocolate-2)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                  <Icon.Check size={26} />
                </span>
                <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 26, fontWeight: 500 }}>Request received.</h3>
                <p style={{ margin: "14px 0 0", fontSize: 15.5, lineHeight: 1.6, opacity: 0.82 }}>
                  Thank you for advocating for your girls. Our partnerships team will reach out within a
                  week to talk through bringing Ladies First to your school.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 24, fontWeight: 500 }}>Start the conversation</h3>
                  <p style={{ margin: "8px 0 0", fontSize: 14, opacity: 0.7 }}>Tell us a little and we'll take it from there.</p>
                </div>
                <LFField label="Your name"><input required value={form.name} onChange={set("name")} placeholder="First & last" style={lfInput} /></LFField>
                <LFField label="Your role">
                  <select value={form.role} onChange={set("role")} style={lfInput}>
                    <option>Educator / staff</option>
                    <option>School administrator</option>
                    <option>Counselor</option>
                    <option>Parent / guardian</option>
                    <option>Community partner</option>
                  </select>
                </LFField>
                <LFField label="School / district"><input required value={form.school} onChange={set("school")} placeholder="School name" style={lfInput} /></LFField>
                <LFField label="Email"><input type="email" required value={form.email} onChange={set("email")} placeholder="you@school.org" style={lfInput} /></LFField>
                <button type="submit" className="btn btn-dark" style={{ marginTop: 6, justifyContent: "center", padding: "15px" }} disabled={submitting}>
                  {submitting ? "Sending…" : <>Request a partnership <Icon.Arrow size={16} /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const lfInput = {
  width: "100%", padding: "13px 15px", background: "var(--beige-deep)", color: "var(--ink)",
  border: "1px solid var(--line-dark)", borderRadius: 11, outline: "none",
  fontFamily: "inherit", fontSize: 15,
};

function LFField({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{ display: "block", fontSize: 12.5, fontWeight: 600, letterSpacing: "0.04em", color: "var(--chocolate-2)", opacity: 0.75, marginBottom: 7 }}>{label}</span>
      {children}
    </label>
  );
}

/* ====================================================================
   LIMITED ACCESS, request access gate
   ==================================================================== */
function LFAccess() {
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("Sponsor");
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      if (window.bgaApi) await window.bgaApi("/api/ladies-first-access", { email, role });
    } catch (_) { /* graceful */ }
    finally { setSubmitting(false); setSubmitted(true); }
  };

  return (
    <section id="lf-access" className="section" style={{ background: "var(--chocolate)", color: "var(--beige)", paddingTop: 96, paddingBottom: 110, position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", right: "-8%", top: "-30%", width: 460, height: 460, borderRadius: "50%", background: "radial-gradient(circle, rgba(156,138,165,0.18) 0%, transparent 70%)" }} />
      <div className="container-wide" style={{ position: "relative", maxWidth: 760, textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        <span style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(173,138,86,0.2)", color: "var(--bronze-soft)", display: "grid", placeItems: "center", margin: "0 auto 26px" }}>
          <Icon.Lock size={26} />
        </span>
        <div className="eyebrow" style={{ color: "var(--bronze-soft)", marginBottom: 16 }}>Limited access</div>
        <h2 className="display d-lg" style={{ margin: 0 }}>For sponsors &amp; <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>facilitators only.</span></h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, margin: "24px auto 0", maxWidth: 600, opacity: 0.84, fontWeight: 300 }}>
          The Ladies First portal holds student materials, schedules, and media, so access is granted
          to approved sponsors and facilitators. Request an invite and we'll set you up the moment the
          portal opens.
        </p>

        <div style={{ marginTop: 40, maxWidth: 540, marginLeft: "auto", marginRight: "auto" }}>
          {submitted ? (
            <div style={{ padding: "22px 26px", background: "rgba(245,240,230,0.08)", border: "1px solid var(--line)", borderRadius: 16, display: "inline-flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--bronze-soft)", color: "var(--chocolate-2)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                <Icon.Check size={15} />
              </span>
              <span style={{ fontSize: 15, textAlign: "left" }}>You're on the access list. We'll email <strong>{email}</strong> with your invite when the portal opens.</span>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                {["Sponsor", "Facilitator", "School partner"].map((r) => (
                  <button key={r} type="button" onClick={() => setRole(r)} style={{
                    padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: "pointer",
                    fontFamily: "inherit", transition: "all 0.15s",
                    background: role === r ? "var(--bronze)" : "rgba(245,240,230,0.08)",
                    color: role === r ? "var(--chocolate)" : "var(--beige)",
                    border: `1px solid ${role === r ? "var(--bronze)" : "var(--line)"}`,
                  }}>{r}</button>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, background: "rgba(245,240,230,0.07)", padding: 8, borderRadius: 14, border: "1px solid var(--line)" }}>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  style={{ width: "100%", padding: "14px 16px", background: "transparent", color: "var(--beige)", border: "none", outline: "none", fontFamily: "inherit", fontSize: 15 }} />
                <button type="submit" className="btn btn-primary" style={{ padding: "12px 22px", fontSize: 14 }} disabled={submitting}>
                  {submitting ? "Sending…" : <>Request access <Icon.Arrow size={14} /></>}
                </button>
              </div>
              <p style={{ fontSize: 12.5, opacity: 0.6, margin: "4px 0 0" }}>Requesting as a <strong>{role}</strong>. Approved by the BGA programming team.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

window.LadiesFirstPage = LadiesFirstPage;
