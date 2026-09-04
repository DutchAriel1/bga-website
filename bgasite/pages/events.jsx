/* Events, the BGA calendar of programming plus event RSVP with youth data tracking.
   Brand: core BGA system (beige, chocolate, bronze, lavender) with Noto Serif display.
   RSVPs route to /api/event-rsvp (Airtable + notification to ariel@theblackgirladvocate.org).

   TO ADD AN EVENT: append to BGA_EVENTS below. `flyer` is optional. Set `rsvp: true`
   to surface the RSVP form for that event. Dates are [year, monthIndex, day]. */

const BGA_EVENTS = [
{
  id: "rolex-watchmaking-info",
  title: "Rolex University Information Session: Watchmaking",
  program: "Senior Suite",
  date: [2026, 8, 19],
  time: "10:00 AM",
  location: "Virtual info session",
  city: "Online",
  audience: "Seniors exploring college alternatives",
  rsvp: false,
  registerUrl: "https://forms.gle/jBUGHPvC88JKddnX7",
  registerLabel: "RSVP for the info session",
  flyer: "assets/events/site-flyers/rolex-watchmaking-info-session.jpg",
  blurb: "Looking for a college alternative? Learn about the Rolex Watchmaking Training pathway, a high-earning precision trade, straight from the source. Hosted by Senior Suite.",
  details: [
  "September 19 at 10:00 AM.",
  "Open to seniors and families exploring paths beyond a traditional four-year degree.",
  "RSVP through the sign-up link to receive session details."]

},
{
  id: "senior-suite-common-app",
  title: "Senior Suite: Common App Essay Writing",
  program: "Elite Eight",
  date: [2026, 8, 26],
  time: "10:00 AM",
  endTime: "2:00 PM",
  location: "Location to be announced",
  city: "Colorado",
  audience: "Class of 2027 seniors",
  rsvp: true,
  flyer: "assets/events/site-flyers/senior-suite-common-app.jpg",
  blurb: "A working session for our senior scholars to draft and workshop their Common App essay, with support on hand the whole time.",
  details: [
  "Open to Class of 2027 seniors.",
  "Bring a laptop or device to write on if you have one.",
  "Location to be announced, check back or RSVP for updates."]

},
{
  id: "sports-bra-giveaway",
  title: "Sports Bra Give Away",
  program: "I Got Next",
  date: [2026, 8, 12],
  time: "12:00 PM",
  endTime: "3:00 PM",
  location: "821 22nd St",
  city: "Denver, CO 80205",
  audience: "All BGA girls",
  rsvp: false,
  flyer: "assets/events/site-flyers/sports-bra-giveaway.jpg",
  blurb: "Play Bold. Lead Loud. A free sports bra give away for our girls, gear up in sizes XXS to 6X while supplies last, so every athlete has a bra that fits her.",
  details: ["Sizes XXS through 6X available, while supplies last.", "To donate sports bras ahead of the event, contact heyy'all@theblackgirladvocate.org."]
},
{
  id: "perimenopause-party",
  title: "The Pause: Black Girl (Peri)Menopause Party",
  program: "Black Women in Education",
  date: [2026, 9, 16],
  time: "7:00 PM",
  location: "12444 Albrook Dr Ste 170",
  city: "Denver, CO 80239",
  audience: "",
  rsvp: false,
  ticketUrl: "https://www.zeffy.com/en-US/ticketing/the-pause-a-black-girl-perimenopause-party",
  ticketNote: "Only 30 seats",
  ticketPrice: "$35",
  flyer: "assets/events/site-flyers/the-pause-menopause-party.jpg",
  blurb: "A night made for the change: real talk with women who get it, guidance you can actually use on symptoms, hormones, and care, plus food, music, and sisterhood that makes the transition feel less lonely. Your $35 ticket funds the evening and the community it builds. Sponsored by The Colorado Health Foundation.",
  details: ["Save the date, full location details are coming soon."]
},
{
  id: "hbcu-tour-south-carolina",
  title: "HBCU Tour: The Junior Preview Tour",
  program: "HBCU Tour",
  date: [2026, 9, 21],
  endDate: [2026, 9, 24],
  time: "Multi-day tour",
  location: "South Carolina",
  city: "Multi-city HBCU tour",
  audience: "11th grade juniors",
  rsvp: false,
  learnMoreRoute: "hbcuinterest",
  flyer: "assets/events/site-flyers/hbcu-tour-south-carolina.jpg",
  blurb: "College exposure, culture, and possibility across South Carolina, featuring Gullah Geechee culture integration. Rooted in culture, focused on the future, for our junior cohort.",
  details: ["Open to current juniors (11th grade) meeting the tour's GPA and residency criteria.", "Scan the QR code on the flyer or visit the HBCU Tour page to sign up."]
}];


const EV = {
  beige: "#F5F0E6",
  beigeDeep: "#ECE3D2",
  beigeWarm: "#E4D8C2",
  chocolate: "#3D2C29",
  chocolate2: "#2A1D1B",
  taupe: "#5D5349",
  lavender: "#9C8AA5",
  lavenderSoft: "#C7BBCD",
  bronze: "#AD8A56",
  bronzeSoft: "#C8A874",
  tan: "#A88A5E"
};

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DOW = ["S", "M", "T", "W", "T", "F", "S"];

const CO_COUNTIES = ["Adams", "Arapahoe", "Boulder", "Broomfield", "Denver", "Douglas", "El Paso", "Jefferson", "Larimer", "Mesa", "Pueblo", "Weld", "Other Colorado county", "Outside Colorado"];

/* ---------------- small pieces ---------------- */

function EvEyebrow({ children, color = EV.bronze }) {
  return <div className="eyebrow" style={{ color, letterSpacing: "0.22em" }}>{children}</div>;
}

const evField = {
  width: "100%", padding: "13px 15px",
  background: "#FFFFFF", color: EV.chocolate,
  border: `1px solid ${EV.beigeWarm}`, borderRadius: 10,
  fontFamily: "'Noto Sans', system-ui, sans-serif", fontSize: 15,
  outline: "none"
};

function EvField({ label, hint, required, children }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", fontWeight: 700, color: EV.taupe, marginBottom: 7 }}>
        {label}{required && <span style={{ color: EV.bronze }}> *</span>}
      </div>
      {children}
      {hint && <div style={{ fontSize: 12, color: EV.taupe, opacity: 0.75, marginTop: 6, lineHeight: 1.45 }}>{hint}</div>}
    </label>
  );
}

function EvCheck({ checked, onChange, children }) {
  return (
    <label style={{ display: "flex", gap: 11, alignItems: "flex-start", cursor: "pointer", fontSize: 14.5, lineHeight: 1.5, color: EV.chocolate }}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} style={{ width: 18, height: 18, marginTop: 2, accentColor: EV.bronze, flexShrink: 0 }} />
      <span>{children}</span>
    </label>
  );
}

function EvRadio({ name, value, current, onChange, children }) {
  return (
    <label style={{ display: "flex", gap: 11, alignItems: "flex-start", cursor: "pointer", fontSize: 14.5, lineHeight: 1.5, color: EV.chocolate }}>
      <input type="radio" name={name} checked={current === value} onChange={() => onChange(value)} style={{ width: 18, height: 18, marginTop: 2, accentColor: EV.bronze, flexShrink: 0 }} />
      <span>{children}</span>
    </label>
  );
}

/* 1 to 5 agreement scale, the pre-survey baseline control */
function EvScale({ label, value, onChange }) {
  return (
    <div style={{ borderTop: `1px solid ${EV.beigeWarm}`, paddingTop: 16 }}>
      <div style={{ fontSize: 14.5, lineHeight: 1.5, color: EV.chocolate, fontWeight: 500, marginBottom: 11 }}>{label}</div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        {[1, 2, 3, 4, 5].map((n) =>
        <button
          key={n} type="button" onClick={() => onChange(n)}
          aria-label={`${n} of 5`}
          style={{
            width: 44, height: 44, borderRadius: 10, cursor: "pointer",
            border: value === n ? `1.5px solid ${EV.bronze}` : `1px solid ${EV.beigeWarm}`,
            background: value === n ? EV.bronze : "#FFFFFF",
            color: value === n ? "#FFFFFF" : EV.taupe,
            fontSize: 15, fontWeight: 700, fontFamily: "inherit"
          }}>{n}</button>)}
        <span style={{ fontSize: 12, color: EV.taupe, opacity: 0.7, marginLeft: 6 }}>1 = not at all, 5 = completely</span>
      </div>
    </div>);

}

/* Multi-select chips for clean categorical data */
function EvChips({ options, selected, onToggle }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
      {options.map((o) => {
        const on = selected.includes(o);
        return (
          <button
            key={o} type="button" onClick={() => onToggle(o)}
            style={{
              borderRadius: 999, padding: "9px 16px", cursor: "pointer", fontFamily: "inherit",
              fontSize: 13.5, fontWeight: 600, lineHeight: 1,
              border: on ? `1.5px solid ${EV.bronze}` : `1px solid ${EV.beigeWarm}`,
              background: on ? EV.bronze : "#FFFFFF", color: on ? "#FFFFFF" : EV.taupe
            }}>{o}</button>);

      })}
    </div>);

}

/* ---------------- month calendar ---------------- */

function EvMonth({ year, month, events, onPick }) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const byDay = {};
  const push = (d, e) => { (byDay[d] = byDay[d] || []).push(e); };
  events.forEach((e) => {
    if (!e.recurs) return;
    for (let d = 1; d <= days; d++) {
      if (new Date(year, month, d).getDay() === e.recurs.day) push(d, e);
    }
  });
  events.forEach((e) => {
    if (e.recurs || e.dateTBD) return;
    if (e.endDate && e.date[0] === year && e.date[1] === month) {
      const endD = e.endDate[1] === month ? e.endDate[2] : days;
      for (let d = e.date[2]; d <= endD; d++) push(d, e);
      return;
    }
    if (e.date[0] === year && e.date[1] === month) push(e.date[2], e);
  });
  const total = Object.values(byDay).reduce((n, list) => n + list.length, 0);
  const cells = [];
  for (let i = 0; i < first; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div style={{ background: "#FFFFFF", border: `1px solid ${EV.beigeWarm}`, borderRadius: 18, padding: "22px 22px 18px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 16 }}>
        <h3 className="serif" style={{ margin: 0, fontSize: 26, fontWeight: 600, color: EV.chocolate }}>{MONTHS[month]} {year}</h3>
        <span style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, color: EV.bronze }}>
          {total} {total === 1 ? "event" : "events"}
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, marginBottom: 6 }}>
        {DOW.map((d, i) => <div key={i} style={{ textAlign: "center", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: EV.taupe, opacity: 0.6, paddingBottom: 4 }}>{d}</div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }}>
        {cells.map((d, i) => {
          const list = d ? byDay[d] : null;
          if (!d) return <div key={i} style={{ aspectRatio: "1", borderRadius: 9 }} />;
          const has = !!(list && list.length);
          return (
            <button
              key={i}
              onClick={() => has && onPick(list[0].id)}
              disabled={!has}
              title={has ? list.map((e) => `${e.title} (${e.time})`).join(" + ") : undefined}
              style={{
                aspectRatio: "1", borderRadius: 9, border: has ? `1.5px solid ${EV.bronze}` : `1px solid ${EV.beige}`,
                background: has ? EV.bronze : EV.beige, color: has ? "#FFFFFF" : EV.taupe,
                display: "grid", placeItems: "center", padding: 0,
                fontSize: 14, fontWeight: has ? 700 : 500,
                cursor: has ? "pointer" : "default", position: "relative",
                boxShadow: has ? `0 4px 12px rgba(173,138,86,0.32)` : "none"
              }}>
              {d}
              {has &&
              <span style={{ position: "absolute", bottom: 5, display: "flex", gap: 3 }}>
                  {list.map((e, k) => <span key={k} style={{ width: 5, height: 5, borderRadius: "50%", background: e.soldOut ? EV.lavender : EV.lavenderSoft }} />)}
                </span>}
            </button>);

        })}
      </div>
    </div>);

}

/* ---------------- phone agenda, replaces the month grid under 900px ----------------
   A 7 column grid puts 46px cells on a phone, which is unreadable and untappable.
   Same data, stacked as a date list you can actually read and tap. */

function EvAgenda({ year, month, events, onPick }) {
  const days = new Date(year, month + 1, 0).getDate();
  const dow = (d) => new Date(year, month, d).toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const rows = [];
  events.forEach((e) => {
    if (!e.recurs) return;
    const dates = [];
    for (let d = 1; d <= days; d++) if (new Date(year, month, d).getDay() === e.recurs.day) dates.push(d);
    if (dates.length) rows.push({ ev: e, repeat: true, dates, sort: dates[0] });
  });
  events.forEach((e) => {
    if (e.recurs || e.dateTBD) return;
    if (e.endDate && e.date[0] === year && e.date[1] === month) {
      const endD = e.endDate[1] === month ? e.endDate[2] : days;
      const dates = [];
      for (let d = e.date[2]; d <= endD; d++) dates.push(d);
      rows.push({ ev: e, repeat: false, dates, sort: e.date[2], range: true });
      return;
    }
    if (e.date[0] === year && e.date[1] === month) rows.push({ ev: e, repeat: false, dates: [e.date[2]], sort: e.date[2] });
  });
  rows.sort((a, b) => a.sort - b.sort);
  const count = rows.reduce((n, r) => n + r.dates.length, 0);
  const mon = MONTHS[month].slice(0, 3).toUpperCase();

  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 12, paddingBottom: 12, borderBottom: `1px solid ${EV.beigeWarm}`, marginBottom: 14 }}>
        <h3 className="serif" style={{ margin: 0, fontSize: 24, fontWeight: 600, color: EV.chocolate }}>{MONTHS[month]} {year}</h3>
        <span style={{ fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, color: EV.bronze, whiteSpace: "nowrap" }}>
          {count} {count === 1 ? "date" : "dates"}
        </span>
      </div>
      {!rows.length &&
      <p style={{ margin: 0, fontSize: 16, color: EV.taupe, lineHeight: 1.6 }}>Nothing on the calendar this month yet.</p>}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rows.map((r, i) => {
          const e = r.ev;
          const when = r.repeat ?
          `${e.recurs.label}, ${e.time}${e.endTime ? ` to ${e.endTime}` : ""}` :
          r.range ?
          `${mon.charAt(0)}${mon.slice(1).toLowerCase()} ${r.dates[0]}\u2013${r.dates[r.dates.length - 1]}` :
          `${dow(r.dates[0]).charAt(0)}${dow(r.dates[0]).slice(1).toLowerCase()} ${mon.charAt(0)}${mon.slice(1).toLowerCase()} ${r.dates[0]}, ${e.time}${e.endTime ? ` to ${e.endTime}` : ""}`;
          return (
            <button
              key={i}
              onClick={() => onPick(e.id)}
              style={{
                width: "100%", display: "flex", alignItems: "stretch", textAlign: "left",
                background: "#FFFFFF", border: `1px solid ${EV.beigeWarm}`, borderRadius: 16,
                padding: 0, overflow: "hidden", cursor: "pointer", fontFamily: "inherit",
                color: EV.chocolate, minHeight: 96
              }}>
              <div style={{
                flex: "0 0 78px", background: e.soldOut ? EV.taupe : EV.bronze, color: "#FFFFFF",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 1, padding: "12px 6px"
              }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", opacity: 0.85 }}>{r.repeat ? "EVERY" : r.range ? "DATES" : dow(r.dates[0])}</span>
                <span className="serif" style={{ fontSize: r.repeat || r.range ? 24 : 32, fontWeight: 600, lineHeight: 1.05 }}>
                  {r.repeat ? dow(r.dates[0]).charAt(0) + dow(r.dates[0]).slice(1).toLowerCase() : r.range ? `${r.dates[0]}\u2013${r.dates[r.dates.length - 1]}` : r.dates[0]}
                </span>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", opacity: 0.85 }}>{r.repeat ? `${r.dates.length} in ${mon}` : mon}</span>
              </div>
              <div style={{ flex: 1, minWidth: 0, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 5 }}>
                <div className="serif" style={{ fontSize: 19, fontWeight: 600, lineHeight: 1.2 }}>{e.title}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: EV.taupe }}>{when}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5, color: EV.taupe }}>{e.location}, {e.city}</div>
                {e.flyer &&
                <img
                  src={e.flyer}
                  alt={`${e.title} flyer`}
                  loading="lazy"
                  style={{ width: "100%", height: "auto", display: "block", borderRadius: 10, marginTop: 8, border: `1px solid ${EV.beigeWarm}` }} />}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", marginTop: 3 }}>
                  {e.soldOut &&
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: EV.beigeWarm, color: EV.taupe, padding: "5px 10px", borderRadius: 99 }}>Full</span>}
                  {!e.soldOut && e.rsvp &&
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(173,138,86,0.16)", color: EV.bronze, padding: "5px 10px", borderRadius: 99 }}>RSVP</span>}
                  {!e.soldOut && !e.rsvp && e.registerUrl &&
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(156,138,165,0.2)", color: "#6F5E7A", padding: "5px 10px", borderRadius: 99 }}>Sign up</span>}
                  <span style={{ fontSize: 14, fontWeight: 600, color: EV.bronze, marginLeft: "auto" }}>Details &rarr;</span>
                </div>
              </div>
            </button>);

        })}
      </div>
    </div>);

}

/* ---------------- event card ---------------- */

function EvCard({ ev, isOpen, onToggleRsvp, onBra, onNavigate }) {
  const d = new Date(ev.date[0], ev.date[1], ev.date[2]);
  const dEnd = ev.endDate ? new Date(ev.endDate[0], ev.endDate[1], ev.endDate[2]) : null;
  return (
    <article id={`ev-${ev.id}`} style={{ background: "#FFFFFF", border: `1px solid ${EV.beigeWarm}`, borderRadius: 20, overflow: "hidden", display: "grid", gridTemplateColumns: ev.flyer ? "300px 1fr" : "1fr" }} className="ev-card">
      {ev.flyer &&
      <div style={{ background: EV.tan, display: "grid", placeItems: "center", padding: 18, cursor: ev.rsvp ? "pointer" : "default" }} onClick={ev.rsvp ? onToggleRsvp : undefined}>
          <img src={ev.flyer} alt={`${ev.title} flyer`} style={{ width: "100%", height: "auto", display: "block", borderRadius: 10, boxShadow: "0 10px 28px rgba(42,29,27,0.22)" }} />
        </div>}

      <div style={{ padding: "30px 32px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
          <span style={{ background: EV.chocolate, color: EV.beige, borderRadius: 999, padding: "6px 13px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{ev.program}</span>
          {ev.audience && <span style={{ background: EV.lavenderSoft, color: EV.chocolate, borderRadius: 999, padding: "6px 13px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>{ev.audience}</span>}
          {(ev.rsvp || ev.registerUrl) && <span style={{ border: `1.5px solid ${EV.bronze}`, color: EV.bronze, borderRadius: 999, padding: "5px 12px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Registration required</span>}
          {ev.recurs && <span style={{ background: EV.bronzeSoft, color: EV.chocolate2, borderRadius: 999, padding: "6px 13px", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}>Weekly</span>}
          {ev.soldOut && <span style={{ background: EV.lavender, color: "#FFFFFF", borderRadius: 999, padding: "6px 14px", fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase" }}>Sold out</span>}
        </div>

        <h3 className="serif" style={{ margin: 0, fontSize: "clamp(28px, 3vw, 38px)", fontWeight: 600, lineHeight: 1.1, color: EV.chocolate }}>{ev.title}</h3>

        {ev.taughtBy &&
        <div style={{ marginTop: 10, fontSize: 15, fontStyle: "italic", color: EV.lavender, fontWeight: 500 }}>{ev.taughtBy}</div>}

        <div style={{ display: "flex", gap: 26, flexWrap: "wrap", margin: "18px 0 0" }}>
          {[
          ev.recurs
          ? { l: "When", v: `${ev.recurs.label}, ${ev.time} to ${ev.endTime}` }
          : ev.dateTBD
          ? { l: "Date", v: "To be announced" }
          : dEnd
          ? { l: "Dates", v: `${d.toLocaleDateString("en-US", { month: "long", day: "numeric" })} \u2013 ${dEnd.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}` }
          : { l: "Date", v: d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) },
          ...(ev.recurs || dEnd ? [] : [{ l: "Time", v: ev.endTime ? `${ev.time} to ${ev.endTime}` : ev.time }]),
          { l: "Where", v: `${ev.location}, ${ev.city}` }].
          map((row) =>
          <div key={row.l}>
              <div style={{ fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 700, color: EV.bronze, marginBottom: 3 }}>{row.l}</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: EV.chocolate }}>{row.v}</div>
            </div>)}
        </div>

        <p style={{ margin: "20px 0 0", fontSize: 15.5, lineHeight: 1.65, color: EV.taupe, maxWidth: 620, textWrap: "pretty" }}>{ev.blurb}</p>

        {ev.details &&
        <ul style={{ listStyle: "none", padding: 0, margin: "20px 0 0", display: "flex", flexDirection: "column", gap: 10 }}>
            {ev.details.map((s, i) =>
          <li key={i} style={{ display: "flex", gap: 11, alignItems: "flex-start", fontSize: 14.5, lineHeight: 1.55, color: EV.chocolate }}>
                <span style={{ width: 20, height: 20, borderRadius: "50%", background: EV.beigeDeep, color: EV.bronze, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                  <Icon.Check size={11} />
                </span>
                {s}
              </li>)}
          </ul>}

        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginTop: 26 }}>
          {ev.soldOut &&
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(156,138,165,0.14)", border: `1px solid ${EV.lavender}`, borderRadius: 12, padding: "13px 18px" }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.16em", textTransform: "uppercase", color: EV.lavender }}>Sold out</span>
              <span style={{ fontSize: 14, color: EV.taupe }}>Email us at <a href="mailto:president@theblackgirladvocate.org" style={{ color: EV.bronze, textDecoration: "underline" }}>president@theblackgirladvocate.org</a> to get on the early list for the next one.</span>
            </div>}
          {ev.registerUrl &&
          <a className="btn btn-primary" href={ev.registerUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {ev.registerLabel || "Register for Sunday class"} <Icon.Arrow size={16} />
            </a>}
          {ev.rsvp &&
          <button className="btn btn-primary" onClick={onToggleRsvp}>
              {isOpen ? "Hide sign up form" : ev.recurs ? "RSVP for Sunday class" : "RSVP for this event"} <Icon.Arrow size={16} />
            </button>}
          {ev.bra &&
          <button className="btn btn-outline-dark" onClick={onBra}>
              <Icon.Heart size={16} /> Donate a bra here
            </button>}
          {ev.ticketUrl &&
          <a className="btn btn-primary" href={ev.ticketUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              Purchase Tickets · {ev.ticketPrice} <Icon.Arrow size={16} />
            </a>}
          {ev.ticketNote &&
          <span style={{ alignSelf: "center", fontSize: 13, fontWeight: 700, color: EV.bronze, letterSpacing: "0.04em" }}>{ev.ticketNote}</span>}
          {ev.learnMoreRoute &&
          <button className="btn btn-primary" onClick={() => onNavigate && onNavigate(ev.learnMoreRoute)}>
              Learn more <Icon.Arrow size={16} />
            </button>}
        </div>

        {ev.rsvp && isOpen &&
        <div style={{ marginTop: 28, paddingTop: 26, borderTop: `1px solid ${EV.beigeWarm}` }}>
            <EvRsvpForm ev={ev} events={[ev]} onPickEvent={() => {}} />
          </div>}
      </div>
    </article>);

}

/* ---------------- RSVP form ---------------- */

function EvRsvpForm({ ev, events = [], onPickEvent }) {
  const [f, setF] = React.useState({
    studentFirst: "", studentLast: "", grade: "9th", school: "", studentEmail: "", studentPhone: "", dob: "",
    parentName: "", parentRelationship: "Mother", parentEmail: "", parentPhone: "", preferredContact: "Text",
    emergencyName: "", emergencyPhone: "",
    zip: "", race: [], firstProgram: "Yes",
    bBelong: 0, bCollege: 0, bStress: 0, bActive: 0, bLead: 0, baselineSkip: false,
    media: false, dataUse: false, pickup: false
  });
  const set = (k) => (v) => setF((p) => ({ ...p, [k]: v }));
  const toggle = (k, v) => setF((p) => ({ ...p, [k]: p[k].includes(v) ? p[k].filter((x) => x !== v) : [...p[k], v] }));

  const [submitting, setSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!f.dataUse || !f.pickup) { setApiError("Please confirm the two required acknowledgements at the bottom."); return; }
    setSubmitting(true); setApiError(null);
    try {
      const r = await window.bgaApi("/api/event-rsvp", { ...f, eventId: ev.id, eventTitle: ev.title, eventDate: ev.recurs ? `${ev.recurs.label}, ${ev.time} to ${ev.endTime}` : new Date(ev.date[0], ev.date[1], ev.date[2]).toDateString() });
      if (!r.ok) { setApiError("Please check your entries and try again."); setSubmitting(false); return; }
      setSubmitted(true);
      window.scrollTo({ top: document.getElementById(`ev-rsvp-${ev.id}`).offsetTop - 90, behavior: "smooth" });
    } catch (err) {
      setApiError("Network error. Please try again, or email ariel@theblackgirladvocate.org.");
    } finally { setSubmitting(false); }
  };

  const sectionHead = (n, t, sub) =>
  <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: EV.chocolate, color: EV.beige, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{n}</span>
        <h3 className="serif" style={{ margin: 0, fontSize: 25, fontWeight: 600, color: EV.chocolate }}>{t}</h3>
      </div>
      {sub && <p style={{ margin: "9px 0 0 42px", fontSize: 14, lineHeight: 1.6, color: EV.taupe, maxWidth: 620 }}>{sub}</p>}
    </div>;

  const card = { background: EV.beige, border: `1px solid ${EV.beigeWarm}`, borderRadius: 18, padding: "28px 30px 30px" };

  if (submitted) {
    return (
      <div id={`ev-rsvp-${ev.id}`} style={{ ...card, textAlign: "center", padding: "56px 32px" }}>
        <div style={{ width: 62, height: 62, borderRadius: "50%", background: EV.bronze, color: "#FFFFFF", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
          <Icon.Check size={28} />
        </div>
        <h2 className="serif" style={{ margin: 0, fontSize: "clamp(30px, 3.6vw, 42px)", fontWeight: 600, color: EV.chocolate }}>She's on the list.</h2>
        <p style={{ margin: "14px auto 0", maxWidth: 520, fontSize: 16, lineHeight: 1.7, color: EV.taupe }}>
          {f.studentFirst || "Your student"} is registered for {ev.title}. We sent a confirmation to <strong style={{ color: EV.chocolate }}>{f.parentEmail}</strong> with the address, arrival window, and our facilitator's phone number. Watch for a reminder two days before.
        </p>
        <button className="btn btn-outline-dark" style={{ marginTop: 28 }} onClick={() => { setSubmitted(false); setF((p) => ({ ...p, studentFirst: "", studentLast: "", studentEmail: "", dob: "" })); }}>
          Register another student
        </button>
      </div>);

  }

  return (
    <form id={`ev-rsvp-${ev.id}`} onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {events.length > 1 &&
      <div style={{ ...card, background: EV.chocolate, borderColor: "rgba(245,240,230,0.14)" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.13em", textTransform: "uppercase", fontWeight: 700, color: EV.bronzeSoft, marginBottom: 10 }}>Which event are you registering for?</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {events.map((o) => {
            const on = o.id === ev.id;
            return (
              <button
                key={o.id} type="button" onClick={() => onPickEvent && onPickEvent(o.id)}
                style={{
                  borderRadius: 12, padding: "13px 18px", cursor: "pointer", fontFamily: "inherit", textAlign: "left",
                  border: on ? `1.5px solid ${EV.bronze}` : "1px solid rgba(245,240,230,0.22)",
                  background: on ? EV.bronze : "transparent", color: on ? "#FFFFFF" : EV.beigeWarm
                }}>
                <div style={{ fontSize: 14.5, fontWeight: 700, lineHeight: 1.3 }}>{o.title}</div>
                <div style={{ fontSize: 12.5, opacity: 0.85, marginTop: 3 }}>
                  {o.recurs ? `${o.recurs.label}, ${o.time}` : new Date(o.date[0], o.date[1], o.date[2]).toLocaleDateString("en-US", { month: "long", day: "numeric" })} · {o.city}
                </div>
              </button>);

          })}
        </div>
      </div>}

      {/* 1. Student */}
      <div style={card}>
        {sectionHead(1, "About your student", "Grade and school help us group girls with their peers and report reach by district to our funders.")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ev-grid2">
          <EvField label="Student first name" required><input required style={evField} value={f.studentFirst} onChange={(e) => set("studentFirst")(e.target.value)} placeholder="Imani" /></EvField>
          <EvField label="Student last name" required><input required style={evField} value={f.studentLast} onChange={(e) => set("studentLast")(e.target.value)} placeholder="Williams" /></EvField>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 16 }} className="ev-grid3">
          <EvField label="Grade this fall" required>
            <select required style={evField} value={f.grade} onChange={(e) => set("grade")(e.target.value)}>
              {["6th", "7th", "8th", "9th", "10th", "11th", "12th"].map((g) => <option key={g} value={g}>{g} grade</option>)}
            </select>
          </EvField>
          <EvField label="Date of birth" required><input required type="date" style={evField} value={f.dob} onChange={(e) => set("dob")(e.target.value)} /></EvField>
          <EvField label="Student cell (optional)"><input style={evField} value={f.studentPhone} onChange={(e) => set("studentPhone")(e.target.value)} placeholder="(720) 555-0100" /></EvField>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }} className="ev-grid2">
          <EvField label="School" required><input required style={evField} value={f.school} onChange={(e) => set("school")(e.target.value)} placeholder="East High School" /></EvField>
          <EvField label="Student email (optional)"><input type="email" style={evField} value={f.studentEmail} onChange={(e) => set("studentEmail")(e.target.value)} placeholder="student@example.com" /></EvField>
        </div>
      </div>

      {/* 2. Parent / guardian */}
      <div style={card}>
        {sectionHead(2, "Parent or guardian", "We need a responsible adult on file for every minor at a BGA event. This is who we call first.")}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ev-grid2">
          <EvField label="Parent or guardian full name" required><input required style={evField} value={f.parentName} onChange={(e) => set("parentName")(e.target.value)} placeholder="Full name" /></EvField>
          <EvField label="Relationship to student" required>
            <select required style={evField} value={f.parentRelationship} onChange={(e) => set("parentRelationship")(e.target.value)}>
              {["Mother", "Father", "Grandparent", "Aunt or Uncle", "Legal guardian", "Foster parent", "Older sibling (18+)", "Other"].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </EvField>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 16 }} className="ev-grid3">
          <EvField label="Parent email" required><input required type="email" style={evField} value={f.parentEmail} onChange={(e) => set("parentEmail")(e.target.value)} placeholder="parent@example.com" /></EvField>
          <EvField label="Parent cell" required><input required style={evField} value={f.parentPhone} onChange={(e) => set("parentPhone")(e.target.value)} placeholder="(720) 555-0100" /></EvField>
          <EvField label="Best way to reach you">
            <select style={evField} value={f.preferredContact} onChange={(e) => set("preferredContact")(e.target.value)}>
              {["Text", "Phone call", "Email"].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </EvField>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }} className="ev-grid2">
          <EvField label="Second emergency contact" hint="Someone we can reach if we cannot reach you."><input style={evField} value={f.emergencyName} onChange={(e) => set("emergencyName")(e.target.value)} placeholder="Name and relationship" /></EvField>
          <EvField label="Emergency contact phone"><input style={evField} value={f.emergencyPhone} onChange={(e) => set("emergencyPhone")(e.target.value)} placeholder="(720) 555-0100" /></EvField>
        </div>
      </div>

      {/* 3. Baseline pre-survey */}
      <div style={card}>
        {sectionHead(3, "Where she is today", "Five statements, thirty seconds. We ask these again at the end of the season and report the change. That before and after number is the difference between a grant application that says we served fifty girls and one that says we moved belonging by thirty percent. There is no wrong answer and nobody sees her individual responses.")}

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <EvScale label="1. I belong to a community of Black girls and women who have my back." value={f.bBelong} onChange={set("bBelong")} />
          <EvScale label="2. I know the steps to get into college and how my family would pay for it." value={f.bCollege} onChange={set("bCollege")} />
          <EvScale label="3. When something is hard or stressful, I know what to do and who to talk to." value={f.bStress} onChange={set("bStress")} />
          <EvScale label="4. I am active in a sport or physical activity at least twice a week." value={f.bActive} onChange={set("bActive")} />
          <EvScale label="5. I can picture myself leading a group or speaking up for something I believe in." value={f.bLead} onChange={set("bLead")} />
        </div>

        <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${EV.beigeWarm}` }}>
          <EvCheck checked={f.baselineSkip} onChange={set("baselineSkip")}>
            My student would rather answer these herself at the event.
          </EvCheck>
        </div>
      </div>

      {/* 4. Consent */}
      <div style={{ ...card, background: EV.chocolate, borderColor: "rgba(245,240,230,0.14)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <span style={{ width: 30, height: 30, borderRadius: "50%", background: EV.bronze, color: "#FFFFFF", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>4</span>
          <h3 className="serif" style={{ margin: 0, fontSize: 25, fontWeight: 600, color: EV.beige }}>Permissions</h3>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 15, color: EV.beige }}>
          <label style={{ display: "flex", gap: 11, alignItems: "flex-start", cursor: "pointer", fontSize: 14.5, lineHeight: 1.6 }}>
            <input type="checkbox" checked={f.pickup} onChange={(e) => set("pickup")(e.target.checked)} style={{ width: 18, height: 18, marginTop: 2, accentColor: EV.bronze, flexShrink: 0 }} />
            <span>I am the parent or legal guardian, I give permission for my student to attend {ev.title}, and I am responsible for drop off and pick up at the stated times. <span style={{ color: EV.bronzeSoft }}>Required.</span></span>
          </label>
          <label style={{ display: "flex", gap: 11, alignItems: "flex-start", cursor: "pointer", fontSize: 14.5, lineHeight: 1.6 }}>
            <input type="checkbox" checked={f.dataUse} onChange={(e) => set("dataUse")(e.target.checked)} style={{ width: 18, height: 18, marginTop: 2, accentColor: EV.bronze, flexShrink: 0 }} />
            <span>I understand BGA keeps this information to run the program safely and to report participation numbers to funders in aggregate. My student's name and details are never sold or shared with third parties. <span style={{ color: EV.bronzeSoft }}>Required.</span></span>
          </label>
          <label style={{ display: "flex", gap: 11, alignItems: "flex-start", cursor: "pointer", fontSize: 14.5, lineHeight: 1.6 }}>
            <input type="checkbox" checked={f.media} onChange={(e) => set("media")(e.target.checked)} style={{ width: 18, height: 18, marginTop: 2, accentColor: EV.bronze, flexShrink: 0 }} />
            <span>I give permission for photos or video of my student taken at this event to be used in BGA materials, social media, and grant reports. <span style={{ opacity: 0.6 }}>Optional. Leave unchecked to opt out.</span></span>
          </label>
        </div>

        {apiError && <div style={{ marginTop: 20, fontSize: 14, fontWeight: 600, color: EV.bronzeSoft }}>{apiError}</div>}

        <button type="submit" className="btn" disabled={submitting} style={{ marginTop: 26, background: EV.bronze, color: "#FFFFFF", opacity: submitting ? 0.6 : 1 }}>
          {submitting ? "Sending..." : "Submit RSVP"} {!submitting && <Icon.Arrow size={16} />}
        </button>
        <p style={{ margin: "14px 0 0", fontSize: 12.5, lineHeight: 1.6, color: EV.beige, opacity: 0.6, maxWidth: 560 }}>
          Questions before you submit? Email ariel@theblackgirladvocate.org or call (720) 585-1015.
        </p>
      </div>
    </form>);

}

/* ---------------- FAQ ---------------- */

const EV_FAQ = [
{ q: "Who can attend BGA events?", a: "Our programming is built for girls across Colorado. Individual events are often limited to a specific grade band, and that is listed on every event card." },
{ q: "Is there a cost?", a: "Any cost is stated on the event page before you RSVP. Most BGA events are underwritten by donors and sponsors so families pay nothing. If a fee ever stands between your girl and a program, email us and we will work it out privately." },
{ q: "Does a parent need to stay for the event?", a: "No. Our events are drop off unless the event card says otherwise. A BGA facilitator checks every student in and out by name, and we do not release a student to anyone who is not on her form. Parents are always welcome to stay." },
{ q: "Why do you ask for so much parent and guardian information?", a: "Two reasons. Safety, because we need a responsible adult reachable within minutes for every minor in our care. And funding, because youth serving grants require us to report who we serve. Your student's individual information is never sold or shared." },
{ q: "How is my student's data used and stored?", a: "Registrations are stored in our secure database and seen only by BGA staff running the program. Funder reports use aggregate numbers, for example how many 9th graders from Adams County attended, never individual names. Read the full policy on our privacy page." },
{ q: "What if we RSVP and then cannot make it?", a: "Please tell us as soon as you know. Our events have waitlists, and a released spot almost always goes to another girl. Email ariel@theblackgirladvocate.org or reply to your confirmation." },
{ q: "Can my student bring a friend?", a: "Yes, if she registers. Every attending student needs her own RSVP with her own parent or guardian on file. We cannot admit a walk on guest who is not registered." },
{ q: "Do you offer transportation?", a: "Not for every event yet. Transportation is the barrier we hear about most, which is why we ask about it on the RSVP form. Tell us you need a ride and we will do everything we can, including coordinating carpools with other families in your area." },
{ q: "We do not live in the Denver metro. When are you coming to us?", a: "That is exactly what question one on the RSVP form decides. We are building statewide, and the counties that show demand are the ones we schedule next. Register, answer honestly, and tell other families to do the same." },
{ q: "How do I hear about new events first?", a: "Join the newsletter at the bottom of any page. Event announcements go to the list before they go to social media, and our high demand events fill from the list." }];


function EvFaq() {
  const [open, setOpen] = React.useState(0);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: `1px solid ${EV.beigeWarm}` }}>
      {EV_FAQ.map((item, i) =>
      <div key={i} style={{ borderBottom: `1px solid ${EV.beigeWarm}` }}>
          <button
          onClick={() => setOpen(open === i ? -1 : i)}
          aria-expanded={open === i}
          style={{
            width: "100%", background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20,
            padding: "22px 4px", textAlign: "left"
          }}>
            <span className="serif" style={{ fontSize: "clamp(17px, 1.6vw, 20px)", fontWeight: 600, color: EV.chocolate, lineHeight: 1.35 }}>{item.q}</span>
            <span style={{
            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
            border: `1.5px solid ${EV.bronze}`, color: EV.bronze,
            display: "grid", placeItems: "center", fontSize: 17, fontWeight: 400, lineHeight: 1,
            transform: open === i ? "rotate(45deg)" : "none", transition: "transform .2s ease"
          }}>+</span>
          </button>
          {open === i &&
        <p style={{ margin: "0 0 24px", paddingRight: 48, fontSize: 15.5, lineHeight: 1.7, color: EV.taupe, maxWidth: 760, textWrap: "pretty" }}>{item.a}</p>}
        </div>)}
    </div>);

}

/* ---------------- page ---------------- */

function EventsPage({ onNavigate }) {
  const [openRsvpId, setOpenRsvpId] = React.useState(null);
  const sorted = [...BGA_EVENTS].sort((a, b) => new Date(a.date[0], a.date[1], a.date[2]) - new Date(b.date[0], b.date[1], b.date[2]));

  const jump = (id) => {
    const el = document.getElementById(`ev-${id}`);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
  };
  const toggleRsvp = (id) => {
    setOpenRsvpId((cur) => {
      const next = cur === id ? null : id;
      if (next) setTimeout(() => { const el = document.getElementById(`ev-rsvp-${id}`); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" }); }, 60);
      return next;
    });
  };

  return (
    <div style={{ background: EV.beige, color: EV.chocolate }}>
      <style>{`
        .ev-card { grid-template-columns: 300px 1fr; }
        .ev-cal-phone { display: none; }
        @media (max-width: 900px) {
          .ev-card { grid-template-columns: 1fr !important; }
          .ev-grid2, .ev-grid3 { grid-template-columns: 1fr !important; }
          .ev-cal-desk { display: none !important; }
          .ev-cal-phone { display: flex !important; flex-direction: column; }
          .ev-hero-grid { grid-template-columns: 1fr !important; }
        }
        #ev-rsvp a, #ev-rsvp a:hover { color: ${EV.bronze}; }
      `}</style>

      {/* HERO */}
      <section style={{ background: EV.chocolate, color: EV.beige, padding: "clamp(72px, 9vw, 120px) 0 clamp(64px, 8vw, 96px)" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "end" }} className="ev-hero-grid">
            <div>
              <EvEyebrow color={EV.bronzeSoft}>Fall 2026 Calendar</EvEyebrow>
              <h1 className="serif" style={{ margin: "18px 0 0", fontSize: "clamp(44px, 6.4vw, 92px)", fontWeight: 600, lineHeight: 1.02, letterSpacing: "-0.02em" }}>
                Events
              </h1>
              <p style={{ margin: "22px 0 0", maxWidth: 560, fontSize: "clamp(16px, 1.5vw, 19px)", lineHeight: 1.65, color: EV.beigeWarm, textWrap: "pretty" }}>
                Every class, tour, game day, and circle we host, in one place. Pick a highlighted date to jump to the details, then RSVP. Spots are limited and they go fast.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
              { n: "Fall", l: "2026 programming season" },
              { n: "6\u201312", l: "grades we serve" },
              { n: "RSVP", l: "required for every event" }].
              map((s) =>
              <div key={s.l} style={{ display: "flex", alignItems: "baseline", gap: 14, borderTop: "1px solid rgba(245,240,230,0.16)", paddingTop: 12 }}>
                  <span className="serif" style={{ fontSize: 30, fontWeight: 600, color: EV.bronzeSoft, lineHeight: 1 }}>{s.n}</span>
                  <span style={{ fontSize: 13.5, color: EV.beigeWarm, opacity: 0.85 }}>{s.l}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CALENDAR */}
      <section style={{ padding: "clamp(56px, 7vw, 88px) 0 clamp(40px, 5vw, 56px)" }}>
        <div className="container-wide">
          <EvEyebrow>The Calendar</EvEyebrow>
          <h2 className="serif" style={{ margin: "14px 0 0", fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 600, lineHeight: 1.1 }}>September and October 2026</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, marginTop: 32 }} className="ev-cal-desk">
            <EvMonth year={2026} month={8} events={BGA_EVENTS} onPick={jump} />
            <EvMonth year={2026} month={9} events={BGA_EVENTS} onPick={jump} />
          </div>
          <div className="ev-cal-phone" style={{ marginTop: 26, gap: 30 }}>
            <EvAgenda year={2026} month={8} events={BGA_EVENTS} onPick={jump} />
            <EvAgenda year={2026} month={9} events={BGA_EVENTS} onPick={jump} />
          </div>
          <p style={{ margin: "22px 0 0", fontSize: 14, color: EV.taupe, lineHeight: 1.6 }}>
            New dates are added here first, so check back or join the newsletter at the bottom of the page.
          </p>
        </div>
      </section>

      {/* EVENT LIST */}
      <section style={{ padding: "clamp(24px, 3vw, 40px) 0 clamp(56px, 7vw, 88px)" }}>
        <div className="container-wide" style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div>
            <EvEyebrow>What's Coming Up</EvEyebrow>
            <h2 className="serif" style={{ margin: "14px 0 0", fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 600, lineHeight: 1.1 }}>Next on the calendar</h2>
          </div>
          {sorted.map((e) => <EvCard key={e.id} ev={e} isOpen={openRsvpId === e.id} onToggleRsvp={() => toggleRsvp(e.id)} onBra={() => onNavigate("contact?intent=donate")} onNavigate={onNavigate} />)}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "clamp(64px, 8vw, 100px) 0" }}>
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "0.8fr 1.4fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "start" }} className="ev-hero-grid">
            <div>
              <EvEyebrow>FAQ</EvEyebrow>
              <h2 className="serif" style={{ margin: "14px 0 0", fontSize: "clamp(30px, 3.6vw, 46px)", fontWeight: 600, lineHeight: 1.08 }}>Questions families ask.</h2>
              <p style={{ margin: "18px 0 0", fontSize: 15.5, lineHeight: 1.7, color: EV.taupe, textWrap: "pretty" }}>
                Still unsure about something? Email <a href="mailto:ariel@theblackgirladvocate.org" style={{ color: EV.bronze, textDecoration: "underline" }}>ariel@theblackgirladvocate.org</a> or call (720) 585-1015. A real person answers.
              </p>
              <button className="btn btn-outline-dark" style={{ marginTop: 26 }} onClick={() => onNavigate("contact")}>
                Contact us <Icon.Arrow size={16} />
              </button>
            </div>
            <EvFaq />
          </div>
        </div>
      </section>
    </div>);

}

window.EventsPage = EventsPage;
window.BGA_EVENTS = BGA_EVENTS;
