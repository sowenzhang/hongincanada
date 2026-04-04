<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'How I Pivoted NearbyGame and Used AI to Go From 0 to 1 | Hong in Canada',
		description:
			'How NearbyGame evolved from a venue-discovery product into a quiet walking game, and how AI helped me rethink the problem before I wrote more code.',
		canonical: 'https://hongincanada.com/blog/nearbygame-pivot',
		ogImage: 'https://hongincanada.com/pivot_nearbygame/nearbygame_play.jpg',
		publishDate: 'April 3, 2026',
		readTime: '~9 min read'
	};

	const tableOfContents = [
		{ id: 'problem-selection', title: 'Step 1: Problem Selection' },
		{ id: 'break-it-down', title: 'Step 2: Break It Down' },
		{ id: 'reframing', title: 'Step 3: Reframing the Idea' },
		{ id: 'encounter', title: 'Step 4: From Coordination to Encounter' },
		{ id: 'single-player', title: 'Step 5: Single-Player First' },
		{ id: 'ai-structure', title: 'Step 6: AI as a Thinking Tool' },
		{ id: 'first-version', title: 'Step 7: Building the First Version' },
		{ id: 'progression', title: 'Step 8: Adding Meaning' },
		{ id: 'lessons', title: 'What I Learned' },
		{ id: 'next', title: "What's Next" },
		{ id: 'closing', title: 'Final Thought' }
	];

	const blogPostingSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'How I Pivoted NearbyGame and Used AI to Go From 0 to 1',
		description:
			'How NearbyGame evolved from a venue-discovery product into a quiet walking game, and how AI helped me rethink the problem before I wrote more code.',
		author: {
			'@type': 'Person',
			name: 'Hong'
		},
		datePublished: '2026-04-03',
		image: 'https://hongincanada.com/pivot_nearbygame/nearbygame_play.jpg'
	});

	let isDark = $state(true);
	let showTOC = $state(false);
	let showBackToTop = $state(false);
	let prefersReducedMotion = $state(false);

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mediaQuery.matches;

		const saved = localStorage.getItem('theme');
		isDark = saved ? saved === 'dark' : true;
		document.documentElement.classList.toggle('dark', isDark);
		showTOC = window.innerWidth >= 1024;

		const handleScroll = () => {
			showBackToTop = window.scrollY > 400;
		};
		const handleMotionChange = (event: MediaQueryListEvent) => {
			prefersReducedMotion = event.matches;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		mediaQuery.addEventListener('change', handleMotionChange);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			mediaQuery.removeEventListener('change', handleMotionChange);
		};
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
	}

	function getTwitterShareUrl() {
		return `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageData.canonical)}&text=${encodeURIComponent(pageData.title)}`;
	}

	function getLinkedInShareUrl() {
		return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageData.canonical)}`;
	}
</script>

<svelte:head>
	<title>{pageData.title}</title>
	<meta name="description" content={pageData.description} />
	<link rel="canonical" href={pageData.canonical} />
	<meta property="og:title" content={pageData.title} />
	<meta property="og:description" content={pageData.description} />
	<meta property="og:image" content={pageData.ogImage} />
	<meta property="og:url" content={pageData.canonical} />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageData.title} />
	<meta name="twitter:description" content={pageData.description} />
	<meta name="twitter:image" content={pageData.ogImage} />

	<script type="application/ld+json" data-schema-length={blogPostingSchema.length}>{blogPostingSchema}</script>
</svelte:head>

<div class="min-h-screen bg-white transition-colors dark:bg-gray-950">
	<div class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a
					href="/"
					class="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
				>
					<i class="fas fa-arrow-left text-xs" aria-hidden="true"></i>
					Hong in Canada
				</a>
				<button
					onclick={() => (showTOC = !showTOC)}
					class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
				>
					<i class="fas fa-list text-xs text-emerald-500" aria-hidden="true"></i>
					<span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Contents</span>
					<i class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-xs text-gray-400" aria-hidden="true"></i>
				</button>
			</div>
			<button
				onclick={toggleTheme}
				class="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<i class="fas fa-sun text-xs text-yellow-500" aria-hidden="true"></i>
					<span class="hidden sm:inline">Light Mode</span>
				{:else}
					<i class="fas fa-moon text-xs" aria-hidden="true"></i>
					<span class="hidden sm:inline">Dark Mode</span>
				{/if}
			</button>
		</div>
	</div>

	<header class="bg-white py-12 transition-colors dark:bg-gray-900">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<nav class="mb-8 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
				<a href="/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-300">Home</a>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span>Blog</span>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span class="text-gray-600 dark:text-gray-300">NearbyGame Pivot</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-500 dark:text-emerald-400">
					<i class="fas fa-route mr-1.5" aria-hidden="true"></i>NearbyGame
				</span>
				<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
					Product Pivot
				</span>
			</div>
			<h1 class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
				How I Pivoted NearbyGame and Used AI to Go From 0 to 1
			</h1>
			<p class="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				The first version tried to help people find real-world racket sport venues. The new version is a quiet walking game where connection happens only when it feels natural.
			</p>
			<div class="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<main class="min-h-screen bg-gradient-to-br from-emerald-50 to-sky-50 py-12 transition-colors dark:from-gray-900 dark:to-gray-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col gap-8 lg:flex-row">
				<article class="min-w-0 flex-1">
					<div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
						<div class="p-8 lg:p-14">
							<div
								class="prose prose-lg max-w-none dark:prose-invert
									prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
									prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-2xl prose-h2:scroll-mt-24
									prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-xl prose-h3:text-emerald-700 dark:prose-h3:text-emerald-400
									prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
									prose-li:mb-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
									prose-ul:list-disc prose-ul:list-outside prose-ul:pl-6 prose-ol:list-decimal prose-ol:list-inside prose-ol:pl-1
									prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-400
									prose-strong:text-gray-900 dark:prose-strong:text-white
									prose-a:text-emerald-600 prose-a:underline-offset-2 dark:prose-a:text-emerald-400
									prose-blockquote:border-emerald-500 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
									[&_section]:scroll-mt-24 [&_h2]:scroll-mt-24"
							>
								<p class="text-lg leading-relaxed">
									A few weeks ago, <a href="https://nearbygame.com" target="_blank" rel="noopener noreferrer"><strong>NearbyGame</strong></a> was something completely different.
								</p>

								<p>
									It was not a game. It was a place to find badminton and table tennis venues nearby, something between Yelp and Meetup. The idea sounded reasonable: help people discover places and connect to play.
								</p>

								<p>
									But something felt off. I did not have the energy to manually collect venue data, and there is no clean free source for it. OpenStreetMap helps, but a lot of venue information is missing, stale, or simply wrong. Very quickly, I realized I was signing up for an ingestion pipeline with a lot of manual intervention.
								</p>

								<p>
									More importantly, it did not feel exciting to build.
								</p>

								<div class="not-prose my-10 grid gap-5 md:grid-cols-2">
									<figure class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<img
											src="/pivot_nearbygame/previous_nearbygame_home.jpg"
											alt="The original NearbyGame landing page focused on discovering racket sport venues nearby"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
										<figcaption class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											The first version of NearbyGame centered on venue discovery: find badminton and table tennis courts near you, then work backwards from data quality.
										</figcaption>
									</figure>
									<figure class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<img
											src="/pivot_nearbygame/previous_nearbygame_venuepage.jpg"
											alt="A detailed venue page in the old NearbyGame product showing reviews, venue facts, and location details"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
										<figcaption class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											Each venue page implied ongoing manual work: facts, reviews, maps, and trustworthy addresses before the product could feel complete.
										</figcaption>
									</figure>
								</div>

								<p>
									So I paused. And instead of forcing execution, I started using AI to think.
								</p>

								<section id="problem-selection">
									<h2>Step 1: Realizing the Problem Was Not Execution</h2>

									<p>
										At first, I thought maybe I just needed to push harder: collect more data, improve SEO, add more features. But after a few conversations, with AI acting as a sounding board, it became clear that this was not an execution problem.
									</p>

									<p>
										It was a <strong>problem selection problem</strong>.
									</p>

									<p>
										The original idea hid a lot of constraints:
									</p>

									<ul class="list-disc space-y-2 pl-6 marker:text-gray-500 dark:marker:text-gray-400">
										<li>It required manual venue data.</li>
										<li>It implied a two-sided marketplace: players and places.</li>
										<li>It had low engagement frequency because people do not play every day.</li>
										<li>It depended on network effects too early.</li>
									</ul>

									<p>
										That is a hard place to start. AI did not give me the answer, but it helped me see the structure of the problem more clearly.
									</p>
								</section>

								<section id="break-it-down">
									<h2>Step 2: Breaking the Idea Down</h2>

									<p>
										Instead of asking, "How do I fix NearbyGame?", I started asking, "What part of this idea actually matters?"
									</p>

									<p>
										Through iterative conversations, I decomposed the concept into three pieces:
									</p>

									<ul>
										<li><strong>Nearby</strong> -> proximity</li>
										<li><strong>Game</strong> -> interaction</li>
										<li><strong>People</strong> -> connection</li>
									</ul>

									<p>
										Then I questioned each assumption. Do I really need real-world venues, scheduling, or coordination? The answer was no. Those were simply the hardest parts of the original idea.
									</p>
								</section>

								<section id="reframing">
									<h2>Step 3: Reframing the Idea</h2>

									<p>
										That was the turning point. Instead of asking how to help people organize games in real life, I asked a different question:
									</p>

									<blockquote>
										<p>What if people are already inside a shared experience, and connection happens naturally?</p>
									</blockquote>

									<p>
										That immediately opened a different design space. The product no longer had to coordinate people first. It only had to create the conditions for a meaningful encounter.
									</p>
								</section>

								<section id="encounter">
									<h2>Step 4: From Coordination to Encounter</h2>

									<p>
										The old idea required effort before anything good could happen:
									</p>

									<ul>
										<li>Find a place.</li>
										<li>Find a time.</li>
										<li>Find people.</li>
									</ul>

									<p>
										The new idea removes most of that. You open the app, start walking, and occasionally encounter someone. Only then do you decide whether you want to interact.
									</p>

									<div class="not-prose my-8 rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
										<p class="mb-2 leading-relaxed text-gray-700 dark:text-gray-300">
											<strong>Old loop -> New loop</strong>
										</p>
										<ul class="list-outside list-disc space-y-2 pl-6 text-gray-700 marker:text-emerald-500 dark:text-gray-300">
											<li><strong>Plan first</strong> -> <strong>Experience first</strong></li>
											<li><strong>Coordinate people</strong> -> <strong>Discover people naturally</strong></li>
											<li><strong>Logistics-heavy</strong> -> <strong>Low-pressure and ambient</strong></li>
										</ul>
									</div>

									<p>
										NearbyGame is now a quiet walking experience where you might meet someone. You start in a foggy world, walk forward, explore abstract cities, and accumulate distance over time. There is no detailed map and no urgent destination. Just progress.
									</p>

									<p>
										And sometimes you see another player. You do not know them. You do not have to talk. You can ignore them, acknowledge them, or send one simple signal: <strong>Game?</strong> If both agree, you jump into a small shared game and then continue the walk.
									</p>

									<figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<img
											src="/pivot_nearbygame/nearbygame_play.jpg"
											alt="The new NearbyGame walking interface with a foggy road, navigation HUD, and quiet ambient atmosphere"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
										<figcaption class="mt-3 text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											The pivoted version removes scheduling and venue logistics. The core loop is simple: walk, discover, and occasionally encounter another person.
										</figcaption>
									</figure>
								</section>

								<section id="single-player">
									<h2>Step 5: Designing for Single-Player First</h2>

									<p>
										This was one of the biggest lessons. The original idea only worked if multiple users showed up at the same time. The new version works with one user.
									</p>

									<p>
										That changes everything:
									</p>

									<ul>
										<li>No dependency on immediate network effects.</li>
										<li>No cold-start problem.</li>
										<li>No need for growth before value exists.</li>
									</ul>

									<p>
										AI kept reinforcing the same principle back to me: <strong>make it meaningful for one user first</strong>. That advice sounds obvious in retrospect, but it completely changed the product direction.
									</p>

									<p>
										I actually love this version of the idea. To be honest, I was having fun while testing the app, which was not true in the same way for the venue-search version.
									</p>
								</section>

								<section id="ai-structure">
									<h2>Step 6: Using AI to Go From Idea to Structure to System</h2>

									<p>
										AI was not just helping me brainstorm. It helped me move from intuition to structure.
									</p>

									<h3>Clarifying Constraints</h3>
									<ul>
										<li>What to avoid: marketplaces, scheduling, coordination.</li>
										<li>What to focus on: a solo loop, lightweight interaction, calm pacing.</li>
									</ul>

									<h3>Defining Architecture</h3>
									<ul>
										<li>What platform to start with.</li>
										<li>What technology made sense for frontend, backend, and cross-platform delivery.</li>
										<li>What telemetry mattered without burning server load.</li>
										<li>What security concerns deserved early attention.</li>
									</ul>

									<h3>Breaking Work Into Systems</h3>
									<ul>
										<li>World rendering</li>
										<li>Session system</li>
										<li>Progression system</li>
										<li>Map system</li>
									</ul>

									<p>
										I even used AI to help generate project scaffolding and reusable operating context: a project philosophy file, modular agents, reusable skills, and a product narrative. That turned a vague idea into something I could actually build instead of just admire.
									</p>
								</section>

								<section id="first-version">
									<h2>Step 7: Building the First Version</h2>

									<p>
										Instead of jumping straight into a full 3D engine, I chose a lighter path: web-based rendering, a simple foggy road, and abstract city nodes. The goal is not graphics fidelity. The goal is to answer one question first:
									</p>

									<blockquote>
										<p>Can I create something simple that people want to come back to?</p>
									</blockquote>

									<p>
										That constraint kept the first version honest. It forced me to focus on mood, pacing, and repeatability instead of wandering into technical vanity.
									</p>
								</section>

								<section id="progression">
									<h2>Step 8: Adding Meaning Through Progression</h2>

									<p>
										One small feature made the experience feel real: <strong>landmark discovery and area exploration</strong>.
									</p>

									<p>
										As you walk, your distance converts into lightweight progress signals such as "you have explored 6.5% of Washington State" or "you have seen Space Needle". It is abstract, but motivating.
									</p>

									<ul>
										<li>Direction without pressure</li>
										<li>Progress without hard goals</li>
										<li>Scale without a lot of complexity</li>
									</ul>

									<figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<img
											src="/pivot_nearbygame/nearbygame_progress.jpg"
											alt="NearbyGame progression panel showing discovered cities, landmarks, roads, coverage, and walked distance"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
										<figcaption class="mt-3 text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											Progress turns walking into discovery. Cities, landmarks, roads, and coverage give the experience a quiet sense of accumulation.
										</figcaption>
									</figure>

									<p>
										This is the point where I started to feel genuinely excited. While building the game, I learned more about a state, its cities, and its landmarks. The experience started to feel educational in a gentle way, while still staying calm and relaxing.
									</p>
								</section>

								<section id="lessons">
									<h2>What I Learned</h2>

									<p>
										This pivot clarified a few principles for me:
									</p>

									<h3>1. Do Not Force Ideas</h3>
									<p>
										If something feels heavy for a long time, it usually is.
									</p>

									<h3>2. Remove Dependencies</h3>
									<p>
										The more your product depends on other people showing up before it becomes valuable, the harder it is to start.
									</p>

									<h3>3. Build for One User First</h3>
									<p>
										Then layer social behavior on top, not the other way around.
									</p>

									<h3>4. AI Is Not Just for Coding</h3>
									<p>
										For me, AI has become a thinking tool for breaking down ideas, challenging assumptions, and exploring alternatives before implementation gets expensive.
									</p>

									<h3>5. Speed Matters</h3>
									<p>
										I went from a stuck idea to a new concept, a clearer system, and a working landing page in a very short time. That kind of iteration speed changes what feels buildable.
									</p>
								</section>

								<section id="next">
									<h2>What's Next</h2>

									<p>
										Right now, NearbyGame is still early. The next step is simple: finish the first MVP and ship it.
									</p>

									<p>
										Then the real test begins:
									</p>

									<blockquote>
										<p>Does this feel like something I want to come back to?</p>
									</blockquote>

									<p>
										I am actually very close to the MVP, so stay tuned. I expect the interesting part to start once the product is live enough to learn from real behavior instead of only from my own taste.
									</p>
								</section>

								<section id="closing">
									<h2>Final Thought</h2>

									<p>
										NearbyGame did not fail. It evolved.
									</p>

									<p>
										And the biggest shift was not technical. It was moving from <strong>organizing people</strong> to <strong>creating a world where connection can happen naturally</strong>.
									</p>

									<p>
										If you are building something and feel stuck, try this: do not ask, "How do I build this?" Ask, "What part of this idea is actually worth building?" That is where the real pivot begins.
									</p>
								</section>
							</div>
						</div>
					</div>
				</article>

				{#if showTOC}
					<aside class="lg:w-56 lg:flex-shrink-0" transition:slide={{ axis: 'x', duration: prefersReducedMotion ? 0 : 250 }}>
						<div class="sticky top-24 space-y-6">
							<nav class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
								<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
									On This Page
								</p>
								<ul class="space-y-2 text-sm">
									{#each tableOfContents as item (item.id)}
										<li>
											<a
												href={`#${item.id}`}
												class="block text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
											>
												{item.title}
											</a>
										</li>
									{/each}
								</ul>
							</nav>

							<div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
								<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
									Share
								</p>
								<div class="flex gap-2">
									<a
										href={getTwitterShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on Twitter"
										class="flex-1 rounded-lg bg-emerald-50 p-2 text-center text-sm font-medium text-emerald-600 transition-colors hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50"
									>
										<i class="fab fa-twitter text-xs"></i>
									</a>
									<a
										href={getLinkedInShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on LinkedIn"
										class="flex-1 rounded-lg bg-emerald-50 p-2 text-center text-sm font-medium text-emerald-600 transition-colors hover:bg-emerald-100 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50"
									>
										<i class="fab fa-linkedin-in text-xs"></i>
									</a>
									<button
										onclick={() => {
											navigator.clipboard.writeText(pageData.canonical);
											alert('Link copied!');
										}}
										aria-label="Copy link to clipboard"
										class="flex-1 rounded-lg bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
									>
										<i class="fas fa-link text-xs"></i>
									</button>
								</div>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</main>

	{#if showBackToTop}
		<button
			onclick={scrollToTop}
			class="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-colors hover:bg-emerald-600"
			aria-label="Back to top"
		>
			<i class="fas fa-arrow-up text-sm" aria-hidden="true"></i>
		</button>
	{/if}
</div>

<style>
	:global(html.dark) {
		color-scheme: dark;
	}
</style>