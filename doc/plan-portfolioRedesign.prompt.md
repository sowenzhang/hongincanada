# Plan: Portfolio Redesign — Team Setup + Immersive Redesign

## TL;DR
Redesign hongincanada.com from a static 2005-style blog into an immersive, scroll-driven portfolio with animated entrance, cursor trail effects, and a narrative arc emphasizing Hong's product mindset + engineering + HCI background. First, set up a 3-agent team (Designer, Developer, Storyteller) via `.github/agents/`, then execute a phased redesign.

---

## Phase 0: Team Setup (Agent Customization)

Create `.github/agents/` with three custom agents and a shared `copilot-instructions.md`.

### 0.1 — Create `.github/copilot-instructions.md` (shared workspace instructions)
Project context all agents share:
- Stack: SvelteKit 2 + Svelte 5 + TypeScript + Tailwind CSS
- No backend — static content, declarative TS data
- Existing SEO (JSON-LD, OG, Twitter Cards) must be preserved
- Dark mode via `class` strategy, fonts: Inter + Playfair Display
- Existing article pages (`/series/*`, `/mosaic/*`) preserve current structure — redesign focuses on home/landing and global chrome (nav, footer, transitions)
- Build: `npm run dev`, `npm run build`, `npm run check`
- No tests exist — validate via `npm run check` and manual browser review

### 0.2 — Create `.github/agents/designer.agent.md`
**Role**: Visual/UX Designer
- **Tools**: `[read, search]` (read-only — proposes designs, never writes code)
- **Expertise**: Motion design, scroll-driven animation patterns, cursor effects, spatial layouts, color systems, typography, responsive design
- **Responsibilities**: Propose visual direction, animation choreography, layout wireframes (described in structured text), color/typography tokens, responsive breakpoints
- **Constraints**: Must consider performance (60fps, reduced-motion). Must work within Tailwind CSS + Svelte transitions/animations. Designs expressed as structured descriptions, not images.
- **Output**: Design specs as structured markdown — layout descriptions, animation timing/easing, color values, spacing tokens

### 0.3 — Create `.github/agents/developer.agent.md`
**Role**: Frontend Developer
- **Tools**: `[read, edit, search, execute]` (full implementation access)
- **Expertise**: SvelteKit 2, Svelte 5 runes, TypeScript, Tailwind CSS, CSS animations, Intersection Observer, scroll-driven animations, Canvas/WebGL (for cursor trails), performance optimization
- **Responsibilities**: Implement designs from Designer specs. Write Svelte components, CSS animations, scroll handlers. Ensure accessibility (`prefers-reduced-motion`, keyboard nav, ARIA). Optimize performance (60fps animations, lazy loading). Preserve existing SEO.
- **Constraints**: Must use existing stack (no new heavy dependencies unless justified). Animations must respect `prefers-reduced-motion`. Must pass `npm run check`.

### 0.4 — Create `.github/agents/storyteller.agent.md`
**Role**: Content Strategist / Storyteller
- **Tools**: `[read, search]` (read-only — proposes content, never writes code)
- **Expertise**: Narrative design, copywriting, personal branding, information architecture, content hierarchy
- **Responsibilities**: Craft the narrative arc of the portfolio — the "entering my world" story. Write copy, section headings, micro-copy, CTA text. Define content hierarchy and reading flow. Ensure Hong's identity (product mindset, engineering, HCI, building for real users) is woven throughout.
- **Constraints**: Copy must be authentic to Hong's voice (professional but approachable, engineer who cares about users). Keep concise — show don't tell. No jargon-heavy corporate speak.
- **Output**: Content specs — section copy, headlines, micro-interactions copy, narrative flow description

---

## Phase 1: Narrative & Content Architecture (Storyteller-led)

### 1.1 — Define the narrative arc
The "entering my world" concept. Visitor journey:
1. **Entrance/Hero**: Animated immersive entrance — name reveal with motion, a statement of identity
2. **The Builder**: Scroll reveals what Hong builds — live projects with interactive previews
3. **The Thinker**: Writing/ideas section — Mosaic vision, AI series, showing depth of thought
4. **The Journey**: Background/experience — timeline, but animated and scroll-driven
5. **The Human**: Interests, personality (cats, running, table tennis) — warmth and approachability
6. **Connect**: Contact/social — invitation to engage

### 1.2 — Write section copy
Headlines, body copy, micro-copy for each section. Emphasize:
- "Product mindset meets engineering craft"
- "HCI-trained, user-obsessed"
- "I build things that solve real problems"

---

## Phase 2: Visual Design (Designer-led)

### 2.1 — Design system updates
- **Color palette**: Keep blue/emerald gradient as accent, but introduce a darker, more sophisticated base (dark navy/charcoal default with light mode option)
- **Typography**: Keep Inter + Playfair Display but establish clearer hierarchy
- **Spacing/grid**: Define consistent spacing scale for the scroll-driven layout

### 2.2 — Animation choreography
- **Entrance animation**: Full-viewport hero with name/title animation (staggered text reveal, subtle particle/geometric background)
- **Scroll-reveal system**: Intersection Observer-based — elements fade/slide in as they enter viewport
- **Cursor trail**: Canvas overlay tracking mouse with a luminous/particle trail effect (subtle, not distracting). Disable on mobile and `prefers-reduced-motion`.
- **Section transitions**: Smooth parallax-like scroll between sections, each section is roughly full-height
- **Hover micro-interactions**: Project cards lift, links glow, subtle feedback everywhere

### 2.3 — Layout specs
- **Hero**: Full-viewport, centered name + tagline, animated background (subtle geometric patterns or gradient mesh), scroll indicator at bottom
- **Projects**: Card-based grid with hover state showing preview/description
- **Writing**: Featured cards with entry animations
- **Timeline**: Horizontal or vertical scroll-driven timeline with animated markers
- **Contact**: Clean, minimal, with social links as interactive icons

---

## Phase 3: Implementation (Developer-led)

### 3.1 — Global infrastructure
- **Files to modify**: `src/routes/+layout.svelte`, `src/app.css`
- Create `src/lib/components/CursorTrail.svelte` — Canvas-based cursor trail component
- Create `src/lib/components/ScrollReveal.svelte` — Intersection Observer wrapper for scroll animations
- Create `src/lib/components/AnimatedEntrance.svelte` — Hero entrance animation
- Update navbar to be transparent on hero, solid on scroll (already sticky, needs glassmorphism treatment)
- Add `prefers-reduced-motion` media query handling throughout

### 3.2 — Home page rebuild
- **File**: `src/routes/+page.svelte` — major rewrite
- Implement the narrative sections from Phase 1
- Each section roughly full-viewport height with scroll-snap or smooth scroll
- Animated hero entrance
- Scroll-reveal for all content sections
- Preserve all existing SEO metadata (JSON-LD Person schema, OG tags, etc.)

### 3.3 — Navigation redesign
- **File**: `src/routes/+layout.svelte`
- Transparent → solid nav transition on scroll
- Keep mobile hamburger menu but style it modern (slide-in panel vs dropdown)
- Smooth anchor navigation with animated scroll

### 3.4 — Dark mode refinement
- Default to dark theme (matches "entering my world" vibe)
- Light mode as toggle
- Store preference in localStorage (existing pattern)

### 3.5 — Cursor trail implementation
- Canvas overlay, z-index above content but pointer-events: none
- Track mouse position, draw fading trail particles
- Disable on touch devices and reduced-motion preference
- Performance: requestAnimationFrame, limit particle count

### 3.6 — Article pages (minimal changes)
- `BaseSeriesPage.svelte` — add scroll-reveal to content sections
- Keep existing layout/functionality intact
- Add cursor trail (global, so auto-included via layout)

---

## Relevant Files

- `.github/copilot-instructions.md` — **CREATE**: Shared workspace instructions for all agents
- `.github/agents/designer.agent.md` — **CREATE**: Designer agent
- `.github/agents/developer.agent.md` — **CREATE**: Developer agent
- `.github/agents/storyteller.agent.md` — **CREATE**: Storyteller agent
- `src/routes/+page.svelte` — **MAJOR REWRITE**: Home page (currently ~570 lines, static card-based layout)
- `src/routes/+layout.svelte` — **MODIFY**: Nav transparency, cursor trail mount, ping-pong ball removal
- `src/app.css` — **MODIFY**: New animation keyframes, scroll-reveal classes, dark-mode-first approach
- `src/lib/components/CursorTrail.svelte` — **CREATE**: Canvas cursor trail
- `src/lib/components/ScrollReveal.svelte` — **CREATE**: Intersection Observer wrapper
- `src/lib/components/AnimatedEntrance.svelte` — **CREATE**: Hero entrance animation
- `tailwind.config.js` — **MODIFY**: Extended animation/keyframe config
- `static/site.css` — **MODIFY**: Update fallback styles
- `static/site.js` — **MODIFY**: Remove ping-pong-ball animation, add cursor trail fallback

## Verification

1. Run `npm run check` — no TypeScript errors
2. Run `npm run build` — successful production build
3. Manual: Open `npm run dev`, verify animated entrance plays on load
4. Manual: Scroll through all sections, verify scroll-reveal animations trigger
5. Manual: Move cursor, verify trail effect renders and follows
6. Manual: Test with `prefers-reduced-motion: reduce` — all animations should be disabled/simplified
7. Manual: Test mobile viewport — no cursor trail, touch-friendly, responsive layout
8. Manual: Verify all existing links work: `/series`, `/mosaic`, external project links
9. Manual: Check dark/light mode toggle works
10. Manual: Verify SEO tags preserved (view source, check JSON-LD, OG tags)
11. Run `npm run lint` — no linting errors

## Decisions

- **No new heavy dependencies**: Cursor trail and scroll animations built with vanilla Canvas API + Intersection Observer (no GSAP, Three.js, etc.) — keeps bundle small
- **Dark-first design**: Default to dark theme to match the immersive "entering my world" aesthetic
- **Article pages untouched structurally**: Only global effects (cursor trail via layout) and subtle scroll-reveal added — no content/layout changes to `/series/*` or `/mosaic/*`
- **Ping-pong ball animation removed**: Replaced by cursor trail as the signature interactive element
- **Scroll-snap optional**: Use smooth scroll-reveal rather than strict scroll-snap to avoid accessibility issues

## New Project: Nocloud

**Nocloud** — A messaging app that works within the home subnet. No registration, no public data transmission, complete privacy.
- GitHub: https://github.com/sowenzhang/Nocloud
- Key selling points: Privacy-first, no cloud, no signup, works on local network
- Add to Projects section alongside Minibreaks.io, NearbyGame.com, FakeBlueScreen, FotoAssemblyLine
- This is a strong "solving real problems" example — reinforces the product mindset narrative (privacy as a feature, not an afterthought)

## GitHub Profile

- Profile URL: https://github.com/sowenzhang
- Add to Contact/Connect section alongside LinkedIn, Strava, USATT
- Also add GitHub icon link in the footer

## Open Questions

1. **New content sections?** Should we add anything beyond restructuring existing content (e.g., a "Philosophy" or "How I Work" section)?
2. **Animation library?** Start vanilla; add `motion` (lightweight Framer Motion for Svelte) only if vanilla feels insufficient. Your preference?
