<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'Introducing CrossIt: A Lightweight Habit Helper | Hong in Canada',
		description:
			'Introducing CrossIt, my lightweight local-first habit helper and habit builder focused on one simple action: complete a routine and cross it off.',
		canonical: 'https://www.hongincanada.com/blog/introducing-crossit',
		ogImage: 'https://www.hongincanada.com/crossit-published/main_window.png',
		publishDate: 'March 19, 2026',
		readTime: '~7 min read'
	};

	const tableOfContents = [
		{ id: 'why-crossit', title: 'Why I Built CrossIt' },
		{ id: 'how-it-works', title: 'How It Works' },
		{ id: 'key-features', title: 'Key Features' },
		{ id: 'achievements', title: 'Achievements' },
		{ id: 'local-first', title: 'Local-First by Design' },
		{ id: 'get-crossit', title: 'Get CrossIt' }
	];

	let isDark = $state(true);
	let showTOC = $state(true);
	let showBackToTop = $state(false);

	onMount(() => {
		const saved = localStorage.getItem('theme');
		isDark = saved ? saved === 'dark' : true;
		document.documentElement.classList.toggle('dark', isDark);

		const handleScroll = () => {
			showBackToTop = window.scrollY > 400;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
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
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: 'Introducing CrossIt: A Lightweight Habit Helper',
			description:
				'CrossIt is a lightweight local-first habit helper and habit builder for simple recurring routines. Complete your task and cross it off.',
			author: {
				'@type': 'Person',
				name: 'Hong'
			},
			datePublished: '2026-03-19',
			image: 'https://www.hongincanada.com/crossit-published/main_window.png'
		})}
	</script>
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-950 transition-colors">
	<div class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-colors">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a href="/" class="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
					<i class="fas fa-arrow-left text-xs" aria-hidden="true"></i>
					Hong in Canada
				</a>
				<button
					onclick={() => (showTOC = !showTOC)}
					class="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
				>
					<i class="fas fa-list text-blue-500 text-xs" aria-hidden="true"></i>
					<span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Contents</span>
					<i class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-gray-400 text-xs" aria-hidden="true"></i>
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
				<span class="text-gray-600 dark:text-gray-300">Introducing CrossIt</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span class="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-600 dark:text-teal-400">
					<i class="fas fa-check-double mr-1.5" aria-hidden="true"></i>CrossIt
				</span>
				<span class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
					Product Launch
				</span>
			</div>
			<h1 class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
				Introducing CrossIt: A Lightweight Habit Helper
			</h1>
			<p class="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				Can you cross it? That simple prompt became the entire product philosophy behind CrossIt.
			</p>
			<div class="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<main class="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors min-h-screen">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col lg:flex-row gap-8">
				<article class="flex-1 min-w-0">
					<div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
						<div class="p-8 lg:p-14">
							<div class="prose prose-lg dark:prose-invert max-w-none
								prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
								prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:scroll-mt-24
								prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
								prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
								prose-strong:text-gray-900 dark:prose-strong:text-white
								prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline-offset-2
								[&_section]:scroll-mt-24 [&_h2]:scroll-mt-24">

								<p>
									Today I am excited to introduce <strong>CrossIt</strong>, my new lightweight habit helper designed to help you build simple, repeatable routines.
								</p>

								<p>
									Most habit tools pull you into dashboards, charts, and long setup flows. CrossIt takes the opposite path.
									You choose a routine, complete it, and cross it off.
								</p>

								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
										<img
											src="/crossit-published/main_window.png"
											alt="CrossIt main window showing recurring habits in a clean overview"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										The core CrossIt view: clean, focused, and intentionally uncluttered.
									</figcaption>
								</figure>

								<section id="why-crossit">
									<h2>Why I Built CrossIt</h2>

									<p>
										I wanted a tool that reinforces consistency without demanding extra mental overhead. Habits should not feel like project management.
										They should feel like small wins repeated over time.
									</p>

									<p>
										CrossIt is optimized for tiny routines that actually happen in real life:
									</p>

									<ul>
										<li>Stretch every afternoon during work</li>
										<li>Review goals every Sunday evening</li>
										<li>Run a monthly personal finance check-in</li>
									</ul>

									<p>
										Instead of asking for perfect streaks, CrossIt asks one lightweight question when reminder time arrives:
										<strong>Can you cross it?</strong>
									</p>
								</section>

								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center">
										<img
											src="/crossit-published/crossit_canyoucrossit.png"
											alt="CrossIt reminder prompt asking Can you cross it"
											class="max-w-md w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										Every reminder is intentionally simple: can you cross it right now?
									</figcaption>
								</figure>

								<section id="how-it-works">
									<h2>How It Works</h2>

									<p>
										CrossIt is designed around recurring routines. Add items for <strong>daily, weekly, or monthly</strong> schedules,
										pick reminder times that match your rhythm, and keep moving.
									</p>

									<p>
										If you want to get started quickly, use a starter pack. If you already know your routine, create habits from scratch.
										Both paths are first-class.
									</p>
								</section>

								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center">
										<img
											src="/crossit-published/crossit_workfocus_starterpack.png"
											alt="CrossIt starter pack setup screen for quick habit configuration"
											class="max-w-md w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										Starter packs make first-time setup fast.
									</figcaption>
								</figure>

								<section id="key-features">
									<h2>Key Features</h2>

									<ul>
										<li><strong>Simple habit tracking:</strong> Create recurring tasks and cross them off when completed.</li>
										<li><strong>Daily, weekly, and monthly routines:</strong> Organize habits by natural repeating schedules.</li>
										<li><strong>Starter packs for quick setup:</strong> Begin with example routines and start immediately.</li>
										<li><strong>Flexible reminders:</strong> Choose times that fit your day, not the other way around.</li>
										<li><strong>One clean overview:</strong> See routines together in a single uncluttered view.</li>
										<li><strong>Fully customizable habits:</strong> Edit, rename, and remove routines at any time.</li>
										<li><strong>Achievements:</strong> Earn simple milestone badges to reinforce consistency.</li>
										<li><strong>Built-in dark mode:</strong> Works comfortably day or night.</li>
										<li><strong>Lightweight and distraction-free:</strong> No accounts, no ads, no unnecessary complexity.</li>
									</ul>
								</section>

								<section id="achievements">
									<h2>Achievements That Encourage Consistency</h2>

									<p>
										CrossIt also includes lightweight achievements to celebrate consistency without turning habits into a game of pressure.
										They are simple progress nudges that make repetition feel rewarding.
									</p>
								</section>

								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center">
										<img
											src="/crossit-published/crossit_achievements.png"
											alt="CrossIt achievements screen showing milestones for completed routines"
											class="max-w-md w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										Achievements provide gentle motivation while keeping the app lightweight.
									</figcaption>
								</figure>

								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center">
										<img
											src="/crossit-published/crossit_darkmode.png"
											alt="CrossIt interface in dark mode"
											class="max-w-md w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										CrossIt supports dark mode for lower-glare sessions.
									</figcaption>
								</figure>

								<section id="local-first">
									<h2>Local-First by Design</h2>

									<p>
										CrossIt keeps your data on your device. No account setup, no remote profile, and no cloud lock-in.
										That keeps the app fast, private, and focused.
									</p>

									<p>
										The product is intentionally lightweight so it disappears into your day and supports your routines instead of competing for your attention.
									</p>
								</section>

								<section id="get-crossit">
									<h2>Get CrossIt</h2>

									<p>
										CrossIt is live on Microsoft Store. If you want a habit helper that stays simple and helps you build consistency through small actions,
										give it a try.
									</p>

									<div class="not-prose mt-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 p-6">
										<p class="mb-4 text-sm text-gray-600 dark:text-gray-300">
											Download CrossIt from Microsoft Store:
										</p>
										<a href="https://apps.microsoft.com/detail/9p6jx7l8f0x9?referrer=appbadge&cid=hongincanada&mode=full" target="_self">
											<img src="https://get.microsoft.com/images/en-us%20dark.svg" width="200" alt="Download CrossIt from Microsoft Store" />
										</a>
									</div>
								</section>
							</div>
						</div>
					</div>
				</article>

				{#if showTOC}
					<aside class="lg:w-56 lg:flex-shrink-0" transition:slide={{ axis: 'x' }}>
						<div class="sticky top-20 space-y-4">
							<div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg">
								<h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Contents</h3>
								<nav class="space-y-1">
									{#each tableOfContents as item (item.id)}
										<a
											href="#{item.id}"
											class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
										>
											{item.title}
										</a>
									{/each}
								</nav>
							</div>

							<div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5 shadow-lg">
								<h3 class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Share</h3>
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
										onclick={() => {
											navigator.clipboard.writeText(pageData.canonical);
											alert('Link copied!');
										}}
										aria-label="Copy link to clipboard"
										class="flex-1 rounded-lg bg-gray-100 dark:bg-gray-700 p-2 text-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
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

	<footer class="border-t border-gray-200 dark:border-gray-800 py-10 text-center text-sm text-gray-500 dark:text-gray-500">
		<a href="/" class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Back to hongincanada.com</a>
	</footer>
</div>

{#if showBackToTop}
	<button
		onclick={scrollToTop}
		transition:slide={{ axis: 'y' }}
		class="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg hover:scale-110 transition-transform"
		aria-label="Back to top"
	>
		<i class="fas fa-arrow-up text-sm" aria-hidden="true"></i>
	</button>
{/if}