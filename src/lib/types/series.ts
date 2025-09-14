// TypeScript interfaces for series data structures

export interface ArticleData {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    publishDate: string;
    readTime: string;
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
}

export interface SeriesMetadata {
    title: string;
    description: string;
    canonical: string;
    ogImage: string;
    totalParts: number;
    seriesName: string;
    seriesUrl: string;
}

export interface SeriesData {
    metadata: SeriesMetadata;
    parts: SeriesPartData[];
}

export type TableOfContents = TableOfContentsItem[];