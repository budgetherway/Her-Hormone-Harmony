# Her Hormone Harmony

A Next.js blog for the Her Hormone Harmony brand: cycle syncing, PCOS,
cortisol, and hormone-health content, built to funnel readers toward the
free *7-Day Hormone Balancing Food Guide* and the paid *Complete Cycle
Syncing Handbook*.

See `PROJECT-BRIEF.md` for the full content strategy and `WRITING-GUIDE.md`
for the voice and writing rules every article should follow.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS**, configured with the brand's actual logo colors as design tokens
- **MDX** content collection (no CMS, no database, posts are files)
- Deploys cleanly to **Vercel** with zero extra configuration

## Running it locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

To check that everything builds cleanly (the same check Vercel runs):

```bash
npm run build
```

## Project structure

```
app/                    Pages (App Router)
  page.tsx              Homepage
  blog/                 Blog index + individual post pages
  category/[category]/  Phase/category archive pages
  about/, contact/, privacy-policy/, affiliate-disclosure/
  api/contact/           Contact form handler (placeholder, see below)
components/             Header, Footer, PhaseWheel, NewsletterBox, HandbookCTA, etc.
content/posts/          Blog posts as .mdx files
lib/
  categories.ts         The 11 content categories from the project brief
  posts.ts              Reads and parses posts from content/posts/
  constants.ts           Free guide + Handbook titles and Gumroad links
public/images/logo.jpg  The actual brand logo
```

## Adding a new article

1. Pick the next row from `300_Cycle_Syncing_Pinterest_Topics.xlsx`.
2. Create a new file in `content/posts/your-slug.mdx`.
3. Fill in the frontmatter (see `WRITING-GUIDE.md` section 8 for the exact
   fields and what each one means).
4. Write the body in Markdown. Drop `<NewsletterInline />` where the free
   guide opt-in should sit.
5. Follow `WRITING-GUIDE.md` for tone, sentence rules, and the quality
   checklist before publishing.

The homepage, blog index, category pages, and sitemap all pick up new
posts automatically. No other file needs to change.

## Before this goes live: open items

These are flagged rather than guessed at, since they need a real decision
or a real account, not a placeholder:

- **Contact form.** `app/api/contact/route.ts` currently just logs
  submissions to the console instead of sending anything. Not urgent,
  but messages sent through the Contact page won't reach an inbox until
  it's wired to a real email service (Resend, Postmark, etc.) using
  `.env.example` as a starting point.
- **Privacy Policy and Affiliate Disclosure pages** are solid working
  drafts, but a legal professional should review them before launch,
  especially if you expand beyond the US.
- **Contact email address** on the Contact page (`hello@herhormoneharmony.com`)
  is a placeholder. Update it to a real inbox you check.
- **Spreadsheet data quality (deferred):** the "General Cycle Syncing"
  and "Cortisol & Stress Management" categories in the source
  spreadsheet contain duplicated titles (same title/keyword repeated
  with only a fake "Strategy #251/#256..." counter changed). Known
  issue, to be fixed before writing that batch.

The free guide and the Handbook both link directly to their Gumroad
pages (`lib/constants.ts` → `FREE_GUIDE_URL` / `HANDBOOK_URL`). No email
service is required for either to work today; Gumroad handles checkout
and delivery for both.

## Deploying: GitHub + Vercel

1. **Push to GitHub.**
   ```bash
   git init
   git add .
   git commit -m "Initial Her Hormone Harmony site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/her-hormone-harmony.git
   git push -u origin main
   ```

2. **Import into Vercel.**
   - Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repo.
   - Vercel auto-detects Next.js. No build settings or environment
     variables are required to deploy.
   - Click **Deploy**.

3. **Custom domain.** In the Vercel project settings, add your domain
   (e.g. `herhormoneharmony.com`) under **Domains**, then update your
   DNS records as Vercel instructs.

4. **Update `metadataBase`.** In `app/layout.tsx` and `app/sitemap.ts`,
   the URL `https://herhormoneharmony.com` is used as a placeholder for
   SEO metadata and the sitemap. Update both to your actual domain once
   it's live.

From here on, every `git push` to `main` triggers an automatic Vercel
deployment. Writing a new article is: add the `.mdx` file, commit, push.
