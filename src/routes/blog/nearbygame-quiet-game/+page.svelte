<script lang="ts">
	import { onMount } from 'svelte';
	import MorePosts from '$lib/components/MorePosts.svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'A Quiet Walk with Puzzles, Punchlines, and Places to Discover | Hong in Canada',
		description:
			'NearbyGame blends relaxed walking with funny billboards, optional roadside puzzles, and collectible stamps. Wander at your pace, stop to solve a puzzle, and discover new places along the way.',
		canonical: 'https://www.hongincanada.com/blog/nearbygame-quiet-game',
		ogImage: 'https://www.hongincanada.com/nearbygame-refactor/colorful-world.png',
		publishDate: 'November 23, 2026',
		readTime: '~5 min read'
	};

	const tableOfContents = [
		{ id: 'walk-at-your-own-pace', title: 'A walk at your own pace' },
		{ id: 'funny-billboards', title: 'Funny signs along the road' },
		{ id: 'npc-puzzles', title: 'Roadside friends and puzzles' },
		{ id: 'stamp-album', title: 'A journey worth collecting' },
		{ id: 'relax-play-discover', title: 'Relax, play, and discover' },
		{ id: 'whats-next', title: "What's next" }
	];

	let isDark = $state(false);
	let showTOC = $state(false);
	let prefersReducedMotion = $state(false);
	let copyStatus = $state('');

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mediaQuery.matches;

		const saved = localStorage.getItem('theme');
		isDark = saved ? saved === 'dark' : false;
		document.documentElement.classList.toggle('dark', isDark);
		showTOC = window.innerWidth >= 1024;

		const handleMotionChange = (event: MediaQueryListEvent) => {
			prefersReducedMotion = event.matches;
		};

		mediaQuery.addEventListener('change', handleMotionChange);
		return () => {
			mediaQuery.removeEventListener('change', handleMotionChange);
		};
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
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

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": "A Quiet Walk with Puzzles, Punchlines, and Places to Discover",
			"description": "NearbyGame blends relaxed walking with funny billboards, optional roadside puzzles, and collectible stamps. Wander at your pace, stop to solve a puzzle, and discover new places along the way.",
			"author": {
				"@type": "Person",
				"name": "Hong"
			},
			"datePublished": "2026-11-23",
			"image": "https://www.hongincanada.com/nearbygame-refactor/colorful-world.png"
		}
	</script>
</svelte:head>

<div class="min-h-screen bg-white transition-colors dark:bg-gray-950">
	<div
		class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900"
	>
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a
					href="/"
					class="flex min-h-[44px] items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
				>
					<i class="fas fa-arrow-left text-xs" aria-hidden="true"></i>
					Hong in Canada
				</a>
				<button
					onclick={() => (showTOC = !showTOC)}
					class="flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
				>
					<i class="fas fa-list text-xs text-teal-500" aria-hidden="true"></i>
					<span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Contents</span>
					<i
						class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-xs text-gray-400"
						aria-hidden="true"
					></i>
				</button>
			</div>
			<button
				onclick={toggleTheme}
				class="flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
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
			<nav
				class="mb-8 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500"
				aria-label="Breadcrumb"
			>
				<a href="/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-300">Home</a>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<a href="/blog" class="transition-colors hover:text-gray-600 dark:hover:text-gray-300"
					>Blog</a
				>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span class="text-gray-600 dark:text-gray-300"
					>NearbyGame: Puzzles, Punchlines, and Places</span
				>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span
					class="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400"
				>
					<i class="fas fa-route mr-1.5" aria-hidden="true"></i>NearbyGame
				</span>
				<span
					class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400"
				>
					Product Design
				</span>
			</div>
			<h1
				class="mb-5 font-serif text-4xl font-semibold leading-tight text-gray-900 dark:text-white md:text-5xl"
			>
				A Quiet Walk with Puzzles, Punchlines, and Places to Discover
			</h1>
			<p class="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				NearbyGame is a place to relax, have a little fun, solve a puzzle, and discover somewhere
				new, all at your own pace.
			</p>
			<div class="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<main class="min-h-screen bg-[var(--bg)] py-12 transition-colors">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col gap-8 lg:flex-row">
				<article class="min-w-0 flex-1">
					<div
						class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"
					>
						<div class="p-8 lg:p-14">
							<div
								class="prose prose-lg dark:prose-invert prose-headings:font-bold
									prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:mt-12
									prose-h2:mb-5 prose-h2:text-2xl prose-h2:scroll-mt-24 prose-p:leading-relaxed
									prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:mb-2
									prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900
									dark:prose-strong:text-white prose-a:text-teal-600
									prose-a:underline-offset-2 dark:prose-a:text-teal-400 max-w-none
									[&_h2]:scroll-mt-24 [&_section]:scroll-mt-24"
							>
								<section id="walk-at-your-own-pace">
									<p class="text-lg leading-relaxed">
										When I wrote about <a href="/blog/nearbygame-what-i-learned"
											>what I learned building NearbyGame</a
										>, I talked about wanting a game where you could pick a road, put on headphones,
										and walk without being hurried. That is still the heart of it. But a relaxing
										walk does not have to mean an empty one.
									</p>
									<p>
										The colorful three-dimensional world gives the journey more character. Cities,
										forests, and roadsides each have their own feel, and small scenes may catch your
										eye along the way. You can follow the road yourself or let auto-walk keep you
										company.
									</p>
									<figure class="not-prose my-10">
										<div
											class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50"
										>
											<img
												src="/nearbygame-refactor/colorful-world.png"
												alt="A colorful three-dimensional NearbyGame scene with a walker on a road between rounded trees and city buildings"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											A colorful stretch of road to wander at your own pace.
										</figcaption>
									</figure>
									<p>
										There is no required route or moment you have to catch. You can simply enjoy the
										scenery, or follow your curiosity when something looks interesting.
									</p>
								</section>

								<section id="funny-billboards">
									<h2>Funny signs along the road</h2>
									<p>
										Some of the roadside signs are ads for things you probably do not need, like
										Puddle Insurance, “because boots are a lifestyle.” Others are jokes about
										walking, geese, or the billboard itself.
									</p>
									<p>
										If you choose to interact, a sign might wobble, sneeze, bow, or make a little
										exit. You can also ignore it and keep going. Billboards do not interrupt your
										walk or award progress. They are there for a small laugh, not another task.
									</p>
									<figure class="not-prose my-10">
										<div
											class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50"
										>
											<img
												src="/nearbygame-refactor/funny-billboard.png"
												alt="A NearbyGame roadside billboard advertising Puddle Insurance with the tagline Because boots are a lifestyle"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											Puddle Insurance: because boots are a lifestyle.
										</figcaption>
									</figure>
								</section>

								<section id="npc-puzzles">
									<h2>Roadside friends and puzzles</h2>
									<p>
										Every so often, a roadside friend offers a puzzle. Some are multiple choice;
										others ask you to guess a word or a number. The question bank ranges from
										patterns and logic to nature, geography, and road-trip trivia, so the
										interaction can feel like a quick change of pace rather than a separate game you
										have to commit to.
									</p>
									<p>
										There is no timer, and walking pauses while the puzzle is open. You can think it
										through, or leave without losing anything. The difficulty adjusts based on
										recent answers, and a first correct solve earns coins. Afterward, the visitor
										might cheer, dance, take a nap, or run off.
									</p>
									<p>
										Those coins can also go toward an optional 2× walking-speed upgrade, but solving
										puzzles is meant to be fun on its own.
									</p>
								</section>

								<section id="stamp-album">
									<h2>A journey worth collecting</h2>
									<p>
										As you travel, you can discover city and landmark stamps for your album. Special
										Stamps come from the game's existing achievements. Together they make a personal
										record of where you have been and what you have accomplished.
									</p>
									<p>
										The album is for remembering the journey, not keeping up with a deadline. Stamps
										stay in your lifetime collection when you reset a walk, and you can browse
										places you have found or look for a landmark you have not reached yet.
									</p>
									<figure class="not-prose my-10">
										<div
											class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50"
										>
											<img
												src="/nearbygame-refactor/travel-album.png"
												alt="The NearbyGame travel album showing collectible city and landmark postage stamps"
												class="w-full rounded-xl shadow-sm"
												loading="eager"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											A travel album that keeps the places you have discovered.
										</figcaption>
									</figure>
									<p>
										I like that collecting stamps gives exploration a little lasting meaning without
										asking you to collect everything. A city you reached because you wanted to see
										what was there can become a memory of that walk.
									</p>
								</section>

								<section id="relax-play-discover">
									<h2>Relax, play, and discover</h2>
									<p>
										There are a few ways to spend time in NearbyGame: let the scenery roll by,
										notice a small surprise, laugh at a billboard, stop to solve a puzzle, or
										collect a stamp from somewhere new. You do not have to do all of them. The road
										is still yours to take at your own pace.
									</p>
									<p>
										That is the balance I want to keep building toward: a relaxing game that still
										has room for fun, curiosity, and the satisfaction of figuring something out.
									</p>
								</section>

								<section id="whats-next">
									<h2>What's next: a cozy road trip adventure</h2>
									<div
										class="not-prose my-8 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-5 dark:border-teal-900 dark:bg-teal-900/20"
									>
										<p class="mb-2 font-serif text-xl font-semibold text-gray-900 dark:text-white">
											NearbyGame: A Cozy Road Trip Adventure
										</p>
										<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
											Explore a cheerful world inspired by real places. Travel between towns, meet
											unusual characters, play small games, discover local stories, and collect
											memories. Follow your own journey, at your own pace.
										</p>
										<p class="mt-4 font-semibold text-gray-900 dark:text-white">
											The world is relaxing, but it is never only scenery.
										</p>
									</div>
									<p>
										That is the direction I want to explore next. I am thinking about more
										open-world activities inspired by road trips: fishing, visiting a museum,
										camping, hunting, or uncovering an unknown part of the map. These are
										possibilities I am exploring, not a feature list or a promise about what ships
										next.
									</p>
									<p>
										One player might spend time fishing; another might visit a museum, reveal an
										unfamiliar road, or simply keep walking. I want people to choose what interests
										them and how they want to spend their time. None of those activities should be
										required to enjoy the journey.
									</p>
									<p>
										If you would like to see the direction for yourself, visit
										<a href="https://www.nearbygame.com/" target="_blank" rel="noopener noreferrer"
											>NearbyGame</a
										>.
									</p>
									<p>
										For the earlier chapters, read <a href="/blog/nearbygame-pivot"
											>how I pivoted the idea</a
										>
										and
										<a href="/blog/nearbygame-what-i-learned"
											>what I learned building its first version</a
										>.
									</p>
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
								class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-900"
							>
								<h3
									class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
								>
									Contents
								</h3>
								<nav class="space-y-1" aria-label="Table of contents">
									{#each tableOfContents as item (item.id)}
										<a
											href="#{item.id}"
											class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-600 dark:text-gray-300 dark:hover:bg-teal-900/20 dark:hover:text-teal-400"
										>
											{item.title}
										</a>
									{/each}
								</nav>
							</div>

							<div
								class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-900"
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
										class="flex-1 rounded-lg bg-teal-50 p-2 text-center text-sm font-medium text-teal-600 transition-colors hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:hover:bg-teal-900/50"
									>
										<i class="fab fa-twitter text-xs" aria-hidden="true"></i>
									</a>
									<a
										href={getLinkedInShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on LinkedIn"
										class="flex-1 rounded-lg bg-teal-50 p-2 text-center text-sm font-medium text-teal-600 transition-colors hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:hover:bg-teal-900/50"
									>
										<i class="fab fa-linkedin-in text-xs" aria-hidden="true"></i>
									</a>
									<button
										onclick={copyLink}
										aria-label="Copy link to clipboard"
										class="flex-1 rounded-lg bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
									>
										<i class="fas fa-link text-xs" aria-hidden="true"></i>
									</button>
								</div>
								<p class="mt-2 text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
									{copyStatus}
								</p>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</main>

	<MorePosts currentSlug="nearbygame-quiet-game" />

	<footer
		class="border-t border-gray-200 py-10 text-center text-sm text-gray-500 dark:border-gray-800 dark:text-gray-500"
	>
		<a href="/" class="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
			Back to hongincanada.com
		</a>
	</footer>
</div>

