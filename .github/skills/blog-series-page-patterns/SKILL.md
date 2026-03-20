---
name: blog-series-page-patterns
description: 'Design and implement long-form blog or series pages in this repo. Use when working on article layout, floating or sticky TOC behavior, reading experience, section anchors, and SEO-safe content templates for series pages.'
argument-hint: 'Describe the article page task and route (e.g., improve TOC for /series/part-4-...)'
---

# Blog Series Page Patterns

Use this skill when creating or updating long-form article pages and series templates in this project.

## Scope

- Route pages under `src/routes/series/**` and `src/routes/mosaic/**`
- Shared article template in `src/lib/components/BaseSeriesPage.svelte`
- Article metadata in `src/lib/data/seriesData.ts` and `src/lib/data/mosaicSeriesData.ts`

## Goals

- Maintain a high-quality reading flow on mobile and desktop.
- Keep TOC discoverable without hurting content focus.
- Preserve all existing metadata, canonical links, and structured data.
- Respect reduced-motion and maintain keyboard navigation.

## Procedure

1. Identify whether the change belongs in shared template or a single route page.
2. Review TOC behavior and anchor strategy using [TOC checklist](./references/toc-checklist.md).
3. Validate metadata and structured data requirements using [SEO checklist](./references/seo-safety-checklist.md).
4. Implement the smallest change that satisfies the requirement.
5. Run repository validation commands:
   - `npm run check`
   - `npm run build`
6. Verify in responsive layouts:
   - Mobile width: 375px
   - Tablet width: 768px
   - Desktop width: 1280px

## Floating TOC Pattern

Default behavior in this repository should follow these principles:

- Desktop: sticky/floating TOC sidebar anchored near top of article content.
- Mobile: TOC collapsed by default and explicitly toggled.
- Anchors: heading links must land with comfortable scroll offset to avoid clipping under sticky bars.
- Accessibility: TOC controls need clear labels and keyboard support.
- Motion: TOC open/close transitions must be subtle and reduced/disabled for reduced-motion users.

## Completion Criteria

- No regression in breadcrumbs, prev/next navigation, or metadata.
- TOC is usable with keyboard and clear on both mobile and desktop.
- `npm run check` and `npm run build` both pass.
