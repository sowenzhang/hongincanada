// TypeScript interfaces for series data structures

export interface ArticleData {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    publishDate: string;
    readTime: string;
    /** ISO or human date of last content update; falls back to publishDate when absent. */
    modifiedDate?: string;
    /** Comma-separated keyword list for the <meta name="keywords"> tag. */
    keywords?: string;
    /** Editorial section for og/article/JSON-LD (e.g. "Technology", "Product Design"). */
    section?: string;
}

export interface NavigationPart {
    number: number;
    title: string;
    slug: string;
}

export interface Navigation {
    currentPart: number;
    totalParts: number;
    seriesUrl: string;
    seriesTitle: string;
    prevPart: NavigationPart | null;
    nextPart: NavigationPart | null;
}

export interface TableOfContentsItem {
    id: string;
    title: string;
    level: number;
}

export interface SeriesPartData {
    part: number;
    title: string;
    description: string;
    readTime: string;
    publishDate: string;
    status: 'published' | 'draft' | 'coming-soon';
    slug: string;
    canonical: string;
    ogImage: string;
    /** ISO or human date of last content update for this part. */
    modifiedDate?: string;
}

export interface SeriesMetadata {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    totalParts: number;
    seriesName: string;
    seriesUrl: string;
    /** Default keyword list applied to every part in this series. */
    keywords?: string;
    /** Default editorial section applied to every part in this series. */
    section?: string;
}

export interface SeriesData {
    metadata: SeriesMetadata;
    parts: SeriesPartData[];
}

export type TableOfContents = TableOfContentsItem[];