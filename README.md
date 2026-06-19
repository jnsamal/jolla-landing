# Jolla Phone (Sep-II 2026) — Landing Page

<img width="500" height="500" alt="jolla_phone_hero_double-removebg-preview" src="https://github.com/user-attachments/assets/a3e633dd-e951-4550-96d7-656f0bc2071c" />

A minimal, Nordic-styled Next.js 15 landing page for the upcoming Jolla
Phone, built with TypeScript and Tailwind CSS. Content is sourced from the
official product page: https://commerce.jolla.com/products/jolla-phone-sep-ii-2026

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Self-hosted fonts via Fontsource: Familjen Grotesk (display), Hanken
  Grotesk (body), JetBrains Mono (utility/specs)

## Structure

- `app/page.tsx` — assembles all sections
- `app/components/` — Header, Hero, DesignSection, PrivacySection
  (with the interactive Privacy Switch demo), SpecsSection,
  CommunitySection, OrderSection, FaqSection, Footer
- `lib/data.ts` — single source of truth for all product copy and specs

## Notes

This is an unofficial, fan-built concept page for demonstration purposes
and is not affiliated with or endorsed by Jolla.
