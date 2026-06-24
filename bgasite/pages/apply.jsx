/* Black Girl Advocate, Cohort Application
   Justice for Black Girls–inspired ambassador framework.
   Cohort caps: 30 seniors · 60 juniors · 90 sophomores · 120 freshmen.
   Stipend: $1,000 total ($250/year, paid out senior year).
   Forfeit if more than 3 monthly leadership meetings are missed.
*/
function ApplyPage({ onNavigate }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [grade, setGrade] = React.useState("freshman");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [school, setSchool] = React.useState("");
  const [city, setCity] = React.useState("");
  const [parentName, setParentName] = React.useState("");
  const [parentEmail, setParentEmail] = React.useState("");
  const [why, setWhy] = React.useState("");
  const [advocacy, setAdvocacy] = React.useState("");
  const [commitMonthly, setCommitMonthly] = React.useState(false);
  const [commitAmbassador, setCommitAmbassador] = React.useState(false);
  const [commitForfeit, setCommitForfeit] = React.useState(false);
  const [signature, setSignature] = React.useState("");

  // Cohort capacity (the JFBG-inspired tiered structure)
  const cohorts = [
  { id: "senior", label: "Senior", grade: "12th", cap: 30, filled: 11, color: "var(--chocolate)", fg: "var(--beige)" },
  { id: "junior", label: "Junior", grade: "11th", cap: 60, filled: 28, color: "var(--lavender)", fg: "var(--beige)" },
  { id: "sophomore", label: "Sophomore", grade: "10th", cap: 90, filled: 41, color: "var(--bronze)", fg: "var(--beige)" },
  { id: "freshman", label: "Freshman", grade: "9th", cap: 120, filled: 38, color: "var(--lavender-soft)", fg: "var(--chocolate-2)" }];

  const selected = cohorts.find((c) => c.id === grade) || cohorts[3];
  const remaining = Math.max(0, selected.cap - selected.filled);

  const canSubmit =
  firstName && lastName && email && school && parentName && parentEmail && why.trim().length >= 60 &&
  commitMonthly && commitAmbassador && commitForfeit && signature.trim().length > 1;

  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);
  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;
    setSubmitting(true);setApiError(null);
    try {
      const r = await window.bgaApi("/api/apply", {
        firstName, lastName, email, phone, school, city, grade,
        parentName, parentEmail, why, advocacy, signature,
        commitMonthly, commitAmbassador, commitForfeit
      });
      if (!r.ok) {setApiError(r.errors ? "Please review the form." : "Something went wrong. Try again.");setSubmitting(false);return;}
      setSubmitted(true);
    } catch (err) {setApiError("Network error. Try again.");} finally
    {setSubmitting(false);}
  };

  return (
    <>
      <PageHero
        eyebrow="Apply · Black Girl Advocate Ambassadors"
        title={<>The room <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>has a seat</span> with your name on it.</>}
        kicker="The Black Girl Advocate Ambassadors are a four-year cohort of Black girls in grades 9–12. Built on a Justice-for-Black-Girls framework, we Seed, Shape, Sharpen, and Soar through advocacy, sisterhood, and leadership. Spots are limited each year, apply below."
        accent="lavender" />
      

      {/* Cohort capacity strip */}
      <section className="section-sm" style={{ background: "var(--beige-deep)", padding: "56px 0" }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ color: "var(--lavender)", marginBottom: 20 }}>2026–2027 Cohort Capacity</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {cohorts.map((c) => {
              const pct = Math.min(100, Math.round(c.filled / c.cap * 100));
              const active = c.id === grade;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setGrade(c.id)}
                  style={{
                    textAlign: "left",
                    background: active ? c.color : "var(--beige)",
                    color: active ? c.fg : "var(--chocolate-2)",
                    border: active ? "none" : "1px solid var(--line-dark)",
                    borderRadius: 18,
                    padding: "24px 24px 22px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "transform 0.15s ease",
                    transform: active ? "translateY(-2px)" : "translateY(0)"
                  }}>
                  
                  <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.7, fontWeight: 600 }}>
                    {c.grade} grade
                  </div>
                  <div style={{ fontFamily: "Noto Serif", fontSize: 30, fontWeight: 500, marginTop: 8, letterSpacing: "-0.01em" }}>
                    {c.label}s
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: 18 }}>
                    <div style={{ fontFamily: "Noto Serif", fontSize: 38, fontWeight: 400, lineHeight: 1 }}>
                      {c.cap - c.filled}
                    </div>
                    <div style={{ fontSize: 13, opacity: 0.75 }}>of {c.cap} seats open</div>
                  </div>
                  {/* capacity bar */}
                  <div style={{ marginTop: 16, height: 6, borderRadius: 999, background: active ? "rgba(245,240,230,0.22)" : "var(--beige-deep)", overflow: "hidden" }}>
                    <div style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: active ? c.fg === "var(--beige)" ? "var(--beige)" : "var(--chocolate-2)" : c.color,
                      borderRadius: 999,
                      transition: "width 0.4s ease"
                    }} />
                  </div>
                </button>);

            })}
          </div>

          <p style={{ marginTop: 28, fontSize: 14, lineHeight: 1.55, opacity: 0.7, maxWidth: 760 }}>
            We hold space for 300 ambassadors total, 30 seniors, 60 juniors, 90 sophomores, and 120 freshmen, so the cohort grows with each girl who joins us early. Seats fill on a rolling basis once applications open.
          </p>
        </div>
      </section>

      {/* What ambassadors commit to */}
      <section className="section" style={{ background: "var(--chocolate-2)", color: "var(--beige)" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="eyebrow" style={{ color: "var(--bronze-soft)" }}>The Ambassador Covenant</div>
              <h2 className="display d-lg" style={{ margin: "20px 0 24px" }}>
                Show up. <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>Speak up.</span> Stay in the room.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, opacity: 0.85, maxWidth: 460 }}>Ambassadors carry the BGA name into their schools, neighborhoods, and group chats. In return, BGA carries you, four years of advocacy training, sisterhood, and a $1000 stipend paid your senior year.

              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
              { t: "One leadership meeting a month",
                b: "Ambassadors attend one BGA Leadership Meeting every month, twelve a year. Showing up is the work." },
              { t: "Be an Ambassador for The Black Girl Advocate",
                b: "You speak up for Black girls in your school, post the work, recruit your sister-friends, and represent BGA at community moments." },
              { t: "$1,000 stipend, paid senior year",
                b: "$250 a year is held in your name. The full $1,000 is paid out at the end of senior year as a graduation gift." },
              { t: "Miss more than three meetings, forfeit the stipend",
                b: "Three excused absences are built in. A fourth missed leadership meeting forfeits the stipend, but never your seat. The room stays open." }].
              map((row, i) =>
              <div key={i} style={{
                background: "rgba(245,240,230,0.05)",
                border: "1px solid rgba(245,240,230,0.14)",
                borderRadius: 16,
                padding: "24px 26px",
                display: "grid",
                gridTemplateColumns: "44px 1fr",
                gap: 18,
                alignItems: "start"
              }}>
                  <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "var(--bronze-soft)", color: "var(--chocolate-2)",
                  display: "grid", placeItems: "center",
                  fontFamily: "Noto Serif", fontSize: 20, fontWeight: 500
                }}>{i + 1}</div>
                  <div>
                    <h4 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 19, fontWeight: 500, letterSpacing: "-0.005em" }}>{row.t}</h4>
                    <p style={{ margin: "8px 0 0", fontSize: 14.5, lineHeight: 1.55, opacity: 0.78 }}>{row.b}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* The application form */}
      <section className="section">
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56 }}>
            <aside>
              <div className="eyebrow" style={{ color: "var(--lavender)" }}>How this works</div>
              <h3 className="display d-md" style={{ margin: "20px 0 16px" }}>What happens after you apply.</h3>
              <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 18 }}>
                {[
                { t: "We review.", b: "Our team reads every application within seven business days." },
                { t: "We invite a conversation.", b: "Selected applicants and a parent or guardian meet with a BGA advocate." },
                { t: "You sign the covenant.", b: "You and a guardian sign the Ambassador Covenant before your first meeting." },
                { t: "You walk into the room.", b: "You're matched to your cohort, your monthly meeting, and the sisterhood that keeps you." }].
                map((s, i) =>
                <li key={i} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 14 }}>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--lavender)", color: "var(--beige)", display: "grid", placeItems: "center", fontFamily: "Noto Serif", fontWeight: 500 }}>{i + 1}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15.5 }}>{s.t}</div>
                      <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.55, opacity: 0.72 }}>{s.b}</p>
                    </div>
                  </li>
                )}
              </ol>

              <div style={{ marginTop: 36, padding: 24, background: "var(--lavender-soft)", borderRadius: 16 }}>
                <div className="eyebrow" style={{ color: "var(--chocolate-2)", opacity: 0.7, marginBottom: 10 }}>Eligibility</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14.5, lineHeight: 1.65, color: "var(--chocolate-2)" }}>
                  <li>Black girl, grades 9–12</li>
                  <li>Resides in or attends school in Colorado</li>
                  <li>Parent or guardian co-signs the covenant</li>
                </ul>
              </div>
            </aside>

            <div style={{ background: "var(--beige)", borderRadius: 24, padding: 40, border: "1px solid var(--line-dark)" }}>
              {submitted ?
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--bronze-soft)", color: "var(--chocolate-2)", display: "grid", placeItems: "center", margin: "0 auto 24px" }}>
                    <Icon.Check size={32} />
                  </div>
                  <h2 className="display d-md" style={{ margin: 0 }}>Welcome to the cohort.</h2>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, marginTop: 14, opacity: 0.78, maxWidth: 460, margin: "14px auto 0" }}>
                    Your application is in. A BGA advocate will email <strong>{email || "you"}</strong> within seven business days to set up your conversation. Until then, the room is already saving your seat.
                  </p>
                  <div style={{ display: "inline-flex", gap: 12, marginTop: 28 }}>
                    <button className="btn btn-outline-dark" onClick={() => setSubmitted(false)}>Submit another application</button>
                    <button className="btn btn-dark" onClick={() => onNavigate("home")}>Back home <Icon.Arrow size={16} /></button>
                  </div>
                </div> :

              <form onSubmit={submit}>
                  <div className="chip chip-lavender" style={{ marginBottom: 16 }}>
                    <Icon.Sparkle size={12} /> Ambassador application
                  </div>
                  <h2 className="display d-md" style={{ margin: 0 }}>Tell us about you.</h2>
                  <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 14, opacity: 0.72 }}>
                    Selected cohort: <strong>{selected.label}s</strong> ({selected.grade} grade) · {remaining} of {selected.cap} seats open.
                  </p>

                  {/* Student */}
                  <FormSection title="Student">
                    <Row>
                      <Field label="First name"><input value={firstName} onChange={(e) => setFirstName(e.target.value)} required style={apField} placeholder="Imani" /></Field>
                      <Field label="Last name"><input value={lastName} onChange={(e) => setLastName(e.target.value)} required style={apField} placeholder="Williams" /></Field>
                    </Row>
                    <Row>
                      <Field label="Email"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={apField} placeholder="you@example.com" /></Field>
                      <Field label="Phone (optional)"><input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={apField} placeholder="(303) 555-0123" /></Field>
                    </Row>
                    <Row>
                      <Field label="School"><input value={school} onChange={(e) => setSchool(e.target.value)} required style={apField} placeholder="East High School" /></Field>
                      <Field label="City / town"><input value={city} onChange={(e) => setCity(e.target.value)} style={apField} placeholder="Denver" /></Field>
                    </Row>
                  </FormSection>

                  {/* Parent / Guardian */}
                  <FormSection title="Parent or Guardian">
                    <Row>
                      <Field label="Full name"><input value={parentName} onChange={(e) => setParentName(e.target.value)} required style={apField} placeholder="Jane Williams" /></Field>
                      <Field label="Email"><input type="email" value={parentEmail} onChange={(e) => setParentEmail(e.target.value)} required style={apField} placeholder="parent@example.com" /></Field>
                    </Row>
                  </FormSection>

                  {/* Voice */}
                  <FormSection title="Your voice">
                    <Field label="Why do you want to be a BGA Ambassador?">
                      <textarea rows="5" value={why} onChange={(e) => setWhy(e.target.value)} required minLength={60} style={{ ...apField, resize: "vertical" }}
                    placeholder="A few sentences on why this room, why now. Minimum 60 characters." />
                      <div style={{ fontSize: 12, opacity: 0.55, marginTop: 6, textAlign: "right" }}>{why.length} characters · 60 minimum</div>
                    </Field>
                    <Field label="An advocacy moment in your own life (optional)">
                      <textarea rows="3" value={advocacy} onChange={(e) => setAdvocacy(e.target.value)} style={{ ...apField, resize: "vertical" }}
                    placeholder="A time you spoke up, organized, or stood with another Black girl." />
                    </Field>
                  </FormSection>

                  {/* Covenant */}
                  <FormSection title="Ambassador Covenant">
                    <CovenantCheck checked={commitMonthly} onChange={setCommitMonthly}>
                      I commit to <strong>one BGA Leadership Meeting every month</strong> for as long as I'm in the cohort.
                    </CovenantCheck>
                    <CovenantCheck checked={commitAmbassador} onChange={setCommitAmbassador}>
                      I commit to being <strong>an Ambassador for The Black Girl Advocate</strong> in my school, online, and in my community.
                    </CovenantCheck>
                    <CovenantCheck checked={commitForfeit} onChange={setCommitForfeit}>
                      I understand that <strong>missing more than three monthly meetings forfeits my $1,000 stipend</strong> ($250 / year, paid out senior year). My seat in the cohort is not affected.
                    </CovenantCheck>

                    <Field label="Type your full name as your signature">
                      <input value={signature} onChange={(e) => setSignature(e.target.value)} required style={apField} placeholder="Imani Williams" />
                      <div style={{ fontSize: 12, opacity: 0.55, marginTop: 6 }}>
                        A parent or guardian will co-sign during your intake conversation.
                      </div>
                    </Field>
                  </FormSection>

                  <button
                  type="submit"
                  className="btn btn-dark"
                  disabled={!canSubmit}
                  style={{
                    marginTop: 32, padding: "16px 28px",
                    opacity: canSubmit ? 1 : 0.5,
                    cursor: canSubmit ? "pointer" : "not-allowed"
                  }}>
                    Submit my application <Icon.Arrow size={16} />
                  </button>
                  <p style={{ fontSize: 12, opacity: 0.55, marginTop: 14 }}>
                    By submitting, I confirm the information above is true and that a parent or guardian has reviewed this application with me.
                  </p>
                </form>
              }
            </div>
          </div>
        </div>
      </section>
    </>);

}

/*, small helpers (apply-page-scoped), */
function FormSection({ title, children }) {
  return (
    <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line-dark)" }}>
      <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--lavender)", fontWeight: 700, marginBottom: 18 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {children}
      </div>
    </div>);

}

function Row({ children }) {
  return <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>{children}</div>;
}

function Field({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 12, letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 600, color: "var(--chocolate-2)", opacity: 0.78, marginBottom: 6 }}>{label}</div>
      {children}
    </label>);

}

function CovenantCheck({ checked, onChange, children }) {
  return (
    <label style={{
      display: "grid", gridTemplateColumns: "28px 1fr", gap: 14,
      alignItems: "start",
      padding: "16px 18px",
      background: checked ? "var(--lavender-soft)" : "var(--beige-deep)",
      border: "1px solid " + (checked ? "transparent" : "var(--line-dark)"),
      borderRadius: 14,
      cursor: "pointer",
      fontSize: 14.5,
      lineHeight: 1.5,
      transition: "background 0.15s ease"
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ width: 20, height: 20, accentColor: "var(--lavender)", marginTop: 2 }} />
      
      <span>{children}</span>
    </label>);

}

const apField = {
  width: "100%", padding: 14,
  background: "var(--beige-deep)", color: "var(--ink)",
  border: "1px solid var(--line-dark)", borderRadius: 12,
  fontFamily: "inherit", fontSize: 15
};

window.ApplyPage = ApplyPage;