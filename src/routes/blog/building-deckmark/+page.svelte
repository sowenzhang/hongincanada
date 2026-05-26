<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'Building Deckmark: Closing the Feedback Loop for AI-Generated Slide Decks | Hong in Canada',
		description:
			'How I built Deckmark, an MCP server that lets you click directly on slide elements to give feedback to an AI agent. No screenshots, no terminal ping-pong.',
		canonical: 'https://www.hongincanada.com/blog/building-deckmark',
		ogImage: 'https://www.hongincanada.com/deckmark-demo/3-annotate-feedback.png',
		publishDate: 'May 25, 2026',
		readTime: '~9 min read'
	};

	const tableOfContents = [
		{ id: 'tldr', title: 'TL;DR' },
		{ id: 'the-problem', title: 'The Problem' },
		{ id: 'the-insight', title: 'The Insight' },
		{ id: 'what-deckmark-does', title: 'What Deckmark Does' },
		{ id: 'why-it-matters', title: 'Why This Matters' },
		{ id: 'what-i-learned', title: 'What I Learned' },
		{ id: 'career-bet', title: 'The Bigger Bet' },
		{ id: 'faq', title: 'FAQ' }
	];

	const blogPostingSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'TechArticle',
		headline: 'Building Deckmark: Closing the Feedback Loop for AI-Generated Slide Decks',
		description:
			'How I built Deckmark, an MCP server that lets you click directly on slide elements to give feedback to an AI agent. No screenshots, no terminal ping-pong.',
		author: {
			'@type': 'Person',
			name: 'Hong',
			url: 'https://www.hongincanada.com'
		},
		datePublished: '2026-05-25',
		dateModified: '2026-05-25',
		image: 'https://www.hongincanada.com/deckmark-demo/3-annotate-feedback.png',
		mainEntityOfPage: 'https://www.hongincanada.com/blog/building-deckmark',
		about: [
			'Model Context Protocol',
			'Human-in-the-Loop AI',
			'Agentic Workflows',
			'AI Slide Generation'
		],
		keywords:
			'Deckmark, MCP server, Model Context Protocol, Claude Code plugin, human-in-the-loop AI, agentic workflow, AI slide generation, AI deck builder'
	});

	const softwareSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'Deckmark',
		applicationCategory: 'DeveloperApplication',
		operatingSystem: 'Cross-platform (Node 22+)',
		description:
			'An MCP server for AI agents that generates slide decks and collects element-level annotations through a local browser overlay. Works with Claude Code and any MCP-aware agent.',
		offers: {
			'@type': 'Offer',
			price: '0',
			priceCurrency: 'USD'
		},
		url: 'https://github.com/sowenzhang/deckmark',
		author: {
			'@type': 'Person',
			name: 'Hong'
		},
		license: 'https://opensource.org/licenses/MIT'
	});

	const faqSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: [
			{
				'@type': 'Question',
				name: 'What is Deckmark?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Deckmark is an MCP server that lets an AI agent generate a slide deck, open it in your browser with an annotation overlay, collect element-level comments you click directly onto the slide, and apply your changes. It is open source, MIT licensed, and runs entirely on your machine.'
				}
			},
			{
				'@type': 'Question',
				name: 'Does Deckmark work with Claude Code?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes. Deckmark ships as a Claude Code plugin. You install it with /plugin marketplace add sowenzhang/deckmark, then /plugin install deckmark@deckmark-marketplace. Restart Claude Code and the /deckmark:use-deckmark slash command becomes available.'
				}
			},
			{
				'@type': 'Question',
				name: 'Does Deckmark work with other AI agents?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'Yes. Deckmark also ships as a plain MCP server fetched via npx. You can add it to Gemini CLI, Codex, GitHub Copilot CLI, Cursor, or any other MCP-aware agent. The seven MCP tools work everywhere. The slash command and the design-system skill are Claude Code packaging conventions.'
				}
			},
			{
				'@type': 'Question',
				name: 'What is the Model Context Protocol (MCP)?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'MCP is an open protocol for connecting AI agents to external tools. An MCP server exposes a set of tools the agent can call, and the agent decides when to call them based on the conversation. Deckmark uses MCP to give the agent seven tools: init_deck, build_deck, start_review, wait_for_close, get_annotations, stop_review, and publish_deck.'
				}
			},
			{
				'@type': 'Question',
				name: 'Where do my annotations and deck data live?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'On your machine. The annotation server binds to 127.0.0.1 only. Annotations are JSON files in your project folder under annotations/session-<timestamp>.json. No telemetry is sent anywhere.'
				}
			},
			{
				'@type': 'Question',
				name: 'Is Deckmark tied to reveal.js?',
				acceptedAnswer: {
					'@type': 'Answer',
					text: 'The current engine adapter uses reveal.js, but the annotation overlay is intentionally engine-agnostic. It walks the rendered DOM and generates stable CSS selectors, so adapters for Slidev, Impress, or Marp can be added without changing a line of overlay code.'
				}
			}
		]
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
	{@html `<script type="application/ld+json">${softwareSchema}</script>`}
	{@html `<script type="application/ld+json">${faqSchema}</script>`}
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
					<i class="fas fa-list text-indigo-500 text-xs" aria-hidden="true"></i>
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
				<span class="text-gray-600 dark:text-gray-300">Building Deckmark</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span
					class="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-400"
				>
					<i class="fas fa-wand-magic-sparkles mr-1.5" aria-hidden="true"></i>Deckmark
				</span>
				<span
					class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400"
				>
					Agentic Tools
				</span>
				<span
					class="rounded-full bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xs font-medium text-gray-500 dark:text-gray-400"
				>
					MCP
				</span>
			</div>
			<h1
				class="mb-5 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-5xl"
			>
				Building Deckmark: Closing the Feedback Loop for AI-Generated Slide Decks
			</h1>
			<p class="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
				AI can generate a deck in a minute. Reviewing it still takes an hour. I built Deckmark to fix the part in the middle.
			</p>
			<div class="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span
					><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span
				>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
				<a
					href="https://github.com/sowenzhang/deckmark"
					target="_blank"
					rel="noopener noreferrer"
					class="text-indigo-600 dark:text-indigo-400 hover:underline"
				>
					<i class="fab fa-github mr-1.5" aria-hidden="true"></i>github.com/sowenzhang/deckmark
				</a>
			</div>
		</div>
	</header>

	<main
		class="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 transition-colors min-h-screen"
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
								prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:scroll-mt-24
								prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
								prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:mb-2
								prose-strong:text-gray-900 dark:prose-strong:text-white
								prose-a:text-indigo-600 dark:prose-a:text-indigo-400 prose-a:underline-offset-2
								prose-code:text-indigo-700 dark:prose-code:text-indigo-300 prose-code:bg-indigo-50 dark:prose-code:bg-indigo-950/40 prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:font-medium prose-code:before:content-none prose-code:after:content-none
								[&_section]:scroll-mt-24 [&_h2]:scroll-mt-24"
							>
								<section id="tldr">
									<div class="not-prose mb-8 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/70 dark:bg-indigo-950/30 px-6 py-5">
										<p class="mb-2 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
											TL;DR
										</p>
										<p class="text-gray-700 dark:text-gray-300 leading-relaxed">
											<a href="https://github.com/sowenzhang/deckmark" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">Deckmark</a>
											is an open-source MCP server that lets an AI agent generate a slide deck, open it in your browser, collect annotations you click directly on slide elements, then read those annotations back and apply the changes. No screenshots, no copy-paste, no "the third bullet on slide 4." It is also my bet on a pattern I think matters way beyond slides: tight human-in-the-loop review for agentic work.
										</p>
									</div>
								</section>

								<section id="the-problem">
									<h2>The Problem: Editing an AI Deck Is Still Awkward</h2>

									<p>
										AI is genuinely good at producing a first draft of a slide deck now. You describe the topic, the audience, the tone, and a minute later you have something to look at. That part feels like magic.
									</p>

									<p>
										Then comes the not-magical part. You open the deck in the browser, the agent is sitting in a different window waiting, and you have to translate what you see into words the agent can act on. "The title on slide 3 is too big." "The two photos on slide 4 are overlapping." "The footer line on slide 5 should be quieter." Sometimes you take a screenshot and paste it in. Sometimes you describe the slide indirectly and hope the agent picks the right element.
									</p>

									<p>
										This is the part that breaks the loop. You are doing all the work of seeing the slide and the agent is doing none of it. By the time you finish typing the third correction, you have basically given up on review and accepted whatever is there.
									</p>

									<div class="not-prose my-6 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-5 py-4">
										<p class="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-1">
											<i class="fas fa-lightbulb mr-1.5" aria-hidden="true"></i>The friction
										</p>
										<p class="text-gray-700 dark:text-gray-300 text-base">
											Generation got 100x faster. Review did not. The bottleneck moved, and we are pretending it did not.
										</p>
									</div>
								</section>

								<section id="the-insight">
									<h2>The Insight: Click the Element, Don't Describe It</h2>

									<p>
										The shift is small. Instead of describing the slide back to the agent in text, you click directly on the thing that is wrong, and leave the comment where it actually belongs.
									</p>

									<p>
										That sentence sounds obvious. It is not how most tools work today. Most "AI assistants for X" still assume the human writes a paragraph describing the problem in the chat. Deckmark moves the comment onto the element. The element knows its own slide index, its own CSS selector, its own bounding box, its own text content. That becomes structured feedback the agent can act on without guessing.
									</p>

									<p>
										Once I built it that way, the loop went from "generate, describe back in text, hope" to "generate, click, click, click, Done." The agent reads each annotation, knows exactly which element it points to, and changes the right thing.
									</p>
								</section>

								<section id="what-deckmark-does">
									<h2>What Deckmark Actually Does</h2>

									<p>
										One install, one slash command, then a loop. Here is the actual flow.
									</p>

									<h3>1. You give your agent a brief</h3>

									<p>
										In Claude Code (or any MCP-aware agent), you type the command with whatever brief you have in your head. It does not need to be structured. The example below is a real one I used to build a small tribute deck for my cat.
									</p>

									<figure class="not-prose my-8">
										<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
											<img
												src="/deckmark-demo/0-prompt.png"
												alt="Deckmark prompt in Claude Code: /deckmark:use-deckmark with a free-form brief asking for a warm tribute deck about a cat named Melody, plus a description of how to group the images in the folder"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											The starting prompt. A topic, a tone, a folder of images. That is all.
										</figcaption>
									</figure>

									<h3>2. The agent confirms three design axes</h3>

									<p>
										Before it spends time generating anything, the agent runs through a short interview. It needs to pin down three orthogonal axes from Deckmark's design system: <strong>mode</strong> (light or dark), <strong>style</strong> (professional, academic, fashion, technical, fun), and <strong>motion</strong> (slide transitions, fragment reveals, auto-animate, or none). It skips whatever you already implied in your brief.
									</p>

									<figure class="not-prose my-8">
										<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
											<img
												src="/deckmark-demo/1-motion-ask.png"
												alt="Deckmark agent confirming design choices: Light mode and Fun style detected from the brief, asking the user to choose a motion preference between slide transitions, fragment reveals, and auto-animate"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											One short interview, then the agent moves on. Cheap up front, prevents a wrong-direction build later.
										</figcaption>
									</figure>

									<h3>3. The agent builds the deck and starts a local review server</h3>

									<p>
										Under the hood the agent is calling MCP tools: <code>init_deck</code> scaffolds a project, the agent writes <code>content.md</code> from the brief, then <code>build_deck</code> renders it through a reveal.js adapter into <code>./build/index.html</code>. Then <code>start_review</code> launches a Fastify server bound to <code>127.0.0.1</code> and prints the URL.
									</p>

									<figure class="not-prose my-8">
										<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
											<img
												src="/deckmark-demo/2-ready-for-review.png"
												alt="Deckmark deck ready for review: localhost URL, a 5-slide outline summarizing each slide's content, plus instructions to press A in the browser to annotate or come back to the agent with feedback"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											Deck is up. Agent steps back. The local URL is now the source of truth.
										</figcaption>
									</figure>

									<h3>4. You annotate directly in the browser</h3>

									<p>
										You open the URL. Press <code>A</code> to flip into annotation mode. Hover any slide element and you see a dashed outline. Click. A popover opens right under the element with a textarea. You type the change you want. <code>Cmd</code> or <code>Ctrl</code> plus <code>Enter</code> submits it. A small numbered pin lands on the element. Move on.
									</p>

									<figure class="not-prose my-8">
										<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
											<img
												src="/deckmark-demo/3-annotate-feedback.png"
												alt="Deckmark annotation overlay on a title slide: a popover under a caption element with a textarea showing the user typing a change request, and a Cancel and Submit button"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											Comment lives on the element it is about. The agent never has to guess what you meant.
										</figcaption>
									</figure>

									<p>
										It also works across multiple elements in the same slide, and across slides. The pin numbers help when you want to leave a few related notes on the same screen.
									</p>

									<figure class="not-prose my-8">
										<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
											<img
												src="/deckmark-demo/3-annotate-feedback-1.png"
												alt="Deckmark annotation overlay on a slide with three captioned polaroid frames, with an open popover under the leftmost frame showing a comment about changing the caption text"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											A slide with three elements, one annotation. The other two stay quiet.
										</figcaption>
									</figure>

									<h3>5. The keyboard shortcuts are the whole UX</h3>

									<p>
										The overlay is intentionally tiny. Press <code>A</code> to toggle annotation mode. Press <code>H</code> to hide the overlay while still navigating slides. <code>Shift</code> plus <code>D</code> opens the Done dialog. <code>Esc</code> cancels the current popover. The arrow keys are passed through to reveal.js so the deck still feels like a normal deck.
									</p>

									<figure class="not-prose my-8 mx-auto max-w-md">
										<div class="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 p-3">
											<img
												src="/deckmark-demo/4-help.png"
												alt="Deckmark help dialog listing keyboard shortcuts for annotation: A toggles annotation mode, H hides or shows overlay, Shift+D opens Done dialog, Esc cancels, Cmd or Ctrl plus Enter submits, arrow keys navigate slides"
												width="559"
												height="597"
												class="w-full rounded-xl shadow-sm"
												loading="lazy"
											/>
										</div>
										<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
											The whole keymap on one screen. No menus, no settings panel.
										</figcaption>
									</figure>

									<h3>6. Click Done. The agent applies everything.</h3>

									<p>
										You click ✓ Done in the toolbar (or hit <code>Shift</code>+<code>D</code>), optionally leave an overall summary, and go back to your agent window. The agent calls <code>get_annotations</code>, which reads the structured JSON the overlay wrote to <code>./annotations/session-&lt;timestamp&gt;.json</code>, then walks the comments one by one, edits <code>content.md</code>, and rebuilds. Want another round? Repeat. Want to ship? Ask the agent to publish, and <code>publish_deck</code> emits either a single self-contained <code>.html</code> file or a <code>published/</code> folder with cacheable assets.
									</p>
								</section>

								<section id="why-it-matters">
									<h2>Why This Pattern Matters Beyond Slides</h2>

									<p>
										I did not really build Deckmark because the world needs another slide tool. I built it because the human-in-the-loop part of agentic work is the part nobody has figured out yet, and slides happen to be a very honest place to figure it out.
									</p>

									<p>
										Think about every domain where an AI agent produces something visual: dashboards, marketing pages, design mocks, documents, charts, video storyboards. The generate step is solved. The "is this what I actually want?" step is still done by squinting at the screen and typing a paragraph into a chat box. That is a terrible interface for review. It throws away most of the information the human is already carrying in their eyes.
									</p>

									<p>
										The pattern Deckmark uses is small, and I think portable:
									</p>

									<ol>
										<li><strong>Agent generates an artifact</strong> and opens it in a real viewing context, not just a preview pane in a terminal.</li>
										<li><strong>Human reviews in context</strong>, with the artifact behaving the way it would behave in production.</li>
										<li><strong>Human annotates precisely</strong>, attaching feedback to the actual element (or region, or token, or frame) instead of to a paragraph of prose.</li>
										<li><strong>Agent reads structured feedback</strong> through a stable interface (MCP, in this case), applies it, and the loop repeats.</li>
									</ol>

									<p>
										Slides today. Dashboards tomorrow. Probably code reviews too, eventually, in a form that does not look like GitHub.
									</p>
								</section>

								<section id="what-i-learned">
									<h2>What I Learned Building This</h2>

									<h3>MCP is the right substrate for this kind of thing</h3>

									<p>
										I did not want Deckmark to be a "Claude Code feature." I wanted it to be a tool any agent can call. <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer">MCP</a> made that almost free. The same seven tools (<code>init_deck</code>, <code>build_deck</code>, <code>start_review</code>, <code>wait_for_close</code>, <code>get_annotations</code>, <code>stop_review</code>, <code>publish_deck</code>) are callable from Claude Code, Gemini CLI, Codex, Copilot CLI, Cursor, anything that speaks MCP. The Claude Code packaging adds the nice slash command and the design-system skill on top, but the core is portable.
									</p>

									<p>
										The lesson there is broader: when you are building agent tooling in 2026, picking an open protocol over a vendor SDK is the difference between "this works for one agent today" and "this will still be useful when the agent ecosystem looks different."
									</p>

									<h3>Local-first is not a slogan, it is a trust budget</h3>

									<p>
										The review server binds to <code>127.0.0.1</code> only. Annotations are plain JSON files in your project folder. There is no cloud, no account, no telemetry. I could have done none of that, and the tool would have shipped faster. But the moment you ask a user to put their unreleased deck in front of a third-party server, the install rate drops, and so does the willingness to use it for real work. Local-first buys trust cheaply.
									</p>

									<p>
										There is one honest caveat I document in the README: the bundled themes load typefaces from Google Fonts. If you open the deck offline, system fonts kick in, but in the normal case Google sees the requesting IP. A future minor release will add a <code>loadFonts: false</code> build option to skip that entirely.
									</p>

									<h3>Stable CSS selectors are harder than they look</h3>

									<p>
										For annotations to survive a rebuild, the selector on each element needs to be stable across builds. Naive selectors break the moment you add a slide, reorder elements, or change the markdown. I ended up walking the rendered DOM and generating selectors that combine slide index plus a structural path plus a content hash, so the same element on the same logical slide gets the same selector even if the slide before it changed.
									</p>

									<p>
										This is the kind of detail nobody asks you about, but if you get it wrong, the whole loop falls apart on the second rebuild.
									</p>

									<h3>Session storage has to be boring and atomic</h3>

									<p>
										Annotation writes are atomic (temp file plus rename) and serialized per deck. The reason is simple. The browser is writing while the user is clicking, and the agent might be reading at the same time. If those two race, you lose a comment, and now the user does not trust the tool. I burned a couple of evenings on this before I stopped trying to be clever and just did the boring, well-known thing.
									</p>

									<h3>The overlay does not know about reveal.js, on purpose</h3>

									<p>
										reveal.js is just the first engine adapter. The overlay walks the rendered DOM and does not import anything from reveal. That is what makes it possible to add Slidev or Impress or Marp adapters later without touching the overlay code. Engine-agnostic by construction, not by promise. If I had wired the overlay directly into reveal's slide API, I would have boxed myself in on day one.
									</p>
								</section>

								<section id="career-bet">
									<h2>Where Deckmark Fits in My Bigger Bet on Agentic Tools</h2>

									<p>
										Deckmark is one piece of a broader interest of mine: <strong>the next generation of engineering tools will not just generate code or content, they will support tight human feedback loops, structured review, and safe iteration.</strong> That is the part I keep coming back to.
									</p>

									<p>
										For the last decade, "developer tools" mostly meant "things that help a human write code." The interesting tools of the next decade are going to be the ones that help a human <em>direct</em> an agent: tools for review, for approval, for rollback, for in-context annotation, for structured handoffs between agent and human, and back. Generation gets cheaper every quarter. Judgement does not. The tools that respect that asymmetry are the ones that will matter.
									</p>

									<p>
										Building Deckmark was a way to think this through in code, not in a deck about decks. It made me much more concrete about how agent workflows, browser-based UX, and developer workflows can actually fit together. It also gave me a thing I use myself, which is the only honest test for whether a tool is good.
									</p>

									<div class="not-prose my-6 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 px-5 py-4">
										<p class="text-sm font-semibold text-indigo-700 dark:text-indigo-400 mb-1">
											<i class="fas fa-compass mr-1.5" aria-hidden="true"></i>The bet
										</p>
										<p class="text-gray-700 dark:text-gray-300 text-base">
											Build for the loop, not for the prompt. The agent is the easy part. The human in the loop is the design problem.
										</p>
									</div>

									<p>
										If you want to try it, the repo is here:
										<a
											href="https://github.com/sowenzhang/deckmark"
											target="_blank"
											rel="noopener noreferrer"
										>github.com/sowenzhang/deckmark</a>. Install snippet for Claude Code:
									</p>

									<pre class="not-prose my-6 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-950 p-5 text-sm text-gray-800 dark:text-gray-200"><code>/plugin marketplace add sowenzhang/deckmark
/plugin install deckmark@deckmark-marketplace</code></pre>

									<p>
										Restart the agent, then <code>/deckmark:use-deckmark &lt;topic&gt;</code> is yours. For Gemini CLI, Codex, Cursor, and other MCP-aware agents, the README has the JSON config snippet that points <code>npx</code> at the latest release tarball.
									</p>
								</section>

								<section id="faq">
									<h2>FAQ</h2>

									<h3>What is Deckmark, in one sentence?</h3>
									<p>
										An open-source MCP server that lets an AI agent build a slide deck, collect element-level annotations you click in the browser, and apply them back to the source.
									</p>

									<h3>Does it work with Claude Code?</h3>
									<p>
										Yes. Install with <code>/plugin marketplace add sowenzhang/deckmark</code> and then <code>/plugin install deckmark@deckmark-marketplace</code>. Restart Claude Code, verify with <code>/mcp</code>, then run <code>/deckmark:use-deckmark &lt;topic&gt;</code>.
									</p>

									<h3>Does it work with Gemini CLI, Codex, Cursor, Copilot CLI?</h3>
									<p>
										Yes. Add the MCP server config from the README to your agent's MCP config file. The seven tools work in any MCP-aware agent. The Claude-specific slash command and skill do not, but you can just describe what you want in natural language and the agent will pick the right tool.
									</p>

									<h3>Where does my data go?</h3>
									<p>
										Nowhere. The review server binds to <code>127.0.0.1</code>. Annotations are JSON files in your project folder. There is no telemetry. Fonts are loaded from Google Fonts by default, with system font fallbacks if you are offline. A <code>loadFonts: false</code> flag is on the roadmap.
									</p>

									<h3>What engine does it use to render slides?</h3>
									<p>
										reveal.js, vendored via npm so it works offline. The annotation overlay is engine-agnostic, so Slidev, Impress, or Marp adapters can be added without changing overlay code.
									</p>

									<h3>How do I publish the final deck?</h3>
									<p>
										Ask the agent to publish. <code>publish_deck</code> emits either a single self-contained <code>.html</code> (good for email or USB) or a <code>published/</code> folder with <code>index.html</code> plus cacheable assets (good for GitHub Pages, Netlify, S3, etc.).
									</p>

									<h3>Is it free?</h3>
									<p>
										Yes. MIT licensed.
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
											class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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

							<div
								class="rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/70 dark:bg-indigo-950/30 p-5"
							>
								<h3
									class="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
								>
									The Repo
								</h3>
								<a
									href="https://github.com/sowenzhang/deckmark"
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
								>
									<i class="fab fa-github" aria-hidden="true"></i>
									sowenzhang/deckmark
								</a>
								<p class="mt-2 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
									MIT licensed. Node 22+. Works with Claude Code and any MCP-aware agent.
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
