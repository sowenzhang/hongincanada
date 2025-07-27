<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 9
	const articleData = getArticleData(9);
	const navigation = getNavigationData(9);

	// Table of contents for this part
	const tableOfContents = [
		{ id: 'ai-needs-your-help', title: 'AI Needs Your Help to Succeed', level: 1 },
		{ id: 'frustrations-limitations', title: 'Frustrations and Limitations', level: 1 },
		{ id: 'repetitive-suggestions', title: 'Repetitive Suggestions', level: 2 },
		{ id: 'overcomplicated-code', title: 'Overcomplicated Code', level: 2 },
		{ id: 'wrong-assumptions', title: 'Wrong Assumptions About Environment', level: 2 },
		{ id: 'case-studies', title: 'Two Case Studies', level: 1 },
		{ id: 'dialog-design-gone-wrong', title: 'Dialog Design Gone Wrong', level: 2 },
		{ id: 'deployment-troubleshooting', title: 'Deployment Troubleshooting Loop', level: 2 },
		{ id: 'surprises', title: 'Surprises Along the Way', level: 1 },
		{ id: 'final-reflection', title: 'Final Reflection', level: 1 },
		{ id: 'homework', title: 'Homework', level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Lessons Learned
		</h1>
		<h2 class="mb-8 text-center text-2xl font-medium text-blue-600 md:text-3xl dark:text-blue-400">
			Failures, Frustrations, and Surprises of Building with AI
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
			In this part of the series, I want to share what I learned from building <a
				href="https://minibreaks.io"
				target="_blank"
				class="text-blue-600 underline decoration-2 underline-offset-2 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
				>MiniBreaks.io</a
			> with AI — including the failures, frustrations, limitations, and surprises. These lessons are for everyone: whether you have a technical background or not, working with AI can feel like having a talented but slightly scatterbrained teammate.
		</p>
	</svelte:fragment>

	<!-- Main content -->
	<section id="ai-needs-your-help">
		<h2>AI Needs Your Help to Succeed</h2>

		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			AI isn't magic. It's powerful, but it needs direction, context, and your guidance to succeed.
		</p>

		<p>Here's what AI needs from you to perform at its best:</p>

		<div class="my-8 grid gap-4 md:grid-cols-3">
			<div class="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
				<div class="mb-3 flex items-center">
					<i class="fas fa-check-circle mr-3 text-green-600 dark:text-green-400" aria-hidden="true"></i>
					<h4 class="text-lg font-semibold text-green-800 dark:text-green-200">Specific Requirements</h4>
				</div>
				<p class="text-green-700 dark:text-green-300">Clear, detailed instructions about what you want to achieve</p>
			</div>

			<div class="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
				<div class="mb-3 flex items-center">
					<i class="fas fa-check-circle mr-3 text-green-600 dark:text-green-400" aria-hidden="true"></i>
					<h4 class="text-lg font-semibold text-green-800 dark:text-green-200">Smaller Tasks</h4>
				</div>
				<p class="text-green-700 dark:text-green-300">Well-defined, manageable chunks rather than massive requests</p>
			</div>

			<div class="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
				<div class="mb-3 flex items-center">
					<i class="fas fa-check-circle mr-3 text-green-600 dark:text-green-400" aria-hidden="true"></i>
					<h4 class="text-lg font-semibold text-green-800 dark:text-green-200">Clear Examples</h4>
				</div>
				<p class="text-green-700 dark:text-green-300">Concrete examples and context to guide its understanding</p>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-900/20">
			<h4 class="mb-4 text-lg font-semibold text-yellow-800 dark:text-yellow-200">Why This Matters</h4>
			<ul class="list-disc space-y-2 pl-6 text-yellow-700 dark:text-yellow-300">
				<li>AI often generates more than what you actually need, cluttering your project</li>
				<li>It sometimes mixes code from different versions of libraries or frameworks that don't work well together</li>
				<li>It can insert code in the wrong place — for example, I occasionally got a <code>&lt;script&gt;</code> block inside another <code>&lt;script&gt;</code> block (not valid at all)</li>
			</ul>
			<p class="mt-4 font-medium text-yellow-800 dark:text-yellow-200">
				These are exactly the reasons why you should always use source control tools like Git — they let you safely roll back if something breaks.
			</p>
		</div>
	</section>

	<section id="frustrations-limitations">
		<h2>Frustrations and Limitations</h2>

		<p>
			While AI is incredibly helpful, it's not perfect. Here are the main frustrations I encountered and what I learned from them.
		</p>

		<section id="repetitive-suggestions">
			<h3><i class="fas fa-sync-alt mr-3 text-orange-500" aria-hidden="true"></i>Repetitive Suggestions</h3>

			<p>
				One of the most frustrating patterns was when AI got stuck suggesting the same solution over and over — even after I clearly said it didn't work. This happened when debugging CSS layout glitches and while resolving deployment issues.
			</p>

			<p>
				AI sometimes struggles to "let go" of its initial assumptions, creating an endless loop of unhelpful suggestions.
			</p>

			<div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-blue-800 dark:text-blue-200">
					<i class="fas fa-lightbulb mr-3" aria-hidden="true"></i>What I'd do differently
				</h4>
				<p class="text-blue-700 dark:text-blue-300">
					When I notice repeated advice, I now stop sooner, summarize what has already been tried, and explicitly tell AI what to avoid suggesting. That helps break the loop.
				</p>
			</div>
		</section>

		<section id="overcomplicated-code">
			<h3><i class="fas fa-code mr-3 text-orange-500" aria-hidden="true"></i>Overcomplicated Code</h3>

			<p>
				Another limitation: AI often writes more code than necessary. For example, when I asked for a simple Svelte component, it returned a bloated implementation that added unnecessary dependencies.
			</p>

			<div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-blue-800 dark:text-blue-200">
					<i class="fas fa-lightbulb mr-3" aria-hidden="true"></i>What I'd do differently
				</h4>
				<p class="text-blue-700 dark:text-blue-300">
					I now ask AI upfront to "keep it minimal and use only vanilla features unless strictly necessary."
				</p>
			</div>
		</section>

		<section id="wrong-assumptions">
			<h3><i class="fas fa-exclamation-triangle mr-3 text-orange-500" aria-hidden="true"></i>Wrong Assumptions About Environment</h3>

			<p>
				At one point, AI assumed I was running my server on Ubuntu when I was actually on a managed hosting platform. Its advice — such as editing <code>/etc/nginx/sites-available</code> — simply didn't apply.
			</p>

			<div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-blue-800 dark:text-blue-200">
					<i class="fas fa-lightbulb mr-3" aria-hidden="true"></i>Lesson learned
				</h4>
				<p class="text-blue-700 dark:text-blue-300">
					Always tell AI your environment and constraints at the beginning. The more context it has, the better it can tailor its advice.
				</p>
			</div>
		</section>
	</section>

	<section id="case-studies">
		<h2>Two Case Studies</h2>

		<p>
			Let me share two specific examples that illustrate common challenges when working with AI.
		</p>

		<section id="dialog-design-gone-wrong">
			<h3>1️⃣Dialog Design Gone Wrong</h3>

			<div class="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">The Problem</h4>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					I asked AI to design a dialog box with light and dark mode support. Without specifying exactly what I wanted, AI generated a design where the two modes looked almost identical, just with slightly different shades. It looked awful.
				</p>
				<p class="text-gray-600 dark:text-gray-300">
					Even after showing AI a screenshot of the result, it kept suggesting the same fix with tiny changes — because it was trying to reuse an existing CSS class that simply didn't work for this case.
				</p>
			</div>

			<div class="my-6 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-700 dark:bg-green-800">
				<h4 class="mb-3 text-lg font-semibold text-green-800 dark:text-green-200">How I Solved It</h4>
				<ol class="list-decimal space-y-2 pl-6 text-green-700 dark:text-green-300">
					<li>I switched to a different AI tool to generate a proper design image close to my vision</li>
					<li>Then I shared that image back to AI</li>
					<li>I explicitly asked it to extract the colors and create new CSS classes with those colors</li>
					<li>That finally gave me the result I wanted</li>
				</ol>
			</div>

			<div class="not-prose my-6 border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-purple-800 dark:text-purple-200">
					<i class="fas fa-graduation-cap mr-3" aria-hidden="true"></i>Lesson learned
				</h4>
				<p class="text-purple-700 dark:text-purple-300">
					The clearer your guidance — and the more concrete examples you can give — the better the result.
				</p>
			</div>
		</section>

		<section id="deployment-troubleshooting">
			<h3>2️⃣Deployment Troubleshooting Loop</h3>

			<div class="my-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">The Problem</h4>
				<p class="mb-4 text-gray-600 dark:text-gray-300">
					When deploying my website, I encountered a strange issue: visiting the site by IP address worked, but visiting it by domain name returned a 403 error.
				</p>
				<p class="text-gray-600 dark:text-gray-300">
					I asked AI for help. It suggested the usual suspects — check nginx config, check firewall settings, move folders — none of which worked. Worse, it kept giving me the same advice over and over.
				</p>
			</div>

			<div class="my-6 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-700 dark:bg-green-800">
				<h4 class="mb-3 text-lg font-semibold text-green-800 dark:text-green-200">How I Solved It</h4>
				<p class="mb-4 text-green-700 dark:text-green-300">
					At this point, I stopped and investigated myself. I used the command:
				</p>
				<div class="my-4 rounded bg-gray-900 p-4">
					<code class="text-green-400">curl -v -H "Host: minibreaks.io" http://127.0.0.1</code>
				</div>
				<p class="text-green-700 dark:text-green-300">
					This command simulates a request using your domain name while testing locally. That gave me a different error message — which finally helped AI recognize what was really wrong.
				</p>
			</div>

<p>See how happy AI was after she learned about the new error message and understood the root cause?</p>
<img src="/ai-series/AI-finally-understood-the-issue.jpg" loading="lazy" alt="AI happy after learning about the new error message" class="my-6 w-full rounded-lg shadow-lg">

			<div class="not-prose my-6 border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-purple-800 dark:text-purple-200">
					<i class="fas fa-graduation-cap mr-3" aria-hidden="true"></i>Lesson learned
				</h4>
				<p class="text-purple-700 dark:text-purple-300">
					Sometimes you need to dig a little yourself to provide AI with the right clue. Without the right context, it can get stuck in a loop.
				</p>
			</div>
		</section>
	</section>

	<section id="surprises">
		<h2>Surprises Along the Way</h2>

		<p>
			Not everything about working with AI was frustrating. There were some pleasant surprises that genuinely impressed me.
		</p>

		<div class="my-8 grid gap-6 md:grid-cols-2">
			<div class="rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
				<h4 class="mb-4 flex items-center text-lg font-semibold text-blue-800 dark:text-blue-200">
					<i class="fas fa-brain mr-3" aria-hidden="true"></i>It Sometimes Thinks Ahead
				</h4>
				<p class="text-blue-700 dark:text-blue-300">
					One pleasant surprise was how AI occasionally caught things I didn't even think of — like adding <code>aria-*</code> attributes for accessibility or suggesting SEO-friendly meta tags. Those small touches improved the final product.
				</p>
			</div>

			<div class="rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
				<h4 class="mb-4 flex items-center text-lg font-semibold text-purple-800 dark:text-purple-200">
					<i class="fas fa-magic mr-3" aria-hidden="true"></i>Creative Naming and Messaging
				</h4>
				<p class="text-purple-700 dark:text-purple-300">
					Another surprise was how creative AI can be with wording and tone. When I asked it to help craft playful messages for the mini-games, it delivered delightful, catchy copy that I wouldn't have thought of myself.
				</p>
			</div>
		</div>
	</section>

	<section id="final-reflection">
		<h2>Final Reflection</h2>

		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			So what surprised me most? AI is not just a tool — it's a collaborator. But, like any collaborator, it has its quirks.
		</p>

		<p>
			AI needs direction, context, and occasionally, a firm correction. The key is learning how to work <em>with</em> it rather than expecting it to work <em>for</em> you.
		</p>

		<div class="not-prose my-8 rounded-lg border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-800 dark:bg-indigo-900/20">
			<h4 class="mb-4 text-lg font-semibold text-indigo-800 dark:text-indigo-200">
				If I did this all over again, I'd:
			</h4>
			<ul class="space-y-3">
				<li class="flex items-start">
					<i class="fas fa-check-circle mt-1 mr-3 text-green-500" aria-hidden="true"></i>
					<span class="text-indigo-700 dark:text-indigo-300">Provide more detailed context up front</span>
				</li>
				<li class="flex items-start">
					<i class="fas fa-check-circle mt-1 mr-3 text-green-500" aria-hidden="true"></i>
					<span class="text-indigo-700 dark:text-indigo-300">Set constraints clearly</span>
				</li>
				<li class="flex items-start">
					<i class="fas fa-check-circle mt-1 mr-3 text-green-500" aria-hidden="true"></i>
					<span class="text-indigo-700 dark:text-indigo-300">Use examples early and often</span>
				</li>
				<li class="flex items-start">
					<i class="fas fa-check-circle mt-1 mr-3 text-green-500" aria-hidden="true"></i>
					<span class="text-indigo-700 dark:text-indigo-300">Trust my own instincts more when something feels wrong</span>
				</li>
			</ul>
		</div>
	</section>

	<section id="homework">
		<h2>📝 Homework</h2>

		<p>
			Time to practice what you've learned! Complete these exercises to improve your AI collaboration skills:
		</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Practice specificity:</strong> Think of one problem you faced recently — technical or not. Write down the exact question you'd ask AI to help with, being as specific as possible.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Compare approaches:</strong> Try giving AI a vague version of the question and then a specific version. Compare the results.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Plan your context:</strong> Write down three pieces of context you'd include next time you ask AI for help.</span>
			</div>
		</div>

		<div class="not-prose mt-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="text-blue-700 dark:text-blue-300">
				<strong>💡 Tip:</strong> Feel free to share your examples with the community! The more we practice being specific and providing good context, the better our results with AI will be.
			</p>
		</div>
	</section>
</BaseSeriesPage>
