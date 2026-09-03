/* Black Girls at the Arts, ticket request landing page */
function TicketsPage({ onNavigate }) {
  const DEFAULT_TOTAL = 8;
  const MAX_PER_REQUEST = 4;
  const STORAGE_KEY = "bga_tickets_state_v1";
  const totalFor = (show) => (show && show.total) || DEFAULT_TOTAL;

  const initialShows = [
    {
      id: "legally-blonde",
      title: "Legally Blonde, The Musical",
      date: "February 5",
      time: "Anytime",
      venue: "DCPA",
      url: null,
      blurb: "A pink-soaked story about underestimating no one.",
    },
    {
      id: "boop",
      title: "BOOP! The Musical",
      date: "March 13",
      time: "Anytime",
      venue: "DCPA",
      url: "https://www.denvercenter.org/tickets-events/boop-the-musical/",
      blurb: "Betty Boop, brand new century, same heart.",
    },
    {
      id: "beautiful-noise",
      title: "A Beautiful Noise",
      date: "September 11",
      time: "Anytime",
      venue: "DCPA",
      url: "https://www.denvercenter.org/tickets-events/a-beautiful-noise/",
      blurb: "The Neil Diamond Musical, a story told through song.",
      total: 4,
    },
  ];

  // claimed[showId] = number of tickets already requested
  const [claimed, setClaimed] = React.useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return Object.fromEntries(initialShows.map((s) => [s.id, 0]));
  });

  React.useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(claimed)); } catch (e) {}
  }, [claimed]);

  const [activeShow, setActiveShow] = React.useState(null);
  const [qty, setQty] = React.useState(2);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const open = (show) => {
    setActiveShow(show);
    setQty(Math.min(2, totalFor(show) - (claimed[show.id] || 0), MAX_PER_REQUEST) || 1);
    setSubmitted(false);
  };
  const close = () => { setActiveShow(null); setSubmitted(false); };

  const submit = async (e) => {
    e.preventDefault();
    if (!activeShow || submitting) return;
    setSubmitting(true);
    try {
      const r = await window.bgaApi("/api/tickets", {
        name, email, phone, show: activeShow.title, quantity: qty,
      });
      if (r.ok) {
        setClaimed((prev) => ({ ...prev, [activeShow.id]: Math.min(totalFor(activeShow), (prev[activeShow.id] || 0) + qty) }));
        setSubmitted(true);
      }
    } finally { setSubmitting(false); }
  };

  return (
    <>
      <PageHero
        eyebrow="Black Girls at the Arts"
        title={<>Request <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>tickets.</span></>}
        kicker={`We hold a limited number of seats for our girls and families at each Black Girls at the Arts night. Up to ${MAX_PER_REQUEST} tickets per request, first come, first served.`}
        accent="lavender"
      />

      <section className="section">
        <div className="container-wide">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {initialShows.map((s) => {
              const used = claimed[s.id] || 0;
              const total = totalFor(s);
              const remaining = total - used;
              const soldOut = remaining <= 0;
              return (
                <div key={s.id} style={{
                  background: "var(--beige-deep)",
                  borderRadius: 20,
                  padding: 32,
                  border: "1px solid var(--line-dark)",
                  display: "flex", flexDirection: "column", gap: 18,
                }}>
                  <div className="chip chip-lavender">{s.date} · {s.time}</div>
                  <h3 className="display" style={{ fontSize: 28, fontWeight: 500, margin: 0, letterSpacing: "-0.01em" }}>{s.title}</h3>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, margin: 0, opacity: 0.78 }}>{s.blurb}</p>
                  <div style={{ fontSize: 13, opacity: 0.7 }}>{s.venue}</div>

                  <div style={{ marginTop: "auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8, fontSize: 12.5, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      <span style={{ color: "var(--taupe)" }}>Tickets remaining</span>
                      <span style={{ color: soldOut ? "#a8423a" : "var(--chocolate)" }}>{remaining} / {total}</span>
                    </div>
                    <div style={{ height: 6, borderRadius: 999, background: "rgba(61,44,41,0.10)", overflow: "hidden" }}>
                      <div style={{ width: `${(remaining / total) * 100}%`, height: "100%", background: soldOut ? "#a8423a" : "var(--lavender)", transition: "width 0.3s" }} />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: 10, marginTop: 8, flexWrap: "wrap" }}>
                    <button
                      className="btn btn-dark"
                      onClick={() => open(s)}
                      disabled={soldOut}
                      style={{ opacity: soldOut ? 0.45 : 1, cursor: soldOut ? "not-allowed" : "pointer" }}
                    >
                      {soldOut ? "Fully claimed" : "Request Tickets"} {!soldOut && <Icon.Arrow size={14} />}
                    </button>
                    {s.url && (
                      <a className="btn btn-outline-dark" href={s.url} target="_blank" rel="noopener noreferrer">Show details</a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 48, fontSize: 14, opacity: 0.7, fontFamily: "Noto Serif", fontStyle: "italic" }}>
            Need more than {MAX_PER_REQUEST} tickets, or have a question? <button className="btn-ghost" style={{ padding: 0, textDecoration: "underline", background: "none", border: "none", cursor: "pointer", color: "inherit", fontFamily: "inherit", fontStyle: "inherit", fontSize: "inherit" }} onClick={() => onNavigate("contact")}>Contact us directly.</button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeShow && (
        <div onClick={close} style={{
          position: "fixed", inset: 0, background: "rgba(42,29,27,0.6)", backdropFilter: "blur(6px)",
          display: "grid", placeItems: "center", padding: 24, zIndex: 100,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: "var(--beige)", color: "var(--ink)",
            borderRadius: 20, padding: 40, maxWidth: 520, width: "100%",
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.4)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--bronze-soft)", color: "var(--chocolate-2)", display: "grid", placeItems: "center", margin: "0 auto 24px" }}>
                  <Icon.Check size={28} />
                </div>
                <h3 className="display d-md" style={{ margin: 0 }}>Tickets requested.</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, marginTop: 14, opacity: 0.78 }}>
                  We've held {qty} ticket{qty === 1 ? "" : "s"} to <em>{activeShow.title}</em>. Confirmation is on its way to {email || "your inbox"}.
                </p>
                <button className="btn btn-dark" onClick={close} style={{ marginTop: 24 }}>Close</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="chip chip-lavender" style={{ marginBottom: 12 }}>{activeShow.date}</div>
                <h3 className="display d-md" style={{ margin: 0 }}>{activeShow.title}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, marginTop: 12, opacity: 0.75 }}>
                  {totalFor(activeShow) - (claimed[activeShow.id] || 0)} of {totalFor(activeShow)} tickets remaining. Up to {MAX_PER_REQUEST} per request.
                </p>

                <div style={{ marginTop: 24 }}>
                  <Label>Number of tickets</Label>
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    {[1, 2, 3, 4].map((n) => {
                      const remaining = totalFor(activeShow) - (claimed[activeShow.id] || 0);
                      const disabled = n > Math.min(MAX_PER_REQUEST, remaining);
                      return (
                        <button
                          key={n}
                          type="button"
                          onClick={() => !disabled && setQty(n)}
                          disabled={disabled}
                          style={{
                            flex: 1, padding: "14px 0",
                            background: qty === n ? "var(--lavender)" : "transparent",
                            color: qty === n ? "var(--beige)" : "var(--ink)",
                            border: qty === n ? "none" : "1px solid var(--line-dark)",
                            borderRadius: 12, cursor: disabled ? "not-allowed" : "pointer",
                            opacity: disabled ? 0.35 : 1,
                            fontFamily: "inherit", fontSize: 18, fontWeight: 600,
                          }}
                        >{n}</button>
                      );
                    })}
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <Label>Full name</Label>
                  <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="Jane Doe" style={fieldStyle} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                  <div>
                    <Label>Email</Label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com" style={fieldStyle} />
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(720) 000-0000" style={fieldStyle} />
                  </div>
                </div>

                <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
                  <button type="button" className="btn btn-outline-dark" onClick={close}>Cancel</button>
                  <button type="submit" className="btn btn-dark" style={{ flex: 1, justifyContent: "center" }}>
                    Request {qty} ticket{qty === 1 ? "" : "s"} <Icon.Arrow size={14} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

const fieldStyle = {
  width: "100%", marginTop: 8, padding: 14,
  background: "var(--beige-deep)", color: "var(--ink)",
  border: "1px solid var(--line-dark)", borderRadius: 12,
  fontFamily: "inherit", fontSize: 15,
};

window.TicketsPage = TicketsPage;
