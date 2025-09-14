<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
    import { getMosaicArticleData, getMosaicNavigationData } from '$lib/data/mosaicSeriesData';

    // Get data from the centralized mosaic series data
    const articleData = getMosaicArticleData(3);
    const navigation = getMosaicNavigationData(3);

    // Ensure data exists (shouldn't happen for valid part numbers, but TypeScript safety)
    if (!articleData || !navigation) {
        throw new Error('Article data not found for Part 3');
    }

    // Table of contents
    const tableOfContents = [
        { id: "core-building-blocks", title: "The Core Building Blocks", level: 1 },
        { id: "context-engine", title: "1. The Context Engine", level: 2 },
        { id: "registry-of-tiles", title: "2. The Registry of Tiles", level: 2 },
        { id: "the-composer", title: "3. The Composer", level: 2 },
        { id: "security-control", title: "4. Security & Control", level: 2 },
        { id: "why-pwas-bridge", title: "Why PWAs Are the Bridge", level: 1 },
        { id: "role-of-llms", title: "The Role of LLMs", level: 1 },
        { id: "why-this-matters", title: "Why This Matters", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
    <!-- Main content -->
    <p>This is a blank template for Part 3. Add your content here.</p>
</BaseSeriesPage>
