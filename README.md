# jpvalery.me

Personal website of Jp Valery — portfolio, projects, photography, and more.

Live at [jpvalery.me](https://jpvalery.me)

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org) (App Router, Turbopack)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) with `@tailwindcss/typography` and `@tailwindcss/forms`
- **Content:** MDX via `@next/mdx` with `remark-gfm` and `rehype-highlight`
- **UI:** [Headless UI v2](https://headlessui.dev), `next-themes` for dark/light mode
- **Fonts:** JetBrains Mono, Departure Mono
- **Analytics:** [Umami](https://umami.is) (self-hosted)
- **Email:** [Customer.io](https://customer.io) transactional API
- **Linting:** [Biome v2](https://biomejs.dev)
- **Package Manager:** pnpm

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
│   ├── about/     # About hub (/now, /stack, /dashboard)
│   ├── contact/   # Contact forms (generic, photography, advisorship, consultancy)
│   ├── date/      # Dating profile (noindexed)
│   ├── now/       # /now page with historical timeline
│   ├── photography/
│   ├── projects/  # Active projects + cemetery
│   └── work/      # Work, recommendations, how-to-work-with-me
├── components/    # Reusable React components
├── content/       # JSON data (stack, cemetery, navigation)
├── images/        # Static images
├── lib/           # Utilities
└── styles/        # Global styles
public/            # Static assets
```

## Sections

- **Home** — Bio, social links, photo strip
- **About** — /now updates, gear/software stack, live dashboard
- **Work** — Professional background, recommendations, advisorship & consultancy
- **Projects** — Active projects (TrimCarbon, FLAPS, MSFS Flightlog, Cuisinomicon) and project cemetery
- **Photography** — Links to portfolio, archive, Montréal Photo Club, Unsplash
- **Contact** — Category-specific contact forms