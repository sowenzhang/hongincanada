import type { SeriesMetadata, SeriesPartData } from '$lib/types/series';

// Centralized mosaic series data that can be used by both the series landing page
// and individual article pages to ensure consistency

export const mosaicSeriesMetadata: SeriesMetadata = {
    title: "Mosaic: Rethinking App Design for the Multi-App Era",
    description: "A comprehensive series exploring how to design apps that work together seamlessly, adapting to user context and creating unified experiences across platforms.",
    canonical: "https://hongincanada.com/mosaic",
    ogImage: "https://hongincanada.com/mosaic-series/adaptive-ui.jpg",
    totalParts: 4,
    seriesName: "Mosaic Series",
    seriesUrl: "/mosaic"
};

export const mosaicSeriesParts: SeriesPartData[] = [
    {
        part: 1,
        title: "The Problem with Apps Today",
        description: "Think about the last time you planned a trip. You opened your airline's app to check flights. Switched to Google Maps for directions. Used WhatsApp to coordinate with friends. This is normal today. But it doesn't feel right, does it?",
        readTime: "5 min read",
        publishDate: "September 12, 2025",
        status: "published",
        slug: "the-problem-with-apps-today",
        canonical: "https://hongincanada.com/mosaic/the-problem-with-apps-today",
        ogImage: "https://hongincanada.com/mosaic-series/adaptive-ui.jpg"
    },
    {
        part: 2,
        title: "Adaptive Journeys in App Flows",
        description: "Explore the heart of Mosaic: adaptive journeys and why this shift from static apps to dynamic App Flows matters for modern user experiences.",
        readTime: "7 min read",
        publishDate: "September 13, 2025",
        status: "published",
        slug: "adaptive-journeys",
        canonical: "https://hongincanada.com/mosaic/adaptive-journeys",
        ogImage: "https://hongincanada.com/mosaic-series/adaptive-ui.jpg"
    },
    {
        part: 3,
        title: "Under the Hood of App Flows",
        description: "Deep dive into the technical architecture of Mosaic: the Context Engine, Registry of Tiles, Composer, and how they work together to create adaptive App Flows.",
        readTime: "15 min read",
        publishDate: "September 13, 2025",
        status: "published",
        slug: "app-flow-under-the-hood",
        canonical: "https://hongincanada.com/mosaic/app-flow-under-the-hood",
        ogImage: "https://hongincanada.com/mosaic-series/adaptive-ui.jpg"
    },
    {
        part: 4,
        title: "The Near Future and Beyond",
        description: "How exactly Mosaic works as a PWA today, and where it could go in the long term. From hosted registries to OS-level integration.",
        readTime: "10 min read",
        publishDate: "September 13, 2025",
        status: "published",
        slug: "near-future-and-beyond",
        canonical: "https://hongincanada.com/mosaic/near-future-and-beyond",
        ogImage: "https://hongincanada.com/mosaic-series/adaptive-ui.jpg"
    }
];

// Helper function to get data for a specific part
export function getMosaicPartData(partNumber: number): SeriesPartData | undefined {
    return mosaicSeriesParts.find(part => part.part === partNumber);
}

// Helper function to get navigation data for a specific part
export function getMosaicNavigationData(partNumber: number) {
    const prevPart = partNumber > 1 ? getMosaicPartData(partNumber - 1) : null;
    const nextPart = partNumber < mosaicSeriesMetadata.totalParts ? getMosaicPartData(partNumber + 1) : null;

    return {
        currentPart: partNumber,
        totalParts: mosaicSeriesMetadata.totalParts,
        seriesUrl: mosaicSeriesMetadata.seriesUrl,
        seriesTitle: mosaicSeriesMetadata.seriesName,
        prevPart: prevPart ? {
            number: prevPart.part,
            title: prevPart.title,
            slug: prevPart.slug
        } : null,
        nextPart: nextPart ? {
            number: nextPart.part,
            title: nextPart.title,
            slug: nextPart.slug
        } : null
    };
}

// Helper function to get article data for a specific part
export function getMosaicArticleData(partNumber: number) {
    const partData = getMosaicPartData(partNumber);
    if (!partData) return null;

    return {
        title: `Mosaic, Part ${partData.part}: ${partData.title}`,
        description: partData.description,
        canonical: partData.canonical,
        ogImage: partData.ogImage,
        publishDate: partData.publishDate,
        readTime: partData.readTime
    };
}