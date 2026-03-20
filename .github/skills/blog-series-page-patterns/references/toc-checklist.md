# TOC Checklist

Use this checklist for any floating or sticky table of contents changes.

- Ensure TOC source data is explicit and stable (id/title/level).
- Use semantic `<nav>` for TOC container.
- Provide accessible toggle text and `aria-label` on mobile controls.
- Keep desktop TOC sticky with enough top offset to avoid overlap.
- Add heading scroll offset (`scroll-mt-*` or equivalent) so anchors land correctly.
- Keep heading hierarchy meaningful (h2/h3 nesting where possible).
- Do not auto-open TOC on small screens if it blocks reading flow.
- If active-section highlighting is added, avoid heavy scroll listeners when Intersection Observer can be used.
- Respect `prefers-reduced-motion` for TOC transitions.
- Verify keyboard flow: toggle -> first link -> article content.
