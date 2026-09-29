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
| `pages/work/*.md` | One page per file under `/work/*`; frontmatter sets the button (`cta`), the FAQ (`faq: true`) and full-width text (`wide: true`) |
| `pages/date/{me,you}.md` | `/date/*` (noindex) |
| `pages/faq.md` | FAQ shown on advisorship and consultancy, one `##` heading per question |
| `now/YYYY-MM-DD.md` | `/now` entries: the latest is `/now`, all of them form the timeline and the RSS feed |
| `cards.json` | Link cards on `/work`, `/projects`, `/photography`, `/projects/cemetery` (`section`), in file order |
| `recommendations.json`, `stack.json` | Testimonials and `/stack`, in file order |
| `flying.json` | Foreflight stats on `/dashboard` (updated by hand) |

Card `logo` values are file names in `src/images/logos` (the build fails on an unknown name). Site title,
navigation and footer links are in `src/lib/site.ts`; short page intros are in the page files.

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
public/             # llms.txt, agent.md, favicon, avatars
```

## Contact forms

`/contact/{generic,photography,advisorship,consultancy,date}` share one config-driven form
(`src/lib/contact.ts`). `POST /api/send` rejects cross-origin requests, wrong content types and bodies over
8 KB, silently drops submissions with the honeypot filled, requires at least 3 seconds to fill the form,
verifies the Turnstile token, validates with zod, then sends through Customer.io. It returns a real error
when any step fails.

## Development

Uses Node 24 and pnpm 10.27.0 (pinned in `package.json`, which Vercel follows).

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static site + Vercel function in .vercel/output
pnpm typecheck
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
