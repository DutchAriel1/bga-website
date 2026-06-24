/* Privacy Policy — legal baseline page covering youth data, media releases,
   donations, and newsletter. Core BGA brand. */

function PrivacyPage({ onNavigate }) {
  const sections = [
    {
      h: "Who we are",
      b: ["The Black Girl Advocate (\u201cBGA,\u201d \u201cwe,\u201d \u201cus\u201d) is a Colorado 501(c)(3) nonprofit organization (EIN 99-0725880). This policy explains what information we collect through this website and our programs, how we use it, and the choices you have."],
    },
    {
      h: "Information we collect",
      b: [
        "Information you give us: your name, email, phone, organization, and the contents of any form you submit (donations, applications, ticket and book-donation requests, partnership and booking inquiries, and newsletter sign-ups).",
        "Program information: for enrolled students and families, we collect the details needed to run programming, including grade level, school, guardian contacts, and permission and media-release forms.",
        "Automatically collected: basic technical data such as device and browser type, and aggregate usage, used to keep the site working and improve it.",
      ],
    },
    {
      h: "Children & youth (under 18)",
      b: [
        "BGA serves girls in grades 6\u201312, so we take the privacy of minors seriously. We collect a minor\u2019s information only with the involvement of a parent or guardian, and only as needed to deliver programming and keep participants safe.",
        "We do not sell or rent any participant\u2019s information, and we do not use it for behavioral advertising. Parents and guardians may review, update, or request deletion of their child\u2019s information at any time by contacting us.",
      ],
    },
    {
      h: "Photos, video & media releases",
      b: [
        "Our programs are documented in photos and video used to share our work and raise support. We obtain a signed media release before publishing identifiable images of any participant, and especially any minor.",
        "If you or your child appears in our media and you wish to withdraw consent, contact us and we will remove the image from materials we control going forward.",
      ],
    },
    {
      h: "Donations",
      b: [
        "Online donations are processed by our third-party provider, Donorbox, and its payment processors. BGA does not store your full payment card details. Donorbox\u2019s handling of your information is governed by its own privacy policy.",
        "We retain a record of your gift (amount, date, and contact details) for receipting, tax acknowledgment, and required nonprofit recordkeeping. Contributions are tax-deductible to the fullest extent allowed by law.",
      ],
    },
    {
      h: "Email & newsletter",
      b: ["If you subscribe, we use your email to send updates about our work, events, and ways to help. Every email includes an unsubscribe link, and you can opt out at any time."],
    },
    {
      h: "How we share information",
      b: [
        "We share information only with service providers who help us operate (such as our donation, email, and form tools), when required by law, or to protect the safety of participants. We never sell your personal information.",
      ],
    },
    {
      h: "How we protect & keep information",
      b: ["We use reasonable administrative and technical safeguards to protect the information we hold, and retain it only as long as needed for the purposes above or as required by law."],
    },
    {
      h: "Your choices & rights",
      b: ["You may request to access, correct, or delete your personal information, unsubscribe from email, or withdraw a media consent. To make a request, contact us using the details below and we will respond promptly."],
    },
    {
      h: "Changes to this policy",
      b: ["We may update this policy as our programs and the law evolve. Material changes will be posted here with a new effective date."],
    },
  ];

  return (
    <div data-screen-label="Privacy Policy">
      <PageHero
        eyebrow="Privacy Policy"
        title={<>Your trust, <span className="serif" style={{ fontStyle: "italic", fontWeight: 300 }}>protected.</span></>}
        kicker="How we collect, use, and protect your information, with special care for the girls and families we serve."
      />
      <section className="section">
        <div className="container-wide" style={{ maxWidth: 820 }}>
          <p style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.55, fontWeight: 600, marginBottom: 48 }}>
            Effective January 2026
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {sections.map((s, i) => (
              <div key={i} style={{ padding: "32px 0", borderTop: "1px solid var(--line-dark)" }}>
                <h2 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 26, fontWeight: 500, letterSpacing: "-0.01em" }}>{s.h}</h2>
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 14 }}>
                  {s.b.map((p, j) => (
                    <p key={j} style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, opacity: 0.85 }}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, padding: "30px 32px", background: "var(--beige-deep)", border: "1px solid var(--line-dark)", borderRadius: 18 }}>
            <h3 style={{ margin: 0, fontFamily: "Noto Serif", fontSize: 22, fontWeight: 500 }}>Contact us</h3>
            <p style={{ margin: "12px 0 0", fontSize: 16, lineHeight: 1.6, opacity: 0.85 }}>
              Questions, or a privacy or media-consent request? Email{" "}
              <a href={`mailto:${BGA.email}`} style={{ color: "var(--bronze)", textDecoration: "underline" }}>{BGA.email}</a>
              {" "}or call {BGA.phone}. The Black Girl Advocate, {BGA.address}.
            </p>
            <button onClick={() => onNavigate("contact")} className="btn btn-dark" style={{ marginTop: 22 }}>Contact our team <Icon.Arrow size={16} /></button>
          </div>
        </div>
      </section>
    </div>
  );
}

window.PrivacyPage = PrivacyPage;
