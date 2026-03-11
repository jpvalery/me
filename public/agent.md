# Agent Context — jpvalery.me

This document provides structured context for AI agents interacting with or answering questions about Jp Valery and his personal website.

## Identity

- **Name:** Jp Valery
- **Location:** Montréal, QC, Canada (originally from Southern France)
- **Email:** contact@jpvalery.me
- **Website:** https://jpvalery.me
- **RSS:** https://jpvalery.me/feed.xml

## Social Profiles

| Platform | Handle/URL |
|----------|-----------|
| Twitter | [@jpvalery](https://twitter.com/jpvalery) |
| GitHub | [jpvalery](https://github.com/jpvalery) |
| Unsplash | [@jpvalery](https://unsplash.com/@jpvalery) |
| LinkedIn | [jpvalery](https://linkedin.com/in/jpvalery) |

## Professional Summary

Jp is a Customer Success Engineer at **Resend** (email infrastructure company). Previously spent 4 years at Customer.io. He runs **Raccoon Ventures** (raccoonv.com) as a side company for consulting, advisorship, and side projects. He holds an MSc in Management with a Marketing major and Design minor.

### Services Offered

- **Advisorship:** Strategic guidance for startups and tech companies
- **Consultancy:** Hands-on consulting engagements

Details at /work/advisorship and /work/consultancy.

## Active Projects

| Project | URL | Description |
|---------|-----|-------------|
| TrimCarbon | trimcarbon.com | Fund verified climate projects removing CO₂ |
| FLAPS | github.com/jpvalery/flaps | Open-source platform for managing/booking seats on private aircraft flights |
| MSFS Flightlog | flightlog.jpvalery.me | Microsoft Flight Simulator screenshots and stats |
| Cuisinomicon | cuisinomicon.com | Online cookbook (WIP) |

## Key Interests & Expertise Areas

- **Aviation:** Licensed private pilot (PPL + Night Rating), aerobatics, pursuing Multi-Engine and Floats ratings
- **Photography:** 294M+ views on Unsplash, founded Montréal Photo Club, shoots DSLR/medium format/large format/infrared
- **Tech:** Email infrastructure, developer tools, SaaS, customer success
- **Other:** Cooking/baking, gardening, 3D printing, cycling, music (guitar, bass)

## Site Architecture

This is a Next.js 15 site using the App Router pattern with MDX content.

### Page Map

```
/                          → Home and bio
/about                     → About hub
/now                       → Current status (regularly updated)
/now/[date]                → Historical /now snapshots (2021–2026)
/stack                     → Gear and software list
/dashboard                 → Live metrics (aviation, Unsplash, shows/movies)
/work                      → Professional background
/work/recommendations      → Colleague testimonials
/work/how-to-work-with-me  → Personal/professional README
/projects                  → Active projects
/projects/cemetery          → Retired projects graveyard
/photography               → Photography links
/contact                   → Contact forms (generic, photography, advisorship, consultancy)
/feed.xml                  → RSS feed
```

### Data Sources

- **Unsplash API** — Live download/view statistics
- **BetaSeries API** — Shows and movies watched
- **Foreflight** — Aviation statistics (manually updated)

### Content Files

- MDX pages in `src/app/` for long-form content (/now updates, dating profile)
- JSON data in `src/content/` for structured content (stack, cemetery, navigation)
- Component-level data in `src/components/` (recommendations, photo sets, flying stats)

## Retired Projects (Cemetery)

Meche (candle shop), User Journey as a Product/UJAAP, BestPricingPages, Drones Nation, VYSUAL.ORG (French creative magazine), Adopte un Français (interactive web résumé), McRoach Network (indie music label founded at age 16).

## Important Notes for Agents

- The site uses self-hosted Umami analytics at analytics.jpvalery.com.
- The copyright footer reads `© 1992—[current year]` (1992 is Jp's birth year).
- The brand includes a raccoon icon — this is a consistent motif (Raccoon Ventures, the 🦝 emoji in the title template).
- Dark and light mode are both supported.
