import type { SeriesMetadata, SeriesPartData } from '$lib/types/series';

// Centralized series data that can be used by both the series landing page
// and individual article pages to ensure consistency

export const seriesMetadata: SeriesMetadata = {
    title: "How I Built a Full Website (MiniBreaks.io) With AI Series",
    description: "A comprehensive 10-part series on building a full website using AI tools. Learn from real-world experience, challenges, and solutions.",
    canonical: "https://hongincanada.com/series",
    ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg",
    totalParts: 10,
    seriesName: "How I Built a Full Website (MiniBreaks.io) With AI ",
    seriesUrl: "/series"
};

export const seriesParts: SeriesPartData[] = [
    {
        part: 1,
        title: "Can You Really Build a Website with AI? (Spoiler: Yes, But…)",
        description: "Set expectations about what AI can and can't do. Share your personal journey, highlight how it's not fully magical, but absolutely empowering when used correctly.",
        readTime: "10 min read",
        publishDate: "2025-07-05",
        status: "published",
        slug: "part-1-can-you-build-with-ai",
        canonical: "https://hongincanada.com/series/part-1-can-you-build-with-ai",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 2,
        title: "Why I Wanted to Use AI - Setting Realistic Expectations",
        description: "Understanding my motivations for using AI in development and setting realistic expectations for what AI can and cannot do in a real-world project.",
        readTime: "8 min read",
        publishDate: "2025-07-06",
        status: "published",
        slug: "part-2-why-use-ai",
        canonical: "https://hongincanada.com/series/part-2-why-use-ai",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 3,
        title: "Choosing Your Tools & Setting Up",
        description: "Introduce the minimal set of tools needed: ChatGPT, GitHub Copilot/Cursor, and Hugging Face. Walk readers through creating a GitHub account and setting up their first repository, even if they're non-engineers.",
        readTime: "12 min read",
        publishDate: "2025-07-06",
        status: "published",
        slug: "part-3-tools-and-setup",
        canonical: "https://hongincanada.com/series/part-3-tools-and-setup",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 4,
        title: "Crafting Your Idea & MVP with AI",
        description: "Guide readers through brainstorming ideas with AI and defining a Minimum Viable Product (MVP). Show how to prompt AI to focus on what matters most. Homework: Write down your MVP in one paragraph.",
        readTime: "10 min read",
        publishDate: "2025-07-11",
        status: "published",
        slug: "part-4-crafting-idea-mvp",
        canonical: "https://hongincanada.com/series/part-4-crafting-idea-mvp",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 5,
        title: "Designing Your UI/UX with AI",
        description: "Explore how to use AI for wireframing, generating page layouts, and writing user-facing copy. Homework: Draw or describe your main page's layout based on AI suggestions.",
        readTime: "12 min read",
        publishDate: "2025-07-12",
        status: "published",
        slug: "part-5-designing-ui-ux",
        canonical: "https://hongincanada.com/series/part-5-designing-ui-ux",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 6,
        title: "Writing Code with AI Assistance",
        description: "Dive into the actual coding process with AI. Cover best practices for prompting, code review, debugging, and maintaining quality while letting AI do the heavy lifting. Build your foundation before adding advanced features.",
        readTime: "15 min read",
        publishDate: "2025-07-14",
        status: "published",
        slug: "part-6-writing-code-ai",
        canonical: "https://hongincanada.com/series/part-6-writing-code-ai",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 7,
        title: "Adding Advanced Features with AI",
        description: "Learn how to enhance your website with authentication, email functionality, and database integration. Step-by-step instructions and examples for wiring these features to your UI.",
        readTime: "15 min read",
        publishDate: "2025-07-15",
        status: "published",
        slug: "part-7-adding-advanced-features",
        canonical: "https://hongincanada.com/series/part-7-adding-advanced-features",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 8,
        title: "Before Deployment: Testing & Preparation",
        description: "Essential questions to ask, key areas to test, and what to pay attention to before going live. Explore different deployment environments and preparation strategies.",
        readTime: "12 min read",
        publishDate: "2025-07-19",
        status: "published",
        slug: "part-8-before-deployment",
        canonical: "https://hongincanada.com/series/part-8-before-deployment",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 9,
        title: "Lessons Learned & What Didn't Work",
        description: "Be honest about the failures, frustrations, and limitations. Share what you'd do differently and what surprised you about working with AI.",
        readTime: "9 min read",
        publishDate: "2025-07-19",
        status: "published",
        slug: "part-9-lessons-learned",
        canonical: "https://hongincanada.com/series/part-9-lessons-learned",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    },
    {
        part: 10,
        title: "The Future of AI-Assisted Development & Cheat sheet",
        description: "Wrap up with reflections on where AI development is heading, your recommendations for others, and how to continue learning and growing in this space.",
        readTime: "7 min read",
        publishDate: "2025-07-19",
        status: "published",
        slug: "part-10-future-ai-development",
        canonical: "https://hongincanada.com/series/part-10-future-ai-development",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    }
];

// Helper function to get data for a specific part
export function getPartData(partNumber: number): SeriesPartData | undefined {
    return seriesParts.find(part => part.part === partNumber);
}

// Helper function to get navigation data for a specific part
export function getNavigationData(partNumber: number) {
    const prevPart = partNumber > 1 ? getPartData(partNumber - 1) : null;
    const nextPart = partNumber < seriesMetadata.totalParts ? getPartData(partNumber + 1) : null;

    return {
        currentPart: partNumber,
        totalParts: seriesMetadata.totalParts,
        seriesUrl: seriesMetadata.seriesUrl,
        seriesTitle: seriesMetadata.seriesName,
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
export function getArticleData(partNumber: number) {
    const partData = getPartData(partNumber);
    if (!partData) return null;

    return {
        title: partData.title,
        description: partData.description,
        canonical: partData.canonical,
        ogImage: partData.ogImage,
        publishDate: partData.publishDate,
        readTime: partData.readTime
    };
}
