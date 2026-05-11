<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: "What I Learned Building a Walking Game With AI's Help | Hong in Canada",
		description:
			'Geography, ambient audio, and the pain of Microsoft Store IAP — what a year of building NearbyGame as a solo dev with AI taught me.',
		canonical: 'https://www.hongincanada.com/blog/nearbygame-what-i-learned',
		ogImage: 'https://www.hongincanada.com/nearbygame-announce/cities-landmarks-discovery.png',
		publishDate: 'May 11, 2026',
		readTime: '~10 min read'
	};

	const tableOfContents = [
		{ id: 'hook', title: 'The Short Version' },
		{ id: 'why-walking-game', title: 'Why a Walking Game' },
		{ id: 'what-i-wanted-to-learn', title: 'What I Wanted to Learn' },
		{ id: 'the-fun-parts', title: 'The Fun Parts' },
		{ id: 'microsoft-store-iap', title: 'The Hard Parts: Store IAP' },
		{ id: 'what-id-do-differently', title: "What I'd Do Differently" },
		{ id: 'where-it-is-now', title: 'Where It Is Now' }
	];

	const blogPostingSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: "What I Learned Building a Walking Game With AI's Help",
		description:
			'Geography, ambient audio, and the pain of Microsoft Store IAP — what a year of building NearbyGame as a solo dev with AI taught me.',
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
				Geography, ambient audio, and the pain of Microsoft Store IAP — a year of solo dev notes.
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
										I always wanted to build a walking simulator. I don't know 3D, I'd never
										shipped a game, and I had a day job. None of that stopped me — because
										with AI's help, I didn't have to be an expert at any one piece. I just
										had to be willing to keep walking.
									</p>

									<p>
										A year later, NearbyGame is live on the Microsoft Store. It's a quiet
										game where you walk real roads between real cities through ever-changing
										weather and ambient audio. No combat, no quests, no timers. This post
										isn't a launch announcement — it's what I actually learned along the way.
									</p>
								</section>

								<figure class="not-prose my-10">
									<div
										class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3"
									>
										<img
											src="/nearbygame-announce/cities-landmarks-discovery.png"
											alt="NearbyGame: walking through cities and discovering landmarks"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption
										class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400"
									>
										NearbyGame: walk real cities, discover real landmarks, no quests.
									</figcaption>
								</figure>

								<section id="why-walking-game">
									<h2>Why a Walking Game, of All Things</h2>

									<p>
										Walking sims are an unfashionable genre. There's no combat, no progression
										curve, no retention loop. The reviews tend to fall into two camps: "this
										was exactly what I needed" and "nothing happens." Both are right. That's
										the appeal.
									</p>

									<p>
										I spend my days in software, which means I spend my days inside small,
										bright rectangles that demand attention. The last thing I want at the end
										of a workday is another game that asks me to optimize a build order or
										grind for a drop. I wanted something I could sit with. Calming, not
										racing. A place to be, not a thing to beat.
									</p>

									<p>
										Walking sims do that better than almost any other genre, and they're
										technically tractable for a solo dev. You don't need physics or netcode
										or anti-cheat. You need a sense of place. That felt like something I
										could actually deliver, even without a 3D background.
									</p>
								</section>

								<section id="what-i-wanted-to-learn">
									<h2>What I Wanted to Learn From Making It</h2>

									<p>
										I didn't build this to get rich. I built it to learn. Here's what I actually
										wanted to learn:
									</p>

									<ul>
										<li>
											<strong>Geography of the US and Canada</strong> — which cities are where,
											which highways connect them, what the terrain actually looks like along the
											way.
										</li>
										<li>
											<strong>How to build an ambient audio system</strong> that switches
											automatically based on location: coast → ocean waves, forest → birdsong, city
											night → distant traffic.
										</li>
										<li>
											<strong>How to make the visual landscape change as you walk</strong> — city,
											ocean, desert, forest, mountain — without it feeling like a slideshow.
										</li>
										<li>
											<strong>Landmarks of each state and province</strong> — the things you'd
											actually look up if you visited.
										</li>
									</ul>

									<p>
										The geography piece surprised me the most. I've lived in the Pacific
										Northwest for years and still managed to learn things I should have
										known. I learned that the Olympic Peninsula has an actual rainforest — a
										temperate one, dripping with moss, an hour from a coffee chain. I learned
										which highways cross the Cascades and which ones close in winter. I
										learned the order of small towns along I-5 between Seattle and Portland
										the way you only learn them by reading them off road maps a hundred times
										in a row.
									</p>

									<p>
										I built the audio system second, after the basic walking loop, and it
										became the soul of the project. The rule is simple: every location has a
										biome tag (coast, forest, urban, desert, mountain), every biome has a
										small library of loops and one-shots, and the mixer crossfades as you
										cross boundaries. The hard part wasn't the mixing — it was the taxonomy.
										What does the road between Hood River and The Dalles sound like? It's not
										exactly forest, not exactly desert, not exactly urban. Most of the work
										was sitting with audio clips and asking myself, "does this feel like
										there?"
									</p>
								</section>

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

								<section>
									<p>
										Landmarks were the most enjoyable research. I'd start with a state, open
										a map, and write down everything I could plausibly include — not the
										obvious ones, but the ones you'd actually point out to a visitor. Some of
										what I ended up finding: <em>[LANDMARK_PLACEHOLDER_1]</em>,
										<em>[LANDMARK_PLACEHOLDER_2]</em>, and
										<em>[LANDMARK_PLACEHOLDER_3]</em>. None of those were on my radar a year
										ago.
									</p>
								</section>

								<section id="the-fun-parts">
									<h2>The Fun Parts</h2>

									<p>
										Most of building this was just fun, and I'd rather not pretend otherwise.
										The ambient sound system in particular ended up being something I use
										outside the game. I have it running quietly in another window while I
										write this. It's a coast loop with light wind and distant gulls, and
										it's better than every focus-music app I've tried, because I designed it
										for someone who wants the sound to do almost nothing.
									</p>

									<p>
										The single moment that sold me on the whole project was the first time
										I walked from Seattle south toward Portland and noticed, somewhere south
										of Olympia, that the soundscape had quietly shifted. I hadn't scripted
										that transition manually. The biome tags and crossfades had simply done
										their job. That tiny invisible system worked, and the world it produced
										felt like a real place.
									</p>

									<p>
										The other surprise was the light. I built a simple day-night cycle and
										didn't think much of it until the first time I walked a long stretch
										and watched the sky shift through actual dawn-to-dusk colors. It sounds
										obvious, but the first time you see your own code produce a sunset that
										looks like a sunset, you sit with it for a minute. Some things you only
										appreciate when you've built them yourself.
									</p>
								</section>

								<figure class="not-prose my-10">
									<div
										class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3"
									>
										<img
											src="/nearbygame-announce/cat_walking.png"
											alt="A small companion walking alongside you in NearbyGame"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption
										class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400"
									>
										Small companions and small surprises — the parts that make a quiet world
										feel alive.
									</figcaption>
								</figure>

								<section id="microsoft-store-iap">
									<h2>The Hard Parts — Microsoft Store IAP</h2>

									<p>
										This is the section I'd actually want to read on someone else's blog,
										because nobody talks about it, so I'll be specific.
									</p>

									<p>
										NearbyGame uses In-App Purchase to unlock regions beyond the free
										Washington tier. It's a one-time $4.99 unlock through the Microsoft
										Store. Conceptually simple. Implementation-wise, this was the single
										hardest part of the entire project, and the painful part wasn't the SDK.
									</p>

									<p>
										I submitted <strong>eleven iterations</strong> of the build to Partner
										Center before IAP behaved correctly end-to-end. Each iteration was a
										full MSIX rebuild, a full submission, and a wait for certification.
										That's not a fast loop. The reason it took so many tries is that there
										is no good local sandbox for Store IAP. You can stub purchase calls in
										dev, but to actually validate that a real purchase against the real
										Store catalog unlocks the right entitlement on the real machine, you
										have to ship a real build. Then exercise the real purchase. Then refund
										it through the Store and try the next iteration.
									</p>

									<p>
										The bug that ate the most time wasn't even in the IAP SDK. It was a
										permissions issue with Tauri 2's <code>plugin-fs</code> in an MSIX
										context. I was writing the entitlement receipt to local storage after
										purchase, and the write looked like it was working — no error, no
										exception, the function returned cleanly — but the file simply wasn't
										there afterward. The <code>mkdir</code> calls right next to it worked
										fine, which made it look like a filesystem layout problem, not a
										permissions one. Several days of staring at this later, I found it:
										<code>fs:allow-write</code> in the Tauri capability config doesn't cover
										binary <code>writeFile(Uint8Array)</code> in MSIX. You need the more
										granular <code>fs:allow-write-file</code> permission. Once I added that
										line, the entire IAP flow worked on the next submission.
									</p>

									<p>
										A soft critique of the Store experience: there should be a better local
										sandbox for IAP. Or at least a tighter feedback loop than full
										submissions. I'm a Microsoft engineer and I still spent days finding a
										permission flag. Indies without that context will spend weeks. If anyone
										reading this knows the better path — internal tools, a smarter test
										mode, anything — I'd genuinely like to hear about it, because I'll be
										back here for the next DLC.
									</p>
								</section>

								<section id="what-id-do-differently">
									<h2>What I'd Do Differently</h2>

									<p>
										One thing, mostly: I'd build the IAP integration earlier. I treated it
										as the last step — wrap up the game, then bolt on the store — and that's
										exactly why it crammed into the final two weeks. If I'd built a
										half-broken IAP path against a single test product from month two, the
										eleven iterations would have been spread across the whole year instead
										of stacked on top of launch crunch. Everything else I'd do roughly the
										same. The friction taught me things a smoother path wouldn't have.
									</p>
								</section>

								<section id="where-it-is-now">
									<h2>Where It Is Now</h2>

									<p>
										NearbyGame is live on the Microsoft Store. The free tier covers Washington
										state — 33 cities and 37 roads. The full version ($4.99, one-time) unlocks
										Oregon, BC, Idaho, and Nevada, with more regions on the way as DLC.
									</p>

									<p>
										No account, no email, no microtransactions. If you've ever wanted a game you
										can sit with for 30 minutes without anything demanding your attention, give it
										a walk.
									</p>

									<div
										class="not-prose mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6"
									>
										<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
											Try NearbyGame — free for Windows, Washington state included:
										</p>
										<div class="flex flex-wrap items-center gap-4">
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
												class="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
											>
												<i class="fas fa-globe text-xs" aria-hidden="true"></i>
												nearbygame.com
											</a>
										</div>
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
