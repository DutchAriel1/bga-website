/* Navigation + footer used across all pages. */

/* Send any Donate button to the Donorbox widget on the home page. */
function goDonate(onNavigate) {
  onNavigate("home");
  setTimeout(() => {
    const el = document.getElementById("donate-widget");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: "smooth" });
  }, 450);
}

function Logo({ dark = false, onClick }) {
  return (
    <div className="nav-logo" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src="assets/bga-logo.png" alt="The Black Girl Advocate" style={{ height: 64, width: "auto", display: "block" }} />
    </div>);

}

function Nav({ current, onNavigate, dark = false }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState(null);

  // Grouped mobile navigation: dropdown folders + direct links
  const mobileNav = [
    { label: "About", children: [
      { id: "about", label: "About Us" },
      { id: "ourwork", label: "Our Work" },
      { id: "impact", label: "Impact" }] },
    { label: "Programs", children: [
      { id: "programming", label: "All Programs" },
      { id: "igotnext", label: "I Got Next" },
      { id: "eliteeight", label: "The Elite Eight" },
      { id: "ladiesfirst", label: "Ladies First" },
      { id: "hbcuinterest", label: "HBCU Tour" },
      { id: "educationhub", label: "Black Women in Education" }] },
    { id: "shop", label: "Shop" },
    { id: "contact", label: "Contact" }];

  // Lock body scroll while the mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = (id) => { setMenuOpen(false); setOpenGroup(null); onNavigate(id); };

  return (
    <header className={"nav-root" + (dark ? " nav-dark" : "")}>
      <div className="container-wide nav-inner">
        <Logo dark={dark} onClick={() => go("home")} />
        <nav className="nav-links">
          {BGA.pages.slice(1).map((p) =>
          <div
            key={p.id}
            className={"nav-link" + (current === p.id ? " active" : "")}
            onClick={() => onNavigate(p.id)}>
            
              {p.label}
            </div>
          )}
          <button className="btn btn-primary nav-cta" onClick={() => goDonate(onNavigate)}>
            Donate <Icon.Heart size={16} />
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile menu drawer */}
      <div className={"nav-mobile" + (menuOpen ? " open" : "")}>
        <div className="nav-mobile-head container-wide">
          <Logo onClick={() => go("home")} />
          <button className="nav-close" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6 L18 18 M18 6 L6 18" />
            </svg>
          </button>
        </div>
        <nav className="nav-mobile-links">
          {mobileNav.map((item) =>
          item.children ?
          <div key={item.label} className="nav-mobile-group">
            <button
              className={"nav-mobile-grouptoggle" + (openGroup === item.label ? " open" : "")}
              aria-expanded={openGroup === item.label}
              onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}>
              {item.label}
              <svg className="nav-mobile-chev" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {openGroup === item.label &&
            <div className="nav-mobile-sub">
              {item.children.map((c) =>
              <div
                key={c.id}
                className={"nav-mobile-sublink" + (current === c.id ? " active" : "")}
                onClick={() => go(c.id)}>
                {c.label}
              </div>
              )}
            </div>
            }
          </div> :
          <div
            key={item.id}
            className={"nav-mobile-link" + (current === item.id ? " active" : "")}
            onClick={() => go(item.id)}>
            {item.label}
          </div>
          )}
          <button className="btn btn-primary" style={{ marginTop: 18, justifyContent: "center" }} onClick={() => { setMenuOpen(false); goDonate(onNavigate); }}>
            Donate <Icon.Heart size={16} />
          </button>
        </nav>
      </div>
    </header>);

}

function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <img src="assets/bga-logo.png" alt="The Black Girl Advocate" style={{ height: 110, width: "auto", display: "block", borderRadius: 8 }} />
            </div>
            <div className="footer-lede">
              Advocacy, womanist sisterhood, and the village it takes to Seed, Shape, Sharpen, and Soar with every Black girl who walks in.
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
              <SocialBtn><Icon.Instagram /></SocialBtn>
              <SocialBtn><Icon.Linkedin /></SocialBtn>
              <SocialBtn><Icon.Mail /></SocialBtn>
            </div>
            <NewsletterSignup />
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li onClick={() => onNavigate("about")}>About</li>
              <li onClick={() => onNavigate("ourwork")}>Our Work</li>
              <li onClick={() => onNavigate("impact")}>Impact & Transparency</li>
              <li onClick={() => onNavigate("programming")}>Programming</li>
              <li onClick={() => onNavigate("shop")}>Shop</li>
            </ul>
          </div>
          <div>
            <h4>Get Involved</h4>
            <ul>
              <li onClick={() => goDonate(onNavigate)}>Donate</li>
              <li onClick={() => onNavigate("contact")}>Partner with us</li>
              <li onClick={() => onNavigate("contact")}>Volunteer</li>
              <li onClick={() => {
                const el = document.querySelector("footer input[type='email']");
                if (el) { el.focus(); el.scrollIntoView({ block: "center" }); }
              }}>Subscribe to newsletter</li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>{BGA.address}</li>
              <li>{BGA.email}</li>
              <li>{BGA.phone}</li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ display: "flex", alignItems: "center", gap: 18, paddingBottom: 22, marginBottom: 22, borderBottom: "1px solid var(--line)", flexWrap: "wrap" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", opacity: 0.55, fontWeight: 600, marginRight: 8 }}>Funded in part by</div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
              <div style={{ background: "var(--beige)", borderRadius: 10, padding: "8px 12px", height: 44, display: "grid", placeItems: "center" }}>
                <img src="assets/funders/chinook-fund.png" alt="Chinook Fund" style={{ maxHeight: 28, maxWidth: 120, objectFit: "contain", display: "block" }} />
              </div>
              <div style={{ background: "var(--beige)", borderRadius: 10, padding: "8px 12px", height: 44, display: "grid", placeItems: "center" }}>
                <img src="assets/funders/wfco.png" alt="The Women's Foundation of Colorado" style={{ maxHeight: 28, maxWidth: 140, objectFit: "contain", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <div>© 2026 The Black Girl Advocate. A 501(c)(3) nonprofit. EIN 99-0725880. Donations are tax-deductible as allowed by law.</div>
            <div style={{ display: "flex", gap: 16 }}>
              <span onClick={() => onNavigate("privacy")} style={{ cursor: "pointer" }}>Privacy</span>
              <span onClick={() => onNavigate("privacy")} style={{ cursor: "pointer" }}>Terms</span>
              <span onClick={() => onNavigate("privacy")} style={{ cursor: "pointer" }}>Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}

function NewsletterSignup() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const submit = async (e) => {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);
    try {
      const r = await window.bgaApi("/api/newsletter", { email, source: "footer" });
      if (r.ok) setDone(true);
    } finally { setSubmitting(false); }
  };
  return (
    <div style={{ marginTop: 32, maxWidth: 360 }}>
      <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, opacity: 0.7, marginBottom: 10 }}>
        The BGA Newsletter
      </div>
      {done ? (
        <div style={{
          padding: "12px 14px", borderRadius: 12,
          background: "rgba(173,138,86,0.18)",
          border: "1px solid rgba(173,138,86,0.35)",
          fontSize: 13.5, lineHeight: 1.45,
        }}>
          You're subscribed. Look out for our next dispatch.
        </div>
      ) : (
        <form onSubmit={submit} style={{
          display: "grid", gridTemplateColumns: "1fr auto", gap: 6,
          background: "rgba(245,240,230,0.06)",
          border: "1px solid rgba(245,240,230,0.18)",
          borderRadius: 12, padding: 6,
        }}>
          <input
            type="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{
              width: "100%", padding: "10px 12px",
              background: "transparent", border: "none", outline: "none",
              color: "var(--beige)", fontFamily: "inherit", fontSize: 14,
            }}
          />
          <button type="submit" style={{
            padding: "10px 16px", borderRadius: 8,
            background: "var(--bronze-soft)", color: "var(--chocolate-2)",
            border: "none", cursor: "pointer",
            fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.04em",
          }}>Subscribe</button>
        </form>
      )}
      <p style={{ margin: "10px 0 0", fontSize: 11.5, lineHeight: 1.5, opacity: 0.6 }}>
        One short update a month. No spam, no shares.
      </p>
    </div>
  );
}

function SocialBtn({ children }) {
  return (
    <button
      style={{
        width: 42, height: 42, borderRadius: "50%",
        background: "rgba(245,240,230,0.08)",
        border: "1px solid rgba(245,240,230,0.18)",
        color: "var(--beige)",
        cursor: "pointer",
        display: "grid", placeItems: "center",
        transition: "background 0.2s"
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = "rgba(173,138,86,0.2)"}
      onMouseLeave={(e) => e.currentTarget.style.background = "rgba(245,240,230,0.08)"}>
      
      {children}
    </button>);

}

/* Page-top hero used by interior pages. */
function PageHero({ eyebrow, title, kicker, dark = true, accent = "gold" }) {
  const bg = dark ? "var(--chocolate-2)" : "var(--beige-deep)";
  const text = dark ? "var(--beige)" : "var(--ink)";
  return (
    <section style={{ background: bg, color: text, padding: "96px 0 120px", position: "relative", overflow: "hidden" }}>
      {/* Decorative floating circles */}
      <div aria-hidden style={{
        position: "absolute", right: "-10%", top: "-20%", width: 500, height: 500, borderRadius: "50%",
        background: `radial-gradient(circle, ${accent === "gold" ? "rgba(173,138,86,0.18)" : "rgba(156,138,165,0.18)"} 0%, transparent 70%)`
      }} />
      <div aria-hidden style={{
        position: "absolute", left: "-8%", bottom: "-30%", width: 380, height: 380, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(93,83,73,0.35) 0%, transparent 70%)"
      }} />
      <div className="container-wide" style={{ position: "relative" }}>
        <div className="chip chip-on-dark" style={{ marginBottom: 24 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--bronze-soft)" }} />
          {eyebrow}
        </div>
        <h1 className="display d-xl" style={{ margin: 0, maxWidth: 1100 }}>
          {title}
        </h1>
        {kicker &&
        <p style={{ marginTop: 32, fontSize: 20, lineHeight: 1.5, maxWidth: 620, opacity: 0.82, fontWeight: 300 }}>
            {kicker}
          </p>
        }
      </div>
    </section>);

}

window.Nav = Nav;
window.Footer = Footer;
window.PageHero = PageHero;
window.Logo = Logo;
