/* App, simple hash-based router. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headerStyle": "light-cream",
  "headerOpacity": 92,
  "logoSize": 64,
  "navTextDark": true
}/*EDITMODE-END*/;

const HEADER_PRESETS = {
  "light-cream":   { bg: "245, 240, 230", text: "#3d2c29", border: "rgba(61,44,41,0.10)" },
  "warm-ivory":    { bg: "250, 246, 238", text: "#3d2c29", border: "rgba(61,44,41,0.08)" },
  "soft-blush":    { bg: "247, 235, 222", text: "#3d2c29", border: "rgba(173,138,86,0.20)" },
  "bronze-tint":   { bg: "232, 214, 188", text: "#2a1d1b", border: "rgba(61,44,41,0.15)" },
  "pure-white":    { bg: "255, 255, 255", text: "#3d2c29", border: "rgba(61,44,41,0.08)" },
  "dark-chocolate":{ bg: "42, 29, 27",    text: "#f5f0e6", border: "rgba(245,240,230,0.12)" },
};

/* Per-route SEO: title + meta description, updated on navigation so each
   "page" presents distinct metadata even within the single-page app. */
const ROUTE_META = {
  home:        { t: "The Black Girl Advocate | Education, Culture & Advocacy for Black Girls in Colorado", d: "A Colorado 501(c)(3) nonprofit empowering Black girls in grades 6–12. We Seed, Shape, Sharpen, and Soar through education, cultural awareness, and advocacy." },
  about:       { t: "About | The Black Girl Advocate", d: "Built by Black women, for Black girls in Colorado. Meet the womanist team and values behind The Black Girl Advocate." },
  ourwork:     { t: "Our Work: Seed, Shape, Sharpen, Soar | The Black Girl Advocate", d: "Our four movements of becoming, inspired by Octavia Butler, move every Black girl from belonging to flight through education, culture, and advocacy." },
  impact:      { t: "Our Impact & Financial Transparency | The Black Girl Advocate", d: "See the outcomes, where your dollars go, and how to give. The Black Girl Advocate's impact and financial transparency." },
  programming: { t: "Programs | The Black Girl Advocate", d: "Six programs for Black girls grades 6–12: The Elite Eight, I Got Next, Black Girls at the Arts, HBCU Tour, and more." },
  ladiesfirst: { t: "Ladies First: Sponsor & Facilitator Portal | The Black Girl Advocate", d: "The sponsor and facilitator portal for BGA programming, weekly kits, curriculum, how-to videos, and city conference field trips." },
  shop:        { t: "Shop | The Black Girl Advocate", d: "Apparel, books, and gives-back goods designed by and for Black girls. Every dollar funds programming." },
  contact:     { t: "Donate & Contact | The Black Girl Advocate", d: "Donate, partner, volunteer, or enroll a student with The Black Girl Advocate, a Colorado 501(c)(3) nonprofit." },
  scholarships:{ t: "Scholarship Directory | The Black Girl Advocate", d: "Curated scholarships for Black girls and Colorado students, updated as new awards open." },
  tickets:     { t: "Black Girls at the Arts: Request Tickets | The Black Girl Advocate", d: "Request tickets to Black Girls at the Arts nights, theatre, galleries, dance, and museums for our girls and families." },
  donatebooks: { t: "Donate Black Girl Hair Books & Hire BGA | The Black Girl Advocate", d: "Donate books for the Black Girl Hair Project library, or hire BGA for your camp, class, church, or nonprofit." },
  apply:       { t: "Apply: BGA Ambassadors | The Black Girl Advocate", d: "Apply to the four-year Black Girl Advocate Ambassadors cohort for Black girls in grades 9–12." },
  hbcuinterest:{ t: "HBCU Tour Interest | The Black Girl Advocate", d: "Express interest in the BGA HBCU Tour, college pathways for Black girls." },
  igotnext:    { t: "I Got Next: Girls in Sports | The Black Girl Advocate", d: "Athletic advocacy, training, and exposure for Black girls, free to families. Game ready, life ready." },
  igotnextenroll: { t: "Enroll Your Athlete | I Got Next | The Black Girl Advocate", d: "Enroll your athlete in I Got Next, skill-building, advocacy, game days, and college pathways, free for every BGA athlete." },
  orchids:     { t: "The Orchid Award 2027 | The Black Girl Advocate", d: "Nominate a Black woman educator for the 2027 Orchid Award, or sponsor the ceremony celebrating the women who shape our daughters' futures." },
  educationhub:{ t: "Black Women in Education: Resource Hub | The Black Girl Advocate", d: "A resource hub and advocate training for Black women in education." },
  eliteeightapply: { t: "Apply | The Elite Eight Ivy League Tour | The Black Girl Advocate", d: "Apply to The Elite Eight, a curated Ivy League college tour for Black girls in grades 9–11. Upload your transcript and counselor details to begin." },
  eliteeight:  { t: "The Elite Eight: Ivy League Tour | The Black Girl Advocate", d: "A curated Ivy League college tour for Black girls in grades 9–11. Campuses, admissions, alumnae, and sisterhood." },
  privacy:     { t: "Privacy Policy | The Black Girl Advocate", d: "How The Black Girl Advocate collects, uses, and protects your information, including media releases and youth data." },
  comingsoon:  { t: "Upcoming Events | The Black Girl Advocate", d: "Upcoming events and programming from The Black Girl Advocate." },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply header tweaks live via injected style tag
  React.useEffect(() => {
    const preset = HEADER_PRESETS[t.headerStyle] || HEADER_PRESETS["light-cream"];
    const alpha = (t.headerOpacity / 100).toFixed(2);
    const css = `
      .nav-root, .nav-root.nav-dark {
        background: rgba(${preset.bg}, ${alpha}) !important;
        color: ${preset.text} !important;
        border-bottom: 1px solid ${preset.border} !important;
      }
      .nav-root .nav-link, .nav-root.nav-dark .nav-link { color: ${preset.text} !important; }
      .nav-root .nav-link.active, .nav-root.nav-dark .nav-link.active {
        background: ${t.headerStyle === "dark-chocolate" ? "rgba(245,240,230,0.12)" : "rgba(61,44,41,0.08)"} !important;
      }
      .nav-logo img { height: ${t.logoSize}px !important; }
    `;
    let el = document.getElementById("__bga_header_tweaks");
    if (!el) {
      el = document.createElement("style");
      el.id = "__bga_header_tweaks";
      document.head.appendChild(el);
    }
    el.textContent = css;
  }, [t.headerStyle, t.headerOpacity, t.logoSize]);

  const ROUTES = ["home", "about", "ourwork", "impact", "programming", "shop", "contact", "scholarships", "tickets", "donatebooks", "apply", "hbcuinterest", "comingsoon", "igotnext", "igotnextenroll", "orchids", "educationhub", "eliteeight", "eliteeightapply", "ladiesfirst", "privacy"];
  const initial = () => {
    const hash = window.location.hash.replace("#/", "").split("?")[0];
    return ROUTES.includes(hash) ? hash : "home";
  };
  const [page, setPage] = React.useState(initial);
  const [intent, setIntent] = React.useState(null);

  const navigate = (id) => {
    const [route, query] = String(id).split("?");
    let nextIntent = null;
    if (query) {
      const params = new URLSearchParams(query);
      nextIntent = params.get("intent");
    }
    setIntent(nextIntent);
    setPage(route);
    window.location.hash = "#/" + id;
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  React.useEffect(() => {
    const onHash = () => setPage(initial());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Per-route SEO: update document title + meta description + canonical on navigation.
  React.useEffect(() => {
    const meta = ROUTE_META[page] || ROUTE_META.home;
    document.title = meta.t;
    const setMeta = (selector, attr, val) => {
      let el = document.head.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', "content", meta.d);
    setMeta('meta[property="og:title"]', "content", meta.t);
    setMeta('meta[property="og:description"]', "content", meta.d);
    setMeta('meta[name="twitter:title"]', "content", meta.t);
    setMeta('meta[name="twitter:description"]', "content", meta.d);
    const canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", "https://theblackgirladvocate.org/#/" + (page === "home" ? "" : page));
    const ogUrl = document.head.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", "https://theblackgirladvocate.org/#/" + (page === "home" ? "" : page));
  }, [page]);

  const pageMap = {
    home: HomePage,
    about: AboutPage,
    ourwork: OurWorkPage,
    programming: ProgrammingPage,
    shop: ShopPage,
    contact: ContactPage,
    scholarships: ScholarshipsPage,
    tickets: TicketsPage,
    donatebooks: DonateBooksPage,
    apply: ApplyPage,
    hbcuinterest: HBCUInterestPage,
    comingsoon: ComingSoonPage,
    igotnext: IGotNextPage,
    igotnextenroll: IGotNextEnrollPage,
    orchids: OrchidsPage,
    educationhub: EducationHubPage,
    eliteeight: EliteEightPage,
    eliteeightapply: EliteEightApplyPage,
    ladiesfirst: LadiesFirstPage,
    impact: ImpactPage,
    privacy: PrivacyPage,
  };
  const PageComp = pageMap[page] || HomePage;

  const darkNav = page === "home";

  return (
    <div data-screen-label={`BGA, ${page}`}>
      <Nav current={page} onNavigate={navigate} dark={darkNav} />
      <main key={page}>
        <PageComp onNavigate={navigate} initialIntent={intent} />
      </main>
      <Footer onNavigate={navigate} />
      <TweaksPanel title="Header Tweaks">
        <TweakSection label="Header style" />
        <TweakSelect
          label="Background"
          value={t.headerStyle}
          options={[
            { value: "light-cream",    label: "Light cream (default)" },
            { value: "warm-ivory",     label: "Warm ivory" },
            { value: "soft-blush",     label: "Soft blush" },
            { value: "bronze-tint",    label: "Bronze tint" },
            { value: "pure-white",     label: "Pure white" },
            { value: "dark-chocolate", label: "Dark chocolate" },
          ]}
          onChange={(v) => setTweak("headerStyle", v)}
        />
        <TweakSlider
          label="Background opacity"
          value={t.headerOpacity}
          min={40} max={100} step={1} unit="%"
          onChange={(v) => setTweak("headerOpacity", v)}
        />
        <TweakSection label="Logo" />
        <TweakSlider
          label="Logo height"
          value={t.logoSize}
          min={40} max={96} step={1} unit="px"
          onChange={(v) => setTweak("logoSize", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
