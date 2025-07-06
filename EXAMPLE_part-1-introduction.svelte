<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';

    // Article metadata for Part 1
    const articleData = {
        title: "Part 1: Introduction - How I Built MiniBreaks.io With AI",
        description: "Welcome to the series! Let me introduce you to what we'll be building and why AI-assisted development is a game-changer for non-engineers.",
        canonical: "https://hongincanada.com/series/part-1-introduction",
        ogImage: "https://hongincanada.com/profile.png",
        publishDate: "2025-07-03",
        readTime: "8 min read"
    };

    // Navigation data
    const navigation = {
        series: "How I Built MiniBreaks.io With AI",
        currentPart: 1,
        totalParts: 10,
        prevPart: null, // First part has no previous
        nextPart: {
            number: 2,
            title: "Why I Wanted to Use AI",
            slug: "part-2-why-use-ai"
        }
    };

    // Table of contents for this part
    const tableOfContents = [
        { id: "welcome", title: "Welcome to the Series", level: 1 },
        { id: "what-well-build", title: "What We'll Build Together", level: 1 },
        { id: "why-this-series", title: "Why This Series Exists", level: 1 },
        { id: "who-this-is-for", title: "Who This Series Is For", level: 1 },
        { id: "what-to-expect", title: "What to Expect", level: 1 },
        { id: "lets-get-started", title: "Let's Get Started", level: 1 }
    ];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
    <!-- Custom header -->
    <svelte:fragment slot="header">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white transition-colors">
            Welcome to the AI Development Series
        </h1>

        <div class="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
            <span><i class="fas fa-calendar mr-2"></i>{articleData.publishDate}</span>
            <span><i class="fas fa-clock mr-2"></i>{articleData.readTime}</span>
            <span><i class="fas fa-user mr-2"></i>Hong</span>
        </div>

        <p class="text-xl text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            Join me on a journey to build a complete website using AI as your development partner—no prior coding experience required!
        </p>
    </svelte:fragment>

    <!-- Main content -->
    <section id="welcome">
        <p class="lead text-xl font-medium text-gray-800 dark:text-gray-200 mb-8">
            Hi there! I'm Hong, and I'm excited to share something special with you. Over the next 10 parts, I'm going to show you exactly how I built <a href="https://minibreaks.io" target="_blank" rel="noopener">MiniBreaks.io</a> using AI as my primary development partner.
        </p>

        <p>
            This isn't just another coding tutorial. This is a practical, step-by-step guide that will teach you how to leverage AI tools to build real, functional websites—even if you've never written a line of code before.
        </p>
    </section>

    <section id="what-well-build">
        <h2>What We'll Build Together</h2>

        <p>
            Throughout this series, we'll recreate MiniBreaks.io from scratch. Here's what we'll cover:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
            <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 class="font-bold text-blue-700 dark:text-blue-300 mb-2">🎯 Project Planning</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Learn to use AI for brainstorming and planning your project structure</p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                <h4 class="font-bold text-green-700 dark:text-green-300 mb-2">⚡ AI-Assisted Coding</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Write code faster with AI companions like GitHub Copilot and Cursor</p>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 class="font-bold text-purple-700 dark:text-purple-300 mb-2">🎨 Modern Design</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Create beautiful, responsive interfaces with AI-generated designs</p>
            </div>
            <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 class="font-bold text-orange-700 dark:text-orange-300 mb-2">🚀 Deployment</h4>
                <p class="text-sm text-gray-600 dark:text-gray-400">Launch your website to the world with modern hosting solutions</p>
            </div>
        </div>
    </section>

    <section id="why-this-series">
        <h2>Why This Series Exists</h2>

        <p>
            I believe we're at a turning point in software development. AI tools have become so powerful that the traditional barriers to building software are crumbling. You no longer need years of training to create something meaningful.
        </p>

        <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 my-6 not-prose">
            <p class="mb-0 text-gray-700 dark:text-gray-300">
                <strong>My mission:</strong> To show you that with the right AI tools and approach, anyone can build professional-quality websites.
            </p>
        </div>
    </section>

    <section id="who-this-is-for">
        <h2>Who This Series Is For</h2>

        <p>
            This series is designed for:
        </p>

        <ul>
            <li><strong>Complete beginners</strong> who have never coded before</li>
            <li><strong>Business owners</strong> who want to build their own websites</li>
            <li><strong>Designers</strong> looking to bring their ideas to life</li>
            <li><strong>Students</strong> curious about modern development practices</li>
            <li><strong>Anyone</strong> interested in AI-assisted development</li>
        </ul>

        <p>
            <em>No prior coding experience required!</em> I'll explain everything in plain language.
        </p>
    </section>

    <section id="what-to-expect">
        <h2>What to Expect</h2>

        <p>
            Each part builds on the previous one, so I recommend following along in order. Here's what makes this series different:
        </p>

        <div class="space-y-4 my-6">
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span class="text-blue-600 dark:text-blue-300 font-bold text-sm">✓</span>
                </div>
                <div>
                    <strong>Real-world project:</strong> We're building an actual website, not toy examples
                </div>
            </div>
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span class="text-green-600 dark:text-green-300 font-bold text-sm">✓</span>
                </div>
                <div>
                    <strong>AI-first approach:</strong> Every step leverages AI tools for maximum efficiency
                </div>
            </div>
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span class="text-purple-600 dark:text-purple-300 font-bold text-sm">✓</span>
                </div>
                <div>
                    <strong>Beginner-friendly:</strong> Complex concepts explained in simple terms
                </div>
            </div>
            <div class="flex items-start space-x-3">
                <div class="flex-shrink-0 w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                    <span class="text-orange-600 dark:text-orange-300 font-bold text-sm">✓</span>
                </div>
                <div>
                    <strong>Hands-on learning:</strong> You'll be building alongside me, not just reading
                </div>
            </div>
        </div>
    </section>

    <section id="lets-get-started">
        <h2>Let's Get Started</h2>

        <p>
            I'm genuinely excited to share this journey with you. By the end of this series, you'll have:
        </p>

        <ul>
            <li>A complete, functional website</li>
            <li>Practical AI development skills</li>
            <li>Confidence to tackle your own projects</li>
            <li>A toolkit of AI-powered development resources</li>
        </ul>

        <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 not-prose">
            <p class="mb-0 text-gray-700 dark:text-gray-300">
                <strong>Ready to begin?</strong> Head to Part 2 where we'll explore why I chose AI as my development partner and how it can accelerate your projects too.
            </p>
        </div>
    </section>
</BaseSeriesPage>
