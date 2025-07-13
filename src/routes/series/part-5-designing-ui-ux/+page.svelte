<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 5
	const articleData = getArticleData(5);
	const navigation = getNavigationData(5);

	// Table of contents
	const tableOfContents = [
		{ id: 'intro', title: 'Introduction', level: 1 },
		{ id: 'deepsite-introduction', title: 'Introducing DeepSite', level: 1 },
		{ id: 'domain-name', title: 'Getting Your Domain Name', level: 1 },
		{ id: 'crafting-prompt', title: 'Crafting Your Design Prompt', level: 1 },
		{ id: 'generated-result', title: 'The Generated Result', level: 1 },
		{ id: 'technical-notes', title: 'Technical Notes', level: 1 },
		{ id: 'homework', title: 'Homework', level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents} disableNextPart={true}>
	<!-- Custom header content -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Designing Your UI/UX with AI
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
			Learn how to kick off your project by generating a real, working design with AI. From concept to beautiful landing page in minutes.
		</p>
	</svelte:fragment>

	<!-- Main content -->

	<section id="intro">
		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			In this part, you'll learn how to kick off your project by generating a real, working design with AI.
		</p>

		<p>
			The way I started with Minibreaks was using DeepSite, a powerful tool that can generate beautifully designed landing pages from simple text prompts. This becomes the foundation of your site's design system.
		</p>
	</section>

	<section id="deepsite-introduction">
		<h2>Introducing DeepSite</h2>

		<p>
			DeepSite is available at: <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank" rel="noopener">https://huggingface.co/spaces/enzostvs/deepsite</a>
		</p>

		<p>
			This is completely free, but with very limited number of uses. But if you get your prompt right, you should get what you want with one or two attempts.
		</p>

		<div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-300">
				Keep in mind:
			</p>
			<p class="mb-0 text-blue-700 dark:text-blue-300">
				This HuggingFace workspace does not build a complete website. Instead, it generates a beautifully designed landing page (homepage) to serve as the foundation of your site's design system. The expectation is creating the design system of your website, and then you can use other AI tools to expand from there.
			</p>
		</div>
	</section>

	<section id="domain-name">
		<h2>Getting Your Domain Name</h2>

		<p>
			Before we continue, you actually need another thing: a domain name. This is important because you should include it in the prompt when generating your website design.
		</p>

		<p>
			Here I will use one of my ideas (that I am not going to pursue as an example...😏) to create a prompt. The motivation is that I have some old toys that I do not want to keep and I want to sell them to people who really like them, but unlike other marketplaces, I want this website to send a message that the sellers are serious and the items are truly rare.
		</p>

		<p>
			If you recall from the previous part, here is the prompt I am using:
		</p>

		<div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
			<p class="mb-0 font-mono text-sm text-gray-700 dark:text-gray-300">
				I want to create a website that for users to sell their collectables. For starters, I'm thinking to sell toys, comics, art works, or vintage gears. As an MVP, what should I focus on first, while keeping future growth in mind?
			</p>
		</div>

		<p>
			I also discussed with AI to use the domain name: <strong>collectibles.sale</strong><br>
			(BTW, at the time of the writing, this domain name is still available)
		</p>
	</section>

	<section id="crafting-prompt">
		<h2>Crafting Your Design Prompt</h2>

		<p>
			Here is the prompt I am using for DeepSite:
		</p>

		<div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
			<p class="mb-0 font-mono text-sm text-gray-700 dark:text-gray-300">
				Design a clean, premium homepage for a collectibles marketplace called "collectibles.sale", focused on serious collectors selling rare vintage toys and comics. The site should feel professional and aspirational, with a modern, minimal aesthetic, neutral/dark tones, and elegant typography. Key MVP features to highlight: a hero section with a strong headline and CTA to list or browse items, a "Featured Listings" grid showing rare toys and comics with clear photos, a simple search bar, category filters (e.g., Vintage Toys, Comics), and a "How it Works" section in 3 steps. Design for mobile-first, uncluttered, and serious — avoid playful or generic e-commerce styles.
			</p>
		</div>

		<p>
			Notice how specific this prompt is about:
		</p>

		<ul>
			<li><strong>Brand positioning:</strong> "serious collectors," "professional and aspirational"</li>
			<li><strong>Visual style:</strong> "modern, minimal aesthetic, neutral/dark tones"</li>
			<li><strong>Key features:</strong> Specific sections and functionality</li>
			<li><strong>Target audience:</strong> Clear about who this is for and what to avoid</li>
		</ul>
	</section>

	<section id="generated-result">
		<h2>The Generated Result</h2>

		<p>
			Here is the result:
		</p>

		<div class="not-prose my-8 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
			<p class="mb-2 text-center text-gray-600 dark:text-gray-400">
				<img src="/ai-series/ai-generated-design.jpg" alt="AI Generated Design Screenshot" class="max-w-full h-auto rounded-lg shadow-lg">
			</p>
		</div>

		<p>
			You can also visit my HuggingFace space to view this generated page: <br>
			<a href="https://huggingface.co/spaces/hongincanada/collectibles-sale" target="_blank" rel="noopener">https://huggingface.co/spaces/hongincanada/collectibles-sale</a>
		</p>

		<p>
			Honestly, it's a very good starting point. Copy the source code, and create a new file in your local machine (anywhere is fine), call it <code>generated.html</code>, paste the entire code to there. We will use it in the next section.
		</p>
	</section>

	<section id="technical-notes">
		<h2>Technical Notes</h2>

		<p>
			Two technical notes about the generated code:
		</p>

		<div class="not-prose my-6 space-y-4">
			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
					1
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						It uses <strong>Tailwind CSS v3</strong>, a popular utility-based framework for styling. Tailwind v4 exists now, but v3 is still perfectly fine for a prototype.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					2
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						The page references Tailwind via a CDN (cdn.tailwindcss.com) — this is great for testing but not recommended for production.
					</p>
				</div>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-900/20">
			<p class="mb-0 text-yellow-700 dark:text-yellow-300">
				Don't worry about these details yet. I'll remind you about updating them later when we prepare for deployment.
			</p>
		</div>
	</section>
	<section id="homework">
		<h2>Your Homework</h2>

		<p>
			Before moving to Part 6, complete this design exercise to create your website's foundation:
		</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Visit the DeepSite workspace and generate a homepage for your own idea</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Iterate on your prompt if needed - remember, you have limited attempts, so make them count!</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Once happy with the result, click View Source, copy all the code, and save it as <code>generated.html</code></span>
			</div>
		</div>

		<div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				💡 <strong>Pro tip:</strong> Be as specific as possible in your prompt about the mood, target audience, and key features you want to highlight.
			</p>
		</div>

		<p>
			In the next part, we'll expand on this and turn it into a functioning website!
		</p>
	</section>
</BaseSeriesPage>
