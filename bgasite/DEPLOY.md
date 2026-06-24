# How to Put This Website on the Internet 🌐

Hi! This guide will help you put the Black Girl Advocate website online so
everyone can see it. We'll go slow and explain everything. You can do this!

Think of it like this:
- **GitHub** = a backpack that holds all the website's stuff.
- **Vercel** = the magic robot that takes your backpack and puts the website on the internet.
- **Resend** = the mail carrier that sends emails when someone fills out a form.
- **Airtable** = a giant notebook that writes down everyone who fills out a form.

You need all four. Let's go one step at a time. ✨

---

## Part 1: Put the stuff in the backpack (GitHub)

1. Go to **github.com** and make a free account (ask a grown-up if you need an email).
2. Claude is helping connect your project to GitHub for you. When it's done, all
   the website files will already be in a "repo" (that's just a fancy word for
   the backpack). 🎒
3. You don't have to type any code. Yay!

✅ **You're done with Part 1 when:** you can see your website files on github.com.

---

## Part 2: Wake up the magic robot (Vercel)

1. Go to **vercel.com**.
2. Click **Sign Up** and choose **"Continue with GitHub."** This lets the robot
   look inside your backpack.
3. Click **"Add New Project."**
4. Find **BGA Website** in the list and click **Import.**
5. Don't change any of the boxes. Just click the big **Deploy** button.
6. Wait a minute. The robot is building your site. 🤖

✅ **You're done with Part 2 when:** Vercel shows confetti and a link to your site!
   (The forms won't send emails yet — that's Part 3 and 4.)

---

## Part 3: Hire the mail carrier (Resend)

This makes the website able to send emails (like when someone asks for tickets).

1. Go to **resend.com** and make a free account.
2. Add your website's name (**theblackgirladvocate.org**) and follow their steps
   to prove it's yours. (This part needs a grown-up who knows the website's
   settings — it's called "DNS." Don't worry if that sounds weird!)
3. Resend will give you a secret password called an **API key.** It looks like a
   long string of letters and numbers. Copy it and keep it safe. 🔑

✅ **You're done with Part 3 when:** you have your Resend API key copied.

---

## Part 4: Open the giant notebook (Airtable)

This writes down everyone who fills out a form so you don't lose anyone.

1. Go to **airtable.com** and make a free account.
2. Make a new **Base** (that's a notebook). Name it whatever you like.
3. Inside it, make these tables (these are pages in the notebook). Spell the
   names EXACTLY like this:
   - `Applications`
   - `Elite Eight Applications`
   - `HBCU Interest`
   - `Tickets`
   - `Contact`
   - `Newsletter`
   - `Book Donations`
   - `Event Notify`
   *(The file called `BACKEND.md` lists what columns each one needs. Ask a
   grown-up or Claude to help set up the columns.)*
4. Airtable will give you **two secret things**: an **API key** and a **Base ID.**
   Copy both. 🔑🔑

✅ **You're done with Part 4 when:** you have your Airtable API key and Base ID copied.

---

## Part 5: Give the robot the secret passwords

Now we tell Vercel all the secrets so the forms work.

1. Go back to **vercel.com** and open your **BGA Website** project.
2. Click **Settings**, then **Environment Variables.**
3. Add each secret below. For each one, type the **Name** on the left and paste
   the **secret value** on the right, then click **Save.**

   | Name (type this exactly) | What to paste |
   |--------------------------|---------------|
   | `RESEND_API_KEY`         | your Resend key from Part 3 |
   | `AIRTABLE_API_KEY`       | your Airtable key from Part 4 |
   | `AIRTABLE_BASE_ID`       | your Airtable Base ID from Part 4 |

   *(Peek at `BACKEND.md` — there may be a couple more names listed, like the
   "from" email address. Add any it mentions the same way.)*

4. After saving, go to the **Deployments** tab and click **Redeploy** so the
   robot picks up the new secrets. 🔄

✅ **You're done with Part 5 when:** the site redeploys with no red error messages.

---

## Part 6: Give your site its real name (the domain)

Right now your site has a funny Vercel link. Let's use the real one.

1. In Vercel, open your project → **Settings** → **Domains.**
2. Type **theblackgirladvocate.org** and click **Add.**
3. Vercel tells you a couple of settings to change at the place where you bought
   the website name. A grown-up can copy those in. 🏠

✅ **You're done when:** typing theblackgirladvocate.org shows your website!

---

## 🎉 You did it!

Test it by filling out a form (like asking for a ticket). The email should go to
**ariel@theblackgirladvocate.org** and a row should appear in Airtable.

If a form doesn't work, it's almost always a secret password typed wrong in
Part 5, or a table name spelled differently in Part 4. Go back and check the
spelling — computers are very picky! 🤓

Need help with any step? Just ask Claude.
