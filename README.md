# jpvalery.me

Personal website of Jp Valery — portfolio, projects, photography, and more.

Live at [jpvalery.me](https://jpvalery.me)

## Tech Stack

- **Framework:** [Astro](https://astro.build), prerendered to static HTML
- **Hosting:** [Vercel](https://vercel.com); the contact endpoint is the only function
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/typography` and `@tailwindcss/forms`
- **Fonts:** JetBrains Mono, Departure Mono, Cartridge
- **Analytics:** [Umami](https://umami.is) (self-hosted)
- **Email:** [Customer.io](https://customer.io) transactional API, behind [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/)
- **Linting/formatting:** [Biome v2](https://biomejs.dev)
- **Package manager:** pnpm

## Content

Content lives in `src/content/` as Astro content collections (schemas in `src/content.config.ts`):

| Path | Used for |
| --- | --- |
| `pages/home.md` | Home page bio |
| `pages/work/*.md` | One page per file under `/work/*`; frontmatter sets full-width text (`wide: true`) |
| `pages/date/{me,you}.md` | `/date/*` (noindex) |
| `now/YYYY-MM-DD.md` | `/now` entries: the latest is `/now`, all of them form the timeline and the RSS feed |
| `cards.json` | Link cards on `/work`, `/projects`, `/photography`, `/projects/cemetery` (`section`), in file order; only cemetery cards may omit `href` (shown as offline) |
| `experience.json` | Career summary on `/work`, newest first |
| `recommendations.json` | Testimonials on `/work/recommendations`, in file order; the `featured` one is quoted on the home page |
| `flying.json` | Foreflight stats on `/dashboard` and the home page (updated by hand; `updated` is a `YYYY-MM-DD` date) |
| `imdb.json` | IMDB count on `/dashboard` (updated by hand, same date format) |

Card `logo` values are file names in `src/images/logos` (the build fails on an unknown name). Site title,
tagline, navigation, and footer links are in `src/lib/site.ts`; short page intros are in the page files.

`/llms.txt` and `/agent.md` are generated from this content at build time (`src/pages/llms.txt.ts`,
`src/pages/agent.md.ts`), so projects, experience, and ratings stay in sync with the pages. Edit the prose in
those files; edit the facts in `src/content/`.

## Project structure

```
src/
├── pages/          # Routes; everything is prerendered except /api/send
├── content/        # Markdown and JSON content (see above)
├── layouts/        # BaseLayout (meta tags, theme, analytics)
├── components/     # .astro components (Header, LinkCard, ContactForm, ...)
├── lib/            # site.ts (navigation), contact.ts (form definitions + zod schemas), logos.ts
├── images/         # Optimised images and logos
├── fonts/          # Local woff2 fonts
└── styles/         # global.css (Tailwind + fonts)
public/             # og.png, favicon, avatars
```

## Contact forms

`/contact/{generic,photography,date}` share one config-driven form
(`src/lib/contact.ts`). `POST /api/send` rejects cross-origin requests, wrong content types, and bodies over
8 KB (counted as bytes while streaming), silently drops submissions with the honeypot filled,
verifies the Turnstile token, validates with zod, then sends through Customer.io. Requests do not depend
on the visitor’s clock or how long the tab has been open. Both upstream requests have 10-second
timeouts and return recoverable JSON errors when a service is unavailable.

## Development

Uses Node 24 and pnpm 10.27.0 (pinned in `package.json`, which Vercel follows).

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static site + Vercel function in .vercel/output
pnpm typecheck
pnpm test         # contact and dashboard regression checks; all requests are mocked
pnpm format
```

### Environment

Declared in `astro.config.mjs` (`env.schema`) and read through `astro:env`. Locally they go in `.env` /
`.env.local`; on Vercel, in the project's environment variables. None is needed to build: the site key has
a default, and `/api/send` answers 503 until its runtime secrets are set.

| Name | Used | Purpose |
| --- | --- | --- |
| `PUBLIC_TURNSTILE_SITE_KEY` | build | Turnstile widget (defaults to the current widget's key) |
| `TURNSTILE_SECRET_KEY` | runtime | Turnstile verification |
| `CIO_APP_APIKEY` | runtime | Customer.io transactional API |
| `EMAIL_CONTACT_GENERIC`, `EMAIL_CONTACT_PHOTO`, `EMAIL_CONTACT_DATE` (optional) | runtime | Recipient per form type |
| `UNSPLASH_REFACTOR_TOKEN`, `BETASERIES_REFACTOR_API_KEY`, `BETASERIES_REFACTOR_ACCESS_TOKEN` | build | `/dashboard` stats, fetched when the site is built |

The Turnstile widget allows `jpvalery.me` and `localhost`; add another hostname (for example a Vercel
preview domain) in the Cloudflare dashboard before testing the form there.

### Dashboard snapshots

The dashboard and `/dashboard-stats.json` share one build-time fetch. API requests time out after
5 seconds. If an API fails, returns invalid counts, or has no credentials, the build retrieves the
last production deployment’s `/dashboard-stats.json` and preserves that source’s counts and original
refresh date. The JSON contains only public counts and dates. Each source needs one successful deploy
to seed its fallback; before that, the page labels it temporarily unavailable. No runtime database or
extra function is required.

### Fonts

JetBrains Mono files are subset to Latin (including French accents, IPA, and spacing and combining
accent marks), punctuation, currency, arrows, and mathematical symbols. Other scripts use the system
fallback. Hinting, OpenType features, and license metadata are retained. To regenerate after replacing
the files with full upstream fonts, install `fonttools[woff]==4.60.2` and run
`python3 scripts/subset-fonts.py`. Extend its Unicode ranges if adding another script; restore full
font files before widening an existing subset.
