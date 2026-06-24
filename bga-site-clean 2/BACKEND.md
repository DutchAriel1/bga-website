# BGA Backend — Deployment Guide

This site is a static React frontend + a small set of serverless functions in `api/`. Everything is wired and ready to deploy. You need accounts on **Vercel**, **Airtable**, and **Resend**, plus your existing **Donorbox/Stripe** for donations. Budget: ~45 minutes.

---

## 1 · Create the Airtable base

Sign in at [airtable.com](https://airtable.com) and create a new base called **BGA Operations**. Add these tables with these exact field names (column types in parens):

### Applications
- First Name (single line), Last Name (single line)
- Email (email), Phone (phone)
- School (single line), City (single line)
- Grade (single select: freshman, sophomore, junior, senior)
- Parent Name (single line), Parent Email (email)
- Why (long text), Advocacy Moment (long text)
- Signature (single line)
- Status (single select: New, Review, Interview, Accepted, Waitlist, Declined)
- Submitted At (date with time)

### Elite Eight Applications
- First Name (single line), Last Name (single line)
- Email (email), Phone (phone)
- Grade (single line), GPA (single line)
- School (single line), City / State (single line)
- Parent Name (single line), Parent Email (email), Parent Phone (phone)
- Counselor Name (single line), Counselor Email (email)
- Why (long text)
- Transcript File (single line — filename; the file itself is emailed to the reviewer, not stored in Airtable)
- Status (single select: New, Review, Interview, Accepted, Waitlist, Declined)
- Submitted At (date with time)

### I Got Next Enrollments
- Athlete First Name (single line), Athlete Last Name (single line)
- Grade (single line)
- School (single line), City / State (single line)
- Athlete Email (email)
- Parent Name (single line), Parent Email (email), Parent Phone (phone)
- Goals (long text)
- Status (single select: New, Contacted, Enrolled, Declined)
- Submitted At (date with time)

### Orchid Nominations
- Nominee Name (single line), Nominee Email (email)
- Institution (single line)
- Category (single select: ECE / Elementary / Middle School / High School / Post Secondary / Lifetime Achievement)
- Reason (long text)
- Nominator Name (single line), Nominator Email (email)
- Relationship (single line)
- Status (single select: New, Reviewing, Finalist, Selected, Declined)
- Submitted At (date with time)

### Orchid Sponsorships
- Sponsor (single line)
- Contact Name (single line)
- Email (email), Phone (phone)
- Level (single line: Lilac / Lavender / Royal Orchid / Presenting Orchid / Custom)
- Message (long text)
- Status (single select: New, Contacted, Confirmed, Declined)
- Submitted At (date with time)

### HBCU Interest
- First Name, Last Name, Email, School, GPA (number, 1 decimal), Graduation Year, Submitted At

### Contact
- Intent (single select: enroll, partner, volunteer, press, general)
- Name, Email, Phone, Org, Student Age, Student School, Message, Submitted At

### Ticket Requests
- Name, Email, Phone, Show, Quantity (number), Notes (long text), Status (single select: Requested, Confirmed, Declined, Attended), Submitted At

### Book Donations
- Name, Email, Titles (long text), Count (number), Condition (single select: new, gently-used, mixed), Delivery (single select: ship, dropoff), Submitted At

### Newsletter
- Email, Source, Submitted At

### Events Notify
- Email, Submitted At

Then go to [airtable.com/create/tokens](https://airtable.com/create/tokens):
- Create a **Personal Access Token**
- Scopes: `data.records:read`, `data.records:write`, `schema.bases:read`
- Access: only the **BGA Operations** base
- Copy the token — you'll paste it into Vercel in step 4

Also grab the **Base ID** (starts with `app...`) from [airtable.com/api](https://airtable.com/api) → click your base → top of the docs.

---

## 2 · Set up Resend

1. Sign up at [resend.com](https://resend.com)
2. Add and **verify your sending domain** (theblackgirladvocate.org) — Resend walks you through DNS records (SPF, DKIM, DMARC). This takes 5–30 min for DNS to propagate.
3. Create an API key under **API Keys** → copy it.
4. Decide your "From" address — e.g. `hello@theblackgirladvocate.org` — and an internal notification address (where new submissions get emailed).

---

## 3 · Connect Donorbox to Stripe

The donation widget on the home page already loads `donorbox.org/widgets.js` for campaign `blackgirlunityspacedonations`. To make it accept real money:

1. In your Donorbox dashboard → **Account → Payment Methods**
2. Click **Connect with Stripe** and authorize your Stripe account
3. Confirm the campaign slug matches — if you renamed it, update the `campaign="..."` attribute in `pages/home.jsx`

If you want the Contact-page donate form to also accept money: swap `<DonateForm>` for the same `<dbox-widget>`. Right now that form is a UI mock.

---

## 4 · Deploy to Vercel

1. Push this project to a GitHub repo (private is fine)
2. At [vercel.com/new](https://vercel.com/new), import the repo
3. **Framework Preset:** Other  ·  **Build Command:** (leave empty)  ·  **Output Directory:** (leave empty / `.`)
4. Before clicking Deploy, expand **Environment Variables** and add:

| Name | Value |
|---|---|
| `AIRTABLE_TOKEN` | (from step 1) |
| `AIRTABLE_BASE_ID` | (from step 1, starts with `app`) |
| `RESEND_API_KEY` | (from step 2) |
| `EMAIL_FROM` | `BGA <hello@theblackgirladvocate.org>` |
| `EMAIL_TO_INTERNAL` | `team@theblackgirladvocate.org` |

5. Click **Deploy**. Vercel installs deps from `package.json`, deploys static files, and turns each `api/*.js` into a serverless function automatically.
6. Once deployed, point your domain at Vercel in **Settings → Domains**.

---

## 5 · Verify each form end-to-end

Open the live site and submit each form once. For each, check:

- ✅ A new row appears in the matching Airtable table
- ✅ You receive an internal notification email
- ✅ The submitter receives a confirmation email (apply, HBCU, tickets)
- ✅ The success state shows on screen

If a form fails: open Vercel → your project → **Logs**, find the function call, and read the error. Usually it's a typo in an Airtable field name or a missing env var.

---

## 6 · Local development

```bash
npm install
cp .env.example .env.local   # then fill in values
npx vercel dev               # runs frontend + functions on localhost:3000
```

---

## What's deployed where

```
Vercel  ────────────────────────────
├── Static frontend (index.html + jsx)
└── /api/*.js                            ← Node serverless functions
       ├── apply.js              → Airtable: Applications      + Resend
       ├── elite-eight.js        → Airtable: Elite Eight Applications + Resend (reviewer: ariel@theblackgirladvocate.org, transcript attached)
       ├── igotnext-enroll.js    → Airtable: I Got Next Enrollments + Resend (reviewer: ariel@theblackgirladvocate.org)
       ├── orchid-nominate.js    → Airtable: Orchid Nominations + Resend (reviewer: ariel@theblackgirladvocate.org)
       ├── orchid-sponsor.js     → Airtable: Orchid Sponsorships + Resend (reviewer: ariel@theblackgirladvocate.org)
       ├── hbcu-interest.js      → Airtable: HBCU Interest     + Resend
       ├── contact.js            → Airtable: Contact           + Resend (internal)
       ├── tickets.js            → Airtable: Ticket Requests   + Resend
       ├── donate-books.js       → Airtable: Book Donations    + Resend (internal)
       ├── newsletter.js         → Airtable: Newsletter
       └── events-notify.js      → Airtable: Events Notify

Airtable    ← database (your team manages via spreadsheet UI)
Resend      ← transactional email (confirmations + internal alerts)
Donorbox    ← donations → Stripe → your bank
```

---

## Hardening (do these before launch)

- **Privacy policy** — required since you collect minor PII on the Apply page. Use [Termly](https://termly.io) or [iubenda](https://www.iubenda.com).
- **Terms of service** + **accessibility statement** — link from footer.
- **Rate limiting** — the in-memory limiter in `api/_lib/utils.js` resets on cold starts. For real abuse protection, swap in [Upstash Redis](https://upstash.com) (10 lines of code, free tier covers you).
- **Backups** — Airtable has snapshots; enable them under base → Help → Snapshots.
- **Analytics** — add [Plausible](https://plausible.io) or GA4 in `index.html`.
- **Stripe verification** — confirm in your Stripe dashboard that test donations land before launch.

---

## Cost at this scale

| Service | Tier | Monthly |
|---|---|---|
| Vercel | Hobby | $0 |
| Airtable | Free (up to 1,000 records/base) | $0 |
| Resend | Free (3,000 emails/mo) | $0 |
| Donorbox | 1.5% platform fee (only on donations) | — |
| Stripe | 2.9% + 30¢ per donation | — |

You can run the entire backend at zero fixed cost until you outgrow free tiers — likely a year+ from now.

---

Questions or stuck on a step? The function code is heavily commented in `api/_lib/`. The pattern is: validate → write to Airtable → send email → respond JSON.
