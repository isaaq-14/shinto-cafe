# Shinto website

Next.js (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui-style components on Radix. Fully static, so it is fast and cheap to host.

## Run it

```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_SITE_URL to the real domain
npm run dev                  # http://localhost:3000
npm run build && npm start   # production check
npm run typecheck
```

Deploy to Vercel (or any Node host / static export) and set `NEXT_PUBLIC_SITE_URL`. Until it is set, canonical URLs, the sitemap and social previews point at `https://www.example.com`.

## Where things live

| To change...                              | Edit                          |
| ----------------------------------------- | ----------------------------- |
| Address, phone, hours, links, cuisines    | `src/data/site.ts`            |
| Dishes, prices, veg/egg/non-veg tags      | `src/data/menu.ts`            |
| The five "First-timers" tiles             | `src/data/picks.ts`           |
| Colours, spacing, section styles          | `src/app/globals.css`         |
| Page order / sections                     | `src/app/page.tsx`            |
| Buttons, tabs, switch, badge (shadcn-style) | `src/components/ui/*`       |
| Logo (traced vector)                      | `src/data/logo.ts`            |

Hours in `site.ts` also drive the live "Open now" pill (in Bengaluru time) and the Google structured data, so update them in one place.

## How it is put together

- `MenuProvider` (client) holds the selected tab and the vegetarian filter, so the "First-timers" tiles can jump straight to a dish in the menu.
- Menu tabs and the veg switch use Radix primitives, so keyboard navigation and screen-reader roles come for free.
- Fonts (Bagel Fat One, Bricolage Grotesque) are self-hosted through Fontsource. No requests to Google Fonts at runtime.
- SEO: metadata, Open Graph image (`opengraph-image.tsx`), `sitemap.ts`, `robots.ts` and `CafeOrCoffeeShop` JSON-LD are generated from `site.ts`.
- Respects `prefers-reduced-motion` and the visitor's light/dark preference.
- More shadcn components: `components.json` is set up, so `npx shadcn@latest add dialog` etc. works.

## Before launch

1. Have the café verify every price and every veg/egg/non-veg marker in `menu.ts` (read from screenshots).
2. Replace the traced logo in `src/data/logo.ts` with the original SVG if they have it.
3. Add real photos to `public/images/` (food, both floors, the balcony) and use `next/image`. The design currently relies on type and colour.
4. Set the production domain in `NEXT_PUBLIC_SITE_URL`; add a Swiggy link in `site.ts` if wanted.
5. Confirm the phone number and hours; add the site to the Google Business Profile.
