# Project Roadmap

- **Routes:** 28
- **Stack:** sveltekit
- **Total time:** 3h 24m

## Per-route quality
| Route | Build attempts | Judge rounds | Score | Verdict |
|---|---|---|---|---|
| / | 4 | 1 | 7.8 | accept |
| /ai-workflow-review | 1 | 1 | 7.8 | accept |
| /blog/app-flow-first-pilot | 1 | 1 | 8 | accept |
| /blog/building-deckmark | 1 | 1 | 8 | accept |
| /blog/introducing-crossit | 1 | 1 | 8 | accept |
| /blog/loop-engineering | 2 | 1 | 8 | accept |
| /blog/minibreaks-pivot | 1 | 1 | 8 | accept |
| /blog/nearbygame-pivot | 1 | 1 | 8 | accept |
| /blog/nearbygame-what-i-learned | 1 | 1 | 8 | accept |
| /blog/why-i-build-nocloud-chat | 1 | 1 | 8 | accept |
| /mosaic | 1 | 1 | 8 | accept |
| /mosaic/adaptive-journeys | 1 | 1 | 8 | accept |
| /mosaic/app-flow-under-the-hood | 1 | 1 | 8 | accept |
| /mosaic/full-series | 1 | 1 | 8 | accept |
| /mosaic/near-future-and-beyond | 1 | 1 | 8 | accept |
| /mosaic/the-problem-with-apps-today | 1 | 1 | 8 | accept |
| /series | 1 | 1 | 8 | accept |
| /series/full-series | 1 | 1 | 8 | accept |
| /series/part-1-can-you-build-with-ai | 1 | 1 | 8 | accept |
| /series/part-10-future-ai-development | 1 | 1 | 8 | accept |
| /series/part-2-why-use-ai | 1 | 1 | 8 | accept |
| /series/part-3-tools-and-setup | 1 | 1 | 8 | accept |
| /series/part-4-crafting-idea-mvp | 1 | 1 | 8 | accept |
| /series/part-5-designing-ui-ux | 1 | 1 | 8 | accept |
| /series/part-6-writing-code-ai | 1 | 1 | 8 | accept |
| /series/part-7-adding-advanced-features | 1 | 1 | 8 | accept |
| /series/part-8-before-deployment | 1 | 1 | 8 | accept |
| /series/part-9-lessons-learned | 1 | 1 | 8 | accept |

## Site-level
- **Distinctiveness:** 8/10
- **SEO:** 8/10
- **Accessibility:** 8/10
- **Performance:** 8/10

## Challenge
- **Outcome:** applied 2 improvements over 3 rounds
- **Round 1:** Applied one improvement
  - **Applied:** Add a 'Skip to main content' skip link (WCAG 2.4.1 Bypass Blocks, Level A) — Highest-value cheap win: it satisfies a Level A criterion the site was failing, benefits every route (global layout), and helps keyboard/screen-reader users skip the fixed nav on every page. Implemented as sr-only until focused, 44px target, targeting a focusable #main-content.
  - **Candidates considered:**
    - Add a 'Skip to main content' link as the first focusable element in the layout _(accessibility, small size, low risk, confidence 9/10)_
    - Preconnect + preload Google Fonts with font-display: swap _(UX, small size, low risk, confidence 7/10)_
    - Add aria-current=page to the active nav item _(accessibility, small size, low risk, confidence 6/10)_
  - **Rationale:** Chose the skip link over the font-preconnect perf tweak and aria-current because it closes a concrete Level A accessibility gap across the whole site at near-zero risk, versus incremental polish. Re-ran the home Tier-1 gate (9/9 pass, no overflow at 390/768/1440, no console errors) to confirm no regression.
- **Round 2:** Applied one improvement
  - **Applied:** Move Google Fonts from a render-blocking CSS @import to a <link> in <head> — The fonts were loaded via @import at the top of app.css, which hides them behind the app.css request (import chain) and delays first text paint. app.html already had the font preconnects, so moving to a <head> <link rel=stylesheet ... display=swap> lets the browser discover and fetch Fraunces/Inter earlier — a real, low-risk LCP/first-paint win. Verified both fonts still load and render on headings/body.
  - **Candidates considered:**
    - Move Google Fonts @import in app.css to a <link> in <head> (fonts already preconnected) _(performance, small size, low risk, confidence 8/10)_
    - Replace apple-touch-icon .placeholder with a real 180x180 PNG _(UX, small size, low risk, confidence 5/10)_
    - Add a web-app manifest (site.webmanifest) _(maintainability, small size, low risk, confidence 5/10)_
  - **Rationale:** Picked the font-loading fix over the icon/manifest items because it is a genuine, verifiable performance win (removes a render-blocking @import chain on every page) at near-zero risk, whereas a quality apple-touch-icon needs real image tooling and the manifest needs icon assets. Verified Fraunces + Inter still load (document.fonts.check true, correct computed fonts), re-ran the blog Tier-1 gate (9/9, no overflow 390/768/1440, no console errors), and also tightened the new MorePosts 'All posts' link to a 44px target found during the recheck.
- **Round 3:** Banked (no change)
  - **Candidates considered:**
    - Replace apple-touch-icon .placeholder with a real 180x180 PNG + add site.webmanifest _(UX, medium size, low risk, confidence 4/10)_
    - Consolidate nested <main>/<footer> landmarks across all article pages into one _(accessibility, medium size, medium risk, confidence 4/10)_
    - Add aria-current=page to the active nav link _(accessibility, small size, low risk, confidence 5/10)_
  - **Rationale:** The two highest-value cheap wins are already applied (skip link, font-load fix). Each remaining candidate has a disqualifying caveat for a bounded safe round: a proper apple-touch-icon and web-app manifest require generating real square icon assets (image tooling, quality risk); consolidating the nested <main>/<footer> landmarks is a structural refactor touching every article page (regression risk not worth it here); aria-current is genuinely low value. Banking per the guidance rather than chasing a marginal or risky change. All are documented in the report's ROADMAP/audit improvements for a deliberate follow-up.

## Deferred P3 nits
- **/:** Lower writing cards are visually uniform.

## Recommended next steps

1. **P0 — Serve one canonical host at the edge.** Every page now canonicalizes to `https://www.hongincanada.com` and the sitemap/robots were aligned to `www`, but nothing yet 301-redirects the apex (`hongincanada.com`) to `www`. Add a host redirect in the Node adapter / reverse proxy so search engines and shares never split link equity across two hosts.
2. **P1 — Ship real touch icons + a web-app manifest.** `static/apple-touch-icon.png.placeholder` is a 170-byte stub. Generate a proper 180×180 (and 192/512) PNG set from `favicon.svg`, wire a `site.webmanifest` (name, theme-color `#2452d6`, icons), and reference it in the layout. Fixes iOS home-screen bookmarks and makes the site installable/shareable.
3. **P1 — Trim render-blocking third-party CSS.** Font Awesome's full CDN stylesheet loads on every route just for a handful of glyphs. Replace it with a self-hosted subset or inline SVG icons to cut first-paint cost — the single biggest remaining performance lever after the font-load fix.
4. **P2 — Consolidate content landmarks.** Article pages nest their own `<main>`/`<footer>` inside the layout's, so assistive tech sees two content landmarks per page. Collapse to one primary `<main>` (the layout wrapper) and one `<footer>` for a cleaner landmark tree; add `aria-current="page"` to the active nav item while there.
5. **P2 — Make the writing index scan as curated.** The home "Writing" grid and the new "More from the blog" cards are visually uniform. Introduce light differentiation (category tint, featured/latest emphasis, or reading time) so recruiters/engineers can triage posts faster — directly serving the brief's primary "easy to read, good eye-flow" and secondary "highlight skills" goals.
