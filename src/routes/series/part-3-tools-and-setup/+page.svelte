<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';

	// Article metadata
	const articleData = {
		title: 'Part 3: Choosing Your Tools & Setting Up - How I Built MiniBreaks.io With AI',
		description:
			"Introduce the minimal set of tools needed: ChatGPT, GitHub Copilot/Cursor, and Hugging Face. Walk readers through creating a GitHub account and setting up their first repository, even if they're non-engineers.",
		canonical: 'https://hongincanada.com/series/part-3-tools-and-setup',
		ogImage: 'https://hongincanada.com/profile.png',
		publishDate: '2025-07-05',
		readTime: '12 min read'
	};

	// Navigation data
	const navigation = {
		series: 'How I Built MiniBreaks.io With AI',
		currentPart: 3,
		totalParts: 10,
		prevPart: {
			number: 2,
			title: 'Why I Wanted to Use AI',
			slug: 'part-2-why-use-ai'
		},
		nextPart: {
			number: 4,
			title: 'Crafting Your Idea & MVP with AI',
			slug: 'part-4-crafting-idea-mvp'
		}
	};

	// Table of contents
	const tableOfContents = [
		{ id: 'intro', title: 'Introduction', level: 1 },
		{ id: 'essential-tools', title: 'The Essential AI Tools You Need', level: 1 },
		{ id: 'chatgpt', title: 'ChatGPT - Your AI Assistant', level: 2 },
		{ id: 'github-copilot', title: 'GitHub Copilot - AI Code Companion', level: 2 },
		{ id: 'cursor', title: 'Cursor IDE - AI-First Code Editor', level: 2 },
		{ id: 'hugging-face', title: 'Hugging Face - AI Models Hub', level: 2 },
		{ id: 'github-setup', title: 'Setting Up Your GitHub Account', level: 1 },
		{ id: 'create-account', title: 'Creating Your GitHub Account', level: 2 },
		{ id: 'first-repository', title: 'Creating Your First Repository', level: 2 },
		{ id: 'workspace-setup', title: 'Preparing Your Workspace', level: 1 },
		{ id: 'local-setup', title: 'Local Development Setup', level: 2 },
		{ id: 'ai-workflow', title: 'Your AI-Assisted Workflow', level: 2 },
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
			Choosing Your Tools & Setting Up
		</h1>

		<div
			class="mb-8 flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
		>
			<span><i class="fas fa-calendar mr-2"></i>{articleData.publishDate}</span>
			<span><i class="fas fa-clock mr-2"></i>{articleData.readTime}</span>
			<span><i class="fas fa-user mr-2"></i>Hong</span>
		</div>

		<p
			class="mx-auto max-w-4xl text-center text-xl leading-relaxed text-gray-600 dark:text-gray-300"
		>
			Let's get you set up with the minimal tools you need to build a website with AI assistance. No
			overwhelming tech stack—just the essentials that will make you productive from day one.
		</p>
	</svelte:fragment>

	<!-- Main content -->

	<section id="intro">
		<p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
			Building a website with AI doesn't require a massive toolkit. In fact, starting simple is
			better—you can always add more tools as you grow. Today, I'll introduce you to just four
			essential tools that can take you from idea to live website.
		</p>

		<p>
			Even if you're not an engineer, don't worry! I'll walk you through each step and explain
			everything in plain language. By the end of this part, you'll have your workspace ready and
			know exactly how to use AI as your development partner.
		</p>
	</section>

	<section id="essential-tools">
		<h2>The Essential AI Tools You Need</h2>

		<p>
			After trying dozens of AI tools, I've narrowed it down to these four essentials. Each serves a
			specific purpose, and together they create a powerful development workflow:
		</p>

		<div class="not-prose my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
			<div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
				<h4 class="mb-2 font-bold text-blue-700 dark:text-blue-300">💬 ChatGPT</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Your AI brainstorming partner and problem solver
				</p>
			</div>
			<div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
				<h4 class="mb-2 font-bold text-green-700 dark:text-green-300">⚡ GitHub Copilot/Cursor</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Your AI coding assistant that writes code as you type
				</p>
			</div>
			<div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
				<h4 class="mb-2 font-bold text-purple-700 dark:text-purple-300">🤗 Hugging Face</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Free AI models for advanced features (optional)
				</p>
			</div>
			<div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
				<h4 class="mb-2 font-bold text-orange-700 dark:text-orange-300">📁 GitHub</h4>
				<p class="text-sm text-gray-600 dark:text-gray-400">
					Where your code lives and how you deploy your site
				</p>
			</div>
		</div>

		<h3 id="chatgpt">ChatGPT - Your AI Assistant</h3>

		<div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong
					>Think of ChatGPT as your patient mentor who never gets tired of explaining things.</strong
				>
			</p>
		</div>

		<p>ChatGPT will be your primary brainstorming partner. Here's how I use it:</p>

		<ul>
			<li><strong>Idea refinement</strong> - "Help me think through this website idea..."</li>
			<li><strong>Learning new concepts</strong> - "Explain how websites work in simple terms"</li>
			<li>
				<strong>Problem solving</strong> - "My code isn't working, here's what's happening..."
			</li>
			<li><strong>Writing content</strong> - "Help me write copy for my homepage"</li>
		</ul>

		<div class="not-prose my-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
			<h4 class="mb-2 font-bold text-gray-900 dark:text-white">
				🎯 Pro Tip: How to Talk to ChatGPT
			</h4>
			<p class="mb-2 text-sm text-gray-700 dark:text-gray-300">
				The secret to getting great results from ChatGPT is being specific:
			</p>
			<ul class="space-y-1 text-sm text-gray-600 dark:text-gray-400">
				<li>❌ "Help me build a website"</li>
				<li>
					✅ "I want to build a simple website for my local bakery that shows our menu and contact
					info. I'm not a programmer. What's the easiest way to start?"
				</li>
			</ul>
		</div>

		<h3 id="github-copilot">GitHub Copilot - AI Code Companion</h3>

		<p>
			If ChatGPT is your mentor, GitHub Copilot is your coding buddy who sits next to you and helps
			write the actual code. It integrates directly into your code editor and suggests code as you
			type.
		</p>

		<div class="not-prose my-6 rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
			<h4 class="mb-2 font-bold text-green-700 dark:text-green-300">
				💰 Cost: $10/month (but there's a free trial)
			</h4>
			<p class="text-sm text-gray-600 dark:text-gray-400">
				While it's paid, the time it saves makes it worth every penny. You can start with the free
				trial to see if you like it.
			</p>
		</div>

		<h3 id="cursor">Cursor IDE - AI-First Code Editor</h3>

		<p>
			Cursor is like a supercharged code editor built specifically for AI assistance. It's what I
			used for most of MiniBreaks.io, and it's <strong>completely free</strong>.
		</p>

		<div class="not-prose my-6 border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>My recommendation:</strong> Start with Cursor (free) and add GitHub Copilot later if
				you want even more AI assistance.
			</p>
		</div>

		<h3 id="hugging-face">Hugging Face - AI Models Hub (Optional)</h3>

		<p>
			Think of Hugging Face as a library of free AI tools. You might not need it for your first
			website, but it's good to know it exists for when you want to add cool AI features later.
		</p>

		<ul>
			<li>Image generation for your website</li>
			<li>Text translation</li>
			<li>Chatbots for customer service</li>
			<li>And thousands of other AI capabilities</li>
		</ul>
	</section>

	<section id="github-setup">
		<h2>Setting Up Your GitHub Account</h2>

		<p>
			GitHub is where your code will live and where you'll deploy your website. Think of it as a
			combination of Google Drive for code and a free web hosting service.
		</p>

		<h3 id="create-account">Creating Your GitHub Account</h3>

		<p>
			Head to <a href="https://github.com" target="_blank" rel="noopener">github.com</a> and click "Sign
			up for GitHub". Choose a username that represents you or your project—you'll use this in your website's
			URL.
		</p>

		<div class="not-prose my-6 border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>Username tip:</strong> Your website will be at username.github.io, so choose wisely!
			</p>
		</div>

		<h3 id="first-repository">Creating Your First Repository</h3>

		<p>
			A repository (or "repo") is like a project folder for your website. Here's how to create one:
		</p>

		<ol>
			<li>Click the green "New" button on your GitHub homepage</li>
			<li>Name your repository (try "my-first-website")</li>
			<li>Check "Add a README file"</li>
			<li>Click "Create repository"</li>
		</ol>

		<p>
			Congratulations! You just created your first code repository. This is where all your website
			files will live.
		</p>
	</section>

	<section id="workspace-setup">
		<h2>Preparing Your Workspace</h2>

		<h3 id="local-setup">Local Development Setup</h3>

		<p>
			While you can edit code directly on GitHub, it's better to work locally on your computer.
			Here's the minimal setup:
		</p>

		<ol>
			<li>
				<strong>Download Cursor IDE</strong> - Visit
				<a href="https://cursor.sh" target="_blank" rel="noopener">cursor.sh</a> and download the free
				editor
			</li>
			<li>
				<strong>Sign up for ChatGPT</strong> - Go to
				<a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a> and create
				an account
			</li>
			<li>
				<strong>Install Git</strong> - Download from
				<a href="https://git-scm.com" target="_blank" rel="noopener">git-scm.com</a> (this connects your
				computer to GitHub)
			</li>
		</ol>

		<h3 id="ai-workflow">Your AI-Assisted Workflow</h3>

		<p>Here's the simple workflow that will become second nature:</p>

		<div class="not-prose my-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
				<div class="text-center">
					<div
						class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"
					>
						<span class="font-bold text-blue-600 dark:text-blue-300">1</span>
					</div>
					<h4 class="mb-1 font-bold text-gray-900 dark:text-white">Plan with ChatGPT</h4>
					<p class="text-sm text-gray-600 dark:text-gray-400">Brainstorm and plan your feature</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"
					>
						<span class="font-bold text-green-600 dark:text-green-300">2</span>
					</div>
					<h4 class="mb-1 font-bold text-gray-900 dark:text-white">Code with Cursor</h4>
					<p class="text-sm text-gray-600 dark:text-gray-400">Write code with AI assistance</p>
				</div>
				<div class="text-center">
					<div
						class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"
					>
						<span class="font-bold text-purple-600 dark:text-purple-300">3</span>
					</div>
					<h4 class="mb-1 font-bold text-gray-900 dark:text-white">Deploy to GitHub</h4>
					<p class="text-sm text-gray-600 dark:text-gray-400">Push your changes live</p>
				</div>
			</div>
		</div>
	</section>

	<section id="homework">
		<h2>Your Homework</h2>

		<p>Before we move to the next part, complete these simple setup tasks:</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Create your GitHub account and first repository</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Download and install Cursor IDE</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Sign up for ChatGPT (free account is fine)</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Ask ChatGPT: "What should I consider when planning a simple website?"</span>
			</div>
		</div>

		<div class="not-prose my-6 border-l-4 border-green-500 bg-green-50 p-4 dark:bg-green-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>Don't skip the homework!</strong> Having these tools ready will make the next parts much
				smoother.
			</p>
		</div>
	</section>

	<section id="next-steps">
		<h2>What's Next</h2>

		<p>
			In Part 4, we'll dive into crafting your website idea and creating your first MVP (Minimum
			Viable Product) with AI assistance. You'll learn how to:
		</p>

		<ul>
			<li>Refine your website idea using AI brainstorming techniques</li>
			<li>Create wireframes and plan your site structure</li>
			<li>Write your first code with AI assistance</li>
			<li>Set up your local development environment</li>
		</ul>

		<p>By the end of Part 4, you'll have a clear plan and the beginning of your actual website!</p>
	</section>
</BaseSeriesPage>
