<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 10
	const articleData = getArticleData(10);
	const navigation = getNavigationData(10);

	// Table of contents for this part
	const tableOfContents = [
		{ id: 'series-reflection', title: 'What This Series Was Really About', level: 1 },
		{ id: 'whats-next', title: "What's Next?", level: 1 },
		{ id: 'vibe-coding-warning', title: 'The "Vibe Coding" Warning', level: 1 },
		{ id: 'parting-advice', title: 'My Parting Advice', level: 1 },
		{ id: 'whats-next-for-me', title: "What's Next for Me?", level: 1 },
		{ id: 'cheat-sheet', title: 'AI Development Cheat Sheet', level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			The Future of AI-Assisted Development
		</h1>
		<h2 class="mb-8 text-center text-2xl font-medium text-blue-600 md:text-3xl dark:text-blue-400">
			& Your Complete AI Development Cheat Sheet
		</h2>

		<div
			class="mb-8 flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
		>
			<span><i class="fas fa-calendar mr-2"></i>{articleData?.publishDate || ''}</span>
			<span><i class="fas fa-clock mr-2"></i>{articleData?.readTime || ''}</span>
			<span><i class="fas fa-user mr-2"></i>Hong</span>
		</div>

		<div class="mx-auto max-w-4xl text-center">
			<div class="mb-6 inline-flex items-center rounded-lg bg-green-50 px-4 py-2 text-green-800 dark:bg-green-900/20 dark:text-green-300">
				<i class="fas fa-trophy mr-2"></i>
				<span class="font-medium"> Series Complete!</span>
			</div>
			<p class="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
				We made it to the end — congratulations for sticking with me through this journey! Let's reflect on what we've learned and look toward the future of AI-assisted development.
			</p>
		</div>
	</svelte:fragment>

	<!-- Main content -->
	<div class="prose prose-lg max-w-none dark:prose-invert">
		<div id="series-reflection" class="scroll-mt-24">
			<h2>🎯 What This Series Was Really About</h2>

			<p>Let's take a moment to reflect on what this series was really about.</p>

			<p>This wasn't a crash course in software engineering. I didn't set out to turn you into a full-fledged developer overnight.</p>

			<p>Instead, my goal was simple:</p>
			<ul>
				<li>✅ <strong>To show you that building a complete website with AI is possible for anyone</strong> — yes, anyone.</li>
				<li>✅ <strong>To help you discover what tools to use, what kinds of prompts to try, and what pitfalls to watch out for.</strong></li>
				<li>✅ <strong>And most importantly, to give you the confidence to take that first step.</strong></li>
			</ul>
		</div>

		<div id="whats-next" class="scroll-mt-24">
			<h2>🚀 So what's next?</h2>

			<p>Will AI someday be able to do all the heavy lifting — even the planning, the prompting, and the debugging — all on its own?</p>

			<p><strong>Maybe. Probably.</strong> With better training data and more capable models, it's easy to imagine AI reaching that point.</p>

			<p><strong>But today? Not yet.</strong></p>
		</div>

		<div id="vibe-coding-warning" class="scroll-mt-24">
			<h2>⚠️ The "Vibe Coding" Warning</h2>

			<p>That's why I emphasize this: <strong>don't fall for buzzwords like "vibe coding".</strong></p>

			<p>You might have heard this term floating around — it means different things to different companies, but generally refers to coding by "feel," relying on AI to fill in the gaps. While the concept sounds fun and approachable, it can also set people up for frustration.</p>

			<p>It's like asking a master plumber to suddenly create a fine-dining French cuisine experience — just because there's now a robot that can cook.</p>

			<div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 dark:bg-blue-900/20 dark:border-blue-400">
				<div class="flex items-start">
					<i class="fas fa-lightbulb text-blue-500 mt-1 mr-3 dark:text-blue-400"></i>
					<div>
						<p class="font-semibold text-blue-800 dark:text-blue-300 mb-2">Key Insight</p>
						<p class="text-blue-700 dark:text-blue-200 mb-0">AI can empower you. It can save you time. But it still needs you — your judgment, your creativity, your intent. That's why I believe no one, especially those without an engineering background, should be judged by how "vibey" their code feels.</p>
					</div>
				</div>
			</div>
		</div>

		<div id="parting-advice" class="scroll-mt-24">
			<h2>💡 My Parting Advice</h2>

			<p>Because my mission here was to motivate you to try, I deliberately avoided overloading you with technical details. But don't stop here.</p>

			<ul>
				<li>👉 <strong>Keep exploring.</strong></li>
				<li>👉 <strong>Share what you build.</strong></li>
				<li>👉 <strong>Reach out to me (or your friends, your community) when you get stuck.</strong></li>
			</ul>

			<p>We live in an exciting era for creators — AI makes building more accessible than ever before.<br>
			But I know it can also feel intimidating. And that's okay. <strong>You're not alone.</strong></p>
		</div>

		<div id="whats-next-for-me" class="scroll-mt-24">
			<h2>👋 What's Next for Me?</h2>

			<p>Well, I'm going to do what I encouraged you to do:<br>
			I'll reread this series, then jump into building my next product. 😉</p>
		</div>

		<div id="cheat-sheet" class="scroll-mt-24">
			<h2>📝 Your Complete AI Development Cheat Sheet</h2>

			<p class="text-lg font-medium text-gray-800 dark:text-gray-200 mb-6">Here's everything you need to know in one compact reference — bookmark this section!</p>

			<!-- Cheat Sheet Container -->
			<div class="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-blue-200 dark:border-gray-700 shadow-lg">

				<!-- Quick Start Section -->
				<div class="mb-8">
					<h4 class="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4 flex items-center">
						🚀 Quick Start
					</h4>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
							<div class="flex items-start">
								<span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
								<div>
									<h4 class="font-semibold text-gray-800 dark:text-gray-200">Decide what to build</h4>
									<p class="text-sm text-gray-600 dark:text-gray-400">Be specific about your goals</p>
								</div>
							</div>
						</div>
						<div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
							<div class="flex items-start">
								<span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
								<div>
									<h4 class="font-semibold text-gray-800 dark:text-gray-200">Choose simple tools</h4>
									<p class="text-sm text-gray-600 dark:text-gray-400">e.g., SvelteKit + Render</p>
								</div>
							</div>
						</div>
						<div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm md:col-span-2">
							<div class="flex items-start">
								<span class="bg-blue-500 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
								<div>
									<h4 class="font-semibold text-gray-800 dark:text-gray-200">Use AI as co-pilot, not autopilot</h4>
									<p class="text-sm text-gray-600 dark:text-gray-400">Stay involved in the process</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Essential Tools Section -->
				<div class="mb-8">
					<h4 class="text-xl font-bold text-green-800 dark:text-green-300 mb-4 flex items-center">
						🧰 Essential Tools
					</h4>
					<div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm">
						<div class="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-gray-200 dark:divide-gray-600">
							<div class="p-4 space-y-3">
								<div class="flex justify-between items-center">
									<span class="font-semibold text-gray-800 dark:text-gray-200">ChatGPT / Copilot</span>
									<span class="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">Guidance & Code</span>
								</div>
								<div class="flex justify-between items-center">
									<span class="font-semibold text-gray-800 dark:text-gray-200">VS Code / Cursor</span>
									<span class="text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">Writing & Testing</span>
								</div>
							</div>
							<div class="p-4 space-y-3">
								<div class="flex justify-between items-center">
									<span class="font-semibold text-gray-800 dark:text-gray-200">Hugging Face / OpenAI</span>
									<span class="text-sm bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded">AI & Design</span>
								</div>
								<div class="flex justify-between items-center">
									<span class="font-semibold text-gray-800 dark:text-gray-200">Render / Netlify / Vercel</span>
									<span class="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Hosting</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Best Practices & Pitfalls in Two Columns -->
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
					<!-- Best Practices -->
					<div>
						<h4 class="text-xl font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center">
							<i class="fas fa-comments mr-3 text-purple-600"></i> Best Prompt Practices
						</h4>
						<div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm space-y-3">
							<div class="flex items-center">
								<i class="fas fa-check-circle text-green-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">State your goal clearly</span>
							</div>
							<div class="flex items-center">
								<i class="fas fa-check-circle text-green-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Include context & constraints</span>
							</div>
							<div class="flex items-center">
								<i class="fas fa-check-circle text-green-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Request alternatives if stuck</span>
							</div>
							<div class="flex items-center">
								<i class="fas fa-check-circle text-green-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Refine & iterate</span>
							</div>
						</div>
					</div>

					<!-- Common Pitfalls -->
					<div>
						<h4 class="text-xl font-bold text-red-800 dark:text-red-300 mb-4 flex items-center">
							<i class="fas fa-exclamation-triangle mr-3 text-red-600"></i> Common Pitfalls
						</h4>
						<div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm space-y-3">
							<div class="flex items-center">
								<i class="fas fa-times-circle text-red-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Blindly copy-pasting code</span>
							</div>
							<div class="flex items-center">
								<i class="fas fa-times-circle text-red-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Not testing in real environment</span>
							</div>
							<div class="flex items-center">
								<i class="fas fa-times-circle text-red-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Forgetting accessibility</span>
							</div>
							<div class="flex items-center">
								<i class="fas fa-times-circle text-red-500 mr-3"></i>
								<span class="text-gray-800 dark:text-gray-200">Ignoring performance</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Pro Tips Section -->
				<div class="mb-6">
					<h4 class="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-4 flex items-center">
						💬 Pro Tips
					</h4>
					<div class="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
						<p class="text-gray-700 dark:text-gray-300 font-medium mb-3">✨ Ask AI to:</p>
						<div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
							<div class="text-center">
								<div class="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 mb-2">
									<i class="fas fa-code-branch text-blue-600 text-xl"></i>
								</div>
								<span class="text-sm font-medium text-gray-800 dark:text-gray-200">Review your code</span>
							</div>
							<div class="text-center">
								<div class="bg-green-100 dark:bg-green-900 rounded-lg p-3 mb-2">
									<i class="fas fa-lightbulb text-green-600 text-xl"></i>
								</div>
								<span class="text-sm font-medium text-gray-800 dark:text-gray-200">Explain concepts</span>
							</div>
							<div class="text-center">
								<div class="bg-purple-100 dark:bg-purple-900 rounded-lg p-3 mb-2">
									<i class="fas fa-vial text-purple-600 text-xl"></i>
								</div>
								<span class="text-sm font-medium text-gray-800 dark:text-gray-200">Suggest tests</span>
							</div>
							<div class="text-center">
								<div class="bg-red-100 dark:bg-red-900 rounded-lg p-3 mb-2">
									<i class="fas fa-bug text-red-600 text-xl"></i>
								</div>
								<span class="text-sm font-medium text-gray-800 dark:text-gray-200">Debug step by step</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Final Reminder -->
				<div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-2 border-green-200 dark:border-green-700 rounded-lg p-6 text-center">
					<h4 class="text-xl font-bold mb-3 flex items-center justify-center text-gray-800 dark:text-gray-200">
						<i class="fas fa-heart mr-3 text-green-600 dark:text-green-400"></i>🌟 Closing Reminder
					</h4>
					<div class="space-y-2">
						<p class="font-medium text-gray-700 dark:text-gray-300">You don't need to be perfect.</p>
						<p class="font-medium text-gray-700 dark:text-gray-300">You do need to start.</p>
						<p class="font-medium text-gray-700 dark:text-gray-300">And you can always come back here for inspiration.</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Call to Action -->
		<div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 text-center border border-purple-200 dark:border-purple-700 mt-12">
			<h4 class="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Ready to Start Building?</h4>
			<p class="text-gray-600 dark:text-gray-400 mb-6">
				Take what you've learned and start your own AI-assisted development journey. Remember, every expert was once a beginner.
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/series" class="inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-900 font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl border border-gray-700 no-underline" style="color: white !important; ">
					<i class="fas fa-arrow-left mr-3 no-underline" style="color: white !important; text-decoration: none !important;"></i>
					<span style="color: white !important; ">Review the Full Series</span>
				</a>
				<a href="https://minibreaks.io" target="_blank" class="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl border border-emerald-500 no-underline" style="color: white !important; ">
					<i class="fas fa-external-link-alt mr-3 no-underline" style="color: white !important; text-decoration: none !important;"></i>
					<span style="color: white !important; ">See MiniBreaks.io Live</span>
				</a>
			</div>
		</div>
	</div>
</BaseSeriesPage>
