# AI Development Series - File Structure

This document outlines the file structure for the "How I Built MiniBreaks.io With AI" series.

## Series Pages Structure

```
src/routes/series/
├── +page.svelte                           # Series landing page with table of contents
├── part-1-can-you-build-with-ai/
│   └── +page.svelte                       # Part 1: Can You Really Build a Website with AI?
├── part-2-why-use-ai/
│   └── +page.svelte                       # Part 2: Why I Wanted to Use AI
├── part-3-tools-and-setup/
│   └── +page.svelte                       # Part 3: Choosing Your Tools & Setting Up
├── part-4-crafting-idea-mvp/
│   └── +page.svelte                       # Part 4: Crafting Your Idea & MVP with AI
├── part-5-designing-ui-ux/
│   └── +page.svelte                       # Part 5: Designing Your UI/UX with AI
├── part-6-building-frontend/
│   └── +page.svelte                       # Part 6: Building the Frontend with AI
├── part-7-backend-database/
│   └── +page.svelte                       # Part 7: Adding the Backend & Database with AI
├── part-8-testing-debugging/
│   └── +page.svelte                       # Part 8: Testing, Debugging & Improving with AI
├── part-9-deploying-hosting/
│   └── +page.svelte                       # Part 9: Deploying & Hosting Your Website
└── part-10-reflecting-next-steps/
    └── +page.svelte                       # Part 10: Reflecting & Next Steps
```

## Design Recommendations

### Reader Experience
1. **Series Landing Page** (`/series`) - Overview with progress tracking and easy navigation
2. **Individual Parts** (`/series/part-X-slug`) - Focused content with navigation between parts
3. **Table of Contents** - Sticky sidebar on longer articles for easy navigation
4. **Progress Indicators** - Visual cues showing which parts are published/completed
5. **Cross-linking** - Easy navigation between parts with prev/next buttons

### Content Structure
Each part should include:
- **Breadcrumb navigation** - Series → Part X
- **Article metadata** - Read time, publish date, author
- **Table of contents** - For longer articles (sidebar)
- **Article content** - Main content with proper headings and sections
- **Navigation footer** - Previous/Next part navigation
- **CTA section** - Engagement opportunities (feedback, newsletter, etc.)

### SEO Considerations
- **Structured data** - Article schema markup for each part
- **Series schema** - Blog/Article series markup on landing page
- **Canonical URLs** - Proper URL structure for each part
- **Meta descriptions** - Unique descriptions for each part
- **Open Graph tags** - Social sharing optimization

### Technical Implementation
- **Dynamic navigation** - Uses JavaScript object to define series structure
- **Responsive design** - Mobile-friendly layouts
- **Consistent styling** - Follows existing design system
- **Performance** - Optimized loading and minimal dependencies

## Content Status
- ✅ Part 1: Published
- ✅ Part 2: Published
- ✅ Part 3: Published (detailed implementation)
- 🚧 Parts 4-10: Coming soon

## URL Structure
- Series overview: `/series`
- Individual parts: `/series/part-{number}-{slug}`
- Example: `/series/part-3-tools-and-setup`
