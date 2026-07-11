export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	/** Font Awesome icon class (without the leading `fas`). */
	icon: string;
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
		icon: 'fa-arrows-rotate'
	},
	{
		slug: 'building-deckmark',
		title: 'Building Deckmark: Closing the Feedback Loop for AI-Generated Slide Decks',
		description:
			'An MCP server that lets you click directly on slide elements to give feedback to an AI agent. Why I built it, and the human-in-the-loop pattern behind it.',
		icon: 'fa-wand-magic-sparkles'
	},
	{
		slug: 'nearbygame-what-i-learned',
		title: "What I Learned Building a Walking Game With AI's Help",
		description:
			'Geography, ambient audio, and the pain of Microsoft Store IAP — a year of solo dev notes from building NearbyGame.',
		icon: 'fa-route'
	},
	{
		slug: 'app-flow-first-pilot',
		title: 'App Flow: First Pilot',
		description:
			'A practical pilot of disposable micro-apps that chain from Squad Shuffer to Group Qualifier to Tournament Bracket, with optional paths for different match formats.',
		icon: 'fa-link'
	},
	{
		slug: 'nearbygame-pivot',
		title: 'How I Pivoted NearbyGame and Used AI to Go From 0 to 1',
		description:
			'Why I abandoned a venue-discovery idea, reframed the problem with AI, and turned NearbyGame into a calm walking experience built for one user first.',
		icon: 'fa-route'
	},
	{
		slug: 'introducing-crossit',
		title: 'Introducing CrossIt: A Lightweight Habit Helper',
		description:
			'A simple local-first habit helper focused on one action: complete a routine and cross it off.',
		icon: 'fa-check-double'
	},
	{
		slug: 'minibreaks-pivot',
		title: 'MiniBreaks Pivot: From Wellness to Micro-Apps',
		description:
			'Why I pivoted MiniBreaks into a weekly micro-app experiment, and how I structured AI roles to ship one tiny app every week.',
		icon: 'fa-leaf'
	},
	{
		slug: 'why-i-build-nocloud-chat',
		title: 'Why Do I Build NoCloud Chat',
		description:
			'Why I built a local-first chat app with no registration and no cloud dependency.',
		icon: 'fa-cloud'
	}
];
