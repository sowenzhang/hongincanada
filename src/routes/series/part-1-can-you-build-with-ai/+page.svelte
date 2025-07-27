<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 1
	const articleData = getArticleData(1);
	const navigation = getNavigationData(1);

	// Table of contents for this part
	const tableOfContents = [
		{ id: 'the-big-question', title: 'The Big Question', level: 1 },
		{ id: 'the-reality-check', title: 'The Reality Check', level: 1 },
		{ id: 'the-overwhelming-start', title: 'The Overwhelming Start', level: 1 },
		{ id: 'the-breakthrough-moment', title: 'The Breakthrough Moment', level: 1 },
		{ id: 'what-youll-learn', title: "What You'll Learn in This Series", level: 1 },
		{ id: 'for-everyone', title: 'This Series Is For Everyone', level: 1 },
		{ id: 'the-journey-ahead', title: 'The Journey Ahead', level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Can You Really Build a Website with AI?
		</h1>
		<h2 class="mb-8 text-center text-2xl font-medium text-blue-600 md:text-3xl dark:text-blue-400">
			(Spoiler: Yes, But…)
		</h2>

		<div
			class="mb-8 flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
		>
			<span><i class="fas fa-calendar mr-2" aria-hidden="true"></i>{articleData?.publishDate || ''}</span>
			<span><i class="fas fa-clock mr-2" aria-hidden="true"></i>{articleData?.readTime || ''}</span>
			<span><i class="fas fa-user mr-2" aria-hidden="true"></i>Hong</span>
		</div>

		<p
			class="mx-auto max-w-4xl text-center text-xl leading-relaxed text-gray-600 dark:text-gray-300"
		>
			Welcome to my exploration of building <a
				href="https://minibreaks.io"
				target="_blank"
				class="text-blue-600 underline decoration-2 underline-offset-2 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
				>MiniBreaks.io</a
			> with AI. A story of me trying to build a complete website using artificial intelligence as my
			development partner.
		</p>
	</svelte:fragment>

	<!-- Main content -->
	<section id="the-big-question">
		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			Before I started building MiniBreaks.io, I had one burning question in mind: <strong
				>Can AI help me build a complete website, from concept to deployment?</strong
			>
		</p>

		<p>
			The short answer is <strong>yes</strong>. The longer answer? It's not as magical or automatic
			as it sounds. As someone with years of experience in software engineering, I already had a
			good sense of what needed to happen—but even for me, the process wasn't exactly plug-and-play.
		</p>

		<div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>Here's the thing:</strong> AI is incredibly powerful, but it's not a magic wand. It's
				more like having a really smart assistant who knows a lot about coding but still needs clear
				direction from you.
			</p>
		</div>
	</section>

	<section id="the-reality-check">
		<h2>The Reality Check</h2>

		<p>
			Let me be completely honest with you. When I first started this project, I thought I could
			just tell an AI what I wanted and watch it build my website. I imagined typing something like
			"Build me a travel booking website" and getting back a fully functional application.
		</p>

		<p>That's not how it works. At least, not yet.</p>

		<p>
			What I discovered is that AI excels at specific tasks when given clear, focused instructions.
			Want it to write a function that calculates pricing? Excellent. Need help debugging an error
			message? Fantastic. Finishing a journal and needs someone to fix your grammar? It's your best
			friend.
		</p>

		<p>
			But ask it to "build a website" without specifics, and you'll get overwhelmed with options,
			suggestions, and complexity that might make you want to give up before you start.
		</p>
	</section>

	<section id="the-overwhelming-start">
		<h2>The Overwhelming Start</h2>

		<p>
			Initially, I planned to use just one AI tool, but I quickly realized that the landscape is
			vast and a bit overwhelming. At the beginning, I tried asking ChatGPT to make me a roadmap,
			but what I got back was… too much.
		</p>

		<div class="not-prose my-8 border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-900/20">
			<div class="flex items-start space-x-3">
				<i class="fas fa-exclamation-triangle mt-1 text-yellow-600 dark:text-yellow-400" aria-hidden="true"></i>
				<div>
					<p class="mb-2 font-semibold text-yellow-800 dark:text-yellow-300">
						The AI Overwhelm Problem
					</p>
					<p class="mb-0 text-yellow-700 dark:text-yellow-400">
						AI is very thorough. The plan was long, detailed, and frankly intimidating. It made the
						whole project feel like a mountain I didn't want to climb.
					</p>
				</div>
			</div>
		</div>

		<p>Here's what that first roadmap looked like:</p>

		<ul>
			<li>Choose a tech stack (React vs Vue vs Svelte vs Next.js vs...)</li>
			<li>Set up development environment (Node.js, package managers, bundlers...)</li>
			<li>Design database schema (SQL vs NoSQL vs...)</li>
			<li>Implement authentication (OAuth, JWT, sessions...)</li>
			<li>Build API endpoints (REST vs GraphQL...)</li>
			<li>Configure hosting and deployment (AWS vs Vercel vs...)</li>
			<li>Set up monitoring and analytics...</li>
		</ul>

		<p>
			And that was just the beginning! Each bullet point had sub-bullet points with more choices,
			more configurations, more things to learn. It was paralyzing.
		</p>
	</section>

	<section id="the-breakthrough-moment">
		<h2>The Breakthrough Moment</h2>

		<p>
			Eventually, I learned something important: <strong
				>just start. Forget perfection. Build momentum.</strong
			>
		</p>

		<p>
			Instead of trying to plan everything upfront, I decided to break the project into tiny,
			manageable pieces. Rather than "build a website for 'something'," I started with "create a
			simple landing page that promotes positive living." (Stay tuned for later part where I got
			this started.)
		</p>

		<p>
			That one small step led to another, then another. Before I knew it, I was making real
			progress. The AI tools became incredibly helpful when I gave them specific, focused tasks
			instead of asking them to solve everything at once.
		</p>

		<div class="not-prose my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
			<div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
				<h4 class="mb-2 font-bold text-red-700 dark:text-red-300">❌ What Doesn't Work</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					"Build me a complete travel booking website with all the features"
				</p>
			</div>
			<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
				<h4 class="mb-2 font-bold text-green-700 dark:text-green-300">✅ What Actually Works</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					"I want the navigation header sticky and a little bit transparent"
				</p>
			</div>
		</div>
	</section>

	<section id="what-youll-learn">
		<h2>What You'll Learn in This Series</h2>

		<p>
			In this series, I will walk you through how to use AI to create a complete website, step by
			step. This series is not only for readers with engineering backgrounds, but hopefully for
			anyone who is interested in learning to build something with AI.
		</p>

		<div class="my-8 space-y-6">
			<div class="flex items-start space-x-4">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"
				>
					<i class="fas fa-tools text-blue-600 dark:text-blue-300" aria-hidden="true"></i>
				</div>
				<div>
					<h4 class="mb-2 font-bold text-gray-900 dark:text-white">
						The Right (Minimum) Tools for the Job
					</h4>
					<p class="text-gray-600 dark:text-gray-400">
						Which AI tools work best for different tasks, from GitHub Copilot for coding to ChatGPT
						for planning.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"
				>
					<i class="fas fa-comment-dots text-purple-600 dark:text-purple-300" aria-hidden="true"></i>
				</div>
				<div>
					<h4 class="mb-2 font-bold text-gray-900 dark:text-white">Writing Effective Prompts</h4>
					<p class="text-gray-600 dark:text-gray-400">
						How to communicate with AI tools to get exactly what you need, not overwhelming lists of
						possibilities.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
				>
					<i class="fas fa-hand-paper text-green-600 dark:text-green-300" aria-hidden="true"></i>
				</div>
				<div>
					<h4 class="mb-2 font-bold text-gray-900 dark:text-white">When to Manually Intervene</h4>
					<p class="text-gray-600 dark:text-gray-400">
						Recognizing when to step in and guide the AI versus when to let it handle things
						automatically.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div
					class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900"
				>
					<i class="fas fa-handshake text-orange-600 dark:text-orange-300"></i>
				</div>
				<div>
					<h4 class="mb-2 font-bold text-gray-900 dark:text-white">Making AI Your Partner</h4>
					<p class="text-gray-600 dark:text-gray-400">
						Most importantly, how to work with AI as a collaborative partner rather than expecting
						it to do everything for you.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="for-everyone">
		<h2>This Series Is For Everyone</h2>

		<p>
			Whether you're a complete beginner who's never written a line of code, or someone with
			technical experience who wants to see how AI can accelerate your workflow, this series is
			designed to be accessible and practical.
		</p>

		<p>
			I'll explain technical concepts in plain language, show you exactly which buttons to click,
			and most importantly, share the real challenges I faced and how I overcame them.
		</p>

		<div
			class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20"
		>
			<div class="flex items-start space-x-3">
				<i class="fas fa-lightbulb mt-1 text-emerald-600 dark:text-emerald-400"></i>
				<div>
					<p class="mb-2 font-semibold text-emerald-800 dark:text-emerald-300">My Promise to You</p>
					<p class="mb-0 text-emerald-700 dark:text-emerald-400">
						No jargon without explanation. No skipped steps. No "and then magic happens" moments.
						Just honest, practical guidance from someone who's been through the process.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="the-journey-ahead">
		<h2>The Journey Ahead</h2>

		<p>By the end of this series, you'll have more than just a website. You'll have:</p>

		<ul>
			<li><strong>A new perspective</strong> on what's possible with AI-assisted development</li>
			<li><strong>Practical skills</strong> you can apply to your own projects</li>
			<li><strong>A toolkit</strong> of AI tools and techniques that actually work</li>
			<li><strong>The confidence</strong> to tackle bigger, more ambitious projects</li>
		</ul>

		<p>
			But most importantly, you'll understand that building with AI isn't about replacing human
			creativity and decision-making, it's about amplifying them.
		</p>

		<div
			class="not-prose my-8 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-8 text-center dark:border-blue-700 dark:from-blue-900/20 dark:to-purple-900/20"
		>
			<h3 class="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
				Ready to Start Building?
			</h3>
			<p class="mb-6 text-gray-600 dark:text-gray-300">
				In the next part, we'll dive into why I chose AI as my development partner and explore the
				specific advantages it offers for modern web development.
			</p>
			<p class="text-sm italic text-gray-500 dark:text-gray-400">
				Spoiler alert: It's not just about writing code faster (though that's definitely a perk).
			</p>
		</div>
	</section>
</BaseSeriesPage>
