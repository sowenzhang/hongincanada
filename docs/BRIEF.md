# BRIEF.md — hongincanada.com

The judge. Every route is scored against this.

## 1. Scope / sitemap (keep ALL existing content — redesign only)
Home + AI-workflow tool page + 8 standalone blog posts + Mosaic series (landing + 4 parts + full-series) + AI series (landing + layout + 10 parts + full-series). 28 routes total:
- `/` — home (hero, projects, writing index, about/journey, interests, contact)
- `/ai-workflow-review`
- `/blog/app-flow-first-pilot`, `/blog/building-deckmark`, `/blog/introducing-crossit`, `/blog/loop-engineering`, `/blog/minibreaks-pivot`, `/blog/nearbygame-pivot`, `/blog/nearbygame-what-i-learned`, `/blog/why-i-build-nocloud-chat`
- `/mosaic`, `/mosaic/the-problem-with-apps-today`, `/mosaic/adaptive-journeys`, `/mosaic/app-flow-under-the-hood`, `/mosaic/near-future-and-beyond`, `/mosaic/full-series`
- `/series`, `/series/full-series`, `/series/part-1..10-*`

## 2. Audience
Recruiters, hiring managers, and fellow engineers evaluating Hong — a Product Builder / Engineering Leader with an HCI master's who ships AI-built products 0→1. They skim first (can he build? is he senior? is he credible?), then some read deeply.

## 3. Goal
Convince a hiring/peer audience that Hong is a credible, senior, prolific product-minded engineer — AND give a genuinely pleasant long-form reading experience so his writing lands.

## 4. Positioning
Professional, impressive, memorable. Reads as a senior engineer/leader's editorial home — calm confidence, not flashy. Distinct from generic AI-gradient dev portfolios.

## 5. Primary action
Two-tier: (a) READ his writing (blogs/series) with great eye-flow; (b) CONNECT / evaluate — reach the contact + profile links (email, GitHub, LinkedIn). Home routes drive both; article routes drive deep reading + a soft connect CTA.

## 6. SEO / GEO needs
Preserve every existing `<title>`, meta description, canonical, OG/Twitter, and JSON-LD (Person on home, BlogPosting on articles). Keep heading hierarchy, anchors, prev/next rel links, RSS alternate. Terms: AI product development, HCI, engineering leadership, building with AI, SvelteKit.

## 7. Constraints
- Stack fixed: SvelteKit 2 + Svelte 5 (runes) + Tailwind 3 + @tailwindcss/typography, Node adapter.
- Preserve all page CONTENT verbatim; redesign presentation only.
- Preserve TOC behavior, heading anchors + scroll offsets, series prev/next.
- Accessibility: WCAG AA contrast, visible focus, 44px targets, respect prefers-reduced-motion.
- No heavy animation deps. Don't hand-edit build/.

## 8. Visual ambition
Confident / refined-editorial (restrained, not maximal). Serif display + crisp sans, generous whitespace, ONE restrained ink-blue accent, light-default with a polished dark mode. Typographic hero (no faux-photographic imagery). Reading measure ~66ch for body — eye-flow is the #1 quality bar for article routes.

## Data honesty
All content is Hong's own real content; projects/links are real (NoCloud, NearbyGame, MiniBreaks, CrossIt, Microsoft Store apps). No invented data or fake brands.
