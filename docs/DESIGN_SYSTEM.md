# DESIGN_SYSTEM.md — hongincanada.com (Refined Editorial)

Serves BRIEF.md. Redesign of an existing SvelteKit portfolio/blog. User-confirmed intake:
**Mood = Serious/editorial · Mode = Light default + polished dark toggle · Motion = Subtle · Accent = Ink blue.**

## Stack
SvelteKit 2 + Svelte 5 (runes) + TypeScript + Tailwind CSS 3 + @tailwindcss/typography. Node adapter. (Fixed — existing project.)

## Typography
- **Display / headings:** `Fraunces` (editorial serif w/ optical sizing) — distinctive, senior, memorable. Weights 400/500/600. Used for name, section titles, article H1/H2.
- **Body / UI:** `Inter` — crisp, professional sans. Weights 400/500/600/700.
- **Mono (code):** `ui-monospace` system stack.
- Body reading: 18px (`prose-lg`-ish), line-height 1.75, measure ~66ch (`max-w-[42rem]`). This measure is the #1 eye-flow lever for article routes.
- Type scale: hero 3.5–5rem; H2 ~1.9rem; H3 ~1.3rem; body 1.125rem; small 0.875rem.
- Letter-spacing: tight on large serif display (-0.02em); normal on body.

## Color tokens (CSS variables, class-based dark mode)
Light (default):
- `--bg` #FCFCFB (warm paper) · `--surface` #FFFFFF · `--surface-2` #F6F5F2
- `--text` #1A1A1A · `--muted` #565B62 · `--faint` #8A9099
- `--border` rgba(17,17,17,0.10) · `--border-strong` rgba(17,17,17,0.16)
- `--accent` #2452D6 (ink blue) · `--accent-strong` #1B3FAE · `--accent-soft` rgba(36,82,214,0.08)
Dark:
- `--bg` #0D0E11 · `--surface` #15171B · `--surface-2` #1B1E23
- `--text` #ECEDEA · `--muted` #A0A6AE · `--faint` #6B7280
- `--border` rgba(255,255,255,0.10) · `--border-strong` rgba(255,255,255,0.18)
- `--accent` #7DA0FF · `--accent-strong` #A8C0FF · `--accent-soft` rgba(125,160,255,0.12)

One accent only. No multi-hue gradient text. Category tags may use a single muted tint, not rainbow.

## Layout & spacing
- Container: `max-w-6xl` for landing sections; `max-w-[42rem]` reading column for articles.
- Generous vertical rhythm: sections `py-24`/`py-28`; clear whitespace between blocks.
- Cards: flat editorial style — 1px border, subtle surface, `rounded-xl`, hover = border+shadow lift (no glass blur).
- Thin hairline rules (`--border`) to separate editorial sections instead of heavy boxes.

## Components
- **Nav:** minimal, hairline bottom border, serif wordmark, light by default; solidifies on scroll.
- **Hero:** typographic — large serif name + concise positioning line + primary actions. No animated rainbow mesh; at most a quiet static texture + one subtle entrance fade.
- **Article template (BaseSeriesPage + blog posts):** centered ~66ch column, serif H1/H2, sans body, comfortable line-height, accent left-rule on H2 (thin, ink blue), quiet TOC. Prev/next + SEO preserved.
- **Buttons/links:** text links underlined on hover with accent; primary button = solid accent, secondary = hairline outline.

## Motion
- Subtle only: entrance fade/translate (200–300ms), hover transitions (150–200ms), animate transform/opacity.
- Full `prefers-reduced-motion` support (disable transitions/animation).
- Retain a tasteful, low-key hero entrance; drop the multi-stage cinematic gradient sequence.

## Accessibility
WCAG AA contrast, visible focus rings (accent), 44px touch targets, keyboard order = visual order, semantic headings preserved.

## Non-negotiables preserved
All content verbatim; SEO/meta/OG/JSON-LD; TOC/anchor/scroll-offset behavior; series prev/next; RSS alternate.
