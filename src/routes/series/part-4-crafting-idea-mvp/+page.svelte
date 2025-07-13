<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 4
	const articleData = getArticleData(4);
	const navigation = getNavigationData(4);

	// Table of contents
	const tableOfContents = [
		{ id: 'intro', title: 'Introduction', level: 1 },
		{ id: 'why-ai-brainstorming', title: 'Why AI Brainstorming Matters', level: 1 },
		{ id: 'three-guidelines', title: '3 Guidelines for Brainstorming with AI', level: 1 },
		{ id: 'mvp-focus', title: 'Make it clear you want an MVP', level: 2 },
		{ id: 'give-options', title: 'Give it options', level: 2 },
		{ id: 'business-needs', title: 'Focus on business needs', level: 2 },
		{ id: 'chatgpt-projects', title: 'Using ChatGPT Projects for Better Results', level: 1 },
		{ id: 'cross-reference', title: 'Cross-Reference for Confidence', level: 1 },
		{ id: 'common-pitfalls', title: 'Common Pitfalls to Avoid', level: 1 },
		{ id: 'homework', title: 'Your Homework', level: 1 },
		{ id: 'next-steps', title: "What's Next", level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header content -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Crafting Your Idea & MVP with AI
		</h1>

		<div
			class="mb-8 flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
		>
			<span><i class="fas fa-calendar mr-2"></i>{articleData?.publishDate}</span>
			<span><i class="fas fa-clock mr-2"></i>{articleData?.readTime}</span>
			<span><i class="fas fa-user mr-2"></i>Hong</span>
		</div>

		<p
			class="mx-auto max-w-4xl text-center text-xl leading-relaxed text-gray-600 dark:text-gray-300"
		>
			Now that you have your tools ready, let's harness AI to transform your rough ideas into a clear,
			achievable MVP. Learn how to brainstorm strategically and avoid the trap of overengineering.
		</p>
	</svelte:fragment>

	<!-- Main content -->

	<section id="intro">
		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			You might wonder: why do I even need help crafting an idea when I already have AI at my fingertips?
		</p>

		<p>
			That's a fair question. But here's the catch: while AI is great at generating ideas, it can also
			overwhelm you with too much information or lead you down overcomplicated paths.
		</p>

		<div class="relative">
			<a href="https://amzn.to/3GLsf3M" target="_blank" rel="noopener" class="float-right ml-6 mb-4">
				<img src="https://m.media-amazon.com/images/I/7110mmksJsL._SL1360_.jpg" alt="Scalability Rules Book Cover" class="w-40 sm:w-48 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
			</a>

			<p>
				In fact, one of the best lessons from the book <a href="https://amzn.to/3GLsf3M" target="_blank" rel="noopener"><em>Scalability Rules: 50 Principles for Scaling Web Sites</em></a>
				(a great read for anyone building websites) is this:
			</p>

			<div class="not-prose my-8 border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
				<p class="mb-0 text-xl font-semibold text-red-700 dark:text-red-300">
					Don't overengineer the solution.
				</p>
			</div>

			<p class="text-lg">
				<strong>Overthought ideas → Overengineered solutions.</strong><br>
				That's what we want to avoid.
			</p>
		</div>
	</section>

	<section id="why-ai-brainstorming">
		<h2>Why AI Brainstorming Matters</h2>

		<p>
			When I started building MiniBreaks.io, my initial idea was much more complex than what I eventually
			launched. The AI tools were happy to help me plan all of this!
		</p>

		<p>
			But that's exactly the problem. AI will enthusiastically help you build a complicated solution
			when what you really need is to start simple and prove your concept first.
		</p>

		<p>
			The key is learning how to guide AI toward simplicity rather than complexity. This requires
			strategic prompting and clear boundaries.
		</p>
	</section>

	<section id="three-guidelines">
		<h2>3 Guidelines for Brainstorming with AI</h2>

		<p>
			When you brainstorm your website idea with AI, keep these principles in mind:
		</p>

		<div class="not-prose my-8 space-y-6">
			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
					1
				</div>
				<div>
					<h4 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" id="mvp-focus">
						Make it clear you want an MVP
					</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Tell AI explicitly that you're looking for a Minimum Viable Product. This keeps the
						scope small and achievable.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					2
				</div>
				<div>
					<h4 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" id="give-options">
						Give it options
					</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Describe your idea with a few feature options. Let AI help you weigh which feature
						delivers the best ROI (return on investment).
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
					3
				</div>
				<div>
					<h4 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" id="business-needs">
						Focus on business needs
					</h4>
					<p class="text-gray-700 dark:text-gray-300">
						If you don't frame your request around business needs, AI will behave like an
						overanxious parent — giving you way more technical details and warnings than you need at this stage.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="chatgpt-projects">
		<h2>Using ChatGPT Projects for Better Results</h2>

		<p>
			If you're using the paid version of ChatGPT, create a Project for this brainstorming session.
		</p>

		<img src="/ai-series/new-chatgpt-project.jpg" alt="ChatGPT Projects Setup"
			class="my-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg object-cover">

		<p>
			Why? Because you can define the tone and role AI should play for you. For example:
		</p>

		<div class="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>Project Instructions:</strong><br>
				"I'd like you to act as my co-founder and brainstorming partner. Please focus on creative yet
				practical business ideas for a new website, aiming for MVP."
			</p>
		</div>

		<p>
			Once you've set this context, you can dive deeper with prompts like:
		</p>

		<div class="not-prose my-6 rounded-lg bg-green-50 p-6 dark:bg-green-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>Example Prompt:</strong><br>
				"I want to build a website that &#123;does something&#125;. For starters, I'm thinking &#123;option A&#125;,
				&#123;option B&#125;, &#123;option C&#125;. As an MVP, what should I focus on first, while keeping future growth in mind?"
			</p>
		</div>

		<p>
			This has worked incredibly well for me. AI gave me a clear MVP flow, lightweight design suggestions,
			and ideas for future scalability.
		</p>
	</section>

	<section id="cross-reference">
		<h2>Cross-Reference for Confidence</h2>

		<p>
			One final tip: don't be afraid to cross-reference ideas with other AI tools. This can boost your
			confidence and give you different perspectives.
		</p>

		<p>
			Tools like DeepSeek or <a href="https://customgpt.ai/?fpr=hong40" target="_blank" rel="noopener">CustomGPT</a>
			can provide different viewpoints. <a href="https://customgpt.ai/?fpr=hong40" target="_blank" rel="noopener">CustomGPT</a> is particularly great if you need more industry-specific insights.
		</p>

		<div class="not-prose my-6 border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>💡 Pro Tip:</strong> If two different AI tools give you similar advice, you're probably
				on the right track. If they disagree significantly, dig deeper to understand why.
			</p>
		</div>
	</section>

	<section id="common-pitfalls">
		<h2>Common Pitfalls to Avoid</h2>

		<p>
			Based on my experience and feedback from other AI-assisted developers, here are the most common
			mistakes to avoid:
		</p>

		<div class="not-prose my-8 space-y-4">
			<div class="flex items-start space-x-3">
				<div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
					✕
				</div>
				<div>
					<strong class="text-gray-900 dark:text-white">Asking for "the best" solution</strong>
					<p class="mt-1 text-gray-600 dark:text-gray-400">
						AI will give you enterprise-level architecture when you need a simple landing page.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-3">
				<div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
					✕
				</div>
				<div>
					<strong class="text-gray-900 dark:text-white">Not setting time constraints</strong>
					<p class="mt-1 text-gray-600 dark:text-gray-400">
						Without deadlines, AI will suggest features that take months to implement.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-3">
				<div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
					✕
				</div>
				<div>
					<strong class="text-gray-900 dark:text-white">Ignoring technical complexity</strong>
					<p class="mt-1 text-gray-600 dark:text-gray-400">
						Always ask: "What's the simplest version of this that still solves the problem?"
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-3">
				<div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">
					✕
				</div>
				<div>
					<strong class="text-gray-900 dark:text-white">Building for imaginary users</strong>
					<p class="mt-1 text-gray-600 dark:text-gray-400">
						Focus on one specific user with one specific problem, not everyone with every problem.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="homework">
		<h2>Your Homework</h2>

		<p>
			Before moving to Part 5, complete this crucial brainstorming exercise:
		</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Set up a ChatGPT Project for your website brainstorming (if using paid version)</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Write down 3 different website ideas you're considering</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>For each idea, brainstorm with AI using the 3 guidelines</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Choose ONE idea and write your MVP in exactly one paragraph</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Cross-reference your MVP with a second AI tool</span>
			</div>
		</div>

		<div class="not-prose my-6 border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
			<p class="mb-2 text-gray-700 dark:text-gray-300">
				<strong>🎯 Success Criteria:</strong> Your MVP paragraph should be so clear that a stranger
				could read it and immediately understand:
			</p>
			<ul class="ml-4 mt-2 list-disc space-y-1 text-gray-600 dark:text-gray-400">
				<li>Who your website is for</li>
				<li>What problem it solves</li>
				<li>How users will interact with it</li>
				<li>What makes it valuable</li>
			</ul>
		</div>

		<div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>📝 Example MVP:</strong> "MiniBreaks.io is a playful website encourages taking mindful breaks, promotes workplace well-being, and fosters a sense of fun through achievements and leaderboards."
			</p>
		</div>
	</section>

	<section id="next-steps">
		<h2>What's Next</h2>

		<p>
			In Part 5, we'll take your refined MVP and start designing the user experience. You'll learn how to:
		</p>

		<ul>
			<li>Use AI for wireframing and layout design</li>
			<li>Generate user-facing copy that converts</li>
			<li>Create a visual hierarchy that guides users</li>
			<li>Design mobile-first experiences</li>
			<li>Test your design concepts with AI feedback</li>
		</ul>

		<p>
			By the end of Part 5, you'll have a clear visual plan for your website and compelling copy that
			speaks to your users' needs.
		</p>

		<div class="not-prose my-6 border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>🎨 Coming up:</strong> We'll explore AI-powered design tools, learn prompt engineering
				for visual concepts, and create a design system that you can actually implement.
			</p>
		</div>
	</section>
</BaseSeriesPage>
