<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';

    // Article metadata
    const articleData = {
        title: "Mosaic, Part 3: Under the Hood of App Flows",
        description: "Deep dive into the technical architecture of Mosaic: the Context Engine, Registry of Tiles, Composer, and how they work together to create adaptive App Flows.",
        canonical: "https://hongincanada.com/mosaic/app-flow-under-the-hood",
        ogImage: "https://hongincanada.com/mosaic-series/core-architectural-design.jpg",
        publishDate: "September 13, 2025",
        readTime: "9 min read"
    };

    // Navigation data
    const navigation = {
        currentPart: 3,
        totalParts: 4,
        seriesUrl: "/mosaic",
        seriesTitle: "Mosaic Series",
        prevPart: {
            number: 2,
            title: "Adaptive Journeys",
            slug: "adaptive-journeys"
        },
        nextPart: {
            number: 4,
            title: "The Path Forward",
            slug: "near-future-and-beyond"
        }
    };

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
