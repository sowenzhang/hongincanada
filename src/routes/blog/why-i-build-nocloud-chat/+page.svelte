<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'Why Do I Build NoCloud Chat | Hong in Canada',
		description:
			'A personal essay on why I built NoCloud Chat, a local-network chat app with no registration, no cloud, and no phone number required. Just open and talk.',
		canonical: 'https://www.hongincanada.com/blog/why-i-build-nocloud-chat',
		ogImage: 'https://www.hongincanada.com/blog/nocloud_chat_main.png',
		publishDate: 'March 10, 2026',
		readTime: '~8 min read'
	};

	const tableOfContents = [
		{ id: 'motivation', title: 'Motivation' },
		{ id: 'how-i-built-it', title: 'How Do I Build It?' },
		{ id: 'challenges', title: 'Challenges' },
		{ id: 'whats-next', title: "What's Next?" }
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
</svelte:head>

<div class="min-h-screen bg-white dark:bg-gray-950 transition-colors">

	<!-- Sticky Top Bar -->
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

	<!-- Article Header -->
	<header class="bg-white dark:bg-gray-900 py-12 transition-colors">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<nav class="mb-8 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
				<a href="/" class="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Home</a>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span>Blog</span>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span class="text-gray-600 dark:text-gray-300">Why Do I Build NoCloud Chat</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span class="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-500 dark:text-cyan-400">
					<i class="fas fa-wifi mr-1.5" aria-hidden="true"></i>NoCloud Chat
				</span>
				<span class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
					Personal Build
				</span>
			</div>
			<h1 class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
				Why Do I Build NoCloud Chat
			</h1>
			<div class="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<!-- Main Content Area -->
	<main class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors min-h-screen">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col lg:flex-row gap-8">

				<!-- Article -->
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

								<!-- Section 1: Motivation -->
								<section id="motivation">
									<h2>1. Motivation</h2>

									<p>
										I wanted to build something that works the moment you install it. No registration screen. No "add a friend first." No phone number needed. You open it, and it is just there, ready.
									</p>

									<p>
										The itch started at home. I am downstairs. My wife is upstairs. I want to ask her a quick question or show her something on my screen. The obvious answer is texting, but texting has more friction than people admit:
									</p>

									<ul>
										<li>My phone might not be within reach. I am usually sitting at my desk.</li>
										<li>Sometimes I want to share a file directly, not just words. For example, I am filing taxes and I need a second pair of eyes on a specific field. A screenshot is too cumbersome. I just want to drop the file and get a quick reply.</li>
										<li>I do not want certain files leaving the house. Tax documents, personal photos, internal notes. Sending these over WhatsApp, email, or any other cloud messaging app means the data travels through someone else's servers. Even briefly, I am not comfortable with that.</li>
									</ul>

									<p>
										I do have a home NAS, but that workflow is awkward. You drop a file in a network folder, then somehow notify the other person, then wait. There is no conversation layer on top of it. No quick back-and-forth.
									</p>

									<p>
										So that is the gap NoCloud Chat is trying to fill: a chat tool that works entirely on your local network, with zero setup, zero accounts, and zero data leaving your router.
									</p>
								</section>

								<!-- Tutorial screenshot -->
								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center">
										<img
											src="/blog/nocloud_chat_tutorial.png"
											alt="NoCloud Chat tutorial screen showing the welcome and onboarding flow"
											class="max-w-xs w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										No registration. No internet required. Open the app and you are already visible to anyone on the same router.
									</figcaption>
								</figure>

								<!-- Section 2: How I built it -->
								<section id="how-i-built-it">
									<h2>2. How Do I Build It?</h2>

									<p>
										Once I had the core idea clear, I decided to try something different. I went full vibe coding on a tech stack I barely know. The full source is open on GitHub at
										<a href="https://github.com/sowenzhang/Nocloud" target="_blank" rel="noopener noreferrer">github.com/sowenzhang/Nocloud</a>.
									</p>

									<p>
										For this project I used Claude CLI running in team mode. If you want to know what team mode is and how to enable it, the
										<a href="https://code.claude.com/docs/en/agent-teams" target="_blank" rel="noopener noreferrer">official documentation</a>
										covers it well. It is off by default, but enabling it is just a config change.
									</p>

									<p>
										I created six teams: <strong>PM, Tech Lead, Design, Dev, SRM, and Network Security Expert</strong>. Each had its own system prompt and set of responsibilities. Then I handed the entire project over with one instruction: notify me when it is ready to demo.
									</p>

									<div class="not-prose my-8 border-l-4 border-cyan-500 bg-cyan-50 p-6 dark:bg-cyan-900/20 rounded-r-xl">
										<p class="mb-0 text-gray-700 dark:text-gray-300 leading-relaxed">
											<strong>Honest take:</strong> The first demo was genuinely impressive. But there were a lot of bugs. We went through multiple demo-and-fix cycles. YOLO mode does not handle UX polish on its own, especially responsiveness and interaction design. Once I gave clear and specific feedback though, the agents understood exactly what to address.
										</p>
									</div>
								</section>

								<!-- Section 3: Challenges -->
								<section id="challenges">
									<h2>3. Challenges</h2>

									<p>
										Building a website with AI is something I have done before. I know what questions to ask and what to watch out for. Building a cross-platform app that runs on Windows, Android, Linux, and Mac is a completely different challenge. I do not fully understand what instructions belong in the spec for platform-level concerns. On top of that, I do not even own a Linux or Mac machine to test on.
									</p>

									<p>
										I consulted other AIs, mostly ChatGPT, during the planning phase around the tech stack and network security. But the core difficulty is this: you do not know what you do not know. If I do not bring something into the conversation, the AI will not include it in scope. The planning phase required real patience. I kept pushing the AI to expand on concerns, surface edge cases, and broaden the considerations. Only then could I take those inputs and build out the Claude agent instructions properly.
									</p>

									<p>
										Having an app development background helped. I had some vocabulary and starting points to work from. But I am not fluent in Kotlin and I do not know Jetpack Compose well. So I genuinely cannot tell whether the generated implementation is idiomatic or whether the architecture is sound at a deeper level. At some point, I had to trust the process.
									</p>
								</section>

								<!-- Main app screenshot -->
								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
										<img
											src="/blog/nocloud_chat_main.png"
											alt="NoCloud Chat main interface showing a conversation on a local network"
											class="w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
										The main chat screen. It actually runs.
									</figcaption>
								</figure>

								<p>
									What surprised me most is how naturally I slipped into a product manager role. Writing clear specs, running build cycles, reviewing demos, and filing feedback. That loop was genuinely enjoyable. This is where AI-assisted development really shows its value. Not replacing engineers, but collapsing the distance between idea and working software.
								</p>

								<p>
									I still read the generated code out of engineering curiosity. It looks organized and reasonable. No real complaints.
								</p>

								<!-- Section 4: What's Next -->
								<section id="whats-next">
									<h2>4. What's Next?</h2>

									<p>
										I have cut the first release, <strong>v1.0.0</strong>, and it is available for download on
										<a href="https://github.com/sowenzhang/Nocloud/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">GitHub</a>.
										There are four artifacts, one per platform.
									</p>

									<p>
										So far I have only tested Windows and Android. Windows is working as expected. Android has a bug I am actively tracking in
										<a href="https://github.com/sowenzhang/Nocloud/issues/2" target="_blank" rel="noopener noreferrer">issue #2</a>.
									</p>

									<p>
										Some features are also not fully tested yet, and the settings page still needs more work.
									</p>
								</section>

								<!-- Settings screenshot -->
								<figure class="not-prose my-10">
									<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-4 flex justify-center">
										<img
											src="/blog/nocloud_chat_settings.png"
											alt="NoCloud Chat settings screen"
											class="max-w-md w-full rounded-xl shadow-sm"
											loading="lazy"
										/>
									</div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
										Settings page. Still a work in progress.
									</figcaption>
								</figure>

								<p>
									Stay tuned. I plan to keep iterating until I can actually use this at home. And if it gets polished enough, maybe I will share it more broadly. ;)
								</p>

							</div>
						</div>
					</div>
				</article>

				<!-- Sticky TOC Sidebar -->
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

	<!-- Footer -->
	<footer class="border-t border-gray-200 dark:border-gray-800 py-10 text-center text-sm text-gray-500 dark:text-gray-500">
		<a href="/" class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors">Back to hongincanada.com</a>
	</footer>

</div>

<!-- Back to Top Button -->
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
