<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'App Flow: First Pilot | Hong in Canada',
		description:
			'A first pilot of app flow on MiniBreaks: disposable micro-apps that work independently, then chain through URL state from Squad Shuffer to Group Qualifier to Bracket Blitz.',
		canonical: 'https://www.hongincanada.com/blog/app-flow-first-pilot',
		ogImage: 'https://www.hongincanada.com/app-chaining/squad-shuffer-next-chain.jpg',
		publishDate: 'April 18, 2026',
		readTime: '~9 min read'
	};

	const tableOfContents = [
		{ id: 'from-mosaic-to-pilot', title: 'From Mosaic to a Pilot' },
		{ id: 'why-app-flow', title: 'Why App Flow' },
		{ id: 'squad-shuffer-alone', title: 'Squad Shuffer Alone' },
		{ id: 'chain-path-a', title: 'Path A: Group Stage Then Bracket' },
		{ id: 'chain-path-b', title: 'Path B: Direct to Bracket' },
		{ id: 'benefits', title: 'Benefits of Chaining' },
		{ id: 'drawbacks', title: 'Drawbacks and Mitigations' },
		{ id: 'future', title: 'Future of App Flow' }
	];

	const blogPostingSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: 'App Flow: First Pilot',
		description:
			'A first pilot of app flow on MiniBreaks: disposable micro-apps that work independently, then chain through URL state from Squad Shuffer to Group Qualifier to Bracket Blitz.',
		author: {
			'@type': 'Person',
			name: 'Hong'
		},
		datePublished: '2026-04-18',
		image: 'https://www.hongincanada.com/app-chaining/squad-shuffer-next-chain.jpg'
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
					<i class="fas fa-list text-xs text-orange-500" aria-hidden="true"></i>
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
				<span class="text-gray-600 dark:text-gray-300">App Flow: First Pilot</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span class="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500 dark:text-orange-400">
					<i class="fas fa-link mr-1.5" aria-hidden="true"></i>MiniBreaks
				</span>
				<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">
					Product Experiment
				</span>
			</div>
			<h1 class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">App Flow: First Pilot</h1>
			<p class="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				A practical pilot of disposable micro-apps that can run on their own, then flow into each other when the user needs more.
			</p>
			<div class="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<main class="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12 transition-colors dark:from-gray-900 dark:to-gray-800">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col gap-8 lg:flex-row">
				<article class="min-w-0 flex-1">
					<div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
						<div class="p-8 lg:p-14">
							<div
								class="prose prose-lg max-w-none dark:prose-invert
									prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
									prose-h2:mt-12 prose-h2:mb-5 prose-h2:text-2xl prose-h2:scroll-mt-24
									prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-xl prose-h3:text-orange-700 dark:prose-h3:text-orange-400
									prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
									prose-li:mb-2 prose-li:text-gray-700 dark:prose-li:text-gray-300
									prose-ul:list-disc prose-ul:list-outside prose-ul:pl-6 prose-ol:list-decimal prose-ol:list-outside prose-ol:pl-6
									prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-400
									prose-strong:text-gray-900 dark:prose-strong:text-white
									prose-a:text-orange-600 prose-a:underline-offset-2 dark:prose-a:text-orange-400
									prose-blockquote:border-orange-500 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
									[&_section]:scroll-mt-24 [&_h2]:scroll-mt-24"
							>
								<section id="from-mosaic-to-pilot">
									<h2>From Mosaic to a Real Pilot</h2>

									<p>
										In my Mosaic writing, I explored the idea of moving from static apps to adaptive flows. This post is a practical first pilot of that idea.
									</p>

									<p>
										If you have not read it yet, this pilot connects directly to <a href="/mosaic"><strong>Mosaic: From App Stores to App Flows</strong></a>.
									</p>

									<p>
										I am experimenting with a simple principle: build <strong>disposable micro-apps</strong> that each do one thing well, and let users chain them when they need a longer workflow.
									</p>

									<div class="not-prose my-8 rounded-r-xl border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
										<p class="mb-2 leading-relaxed text-gray-700 dark:text-gray-300">
											<strong>Reference:</strong> The foundational concept is documented in <a href="https://minibreaks.io/about/app-chaining" target="_blank" rel="noopener noreferrer">App Chaining on MiniBreaks</a>.
										</p>
									</div>
								</section>

								<section id="why-app-flow">
									<h2>Why App Flow Instead of One Big App?</h2>

									<p>
										A fair question is: why not one big tournament app with optional steps?
									</p>

									<p>
										Even if those steps are optional, the controls still exist in the interface. More operations usually means more controls. More controls means more mental load. More mental load means a higher learning curve.
									</p>

									<p>
										For example, a teacher who just wants to randomly group students for an assignment should not need to parse bracket and qualification concepts. Optional complexity is still complexity when it is visible.
									</p>

									<p>
										The pilot follows a few constraints that I care about:
									</p>

									<ul>
										<li>Each app is useful by itself: one input, one output.</li>
										<li>Users can start anywhere and stop anywhere.</li>
										<li>When needed, one tap chains output into the next app.</li>
										<li>Data handoff is URL-based, not server-side orchestration.</li>
									</ul>

									<p>
										This keeps each tool lightweight and reduces feature bloat. A user who only needs one step should not pay a cognitive tax for the whole tournament pipeline.
									</p>

									<p>
										In short, app flow is not anti-feature. It is anti-friction for users who only need one result.
									</p>

									<figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<a href="/app-chaining/squad-shuffer-next-chain.jpg" target="_blank" rel="noopener noreferrer">
											<img
												src="/app-chaining/squad-shuffer-next-chain.jpg"
												alt="Squad Shuffer output screen showing the next-chain actions to continue into downstream apps"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</a>
										<figcaption class="mt-3 text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											App flow in action: complete one result, then chain forward only if you need the next step.
										</figcaption>
									</figure>
								</section>

								<section id="squad-shuffer-alone">
									<h2>Squad Shuffer Alone Is Already Useful</h2>

									<p>
										<a href="https://minibreaks.io/apps/squad-shuffle" target="_blank" rel="noopener noreferrer"><strong>Squad Shuffer</strong></a> is a tiny app that creates groups or pairs from a list of names.
									</p>

									<p>
										Even without chaining, it has practical value for collaboration. Users can copy an editable link, share it with another person, or open it in another tab to adjust results.
									</p>

									<p>
										That is helpful when a group wants to rename teams or swap members to better match skill levels before playing.
									</p>

									<div class="not-prose my-10 grid gap-5 md:grid-cols-2">
										<figure class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
											<a href="/app-chaining/squad-shuffer-output.jpg" target="_blank" rel="noopener noreferrer">
												<img
													src="/app-chaining/squad-shuffer-output.jpg"
													alt="Squad Shuffer result output showing generated teams"
													class="w-full rounded-xl shadow-sm"
													loading="lazy"
												/>
											</a>
											<figcaption class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
												Output-first value: one action creates usable team groups immediately.
											</figcaption>
										</figure>
										<figure class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
											<a href="/app-chaining/squad-shuffer-group-edit.jpg" target="_blank" rel="noopener noreferrer">
												<img
													src="/app-chaining/squad-shuffer-group-edit.jpg"
													alt="Squad Shuffer collaborative edit view where users can rename groups and swap members"
													class="w-full rounded-xl shadow-sm"
													loading="lazy"
												/>
											</a>
											<figcaption class="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
												Collaborative refinement: share editable links to adjust team names or rebalance members.
											</figcaption>
										</figure>
									</div>
								</section>

								<section id="chain-path-a">
									<h2>Path A: Group Stage Then Bracket</h2>

									<p>
										When we chain from Squad Shuffer into <a href="https://minibreaks.io/apps/group-qualifier" target="_blank" rel="noopener noreferrer"><strong>Group Qualifier</strong></a>, the next app opens pre-filled.
									</p>

									<figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<a href="/app-chaining/group-qualifier-with-input.jpg" target="_blank" rel="noopener noreferrer">
											<img
												src="/app-chaining/group-qualifier-with-input.jpg"
												alt="Group Qualifier pre-filled input after chaining from Squad Shuffer"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</a>
										<figcaption class="mt-3 text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											Chained handoff: Group Qualifier receives the team setup and is ready to run.
										</figcaption>
									</figure>

									<p>
										In this pilot case, we have <strong>8 teams</strong>, split into <strong>2 groups</strong>, and qualify <strong>2 teams from each group</strong>. That creates a round-robin stage where each group of 4 plays 6 matches, so the two groups produce <strong>12 games total</strong>.
									</p>

									<p>
										This is valuable because every team gets more playtime before elimination pressure begins.
									</p>

									<figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<a href="/app-chaining/group-qualifer-results.jpg" target="_blank" rel="noopener noreferrer">
											<img
												src="/app-chaining/group-qualifer-results.jpg"
												alt="Group Qualifier results showing standings and qualified teams after recorded match outcomes"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</a>
										<figcaption class="mt-3 text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											Qualification view: record results, determine winners, and produce finalists for the bracket.
										</figcaption>
									</figure>

									<p>
										After 4 teams qualify, results can chain forward into <a href="https://minibreaks.io/apps/tournament-bracket-builder" target="_blank" rel="noopener noreferrer"><strong>Tournament Bracket</strong></a>.
									</p>
								</section>

								<section id="chain-path-b">
									<h2>Path B: Direct to Bracket (Skip Group Stage)</h2>

									<p>
										The beauty of app flow is that the long path is optional.
									</p>

									<p>
										Users can chain from Squad Shuffer straight to bracket generation if they want a faster tournament setup.
									</p>

									<figure class="not-prose my-10 overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50">
										<a href="/app-chaining/tournament-bracket-input-from-squad-shuffer.jpg" target="_blank" rel="noopener noreferrer">
											<img
												src="/app-chaining/tournament-bracket-input-from-squad-shuffer.jpg"
												alt="Tournament bracket pre-filled directly from Squad Shuffer for an immediate knockout setup"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</a>
										<figcaption class="mt-3 text-center text-sm leading-relaxed text-gray-500 dark:text-gray-400">
											Direct chain: 8 teams are immediately matched into knockout opponents without round-robin qualification.
										</figcaption>
									</figure>
								</section>

								<section id="benefits">
									<h2>Benefits of Chaining as App Flow</h2>

									<p>
										This first pilot confirms the behavior I wanted:
									</p>

									<ul>
										<li><strong>Flexible depth:</strong> users choose lightweight or full workflow per context.</li>
										<li><strong>Faster starts:</strong> no mandatory wizard for users who only need one outcome.</li>
										<li><strong>Higher replayability:</strong> each app can be reused in different chains.</li>
										<li><strong>Clear mental model:</strong> one app, one promise, optional next step.</li>
										<li><strong>Privacy-friendly handoff:</strong> flow state travels in the URL, not a central server session.</li>
									</ul>

									<p>
										It is still early, but this feels like a practical bridge between the Mosaic vision and product behavior users can already touch.
									</p>
								</section>

								<section id="drawbacks">
									<h2>Potential Drawbacks (and How I am Handling Them)</h2>

									<p>
										App flow also has tradeoffs, and I want to be explicit about them.
									</p>

									<ul>
										<li><strong>Discovery cost:</strong> users may not know what can chain next.</li>
										<li><strong>Mitigation:</strong> after results are generated, show clear candidate apps that this output can flow into.</li>
										<li><strong>Context switching:</strong> moving between apps can feel fragmented if handoff is weak.</li>
										<li><strong>Mitigation:</strong> open the next app pre-filled and preserve naming and structure from the previous result.</li>
										<li><strong>Chain quality risk:</strong> bad defaults in one app can propagate downstream.</li>
										<li><strong>Mitigation:</strong> keep each app editable after handoff so users can correct and re-chain quickly.</li>
									</ul>
								</section>

								<section id="future">
									<h2>Future of App Flow</h2>

									<p>
										I will keep experimenting with what else can be chained and how far this model can go.
									</p>

									<p>
										Beyond tournaments, the next questions I want to test are:
									</p>

									<ul>
										<li>Can app flow work for classroom and workshop operations, not just games?</li>
										<li>Can we build short productivity chains where each step stays disposable?</li>
										<li>Can chain suggestions become smarter based on result shape and user intent?</li>
										<li>Can flow templates emerge naturally from how people actually chain apps?</li>
									</ul>

									<p>
										The goal is still the same: one small app should be complete on its own, but also become a clean building block for bigger outcomes when users need more.
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
												class="block text-gray-600 transition-colors hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
											>
												{item.title}
											</a>
										</li>
									{/each}
								</ul>
							</nav>

							<div class="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
								<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
									Open Apps
								</p>
								<div class="space-y-2 text-sm">
									<a class="block text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300" href="https://minibreaks.io/apps/squad-shuffle" target="_blank" rel="noopener noreferrer">Squad Shuffer</a>
									<a class="block text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300" href="https://minibreaks.io/apps/group-qualifier" target="_blank" rel="noopener noreferrer">Group Qualifier</a>
									<a class="block text-orange-600 transition-colors hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300" href="https://minibreaks.io/apps/tournament-bracket-builder" target="_blank" rel="noopener noreferrer">Tournament Bracket</a>
								</div>
							</div>

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
										class="flex-1 rounded-lg bg-orange-50 p-2 text-center text-sm font-medium text-orange-600 transition-colors hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/50"
									>
										<i class="fab fa-twitter text-xs"></i>
									</a>
									<a
										href={getLinkedInShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on LinkedIn"
										class="flex-1 rounded-lg bg-orange-50 p-2 text-center text-sm font-medium text-orange-600 transition-colors hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 dark:hover:bg-orange-900/50"
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
			class="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-colors hover:bg-orange-600"
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
