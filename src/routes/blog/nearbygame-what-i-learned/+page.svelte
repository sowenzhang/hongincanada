<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: "What I Learned Building a Walking Game With AI's Help | Hong in Canada",
		description:
			'Geography, ambient audio, and the pain of Microsoft Store IAP -- what a year of building NearbyGame as a solo dev with AI taught me.',
		canonical: 'https://www.hongincanada.com/blog/nearbygame-what-i-learned',
		ogImage: 'https://www.hongincanada.com/nearbygame-announce/cities-landmarks-discovery.png',
		publishDate: 'May 11, 2026',
		readTime: '~10 min read'
	};

	const tableOfContents = [
		{ id: 'hook', title: 'The Short Version' },
		{ id: 'why-walking-game', title: 'Why a Walking Game' },
		{ id: 'what-i-wanted-to-learn', title: 'Building the World' },
		{ id: 'microsoft-store-iap', title: 'The Hard Parts: Store IAP' },
		{ id: 'where-it-is-now', title: 'Where It Is Now' }
	];

	const blogPostingSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: "What I Learned Building a Walking Game With AI's Help",
		description:
			'Geography, ambient audio, and the pain of Microsoft Store IAP -- what a year of building NearbyGame as a solo dev with AI taught me.',
		author: {
			'@type': 'Person',
			name: 'Hong'
		},
		datePublished: '2026-05-11',
		image: 'https://www.hongincanada.com/nearbygame-announce/cities-landmarks-discovery.png'
	});

	let isDark = $state(true);
	let showTOC = $state(false);
	let showBackToTop = $state(false);
	let prefersReducedMotion = $state(false);
	let copyStatus = $state('');

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

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(pageData.canonical);
			copyStatus = 'Link copied';
		} catch {
			copyStatus = 'Copy failed';
		}

		setTimeout(() => {
			copyStatus = '';
		}, 2000);
	}

	function getTwitterShareUrl() {
		return `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageData.canonical)}&text=${encodeURIComponent(pageData.title)}`;
	}

	function getLinkedInShareUrl() {
		const url = encodeURIComponent(pageData.canonical);
		const title = encodeURIComponent(pageData.title);
		const summary = encodeURIComponent(pageData.description);
		return `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${summary}`;
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

	{@html `<script type="application/ld+json">${blogPostingSchema}</script>`}
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-950 transition-colors">
	<div
		class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-colors"
	>
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a
					href="/"
					class="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
				>
					<i class="fas fa-arrow-left text-xs" aria-hidden="true"></i>
					Hong in Canada
				</a>
				<button
					onclick={() => (showTOC = !showTOC)}
					class="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
				>
					<i class="fas fa-list text-emerald-500 text-xs" aria-hidden="true"></i>
					<span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Contents</span>
					<i
						class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-gray-400 text-xs"
						aria-hidden="true"
					></i>
				</button>
			</div>
			<button
				onclick={toggleTheme}
				class="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<i class="fas fa-sun text-yellow-500 text-xs" aria-hidden="true"></i>
					<span class="hidden sm:inline">Light Mode</span>
				{:else}
					<i class="fas fa-moon text-xs" aria-hidden="true"></i>
					<span class="hidden sm:inline">Dark Mode</span>
				{/if}
			</button>
		</div>
	</div>

	<header class="bg-white dark:bg-gray-900 py-12 transition-colors">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<nav class="mb-8 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
				<a href="/" class="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</a>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span>Blog</span>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span class="text-gray-600 dark:text-gray-300">What I Learned Building NearbyGame</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span
					class="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
				>
					<i class="fas fa-route mr-1.5" aria-hidden="true"></i>NearbyGame
				</span>
				<span
					class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400"
				>
					Dev Story
				</span>
			</div>
			<h1
				class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl"
			>
				What I Learned Building a Walking Game With AI's Help
			</h1>
			<p class="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				Geography, ambient audio, and the pain of Microsoft Store IAP -- a year of solo dev notes.
			</p>
			<div class="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span
					><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span
				>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<main
		class="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors min-h-screen"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col lg:flex-row gap-8">
				<article class="flex-1 min-w-0">
					<div
						class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
					>
						<div class="p-8 lg:p-14">
							<div
								class="prose prose-lg dark:prose-invert max-w-none
								prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
								prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:scroll-mt-24
								prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
								prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
								prose-strong:text-gray-900 dark:prose-strong:text-white
								prose-a:text-emerald-600 dark:prose-a:text-emerald-400 prose-a:underline-offset-2
								[&_section]:scroll-mt-24 [&_h2]:scroll-mt-24"
							>
								<section id="hook">
									<p>
										A year later, NearbyGame is live on the Microsoft Store. It is a quiet
										game where you walk real roads between real cities, through changing
										weather and ambient audio. No combat, no quests, no timers. This post
										is not a launch announcement -- it is what I actually learned along
										the way.
									</p>

									<p>
										In the
										<a href="/blog/nearbygame-pivot">previous blog</a>, I wrote about how
										I pivoted from the original NearbyGame vision -- a venue-finding app
										-- into the walking game it is today.
									</p>

									<div class="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-5 py-4">
										<p class="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
											<i class="fas fa-lightbulb mr-1.5" aria-hidden="true"></i>Learning #1
										</p>
										<p class="text-gray-700 dark:text-gray-300 text-base">
											Do not force ideas, even when the idea is just for fun and personal
											passion. If it feels heavy to build, it probably is. Recognize it
											early and pivot.
										</p>
									</div>

									<p>
										Today I want to announce that NearbyGame is officially launched,
										almost two months after that pivot. In this blog I want to share the
										other learnings I have gained during this journey.
									</p>

									<p>
										You can try it here:
										<a
											href="https://nearbygame.com"
											target="_blank"
											rel="noopener noreferrer"
										>nearbygame.com</a>
										(free for Windows, Washington state included).
									</p>
								</section>

								<section id="why-walking-game">
									<h2>Why a Walking Game, of All Things</h2>

									<p>
										It is always interesting to me that this type of game exists --
										<a
											href="https://en.wikipedia.org/wiki/Walking_simulator"
											target="_blank"
											rel="noopener noreferrer"
										>walking simulators</a>. I played a few over the years, but they all
										had fancy graphics, or puzzles to solve, or horror plots. None of them
										were like what I wanted: no purpose at all, simply just walk.
									</p>

									<p>
										Completely relaxing and calming. No story, no jump scare, not even 3D
										rendering. Just ambient noise, like you are walking alone on a trail.
									</p>

									<p>
										Most of my days are spent in busy work -- driving from A to B, being
										distracted between housework and office work. I am not sure if I am
										the only person feeling this, but my time is constantly not controlled
										by myself. The freedom of doing nothing is a luxury. That is why I do
										not want another grind with a game. I just want to sit there,
										listening to white noise, doing nothing, no purpose.
									</p>

									<p>
										However, I do not have the fancy skill of 3D rendering. I tried, even
										with the help of AI, and I do not think that can take me too far. So I
										decided to focus on <em>where</em> -- a sense of place. I decided to
										walk-sim in the real world.
									</p>

									<p>
										I picked where I live -- Washington State -- as a starter.
									</p>

									<p>
										I started building a map of this state, connecting major cities,
										defining terrain, adding layers of sounds, and placing famous
										landmarks accordingly.
									</p>

									<figure class="not-prose my-10">
									<div
										class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3"
									>
										<img
											src="/nearbygame-announce/nearbygame_scene1.png"
											alt="A walking scene in NearbyGame: open road, ambient world"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption
										class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400"
									>
										A scene from the walk: open road, soft light, ambient world.
									</figcaption>
								</figure>

									<div class="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-5 py-4">
										<p class="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
											<i class="fas fa-lightbulb mr-1.5" aria-hidden="true"></i>Learning #2
										</p>
										<p class="text-gray-700 dark:text-gray-300 text-base">
											When building an idea, I still need to recognize my limitations.
											Most importantly, I need to be the first customer of my own idea.
										</p>
									</div>
								</section>

								<section id="what-i-wanted-to-learn">
									<h2>Building the World</h2>

									<p>
										Even though I am not doing fancy 3D rendering, I still want the game
										to feel like a real place. My approach was to render the environment
										and change the ambient sounds based on where the player is walking.
										For example, near a city like Seattle or Spokane, the game shows a
										city-like view and you hear traffic or distant music. Near a forest
										or trail, like Olympic National Park, you see green and mountains,
										and hear frogs and creeks.
									</p>

									<p>
										In the screenshot below, you can see the game has an Auto Environment
										Audio option that automatically adjusts the ambient noise based on
										your location. It also shows the walk towards Pullman, a city in
										eastern Washington, where the game depicts a rocky, gravel-like
										environment.
									</p>

									<figure class="not-prose my-10">
										<div
											class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3"
										>
											<img
												src="/nearbygame-announce/nearbygame_scene2.png"
												alt="NearbyGame: walking towards Pullman with auto environment audio enabled"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption
											class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400"
										>
											Walking towards Pullman -- auto environment audio and terrain rendering.
										</figcaption>
									</figure>

									<p>
										But walking is not just about cities. I also designed landmarks that
										players can discover along the way. For each discovered landmark,
										you can click the link to learn more about it.
									</p>

									<figure class="not-prose my-10">
										<div
											class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3"
										>
											<img
												src="/nearbygame-announce/cities-landmarks-discovery.png"
												alt="NearbyGame: discovering cities and landmarks along the walk"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption
											class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400"
										>
											Discovering cities and landmarks as you walk.
										</figcaption>
									</figure>

									<p>
										This might actually be the most fun part of creating the game. AI can
										help to a certain degree when planning landmarks for each city, but a
										lot of the time it oversimplifies and skips interesting places --
										unless I give it specific instructions like "use Instagram to search
										what places are most shared." I learned a lot during this process
										myself. For example, I learned that Kurt Cobain's memorial is in
										Aberdeen, Washington. I learned there is a place called Thor's Well
										in Oregon. In Idaho, there is a massive pear-shaped boulder called
										Balanced Rock. So many cool places I had never heard of or been to,
										and just learning about them was already a great experience.
									</p>

									<div class="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-5 py-4">
										<p class="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
											<i class="fas fa-lightbulb mr-1.5" aria-hidden="true"></i>Learning #3
										</p>
										<p class="text-gray-700 dark:text-gray-300 text-base">
											Even if I do not have what other people have (like fancy rendering),
											I can still add value and meaning to the idea from a different angle.
										</p>
									</div>
								</section>

								<section id="microsoft-store-iap">
									<h2>The Hard Parts -- Microsoft Store IAP</h2>

									<p>
										This is the section I would actually want to read on someone else's
										blog, because nobody talks about it. So I will be specific.
									</p>

									<p>
										NearbyGame uses In-App Purchase through the Microsoft Store to
										unlock additional regions. Conceptually simple. In practice, this
										was the single hardest part of the entire project, and the painful
										part was not the SDK itself.
									</p>

									<p>
										I submitted <strong>eleven iterations</strong> of the build to
										Partner Center before IAP worked correctly end-to-end. Each
										iteration was a full MSIX rebuild and a full submission.
										Fortunately, Partner Center submissions are now fast enough that I
										could try again and again without waiting days between attempts.
										Still, there is no good local sandbox for Store IAP. You can stub
										purchase calls in dev, but to actually validate that a real
										purchase against the real Store catalog unlocks the right
										entitlement on the real machine, you have to ship a real build,
										exercise the real purchase, refund it, and try again.
									</p>

									<p>
										The bug that ate the most time was not even in the IAP SDK. It was
										a permissions issue with Tauri 2's <code>plugin-fs</code> in an
										MSIX context. I was writing the entitlement receipt to local
										storage after purchase, and the write looked like it was working
										-- no error, no exception, the function returned cleanly -- but
										the file simply was not there afterward. The <code>mkdir</code>
										calls right next to it worked fine, which made it look like a
										filesystem layout problem, not a permissions one. Several days of
										staring at this later, I found it:
										<code>fs:allow-write</code> in the Tauri capability config does
										not cover binary <code>writeFile(Uint8Array)</code> in MSIX. You
										need the more granular <code>fs:allow-write-file</code>
										permission. Once I added that one line, the entire IAP flow worked
										on the next submission.
									</p>

									<div class="not-prose my-6 rounded-lg border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-5 py-4">
										<p class="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">
											<i class="fas fa-lightbulb mr-1.5" aria-hidden="true"></i>Learning #4
										</p>
										<p class="text-gray-700 dark:text-gray-300 text-base">
											Give yourself enough room to cross the finish line. Even when I
											was excited to ship, the last piece turned out to be the most
											challenging part. Do not underestimate the final stretch.
										</p>
									</div>
								</section>

								<section id="where-it-is-now">
									<h2>Where It Is Now</h2>

									<p>
										NearbyGame is live on the Microsoft Store. The free tier covers Washington
										state -- 33 cities and 37 roads. The full version ($4.99, one-time) unlocks
										Oregon, BC, Idaho, and Nevada, with more regions on the way as DLC.
									</p>

									<p>
										No account, no email, no microtransactions. If you've ever wanted a game you
										can sit with for 30 minutes without anything demanding your attention, give it
										a walk.
									</p>

									<div class="not-prose mt-8 flex flex-wrap items-center gap-4">
										<a
											href="https://apps.microsoft.com/detail/9PF6C7N61JWB"
											target="_blank"
											rel="noopener noreferrer"
										>
											<img
												src="https://get.microsoft.com/images/en-us%20dark.svg"
												width="200"
												alt="Get NearbyGame from Microsoft Store"
											/>
										</a>
										<a
											href="https://nearbygame.com"
											target="_blank"
											rel="noopener noreferrer"
											class="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
										>
											nearbygame.com
										</a>
									</div>
								</section>
							</div>
						</div>
					</div>
				</article>

				{#if showTOC}
					<aside
						class="lg:w-56 lg:flex-shrink-0"
						transition:slide={{ axis: 'x', duration: prefersReducedMotion ? 0 : 250 }}
					>
						<div class="sticky top-20 space-y-4">
							<div
								class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg"
							>
								<h3
									class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
								>
									Contents
								</h3>
								<nav class="space-y-1">
									{#each tableOfContents as item (item.id)}
										<a
											href="#{item.id}"
											class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
										>
											{item.title}
										</a>
									{/each}
								</nav>
							</div>

							<div
								class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg"
							>
								<h3
									class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
								>
									Share
								</h3>
								<div class="flex gap-2">
									<a
										href={getTwitterShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on Twitter"
										class="flex-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 p-2 text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
									>
										<i class="fab fa-twitter text-xs"></i>
									</a>
									<a
										href={getLinkedInShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on LinkedIn"
										class="flex-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 p-2 text-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
									>
										<i class="fab fa-linkedin-in text-xs"></i>
									</a>
									<button
										onclick={copyLink}
										aria-label="Copy link to clipboard"
										class="flex-1 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 text-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
									>
										<i class="fas fa-link text-xs"></i>
									</button>
								</div>
								<p
									class="mt-2 text-xs text-gray-500 dark:text-gray-400"
									aria-live="polite"
								>
									{copyStatus}
								</p>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</main>

	<footer
		class="border-t border-gray-200 dark:border-gray-800 py-10 text-center text-sm text-gray-500 dark:text-gray-500"
	>
		<a href="/" class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
			>Back to hongincanada.com</a
		>
	</footer>
</div>

{#if showBackToTop}
	<button
		onclick={scrollToTop}
		transition:slide={{ axis: 'y', duration: prefersReducedMotion ? 0 : 200 }}
		class="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:scale-110 transition-transform"
		aria-label="Back to top"
	>
		<i class="fas fa-arrow-up text-sm" aria-hidden="true"></i>
	</button>
{/if}
