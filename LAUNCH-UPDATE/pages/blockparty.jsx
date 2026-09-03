/* Black Educator Block Party 2027, temporary coming-soon landing page.
   Branding matches the event poster exactly: cream paper, 70s rainbow corner
   stripes (teal red orange gold), chunky retro letters colored per word,
   tilted cassette tape, BROUGHT TO YOU BY strip.
   Earth Wind & Fire energy: sunburst, flowing stripes, spinning reels, and a
   groove player. Instrumental file goes at assets/audio/block-party.mp3,
   the page finds it automatically once uploaded. */

const BP = {
  cream: "#EFE9DC", creamHi: "#F7F3E9",
  green: "#41603F", red: "#D5482A", orange: "#E0752C", gold: "#D9A335",
  teal: "#3E7C6F", ink: "#26231C", black: "#211E18"
};
const bpFont = "'ST-Druzhba', 'Bungee', 'Arial Black', sans-serif";

/* Rainbow corner stripes, outer to inner: teal, red, orange, gold */
function BPArc({ size = 340, flip = false, style = {} }) {
  const cs = [BP.teal, BP.red, BP.orange, BP.gold];
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden style={{ transform: flip ? "rotate(180deg)" : "none", ...style }}>
      {cs.map((c, i) =>
      <path key={i} d={`M ${16 + i * 15} 200 L ${16 + i * 15} ${72 + i * 15} Q ${16 + i * 15} ${16 + i * 15} ${72 + i * 15} ${16 + i * 15} L 200 ${16 + i * 15}`} stroke={c} strokeWidth="11" strokeLinecap="round" />)}
    </svg>);
}

function BPCassette({ width = 300, playing = false, style = {} }) {
  return (
    <svg width={width} height={width * 0.62} viewBox="0 0 300 186" fill="none" aria-hidden style={style}>
      <rect x="4" y="4" width="292" height="178" rx="16" fill={BP.black} />
      <rect x="4" y="4" width="292" height="178" rx="16" stroke="#3A362C" strokeWidth="2" />
      <rect x="26" y="22" width="248" height="86" rx="10" fill={BP.creamHi} />
      <rect x="26" y="22" width="248" height="14" fill={BP.teal} />
      <rect x="26" y="36" width="248" height="12" fill={BP.gold} />
      <rect x="26" y="48" width="248" height="12" fill={BP.orange} />
      <rect x="26" y="60" width="248" height="12" fill={BP.red} />
      <rect x="60" y="66" width="180" height="38" rx="19" fill={BP.black} />
      {[104, 196].map((cx) =>
      <g key={cx} className={playing ? "bp-reel" : ""} style={{ transformOrigin: `${cx}px 85px` }}>
        <circle cx={cx} cy="85" r="15" fill={BP.creamHi} />
        <circle cx={cx} cy="85" r="15" stroke={BP.black} strokeWidth="3" />
        {[0, 60, 120, 180, 240, 300].map((a) =>
        <line key={a} x1={cx} y1="85" x2={cx + 13 * Math.cos(a * Math.PI / 180)} y2={85 + 13 * Math.sin(a * Math.PI / 180)} stroke={BP.black} strokeWidth="3" />)}
      </g>)}
      <path d="M84 152 L96 132 H204 L216 152 Z" fill="#2E2A21" />
      {[120, 150, 180].map((x) => <circle key={x} cx={x} cy="143" r="4" fill="#4A4536" />)}
      <circle cx="42" cy="152" r="6" fill="#4A4536" />
      <circle cx="258" cy="152" r="6" fill="#4A4536" />
    </svg>);
}

function BPBurst({ size = 560, style = {} }) {
  return (
    <svg className="bp-burst" width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden style={style}>
      {Array.from({ length: 24 }, (_, i) => {
        const a = i * 15 * Math.PI / 180;
        return <line key={i} x1={100 + 34 * Math.cos(a)} y1={100 + 34 * Math.sin(a)} x2={100 + 96 * Math.cos(a)} y2={100 + 96 * Math.sin(a)} stroke={BP.gold} strokeWidth={i % 2 ? 1.6 : 3} strokeLinecap="round" />;
      })}
    </svg>);
}

function BlockPartyPage({ onNavigate }) {
  const [playing, setPlaying] = React.useState(false);

  const words = [
    { w: "BLACK", c: BP.red, size: "clamp(58px, 11vw, 130px)", off: "-4%", r: -1.5 },
    { w: "EDUCATOR", c: BP.teal, size: "clamp(34px, 6.4vw, 76px)", off: "8%", r: 0.8 },
    { w: "BLOCK", c: BP.gold, size: "clamp(58px, 11vw, 130px)", off: "-2%", r: -1 },
    { w: "PARTY", c: BP.green, size: "clamp(50px, 9.4vw, 112px)", off: "10%", r: 1.2 }];

  return (
    <div style={{ background: BP.cream, fontFamily: "'Noto Sans', sans-serif", color: BP.ink, overflow: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
        /* Druzhba is a licensed font. Drop the file at assets/fonts/druzhba.otf
           (or .ttf/.woff2, add matching src lines) and it takes over from Bungee. */
        @font-face { font-family: 'ST-Druzhba'; src: url('assets/fonts/druzhba.woff2') format('woff2'), url('assets/fonts/druzhba.otf') format('opentype'), url('assets/fonts/druzhba.ttf') format('truetype'); font-display: swap; }
        .bp-display { font-family: ${bpFont}; font-weight: 400; }
        .bp-burst { animation: bpspin 40s linear infinite; }
        @keyframes bpspin { to { transform: rotate(360deg); } }
        .bp-reel { animation: bpspin 2.4s linear infinite; }
        .bp-cassette { animation: bpfloat 5s ease-in-out infinite; }
        @keyframes bpfloat { 0%,100% { transform: rotate(9deg) translateY(0); } 50% { transform: rotate(7deg) translateY(-10px); } }
        .bp-word { animation: bppop .7s cubic-bezier(.2,1.4,.4,1) both; }
        @keyframes bppop { from { opacity: 0; transform: scale(.85) translateY(18px); } to { opacity: 1; transform: none; } }
        .bp-marquee-track { display: inline-flex; animation: bpslide 22s linear infinite; }
        @keyframes bpslide { to { transform: translateX(-50%); } }
        .bp-eq span { display: inline-block; width: 5px; border-radius: 3px; background: ${BP.creamHi}; animation: bpeq 0.9s ease-in-out infinite; }
        @keyframes bpeq { 0%,100% { height: 8px; } 50% { height: 22px; } }
        .bp-play:hover { transform: scale(1.05); }
        @media (max-width: 760px) {
          .bp-arc-tl { width: 200px !important; height: 200px !important; }
          .bp-arc-br { width: 220px !important; height: 220px !important; }
          .bp-cassette-wrap { position: static !important; margin: 26px auto 0 !important; display: flex; justify-content: center; }
          .bp-logos { gap: 18px !important; }
        }
      `}</style>

      {/* ===== HERO, the poster brought to life ===== */}
      <section style={{ position: "relative", minHeight: "88vh", padding: "48px 20px 70px" }}>
        <BPArc size={340} style={{ position: "absolute", top: -6, left: -8 }} />
        <div className="bp-arc-tl" aria-hidden style={{ position: "absolute", top: -6, left: -8, width: 340, height: 340 }}></div>
        <BPArc size={380} flip style={{ position: "absolute", bottom: -10, right: -10 }} />
        <BPBurst size={520} style={{ position: "absolute", top: "8%", right: "2%", opacity: 0.35 }} />

        <div className="bp-cassette-wrap" style={{ position: "absolute", top: 54, right: "6%", zIndex: 3 }}>
          <div className="bp-cassette"><BPCassette width={280} playing={playing} /></div>
        </div>

        <div style={{ position: "relative", zIndex: 4, maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div className="bp-display" style={{ fontSize: "clamp(26px, 4vw, 44px)", color: BP.green, letterSpacing: "0.12em" }}>FALL 2027</div>

          <div style={{ marginTop: 24 }}>
            {words.map((x, i) =>
            <div key={x.w} className="bp-display bp-word" style={{ fontSize: x.size, color: x.c, lineHeight: 0.98, animationDelay: `${0.15 * i}s`, textShadow: "3px 4px 0 rgba(33,30,24,0.12)" }}>{x.w}</div>)}
          </div>

          <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginTop: 36, background: BP.black, color: BP.creamHi, borderRadius: 999, padding: "14px 28px" }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: BP.gold, boxShadow: `0 0 0 4px rgba(217,163,53,0.3)` }}></span>
            <span className="bp-display" style={{ fontSize: "clamp(18px, 2.6vw, 26px)", letterSpacing: "0.14em" }}>COMING SOON</span>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: BP.red, boxShadow: `0 0 0 4px rgba(213,72,42,0.3)` }}></span>
          </div>

          <p style={{ fontSize: "clamp(17px, 2vw, 21px)", lineHeight: 1.6, maxWidth: 520, margin: "26px auto 0", color: "#4B4638" }}>
            A whole block of joy for Black educators. Music, food, community, and celebration. Details drop soon.
          </p>

          {/* Groove player, Spotify playlist */}
          <div style={{ marginTop: 34, display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
            {!playing ?
            <button
              className="bp-play"
              onClick={() => setPlaying(true)}
              style={{ display: "inline-flex", alignItems: "center", gap: 16, background: BP.red, color: BP.creamHi, border: `3px solid ${BP.black}`, borderRadius: 999, padding: "16px 30px", fontFamily: bpFont, fontSize: 20, letterSpacing: "0.06em", cursor: "pointer", boxShadow: `5px 5px 0 ${BP.black}`, transition: "transform .2s" }}>
              <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden><path d="M2 1.5 L18.5 11 L2 20.5 Z" /></svg>
              PLAY THE GROOVE
            </button> :
            <div style={{ width: "100%", maxWidth: 520 }}>
              <div style={{ border: `3px solid ${BP.black}`, borderRadius: 16, overflow: "hidden", boxShadow: `5px 5px 0 ${BP.black}`, background: BP.black }}>
                <iframe
                  title="Block Party groove playlist"
                  src="https://open.spotify.com/embed/playlist/2dXFQg2OVC1N9YjcrZ1i45?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ display: "block", border: "none" }}></iframe>
              </div>
              <p style={{ fontSize: 14.5, color: "#7A7260", margin: "12px 0 0", lineHeight: 1.5 }}>Press play in the player above. Full tracks need a Spotify login.</p>
            </div>}
          </div>
        </div>
      </section>

      {/* ===== Marquee band ===== */}
      <div style={{ background: BP.green, padding: "14px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div className="bp-marquee-track">
          {[0, 1].map((k) =>
          <span key={k} className="bp-display" style={{ fontSize: 20, color: BP.creamHi, letterSpacing: "0.18em" }}>
            {Array.from({ length: 6 }, (_, i) =>
            <span key={i} style={{ padding: "0 18px" }}>BLACK EDUCATOR BLOCK PARTY <span style={{ color: BP.gold, padding: "0 18px" }}>&#9679;</span> FALL 2027 <span style={{ color: BP.orange, padding: "0 18px" }}>&#9679;</span></span>)}
          </span>)}
        </div>
      </div>

      {/* ===== Brought to you by ===== */}
      <section style={{ padding: "54px 20px 72px", textAlign: "center", position: "relative" }}>
        <div className="bp-display" style={{ fontSize: 22, color: BP.ink, letterSpacing: "0.1em" }}>BROUGHT TO YOU BY:</div>
        <div className="bp-logos" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, marginTop: 28, flexWrap: "wrap" }}>
          <img src="assets/logos/btr.png" alt="Black Teacher Recess" style={{ height: 84, width: "auto", borderRadius: 8 }} />
          <img src="assets/logos/rmabse.png" alt="Rocky Mountain Alliance of Black School Educators" style={{ height: 84, width: "auto", borderRadius: 8 }} />
          <img src="assets/bga-logo.png" alt="The Black Girl Advocate" style={{ height: 74, width: "auto" }} />
        </div>
        <p style={{ fontSize: 15, color: "#7A7260", marginTop: 30 }}>
          Want in early? <span onClick={() => onNavigate("contact")} style={{ color: BP.red, fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Reach out</span> about sponsoring or volunteering
        </p>
      </section>
    </div>);
}
