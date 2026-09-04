/* INTERNAL — Senior Suite Sept/Oct Deadline Tracker. Staff use only, not for public nav.
   Same SS brand system as the public Senior Suite page.
   Scope: only scholarships/awards/programs with a September or October deadline or application window.
   Verify every date against the funder's live page before sharing with a scholar, deadlines shift year to year.
*/
const SS = {
  pink: "#F2ACCE", plum: "#5C1250", butter: "#F7D97D", pool: "#7DCFE0", green: "#A9CC5B",
  cream: "#FFF8EC", ink: "#2B211D", white: "#FFFFFF"
};

function SSStar({ size = 20, color = SS.plum }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M12 1l2.6 7.6L22 11l-7.4 2.4L12 21l-2.6-7.6L2 11l7.4-2.4z" /></svg>;
}

function SSEyebrow({ children, color = SS.plum }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: SS.white, border: `1.5px solid ${color}`, borderRadius: 999, padding: "6px 16px", fontFamily: "'Nunito Sans', sans-serif", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color }}>
      <SSStar size={13} color={color} /> {children}
    </div>);
}

/* College-bound track: highly selective + scholarship deadlines landing in Sept/Oct */
const COLLEGE_BOUND = [
{ name: "QuestBridge National College Match", window: "Opens Aug 1 \u2014 closes Sept 30", amount: "Full 4-year scholarship at 50+ partner colleges", note: "Free application. Best fit: high-achieving, low-income seniors with rigorous coursework.", link: "https://www.questbridge.org/apply-to-college/programs/national-college-match" },
{ name: "Coca-Cola Scholars Program", window: "Opens Aug 1 \u2014 closes Sept 30", amount: "$20,000, merit-based", note: "Min 3.0 GPA. Recognizes leadership and community impact, not financial need.", link: "https://www.coca-colascholarsfoundation.org/apply/" },
{ name: "The Gates Scholarship", window: "Closes mid-September", amount: "Full cost of attendance", note: "Pell-eligible, minority seniors. Verify exact date on their portal each cycle, it shifts.", link: "https://www.thegatesscholarship.org/" },
{ name: "Tom Joyner Foundation Full Ride", window: "Closes in October", amount: "Full tuition, room & board at 50+ partner HBCUs", note: "3.5+ GPA, HBCU-bound seniors.", link: "https://tomjoynerfoundation.org/scholarships/" },
{ name: "Daniels Scholarship Program", window: "Closes in October (senior year)", amount: "Up to $25,000/year, 4 years", note: "CO, NM, UT, or WY residents. Character + leadership + need.", link: "https://www.danielsfund.org/scholarships" },
{ name: "FAFSA & CSS Profile", window: "FAFSA opens October 1", amount: "Unlocks Pell Grant + most institutional aid", note: "Every scholar files this in October, regardless of expected eligibility.", link: "https://studentaid.gov/" },
{ name: "Thrive Scholars (Class of 2028, current juniors)", window: "Fall application window, exact 2026 date TBD on their site", amount: "6-year college access + coaching program", note: "We have alumni in this program. Juniors only. Confirm live deadline at thrivescholars.org/apply before advising a scholar.", link: "https://thrivescholars.org/scholars/how-to-apply/" }];

/* High-net-worth / non-college track: trades, licensing, enterprise pathways */
const HIGH_NET_WORTH = [
{ name: "Rolex Watchmaking Training Center", window: "Rolling admissions, no fixed deadline", amount: "Tuition assistance, varies", note: "Confirmed BGA relationship. WOSTEP-certified watchmaking, a high-earning skilled trade. Encourage scholars to start early since seats are limited.", link: "https://www.rolexwatchmakingtrainingcenter.com/application.html" },
{ name: "Rolex Explorers Club Grant", window: "Closes mid-October", amount: "Historically ~$10,000", note: "For field science/exploration projects, ages 18+. Only a fit for a scholar with an active research project, not a general award.", link: "https://www.explorers.org/grants/rolex-explorers-club-grant/" }];

function DeadlineRow({ item }) {
  return (
    <div style={{ background: SS.white, border: `2px solid ${SS.ink}`, borderRadius: 14, padding: "18px 22px", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 16, alignItems: "start" }}>
      <div>
        <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 17, color: SS.plum }}>{item.name}</div>
        <div style={{ fontSize: 13, color: SS.ink, opacity: 0.75, marginTop: 6, lineHeight: 1.5 }}>{item.note}</div>
        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12.5, fontWeight: 700, marginTop: 8, display: "inline-block" }}>Visit funder site &rarr;</a>
      </div>
      <div>
        <div style={{ fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, color: SS.ink, opacity: 0.5 }}>Window</div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: SS.ink, marginTop: 4 }}>{item.window}</div>
      </div>
      <div>
        <div style={{ fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, color: SS.ink, opacity: 0.5 }}>Amount</div>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: SS.ink, marginTop: 4 }}>{item.amount}</div>
      </div>
    </div>);
}

function ScholarshipsPage({ onNavigate }) {
  return (
    <>
      <style>{`
        .ss-page { font-family: 'Nunito Sans', sans-serif; background: ${SS.cream}; }
        .ss-h1, .ss-h2, .ss-h3 { font-family: 'Fraunces', serif; font-weight: 900; }
        .ss-hand { font-family: 'Caveat', cursive; }
        .ss-page a { color: ${SS.plum}; }
        .ss-page a:hover { color: #7d1670; }
      `}</style>
      <div className="ss-page">
        <section style={{ background: SS.plum, color: SS.cream, padding: "clamp(48px,6vw,72px) 0 clamp(40px,5vw,56px)" }}>
          <div className="container-wide">
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 22 }}>
              <span style={{ background: SS.cream, color: SS.plum, borderRadius: 999, padding: "6px 16px", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Internal \u2014 Senior Suite Team</span>
              <span style={{ background: SS.pink, color: SS.ink, borderRadius: 999, padding: "6px 16px", fontSize: 12.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>Sept \u2013 Oct 2026</span>
            </div>
            <h1 className="ss-h1" style={{ margin: 0, fontSize: "clamp(38px,5vw,60px)", lineHeight: 0.98 }}>Senior Suite Deadline Tracker</h1>
            <p className="ss-hand" style={{ fontSize: 26, color: SS.butter, margin: "12px 0 0" }}>this fall's real, live deadlines only</p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, maxWidth: 640, margin: "18px 0 0", opacity: 0.85 }}>
              Working document for staff advising scholars right now. Not the public directory, this is scoped to the awards, programs, and application windows landing this September and October. Always verify the exact date on the funder's own page before telling a family a deadline.
            </p>
          </div>
        </section>

        <section style={{ padding: "clamp(40px,5vw,56px) 0" }}>
          <div className="container-wide">
            <SSEyebrow>College-Bound Track</SSEyebrow>
            <p style={{ fontSize: 14.5, color: SS.ink, opacity: 0.7, margin: "12px 0 20px", maxWidth: 640 }}>Highly selective programs and scholarships with a Sept/Oct window this cycle.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {COLLEGE_BOUND.map((s) => <DeadlineRow key={s.name} item={s} />)}
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 clamp(48px,6vw,72px)" }}>
          <div className="container-wide">
            <SSEyebrow color={SS.ink}>High-Net-Worth / Non-College Track</SSEyebrow>
            <p style={{ fontSize: 14.5, color: SS.ink, opacity: 0.7, margin: "12px 0 20px", maxWidth: 640 }}>Trades, licensing, and enterprise pathways for scholars not pursuing a traditional 4-year degree.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {HIGH_NET_WORTH.map((s) => <DeadlineRow key={s.name} item={s} />)}
            </div>
          </div>
        </section>
      </div>
    </>);
}

window.ScholarshipsPage = ScholarshipsPage;
