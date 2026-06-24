function ContactPage({ onNavigate }) {
  const [intent, setIntent] = React.useState("donate");
  const [submitted, setSubmitted] = React.useState(false);
  const [amount, setAmount] = React.useState(250);
  const [recurring, setRecurring] = React.useState(true);

  const intents = [
  { id: "donate", label: "Donate", icon: <Icon.Heart size={16} /> },
  { id: "enroll", label: "Enroll a Student", icon: <Icon.Sparkle size={16} /> },
  { id: "partner", label: "Partner / Grant", icon: <Icon.Users size={16} /> },
  { id: "volunteer", label: "Volunteer / Mentor", icon: <Icon.Flower size={16} /> },
  { id: "press", label: "Press & Speaking", icon: <Icon.Mail size={16} /> }];


  const [submitting, setSubmitting] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (intent === "donate") { setSubmitted(true); return; } // donate routes to Donorbox widget
    if (submitting) return;
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      intent,
      name: `${fd.get("firstName") || ""} ${fd.get("lastName") || ""}`.trim() || fd.get("name") || "",
      email: fd.get("email") || "",
      phone: fd.get("phone") || "",
      org: fd.get("org") || "",
      studentAge: fd.get("studentAge") || "",
      studentSchool: fd.get("studentSchool") || "",
      message: fd.get("message") || fd.get("interests") || "Volunteer signup",
    };
    try {
      const r = await window.bgaApi("/api/contact", payload);
      if (r.ok) setSubmitted(true);
    } finally { setSubmitting(false); }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>The door is <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>open.</span> Which room do you need?</>}
        kicker="Tell us how you'd like to show up. Every inquiry is read by a real human within one business day."
        accent="gold" />
      

      <section className="section">
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}>
            {/* Left, intent sidebar */}
            <aside>
              <div className="eyebrow" style={{ color: "var(--lavender)", marginBottom: 20 }}>I'd like to…</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {intents.map((i) =>
                <button key={i.id} onClick={() => {setIntent(i.id);setSubmitted(false);}} style={{
                  background: intent === i.id ? "var(--lavender)" : "transparent",
                  color: intent === i.id ? "var(--beige)" : "var(--ink)",
                  padding: "18px 22px",
                  borderRadius: 14,
                  border: intent === i.id ? "none" : "1px solid var(--line-dark)",
                  cursor: "pointer",
                  fontFamily: "inherit", fontSize: 15, fontWeight: 500,
                  display: "flex", alignItems: "center", gap: 14, textAlign: "left",
                  transition: "all 0.2s"
                }}>
                    <span style={{ color: intent === i.id ? "var(--lavender-soft)" : "var(--lavender)" }}>{i.icon}</span>
                    {i.label}
                  </button>
                )}
              </div>

              <div style={{ marginTop: 48, padding: 28, background: "var(--beige-deep)", borderRadius: 16 }}>
                <h4 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 20, fontWeight: 500 }}>Prefer to call?</h4>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12, fontSize: 14.5 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Icon.Phone size={16} /> {BGA.phone}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Icon.Mail size={16} /> {BGA.email}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Icon.Pin size={16} /> {BGA.address}</div>
                </div>
              </div>
            </aside>

            {/* Right, contextual form */}
            <div style={{ background: intent === "donate" ? "var(--chocolate-2)" : "var(--beige)", color: intent === "donate" ? "var(--beige)" : "var(--ink)", borderRadius: 24, padding: 48, border: intent === "donate" ? "none" : "1px solid var(--line-dark)" }}>
              {submitted ?
              <SuccessMessage intent={intent} onReset={() => setSubmitted(false)} dark={intent === "donate"} /> :
              intent === "donate" ?
              <DonateForm amount={amount} setAmount={setAmount} recurring={recurring} setRecurring={setRecurring} onSubmit={submit} /> :

              <StandardForm intent={intent} onSubmit={submit} />
              }
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: "var(--beige-deep)" }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ color: "var(--taupe)" }}>FAQ</div>
          <h2 className="display d-lg" style={{ margin: "20px 0 48px" }}>Before you write.</h2>
          <FAQ items={[
          { q: "Is my donation tax deductible?", a: "Yes. BGA is a 501(c)(3) nonprofit. You'll receive a receipt by email after your gift processes. Our EIN is available on request." },
          { q: "How do I enroll my daughter?", a: "Reach out using the form and a member of our team will follow up within one business day to walk you through the program that fits her best." },
          { q: "Are programs free?", a: "Most BGA programming is offered at no cost to families. A few experiences (such as our HBCU and college tours) are paid because they involve travel and lodging. Need based scholarships are available, just ask." },
          { q: "Where do you operate?", a: "We serve Black girls and families across Colorado. Some programs (like the HBCU Tour) involve travel beyond Colorado." },
          { q: "How can my company partner?", a: "We welcome corporate sponsors, in kind partners, and matching gift programs. Use the Partner / Grant option on this page and our development team will be in touch." },
          { q: "How can I volunteer or mentor?", a: "Mentors are the heart of BGA. We onboard, train, and support every Black woman who shows up to mentor, and we ask for a real, multi month commitment." }]
          } />
        </div>
      </section>
    </>);

}

function DonateForm({ amount, setAmount, recurring, setRecurring, onSubmit }) {
  const presets = [50, 100, 250, 500, 1000, 2500];
  return (
    <form onSubmit={onSubmit}>
      <div className="chip chip-on-dark" style={{ marginBottom: 24 }}><Icon.Heart size={12} /> Secure donation</div>
      <h2 className="display d-md" style={{ margin: 0 }}>Fund a girl's <span className="serif" style={{ fontStyle: "italic", fontWeight: 400 }}>whole year.</span></h2>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, marginTop: 16, opacity: 0.78 }}>$600 supports a Senior Saturday session. $1,500 sponsors a girl on the HBCU tour. $3,500 sponsors one Elite Eight scholar's Ivy League summer program.</p>

      {/* Where the money goes */}
      <div style={{ marginTop: 24, padding: "20px 22px", border: "1px solid rgba(245,240,230,0.18)", borderRadius: 14, background: "rgba(245,240,230,0.04)" }}>
        <div style={{ fontFamily: "Noto Sans", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.6, marginBottom: 12 }}>
          Where your gift goes
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 8, fontSize: 14, lineHeight: 1.5 }}>
          <li style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 12, alignItems: "baseline" }}>
            <span style={{ fontWeight: 700, color: "var(--bronze-soft)" }}>82&thinsp;%</span>
            <span style={{ opacity: 0.85 }}>Direct programming &mdash; The Elite Eight, HBCU Tour, Saturday sessions, scholarships, books, transportation, meals.</span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 12, alignItems: "baseline" }}>
            <span style={{ fontWeight: 700, color: "var(--bronze-soft)" }}>12&thinsp;%</span>
            <span style={{ opacity: 0.85 }}>Operations &mdash; staff, facilitators, and the spaces we gather in.</span>
          </li>
          <li style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 12, alignItems: "baseline" }}>
            <span style={{ fontWeight: 700, color: "var(--bronze-soft)" }}>6&thinsp;%</span>
            <span style={{ opacity: 0.85 }}>Fundraising &mdash; processing fees and outreach to keep the work growing.</span>
          </li>
        </ul>
        <p style={{ margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.55, opacity: 0.6 }}>
          The Black Girl Advocate is a 501(c)(3) nonprofit (EIN on request). Sustainers receive a quarterly impact briefing showing exactly which girls and programs your gift funded.
        </p>
      </div>

      <div style={{ marginTop: 32 }}>
        <Label dark>Amount</Label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}>
          {presets.map((p) =>
          <button key={p} type="button" onClick={() => setAmount(p)} style={{
            padding: "16px 0",
            background: amount === p ? "var(--bronze-soft)" : "transparent",
            color: amount === p ? "var(--chocolate-2)" : "var(--beige)",
            border: amount === p ? "none" : "1px solid rgba(245,240,230,0.25)",
            borderRadius: 12,
            cursor: "pointer",
            fontFamily: "inherit", fontSize: 18, fontWeight: 600
          }}>${p}</button>
          )}
        </div>
        <div style={{ position: "relative", marginTop: 8 }}>
          <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", opacity: 0.5 }}>$</span>
          <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} style={{
            width: "100%", padding: "16px 16px 16px 32px",
            background: "rgba(245,240,230,0.05)", color: "var(--beige)",
            border: "1px solid rgba(245,240,230,0.2)", borderRadius: 12,
            fontFamily: "inherit", fontSize: 18, fontWeight: 600
          }} />
        </div>
      </div>

      <label style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24, cursor: "pointer", fontSize: 14.5 }}>
        <input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.target.checked)} style={{ width: 18, height: 18, accentColor: "var(--bronze-soft)" }} />
        Make this a monthly gift, you'll join our Sustainer Circle
      </label>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
        <TextField dark label="Full name" placeholder="Jane Doe" />
        <TextField dark label="Email" placeholder="jane@example.com" type="email" />
      </div>

      <button type="submit" className="btn btn-primary" style={{ marginTop: 32, width: "100%", padding: "18px 24px", fontSize: 16, justifyContent: "center" }}>
        Give ${amount}{recurring ? "/mo" : ""} <Icon.Heart size={16} />
      </button>
      <p style={{ fontSize: 12, opacity: 0.55, marginTop: 16, textAlign: "center" }}>Secure processing via Stripe. 100% tax deductible.</p>
    </form>);

}

function StandardForm({ intent, onSubmit }) {
  const headlines = {
    enroll: { title: "Enroll a student.", sub: "Tell us about the girl you'd like to bring into the BGA family. We'll be in touch within two business days." },
    partner: { title: "Build with us.", sub: "Corporate partnerships, foundations, and grant inquiries. Our development team will respond within one business day." },
    volunteer: { title: "Join the village.", sub: "Advocates are the heart of our work. We train, vet, and support every volunteer, it's a real commitment." },
    press: { title: "Press & speaking.", sub: "For media inquiries, bookings, and speaking engagements for our leadership team." }
  };
  const h = headlines[intent];

  if (intent === "volunteer") return <VolunteerForm onSubmit={onSubmit} />;

  return (
    <form onSubmit={onSubmit}>
      <h2 className="display d-md" style={{ margin: 0 }}>{h.title}</h2>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, marginTop: 16, opacity: 0.75 }}>{h.sub}</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
        <TextField label="First name" placeholder="Ada" name="firstName" required />
        <TextField label="Last name" placeholder="Washington" name="lastName" required />
      </div>
      <div style={{ marginTop: 16 }}>
        <TextField label="Email" placeholder="you@example.com" type="email" name="email" required />
      </div>
      {intent === "enroll" &&
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
          <TextField label="Student's age" placeholder="14" name="studentAge" />
          <TextField label="School district" placeholder="School district" name="studentSchool" />
        </div>
      }
      {intent === "partner" &&
      <div style={{ marginTop: 16 }}>
          <TextField label="Organization" placeholder="Your foundation / company" name="org" />
        </div>
      }
      <div style={{ marginTop: 16 }}>
        <Label>Tell us more</Label>
        <textarea rows="5" name="message" required placeholder="A few sentences about why you're reaching out…" style={{
          width: "100%", marginTop: 8, padding: 14,
          border: "1px solid var(--line-dark)", borderRadius: 12,
          fontFamily: "inherit", fontSize: 15, resize: "vertical",
          background: "var(--beige-deep)"
        }} />
      </div>
      <button type="submit" className="btn btn-dark" style={{ marginTop: 28, padding: "16px 28px" }}>Send message <Icon.Arrow size={16} /></button>
    </form>);

}

function VolunteerForm({ onSubmit }) {
  const [bgConsent, setBgConsent] = React.useState(false);
  const [codeConsent, setCodeConsent] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);
  const [interests, setInterests] = React.useState([]);

  const toggleInterest = (val) => {
    setInterests((prev) => prev.includes(val) ? prev.filter((x) => x !== val) : [...prev, val]);
  };

  const ready = bgConsent && codeConsent && confirm;

  const interestOptions = [
  "Ladies First (cohort facilitator)",
  "The Elite Eight (Ivy League tour)",
  "HBCU Tour chaperone",
  "Black Women in Education (advocate match)",
  "Senior Suite (essay & FAFSA coach)",
  "I Got Next (athletics)",
  "Black Girls at the Arts",
  "Black Girl Hair Project",
  "Event volunteer (Orchid Awards, fundraisers)",
  "Skills based (legal, finance, design, comms)"];


  return (
    <form onSubmit={(e) => {e.preventDefault();if (ready) onSubmit(e);}}>
      <h2 className="display d-md" style={{ margin: 0 }}>Join the village.</h2>
      <p style={{ fontSize: 15.5, lineHeight: 1.6, marginTop: 16, opacity: 0.78, maxWidth: 560 }}>
        BGA is womanist by design: our advocates are Black women who choose to show up for Black girls with consistency and care. Every volunteer completes onboarding, training, and a federal background check before being placed.
      </p>

      {/* Section: About you */}
      <FormSection number="01" title="About you" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <TextField label="Legal first name" placeholder="As it appears on your ID" />
        <TextField label="Legal last name" placeholder="As it appears on your ID" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <TextField label="Email" placeholder="you@example.com" type="email" />
        <TextField label="Phone" placeholder="(720) 000-0000" type="tel" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 16 }}>
        <TextField label="City" placeholder="City" />
        <TextField label="State" placeholder="CO" />
        <TextField label="Date of birth" placeholder="MM / DD / YYYY" />
      </div>
      <div style={{ marginTop: 16 }}>
        <TextField label="Pronouns (optional)" placeholder="she / her" />
      </div>

      {/* Section: Where you fit */}
      <FormSection number="02" title="Where you'd like to plug in" />
      <Label>Areas of interest (select all that apply)</Label>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
        {interestOptions.map((opt) => {
          const active = interests.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggleInterest(opt)}
              style={{
                textAlign: "left",
                padding: "12px 16px",
                background: active ? "var(--lavender)" : "transparent",
                color: active ? "var(--beige)" : "var(--ink)",
                border: active ? "1.5px solid var(--lavender)" : "1px solid var(--line-dark)",
                borderRadius: 12,
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: active ? 600 : 500,
                transition: "all 0.15s"
              }}>
              
              {active ? "✓  " : ""}{opt}
            </button>);

        })}
      </div>

      <div style={{ marginTop: 20 }}>
        <Label>Hours you can offer per month</Label>
        <select style={{
          width: "100%", marginTop: 8, padding: 14,
          background: "var(--beige-deep)", color: "var(--ink)",
          border: "1px solid var(--line-dark)", borderRadius: 12,
          fontFamily: "inherit", fontSize: 15
        }}>
          <option>2–4 hours</option>
          <option>5–8 hours</option>
          <option>9–15 hours</option>
          <option>15+ hours</option>
        </select>
      </div>
      <div style={{ marginTop: 16 }}>
        <TextField label="How long can you commit?" placeholder="e.g., one school year, multi-year" />
      </div>

      {/* Section: Experience */}
      <FormSection number="03" title="Experience with girls and youth" />
      <div>
        <Label>Have you previously volunteered, taught, mentored, or coached?</Label>
        <textarea rows="4" placeholder="Tell us about it, no formal experience required, lived experience counts." style={{
          width: "100%", marginTop: 8, padding: 14,
          border: "1px solid var(--line-dark)", borderRadius: 12,
          fontFamily: "inherit", fontSize: 15, resize: "vertical",
          background: "var(--beige-deep)"
        }} />
      </div>
      <div style={{ marginTop: 16 }}>
        <Label>Why The Black Girl Advocate? Why now?</Label>
        <textarea rows="4" placeholder="A few sentences in your own words." style={{
          width: "100%", marginTop: 8, padding: 14,
          border: "1px solid var(--line-dark)", borderRadius: 12,
          fontFamily: "inherit", fontSize: 15, resize: "vertical",
          background: "var(--beige-deep)"
        }} />
      </div>

      {/* Section: References */}
      <FormSection number="04" title="Two references" />
      <p style={{ fontSize: 14, lineHeight: 1.55, opacity: 0.7, marginTop: -8 }}>
        Non-family members who can speak to your character and reliability.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 12 }}>
        <TextField label="Reference 1, full name" placeholder="Full name" />
        <TextField label="Relationship" placeholder="Colleague, etc." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <TextField label="Email" placeholder="reference1@example.com" type="email" />
        <TextField label="Phone" placeholder="(000) 000-0000" type="tel" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24 }}>
        <TextField label="Reference 2, full name" placeholder="Full name" />
        <TextField label="Relationship" placeholder="Colleague, etc." />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
        <TextField label="Email" placeholder="reference2@example.com" type="email" />
        <TextField label="Phone" placeholder="(000) 000-0000" type="tel" />
      </div>

      {/* Section: Background check */}
      <FormSection number="05" title="Federal background check & consent" />
      <div style={{
        background: "var(--lavender-soft)", color: "var(--chocolate-2)",
        padding: 24, borderRadius: 16, marginTop: 4,
        display: "flex", gap: 16, alignItems: "flex-start"
      }}>
        <span style={{
          width: 36, height: 36, borderRadius: "50%",
          background: "var(--chocolate-2)", color: "var(--lavender-soft)",
          display: "grid", placeItems: "center", flexShrink: 0
        }}>
          <Icon.Check size={18} />
        </span>
        <div style={{ fontSize: 14.5, lineHeight: 1.6 }}>
          <strong style={{ display: "block", marginBottom: 6, fontSize: 15 }}>Why we run background checks</strong>
          Every BGA advocate works directly with girls and minors. We require a federal criminal background check (FBI fingerprint based, plus state and sex offender registry checks) for every volunteer. The check is paid for by BGA. Results are reviewed confidentially by our Executive Director and disqualifications are made on a case by case basis consistent with our youth protection policy.
        </div>
      </div>

      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 14 }}>
        <ConsentCheckbox checked={bgConsent} onChange={setBgConsent}>
          <strong>I authorize a federal background check.</strong> I understand BGA will use a third party screening provider to run a criminal background check (federal, state, and sex offender registry) and that I will be asked to provide my legal name, date of birth, and Social Security Number through a secure separate form before placement.
        </ConsentCheckbox>
        <ConsentCheckbox checked={codeConsent} onChange={setCodeConsent}>
          <strong>I agree to BGA's Code of Conduct & Youth Protection Policy.</strong> I will complete required onboarding and trainings, follow mandatory reporter guidance, and uphold the dignity, safety, and confidentiality of every BGA girl and family.
        </ConsentCheckbox>
        <ConsentCheckbox checked={confirm} onChange={setConfirm}>
          <strong>The information I've provided is true and complete</strong> to the best of my knowledge. I understand that misrepresentation may result in disqualification or removal from the program.
        </ConsentCheckbox>
      </div>

      <button
        type="submit"
        className="btn btn-dark"
        disabled={!ready}
        style={{
          marginTop: 32, padding: "18px 28px", fontSize: 15.5,
          opacity: ready ? 1 : 0.45, cursor: ready ? "pointer" : "not-allowed"
        }}>
        
        Submit volunteer application <Icon.Arrow size={16} />
      </button>
      <p style={{ fontSize: 12, opacity: 0.55, marginTop: 14 }}>
        After review, our team will reach out to schedule an onboarding call and send the secure background check link.
      </p>
    </form>);

}

function FormSection({ number, title }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 16,
      margin: "44px 0 20px",
      paddingBottom: 12,
      borderBottom: "1px solid var(--line-dark)"
    }}>
      <span style={{ fontFamily: "Noto Serif", fontSize: 24, fontWeight: 400, color: "var(--lavender)", fontStyle: "italic" }}>{number}</span>
      <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500 }}>{title}</h3>
    </div>);

}

function ConsentCheckbox({ checked, onChange, children }) {
  return (
    <label style={{
      display: "flex", gap: 14, alignItems: "flex-start",
      padding: 16,
      background: checked ? "rgba(156, 138, 165, 0.12)" : "var(--beige-deep)",
      border: checked ? "1.5px solid var(--lavender)" : "1px solid var(--line-dark)",
      borderRadius: 12,
      cursor: "pointer",
      transition: "all 0.15s"
    }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        style={{ width: 20, height: 20, marginTop: 2, accentColor: "var(--lavender)", flexShrink: 0, cursor: "pointer" }} />
      
      <span style={{ fontSize: 14.5, lineHeight: 1.55 }}>{children}</span>
    </label>);

}

function TextField({ label, placeholder, type = "text", dark, name, required }) {
  return (
    <div>
      <Label dark={dark}>{label}</Label>
      <input type={type} placeholder={placeholder} name={name} required={required} style={{
        width: "100%", marginTop: 8, padding: 14,
        background: dark ? "rgba(245,240,230,0.05)" : "var(--beige-deep)",
        color: dark ? "var(--beige)" : "var(--ink)",
        border: dark ? "1px solid rgba(245,240,230,0.2)" : "1px solid var(--line-dark)",
        borderRadius: 12,
        fontFamily: "inherit", fontSize: 15
      }} />
    </div>);

}
function Label({ children, dark }) {
  return <label style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600, opacity: dark ? 0.75 : 0.6 }}>{children}</label>;
}

function SuccessMessage({ intent, onReset, dark }) {
  return (
    <div style={{ textAlign: "center", padding: "40px 0" }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        background: "var(--bronze-soft)", color: "var(--chocolate-2)",
        display: "grid", placeItems: "center", margin: "0 auto 28px"
      }}>
        <Icon.Check size={32} />
      </div>
      <h2 className="display d-md" style={{ margin: 0 }}>Thank you.</h2>
      <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 16, opacity: 0.78, maxWidth: 440, margin: "16px auto 0" }}>
        {intent === "donate" ?
        "Your gift is processing. A receipt is on its way to your inbox. Welcome to the circle." :
        "Your message is in. A real person will read it and respond within one business day."}
      </p>
      <button className={dark ? "btn btn-outline-light" : "btn btn-outline-dark"} onClick={onReset} style={{ marginTop: 32 }}>Send another</button>
    </div>);

}

function FAQ({ items }) {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ borderTop: "1px solid var(--line-dark)" }}>
      {items.map((item, i) =>
      <div key={i} style={{ borderBottom: "1px solid var(--line-dark)" }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{
          width: "100%", textAlign: "left", padding: "28px 0",
          background: "transparent", border: "none", cursor: "pointer",
          fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500,
          display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24,
          color: "var(--ink)", letterSpacing: "-0.01em"
        }}>
            {item.q}
            <span style={{ flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>
              <Icon.Plus size={20} />
            </span>
          </button>
          <div style={{
          maxHeight: open === i ? 200 : 0,
          overflow: "hidden",
          transition: "max height 0.3s ease"
        }}>
            <p style={{ margin: 0, paddingBottom: 28, fontSize: 16, lineHeight: 1.65, opacity: 0.78, maxWidth: 820 }}>{item.a}</p>
          </div>
        </div>
      )}
    </div>);

}

window.ContactPage = ContactPage;