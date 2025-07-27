<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 6
	const articleData = getArticleData(6);
	const navigation = getNavigationData(6);

	// Table of contents
	const tableOfContents = [
		{ id: 'intro', title: 'Introduction', level: 1 },
		{ id: 'choosing-tech-stack', title: 'Choosing Your Tech Stack', level: 1 },
		{ id: 'why-sveltekit', title: 'Why SvelteKit?', level: 2 },
		{ id: 'setting-up-environment', title: 'Setting Up Your Environment', level: 1 },
		{ id: 'create-sveltekit', title: 'Create a SvelteKit Project', level: 2 },
		{ id: 'moving-generated-design', title: 'Moving Your Generated Design', level: 1 },
		{ id: 'first-ai-prompt', title: 'Your First AI Prompt', level: 1 },
		{ id: 'ai-migration', title: 'AI-Powered Migration to SvelteKit', level: 2 },
		{ id: 'extending-with-ai', title: 'Extending Your Site with AI', level: 2 },
		{ id: 'best-practices', title: 'Best Practices for AI-Assisted Coding', level: 1 },
		{ id: 'homework', title: 'Homework', level: 1 },
		{ id: 'next-steps', title: "What's Next", level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header content -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Writing Code with AI Assistance
		</h1>

		<div
			class="mb-8 flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
		>
			<span><i class="fas fa-calendar mr-2" aria-hidden="true"></i>{articleData?.publishDate}</span>
			<span><i class="fas fa-clock mr-2" aria-hidden="true"></i>{articleData?.readTime}</span>
			<span><i class="fas fa-user mr-2" aria-hidden="true"></i>Hong</span>
		</div>

		<p
			class="mx-auto max-w-4xl text-center text-xl leading-relaxed text-gray-600 dark:text-gray-300"
		>
			Welcome to the part where you finally begin writing code — or more accurately, partnering with AI to write your code.
		</p>
	</svelte:fragment>

	<!-- Main content -->

	<section id="intro">
		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			In this part, you'll learn how to transform your generated design into a structured, maintainable website using AI as your coding partner.
		</p>

		<p>
			Up to this point, you've created a beautiful static HTML page using DeepSite. Now it's time to turn that into a proper web application using modern development tools and AI assistance.
		</p>
	</section>

	<section id="choosing-tech-stack">
		<h2>🧰 Choosing Your Tech Stack</h2>

		<p>
			Before diving in, you'll need to pick a tech stack — which simply means the combination of technologies you'll use to build your website.
		</p>

		<p>
			In the previous part, you used DeepSite to create your first landing page, which already included TailwindCSS and some vanilla JavaScript.
		</p>

		<div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-300">
				Why not just stick with vanilla JavaScript?
			</p>
			<p class="mb-0 text-blue-700 dark:text-blue-300">
				Vanilla JavaScript (i.e., plain JavaScript without a framework) works great for adding simple user interactions, animations, and maintaining user state in the browser. However, as your website grows, it becomes hard to maintain and scale.
			</p>
		</div>

		<p>
			That's why most developers use frontend frameworks like React, Vue, or Svelte — which provide structure, make it easier to manage growing complexity, and work better with modern development tools.
		</p>

		<p>Here are my recommendations:</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					✓
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						<strong>SvelteKit:</strong> for frontend framework
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					✓
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						<strong>Tailwind:</strong> for CSS styling
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					✓
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						<strong>PostgreSQL:</strong> for database (when needed later)
					</p>
				</div>
			</div>
		</div>

		<p>
			You can also ask ChatGPT for comparisons of other stacks or refer to <a href="https://medium.com/@ignatovich.dm/react-vs-vue-vs-svelte-choosing-the-right-framework-for-2025-4f4bb9da35b4" target="_blank" rel="noopener">this excellent Medium article</a> for more details.
		</p>

		<section id="why-sveltekit">
			<h3>Why SvelteKit?</h3>

			<p>But here's why I personally recommend SvelteKit:</p>

			<div class="my-6 space-y-6">
				<div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
					<h4 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
						1. Beginner-friendly yet powerful
					</h4>
					<p class="text-gray-700 dark:text-gray-300">
						SvelteKit is full-stack out of the box — it handles routing, server-side rendering (SSR), and builds a performant website without much setup.
					</p>
				</div>

				<div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
					<h4 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
						2. Fast and lightweight
					</h4>
					<p class="text-gray-700 dark:text-gray-300">
						SvelteKit compiles into highly-optimized vanilla JavaScript, which avoids the runtime overhead of virtual DOM used by React or Vue. This means faster load times, better SEO, and improved accessibility.
					</p>
				</div>

				<div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
					<h4 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
						3. Better AI experience
					</h4>
					<p class="text-gray-700 dark:text-gray-300">
						SvelteKit is newer and has a simpler ecosystem. That means AI tools are less likely to generate outdated or incompatible code compared to React or Vue, which have a longer, messier history of versioned APIs.
					</p>
				</div>
			</div>

			<div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
				<p class="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-300">
					💡 Personal Experience
				</p>
				<p class="mb-0 text-emerald-700 dark:text-emerald-300">
					When I first tried using AI to generate React code, I often had to fix mismatched libraries or deprecated APIs. With SvelteKit, I had a much smoother experience — and I could focus on building rather than debugging.
				</p>
			</div>
		</section>
	</section>

	<section id="setting-up-environment">
		<h2>🖥️ Setting Up Your Environment</h2>

		<p>Make sure you have these tools installed on your computer:</p>

		<ul>
			<li><strong>Node.js</strong> (to run JavaScript outside the browser)</li>
			<li><strong>Git</strong> (for version control — optional, but highly recommended)</li>
		</ul>

		<section id="create-sveltekit">
			<h3>Create a SvelteKit project</h3>

			<p>
				Open a terminal (PowerShell on Windows, Terminal or Bash on macOS/Linux) and navigate to the folder where you want your project. Then run:
			</p>

			<div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
				<pre class="text-sm"><code>npx sv create my-app</code></pre>
			</div>

			<p>
				This uses the new Svelte CLI to scaffold your project. (Note: older guides may tell you to use <code>npm init svelte@next</code>, but <code>sv</code> is the newer and simpler way.)
			</p>

			<p>
				Follow the prompts — don't worry too much about advanced options right now.
			</p>

			<div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
				<p class="mb-2 font-medium text-amber-800 dark:text-amber-200">📝 Example of selected options</p>
				<p class="text-amber-700 dark:text-amber-300">
					<img src="/ai-series/sv-new-project-minimal.jpg" loading="lazy" alt="SvelteKit New Project" class="max-w-full h-auto rounded-lg shadow-lg">
				</p>
			</div>

			<p>
				Now open your new project folder in Visual Studio Code or Cursor. This is also a good time to create a free Cursor account to enjoy its 2-week premium trial.
			</p>

			<p>
				Here is a complete document of going through this command: <a href="https://svelte.dev/blog/sv-the-svelte-cli" target="_blank" rel="noopener">https://svelte.dev/blog/sv-the-svelte-cli</a>
			</p>
		</section>
	</section>

	<section id="moving-generated-design">
		<h2>🗂️ Moving Your Generated Design</h2>

		<p>
			Take the <code>generated.html</code> file you created in the previous part with DeepSite and drop it into the root of your SvelteKit project folder.
		</p>

		<div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
			<p class="mb-2 font-medium text-amber-800 dark:text-amber-200">📁 Folder Structure</p>
			<p class="text-amber-700 dark:text-amber-300">
				<img src="/ai-series/folder-tree.jpg"  loading="lazy" alt="Project Folder Structure" class="max-w-full h-auto rounded-lg shadow-lg">
			</p>
		</div>
	</section>

	<section id="first-ai-prompt">
		<h2>🤖 Your First AI Prompt</h2>

		<p>
			Now it's time to let AI help you turn that static HTML into a proper SvelteKit site.
		</p>

		<p>
			In Cursor (or with GitHub Copilot in VS Code), activate Agent mode and include <code>generated.html</code> in the context. Then use this prompt:
		</p>

		<div class="not-prose my-6 rounded-lg bg-gray-100 p-6 dark:bg-gray-800 border-l-4 border-blue-500">
			<div class="mb-3 flex items-center">
				<i class="fas fa-robot mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true"></i>
				<span class="font-semibold text-gray-900 dark:text-white">AI Prompt Template</span>
			</div>
			<div class="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-900 p-4 rounded border">
				Use generated.html as reference. Migrate this page into SvelteKit.<br><br>
				- Break the page into separate components: header, footer, hero, and other sections.<br>
				- Convert all JavaScript to TypeScript.<br>
				- Ensure components are reusable.<br>
				- Create at least one additional page (e.g., About) using the same design system.
			</div>
		</div>

		<section id="ai-migration">
			<h3>AI-Powered Migration to SvelteKit</h3>

			<div class="lg:flex lg:gap-8 lg:items-start">
				<div class="lg:flex-1">
					<p>Let AI generate and organize the code for you. You should see results like:</p>

					<ul>
						<li>A structured project with <code>src/routes/+page.svelte</code> (your homepage)</li>
						<li>An About page at <code>src/routes/about/+page.svelte</code></li>
						<li>Reusable components in <code>src/lib/components/</code></li>
						<li>All JavaScript converted to TypeScript</li>
					</ul>

					<div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
						<p class="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-300">
							✨ The Magic Moment
						</p>
						<p class="mb-0 text-emerald-700 dark:text-emerald-300">
							You now have a structured, maintainable project with a home page, an about page, and reusable components — making it easy for AI (and you) to expand further.
						</p>
					</div>
				</div>

				<div class="lg:w-80 lg:flex-shrink-0 mt-6 lg:mt-0">
					<img src="/ai-series/post-generation-solution.jpg" loading="lazy" alt="Well Structured Solution from AI generation" class="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg">
				</div>
			</div>
		</section>

		<section id="extending-with-ai">
			<h3>Extending Your Site with AI</h3>

			<p>From here, you can prompt AI with simple requests like:</p>

			<div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
				<div class="text-sm text-gray-700 dark:text-gray-300 font-mono">
					"Using the same design system in this solution, create a new page called Contact."
				</div>
			</div>

			<p>
				And it will follow the same structure, styles, and components you've already established.
			</p>
		</section>
	</section>

	<section id="best-practices">
		<h2>🎯 Best Practices for AI-Assisted Coding</h2>

		<p>Based on my experience building MiniBreaks.io, here are key practices that will save you time and frustration:</p>

		<div class="my-8 space-y-6">
			<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					<i class="fas fa-code mr-3 text-blue-500" aria-hidden="true"></i>
					Be Specific with Context
				</h4>
				<p class="text-gray-700 dark:text-gray-300">
					Always include relevant files in your AI context. The more context AI has about your existing code structure, the better it can maintain consistency.
				</p>
			</div>

			<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					<i class="fas fa-puzzle-piece mr-3 text-green-500" aria-hidden="true"></i>
					Break Down Complex Tasks
				</h4>
				<p class="text-gray-700 dark:text-gray-300">
					Instead of asking AI to build an entire feature, break it into smaller components. Ask for one component at a time, then integrate them.
				</p>
			</div>

			<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					<i class="fas fa-sync-alt mr-3 text-orange-500" aria-hidden="true"></i>
					Iterate and Refine
				</h4>
				<p class="text-gray-700 dark:text-gray-300">
					Don't expect perfection on the first try. Use follow-up prompts to refine styling, improve accessibility, or add missing functionality. (we will expand on this in the later parts)
				</p>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-900/20">
			<p class="mb-2 font-medium text-yellow-800 dark:text-yellow-200">⚠️ Common Pitfall</p>
			<p class="text-yellow-700 dark:text-yellow-300">
				Don't try to build everything at once. AI works best when you give it focused, specific tasks. Think of it as having a very capable junior developer who needs clear instructions.
			</p>
		</div>
	</section>

	<section id="homework">
		<h2>📝 Homework</h2>

		<p>Before moving to Part 7, complete these steps to establish your development foundation:</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Install <a href="https://nodejs.org/en/download" target="_blank">Node.js</a> and
          <a href="https://git-scm.com/downloads" target="_blank">Git</a>
           on your computer</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Create a SvelteKit project using the CLI</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Move your generated.html into the project folder</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Use the AI prompt above to convert your page to SvelteKit</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Open your project in a browser (<code>npm run dev</code>) and explore the result!</span>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-300">
				🎯 Success Criteria
			</p>
			<p class="mb-0 text-blue-700 dark:text-blue-300">
				By the end of this exercise, you should have a working SvelteKit application that you can view in your browser, with your design properly componentized and at least two pages (Home and About).
			</p>
		</div>
	</section>

	<section id="next-steps">
		<h2>🚀 What's Next</h2>

		<p>
			Congratulations! You've successfully transformed a static design into a dynamic web application using AI assistance.
		</p>

		<p>In Part 7, we'll take your website to the next level by adding advanced features:</p>

		<ul>
			<li>User authentication and login systems</li>
			<li>Email functionality for notifications and communication</li>
			<li>Database integration for data persistence</li>
			<li>Step-by-step instructions for wiring these features to your UI</li>
		</ul>

		<div class="not-prose my-8 border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>🔧 Coming up:</strong> We'll explore how AI can help you implement complex features like user accounts, email systems, and databases with practical examples and real code you can use in your project.
			</p>
		</div>
	</section>
</BaseSeriesPage>
