# How to Update the Site 🔄

This is your plain-English guide for changing the website after it's live.
Keep it simple: small fixes you can do yourself, bigger changes come through Claude.

---

## The big picture (how publishing works)

```
   You edit here  ─►  GitHub repo  ─►  Vercel  ─►  Live site
   (or with Claude)    (the files)     (auto)      (theblackgirladvocate.org)
```

- **GitHub → Vercel is AUTOMATIC.** The moment anything in your GitHub repo
  changes, Vercel rebuilds and republishes the live site within about a minute.
  You never have to touch Vercel again.
- **The only manual step is getting a change INTO GitHub.** Once it's in
  GitHub, it goes live on its own.

Your repo: **github.com/dutchariel1/bga-website**, folder **`bgasite`**.

---

## Path A — Quick text fixes (do these yourself)

Best for: fixing a typo, changing a date, a price, a name, a phone number.

1. Go to your repo on **github.com**.
2. Open the `bgasite` folder, then open the file with the text (most page text
   lives in the `pages` folder, e.g. `pages/home.jsx`).
3. Click the **pencil icon** (✏️ "Edit this file") in the top-right of the file.
4. Use **Ctrl+F / Cmd+F** to find the words you want to change. Type the new text.
5. Scroll down, click the green **Commit changes** button.
6. Done. Vercel auto-deploys in ~1 minute. Refresh the live site to see it.

💡 Tip: only change the words between the quotes or tags. Don't delete
   brackets, quotes, or `<` `>` symbols around them, those make the page work.

---

## Path B — Bigger changes (bring these to Claude)

Best for: new pages, new sections, design changes, new forms, anything you're
not comfortable editing by hand.

1. Tell Claude what you want changed.
2. Claude makes the edits here and gives you the updated file(s) to download.
3. Upload them to GitHub (replacing the old ones):
   - In the repo, open the `bgasite` folder.
   - **Add file → Upload files**, drag in the changed files (GitHub overwrites
     files with the same name).
   - Click **Commit changes**.
4. Vercel auto-deploys in ~1 minute.

---

## Things that DON'T need a code change

- **Donations** → managed in your **Donorbox** dashboard.
- **Form submissions** (applications, tickets, nominations, etc.) → they land in
  your **Airtable** base. Review and manage them there like a spreadsheet.
- **Emails that go out** → managed in **Resend** (and the reviewer address is
  set in Vercel's Environment Variables).

You only need a code change when you want to alter what the website itself
*shows or says*.

---

## After ANY change — quick check

1. Wait ~1 minute after committing.
2. Open **theblackgirladvocate.org** and refresh (hard refresh: Cmd+Shift+R /
   Ctrl+Shift+R to skip the cache).
3. If something looks broken, go to Vercel → your project → **Deployments**, and
   check the latest one says **Ready** (green). If it says **Error**, click it
   to see what went wrong, or send it to Claude.

---

## Making it FULLY automatic later (optional)

Right now bigger changes need a manual upload. When you bring on a developer (or
ask Claude for a "developer handoff package"), they can connect everything so
edits sync to GitHub with one command, no uploading. Not required to run the
site, just a convenience for when updates get frequent.

---

Stuck on any step? Ask Claude and describe what you see.
