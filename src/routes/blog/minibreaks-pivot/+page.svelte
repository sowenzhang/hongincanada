<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'MiniBreaks Pivot: From Wellness Platform to Micro-App Hub | Hong in Canada',
		description:
			'Why I pivoted MiniBreaks from a workplace wellness platform into a weekly micro-app experiment. How I organized AI agents to ship one tiny app every week.',
		canonical: 'https://www.hongincanada.com/blog/minibreaks-pivot',
		ogImage: 'https://www.hongincanada.com/profile.png',
		publishDate: 'March 17, 2026',
		readTime: '~10 min read'
	};

	const tableOfContents = [
		{ id: 'the-pivot', title: 'The Pivot Decision' },
		{ id: 'simpler-idea', title: 'A Simpler Idea' },
		{ id: 'why-small-apps', title: 'Why Small Apps?' },
		{ id: 'ai-workflow', title: 'Organizing the AI Workflow' },
		{ id: 'examples', title: 'Agent & Skill Examples' },
		{ id: 'weekly-command', title: 'The Weekly Command' },
		{ id: 'closing', title: 'Closing Thoughts' }
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

	<!-- JSON-LD BlogPosting Schema -->
	<script type="application/ld+json">
		{JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'BlogPosting',
			headline: 'MiniBreaks Pivot: From Wellness Platform to Micro-App Hub',
			description:
				'Why I pivoted MiniBreaks from a workplace wellness platform into a weekly micro-app experiment. How I organized AI agents to ship one tiny app every week.',
			author: {
				'@type': 'Person',
				name: 'Hong'
			},
			datePublished: '2026-03-17',
			image: 'https://www.hongincanada.com/profile.png'
		})}
	</script>
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
				<span class="text-gray-600 dark:text-gray-300">MiniBreaks Pivot</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span class="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-medium text-orange-500 dark:text-orange-400">
					<i class="fas fa-leaf mr-1.5" aria-hidden="true"></i>MiniBreaks
				</span>
				<span class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
					Product Experiment
				</span>
			</div>
			<h1 class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl">
				MiniBreaks Pivot: From Wellness Platform to Micro-App Hub
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
								prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-700 dark:prose-h3:text-blue-400
								prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
								prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
								prose-strong:text-gray-900 dark:prose-strong:text-white
								prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline-offset-2
								prose-pre:rounded-xl prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
								prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:px-5 prose-pre:py-4 prose-pre:my-6
								[&_section]:scroll-mt-24 [&_h2]:scroll-mt-24">

								<!-- Intro -->
								<p class="text-lg leading-relaxed">
									Six months ago I launched <a href="https://minibreaks.io" target="_blank" rel="noopener noreferrer"><strong>MiniBreaks.io</strong></a>, a platform designed to bring small moments of wellness into your workday. The original vision was clear: <strong>tiny interactive experiences</strong> that help people pause during work.
								</p>

								<p>
									I documented that entire journey in my series: <a href="https://www.hongincanada.com/series" target="_blank" rel="noopener noreferrer"><strong>"How I Built MiniBreaks.io With AI"</strong></a>. The series explored using various AI tools for design, coding, debugging, testing, and deployment. It was a learning experiment, and I learned a lot.
								</p>

								<p>
									But after six months, something felt off. So I made a decision: <strong>pivot the project entirely</strong>.
								</p>

								<!-- Section 1: The Pivot -->
								<section id="the-pivot">
									<h2>The Pivot Decision</h2>

									<h3>I'm Not a Wellness Expert</h3>

									<p>
										The original platform focused on workplace mental wellness. But after building the initial set of apps, I hit a wall. Every time I asked myself "What should the next feature be?" I didn't have a good answer.
									</p>

									<p>
										The truth: I'm not a psychologist or a wellness professional. Without that expertise, I was stuck expanding the platform in a meaningful way. The idea was good, but it wasn't the right long-term direction for me.
									</p>

									<h3>The AI Ecosystem Moved Fast</h3>

									<p>
										During those six months, the AI landscape changed dramatically. Many tools I used at the beginning:
									</p>

									<ul>
										<li>Improved significantly in capability</li>
										<li>Changed their core functionality</li>
										<li>Or disappeared entirely</li>
									</ul>

									<p>
										The workflows that worked well when I first built MiniBreaks were no longer optimal. Instead of clinging to the same concept, I decided to treat this as an opportunity to <strong>restart the experiment</strong> with fresh tools and a clearer focus.
									</p>
								</section>

								<!-- Section 2: A Simpler Idea -->
								<section id="simpler-idea">
									<h2>A Simpler Idea</h2>

									<p>
										The new direction is actually elegantly simple: <strong>MiniBreaks becomes a micro-app hub</strong>.
									</p>

									<p>
										Tiny tools that:
									</p>

									<ul>
										<li>Solve one small problem</li>
										<li>Require no login</li>
										<li>Work instantly</li>
										<li>Take less than a minute to use</li>
									</ul>

									<p>
										Think decision wheels, tiny calculators, random generators, simple mindfulness tools, playful utilities. Apps that fit naturally into a coffee break.
									</p>

									<p>
										The new goal is straightforward: <strong>Ship one small app every week</strong>. After one year, the site will contain <strong>52 tiny apps</strong>.
									</p>

									<div class="not-prose my-8 border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20 rounded-r-xl">
										<p class="mb-2 text-gray-700 dark:text-gray-300 leading-relaxed">
											<strong>Before → After</strong>
										</p>
										<ul class="space-y-2 text-gray-700 dark:text-gray-300">
											<li><strong>Workplace wellness platform</strong> → Micro-app hub</li>
											<li><strong>Topic-focused</strong> → Tool-focused</li>
											<li><strong>Hard to decide what to build</strong> → Endless small ideas</li>
											<li><strong>Feature roadmap</strong> → Weekly experiments</li>
										</ul>
									</div>

									<p>
										This removes the pressure of defining a single theme. Instead, the focus becomes <strong>continuous building and experimentation</strong>.
									</p>
								</section>

								<!-- Section 3: Why Small Apps? -->
								<section id="why-small-apps">
									<h2>Why Small Apps?</h2>

									<p>
										Most of my professional work involves large systems. Large teams. Large architectures. Long release cycles. Micro-apps are the opposite.
									</p>

									<p>
										A good tiny tool has a few non-negotiable properties:
									</p>

									<ul>
										<li>The user understands it immediately</li>
										<li>It performs one clear action</li>
										<li>It produces an instant result</li>
										<li>It doesn't require learning anything</li>
									</ul>

									<p>
										You open the page, click once, and you're done. There's something satisfying about that constraint. It forces clarity.
									</p>
								</section>

								<!-- Section 4: Organizing the AI Workflow -->
								<section id="ai-workflow">
									<h2>Organizing the AI Workflow</h2>

									<p>
										To sustain a weekly shipping cadence, I needed to scale my development process. Instead of treating AI as a single assistant, I began organizing the workflow into <strong>roles</strong>.
									</p>

									<p>
										For example:
									</p>

									<ul>
										<li>One role helps expand and refine app ideas</li>
										<li>Another role focuses on implementation</li>
										<li>Another role checks quality, simplicity, and consistency</li>
									</ul>

									<p>
										To support this, I created a small configuration structure inside the repository with <strong>Agents</strong> (representing roles like planner, generator, reviewer) and <strong>Skills</strong> (representing reusable workflows).
									</p>

<figure class="not-prose float-left mr-6 mb-4">
							<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3 flex justify-center w-64">
								<img
									src="/pivot_minibreaks/ai_coding_structure.png"
									alt="MiniBreaks repository structure showing AI agents and skills folders"
									class="rounded-xl shadow-sm w-full"
									loading="lazy"
								/>
							</div>
							<figcaption class="mt-2 text-xs text-gray-500 dark:text-gray-400">
								AI workflow structure in the repo:<br />role-based agents plus reusable shipping skills.
										</figcaption>
									</figure>

									<p>
										The reviewer, for example, has clear responsibilities:
									</p>

									<ul>
										<li>Review apps before shipping</li>
										<li>Enforce UX simplicity</li>
										<li>Ensure MiniBreaks consistency</li>
										<li>Verify analytics tracking is integrated correctly</li>
									</ul>

									<p>
										I also created domain-specific skills. The <strong>"Ship Checklist"</strong> skill, for instance, verifies that an app is ready for release by checking:
									</p>

									<ul>
										<li><strong>Functionality:</strong> Does it work? Does it always generate a result?</li>
										<li><strong>UX:</strong> Is there one clear action? Is there a retry option?</li>
										<li><strong>Mobile:</strong> Does the layout work on small screens? Are buttons accessible?</li>
										<li><strong>SEO:</strong> Does it have metadata? A descriptive title?</li>
										<li><strong>Performance:</strong> No heavy assets? Loads instantly?</li>
										<li><strong>Consistency:</strong> Does it match the MiniBreaks design?</li>
										<li><strong>Tracking:</strong> Is analytics properly integrated?</li>
									</ul>
								</section>

								<section id="examples">
									<h2>Agent & Skill Examples</h2>

									<p>
										I wanted the workflow to be explicit and repeatable, so I wrote role prompts and checklists directly in the repo.
									</p>

									<p>
										Here is a trimmed example of the reviewer role:
									</p>

									<div class="bg-gray-900 text-gray-100 rounded-lg p-5 overflow-x-auto font-mono text-sm leading-relaxed border border-gray-700 my-4">
										<pre><code>Role: MiniBreaks Quality Reviewer

Responsibilities:
- review apps before shipping
- enforce UX simplicity
- ensure MiniBreaks consistency
- verify usage tracking is integrated

Use skills:
- mini-app-review
	- ship-checklist</code></pre>
									</div>

									<p class="mt-6">
										And here is the core of my ship checklist skill:
									</p>

									<div class="bg-gray-900 text-gray-100 rounded-lg p-5 overflow-x-auto font-mono text-sm leading-relaxed border border-gray-700 my-4">
										<pre><code>Skill: MiniBreaks Ship Checklist

Checks:
- Functionality: app works, result always generated
- UX: one clear action, retry/reset available
- Mobile: layout and buttons are usable
- SEO: metadata and descriptive title present
- Performance: no heavy assets, loads instantly
- Tracking: page-enter + primary-action usage events</code></pre>
									</div>
								</section>

								<!-- Section 5: The Weekly Command -->
								<section id="weekly-command">
									<h2>The Weekly Command</h2>

									<p>
										Each week I start with a small idea and run a single command that orchestrates the entire workflow.
									</p>

									<p>
										The process works like this:
									</p>

									<div class="bg-gray-900 text-gray-100 rounded-lg p-5 overflow-x-auto font-mono text-sm leading-relaxed border border-gray-700 my-4">
										<pre><code>/weekly-ship decision spinner, no login, mobile first</code></pre>
									</div>

									<ol>
										<li><strong>Planning:</strong> Refine the idea into a specific app name, route, description, primary interaction, and result format</li>
										<li><strong>Generation:</strong> Create the app, keeping it mobile-friendly with one main action, a retry option, and minimal dependencies</li>
										<li><strong>Review:</strong> Evaluate clarity, simplicity, mobile friendliness, and consistency</li>
										<li><strong>Refinement:</strong> Apply the reviewer's high-value feedback</li>
										<li><strong>Assets:</strong> Generate SEO title, description, homepage card copy, and icon suggestion</li>
										<li><strong>Summary:</strong> Document the route created, files changed, metadata, and any follow-up items</li>
									</ol>

									<p>
										This structured workflow lets me focus on the creative part (the idea) while AI handles the execution. It's a genuinely effective partnership.
									</p>

									<p>
										A simplified excerpt of the <strong>weekly-ship</strong> flow:
									</p>

									<div class="bg-gray-900 text-gray-100 rounded-lg p-5 overflow-x-auto font-mono text-sm leading-relaxed border border-gray-700 my-4">
										<pre><code>1) planner refines idea into name, route, interaction
2) app-generator builds the page and UX
3) reviewer audits clarity, simplicity, responsiveness
4) apply high-value fixes
5) generate SEO + homepage card copy
6) output release summary</code></pre>
									</div>
								</section>

								<!-- Section 6: Closing -->
								<section id="closing">
									<h2>Closing Thoughts</h2>

									<p>
										The internet used to be full of small tools. Not everything needs to be a massive platform or startup. Sometimes the best software is just a <strong>tiny tool that does one thing well</strong>.
									</p>

									<p>
										MiniBreaks is now my experiment in building those tools — one week at a time. Some will be useful. Some will be playful. Some might be weird. But all will be small and focused.
									</p>

									<p>
										I don't yet know what I'll end up with, but I'm genuinely excited about this learning journey.
									</p>

									<p class="text-sm mt-8 italic text-gray-600 dark:text-gray-400">
										You can follow the experiment at <a href="https://minibreaks.io" target="_blank" rel="noopener noreferrer">minibreaks.io</a>.
									</p>
								</section>

							</div>
						</div>
					</div>
				</article>

				<!-- Sticky TOC Sidebar -->
				{#if showTOC}
					<aside class="lg:w-56 lg:flex-shrink-0" transition:slide={{ axis: 'x' }}>
						<div class="sticky top-24 space-y-6">
							<!-- TOC -->
							<nav class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
								<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
									On This Page
								</p>
								<ul class="space-y-2 text-sm">
									{#each tableOfContents as item (item.id)}
										<li>
											<a
												href="#{item.id}"
												class="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
											>
												{item.title}
											</a>
										</li>
									{/each}
								</ul>
							</nav>

							<!-- Share -->
							<div class="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
								<p class="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
									Share
								</p>
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

	<!-- Back to Top Button -->
	{#if showBackToTop}
		<button
			onclick={scrollToTop}
			class="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition-colors"
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
