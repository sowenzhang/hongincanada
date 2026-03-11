# Project Guidelines — hongincanada.com

## Stack
- **Framework**: SvelteKit 2 + Svelte 5 (runes) + TypeScript
- **Styling**: Tailwind CSS 3 with `class`-based dark mode, `@tailwindcss/typography`
- **Fonts**: Inter (sans), Playfair Display (serif) via Google Fonts
- **Icons**: Font Awesome 6.4.0 (CDN)
- **Deployment**: `@sveltejs/adapter-node`

## Commands
```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run check     # Type-check with svelte-check
npm run lint      # Prettier + ESLint
npm run format    # Auto-format with Prettier
```

## Architecture
- Static content portfolio site — no backend, no API
- All blog/series data is declarative TypeScript in `src/lib/data/`
- File-based SvelteKit routing under `src/routes/`
- Shared article template: `src/lib/components/BaseSeriesPage.svelte`
- Types in `src/lib/types/series.ts`

## Design Philosophy
- **Dark-first**: Default dark theme, light mode toggle. Immersive "entering my world" aesthetic.
- **Scroll-driven**: Sections reveal on scroll via Intersection Observer
- **Cursor trail**: Canvas-based particle trail on desktop (disabled on mobile + `prefers-reduced-motion`)
- **Performance**: 60fps animations, no heavy dependencies (vanilla Canvas API + Intersection Observer)
- **Accessibility**: All animations respect `prefers-reduced-motion`. Keyboard navigable. ARIA labels.

## SEO (DO NOT BREAK)
- Every page has: `<title>`, `<meta description>`, canonical URL, Open Graph, Twitter Card tags
- JSON-LD structured data (Person schema on home, BlogPosting on articles)
- Preserve all existing schema markup when editing pages

## Content
- Two article series: AI Development (10 parts) + Mosaic (4 parts) — each rendered as single long-form page
- Projects: Minibreaks.io, NearbyGame.com, Nocloud, FakeBlueScreen, FotoAssemblyLine
- Blog data files: `src/lib/data/seriesData.ts`, `src/lib/data/mosaicSeriesData.ts`

## Owner
- **Hong** — Engineering Manager with HCI background, product mindset
- GitHub: https://github.com/sowenzhang
- Site: https://www.hongincanada.com
