export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	/** Font Awesome icon class (without the leading `fas`). */
	icon: string;
	/** ISO publish date (YYYY-MM-DD). Mirrors each post's JSON-LD `datePublished`. */
	date: string;
	/** Compact label (2-4 words) for tight spaces like the rail's "Latest" list. */
	shortTitle: string;
}

/**
 * Canonical list of standalone blog posts (the `/blog/*` routes).
 * Kept in sync with the "Writing" cards on the home page. Used by the
 * <MorePosts /> component to surface other posts from any article page.
 */
export const blogPosts: BlogPostMeta[] = [
	{
		slug: 'loop-engineering',
		title: 'Loop Engineering: Building Web Apps with an Agent in the Loop',
		description:
			'Why an AI agent needs a governed loop of observation, objective gates, iteration, and honest stopping to ship reliable web apps.',
		icon: 'fa-arrows-rotate',
		date: '2026-07-10',
		shortTitle: 'Loop Engineering'
	},
	{
		slug: 'building-deckmark',
		title: 'Building Deckmark: Closing the Feedback Loop for AI-Generated Slide Decks',
		description:
			'An MCP server that lets you click directly on slide elements to give feedback to an AI agent. Why I built it, and the human-in-the-loop pattern behind it.',
		icon: 'fa-wand-magic-sparkles',
		date: '2026-05-25',
		shortTitle: 'Building Deckmark'
	},
	{
		slug: 'nearbygame-what-i-learned',
		title: "What I Learned Building a Walking Game With AI's Help",
		description:
			'Geography, ambient audio, and the pain of Microsoft Store IAP — a year of solo dev notes from building NearbyGame.',
		icon: 'fa-route',
		date: '2026-05-11',
		shortTitle: 'NearbyGame: Lessons'
	},
	{
		slug: 'app-flow-first-pilot',
		title: 'App Flow: First Pilot',
		description:
			'A practical pilot of disposable micro-apps that chain from Squad Shuffer to Group Qualifier to Tournament Bracket, with optional paths for different match formats.',
		icon: 'fa-link',
		date: '2026-04-18',
		shortTitle: 'App Flow: First Pilot'
	},
	{
		slug: 'nearbygame-pivot',
		title: 'How I Pivoted NearbyGame and Used AI to Go From 0 to 1',
		description:
			'Why I abandoned a venue-discovery idea, reframed the problem with AI, and turned NearbyGame into a calm walking experience built for one user first.',
		icon: 'fa-route',
		date: '2026-04-03',
		shortTitle: 'NearbyGame Pivot'
	},
	{
		slug: 'introducing-crossit',
		title: 'Introducing CrossIt: A Lightweight Habit Helper',
		description:
			'A simple local-first habit helper focused on one action: complete a routine and cross it off.',
		icon: 'fa-check-double',
		date: '2026-03-19',
		shortTitle: 'Introducing CrossIt'
	},
	{
		slug: 'minibreaks-pivot',
		title: 'MiniBreaks Pivot: From Wellness to Micro-Apps',
		description:
			'Why I pivoted MiniBreaks into a weekly micro-app experiment, and how I structured AI roles to ship one tiny app every week.',
		icon: 'fa-leaf',
		date: '2026-03-17',
		shortTitle: 'MiniBreaks Pivot'
	},
	{
		slug: 'why-i-build-nocloud-chat',
		title: 'Why Do I Build NoCloud Chat',
		description:
			'Why I built a local-first chat app with no registration and no cloud dependency.',
		icon: 'fa-cloud',
		date: '2026-03-10',
		shortTitle: 'NoCloud Chat'
	}
];

/** Posts sorted newest-first by publish date. */
export const recentPosts: BlogPostMeta[] = [...blogPosts].sort(
	(a, b) => b.date.localeCompare(a.date)
);

/** The N most recently published posts (newest first). */
export function getRecentPosts(count = 4): BlogPostMeta[] {
	return recentPosts.slice(0, count);
}

/** Human-readable publish date, e.g. "Jul 10, 2026". */
export function formatPostDate(iso: string): string {
	const d = new Date(iso + 'T00:00:00');
	return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
