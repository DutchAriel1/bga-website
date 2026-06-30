/* The Orchid Award 2027, nomination + sponsorship.
   A lavender orchid theme: plum, orchid, lavender, cream, with a gold accent.
   Nominations route to /api/orchid-nominate, sponsorships to /api/orchid-sponsor
   (both notify ariel@theblackgirladvocate.org). */

const ORC = {
  plumDeep: "#2E2140",
  plum: "#4A3463",
  orchid: "#7E5A9B",
  orchidSoft: "#A684C2",
  lilac: "#C9B8DA",
  lilacMist: "#E7DDF0",
  lip: "#C77BA6",
  cream: "#F8F3EE",
  creamHi: "#FFFDFA",
  gold: "#C8A874",
  ink: "#2A1D2E"
};

const orcFonts = {
  serif: "'Noto Serif', Georgia, serif",
  sans: "'Noto Sans', system-ui, sans-serif"
};

/* ---- Stylized orchid bloom ---- */
function OrchidBloom({ size = 120, opacity = 1, petal = ORC.orchidSoft, lip = ORC.lip, throat = ORC.plum }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden style={{ opacity }}>
      {/* upper petals */}
      <ellipse cx="60" cy="30" rx="14" ry="24" fill={petal} />
      {/* lateral upper petals */}
      <ellipse cx="32" cy="44" rx="13" ry="22" fill={petal} transform="rotate(-42 32 44)" />
      <ellipse cx="88" cy="44" rx="13" ry="22" fill={petal} transform="rotate(42 88 44)" />
      {/* lateral lower sepals */}
      <ellipse cx="38" cy="76" rx="12" ry="20" fill={petal} transform="rotate(-18 38 76)" opacity="0.92" />
      <ellipse cx="82" cy="76" rx="12" ry="20" fill={petal} transform="rotate(18 82 76)" opacity="0.92" />
      {/* labellum / lip */}
      <path d="M60 58 C 44 64, 44 92, 60 104 C 76 92, 76 64, 60 58 Z" fill={lip} />
      <path d="M60 64 C 51 68, 51 88, 60 96 C 69 88, 69 68, 60 64 Z" fill={throat} opacity="0.55" />
      {/* column */}
      <ellipse cx="60" cy="58" rx="6" ry="9" fill={ORC.creamHi} opacity="0.9" />
      {/* throat freckles */}
      <circle cx="56" cy="74" r="1.6" fill={ORC.gold} />
      <circle cx="64" cy="74" r="1.6" fill={ORC.gold} />
      <circle cx="60" cy="82" r="1.6" fill={ORC.gold} />
    </svg>
  );
}

const orcInput = {
  width: "100%",
  padding: "14px 16px",
  background: ORC.creamHi,
  color: ORC.ink,
  border: `1.5px solid ${ORC.lilac}`,
  borderRadius: 10,
  fontFamily: orcFonts.sans,
  fontSize: 15,
  fontWeight: 400,
  outline: "none"
};

function OrcField({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontFamily: orcFonts.sans, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, color: ORC.plum, marginBottom: 7 }}>{label}</div>
      {children}
    </label>
  );
}

const ORCHID_CATEGORIES = [
  "ECE Educator of the Year",
  "Elementary Educator of the Year",
  "Middle School Educator of the Year",
  "High School Educator of the Year",
  "Post Secondary Educator of the Year",
  "Lifetime Achievement"
];

const SPONSOR_TIERS = [
  { name: "Lilac", amt: "$500", blurb: "Name in the program and on the digital wall of supporters." },
  { name: "Lavender", amt: "$1,500", blurb: "Reserved seats for two, logo on event signage, and program recognition." },
  { name: "Royal Orchid", amt: "$5,000", blurb: "A sponsored table of eight, stage recognition, and a featured spot in event media." },
  { name: "Presenting Orchid", amt: "$10,000+", blurb: "Title sponsor billing across the evening, press, and the full Orchid Award season." }
];

function OrchidsPage({ onNavigate, initialIntent }) {
  const [nomDone, setNomDone] = React.useState(false);
  const [spDone, setSpDone] = React.useState(false);

  React.useEffect(() => {
    if (initialIntent === "sponsor") {
      const el = document.getElementById("orchid-sponsor");
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
    }
  }, [initialIntent]);

  return (
    <div style={{ background: ORC.cream, color: ORC.ink, fontFamily: orcFonts.sans }}>
      <style>{`
        .orc-h { font-family: ${orcFonts.serif}; font-weight: 500; line-height: 1.02; letter-spacing: -0.01em; }
        .orc-eyebrow { font-family: ${orcFonts.sans}; font-weight: 600; font-size: 12px; letter-spacing: 0.28em; text-transform: uppercase; }
        .orc-body { font-family: ${orcFonts.sans}; font-weight: 400; line-height: 1.65; }
        .orc-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 15px 30px; border-radius: 999px; border: none; cursor: pointer; font-family: ${orcFonts.sans}; font-weight: 600; font-size: 14px; letter-spacing: 0.04em; transition: transform .18s ease, box-shadow .18s ease, background .18s ease, color .18s ease; }
        .orc-btn:hover { transform: translateY(-2px); }
        .orc-btn-orchid { background: ${ORC.orchid}; color: ${ORC.creamHi}; box-shadow: 0 10px 26px -12px ${ORC.plum}; }
        .orc-btn-orchid:hover { background: ${ORC.plum}; }
        .orc-btn-outline { background: transparent; color: ${ORC.creamHi}; border: 1.5px solid rgba(255,253,250,0.5); }
        .orc-btn-outline:hover { background: rgba(255,253,250,0.12); border-color: ${ORC.creamHi}; }
        .orc-btn-gold { background: ${ORC.gold}; color: ${ORC.plumDeep}; }
        .orc-btn-gold:hover { background: ${ORC.creamHi}; }
        .orc-input:focus { border-color: ${ORC.orchid} !important; box-shadow: 0 0 0 3px ${ORC.lilacMist}; }
        .orc-tier:hover { transform: translateY(-5px); box-shadow: 0 22px 44px -22px ${ORC.plum}; }
      `}</style>

      {/* ===== HERO ===== */}
      <section style={{ position: "relative", overflow: "hidden", background: `linear-gradient(160deg, ${ORC.plumDeep}, ${ORC.plum} 70%)`, color: ORC.creamHi, padding: "96px 0 104px" }}>
        {/* floating blooms */}
        <div aria-hidden style={{ position: "absolute", top: -20, left: -30, transform: "rotate(-12deg)" }}><OrchidBloom size={220} opacity={0.18} /></div>
        <div aria-hidden style={{ position: "absolute", bottom: -50, right: -20, transform: "rotate(20deg)" }}><OrchidBloom size={300} opacity={0.16} /></div>
        <div aria-hidden style={{ position: "absolute", top: "40%", right: "30%", transform: "rotate(8deg)" }}><OrchidBloom size={90} opacity={0.1} /></div>

        <div className="container-wide" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
            <OrchidBloom size={88} petal={ORC.lilac} lip={ORC.lip} throat={ORC.plumDeep} />
          </div>
          <div className="orc-eyebrow" style={{ color: ORC.lilac, marginBottom: 18 }}>The Orchid Award · 2027</div>
          <h1 className="orc-h" style={{ margin: 0, fontSize: "clamp(46px, 6.4vw, 92px)" }}>
            Honoring the women who <span style={{ fontStyle: "italic", color: ORC.orchidSoft }}>bloom</span> where it is hardest.
          </h1>
          <p className="orc-body" style={{ margin: "26px auto 0", maxWidth: 620, fontSize: 18, color: ORC.lilacMist }}>
            The orchid returns season after season and refuses to be ordinary, exactly like the Black women educators we celebrate. Nominate an educator for the 2027 Orchid Award, or help us fill the room as a sponsor.
          </p>
          <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginTop: 38 }}>
            <button className="orc-btn orc-btn-gold" onClick={() => { const el = document.getElementById("orchid-nominate"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }}>
              Nominate an Educator
            </button>
            <button className="orc-btn orc-btn-outline" onClick={() => { const el = document.getElementById("orchid-sponsor"); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" }); }}>
              Sponsor the 2027 Orchids
            </button>
          </div>
        </div>
      </section>

      {/* ===== NOMINATE ===== */}
      <section id="orchid-nominate" style={{ padding: "96px 0" }}>
        <div className="container-wide" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div className="orc-eyebrow" style={{ color: ORC.orchid, marginBottom: 14 }}>Nominate · 2027</div>
            <h2 className="orc-h" style={{ margin: 0, fontSize: "clamp(32px, 4.4vw, 54px)", color: ORC.plumDeep }}>Know an educator who deserves an Orchid?</h2>
            <p className="orc-body" style={{ margin: "16px auto 0", maxWidth: 540, fontSize: 16.5, color: ORC.ink, opacity: 0.78 }}>
              Tell us about the Black woman educator who is shaping your daughter, niece, student, or self. Nominations are reviewed by the Orchid Award committee.
            </p>
          </div>

          {nomDone ?
          <div style={{ marginTop: 40, background: ORC.creamHi, border: `1.5px solid ${ORC.lilac}`, borderRadius: 20, padding: "56px 40px", textAlign: "center" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><OrchidBloom size={72} /></div>
              <h3 className="orc-h" style={{ margin: 0, fontSize: 32, color: ORC.plumDeep }}>Nomination received.</h3>
              <p className="orc-body" style={{ margin: "14px auto 0", maxWidth: 460, fontSize: 16, color: ORC.ink, opacity: 0.8 }}>
                Thank you for lifting her up. The Orchid Award committee will review every nomination ahead of the 2027 ceremony.
              </p>
            </div> :
          <OrchidNominateForm onDone={() => setNomDone(true)} />
          }
        </div>
      </section>

      {/* ===== SPONSOR ===== */}
      <section id="orchid-sponsor" style={{ padding: "96px 0", background: `linear-gradient(160deg, ${ORC.plum}, ${ORC.plumDeep})`, color: ORC.creamHi, position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: -40, right: -40, transform: "rotate(18deg)" }}><OrchidBloom size={260} opacity={0.12} /></div>
        <div className="container-wide" style={{ position: "relative", zIndex: 2, maxWidth: 1040, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="orc-eyebrow" style={{ color: ORC.lilac, marginBottom: 14 }}>Sponsor · 2027</div>
            <h2 className="orc-h" style={{ margin: 0, fontSize: "clamp(32px, 4.4vw, 54px)" }}>Help the room bloom.</h2>
            <p className="orc-body" style={{ margin: "16px auto 0", maxWidth: 560, fontSize: 16.5, color: ORC.lilacMist }}>
              Your sponsorship funds the ceremony, honoree gifts, and the year-round Black Women in Education program. Choose a level, or tell us what works for you.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginBottom: 52 }}>
            {SPONSOR_TIERS.map((t, i) =>
            <div key={t.name} className="orc-tier" style={{ background: i === 3 ? ORC.gold : ORC.creamHi, color: i === 3 ? ORC.plumDeep : ORC.ink, borderRadius: 18, padding: "26px 22px", transition: "transform .2s ease, box-shadow .2s ease", display: "flex", flexDirection: "column" }}>
                <OrchidBloom size={40} petal={i === 3 ? ORC.plum : ORC.orchidSoft} lip={ORC.lip} throat={ORC.plumDeep} />
                <div className="orc-eyebrow" style={{ marginTop: 14, color: i === 3 ? ORC.plum : ORC.orchid, fontSize: 11 }}>{t.name}</div>
                <div className="orc-h" style={{ fontSize: 32, margin: "6px 0 10px" }}>{t.amt}</div>
                <p className="orc-body" style={{ margin: 0, fontSize: 13.5, opacity: 0.82 }}>{t.blurb}</p>
              </div>
            )}
          </div>

          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {spDone ?
            <div style={{ background: ORC.creamHi, color: ORC.ink, border: `1.5px solid ${ORC.lilac}`, borderRadius: 20, padding: "56px 40px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><OrchidBloom size={72} /></div>
                <h3 className="orc-h" style={{ margin: 0, fontSize: 32, color: ORC.plumDeep }}>Thank you for sponsoring.</h3>
                <p className="orc-body" style={{ margin: "14px auto 0", maxWidth: 460, fontSize: 16, opacity: 0.8 }}>
                  Our team will reach out to confirm your sponsorship details and benefits for the 2027 Orchid Award.
                </p>
              </div> :
            <OrchidSponsorForm onDone={() => setSpDone(true)} />
            }
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---- Nomination form ---- */
function OrchidNominateForm({ onDone }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);
  const [nomineeName, setNomineeName] = React.useState("");
  const [nomineeEmail, setNomineeEmail] = React.useState("");
  const [institution, setInstitution] = React.useState("");
  const [category, setCategory] = React.useState(ORCHID_CATEGORIES[0]);
  const [reason, setReason] = React.useState("");
  const [nominatorName, setNominatorName] = React.useState("");
  const [nominatorEmail, setNominatorEmail] = React.useState("");
  const [relationship, setRelationship] = React.useState("");

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const canSubmit = nomineeName && institution && category && reason.trim().length >= 40 && nominatorName && emailOk(nominatorEmail) && !submitting;

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true); setApiError(null);
    try {
      const r = await window.bgaApi("/api/orchid-nominate", {
        nomineeName, nomineeEmail, institution, category, reason,
        nominatorName, nominatorEmail, relationship
      });
      if (!r.ok) { setApiError("Please review the highlighted fields."); setSubmitting(false); return; }
      onDone();
    } catch (err) { setApiError("Network error. Please try again."); } finally { setSubmitting(false); }
  };

  return (
    <form onSubmit={submit} style={{ marginTop: 40, background: ORC.creamHi, border: `1.5px solid ${ORC.lilac}`, borderRadius: 20, padding: "40px 40px 44px" }}>
      <div className="orc-eyebrow" style={{ color: ORC.orchid, fontSize: 11, marginBottom: 18 }}>The Educator</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <OrcField label="Nominee name"><input className="orc-input" value={nomineeName} onChange={(e) => setNomineeName(e.target.value)} style={orcInput} placeholder="Ms. Jane Educator" /></OrcField>
          <OrcField label="Nominee email (optional)"><input className="orc-input" type="email" value={nomineeEmail} onChange={(e) => setNomineeEmail(e.target.value)} style={orcInput} placeholder="educator@school.edu" /></OrcField>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <OrcField label="School / institution"><input className="orc-input" value={institution} onChange={(e) => setInstitution(e.target.value)} style={orcInput} placeholder="East High School" /></OrcField>
          <OrcField label="Award category">
            <select className="orc-input" value={category} onChange={(e) => setCategory(e.target.value)} style={orcInput}>
              {ORCHID_CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </OrcField>
        </div>
        <OrcField label="Why she deserves an Orchid">
          <textarea className="orc-input" rows="5" value={reason} onChange={(e) => setReason(e.target.value)} style={{ ...orcInput, resize: "vertical" }} placeholder="Tell us how she shows up for Black girls and her community. The more specific, the better." />
          <div className="orc-body" style={{ marginTop: 6, fontSize: 12.5, color: reason.trim().length >= 40 ? ORC.orchid : ORC.ink, opacity: 0.7 }}>
            {reason.trim().length >= 40 ? "Looks great." : `Please write at least 40 characters (${reason.trim().length}/40).`}
          </div>
        </OrcField>
      </div>

      <div className="orc-eyebrow" style={{ color: ORC.orchid, fontSize: 11, margin: "30px 0 18px", paddingTop: 26, borderTop: `1px solid ${ORC.lilacMist}` }}>About You</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <OrcField label="Your name"><input className="orc-input" value={nominatorName} onChange={(e) => setNominatorName(e.target.value)} style={orcInput} placeholder="Your full name" /></OrcField>
          <OrcField label="Your email"><input className="orc-input" type="email" value={nominatorEmail} onChange={(e) => setNominatorEmail(e.target.value)} style={orcInput} placeholder="you@example.com" /></OrcField>
        </div>
        <OrcField label="Your relationship to the nominee (optional)"><input className="orc-input" value={relationship} onChange={(e) => setRelationship(e.target.value)} style={orcInput} placeholder="Parent, former student, colleague..." /></OrcField>
      </div>

      {apiError && <div className="orc-body" style={{ marginTop: 20, fontSize: 14, color: "#9B2C2C" }}>{apiError}</div>}

      <button type="submit" className="orc-btn orc-btn-orchid" disabled={!canSubmit} style={{ marginTop: 30, opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}>
        {submitting ? "Submitting..." : "Submit Nomination"}
      </button>
      {!canSubmit && !submitting &&
      <div className="orc-body" style={{ marginTop: 14, fontSize: 13.5, color: ORC.ink, opacity: 0.72 }}>
        To submit, please complete: {[
        !nomineeName && "nominee name",
        !institution && "school / institution",
        reason.trim().length < 40 && "a reason of at least 40 characters",
        !nominatorName && "your name",
        !emailOk(nominatorEmail) && "a valid email"].
        filter(Boolean).join(", ")}.
      </div>
      }
    </form>
  );
}

/* ---- Sponsor form ---- */
function OrchidSponsorForm({ onDone }) {
  const [submitting, setSubmitting] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);
  const [sponsorName, setSponsorName] = React.useState("");
  const [contactName, setContactName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [level, setLevel] = React.useState(SPONSOR_TIERS[1].name);
  const [message, setMessage] = React.useState("");

  const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v).trim());
  const canSubmit = sponsorName && contactName && emailOk(email) && level && !submitting;

  const submit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true); setApiError(null);
    try {
      const r = await window.bgaApi("/api/orchid-sponsor", {
        sponsorName, contactName, email, phone, level, message
      });
      if (!r.ok) { setApiError("Please review the highlighted fields."); setSubmitting(false); return; }
      onDone();
    } catch (err) { setApiError("Network error. Please try again."); } finally { setSubmitting(false); }
  };

  return (
    <form onSubmit={submit} style={{ background: ORC.creamHi, color: ORC.ink, border: `1.5px solid ${ORC.lilac}`, borderRadius: 20, padding: "40px 40px 44px" }}>
      <div className="orc-eyebrow" style={{ color: ORC.orchid, fontSize: 11, marginBottom: 18 }}>Sponsorship Details</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <OrcField label="Sponsor / organization"><input className="orc-input" value={sponsorName} onChange={(e) => setSponsorName(e.target.value)} style={orcInput} placeholder="Your company or name" /></OrcField>
          <OrcField label="Contact name"><input className="orc-input" value={contactName} onChange={(e) => setContactName(e.target.value)} style={orcInput} placeholder="Point of contact" /></OrcField>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <OrcField label="Email"><input className="orc-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={orcInput} placeholder="contact@example.com" /></OrcField>
          <OrcField label="Phone (optional)"><input className="orc-input" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={orcInput} placeholder="(303) 555-0123" /></OrcField>
        </div>
        <OrcField label="Sponsorship level">
          <select className="orc-input" value={level} onChange={(e) => setLevel(e.target.value)} style={orcInput}>
            {SPONSOR_TIERS.map((t) => <option key={t.name} value={t.name}>{t.name} ({t.amt})</option>)}
            <option value="Custom">Custom / let's talk</option>
          </select>
        </OrcField>
        <OrcField label="Message (optional)">
          <textarea className="orc-input" rows="4" value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...orcInput, resize: "vertical" }} placeholder="Anything you'd like us to know about your sponsorship." />
        </OrcField>
      </div>

      {apiError && <div className="orc-body" style={{ marginTop: 20, fontSize: 14, color: "#9B2C2C" }}>{apiError}</div>}

      <button type="submit" className="orc-btn orc-btn-orchid" disabled={!canSubmit} style={{ marginTop: 30, opacity: canSubmit ? 1 : 0.5, cursor: canSubmit ? "pointer" : "not-allowed" }}>
        {submitting ? "Submitting..." : "Become a Sponsor"}
      </button>
    </form>
  );
}

window.OrchidsPage = OrchidsPage;
