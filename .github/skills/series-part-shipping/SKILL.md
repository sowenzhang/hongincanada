---
name: series-part-shipping
description: 'Add or update a post in the AI series or Mosaic series. Use when creating a new part page, wiring navigation, updating declarative metadata, and preserving shared article template behavior.'
argument-hint: 'Specify series (ai/mosaic), slug, title, date, read time, and whether this is a new part or revision'
---

# Series Part Shipping

Use this skill for safely shipping one article part at a time.

## Scope

- AI series data: `src/lib/data/seriesData.ts`
- Mosaic series data: `src/lib/data/mosaicSeriesData.ts`
- Route pages under `src/routes/series/**` or `src/routes/mosaic/**`
- Shared layout concerns in `src/lib/components/BaseSeriesPage.svelte`

## Procedure

1. Update the canonical data file first.
2. Confirm prev/next navigation shape and part numbers/slugs.
3. Create or update the route page content.
4. Confirm table of contents IDs match actual heading IDs in the article content.
5. Verify canonical URL and OG image are valid for the new slug.
6. Run:
   - `npm run check`
   - `npm run build`

## Guardrails

- Do not hardcode duplicate metadata in multiple places when shared data already exists.
- Do not edit generated `build/` artifacts.
- Do not remove JSON-LD, canonical tags, or series navigation links.

## Done Definition

- Data and route are consistent.
- Article renders correctly in shared template.
- Navigation links are valid.
- Build and type-check pass.
