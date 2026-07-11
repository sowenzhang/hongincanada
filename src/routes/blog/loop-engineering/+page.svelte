<script lang="ts">
	import { onMount } from 'svelte';
	import MorePosts from '$lib/components/MorePosts.svelte';

	const pageData = {
		title: 'Loop Engineering: Building Web Apps with an Agent in the Loop | Hong in Canada',
		description:
			'What is an agentic harness, when do you need one, and what I learned building Spiderloop: wrap an AI agent in a loop that observes, verifies, iterates, and knows when to stop.',
		canonical: 'https://www.hongincanada.com/blog/loop-engineering',
		ogImage: 'https://www.hongincanada.com/spiderloop/ready-for-review.png',
		publishDate: 'July 10, 2026',
		readTime: '~10 min read'
	};

	const tableOfContents = [
		{ id: 'tldr', title: 'TL;DR' },
		{ id: 'what-is-a-harness', title: 'What Is an Agentic Harness?' },
		{ id: 'the-gap', title: 'The Gap' },
		{ id: 'separation-of-powers', title: 'Separate the Worker from the Judge' },
		{ id: 'the-loop', title: 'The Loop' },
		{ id: 'case-study', title: 'What the Runs Found' },
		{ id: 'principles', title: 'The Principles' },
		{ id: 'beyond-web', title: 'Beyond Web UI' },
		{ id: 'closing', title: 'Build for the Loop' }
	];

	const blogPostingSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: 'Loop Engineering: Building Web Apps with an Agent in the Loop',
		description: pageData.description,
		author: { '@type': 'Person', name: 'Hong', url: 'https://www.hongincanada.com' },
		datePublished: '2026-07-10',
		dateModified: '2026-07-10',
		image: pageData.ogImage,
		mainEntityOfPage: pageData.canonical,
		about: ['Agentic workflows', 'Web development', 'Software quality'],
		keywords:
			'Loop Engineering, Spiderloop, agentic workflows, AI web development, browser automation, software quality'
	});

	let isDark = $state(false);
	let showTOC = $state(false);
	let showBackToTop = $state(false);
	let prefersReducedMotion = $state(false);
	let copyStatus = $state('');

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mediaQuery.matches;
		const saved = localStorage.getItem('theme');
		isDark = saved ? saved === 'dark' : false;
		document.documentElement.classList.toggle('dark', isDark);
		showTOC = window.innerWidth >= 1024;

		const handleScroll = () => (showBackToTop = window.scrollY > 400);
		const handleMotionChange = (event: MediaQueryListEvent) => (prefersReducedMotion = event.matches);
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
		setTimeout(() => (copyStatus = ''), 2000);
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
	<script type="application/ld+json">{blogPostingSchema}</script>
</svelte:head>

<div class="min-h-screen bg-white transition-colors dark:bg-gray-950">
	<div class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur transition-colors dark:border-gray-700 dark:bg-gray-900/95">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a href="/" class="min-h-[44px] flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
					<i class="fas fa-arrow-left text-xs" aria-hidden="true"></i> Hong in Canada
				</a>
				<button onclick={() => (showTOC = !showTOC)} class="flex items-center gap-2 min-h-[44px] rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
					<i class="fas fa-list text-xs text-blue-500" aria-hidden="true"></i>
					<span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Contents</span>
					<i class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-xs text-gray-400" aria-hidden="true"></i>
				</button>
			</div>
			<button onclick={toggleTheme} class="flex items-center gap-2 min-h-[44px] rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700" aria-label="Toggle theme">
				{#if isDark}
					<i class="fas fa-sun text-xs text-yellow-500" aria-hidden="true"></i><span class="hidden sm:inline">Light Mode</span>
				{:else}
					<i class="fas fa-moon text-xs" aria-hidden="true"></i><span class="hidden sm:inline">Dark Mode</span>
				{/if}
			</button>
		</div>
	</div>

	<header class="bg-white py-12 transition-colors dark:bg-gray-900">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<nav class="mb-8 flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
				<a href="/" class="transition-colors hover:text-gray-600 dark:hover:text-gray-300">Home</a>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i><span>Blog</span>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i><span class="text-gray-600 dark:text-gray-300">Loop Engineering</span>
			</nav>
			<div class="mb-4 flex flex-wrap items-center gap-3">
				<span class="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400"><i class="fas fa-arrows-rotate mr-1.5" aria-hidden="true"></i>Spiderloop</span>
				<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-800 dark:text-gray-400">Agentic Engineering</span>
			</div>
			<h1 class="mb-5 font-serif text-4xl font-semibold leading-tight text-gray-900 dark:text-white md:text-5xl">Loop Engineering: Building Web Apps with an Agent in the Loop</h1>
			<p class="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">A smarter model can write a better first draft. A well-designed loop is what makes the result reliable.</p>
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
					<div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900">
									<div class="p-5 sm:p-8 lg:p-14">
							<div class="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:mb-5 prose-h2:mt-12 prose-h2:scroll-mt-24 prose-h3:mb-3 prose-h3:mt-8 prose-h3:scroll-mt-24 prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-a:text-blue-700 dark:prose-a:text-blue-400 prose-code:rounded prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-blue-800 prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-blue-950/40 dark:prose-code:text-blue-300">
								<section id="tldr">
																<div class="not-prose mb-8 rounded-xl border border-blue-200 bg-blue-50/80 px-6 py-5 dark:border-blue-800/60 dark:bg-blue-950/30">
																	<p class="!m-0 leading-relaxed text-gray-700 dark:text-gray-300">One-shot generation produces a plausible v1 and then stops. Spiderloop wraps the agent in a governed loop: build, observe reality in a real browser, run objective gates, iterate, and stop honestly when the evidence says it is done. I call the discipline behind that loop <strong>Loop Engineering</strong>.</p>
									</div>
								</section>

								<section id="what-is-a-harness">
									<h2>What Is an Agentic Harness?</h2>
									<p>An AI agent can write code, operate tools, and make decisions. An <strong>agentic harness</strong> is the system around that agent: it gives the work a shape, observes what actually happened, runs checks, feeds useful failures back, and decides whether to continue or stop.</p>
									<div class="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 dark:border-blue-800/60 dark:bg-blue-950/30"><p class="!m-0 text-gray-700 dark:text-gray-300">The harness does not replace the agent. It turns a one-off prompt into a repeatable workflow with boundaries, evidence, and memory.</p></div>
									<p>Spiderloop is one implementation of that idea. Its source is organized around a domain-agnostic core, web workflows, and a service layer. The examples below are more useful than a tour of every internal module:</p>
									<ul>
										<li><strong><code>/spiderloop:run</code>:</strong> build a site, inspect it in a real browser, run quality gates, then iterate.</li>
										<li><strong><code>/spiderloop:review</code>:</strong> similar to <a href="/blog/building-deckmark">Deckmark</a>, hand the browser back to a person, collect annotations, and apply those notes to source.</li>
										<li><strong><code>/spiderloop:migrate</code>:</strong> capture a parity baseline from an existing site and use it as the oracle while moving route by route.</li>
									</ul>
									<p>That same pattern can support focused modes for bug fixes and telemetry: define the evidence first, then let the agent work toward it.</p>
									<h3>Do You Need One?</h3>
									<p>No, not automatically. If you know exactly what needs to be done, the task is small, and verification is obvious, adding a harness can be more work than the task itself. A careful person with a direct prompt may be faster.</p>
									<p>The value appears when the work repeats or the verification is easy to forget. A harness can save time by automating the same checks and prompts, preserve practices that would otherwise live in someone’s memory, and reuse those practices across projects. It is especially useful for teams building sites, fixing recurring classes of bugs, migrating systems, or asking agents to touch work that still needs an accountable review.</p>
									<p>Think of it as operational leverage, not mandatory ceremony: skip it for a one-off task with a clear finish line; reach for it when you keep solving the same process problem.</p>
								</section>

								<section id="the-gap">
									<h2>The Gap: “Looks Done” Is Not Done</h2>
									<p>Give an agent a brief that says “build me a site” and it can produce something convincing in minutes. The page loads. The headline is there. The colors are coherent. Everyone nods.</p>
									<p>Then you look closer. A social card points to an image that does not exist. A block of useful content is hidden from assistive technology. A mobile layout overflows by 12 pixels. The agent did not lie exactly; it simply had no mechanism that forced it to find out.</p>
									<p>That is the failure mode I care about. The problem is not that the model cannot make a good first attempt. The problem is that the thing doing the work is also being asked to decide whether the work is good.</p>
																<div class="not-prose my-6 rounded-lg border-l-4 border-blue-500 bg-blue-50 px-5 py-4 dark:bg-blue-950/30"><p class="mb-1 text-sm font-semibold text-blue-700 dark:text-blue-400"><i class="fas fa-arrow-right mr-1.5" aria-hidden="true"></i>The reframe</p><p class="!m-0 text-gray-700 dark:text-gray-300">Do not optimize for a perfect generation. Build a system that can produce evidence, respond to it, and know when to stop.</p></div>
								</section>

								<section id="separation-of-powers">
									<h2>Separate the Worker from the Judge</h2>
									<p>The central design decision is a separation of powers:</p>
									<ul>
										<li><strong>The model is the worker.</strong> It writes code, drives the browser, gathers observations, and fixes findings.</li>
										<li><strong>The harness is the driver.</strong> It owns the state machine, runs the checks, computes the verdict, and decides whether another round is allowed.</li>
									</ul>
									<p>The harness is intentionally less clever than the model. That is a feature. Its job is to be predictable: “this gate was measured and passed” means something different from “the agent said it looked fine.”</p>
								</section>

								<section id="the-loop">
									<h2>The Loop: Build, Verify, Iterate, Stop</h2>
									<p>Spiderloop expresses the workflow as a state machine. A worker receives one bounded instruction at a time, and the driver decides what happens next.</p>
									<pre class="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"><code>loop:
  step = next_action(state)
  if step.done: break
  observation = worker.do(step)
  verdict = gates.evaluate(observation)
  if not (verdict.pass and verdict.complete):
      worker.fix(verdict.failures)
      continue
  if step.needs_judge:
      judge = critic.judge(observation, brief)
      if judge != accept:
          worker.fix(judge.findings)
          continue
  if stop_conditions_hit(state): halt_and_ask()

report(state)</code></pre>
									<p>The key word is <code>complete</code>. A green result cannot mean “nothing failed.” It must mean “everything that should have been measured was measured, and nothing failed.”</p>
								</section>

								<section id="case-study">
									<h2>What the Runs Found</h2>
									<p>I launched the two Loki sites independently and checked the same six routes in a real browser. The important distinction is in the evidence: the Spiderloop run has a persisted ledger with completed gates and judge results; the single-pass run has no equivalent ledger, so its results below are a fresh live audit, not a retroactive Spiderloop score.</p>
									<div class="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
										<table class="min-w-[680px] w-full border-collapse text-left text-sm">
											<caption class="sr-only">Separate quality evidence for the Spiderloop and single-pass runs</caption>
											<thead class="bg-gray-50 text-xs uppercase tracking-wider text-gray-500 dark:bg-gray-800 dark:text-gray-400">
												<tr><th scope="col" class="px-4 py-3 font-semibold">Signal</th><th scope="col" class="px-4 py-3 font-semibold text-blue-700 dark:text-blue-400">Spiderloop run</th><th scope="col" class="px-4 py-3 font-semibold text-blue-700 dark:text-blue-400">Single-pass run</th></tr>
											</thead>
											<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
												<tr><th scope="row" class="px-4 py-4 font-semibold text-gray-800 dark:text-gray-200">Routes checked</th><td class="px-4 py-4 text-gray-700 dark:text-gray-300">6 / 6, all gates complete</td><td class="px-4 py-4 text-gray-700 dark:text-gray-300">6 / 6 loaded in the live audit</td></tr>
												<tr><th scope="row" class="px-4 py-4 font-semibold text-gray-800 dark:text-gray-200">Accessibility</th><td class="px-4 py-4 text-gray-700 dark:text-gray-300">9 / 10, gate passed</td><td class="px-4 py-4 text-gray-700 dark:text-gray-300">Issue found: normal-motion trait content is inside <code>aria-hidden</code></td></tr>
												<tr><th scope="row" class="px-4 py-4 font-semibold text-gray-800 dark:text-gray-200">SEO</th><td class="px-4 py-4 text-gray-700 dark:text-gray-300">9 / 10, gate passed</td><td class="px-4 py-4 text-gray-700 dark:text-gray-300">No <code>og:image</code> or Twitter image in the live metadata</td></tr>
												<tr><th scope="row" class="px-4 py-4 font-semibold text-gray-800 dark:text-gray-200">Performance / layout smoke check</th><td class="px-4 py-4 text-gray-700 dark:text-gray-300">9 / 10 performance gate</td><td class="px-4 py-4 text-gray-700 dark:text-gray-300">No horizontal overflow found in the live route pass</td></tr>
												<tr><th scope="row" class="px-4 py-4 font-semibold text-gray-800 dark:text-gray-200">Visual judge</th><td class="px-4 py-4 text-gray-700 dark:text-gray-300">8.2–8.4 per route, recorded</td><td class="px-4 py-4 text-gray-700 dark:text-gray-300">Not scored by the same persisted judge</td></tr>
												<tr><th scope="row" class="px-4 py-4 font-semibold text-gray-800 dark:text-gray-200">Audit trail</th><td class="px-4 py-4 text-gray-700 dark:text-gray-300">Run ledger, gates, attempts, and deferred findings</td><td class="px-4 py-4 text-gray-700 dark:text-gray-300">No Spiderloop ledger in the project</td></tr>
											</tbody>
										</table>
									</div>
									<p>The accessibility failure is specific, not cosmetic. The single-pass homepage sets <code>aria-hidden</code> on the trait-card group whenever motion is enabled, which removes useful cooling, RGB, display, and I/O information from the accessibility tree. Decorative HUD layers can be hidden; product facts cannot.</p>
									<p>That is the value of running the sites separately. The looped result is not “perfect,” and the single-pass result is not worthless. But the persisted checks make the quality claim inspectable instead of asking the author to remember which version felt better.</p>
								</section>

								<section id="principles">
									<h2>The Principles I Would Reuse</h2>
									<h3>1. Objective truth before subjective taste</h3><p>Start with machine-checkable gates: console errors, failed requests, layout shift, horizontal scroll, accessible names, touch-target size, and headline wrapping. Let the model report observations; let pure functions render verdicts.</p>
									<h3>2. The brief is the judge</h3><p>Write down the audience, goal, positioning, primary action, constraints, and ambition before building. Subjective review should score alignment to that brief, not the critic’s personal taste.</p>
									<h3>3. Never allow vacuous green</h3><p>Track each gate as <code>passed</code>, <code>failed</code>, or <code>notChecked</code>. “Not checked” must never collapse into “passed.”</p>
									<h3>4. Keep the cheap loop cheap</h3><p>Editing and re-observing a hot dev server is cheap. A heavyweight visual critic is expensive. Use the critic at a bounded point in the loop, not as a babysitter for every keystroke.</p>
									<h3>5. Build the brakes early</h3><p>Iteration caps, stuck detectors, regression detectors, and plateau rules are part of the product. When the diagnosis is wrong, the right result is an honest incomplete state that asks for a human, not a fake green check.</p>
									<h3>6. Structured failures beat prose</h3><p>Stable error codes let the driver branch reliably. A useful envelope looks like this:</p>
									<pre class="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-800 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200"><code>&#123;
  "error": "The dev server did not start",
  "code": "SL_DEV_SERVER_FAILED",
  "message": "Port 5173 is already in use",
  "nextTool": "find_available_port",
  "userAction": null
&#125;</code></pre>
								</section>

								<figure class="not-prose my-10">
									<div class="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-800/50"><img src="/spiderloop/ready-for-review.png" alt="Spiderloop command-line output showing a project ready for human review" class="w-full rounded-xl" loading="lazy" /></div>
									<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">The loop eventually hands control back to a person. Review is not a failure mode; it is the last gate when automated evidence is not enough.</figcaption>
								</figure>

								<section id="beyond-web">
									<h2>Same Loop, Different Gate</h2>
									<p>The architecture generalizes because the loop does not care what “done” means. Change the observation source and the gates:</p>
									<ul>
										<li><strong>Build:</strong> functional behavior, visual quality, accessibility, and performance gates.</li>
										<li><strong>Migrate:</strong> parity against the old system’s output.</li>
										<li><strong>Fix a bug:</strong> reproduce first, then prove the repro is gone without regressing nearby paths.</li>
										<li><strong>Instrument:</strong> verify that real events reach the intended sink.</li>
									</ul>
									<p>Your gate is your spec. Once you can state the machine-checkable definition of success, the same driver can move the work forward.</p>
								</section>

								<section id="closing">
									<h2>Build for the Loop, Not the Prompt</h2>
									<p>The model is still the interesting part when it makes a surprising design choice or solves a hard implementation detail. But the durable engineering insight is elsewhere: generation is only one state in a larger system.</p>
									<p><strong>Loop Engineering means build, verify against objective truth, iterate, and know when to stop.</strong> The model supplies capability. The harness supplies boundaries, evidence, and memory. A human still closes the last stretch where taste, context, and judgment matter.</p>
																			<div class="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 px-6 py-5 dark:border-blue-800/60 dark:bg-blue-950/30"><p class="mb-1 text-sm font-semibold text-blue-700 dark:text-blue-400"><i class="fas fa-compass mr-1.5" aria-hidden="true"></i>The takeaway</p><p class="!m-0 text-gray-700 dark:text-gray-300">Do not ask your agent whether it is done. Give it a loop that can find out.</p></div>
								</section>
							</div>

							<div class="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6 dark:border-gray-700">
								<div class="flex items-center gap-3"><button onclick={copyLink} class="inline-flex items-center min-h-[44px] rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Copy article link"><i class="fas fa-link mr-1.5" aria-hidden="true"></i>Share link</button>{#if copyStatus}<span class="text-sm text-blue-600 dark:text-blue-400">{copyStatus}</span>{/if}</div>
								<a href={getLinkedInShareUrl()} target="_blank" rel="noopener noreferrer" class="inline-flex items-center min-h-[44px] text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"><i class="fab fa-linkedin mr-1.5" aria-hidden="true"></i>Share on LinkedIn</a>
							</div>
						</div>
					</div>
				</article>

				{#if showTOC}
					<aside class="order-first h-fit shrink-0 lg:order-last lg:sticky lg:top-20 lg:w-64" aria-label="Table of contents">
						<div class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-900"><p class="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">On this page</p><nav class="space-y-2">{#each tableOfContents as item}<a href={'#' + item.id} class="flex items-center min-h-[44px] text-sm text-gray-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">{item.title}</a>{/each}</nav></div>
					</aside>
				{/if}
			</div>
		</div>
	</main>

	<MorePosts currentSlug="loop-engineering" />

	{#if showBackToTop}
		<button onclick={scrollToTop} class="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700" aria-label="Back to top"><i class="fas fa-arrow-up" aria-hidden="true"></i></button>
	{/if}
</div>
