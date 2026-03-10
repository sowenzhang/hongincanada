<script lang="ts">
    import { seriesMetadata } from '$lib/data/seriesData';
    import { onMount } from 'svelte';

    const pageData = {
        title: "Complete AI Development Series: How I Built MiniBreaks.io With AI | Hong in Canada",
        description: "Read the complete 10-part series in one continuous 110-minute article. From concept to deployment — building a full website with AI assistance. Tools, prompts, code, lessons learned, and a cheat sheet.",
        canonical: "https://hongincanada.com/series/full-series",
        ogImage: "https://hongincanada.com/ai-series/ai-development-series.jpg"
    };

    const fullTOC = [
        // Part 1
        { id: "part-1", title: "Part 1: Can You Really Build with AI?", level: 1, part: 1 },
        { id: "the-big-question", title: "The Big Question", level: 2, part: 1 },
        { id: "the-reality-check", title: "The Reality Check", level: 2, part: 1 },
        { id: "the-breakthrough-moment", title: "The Breakthrough Moment", level: 2, part: 1 },
        { id: "what-youll-learn", title: "What You'll Learn", level: 2, part: 1 },
        { id: "the-journey-ahead", title: "The Journey Ahead", level: 2, part: 1 },

        // Part 2
        { id: "part-2", title: "Part 2: Why I Wanted to Use AI", level: 1, part: 2 },
        { id: "my-original-expectations", title: "My Original Expectations", level: 2, part: 2 },
        { id: "what-ai-actually-delivered", title: "What AI Actually Delivered", level: 2, part: 2 },
        { id: "reality-check", title: "The Reality Check", level: 2, part: 2 },
        { id: "the-key-mindset", title: "The Key Mindset", level: 2, part: 2 },

        // Part 3
        { id: "part-3", title: "Part 3: Tools & Setup", level: 1, part: 3 },
        { id: "essential-tools", title: "Essential AI Tools", level: 2, part: 3 },
        { id: "github-setup", title: "GitHub Account Setup", level: 2, part: 3 },
        { id: "workspace-setup", title: "Preparing Your Workspace", level: 2, part: 3 },

        // Part 4
        { id: "part-4", title: "Part 4: Crafting Your Idea & MVP", level: 1, part: 4 },
        { id: "why-ai-brainstorming", title: "Why AI Brainstorming Matters", level: 2, part: 4 },
        { id: "three-guidelines", title: "3 Guidelines for AI Brainstorming", level: 2, part: 4 },
        { id: "chatgpt-projects", title: "Using ChatGPT Projects", level: 2, part: 4 },
        { id: "common-pitfalls", title: "Common Pitfalls", level: 2, part: 4 },

        // Part 5
        { id: "part-5", title: "Part 5: Designing UI/UX with AI", level: 1, part: 5 },
        { id: "deepsite-introduction", title: "Introducing DeepSite", level: 2, part: 5 },
        { id: "crafting-prompt", title: "Crafting Your Design Prompt", level: 2, part: 5 },
        { id: "generated-result", title: "The Generated Result", level: 2, part: 5 },

        // Part 6
        { id: "part-6", title: "Part 6: Writing Code with AI", level: 1, part: 6 },
        { id: "choosing-tech-stack", title: "Choosing Your Tech Stack", level: 2, part: 6 },
        { id: "setting-up-environment", title: "Setting Up Environment", level: 2, part: 6 },
        { id: "first-ai-prompt", title: "Your First AI Prompt", level: 2, part: 6 },
        { id: "p6-best-practices", title: "Best Practices", level: 2, part: 6 },

        // Part 7
        { id: "part-7", title: "Part 7: Advanced Features with AI", level: 1, part: 7 },
        { id: "what-is-database", title: "What is a Database?", level: 2, part: 7 },
        { id: "postgresql-setup", title: "Setting Up PostgreSQL", level: 2, part: 7 },
        { id: "building-authentication", title: "Building Authentication", level: 2, part: 7 },
        { id: "email-api-integration", title: "Email API Integration", level: 2, part: 7 },

        // Part 8
        { id: "part-8", title: "Part 8: Before Deployment", level: 1, part: 8 },
        { id: "testing", title: "Testing Your Website", level: 2, part: 8 },
        { id: "security-check", title: "Security Check", level: 2, part: 8 },
        { id: "accessibility-responsiveness", title: "Accessibility & Responsiveness", level: 2, part: 8 },
        { id: "performance-check", title: "Performance Check", level: 2, part: 8 },
        { id: "seo", title: "SEO", level: 2, part: 8 },
        { id: "deployment-time", title: "Deployment Time", level: 2, part: 8 },

        // Part 9
        { id: "part-9", title: "Part 9: Lessons Learned", level: 1, part: 9 },
        { id: "ai-needs-your-help", title: "AI Needs Your Help", level: 2, part: 9 },
        { id: "frustrations-limitations", title: "Frustrations & Limitations", level: 2, part: 9 },
        { id: "case-studies", title: "Two Case Studies", level: 2, part: 9 },
        { id: "final-reflection", title: "Final Reflection", level: 2, part: 9 },

        // Part 10
        { id: "part-10", title: "Part 10: Future of AI Development", level: 1, part: 10 },
        { id: "series-reflection", title: "What This Series Was About", level: 2, part: 10 },
        { id: "vibe-coding-warning", title: "The 'Vibe Coding' Warning", level: 2, part: 10 },
        { id: "cheat-sheet", title: "AI Development Cheat Sheet", level: 2, part: 10 }
    ];

    let showFloatingTOC = false;
    let activeSectionId = '';

    onMount(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            showFloatingTOC = scrollTop > 300;

            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
            const offset = navbarHeight + 20;

            const sections = fullTOC.map(item => document.getElementById(item.id)).filter(Boolean);
            const currentSection = sections.find(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= offset && rect.bottom >= offset;
                }
                return false;
            });

            if (currentSection) {
                activeSectionId = currentSection.id;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    function scrollToSection(id: string) {
        const element = document.getElementById(id);
        if (element) {
            const navbar = document.querySelector('nav');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementTop - navbarHeight - 20;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
</script>

<svelte:head>
    <title>{pageData.title}</title>
    <meta name="description" content={pageData.description} />
    <meta name="keywords" content="AI development complete guide, build website with AI, AI coding tutorial, ChatGPT web development, GitHub Copilot guide, SvelteKit tutorial, AI-assisted development, MiniBreaks.io, full series" />
    <meta name="author" content="Hong" />
    <link rel="canonical" href={pageData.canonical} />

    <meta property="og:type" content="article" />
    <meta property="og:title" content={pageData.title} />
    <meta property="og:description" content={pageData.description} />
    <meta property="og:image" content={pageData.ogImage} />
    <meta property="og:url" content={pageData.canonical} />
    <meta property="og:site_name" content="Hong in Canada" />
    <meta property="article:published_time" content="2025-07-15T00:00:00Z" />
    <meta property="article:modified_time" content="2025-07-19T00:00:00Z" />
    <meta property="article:author" content="Hong" />
    <meta property="article:section" content="Technology" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageData.title} />
    <meta name="twitter:description" content={pageData.description} />
    <meta name="twitter:image" content={pageData.ogImage} />

    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />

    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${pageData.title}",
        "description": "${pageData.description}",
        "image": "${pageData.ogImage}",
        "author": {
            "@type": "Person",
            "name": "Hong",
            "url": "https://hongincanada.com"
        },
        "publisher": {
            "@type": "Person",
            "name": "Hong",
            "url": "https://hongincanada.com"
        },
        "datePublished": "2025-07-15T00:00:00Z",
        "dateModified": "2025-07-19T00:00:00Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${pageData.canonical}"
        },
        "articleSection": "Technology",
        "wordCount": "25000",
        "timeRequired": "PT110M"
    }
    </script>`}
</svelte:head>

<!-- Floating Table of Contents -->
{#if showFloatingTOC}
    <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-xs max-h-[70vh] overflow-y-auto hidden lg:block">
        <h4 class="font-bold text-sm mb-3 text-gray-900 dark:text-white">Contents</h4>
        <nav class="space-y-1">
            {#each fullTOC as item}
                <button
                    on:click={() => scrollToSection(item.id)}
                    class="block w-full text-left text-xs py-1 px-2 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 {activeSectionId === item.id ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400'}"
                    class:pl-2={item.level === 1}
                    class:pl-4={item.level === 2}
                    class:font-semibold={item.level === 1}
                >
                    {item.title}
                </button>
            {/each}
        </nav>
    </div>
{/if}

<!-- Hero Section -->
<section class="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <div class="mb-6">
                <a href="/series" class="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                    ← Back to Series Overview
                </a>
            </div>
            <div class="mb-4 inline-flex items-center rounded-lg bg-emerald-50 dark:bg-emerald-900/30 px-4 py-2 text-emerald-800 dark:text-emerald-300">
                <i class="fas fa-book-open mr-2" aria-hidden="true"></i>
                <span class="font-medium">Complete Series — 10 Parts</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                How I Built MiniBreaks.io With AI
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                The complete guide to building a full website with AI assistance — from idea to deployment.
                All 10 parts in one continuous read.
            </p>
            <div class="flex flex-wrap items-center justify-center gap-6 text-gray-500 dark:text-gray-400">
                <span><i class="fas fa-clock mr-2" aria-hidden="true"></i>110 min read</span>
                <span><i class="fas fa-calendar mr-2" aria-hidden="true"></i>July 2025</span>
                <span><i class="fas fa-user mr-2" aria-hidden="true"></i>Hong</span>
            </div>
        </div>
    </div>
</section>

<!-- Series Info Box -->
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
        <p class="text-blue-800 dark:text-blue-200 mb-0">
            <strong>About this article:</strong> This is the complete, merged version of the 10-part "How I Built MiniBreaks.io With AI" series. Each part is presented in order below. You can use the floating table of contents (desktop) to navigate between sections.
        </p>
    </div>
</div>

<!-- ============================================================ -->
<!-- PART 1: Can You Really Build a Website with AI? -->
<!-- ============================================================ -->
<section id="part-1" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 1 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Can You Really Build a Website with AI?</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">10 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <p class="text-xl leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
            Welcome to my exploration of building <a href="https://minibreaks.io" target="_blank" class="text-blue-600 underline decoration-2 underline-offset-2 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">MiniBreaks.io</a> with AI. A story of me trying to build a complete website using artificial intelligence as my development partner.
        </p>

        <section id="the-big-question">
            <p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
                Before I started building MiniBreaks.io, I had one burning question in mind: <strong>Can AI help me build a complete website, from concept to deployment?</strong>
            </p>

            <p>
                The short answer is <strong>yes</strong>. The longer answer? It's not as magical or automatic as it sounds. As someone with years of experience in software engineering, I already had a good sense of what needed to happen—but even for me, the process wasn't exactly plug-and-play.
            </p>

            <div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300">
                    <strong>Here's the thing:</strong> AI is incredibly powerful, but it's not a magic wand. It's more like having a really smart assistant who knows a lot about coding but still needs clear direction from you.
                </p>
            </div>
        </section>

        <section id="the-reality-check">
            <h2>The Reality Check</h2>
            <p>Let me be completely honest with you. When I first started this project, I thought I could just tell an AI what I wanted and watch it build my website. I imagined typing something like "Build me a travel booking website" and getting back a fully functional application.</p>
            <p>That's not how it works. At least, not yet.</p>
            <p>What I discovered is that AI excels at specific tasks when given clear, focused instructions. Want it to write a function that calculates pricing? Excellent. Need help debugging an error message? Fantastic. Finishing a journal and needs someone to fix your grammar? It's your best friend.</p>
            <p>But ask it to "build a website" without specifics, and you'll get overwhelmed with options, suggestions, and complexity that might make you want to give up before you start.</p>
        </section>

        <section id="the-overwhelming-start">
            <h2>The Overwhelming Start</h2>
            <p>Initially, I planned to use just one AI tool, but I quickly realized that the landscape is vast and a bit overwhelming. At the beginning, I tried asking ChatGPT to make me a roadmap, but what I got back was… too much.</p>

            <div class="not-prose my-8 border-l-4 border-yellow-500 bg-yellow-50 p-6 dark:bg-yellow-900/20">
                <div class="flex items-start space-x-3">
                    <i class="fas fa-exclamation-triangle mt-1 text-yellow-600 dark:text-yellow-400" aria-hidden="true"></i>
                    <div>
                        <p class="mb-2 font-semibold text-yellow-800 dark:text-yellow-300">The AI Overwhelm Problem</p>
                        <p class="mb-0 text-yellow-700 dark:text-yellow-400">AI is very thorough. The plan was long, detailed, and frankly intimidating. It made the whole project feel like a mountain I didn't want to climb.</p>
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
            <p>And that was just the beginning! Each bullet point had sub-bullet points with more choices, more configurations, more things to learn. It was paralyzing.</p>
        </section>

        <section id="the-breakthrough-moment">
            <h2>The Breakthrough Moment</h2>
            <p>Eventually, I learned something important: <strong>just start. Forget perfection. Build momentum.</strong></p>
            <p>Instead of trying to plan everything upfront, I decided to break the project into tiny, manageable pieces. Rather than "build a website for 'something'," I started with "create a simple landing page that promotes positive living."</p>
            <p>That one small step led to another, then another. Before I knew it, I was making real progress. The AI tools became incredibly helpful when I gave them specific, focused tasks instead of asking them to solve everything at once.</p>

            <div class="not-prose my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="rounded-lg border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
                    <h4 class="mb-2 font-bold text-red-700 dark:text-red-300">❌ What Doesn't Work</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">"Build me a complete travel booking website with all the features"</p>
                </div>
                <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
                    <h4 class="mb-2 font-bold text-green-700 dark:text-green-300">✅ What Actually Works</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">"I want the navigation header sticky and a little bit transparent"</p>
                </div>
            </div>
        </section>

        <section id="what-youll-learn">
            <h2>What You'll Learn in This Series</h2>
            <p>In this series, I will walk you through how to use AI to create a complete website, step by step. This series is not only for readers with engineering backgrounds, but hopefully for anyone who is interested in learning to build something with AI.</p>

            <div class="my-8 space-y-6">
                <div class="flex items-start space-x-4">
                    <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"><i class="fas fa-tools text-blue-600 dark:text-blue-300" aria-hidden="true"></i></div>
                    <div>
                        <h4 class="mb-2 font-bold text-gray-900 dark:text-white">The Right (Minimum) Tools for the Job</h4>
                        <p class="text-gray-600 dark:text-gray-400">Which AI tools work best for different tasks, from GitHub Copilot for coding to ChatGPT for planning.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"><i class="fas fa-comment-dots text-purple-600 dark:text-purple-300" aria-hidden="true"></i></div>
                    <div>
                        <h4 class="mb-2 font-bold text-gray-900 dark:text-white">Writing Effective Prompts</h4>
                        <p class="text-gray-600 dark:text-gray-400">How to communicate with AI tools to get exactly what you need, not overwhelming lists of possibilities.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"><i class="fas fa-hand-paper text-green-600 dark:text-green-300" aria-hidden="true"></i></div>
                    <div>
                        <h4 class="mb-2 font-bold text-gray-900 dark:text-white">When to Manually Intervene</h4>
                        <p class="text-gray-600 dark:text-gray-400">Recognizing when to step in and guide the AI versus when to let it handle things automatically.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900"><i class="fas fa-handshake text-orange-600 dark:text-orange-300"></i></div>
                    <div>
                        <h4 class="mb-2 font-bold text-gray-900 dark:text-white">Making AI Your Partner</h4>
                        <p class="text-gray-600 dark:text-gray-400">Most importantly, how to work with AI as a collaborative partner rather than expecting it to do everything for you.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="for-everyone">
            <h2>This Series Is For Everyone</h2>
            <p>Whether you're a complete beginner who's never written a line of code, or someone with technical experience who wants to see how AI can accelerate your workflow, this series is designed to be accessible and practical.</p>
            <p>I'll explain technical concepts in plain language, show you exactly which buttons to click, and most importantly, share the real challenges I faced and how I overcame them.</p>

            <div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
                <div class="flex items-start space-x-3">
                    <i class="fas fa-lightbulb mt-1 text-emerald-600 dark:text-emerald-400"></i>
                    <div>
                        <p class="mb-2 font-semibold text-emerald-800 dark:text-emerald-300">My Promise to You</p>
                        <p class="mb-0 text-emerald-700 dark:text-emerald-400">No jargon without explanation. No skipped steps. No "and then magic happens" moments. Just honest, practical guidance from someone who's been through the process.</p>
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
            <p>But most importantly, you'll understand that building with AI isn't about replacing human creativity and decision-making, it's about amplifying them.</p>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 2: Why I Wanted to Use AI -->
<!-- ============================================================ -->
<section id="part-2" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 2 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Why I Wanted to Use AI</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">8 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="my-original-expectations">
            <h2>My Original Expectations</h2>
            <p>Before we formally start the series, I want to let you, the reader, know what my original expectation of using AI was. This transparency is important because it sets the foundation for everything that follows in this series.</p>

            <h3 id="the-time-problem">The Time Problem</h3>
            <p>Having built several websites and apps before, I knew how much time even a "simple" project could take. For something the size of MiniBreaks, doing everything from scratch—while juggling a full-time job, would easily eat up a year or more. The endless cycle of:</p>
            <ul>
                <li>Setting up project structure and tooling</li>
                <li>Writing boilerplate code for authentication, databases, and APIs</li>
                <li>Designing and iterating on UI components</li>
                <li>Writing marketing copy and content</li>
                <li>Making countless small design decisions</li>
            </ul>
            <p>I'd been through this before. I knew that by month 6, motivation would wane. By month 9, I'd be questioning whether the project was worth continuing. And by month 12, there was a good chance it would join the graveyard of unfinished side projects.</p>

            <h3 id="what-i-wanted-ai-to-do">What I Wanted AI to Do</h3>
            <p>I wanted AI to accelerate the boring parts—the foundation work that every project needs but that doesn't feel particularly creative or engaging:</p>
            <ul>
                <li><strong>Help me bootstrap a well-organized codebase</strong> with proper folder structure, configuration files, and initial setup</li>
                <li><strong>Offer quick ideas for UI/UX</strong> when I was stuck staring at a blank screen</li>
                <li><strong>Speed up writing copy and generating content</strong> for landing pages, feature descriptions, and marketing materials</li>
                <li><strong>Act like a second brain during design decisions</strong>, someone to bounce ideas off when I wasn't sure which approach to take</li>
            </ul>
            <p>Essentially, I wanted AI to be my development accelerator, not my replacement. I still wanted to make the key decisions, write the critical logic, and shape the product vision. But I hoped AI could eliminate the friction that often kills side projects before they gain momentum.</p>
            <p>More importantly, I needed AI to help me finish my project before it becomes another my abandoned project! 🤦‍♂️</p>
        </section>

        <section id="what-ai-actually-delivered">
            <h2>What AI Actually Delivered</h2>
            <p>AI did all of those things I expected—and occasionally, it did more. Much more.</p>

            <h3 id="beyond-expectations">Beyond My Expectations</h3>
            <p>For example, AI not only refactored my code using solid architecture principles, it sometimes suggested layouts or visuals better than what I had in mind. It would reuse styles from my existing design system and make smart decisions about what elements to highlight on a new page.</p>
            <p>There were moments when I'd describe a feature I wanted, and AI would come back with an implementation that was not just functional, but elegant. It would suggest patterns I hadn't considered, point out potential edge cases, and even recommend user experience improvements.</p>
            <p>Along the way, I had a few "aha" moments—like realizing I could ask AI not just to generate code, but to help structure it using best practices. Suddenly, my project folders were clean, organized, and extensible. My components followed consistent patterns. My API endpoints had proper error handling and validation.</p>

            <h3 id="the-partnership-shift">The Partnership Shift</h3>
            <p>The real breakthrough came when I stopped thinking of AI as a tool and started treating it as a development partner. Instead of asking "Can you write a function of doing X?" I began asking something like "Before we go further, I want us to consider our current architecture so it will be more maintainable in the long term?" or "For this feature, but how can we sustain user engagement?"</p>
            <p>Over time, I began giving more instructions to AI instead of writing the changes manually. This wasn't because I became lazy; it was because I discovered that articulating my requirements clearly to AI forced me to think more systematically about what I was building.</p>
            <p>And that shift, treating AI as a partner rather than a tool, was what really unlocked its value.</p>
        </section>

        <section id="reality-check">
            <h2>The Reality Check</h2>
            <p>But let's be honest: it wasn't hands-off magic. AI required careful direction, clear communication, and constant quality control. There were moments of frustration when AI would misunderstand requirements or generate code that looked right but had subtle bugs.</p>
            <p>I learned that AI amplifies both good and bad practices. If I was unclear in my instructions, I got unclear results. If I didn't understand the problem space well enough, AI couldn't compensate for that gap.</p>

            <div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
                <div class="flex items-start space-x-3">
                    <i class="fas fa-lightbulb mt-1 text-emerald-600 dark:text-emerald-400" aria-hidden="true"></i>
                    <div>
                        <p class="mb-2 font-semibold text-emerald-800 dark:text-emerald-300">Key Lesson</p>
                        <p class="mb-0 text-emerald-700 dark:text-emerald-400">I need to get my requirements right before asking AI to implement them.</p>
                    </div>
                </div>
            </div>

            <p>The most successful outcomes happened when I combined my domain knowledge, strategic thinking, and product vision with AI's ability to rapidly generate, iterate, and implement solutions.</p>
        </section>

        <section id="setting-your-expectations">
            <h2>Setting Your Expectations</h2>
            <p>Therefore, I want you to ask yourself a few questions before we continue with the series:</p>

            <h3 id="reflection-questions">Questions for You</h3>
            <div class="my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                <ul class="space-y-3">
                    <li><strong>What do you want AI to do for you?</strong> Be specific. Is it about speed? Learning? Handling tasks you find tedious?</li>
                    <li><strong>How much are you expecting AI to do for you?</strong> 20% of the work? 50%? 80%? What would success look like?</li>
                    <li><strong>What are you willing to learn or adapt?</strong> Working with AI effectively requires new skills—prompt engineering, quality control, strategic oversight.</li>
                    <li><strong>What parts of development do you actually enjoy?</strong> AI should amplify the fun parts, not replace them entirely.</li>
                </ul>
            </div>

            <p>Briefly write down your answers. I'd encourage you to come back to these notes halfway through the series and see if everything is meeting your expectations.</p>
        </section>

        <section id="the-key-mindset">
            <h2>The Key Mindset</h2>
            <p>The most important mindset shift I made was this: <strong>AI is not about replacing your thinking, it's about amplifying it.</strong></p>
            <p>The developers who struggle with AI are often those who expect it to read their minds or solve problems they haven't fully understood themselves. The developers who thrive are those who use AI to execute their well-thought-out plans more efficiently.</p>

            <div class="my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
                <p class="mb-2 font-medium text-amber-800 dark:text-amber-200">💡 Pro Tip</p>
                <p class="text-amber-700 dark:text-amber-300">Start a development journal for this series. Document your expectations now, track your experiences as you follow along, and note what surprises you. This self-reflection will be invaluable for developing your own AI-assisted development style.</p>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 3: Choosing Your Tools & Setting Up -->
<!-- ============================================================ -->
<section id="part-3" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 3 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Choosing Your Tools & Setting Up</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">12 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="p3-intro">
            <p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">
                Building a website with AI doesn't require a massive toolkit. In fact, starting simple is better—you can always add more tools as you grow. Today, I'll introduce you to just four essential tools that can take you from idea to live website.
            </p>
            <p>Even if you're not an engineer, don't worry! I'll walk you through each step and explain everything in plain language. By the end of this part, you'll have your workspace ready and know exactly how to use AI as your development partner.</p>
        </section>

        <section id="essential-tools">
            <h2>The Essential AI Tools You Need</h2>
            <p>After trying dozens of AI tools, I've narrowed it down to these four essentials. Each serves a specific purpose, and together they create a powerful development workflow:</p>

            <div class="not-prose my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="rounded-lg border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                    <h4 class="mb-2 font-bold text-blue-700 dark:text-blue-300">💬 ChatGPT</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Your AI brainstorming partner and problem solver</p>
                </div>
                <div class="rounded-lg border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
                    <h4 class="mb-2 font-bold text-green-700 dark:text-green-300">⚡ GitHub Copilot/Cursor</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Your AI coding assistant that writes code as you instruct it</p>
                </div>
                <div class="rounded-lg border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
                    <h4 class="mb-2 font-bold text-purple-700 dark:text-purple-300">🤗 Hugging Face</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Free AI models for advanced features such as designing (optional)</p>
                </div>
                <div class="rounded-lg border-l-4 border-orange-500 bg-orange-50 p-6 dark:bg-orange-900/20">
                    <h4 class="mb-2 font-bold text-orange-700 dark:text-orange-300">📁 GitHub</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Where your code lives and how you deploy your site</p>
                </div>
            </div>

            <h3 id="chatgpt">ChatGPT - Your AI Assistant</h3>
            <div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300"><strong>Think of ChatGPT as your patient mentor who never gets tired of explaining things.</strong></p>
            </div>
            <p>ChatGPT will be your primary brainstorming partner. Here's how I use it:</p>
            <ul>
                <li><strong>Idea refinement</strong> - "Help me think through this website idea..."</li>
                <li><strong>Learning new concepts</strong> - "Explain how websites work in simple terms"</li>
                <li><strong>Problem solving</strong> - "My code isn't working, here's what's happening..."</li>
                <li><strong>Writing content</strong> - "Help me write an introduction about my website."</li>
            </ul>

            <h3 id="github-copilot">GitHub Copilot - AI Code Companion</h3>
            <p>If ChatGPT is your mentor, GitHub Copilot is your coding buddy who sits next to you and helps write the actual code. It integrates directly into your code editor and suggests code as you type.</p>
            <p>When using GitHub Copilot, make sure you configure it to use the Agent mode, which allows it to understand your code context better and provide more accurate suggestions.</p>

            <h3 id="cursor">Cursor IDE - AI-First Code Editor</h3>
            <p>Cursor is like a supercharged code editor built specifically for AI assistance. It's what I used to kick off MiniBreaks.io, and it's <strong>completely free</strong>.</p>
            <div class="not-prose my-6 border-l-4 border-purple-500 bg-purple-50 p-4 dark:bg-purple-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300"><strong>My recommendation:</strong> Start with Cursor (free), do as much as you can in the first 2 weeks, and add GitHub Copilot later if you want even more AI assistance.</p>
            </div>

            <h3 id="hugging-face">Hugging Face - AI Models Hub (Optional)</h3>
            <p>Think of Hugging Face as a library of free AI tools (check <a href="https://huggingface.co/spaces" target="_blank">Hugging Face Space</a>). You might not need it for your first website, but it's good to know it exists.</p>
        </section>

        <section id="github-setup">
            <h2>Setting Up Your GitHub Account</h2>
            <p>GitHub is where your code will live and where you'll deploy your website. Think of it as a combination of Google Drive for code and a free web hosting service.</p>

            <h3 id="create-account">Creating Your GitHub Account</h3>
            <p>Head to <a href="https://github.com" target="_blank" rel="noopener">github.com</a> and click "Sign up for GitHub". Choose a username that represents you or your project.</p>

            <h3 id="first-repository">Creating Your First Repository</h3>
            <p>A repository (or "repo") is like a project folder for your website:</p>
            <ol>
                <li>Click the green "New" button on your GitHub homepage</li>
                <li>Name your repository (try "my-first-website")</li>
                <li>Check "Add a README file"</li>
                <li>Click "Create repository"</li>
            </ol>
        </section>

        <section id="workspace-setup">
            <h2>Preparing Your Workspace</h2>
            <h3 id="local-setup">Local Development Setup</h3>
            <p>While you can edit code directly on GitHub, it's better to work locally on your computer. Here's the minimal setup:</p>
            <ol>
                <li><strong>Download Visual Studio Code</strong> - Visit <a href="https://code.visualstudio.com" target="_blank" rel="noopener">code.visualstudio.com</a></li>
                <li><strong>Sign up for GitHub Copilot</strong> - Go to <a href="https://github.com/features/copilot" target="_blank" rel="noopener">github.com/features/copilot</a></li>
                <li><strong>Download Cursor IDE (Optional)</strong> - Visit <a href="https://cursor.sh" target="_blank" rel="noopener">cursor.sh</a></li>
                <li><strong>Sign up for ChatGPT</strong> - Go to <a href="https://chat.openai.com" target="_blank" rel="noopener">chat.openai.com</a></li>
                <li><strong>Install Git</strong> - Download from <a href="https://git-scm.com" target="_blank" rel="noopener">git-scm.com</a></li>
            </ol>

            <h3 id="ai-workflow">Your AI-Assisted Workflow</h3>
            <div class="not-prose my-6 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="text-center">
                        <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900"><span class="font-bold text-blue-600 dark:text-blue-300">1</span></div>
                        <h4 class="mb-1 font-bold text-gray-900 dark:text-white">Plan with ChatGPT</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Brainstorm and plan your feature</p>
                    </div>
                    <div class="text-center">
                        <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900"><span class="font-bold text-green-600 dark:text-green-300">2</span></div>
                        <h4 class="mb-1 font-bold text-gray-900 dark:text-white">Code with Cursor</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Write code with AI assistance</p>
                    </div>
                    <div class="text-center">
                        <div class="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900"><span class="font-bold text-purple-600 dark:text-purple-300">3</span></div>
                        <h4 class="mb-1 font-bold text-gray-900 dark:text-white">Deploy to GitHub</h4>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Push your changes live</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="p3-homework">
            <h2>Your Homework</h2>
            <p>Before we move to the next part, complete these simple setup tasks:</p>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Create your GitHub account and first repository</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Download and install Visual Studio Code</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Sign up for GitHub Copilot (start your free trial)</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Sign up for ChatGPT (free account is fine)</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Install Git to connect your computer to GitHub</span></div>
            </div>
            <div class="not-prose my-6 border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300"><strong>⚠️ Important about Cursor:</strong> If you've never registered for Cursor before, do NOT register yet! Wait until Part 5 so you can take advantage of the 2-week trial when you actually start coding.</p>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 4: Crafting Your Idea & MVP with AI -->
<!-- ============================================================ -->
<section id="part-4" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 4 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Crafting Your Idea & MVP with AI</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">10 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="p4-intro">
            <p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">You might wonder: why do I even need help crafting an idea when I already have AI at my fingertips?</p>
            <p>That's a fair question. But here's the catch: while AI is great at generating ideas, it can also overwhelm you with too much information or lead you down overcomplicated paths.</p>

            <div class="relative">
                <a href="https://amzn.to/3GLsf3M" target="_blank" rel="noopener" class="float-right ml-6 mb-4">
                    <img src="https://m.media-amazon.com/images/I/7110mmksJsL._SL1360_.jpg" loading="lazy" alt="Scalability Rules Book Cover" class="w-40 sm:w-48 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                </a>
                <p>In fact, one of the best lessons from the book <a href="https://amzn.to/3GLsf3M" target="_blank" rel="noopener"><em>Scalability Rules: 50 Principles for Scaling Web Sites</em></a> is this:</p>
                <div class="not-prose my-8 border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
                    <p class="mb-0 text-xl font-semibold text-red-700 dark:text-red-300">Don't overengineer the solution.</p>
                </div>
                <p class="text-lg"><strong>Overthought ideas → Overengineered solutions.</strong><br>That's what we want to avoid.</p>
            </div>
        </section>

        <section id="why-ai-brainstorming">
            <h2>Why AI Brainstorming Matters</h2>
            <p>When I started building MiniBreaks.io, my initial idea was much more complex than what I eventually launched. The AI tools were happy to help me plan all of this!</p>
            <p>But that's exactly the problem. AI will enthusiastically help you build a complicated solution when what you really need is to start simple and prove your concept first.</p>
            <p>The key is learning how to guide AI toward simplicity rather than complexity. This requires strategic prompting and clear boundaries.</p>
        </section>

        <section id="three-guidelines">
            <h2>3 Guidelines for Brainstorming with AI</h2>
            <p>When you brainstorm your website idea with AI, keep these principles in mind:</p>
            <div class="not-prose my-8 space-y-6">
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">1</div>
                    <div>
                        <h4 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" id="mvp-focus">Make it clear you want an MVP</h4>
                        <p class="text-gray-700 dark:text-gray-300">Tell AI explicitly that you're looking for a Minimum Viable Product. This keeps the scope small and achievable.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">2</div>
                    <div>
                        <h4 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" id="give-options">Give it options</h4>
                        <p class="text-gray-700 dark:text-gray-300">Describe your idea with a few feature options. Let AI help you weigh which feature delivers the best ROI.</p>
                    </div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold">3</div>
                    <div>
                        <h4 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white" id="business-needs">Focus on business needs</h4>
                        <p class="text-gray-700 dark:text-gray-300">If you don't frame your request around business needs, AI will behave like an overanxious parent — giving you way more technical details than you need at this stage.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="chatgpt-projects">
            <h2>Using ChatGPT Projects for Better Results</h2>
            <p>If you're using the paid version of ChatGPT, create a Project for this brainstorming session.</p>
            <img src="/ai-series/new-chatgpt-project.jpg" alt="ChatGPT Projects Setup" loading="lazy" class="my-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-lg shadow-lg object-cover">
            <p>Why? Because you can define the tone and role AI should play for you.</p>
            <div class="not-prose my-6 rounded-lg bg-blue-50 p-6 dark:bg-blue-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300"><strong>Project Instructions:</strong><br>"I'd like you to act as my co-founder and brainstorming partner. Please focus on creative yet practical business ideas for a new website, aiming for MVP."</p>
            </div>
        </section>

        <section id="cross-reference">
            <h2>Cross-Reference for Confidence</h2>
            <p>One final tip: don't be afraid to cross-reference ideas with other AI tools. This can boost your confidence and give you different perspectives.</p>
            <div class="not-prose my-6 border-l-4 border-yellow-500 bg-yellow-50 p-4 dark:bg-yellow-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300"><strong>💡 Pro Tip:</strong> If two different AI tools give you similar advice, you're probably on the right track. If they disagree significantly, dig deeper to understand why.</p>
            </div>
        </section>

        <section id="common-pitfalls">
            <h2>Common Pitfalls to Avoid</h2>
            <div class="not-prose my-8 space-y-4">
                <div class="flex items-start space-x-3">
                    <div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">✕</div>
                    <div><strong class="text-gray-900 dark:text-white">Asking for "the best" solution</strong><p class="mt-1 text-gray-600 dark:text-gray-400">AI will give you enterprise-level architecture when you need a simple landing page.</p></div>
                </div>
                <div class="flex items-start space-x-3">
                    <div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">✕</div>
                    <div><strong class="text-gray-900 dark:text-white">Not setting time constraints</strong><p class="mt-1 text-gray-600 dark:text-gray-400">Without deadlines, AI will suggest features that take months to implement.</p></div>
                </div>
                <div class="flex items-start space-x-3">
                    <div class="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold">✕</div>
                    <div><strong class="text-gray-900 dark:text-white">Building for imaginary users</strong><p class="mt-1 text-gray-600 dark:text-gray-400">Focus on one specific user with one specific problem, not everyone with every problem.</p></div>
                </div>
            </div>
        </section>

        <section id="p4-homework">
            <h2>Your Homework</h2>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Set up a ChatGPT Project for your website brainstorming</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Write down 3 different website ideas you're considering</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>For each idea, brainstorm with AI using the 3 guidelines</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Choose ONE idea and write your MVP in exactly one paragraph</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Cross-reference your MVP with a second AI tool</span></div>
            </div>
            <div class="not-prose my-6 border-l-4 border-blue-500 bg-blue-50 p-4 dark:bg-blue-900/20">
                <p class="mb-0 text-gray-700 dark:text-gray-300"><strong>📝 Example MVP:</strong> "MiniBreaks.io is a playful website encourages taking mindful breaks, promotes workplace well-being, and fosters a sense of fun through achievements and leaderboards."</p>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 5: Designing Your UI/UX with AI -->
<!-- ============================================================ -->
<section id="part-5" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 5 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Designing Your UI/UX with AI</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">12 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="p5-intro">
            <p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">In this part, you'll learn how to kick off your project by generating a real, working design with AI.</p>
            <p>The way I started with Minibreaks was using DeepSite, a powerful tool that can generate beautifully designed landing pages from simple text prompts. This becomes the foundation of your site's design system.</p>
        </section>

        <section id="deepsite-introduction">
            <h2>Introducing DeepSite</h2>
            <p>DeepSite is available at: <a href="https://huggingface.co/spaces/enzostvs/deepsite" target="_blank" rel="noopener">https://huggingface.co/spaces/enzostvs/deepsite</a></p>
            <p>This is completely free, but with very limited number of uses. But if you get your prompt right, you should get what you want with one or two attempts.</p>
            <div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                <p class="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-300">Keep in mind:</p>
                <p class="mb-0 text-blue-700 dark:text-blue-300">This HuggingFace workspace does not build a complete website. Instead, it generates a beautifully designed landing page (homepage) to serve as the foundation of your site's design system.</p>
            </div>
        </section>

        <section id="domain-name">
            <h2>Getting Your Domain Name</h2>
            <p>Before we continue, you actually need another thing: a domain name. This is important because you should include it in the prompt when generating your website design.</p>
            <p>Here I will use one of my ideas (that I am not going to pursue as an example...😏) to create a prompt. The motivation is that I have some old toys that I do not want to keep and I want to sell them to people who really like them.</p>
        </section>

        <section id="crafting-prompt">
            <h2>Crafting Your Design Prompt</h2>
            <p>Here is the prompt I am using for DeepSite:</p>
            <div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <p class="mb-0 font-mono text-sm text-gray-700 dark:text-gray-300">Design a clean, premium homepage for a collectibles marketplace called "collectibles.sale", focused on serious collectors selling rare vintage toys and comics. The site should feel professional and aspirational, with a modern, minimal aesthetic, neutral/dark tones, and elegant typography. Key MVP features to highlight: a hero section with a strong headline and CTA to list or browse items, a "Featured Listings" grid showing rare toys and comics with clear photos, a simple search bar, category filters (e.g., Vintage Toys, Comics), and a "How it Works" section in 3 steps. Design for mobile-first, uncluttered, and serious.</p>
            </div>
            <p>Notice how specific this prompt is about:</p>
            <ul>
                <li><strong>Brand positioning:</strong> "serious collectors," "professional and aspirational"</li>
                <li><strong>Visual style:</strong> "modern, minimal aesthetic, neutral/dark tones"</li>
                <li><strong>Key features:</strong> Specific sections and functionality</li>
                <li><strong>Target audience:</strong> Clear about who this is for and what to avoid</li>
            </ul>
        </section>

        <section id="generated-result">
            <h2>The Generated Result</h2>
            <div class="not-prose my-8 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <p class="mb-2 text-center text-gray-600 dark:text-gray-400">
                    <img src="/ai-series/ai-generated-design.jpg" alt="AI Generated Design Screenshot" class="max-w-full h-auto rounded-lg shadow-lg">
                </p>
            </div>
            <p>You can also visit my HuggingFace space to view this generated page: <a href="https://huggingface.co/spaces/hongincanada/collectibles-sale" target="_blank" rel="noopener">https://huggingface.co/spaces/hongincanada/collectibles-sale</a></p>
            <p>Honestly, it's a very good starting point. Copy the source code, and create a new file in your local machine, call it <code>generated.html</code>, paste the entire code. We will use it in the next section.</p>
        </section>

        <section id="technical-notes">
            <h2>Technical Notes</h2>
            <div class="not-prose my-6 space-y-4">
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">1</div>
                    <div><p class="text-gray-700 dark:text-gray-300">It uses <strong>Tailwind CSS v3</strong>, a popular utility-based framework for styling. Tailwind v4 exists now, but v3 is still perfectly fine for a prototype.</p></div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">2</div>
                    <div><p class="text-gray-700 dark:text-gray-300">The page references Tailwind via a CDN — this is great for testing but not recommended for production.</p></div>
                </div>
            </div>
        </section>

        <section id="p5-homework">
            <h2>Your Homework</h2>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Visit the DeepSite workspace and generate a homepage for your own idea</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Iterate on your prompt if needed</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Once happy, copy the source code and save it as <code>generated.html</code></span></div>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 6: Writing Code with AI Assistance -->
<!-- ============================================================ -->
<section id="part-6" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 6 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Writing Code with AI Assistance</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">15 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="p6-intro">
            <p class="lead mb-8 text-xl font-medium text-gray-800 dark:text-gray-200">In this part, you'll learn how to transform your generated design into a structured, maintainable website using AI as your coding partner.</p>
            <p>Up to this point, you've created a beautiful static HTML page using DeepSite. Now it's time to turn that into a proper web application using modern development tools and AI assistance.</p>
        </section>

        <section id="choosing-tech-stack">
            <h2>🧰 Choosing Your Tech Stack</h2>
            <p>Before diving in, you'll need to pick a tech stack — which simply means the combination of technologies you'll use to build your website.</p>
            <div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                <p class="mb-2 text-lg font-semibold text-blue-700 dark:text-blue-300">Why not just stick with vanilla JavaScript?</p>
                <p class="mb-0 text-blue-700 dark:text-blue-300">Vanilla JavaScript works great for adding simple user interactions, animations, and maintaining user state. However, as your website grows, it becomes hard to maintain and scale.</p>
            </div>
            <p>My recommendations: <strong>SvelteKit</strong> for frontend, <strong>Tailwind</strong> for CSS, <strong>PostgreSQL</strong> for database (when needed later).</p>

            <h3 id="why-sveltekit">Why SvelteKit?</h3>
            <div class="my-6 space-y-6">
                <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                    <h4 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">1. Beginner-friendly yet powerful</h4>
                    <p class="text-gray-700 dark:text-gray-300">SvelteKit is full-stack out of the box — it handles routing, server-side rendering (SSR), and builds a performant website without much setup.</p>
                </div>
                <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                    <h4 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">2. Fast and lightweight</h4>
                    <p class="text-gray-700 dark:text-gray-300">SvelteKit compiles into highly-optimized vanilla JavaScript, avoiding the runtime overhead of virtual DOM used by React or Vue.</p>
                </div>
                <div class="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                    <h4 class="mb-3 text-lg font-semibold text-gray-900 dark:text-white">3. Better AI experience</h4>
                    <p class="text-gray-700 dark:text-gray-300">SvelteKit is newer and has a simpler ecosystem. AI tools are less likely to generate outdated or incompatible code compared to React or Vue.</p>
                </div>
            </div>
        </section>

        <section id="setting-up-environment">
            <h2>🖥️ Setting Up Your Environment</h2>
            <p>Make sure you have <strong>Node.js</strong> and <strong>Git</strong> installed.</p>

            <h3 id="create-sveltekit">Create a SvelteKit project</h3>
            <div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <pre class="text-sm"><code>npx sv create my-app</code></pre>
            </div>
            <p>This uses the new Svelte CLI to scaffold your project. Follow the prompts — don't worry too much about advanced options right now.</p>
            <div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
                <p class="mb-2 font-medium text-amber-800 dark:text-amber-200">📝 Example of selected options</p>
                <p class="text-amber-700 dark:text-amber-300"><img src="/ai-series/sv-new-project-minimal.jpg" loading="lazy" alt="SvelteKit New Project" class="max-w-full h-auto rounded-lg shadow-lg"></p>
            </div>
        </section>

        <section id="moving-generated-design">
            <h2>🗂️ Moving Your Generated Design</h2>
            <p>Take the <code>generated.html</code> file you created in the previous part and drop it into the root of your SvelteKit project folder.</p>
            <div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
                <p class="mb-2 font-medium text-amber-800 dark:text-amber-200">📁 Folder Structure</p>
                <p class="text-amber-700 dark:text-amber-300"><img src="/ai-series/folder-tree.jpg" loading="lazy" alt="Project Folder Structure" class="max-w-full h-auto rounded-lg shadow-lg"></p>
            </div>
        </section>

        <section id="first-ai-prompt">
            <h2>🤖 Your First AI Prompt</h2>
            <p>Now it's time to let AI help you turn that static HTML into a proper SvelteKit site.</p>
            <div class="not-prose my-6 rounded-lg bg-gray-100 p-6 dark:bg-gray-800 border-l-4 border-blue-500">
                <div class="mb-3 flex items-center"><i class="fas fa-robot mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true"></i><span class="font-semibold text-gray-900 dark:text-white">AI Prompt Template</span></div>
                <div class="text-sm text-gray-700 dark:text-gray-300 font-mono bg-white dark:bg-gray-900 p-4 rounded border">Use generated.html as reference. Migrate this page into SvelteKit.<br><br>- Break the page into separate components: header, footer, hero, and other sections.<br>- Convert all JavaScript to TypeScript.<br>- Ensure components are reusable.<br>- Create at least one additional page (e.g., About) using the same design system.</div>
            </div>

            <h3 id="ai-migration">AI-Powered Migration to SvelteKit</h3>
            <p>Let AI generate and organize the code for you. You should see results like:</p>
            <ul>
                <li>A structured project with <code>src/routes/+page.svelte</code> (your homepage)</li>
                <li>An About page at <code>src/routes/about/+page.svelte</code></li>
                <li>Reusable components in <code>src/lib/components/</code></li>
                <li>All JavaScript converted to TypeScript</li>
            </ul>
            <div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
                <p class="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-300">✨ The Magic Moment</p>
                <p class="mb-0 text-emerald-700 dark:text-emerald-300">You now have a structured, maintainable project with a home page, an about page, and reusable components — making it easy for AI (and you) to expand further.</p>
            </div>

            <h3 id="extending-with-ai">Extending Your Site with AI</h3>
            <p>From here, you can prompt AI with simple requests like:</p>
            <div class="not-prose my-6 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
                <div class="text-sm text-gray-700 dark:text-gray-300 font-mono">"Using the same design system in this solution, create a new page called Contact."</div>
            </div>
        </section>

        <section id="p6-best-practices">
            <h2>🎯 Best Practices for AI-Assisted Coding</h2>
            <div class="my-8 space-y-6">
                <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white"><i class="fas fa-code mr-3 text-blue-500" aria-hidden="true"></i>Be Specific with Context</h4>
                    <p class="text-gray-700 dark:text-gray-300">Always include relevant files in your AI context. The more context AI has about your existing code structure, the better it can maintain consistency.</p>
                </div>
                <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white"><i class="fas fa-puzzle-piece mr-3 text-green-500" aria-hidden="true"></i>Break Down Complex Tasks</h4>
                    <p class="text-gray-700 dark:text-gray-300">Instead of asking AI to build an entire feature, break it into smaller components. Ask for one component at a time, then integrate them.</p>
                </div>
                <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white"><i class="fas fa-sync-alt mr-3 text-orange-500" aria-hidden="true"></i>Iterate and Refine</h4>
                    <p class="text-gray-700 dark:text-gray-300">Don't expect perfection on the first try. Use follow-up prompts to refine styling, improve accessibility, or add missing functionality.</p>
                </div>
            </div>
        </section>

        <section id="p6-homework">
            <h2>📝 Homework</h2>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Install Node.js and Git on your computer</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Create a SvelteKit project using the CLI</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Move your generated.html into the project folder</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Use the AI prompt above to convert your page to SvelteKit</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Open your project in a browser (<code>npm run dev</code>) and explore the result!</span></div>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 7: Adding Advanced Features with AI -->
<!-- ============================================================ -->
<section id="part-7" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 7 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Adding Advanced Features with AI</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">15 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="p7-intro">
            <h2>🚀 Ready to Level Up?</h2>
            <p>Congratulations! You've built the foundation of your website and learned how to work effectively with AI for coding. Now it's time to add the features that will make your site truly functional and professional.</p>
            <p>In this part, we'll cover:</p>
            <ul>
                <li><strong>Setting up a database</strong> - Your website's memory bank</li>
                <li><strong>Creating a user table</strong> - Managing user accounts</li>
                <li><strong>Implementing authentication</strong> - Secure login and signup</li>
                <li><strong>Adding password recovery</strong> - Using an email API for user support</li>
            </ul>
        </section>

        <section id="what-is-database">
            <h2>📊 What is a Database?</h2>
            <p>Think of a database as a digital notebook that stores all your website's important information neatly organized into tables. Each table is like a spreadsheet with rows and columns.</p>
            <div class="not-prose my-6 space-y-4">
                <div class="flex items-start space-x-4">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold"><i class="fas fa-table" aria-hidden="true"></i></div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Table</h4><p class="text-gray-700 dark:text-gray-300">Like a sheet in Excel where you store related information.</p></div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold"><i class="fas fa-columns" aria-hidden="true"></i></div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Column</h4><p class="text-gray-700 dark:text-gray-300">Like headings on your sheet (e.g., username, password, email).</p></div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold"><i class="fas fa-grip-lines-vertical" aria-hidden="true"></i></div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Row</h4><p class="text-gray-700 dark:text-gray-300">Each individual record (each user's data).</p></div>
                </div>
            </div>
        </section>

        <section id="postgresql-setup">
            <h2>🧰 Setting Up PostgreSQL</h2>
            <p>PostgreSQL is a reliable and free database system. Follow these steps:</p>
            <h3 id="install-postgresql">How to Install PostgreSQL</h3>
            <ol>
                <li>Go to <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener">PostgreSQL Download</a></li>
                <li>Download and follow the installation guide</li>
                <li><strong>Set a password during installation</strong> (save this password somewhere secure!)</li>
                <li>Install pgAdmin (a graphical tool that comes with PostgreSQL)</li>
                <li>Open pgAdmin and create a new database</li>
            </ol>
        </section>

        <section id="creating-user-table">
            <h2>🗃️ Creating a User Table</h2>
            <p>We'll use AI to help us create the table. Here's how to ask clearly:</p>
            <div class="not-prose my-6 rounded-lg bg-gray-900 p-4">
                <pre class="text-green-400"><code>-- user table for the website
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>
            </div>
            <div class="not-prose my-8 border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
                <p class="mb-0 text-green-700 dark:text-green-300"><i class="fas fa-check-circle mr-2" aria-hidden="true"></i><strong>Pro Tip:</strong> Always store password hashes, never plain text passwords!</p>
            </div>
        </section>

        <section id="building-authentication">
            <h2>🔑 Building Authentication Step-by-Step</h2>
            <p>To help AI generate accurate results, let's break down the authentication feature into multiple prompts.</p>

            <h3 id="signup-page">Step 1: Sign-Up Page</h3>
            <div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-green-500">
                    <p class="text-gray-700 dark:text-gray-300 italic">"Create a simple sign-up webpage that asks users to create a username and password. Include an optional field for email. Use modern styling and include proper form validation."</p>
                </div>
            </div>

            <h3 id="login-page">Step 2: Login Page</h3>
            <div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-blue-500">
                    <p class="text-gray-700 dark:text-gray-300 italic">"Create a basic login page where users can enter their username and password to log in. Include a 'Remember me' checkbox and a link to password recovery."</p>
                </div>
            </div>

            <h3 id="password-recovery">Step 3: Password Recovery Page</h3>
            <div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-purple-500">
                    <p class="text-gray-700 dark:text-gray-300 italic">"Create a page that lets users recover their password by entering their email. For now, just create the form and logic, but leave the email sending functionality as a placeholder."</p>
                </div>
            </div>
        </section>

        <section id="email-api-integration">
            <h2>🔐 Connecting Email Sending with an External API</h2>
            <p>We'll use the Brevo API to enable our website to send emails. Brevo (formerly Sendinblue) offers a reliable, free tier that's perfect for getting started.</p>

            <h3 id="brevo-setup">Setting Up Brevo API</h3>
            <ol>
                <li>Visit <a href="https://developers.brevo.com/docs/send-a-transactional-email" target="_blank" rel="noopener">Brevo API documentation</a></li>
                <li>Sign up for a free account and get an API key</li>
                <li>Keep your API key secure</li>
            </ol>

            <h3 id="ai-integration">Using AI to Complete Email Integration</h3>
            <div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
                <div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-red-500">
                    <p class="text-gray-700 dark:text-gray-300 italic">"Complete the password recovery feature by using Brevo transactional email API. Send a password reset link to the user's email address when they request it."</p>
                </div>
            </div>
            <div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
                <p class="mb-0 text-amber-700 dark:text-amber-300"><strong>⚠️ Important:</strong> Explicitly call out to use the API, otherwise AI may pull a different framework, which is usually a wrapper. In my experience, AI pulled a deprecated library and it didn't work. 😫</p>
            </div>
        </section>

        <section id="p7-best-practices">
            <h2>🛡️ Security Best Practices</h2>
            <div class="my-8 space-y-6">
                <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white"><i class="fas fa-lock mr-3 text-red-500" aria-hidden="true"></i>Password Security</h4>
                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Always hash passwords before storing them</li>
                        <li>Never store passwords in plain text</li>
                        <li>Enforce strong password requirements</li>
                    </ul>
                </div>
                <div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white"><i class="fas fa-shield-alt mr-3 text-blue-500" aria-hidden="true"></i>API Key Security</h4>
                    <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Store API keys in environment variables</li>
                        <li>Never commit API keys to version control</li>
                        <li>Use different keys for development and production</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="p7-homework">
            <h2>📓 Homework</h2>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Install PostgreSQL, create your database and user table</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Generate signup and login pages using AI prompts</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Create the password recovery page</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Sign up for Brevo and use AI to connect email functionality</span></div>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 8: Before Deployment: Testing & Preparation -->
<!-- ============================================================ -->
<section id="part-8" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 8 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Before Deployment: Testing & Preparation</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">12 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="p8-intro">
            <h2>Introduction</h2>
            <p>Congratulations on reaching this stage! You've successfully created an MVP. Now comes a crucial phase that many developers overlook: preparation for deployment.</p>
            <p>This isn't just about making your website "go live" – it's about ensuring your users have a smooth, secure, and enjoyable experience from day one.</p>
        </section>

        <section id="testing">
            <h2>Testing Your Website</h2>
            <p>Testing ensures your website functions correctly and provides a good user experience.</p>

            <h3 id="manual-testing">Manual Testing</h3>
            <p>For personal projects and MVPs, thorough manual testing is often sufficient:</p>
            <ol>
                <li><strong>Start your development server:</strong> Run <code>npm run dev</code></li>
                <li><strong>Test systematically:</strong> Test every page, button, form, and feature</li>
                <li><strong>Check different scenarios:</strong> Try invalid data, edge cases</li>
                <li><strong>Test user flows:</strong> Go through complete journeys from start to finish</li>
            </ol>
            <div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
                <img src="/ai-series/testing_minibreak_locally.jpg" loading="lazy" alt="Screenshot of browser dev tools showing manual testing process" class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto">
            </div>

            <h3 id="debugging-with-ai">Debugging with AI Assistance</h3>
            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
                <h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3"><i class="fas fa-lightbulb mr-2" aria-hidden="true"></i>AI Debugging Prompt Template</h4>
                <p class="text-blue-700 dark:text-blue-300">"This [page/feature] isn't working as expected. Here's what I'm seeing: [describe the issue clearly]. Can you help me write a console log to identify the issue?"</p>
            </div>

            <h3 id="automation-testing">Automation Testing (Optional)</h3>
            <ul>
                <li><strong><a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">Playwright</a></strong> - Modern automation testing framework</li>
                <li><strong><a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress</a></strong> - Popular end-to-end testing tool</li>
                <li><strong><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a></strong> - JavaScript testing framework for unit tests</li>
            </ul>
        </section>

        <section id="security-check">
            <h2>Security Check</h2>
            <h3 id="common-security-measures">Common Security Measures</h3>
            <ul>
                <li><strong>CORS:</strong> Controls which domains can access your resources</li>
                <li><strong>CSP:</strong> Prevents cross-site scripting attacks</li>
                <li><strong>Input Validation:</strong> Protects against malicious data</li>
                <li><strong>Rate Limiting:</strong> Guards against excessive requests</li>
                <li><strong>SQL Injection Prevention:</strong> Secures database queries</li>
            </ul>
            <div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
                <img src="/ai-series/security-practice.jpg" loading="lazy" alt="Security best practices infographic" class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto">
            </div>

            <h3 id="securing-sensitive-data">Securing Sensitive Data</h3>
            <p><strong>Never put sensitive information in your source code.</strong> This includes API keys, database passwords, secret tokens. Store these in environment files (<code>.env</code>) that are never committed to your repository.</p>
        </section>

        <section id="accessibility-responsiveness">
            <h2>Accessibility and Responsiveness</h2>
            <h3 id="accessibility-checks">Accessibility Checks</h3>
            <ul>
                <li><strong>Color contrast:</strong> Ensure text is readable in both light and dark modes</li>
                <li><strong>Keyboard navigation:</strong> All interactive elements should be accessible via keyboard</li>
                <li><strong>Screen reader compatibility:</strong> Proper heading structure and alt text</li>
                <li><strong>Focus indicators:</strong> Clear visual indication of focused elements</li>
            </ul>

            <h3 id="responsiveness-testing">Responsiveness Testing</h3>
            <p>Your website should work beautifully on all devices. Test across different screen sizes, browsers, and orientations.</p>
            <div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
                <img src="/ai-series/responsiveness-testing.jpg" loading="lazy" alt="Responsive design testing across devices" class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto">
            </div>
        </section>

        <section id="performance-check">
            <h2>Performance Check</h2>
            <h3 id="lighthouse-tool">Using Lighthouse Tool</h3>
            <ol>
                <li>Open your website in Google Chrome</li>
                <li>Press F12 to open Developer Tools</li>
                <li>Click on the "Lighthouse" tab</li>
                <li>Click "Analyze page load" to run the audit</li>
                <li>Review the suggestions and implement improvements</li>
            </ol>
            <div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
                <img src="/ai-series/lighthouse-testing.jpg" loading="lazy" alt="Lighthouse tool showing performance audit" class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto">
            </div>

            <h3 id="performance-optimization">Performance Optimization</h3>
            <ul>
                <li><strong>Image optimization:</strong> Compress images and use modern formats</li>
                <li><strong>Code splitting:</strong> Load only necessary code for each page</li>
                <li><strong>Caching:</strong> Store frequently accessed data</li>
                <li><strong>Minification:</strong> Remove unnecessary characters from code</li>
            </ul>
        </section>

        <section id="seo">
            <h2>SEO (Search Engine Optimization)</h2>
            <h3 id="seo-basics">SEO Basics</h3>
            <ul>
                <li><strong>Keywords:</strong> Include relevant keywords naturally in your content</li>
                <li><strong>URL structure:</strong> Keep URLs clear, short, and keyword-rich</li>
                <li><strong>Internal linking:</strong> Link related pages together</li>
                <li><strong>Site speed:</strong> Fast loading times improve search rankings</li>
            </ul>

            <h3 id="meta-tags-content">Meta Tags and Content</h3>
            <ul>
                <li><strong>Title tags:</strong> Descriptive and unique for each page</li>
                <li><strong>Meta descriptions:</strong> Compelling summaries that encourage clicks</li>
                <li><strong>Alt text for images:</strong> Describes images for screen readers and search engines</li>
                <li><strong>Header structure:</strong> Proper use of H1, H2, H3 tags</li>
            </ul>
            <div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
                <img src="/ai-series/SEO-metadata.jpg" loading="lazy" alt="SEO metadata setup" class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto">
            </div>
        </section>

        <section id="deployment-time">
            <h2>Deployment Time</h2>
            <h3 id="deployment-options">Deployment Options</h3>
            <ul>
                <li><strong>Vercel:</strong> Excellent for SvelteKit, React, and Next.js</li>
                <li><strong>Netlify:</strong> Great for static sites and JAMstack</li>
                <li><strong>Railway:</strong> Good for full-stack applications with databases</li>
                <li><strong>DigitalOcean:</strong> More control with VPS hosting</li>
                <li><strong>GitHub Pages:</strong> Free hosting for static sites</li>
            </ul>

            <h3 id="deployment-checklist">Pre-Deployment Checklist</h3>
            <ul>
                <li>✅ All manual testing completed</li>
                <li>✅ Security measures implemented</li>
                <li>✅ Environment variables properly configured</li>
                <li>✅ Lighthouse performance score above 80</li>
                <li>✅ Accessibility audit passed</li>
                <li>✅ Responsive design tested on multiple devices</li>
                <li>✅ SEO elements properly configured</li>
                <li>✅ Error handling implemented</li>
            </ul>
        </section>

        <section id="p8-homework">
            <h2>📋 Homework</h2>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span><strong>Manual Testing:</strong> Verify all functionality works locally</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span><strong>Security:</strong> Apply at least two recommended security practices</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span><strong>Accessibility:</strong> Use the Accessibility Insights extension for an audit</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span><strong>Performance:</strong> Run Lighthouse and boost your score above 80</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span><strong>SEO:</strong> Implement basic SEO improvements</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span><strong>Deploy:</strong> Ask AI for deployment guidance and deploy your MVP</span></div>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 9: Lessons Learned from AI-Assisted Development -->
<!-- ============================================================ -->
<section id="part-9" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 9 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">Lessons Learned from Building with AI</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">9 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="ai-still-needs-help">
            <h2>🧠 AI Still Needs Your Help</h2>
            <p>After months of building with AI, the most important lesson I learned is this: <strong>AI is a powerful tool, but it still needs human guidance.</strong></p>
            <p>Think of AI as a brilliant but inexperienced teammate. It can write code fast, but it doesn't always understand context, project goals, or the subtle requirements of a good user experience.</p>
        </section>

        <section id="common-frustrations">
            <h2>😤 Common Frustrations</h2>

            <h3 id="repetitive-suggestions">Repetitive Suggestions</h3>
            <p>One of the most common issues I encountered was AI suggesting the same solution over and over, even when it didn't work the first time.</p>
            <div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
                <p class="mb-2 font-medium text-amber-800 dark:text-amber-200">🔄 When AI gets stuck in a loop:</p>
                <ul class="space-y-2 text-amber-700 dark:text-amber-300">
                    <li>Try rephrasing your prompt completely</li>
                    <li>Provide more specific context about what went wrong</li>
                    <li>Break the problem into smaller pieces</li>
                    <li>Start a new conversation to reset the AI's context</li>
                </ul>
            </div>

            <h3 id="overcomplicated-code">Overcomplicated Code</h3>
            <p>AI sometimes generates overly complex solutions when a simpler approach would work.</p>
            <div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
                <p class="mb-2 font-medium text-blue-800 dark:text-blue-200">💡 Keep it simple:</p>
                <p class="text-blue-700 dark:text-blue-300">Always ask yourself: "Is there a simpler way to do this?" If the AI-generated code feels overly complex, ask it to simplify.</p>
            </div>

            <h3 id="wrong-assumptions">Wrong Assumptions</h3>
            <p>AI will sometimes make assumptions about your project, tools, or requirements that aren't correct. For example, it might assume you're using a library you haven't installed, or that your database structure is different from what it actually is.</p>
        </section>

        <section id="case-studies">
            <h2>📖 Case Studies from MiniBreaks.io</h2>

            <h3 id="dialog-case-study">Case Study 1: The Dialog That Wouldn't Close</h3>
            <p>I was building a confirmation dialog for MiniBreaks.io — a simple modal that opens on user action and closes when the user confirms or cancels.</p>
            <p>The AI generated a solution using a Svelte modal component, but the dialog wouldn't close when the user clicked "Cancel." I asked the AI to fix it — three times. Each time, it restructured the dialog component but the issue persisted.</p>
            <div class="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 my-6">
                <p class="text-gray-700 dark:text-gray-300"><strong>Root Cause:</strong> The issue wasn't in the component — it was a timing conflict between the backdrop click handler and the button click handler. The AI kept changing the component structure because it didn't have enough context about event propagation.</p>
                <p class="text-gray-700 dark:text-gray-300 mt-4"><strong>Solution:</strong> I stopped the AI, looked at the event flow myself, added <code>event.stopPropagation()</code> to the Cancel button, and it worked instantly.</p>
            </div>
            <div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
                <p class="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-300">🎓 Takeaway</p>
                <p class="text-emerald-700 dark:text-emerald-300">When AI keeps failing to fix an issue, step back and try to understand the root cause yourself. AI is great at generating code, but debugging often requires a higher-level understanding of how pieces fit together.</p>
            </div>

            <h3 id="deployment-case-study">Case Study 2: Deployment Troubleshooting</h3>
            <p>After weeks of development, I was ready to deploy MiniBreaks.io. The AI suggested using a popular deployment platform and provided step-by-step instructions. Everything seemed fine — until I pushed my code and got a build error.</p>
            <p>The AI tried to fix the error by modifying the build configuration, but each fix introduced new issues. It took me hours of back-and-forth before I realized the root cause: my Node.js version was incompatible with one of my dependencies.</p>
            <div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
                <p class="mb-2 text-lg font-semibold text-emerald-700 dark:text-emerald-300">🎓 Takeaway</p>
                <p class="text-emerald-700 dark:text-emerald-300">Always check your environment configuration (Node.js version, dependencies) before troubleshooting code-level issues. Version mismatches are a common source of deployment problems.</p>
            </div>
        </section>

        <section id="pleasant-surprises">
            <h2>✨ Pleasant Surprises</h2>
            <p>Despite the frustrations, there were genuine moments of surprise where AI exceeded my expectations:</p>
            <div class="my-6 space-y-6">
                <div class="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🎨 Beautiful UI Generation</h4>
                    <p class="text-gray-700 dark:text-gray-300">AI consistently produced clean, modern designs. The speed at which it could create responsive layouts with good typography was impressive.</p>
                </div>
                <div class="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">📝 Documentation Quality</h4>
                    <p class="text-gray-700 dark:text-gray-300">When asked to add comments or explain code, AI produced clear, helpful documentation that actually improved code readability.</p>
                </div>
                <div class="rounded-lg bg-gray-50 dark:bg-gray-800 p-6">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔧 Refactoring Assistance</h4>
                    <p class="text-gray-700 dark:text-gray-300">AI was excellent at restructuring and cleaning up messy code, especially when given clear guidelines about the desired output.</p>
                </div>
            </div>
        </section>

        <section id="reflection">
            <h2>💭 Reflection</h2>
            <p>Looking back at the entire journey, building with AI has been both challenging and rewarding. It's easy to get frustrated when things don't work, but it's equally easy to be amazed by how much you can accomplish in a short period with AI assistance.</p>
            <p>The key is to maintain a <strong>learning mindset</strong>. When AI makes mistakes, use those moments to deepen your own understanding. When AI provides great solutions, study them to learn new patterns and techniques.</p>
        </section>

        <section id="p9-homework">
            <h2>📓 Homework</h2>
            <div class="my-6 space-y-4">
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Review your project and identify at least two issues where AI guidance wasn't accurate</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Document your own "case study" of a problem you solved differently from what AI suggested</span></div>
                <div class="flex items-start space-x-3"><input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled /><span>Write down three things AI did well and three areas where it fell short</span></div>
            </div>
        </section>
    </div>
</section>

<!-- ============================================================ -->
<!-- PART 10: The Future of AI-Assisted Development -->
<!-- ============================================================ -->
<section id="part-10" class="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-200 dark:border-gray-700">
    <div class="mb-8 border-l-4 border-blue-500 pl-6">
        <span class="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Part 10 of 10</span>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mt-2">The Future of AI-Assisted Development</h2>
        <p class="text-gray-500 dark:text-gray-400 mt-1">7 min read</p>
    </div>

    <div class="prose prose-lg max-w-none dark:prose-invert">
        <section id="series-reflection">
            <h2>🔮 Series Reflection</h2>
            <p>You made it to the end of this series — and that's no small feat. We've covered everything from the very first "Can I really build something with AI?" question to deploying a real product and reflecting on lessons learned.</p>
            <p>Let's take a moment to look at where AI development is headed and what it means for builders like us.</p>
        </section>

        <section id="whats-next-ai">
            <h2>🚀 What's Next for AI Development?</h2>
            <p>AI tools are evolving at a breathtaking pace. Here's what I see coming:</p>
            <div class="my-6 space-y-6">
                <div class="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 border border-blue-200 dark:border-blue-800">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🧠 Smarter Context Understanding</h4>
                    <p class="text-gray-700 dark:text-gray-300">AI will get better at understanding entire codebases, not just individual files. This means fewer context-switching issues and more coherent suggestions.</p>
                </div>
                <div class="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 border border-green-200 dark:border-green-800">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🔗 Better Tool Integration</h4>
                    <p class="text-gray-700 dark:text-gray-300">Expect tighter integration between AI and development tools — from design to deployment, AI will be woven into every step.</p>
                </div>
                <div class="rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 border border-orange-200 dark:border-orange-800">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">🎯 More Specialized Models</h4>
                    <p class="text-gray-700 dark:text-gray-300">Instead of one-size-fits-all, we'll see AI models specialized for different frameworks, languages, and even types of applications.</p>
                </div>
            </div>
        </section>

        <section id="vibe-coding-warning">
            <h2>⚠️ A Word on "Vibe Coding"</h2>
            <p>There's been a lot of hype about "vibe coding" — the idea that you can just describe what you want and AI will build it for you. While it's true that AI can generate a lot of code quickly, there's a dangerous trap here.</p>
            <div class="not-prose my-8 border-l-4 border-red-500 bg-red-50 p-6 dark:bg-red-900/20">
                <p class="mb-2 text-lg font-semibold text-red-700 dark:text-red-300">🚨 The Danger of Blind Trust</p>
                <p class="text-red-700 dark:text-red-300">If you don't understand the code AI generates, you can't debug it, optimize it, or extend it. You're building on a foundation you can't see. That's not building — that's gambling.</p>
            </div>
            <p>The future belongs to people who can <strong>collaborate with AI effectively</strong> — who understand enough to guide it, question it, and improve upon its outputs.</p>
        </section>

        <section id="parting-advice">
            <h2>🎓 Parting Advice</h2>
            <div class="my-8 space-y-6">
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold text-sm">1</div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white">Start Building Today</h4><p class="text-gray-700 dark:text-gray-300">Don't wait for the perfect idea or the perfect moment. The best way to learn is by doing.</p></div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm">2</div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white">Stay Curious</h4><p class="text-gray-700 dark:text-gray-300">AI tools change fast. Keep experimenting, keep learning, and don't be afraid to try new approaches.</p></div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold text-sm">3</div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white">Build for People</h4><p class="text-gray-700 dark:text-gray-300">Technology is a means to an end. Focus on solving real problems for real people, and the tools will follow.</p></div>
                </div>
                <div class="flex items-start space-x-4">
                    <div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-sm">4</div>
                    <div><h4 class="text-lg font-semibold text-gray-900 dark:text-white">Share Your Journey</h4><p class="text-gray-700 dark:text-gray-300">Document what you learn. Others are on the same path, and your experience might be exactly what someone needs to hear.</p></div>
                </div>
            </div>
        </section>

        <section id="whats-next-for-me">
            <h2>🌱 What's Next for Me</h2>
            <p>I created this series to shorten the gap between having an idea and seeing it live. Building MiniBreaks.io was one of the most rewarding experiences of my career — and the most humbling.</p>
            <p>I'll continue building, writing about my experiences, and exploring the intersection of human creativity and AI capability. If you've made it this far, you're already ahead of most people. Now go build something amazing.</p>
        </section>

        <section id="cheat-sheet">
            <h2>📋 AI Development Cheat Sheet</h2>
            <div class="not-prose my-8 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 p-1">
                <div class="rounded-xl bg-white dark:bg-gray-900 p-8">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Quick Reference Guide</h3>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">🚀 Quick Start</h4>
                            <ol class="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Pick an idea you're passionate about</li>
                                <li>Use AI to brainstorm and refine it</li>
                                <li>Generate a prototype with DeepSite</li>
                                <li>Convert to SvelteKit with AI assistance</li>
                                <li>Test, polish, and deploy</li>
                            </ol>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-green-600 dark:text-green-400 mb-3">🧰 Essential Tools</h4>
                            <ul class="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li><strong>ChatGPT</strong> — Brainstorming & planning</li>
                                <li><strong>GitHub Copilot</strong> — Code completion</li>
                                <li><strong>Cursor</strong> — AI-powered IDE</li>
                                <li><strong>DeepSite</strong> — Design generation</li>
                                <li><strong>Lighthouse</strong> — Performance testing</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">⭐ Best Practices</h4>
                            <ul class="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Be specific in your prompts</li>
                                <li>Break complex tasks into small steps</li>
                                <li>Always review AI-generated code</li>
                                <li>Maintain a learning mindset</li>
                                <li>Document your process</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">🚫 Common Pitfalls</h4>
                            <ul class="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Don't blindly trust AI output</li>
                                <li>Don't skip testing</li>
                                <li>Don't ignore security basics</li>
                                <li>Don't over-engineer early on</li>
                                <li>Don't forget accessibility</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-3">💡 Pro Tips</h4>
                            <ul class="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                                <li>Start new conversations for fresh context</li>
                                <li>Cross-reference AI answers with documentation</li>
                                <li>Use AI for debugging, not just generation</li>
                                <li>Keep your environment updated</li>
                                <li>Build iteratively — ship early, improve often</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">🎯 Closing Thought</h4>
                            <p class="text-gray-700 dark:text-gray-300 text-sm italic">"AI makes the fast things faster. Your job is to bring the wisdom — the decisions, the empathy, the judgment that turns code into products people love."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>

<!-- End of Series -->
<section class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200 dark:border-gray-700">
    <div class="text-center">
        <div class="text-4xl mb-4">🎉</div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">You've Completed the Series!</h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Thank you for reading "How I Built MiniBreaks.io With AI" — all 10 parts. I hope this series has inspired you to start building with AI.</p>
        <a href="/series" class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            <i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>
            Back to Series Overview
        </a>
    </div>
</section>
