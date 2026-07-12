# DESIGN_SYSTEM.md — hongincanada.com ("Atelier" — left-rail engineering studio)

Serves BRIEF.md. Redesign of an existing SvelteKit portfolio/blog. User-confirmed intake:
**A genuinely new structural paradigm — a fixed left side menu, professional + impressive.**
**Mood = Serious/studio · Mode = Light default + polished dark toggle · Motion = Subtle · Accent = Teal.**

This is the second redesign. The previous pass ("Refined Editorial") only changed theme/font/color.
This pass changes the **layout paradigm**: a persistent left navigation rail replaces the top nav bar.

## Stack
SvelteKit 2 + Svelte 5 (runes) + TypeScript + Tailwind CSS 3 + @tailwindcss/typography. Node adapter. (Fixed — existing project.)

## Layout paradigm — the headline change
- **Fixed left sidebar rail** on desktop (`lg+`), width `--rail-w` (16rem). Content column is offset right via
  the `.content-shell` class (`@media (min-width:1024px){ padding-left: var(--rail-w) }`).
- **Mobile / tablet (`< lg`):** rail collapses. A slim top bar (h-16) exposes a hamburger that opens a
  **slide-in drawer** carrying the identical rail content (shared via a Svelte 5 `{#snippet railBody()}`).
- **Rail anatomy (top → bottom):** brand (avatar + "Hong" + mono role) → `EXPLORE` group
  (Home / Projects / Writing / About) → `SERIES & TOOLS` group (AI Review / Minibreaks / Mosaic) →
  `LATEST` group (3 most recent blog posts, sorted by `date` in `blogPosts.ts`, + an "All writing" link
  to the `/blog` archive) → `mt-auto` footer (Get-in-touch teal CTA + GitHub/LinkedIn/Strava socials +
  theme toggle). The rail is `overflow-y-auto` as a last-resort fallback, but is height-responsive so
  that fallback rarely triggers.
- **Height-responsive rail (avoids the "double scrollbar" look):** the footer (CTA + socials + theme
  toggle) is always visible — it's the priority. Section rhythm (`.rail-section`/`.rail-section-first`/
  `.rail-bottom` margins, `.rail-link`/`.rail-post` min-heights, `.rail-label` padding) is driven by CSS
  custom properties on `.rail` (`--rail-gap`, `--rail-link-h`, etc.) that step down at `@media (max-height:
  900px)` for laptops with browser chrome. Below `@media (max-height: 820px)`, the `LATEST` group
  (`.rail-latest`) is hidden entirely rather than shrinking links further or scrolling — progressive
  disclosure: optional content drops out before the pinned footer would be pushed off-screen.
- **Active state:** `aria-current="page"` drives a teal left-edge bar + soft teal surface on the current rail link.

## Typography
- **Display / headings:** `Fraunces` (editorial serif w/ optical sizing). Weights 400/500/600/700. Name, section titles, article H1/H2.
- **Body / UI:** `Inter`. Weights 400/500/600/700.
- **Mono (labels):** `JetBrains Mono` — **new**. Used for eyebrows, rail nav labels, group headers (`EXPLORE`/`READ`), and metadata. This is the studio/engineering signature of the redesign. Weights 400/500/600.
- Body reading: 18px, line-height 1.75, measure ~66ch (`max-w-[42rem]`) on article routes.
- Type scale: hero 3.5–5rem; H2 ~1.9rem; H3 ~1.3rem; body 1.125rem; small 0.875rem.
- Letter-spacing: tight on large serif display (-0.02em); wide + uppercase on mono eyebrows/labels.

## Color tokens (CSS variables, class-based dark mode)
Graphite neutrals + a single **teal** accent (replaces the previous ink blue).

Light (default):
- `--bg` #F7F7F6 · `--surface` #FFFFFF · `--surface-2` #F1F1EF
- `--text` #17181A · `--muted` #565B62 · `--faint` #8A9099
- `--border` rgba(17,17,17,0.10) · `--border-strong` rgba(17,17,17,0.16)
- `--accent` #0F766E (teal) · `--accent-strong` #0B5A54 · `--accent-soft` rgba(15,118,110,0.08)
Dark:
- `--bg` #0A0B0D · `--surface` #131519 · `--surface-2` #1A1D22
- `--text` #ECEDEA · `--muted` #A0A6AE · `--faint` #6B7280
- `--border` rgba(255,255,255,0.10) · `--border-strong` rgba(255,255,255,0.18)
- `--accent` #2DD4BF · `--accent-strong` #5EEAD4 · `--accent-soft` rgba(45,212,191,0.12)

One accent only across chrome. Exception: the **home page** retains its intentional multi-hue project/writing
chips (deliberate, curated — not rainbow gradient text). All other routes use teal exclusively.

### `--on-accent` (text-on-accent contrast token)
The dark-mode accent (#2DD4BF) is a bright teal chosen for visibility against dark backgrounds — but
that brightness fails WCAG AA when paired with white text (1.86:1, needs ≥4.5:1). `--on-accent` decouples
"the color of text placed on an accent-colored background" from the old white/black assumption:
- Light: `--on-accent` #FFFFFF (light-mode accent #0F766E is dark enough — 5.47:1 with white)
- Dark: `--on-accent` #062420 (deep teal-black — 8.8:1+ with the dark-mode accent/accent-strong)

Any button/badge with `background: var(--accent)` (or `--accent-strong`) must use `color: var(--on-accent)`
instead of a hardcoded `text-white`/black class, so it stays readable when the theme toggles.

## Layout & spacing
- Container: `max-w-6xl` for landing sections; `max-w-[42rem]` reading column for articles.
- Generous vertical rhythm: sections `py-24`/`py-28`.
- Cards: flat studio style — 1px border, subtle surface, `rounded-xl`, hover = border+shadow lift (no glass blur).
- Thin hairline rules (`--border`) separate sections instead of heavy boxes.
- `--rail-w: 16rem` is the single source of truth for rail width + content offset.

## Components
- **Rail (`.rail`, `.rail-link`, `.mono-label`):** fixed left nav on desktop; drawer on mobile. `.rail-link`
  enforces min-height 44px and renders the aria-current active bar. Group headers use `.mono-label`.
- **Content shell (`.content-shell`):** wraps every route; applies the left offset at `lg+`. (A dedicated CSS
  class, not a Tailwind `pl-*` utility — the utility was JIT-missed and computed to 0.)
- **Eyebrow (`.eyebrow`):** now mono, uppercase, wide-tracked, teal.
- **Hero:** typographic — large serif name + concise positioning line + primary actions.
- **Article template (BaseSeriesPage + blog posts):** centered ~66ch column, serif H1/H2, sans body,
  teal accent left-rule on H2, quiet sticky TOC, breadcrumbs, prev/next. SEO + JSON-LD `BlogPosting` preserved.
- **Buttons/links:** primary = solid teal, secondary = hairline outline; text links hover-underline in teal.

## Motion
- Subtle only: entrance fade/translate (200–300ms), hover transitions (150–200ms), drawer slide (transform).
- Animate transform/opacity only. Full `prefers-reduced-motion` support (disable transitions/animation).

## Accessibility
WCAG AA contrast, visible teal focus rings, 44px touch targets (incl. rail links), keyboard order = visual
order, skip link, `aria-current` on active rail item, drawer is keyboard-dismissible, semantic headings preserved.

## Non-negotiables preserved
All content verbatim; every `<svelte:head>` (SEO/meta/OG/Twitter/JSON-LD); TOC/anchor/scroll-offset behavior;
series prev/next; RSS alternate; analytics/adsense/verification tags.

## Routes added in this pass
- `/blog` — a writing archive/index page listing every post from `blogPosts.ts` (newest first, with
  publish dates + `Blog` JSON-LD). Serves as the "View all writing" target from the home page, the rail's
  "All writing" link, and the `MorePosts` "All posts" link.
- Home page condensed: tighter section rhythm (`py-16`), the Writing grid trimmed to the 4 most recent
  posts + the two series hubs (with a "View all writing" CTA), and a new **Free AI Workflow Review** feature
  banner between Projects and Writing linking to `/ai-workflow-review`.
