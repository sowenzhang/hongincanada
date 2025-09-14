<script lang="ts">
    import { mosaicSeriesMetadata } from '$lib/data/mosaicSeriesData';
    import { onMount } from 'svelte';

    // Page metadata
    const pageData = {
        title: "Complete Mosaic Series: Rethinking App Design for the Multi-App Era | Hong in Canada",
        description: "Read the complete 4-part Mosaic series in one continuous 29-minute article. Explore adaptive journeys, context engines, progressive web apps, and the future of app design. From app store problems to OS-level solutions.",
        canonical: "https://hongincanada.com/mosaic/full-series",
        ogImage: mosaicSeriesMetadata.ogImage
    };

    // Table of contents for the full series
    const fullTOC = [
        // Part 1
        { id: "part-1", title: "Part 1: The Problem with Apps Today", level: 1, part: 1 },
        { id: "what-is-mosaic", title: "What is Mosaic?", level: 2, part: 1 },
        { id: "what-this-series-will-cover", title: "What This Series Will Cover", level: 2, part: 1 },
        { id: "why-start-here", title: "Why Start Here?", level: 2, part: 1 },
        { id: "homework-1", title: "Homework for You", level: 2, part: 1 },

        // Part 2
        { id: "part-2", title: "Part 2: Adaptive Journeys in App Flows", level: 1, part: 2 },
        { id: "challenge-of-todays-app-world", title: "The Challenge of Today's App World", level: 2, part: 2 },
        { id: "what-makes-app-flows-different", title: "What Makes App Flows Different", level: 2, part: 2 },
        { id: "tokyo-trip-example", title: "The Tokyo Trip Example", level: 2, part: 2 },
        { id: "defining-app-flows-and-mosaic", title: "Defining App Flows and Mosaic", level: 2, part: 2 },
        { id: "why-adaptive-journeys-matter", title: "Why Adaptive Journeys Matter", level: 2, part: 2 },
        { id: "homework-2", title: "Homework for You", level: 2, part: 2 },

        // Part 3
        { id: "part-3", title: "Part 3: Under the Hood of App Flows", level: 1, part: 3 },
        { id: "core-building-blocks", title: "The Core Building Blocks", level: 2, part: 3 },
        { id: "context-engine", title: "1. The Context Engine", level: 3, part: 3 },
        { id: "registry-of-tiles", title: "2. The Registry of Tiles", level: 3, part: 3 },
        { id: "the-composer", title: "3. The Composer", level: 3, part: 3 },
        { id: "security-control", title: "4. Security & Control", level: 3, part: 3 },
        { id: "why-pwas-bridge", title: "Why PWAs Are the Bridge", level: 2, part: 3 },
        { id: "role-of-llms", title: "The Role of LLMs", level: 2, part: 3 },
        { id: "why-this-matters-3", title: "Why This Matters", level: 2, part: 3 },
        { id: "homework-3", title: "Homework for You", level: 2, part: 3 },

        // Part 4
        { id: "part-4", title: "Part 4: The Near Future and Beyond", level: 1, part: 4 },
        { id: "how-mosaic-works-as-pwa", title: "How Mosaic Works as a PWA", level: 2, part: 4 },
        { id: "near-future-hosted-registries", title: "The Near Future: Hosted Registries", level: 2, part: 4 },
        { id: "long-term-os-level", title: "The Long-Term Goal: OS-Level Mosaic", level: 2, part: 4 },
        { id: "the-roadmap", title: "The Roadmap", level: 2, part: 4 },
        { id: "why-this-matters-4", title: "Why This Matters", level: 2, part: 4 },
        { id: "homework-4", title: "Homework for You", level: 2, part: 4 }
    ];

    // Floating TOC state
    let showFloatingTOC = false;
    let activeSectionId = '';

    onMount(() => {
        // Handle floating TOC visibility
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            showFloatingTOC = scrollTop > 300;

            // Calculate navbar height for consistent offset
            const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('[data-navbar]');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
            const offset = navbarHeight + 20; // Same offset as scrollToSection

            // Find active section
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
            // Calculate the height of the sticky navigation bar
            const navbar = document.querySelector('nav') || document.querySelector('.navbar') || document.querySelector('[data-navbar]');
            const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80; // fallback to 80px if nav not found

            // Calculate the target position with offset
            const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementTop - navbarHeight - 20; // Extra 20px padding for better UX

            // Smooth scroll to the calculated position
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
    <meta name="keywords" content="mosaic complete series, app design full guide, adaptive app flows, progressive web apps guide, context-aware applications, mobile app architecture, user experience design, app flow patterns" />
    <meta name="author" content="Hong" />
    <link rel="canonical" href={pageData.canonical} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={pageData.title} />
    <meta property="og:description" content={pageData.description} />
    <meta property="og:image" content={pageData.ogImage} />
    <meta property="og:url" content={pageData.canonical} />
    <meta property="og:site_name" content="Hong in Canada" />
    <meta property="article:published_time" content="2025-09-13T00:00:00Z" />
    <meta property="article:modified_time" content="2025-09-13T00:00:00Z" />
    <meta property="article:author" content="Hong" />
    <meta property="article:section" content="Technology" />
    <meta property="article:tag" content="App Design" />
    <meta property="article:tag" content="Complete Guide" />
    <meta property="article:tag" content="Long Read" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageData.title} />
    <meta name="twitter:description" content={pageData.description} />
    <meta name="twitter:image" content={pageData.ogImage} />
    <meta name="twitter:creator" content="@hongincanada" />

    <!-- Additional SEO -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="alternate" type="application/rss+xml" title="Hong in Canada RSS Feed" href="/rss.xml" />

    <!-- Schema.org structured data for long-form article -->
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
        "datePublished": "2025-09-13T00:00:00Z",
        "dateModified": "2025-09-13T00:00:00Z",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${pageData.canonical}"
        },
        "articleSection": "Technology",
        "keywords": ["app design", "user experience", "progressive web apps", "adaptive interfaces"],
        "wordCount": "8000",
        "timeRequired": "PT29M"
    }
    </script>`}
</svelte:head>

<!-- Floating Table of Contents -->
{#if showFloatingTOC}
    <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-xs max-h-96 overflow-y-auto">
        <h4 class="font-bold text-sm mb-3 text-gray-900 dark:text-white">Contents</h4>
        <nav class="space-y-1">
            {#each fullTOC as item}
                <button
                    on:click={() => scrollToSection(item.id)}
                    class="block w-full text-left text-xs py-1 px-2 rounded transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 {activeSectionId === item.id ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300' : 'text-gray-600 dark:text-gray-400'}"
                    class:pl-2={item.level === 1}
                    class:pl-4={item.level === 2}
                    class:pl-6={item.level === 3}
                    class:font-semibold={item.level === 1}
                >
                    {item.title}
                </button>
            {/each}
        </nav>
    </div>
{/if}

<!-- Hero Section -->
<section class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <div class="mb-6">
                <a href="/mosaic" class="text-purple-600 hover:text-purple-700 font-medium">
                    ← Back to Series Overview
                </a>
            </div>
            <div class="mb-4">
                <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    <i class="fas fa-book-open mr-2"></i>Complete Series
                </span>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                {mosaicSeriesMetadata.title}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {mosaicSeriesMetadata.description}
            </p>
            <div class="flex flex-wrap gap-4 justify-center text-sm text-gray-600 dark:text-gray-400">
                <div class="flex items-center">
                    <i class="fas fa-clock mr-2"></i>
                    <span>~29 min read</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-list mr-2"></i>
                    <span>4 parts combined</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-calendar mr-2"></i>
                    <span>September 13, 2025</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Full Series Content -->
<article class="py-16 bg-white dark:bg-gray-900">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Note about this page -->
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-12 border border-blue-200 dark:border-blue-800">
            <div class="flex items-start">
                <i class="fas fa-info-circle text-blue-500 mr-3 mt-1"></i>
                <div>
                    <h3 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Reading the Complete Series</h3>
                    <p class="text-blue-700 dark:text-blue-300 text-sm">
                        This page combines all four parts of the Mosaic series for continuous reading. A floating table of contents appears as you scroll to help navigate between sections. You can also read each part individually from the <a href="/mosaic" class="underline hover:no-underline">series overview</a>.
                    </p>
                </div>
            </div>
        </div>

        <!-- Part 1 Content -->
        <section id="part-1" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 1: The Problem with Apps Today</h2>
                <p class="text-gray-600 dark:text-gray-400">5 min read • September 12, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <section id="intro" class="mb-12">
                    <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-8 border border-purple-100 dark:border-purple-800">
                        <p class="text-xl leading-relaxed mb-4">Think about the last time you planned a trip.</p>

                        <div class="space-y-4 text-lg">
                            <p>📱 You opened your airline's app to check flights.</p>
                            <p>🗺️ Switched to Google Maps for directions.</p>
                            <p>💬 Used WhatsApp to coordinate with friends.</p>
                            <p>🌍 Maybe downloaded a translation app just for the week.</p>
                            <p>📸 And after the trip? You probably dug through Photos and a budgeting app to figure out what you spent.</p>
                        </div>

                        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 mt-6 border-l-4 border-purple-500">
                            <p class="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">That's five or six apps — all for one journey.</p>
                            <p class="text-gray-600 dark:text-gray-400">This is normal today. But it doesn't feel right, does it?</p>
                        </div>
                    </div>

                    <p class="text-lg leading-relaxed mb-6">We live in a world where apps are still siloed products. App stores want you to search, install, and learn them one by one. But our lives don't fit into silos. We live in <em class="font-semibold text-purple-600 dark:text-purple-400">flows</em> — trips, health check-ups, courses, projects — and those flows cut across dozens of apps.</p>

                    <div class="text-center my-8">
                        <p class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">This series is about a different way of thinking:</p>
                        <p class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Mosaic</p>
                    </div>
                </section>

                <section id="what-is-mosaic" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is Mosaic?</h3>

                    <p class="mb-4">At its core, Mosaic is a vision:</p>

                    <ul class="list-disc pl-6 mb-6">
                        <li>Instead of monolithic apps, we think in <strong>tiles</strong> — small modular capabilities.</li>
                        <li>A user's intent ("I'm visiting Tokyo") becomes the starting point.</li>
                        <li>The right set of tiles assemble into a cohesive app, just for that journey.</li>
                        <li>And as your journey changes, the app reshapes itself.</li>
                    </ul>

                    <div class="my-8 md:float-right md:ml-6 md:mb-4 md:w-80 lg:w-96">
                        <img src="/mosaic-series/user-flow.jpg"
                             alt="User flow diagram showing how Mosaic adapts apps to user journeys"
                             class="w-full h-auto rounded-lg shadow-lg"
                             loading="lazy" />
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                            How Mosaic assembles the right capabilities for your specific journey
                        </p>
                    </div>

                    <p>In the coming parts of this series, I'll unpack this vision step by step.</p>
                </section>

                <section id="what-this-series-will-cover" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What This Series Will Cover</h3>

                    <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6 my-8">
                        <ul class="space-y-3">
                            <li><strong>Part 1 — The Problem with Apps Today</strong><br>
                                <span class="text-gray-600 dark:text-gray-400">You're reading it! Why app stores and siloed apps don't fit the modern user journey. Introduce the Mosaic concept at a high level.</span></li>

                            <li><strong>Part 2 — The Mosaic Concept: Adaptive Journeys</strong><br>
                                <span class="text-gray-600 dark:text-gray-400">Deep dive on "tiles," adaptive layouts, self-updating flows. Tokyo trip example.</span></li>

                            <li><strong>Part 3 — Under the Hood: Context Engine, Registry, Composer</strong><br>
                                <span class="text-gray-600 dark:text-gray-400">Explain the building blocks and why this differs from MCP/agents. Discuss security, version locking, rollbacks.</span></li>

                            <li><strong>Part 4 — Near Future & Beyond</strong><br>
                                <span class="text-gray-600 dark:text-gray-400">Why PWAs are the natural first step. The long-term OS-level vision. Examples: travel, health, learning.</span></li>
                        </ul>
                    </div>
                </section>

                <section id="why-start-here" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Start Here?</h3>

                    <p class="mb-4">Before we can imagine a new model, we need to clearly see what's broken today:</p>

                    <ul class="list-disc pl-6 mb-6">
                        <li><strong>Too many apps.</strong> Every task means juggling 3–5 different tools.</li>
                        <li><strong>Too much friction.</strong> Search, install, learn, delete. Repeat.</li>
                        <li><strong>Too little adaptability.</strong> Apps don't evolve with your journey.</li>
                    </ul>

                    <p>Mosaic is my attempt to rethink this from the ground up.</p>
                </section>

                <section id="homework-1" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Homework for You</h3>

                    <p class="mb-4">Before the next part, here's a simple exercise:</p>

                    <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 my-8">
                        <p class="text-lg font-medium mb-3">👉 Think of one thing you did this week that required 3 or more apps.</p>
                        <p class="mb-3">Write them down. How did it feel switching back and forth?</p>
                        <p>Hold onto that example — we'll revisit it in Part 2, when we imagine how Mosaic would handle it.</p>
                    </div>
                </section>
            </div>
        </section>

        <!-- Part 2 Content -->
        <section id="part-2" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 2: Adaptive Journeys in App Flows</h2>
                <p class="text-gray-600 dark:text-gray-400">7 min read • September 13, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <section id="challenge-of-todays-app-world" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Challenge of Today's App World</h3>

                    <div class="my-8 md:float-right md:ml-6 md:mb-4 md:w-80 lg:w-96">
                        <img src="/mosaic-series/english-to-japanese-translator-app.jpg"
                             alt="Multiple translator apps with similar features crowding the app store"
                             class="w-full h-auto rounded-lg shadow-lg"
                             loading="lazy" />
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                            The endless cycle of app hunting and learning new interfaces
                        </p>
                    </div>

                    <p class="mb-4">Every time you need something new, you're pushed into the same cycle:</p>

                    <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 my-6 border border-red-100 dark:border-red-800">
                        <ol class="space-y-2 text-lg list-decimal pl-6">
                            <li>🔍 Search the app store.</li>
                            <li>📊 Compare dozens of options with nearly identical features.</li>
                            <li>📖 Read descriptions, ratings, and reviews.</li>
                            <li>📱 Download and install one.</li>
                            <li>🎯 Learn a new interface — even if it works just like others.</li>
                            <li>👤 Sometimes: register, verify email, or sign in.</li>
                        </ol>

                        <div class="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4 border-l-4 border-red-500">
                            <p class="font-semibold text-red-700 dark:text-red-300">All of this for just one tiny piece of your journey.</p>
                        </div>
                    </div>

                    <p class="mb-4">Take translator apps: the store is full of them, all doing roughly the same job. But as a user, you still need to guess which one is "best," install it, and learn yet another interface — even though what you really want is just translation within your current flow.</p>

                    <p><strong>It's a never-ending battle of app hunting and app learning.</strong></p>
                </section>

                <section id="what-makes-app-flows-different" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Makes App Flows Different</h3>

                    <div class="grid md:grid-cols-2 gap-6 my-8">
                        <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                            <h4 class="text-xl font-bold text-gray-900 dark:text-white mb-4">📱 Traditional Apps</h4>
                            <p class="text-gray-600 dark:text-gray-400">Static: once you install them, they look and behave the same, regardless of your stage in a journey.</p>
                        </div>
                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                            <h4 class="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🌊 App Flows</h4>
                            <p class="text-purple-700 dark:text-purple-300">Dynamic and adaptive — living experiences that grow and shrink with your journey.</p>
                        </div>
                    </div>

                    <p class="mb-4">App Flows, by contrast, are dynamic and adaptive. They:</p>

                    <ul class="list-disc pl-6 mb-6">
                        <li><strong>Highlight what matters most right now.</strong></li>
                        <li><strong>Fade out or remove tiles that are no longer relevant.</strong></li>
                        <li><strong>Rearrange themselves automatically as your context shifts.</strong></li>
                    </ul>

                    <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6 my-8">
                        <p class="text-xl font-semibold text-purple-700 dark:text-purple-300 text-center">
                            They are not "one app per problem" — they are <em>living experiences</em> that grow and shrink with your journey.
                        </p>
                    </div>
                </section>

                <section id="tokyo-trip-example" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Tokyo Trip Example</h3>

                    <div class="md:float-left md:mr-6 md:mb-4 md:w-80 lg:w-96">
                        <img src="/mosaic-series/adaptive-ui.jpg"
                             alt="Interface showing how an app adapts during different phases of a Tokyo trip"
                             class="w-full h-auto rounded-lg shadow-lg"
                             loading="lazy" />
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                            A Living Companion that evolves as your context changes
                        </p>
                    </div>

                    <p class="mb-6">Let's imagine you're planning a trip to Tokyo.</p>

                    <div class="clear-left md:clear-none">
                        <h4 class="text-xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">🛫 Before the trip</h4>
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6 border border-blue-200 dark:border-blue-700 md:mr-8">
                            <ul class="list-disc pl-6">
                                <li>The App Flow emphasizes your <strong>flight tracker</strong> and <strong>hotel reservation</strong> details.</li>
                                <li>Maps, translation, and restaurant suggestions exist but stay in the background.</li>
                            </ul>
                        </div>

                        <h4 class="text-xl font-bold mt-8 mb-4 text-green-600 dark:text-green-400">🗾 During the trip</h4>
                        <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6 border border-green-200 dark:border-green-700 md:mr-8">
                            <ul class="list-disc pl-6">
                                <li>The App Flow <strong>reshapes itself automatically</strong>.</li>
                                <li>Now, the <strong>translation tile</strong>, <strong>navigation maps</strong>, and <strong>restaurant finder</strong> rise to the top.</li>
                                <li>The flight tracker shrinks into a small widget since it's less critical.</li>
                            </ul>
                        </div>

                        <h4 class="text-xl font-bold mt-8 mb-4 text-purple-600 dark:text-purple-400">📸 After the trip</h4>
                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6 border border-purple-200 dark:border-purple-700 md:mr-8">
                            <ul class="list-disc pl-6">
                                <li>Your <strong>photo gallery</strong> and <strong>spending tracker</strong> take the spotlight.</li>
                                <li>The flight tracker <strong>disappears completely</strong>.</li>
                                <li>You're guided into reflection, sharing, and memory instead of logistics.</li>
                            </ul>
                        </div>
                    </div>

                    <h4 class="text-xl font-bold mt-8 mb-4 text-orange-600 dark:text-orange-400">🗂️ Beyond the trip: Disposable & Archivable Flows</h4>
                    <div class="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 mb-6 border border-orange-200 dark:border-orange-700">
                        <p class="text-orange-700 dark:text-orange-300 mb-4">Here's where App Flows truly differ from traditional apps:</p>
                        <ul class="space-y-3 list-none">
                            <li class="flex items-start">
                                <span class="text-2xl mr-3">🗑️</span>
                                <div>
                                    <strong class="text-orange-800 dark:text-orange-200">Disposable by default:</strong>
                                    <span class="text-orange-700 dark:text-orange-300">Once your Tokyo trip is complete, the entire App Flow can gracefully disappear. No cluttered home screen, no forgotten apps taking up storage.</span>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <span class="text-2xl mr-3">📦</span>
                                <div>
                                    <strong class="text-orange-800 dark:text-orange-200">Archivable when needed:</strong>
                                    <span class="text-orange-700 dark:text-orange-300">If you want to keep the flow for reference or reuse, it gets archived with all your preferences, favorite restaurants, and learned patterns intact.</span>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <span class="text-2xl mr-3">🔄</span>
                                <div>
                                    <strong class="text-orange-800 dark:text-orange-200">Instantly retrievable:</strong>
                                    <span class="text-orange-700 dark:text-orange-300">Planning another trip to Japan two years later? Your archived "Tokyo Trip" flow can be restored instantly, with all your previous preferences and learnings ready to go.</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-700">
                        <div class="flex items-center justify-center mb-4">
                            <span class="text-3xl mr-4">💡</span>
                            <h5 class="text-xl font-bold text-orange-800 dark:text-orange-200">The Revolutionary Difference</h5>
                        </div>
                        <p class="text-center text-orange-700 dark:text-orange-300 text-lg">
                            Instead of <strong>permanent apps</strong> that accumulate on your device forever, you get <strong>temporary experiences</strong>
                            that exist only as long as you need them — and can be recalled when relevant again.
                        </p>
                    </div>

                    <div class="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-8 my-8 border border-purple-200 dark:border-purple-700">
                        <div class="flex items-center justify-center mb-4">
                            <span class="text-3xl mr-4">🤝</span>
                            <p class="text-xl font-bold text-center text-purple-700 dark:text-purple-300">
                                This isn't just a self-updating app.
                            </p>
                        </div>
                        <p class="text-lg text-center text-purple-600 dark:text-purple-400">
                            It's a <strong>Living Companion</strong> — an app that evolves as your context (location, time, role, and goals).
                        </p>
                    </div>
                </section>

                <section id="defining-app-flows-and-mosaic" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Defining App Flows and Mosaic</h3>

                    <p class="mb-4">To be precise:</p>

                    <div class="grid md:grid-cols-1 gap-6 my-8">
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                            <h4 class="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">🌊 App Flows</h4>
                            <p class="text-blue-700 dark:text-blue-300">The representation of the user's goal or journey. They describe what you want to achieve (plan a trip, complete a course, manage a health check-up) and evolve as your context changes.</p>
                        </div>

                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                            <h4 class="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">🎯 Mosaic</h4>
                            <p class="text-purple-700 dark:text-purple-300">The composition engine that interprets App Flows. It brings together the right "tiles" — small modular capabilities like translation, maps, reminders, or payments — and assembles them into a single adaptive experience.</p>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 my-8 border border-gray-300 dark:border-gray-600">
                        <h4 class="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">In short:</h4>
                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="text-center">
                                <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">🌊</div>
                                <p class="text-xl font-semibold text-blue-600 dark:text-blue-400">App Flows capture your intent.</p>
                            </div>
                            <div class="text-center">
                                <div class="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">🎯</div>
                                <p class="text-xl font-semibold text-purple-600 dark:text-purple-400">Mosaic builds the experience around it.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-adaptive-journeys-matter" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Adaptive Journeys Matter</h3>

                    <p class="mb-4">With Mosaic-driven App Flows:</p>

                    <div class="grid md:grid-cols-2 gap-4 my-8">
                        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                            <div class="flex items-center mb-2">
                                <span class="text-2xl mr-3">🎯</span>
                                <h5 class="text-lg font-bold text-green-900 dark:text-green-100">Less clutter</h5>
                            </div>
                            <p class="text-green-700 dark:text-green-300">Only what matters now is visible.</p>
                        </div>

                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                            <div class="flex items-center mb-2">
                                <span class="text-2xl mr-3">⚡</span>
                                <h5 class="text-lg font-bold text-blue-900 dark:text-blue-100">Less friction</h5>
                            </div>
                            <p class="text-blue-700 dark:text-blue-300">No more searching, installing, or relearning interfaces.</p>
                        </div>

                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                            <div class="flex items-center mb-2">
                                <span class="text-2xl mr-3">🔍</span>
                                <h5 class="text-lg font-bold text-purple-900 dark:text-purple-100">More focus</h5>
                            </div>
                            <p class="text-purple-700 dark:text-purple-300">Your app evolves with you, stage by stage.</p>
                        </div>

                        <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                            <div class="flex items-center mb-2">
                                <span class="text-2xl mr-3">🤝</span>
                                <h5 class="text-lg font-bold text-indigo-900 dark:text-indigo-100">More trust</h5>
                            </div>
                            <p class="text-indigo-700 dark:text-indigo-300">You know the right tool will surface when you need it.</p>
                        </div>

                        <div class="md:col-span-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                            <div class="flex items-center justify-center mb-2">
                                <span class="text-2xl mr-3">❤️</span>
                                <h5 class="text-lg font-bold text-yellow-900 dark:text-yellow-100">More human</h5>
                            </div>
                            <p class="text-yellow-700 dark:text-yellow-300 text-center">Apps finally mirror the way we actually live — in flows, not silos.</p>
                        </div>
                    </div>
                </section>

                <section id="homework-2" class="mb-12">
                    <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Homework for You</h3>

                    <div class="space-y-6 my-8">
                        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
                            <div class="flex items-center space-x-4 mb-3">
                                <div class="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                <h4 class="text-lg font-bold text-purple-900 dark:text-purple-100">👉 Homework 1:</h4>
                            </div>
                            <div class="ml-12">
                                <p class="text-purple-700 dark:text-purple-300">Think of one journey in your life (a trip, a health check-up, a project, or a course). Write down the stages of that journey. What apps did you use at each stage?</p>
                            </div>
                        </div>

                        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
                            <div class="flex items-center space-x-4 mb-3">
                                <div class="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                <h4 class="text-lg font-bold text-purple-900 dark:text-purple-100">👉 Homework 2:</h4>
                            </div>
                            <div class="ml-12">
                                <p class="text-purple-700 dark:text-purple-300">On your phone, scroll through your installed apps. Which ones did you download for a single purpose — and never use again?</p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-8 my-8 border border-purple-200 dark:border-purple-700">
                        <p class="text-lg text-center text-purple-700 dark:text-purple-300 italic">
                            Imagine if those weren't permanent apps on your phone, but temporary tiles that appeared in your App Flow when needed, and gracefully disappeared afterward.
                        </p>
                    </div>
                </section>
            </div>
        </section>

        <!-- Part 3 Content -->
        <section id="part-3" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 3: Under the Hood of App Flows</h2>
                <p class="text-gray-600 dark:text-gray-400">15 min read • September 13, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-xl leading-relaxed mb-8">So far, we've looked at the <em>why</em> of Mosaic: today's apps create friction, and App Flows adapt to your journey like a living companion.</p>

                <p class="text-xl leading-relaxed mb-8">Now, let's look at the <em>how</em>. What would it take to actually build Mosaic with today's technology?</p>

                <section id="core-building-blocks" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Core Building Blocks</h3>

                    <p class="text-lg mb-8">To make App Flows real, Mosaic relies on four components:</p>

                    <div class="mb-12">
                        <img
                            src="/mosaic-series/core-architectural-design.jpg"
                            alt="Core architectural design showing the four building blocks of Mosaic: Context Engine, Registry of Tiles, Composer, and Security & Control"
                            class="w-full rounded-lg shadow-lg mb-4"
                        />
                        <p class="text-sm text-gray-600 dark:text-gray-400 italic text-center">
                            The four core building blocks that make Mosaic App Flows possible
                        </p>
                    </div>

                    <section id="context-engine" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">1. The Context Engine</h4>

                        <p class="text-lg mb-4">This is the brain of Mosaic.</p>

                        <p class="text-lg mb-4">Powered by a Large Language Model (LLM), it interprets a user's intent: "I'm visiting Tokyo," "I'm preparing for a check-up," "I'm starting a new class."</p>

                        <p class="text-lg mb-4">It uses signals like time, location, role, and past behavior to understand what stage of the journey you're in.</p>

                        <p class="text-lg mb-6">Unlike today's chatbots, which just respond to prompts, the Context Engine continuously updates context and reshapes the App Flow as your journey evolves.</p>
                    </section>

                    <section id="registry-of-tiles" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">2. The Registry of Tiles</h4>

                        <p class="text-lg mb-4">The Tile Registry is the keystone of Mosaic — and the part that makes it more than "just another MCP."</p>

                        <p class="text-lg mb-4">In MCP, registries expose APIs that an agent can call.</p>

                        <p class="text-lg mb-6">In Mosaic, registries expose <strong>tiles</strong>: modular units made of three layers:</p>

                        <div class="space-y-8">
                            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                                <h5 class="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Logic Layer</h5>
                                <p class="text-lg mb-4">Defines what the tile does.</p>
                                <p class="text-lg mb-4">Exposed as functions or API wrappers.</p>
                                <p class="text-lg mb-4 font-medium">Example (TypeScript):</p>

                                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-typescript">// logic.ts
export async function getWeather(location: string) &#123;
  const response = await fetch(`/api/weather?loc=$&#123;location&#125;`);
  return await response.json();
&#125;</code></pre>
                            </div>

                            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                                <h5 class="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Presentation Layer</h5>
                                <p class="text-lg mb-4">Defines how the tile looks inside an App Flow.</p>
                                <p class="text-lg mb-4">Built as reusable components (Web Components, Svelte, React, or Lit).</p>
                                <p class="text-lg mb-4">Supports different modes: card, widget, popup.</p>
                                <p class="text-lg mb-4 font-medium">Example (Svelte):</p>

                                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-svelte">&lt;!-- WeatherTile.svelte --&gt;
&lt;script lang="ts"&gt;
  export let weather: &#123; temp: number; condition: string &#125;;
&lt;/script&gt;

&lt;div class="tile card"&gt;
  &lt;h3&gt;Weather&lt;/h3&gt;
  &lt;p&gt;&#123;weather.temp&#125;°C — &#123;weather.condition&#125;&lt;/p&gt;
&lt;/div&gt;</code></pre>
                            </div>

                            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                                <h5 class="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Metadata Layer</h5>
                                <p class="text-lg mb-4">Tells the Composer when and how to use the tile.</p>
                                <p class="text-lg mb-4 font-medium">Example manifest (JSON):</p>

                                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-json">&#123;
  "name": "WeatherTile",
  "version": "1.0.0",
  "provider": "Community",
  "logic": "./logic.ts",
  "presentation": &#123;
    "modes": ["card", "widget"],
    "component": "./WeatherTile.svelte",
    "props": &#123;
      "weather": "object"
    &#125;
  &#125;,
  "metadata": &#123;
    "context": ["travel", "daily-life"],
    "priority": "medium",
    "pairsWith": ["MapTile"]
  &#125;
&#125;</code></pre>
                            </div>
                        </div>

                        <p class="text-lg mt-6">So the registry doesn't store raw UI or screenshots. It stores logic modules, UI components, and metadata — everything needed for the Composer to use the tile.</p>
                    </section>

                    <section id="the-composer" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">3. The Composer</h4>

                        <p class="text-lg mb-4">The Composer is the layout and integration engine.</p>

                        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                            <li>It receives a set of relevant tiles from the Context Engine.</li>
                            <li>It looks at each tile's manifest (logic + presentation + metadata).</li>
                            <li>It decides:
                                <ul class="list-disc pl-6 mt-2 space-y-1">
                                    <li>Which tiles to show.</li>
                                    <li>In what order.</li>
                                    <li>In what presentation mode (card, widget, popup).</li>
                                </ul>
                            </li>
                        </ul>

                        <h5 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">How the Composer Renders Tiles</h5>

                        <p class="text-lg mb-4">The Composer uses a shared design system (like Tailwind, Material UI, or a custom theme) to keep tiles consistent.</p>

                        <p class="text-lg mb-4">It mounts tile components dynamically, passing in data as props.</p>

                        <p class="text-lg mb-4 font-medium">Example flow:</p>

                        <ol class="text-lg space-y-2 mb-6 list-decimal pl-6">
                            <li>Context Engine says weather is relevant.</li>
                            <li>Composer imports <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">logic.ts</code>, runs <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">getWeather("Tokyo")</code>.</li>
                            <li>Composer mounts <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">WeatherTile.svelte</code> in card mode, passing weather as props.</li>
                        </ol>

                        <p class="text-lg mb-6">With existing web tech (dynamic imports, Web Components, Svelte/React), this is totally possible today.</p>

                        <h5 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Handling Multiple Tiles for the Same Thing</h5>

                        <p class="text-lg mb-4">What if there are multiple tiles for weather or translation? Mosaic handles this in layers:</p>

                        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                            <li><strong>Registry curation</strong> — verified tiles can be highlighted.</li>
                            <li><strong>Context Engine arbitration</strong> — the LLM can pick based on metadata (offline support, reputation, integration).</li>
                            <li><strong>User override</strong> — users can swap tiles if they prefer a different one.</li>
                            <li><strong>Coexistence</strong> — in some cases, multiple tiles can appear side by side.</li>
                        </ul>

                        <p class="text-lg mb-6">This avoids today's app-store chaos while still allowing competition.</p>
                    </section>

                    <section id="security-control" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">4. Security &amp; Control</h4>

                        <p class="text-lg mb-4">Dynamic apps need trust. Mosaic provides:</p>

                        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                            <li><strong>Version locking</strong> — freeze your App Flow at a safe state.</li>
                            <li><strong>Rollback</strong> — undo unexpected updates.</li>
                            <li><strong>Verified tiles</strong> — signed by trusted providers.</li>
                            <li><strong>User overrides</strong> — control which tiles get used.</li>
                        </ul>

                        <p class="text-lg mb-6">This ensures flexibility without sacrificing control.</p>
                    </section>
                </section>

                <section id="why-pwas-bridge" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why PWAs Are the Bridge</h3>

                    <p class="text-lg mb-4">We don't need to invent a new OS to make this work. Progressive Web Apps (PWAs) already give us:</p>

                    <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                        <li><strong>Self-updating behavior</strong> (Service Workers).</li>
                        <li><strong>Cross-platform reach</strong> (runs in browsers, mobile, desktop).</li>
                        <li><strong>Installability</strong> (can live on the home screen or open via link).</li>
                        <li><strong>Offline support</strong> (cached tiles, limited resilience).</li>
                    </ul>

                    <p class="text-lg mb-6">PWAs are the perfect near-term vehicle for Mosaic — an App Flow could be shared as a link, installed instantly, and evolve dynamically.</p>

                    <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">PWA Limitations</h4>

                    <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                        <li>Limited access to device APIs (push, Bluetooth, sensors).</li>
                        <li>Discoverability bias (native apps favored in app stores).</li>
                        <li>On iOS, stricter background and storage restrictions.</li>
                    </ul>

                    <p class="text-lg mb-6">So while PWAs can't yet replace every native app, they can already demonstrate the App Flow model in practice.</p>
                </section>

                <section id="role-of-llms" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Role of LLMs</h3>

                    <p class="text-lg mb-4">The LLM-powered Context Engine is what ties it all together:</p>

                    <div class="space-y-6 mb-8">
                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h5 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Interpret intent</h5>
                            <p class="text-lg mb-2"><strong>User says:</strong> "I'm visiting Tokyo."</p>
                            <p class="text-lg"><strong>LLM infers sub-goals:</strong> flights, hotels, maps, translation, restaurants.</p>
                        </div>

                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h5 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Query registry</h5>
                            <p class="text-lg">Finds relevant tiles: FlightTile, HotelTile, MapTile, TranslateTile.</p>
                        </div>

                        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                            <h5 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Assemble flow</h5>
                            <p class="text-lg">Tells Composer which tiles to render, in what order, and in what mode.</p>
                        </div>
                    </div>

                    <p class="text-lg mb-6">The result: a persistent, adaptive App Flow that evolves with you, rather than static apps you have to juggle.</p>
                </section>

                <section id="why-this-matters-3" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why This Matters</h3>

                    <p class="text-lg mb-4">With these pieces, Mosaic is not science fiction. Using today's tech:</p>

                    <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                        <li>Logic can be written as functions or API wrappers.</li>
                        <li>UI can be packaged as components.</li>
                        <li>Manifests can live in a registry (like NPM for tiles).</li>
                        <li>PWAs can deliver adaptive App Flows cross-platform.</li>
                        <li>LLMs can interpret user intent and orchestrate flows.</li>
                    </ul>

                    <p class="text-lg mb-6">Together, they transform apps from static silos into <strong>Living Companions</strong> that grow and adapt with your context — location, time, role, and goals.</p>
                </section>

                <section id="homework-3" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Homework for You</h3>

                    <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 mb-6 border border-orange-200 dark:border-orange-800">
                        <p class="text-lg mb-4"><strong>👉 Homework 1:</strong> Pick one task you'd describe in a sentence ("I'm moving to a new house," "I'm training for a marathon"). What tiles would you need if Mosaic built an App Flow for you?</p>

                        <p class="text-lg"><strong>👉 Homework 2 (for builders):</strong> Take one feature from your app and imagine it as a tile. Write a simple manifest:</p>
                        <ul class="text-lg space-y-2 mt-4 list-disc pl-6">
                            <li>What logic would you export?</li>
                            <li>What UI component would you package?</li>
                            <li>What metadata would you declare?</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>

        <!-- Part 4 Content -->
        <section id="part-4" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 4: The Near Future and Beyond</h2>
                <p class="text-gray-600 dark:text-gray-400">8 min read • September 13, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-xl leading-relaxed mb-6">In Part 3, we looked under the hood of Mosaic — the Context Engine, the Registry of Tiles, and the Composer. We also saw why Progressive Web Apps (PWAs) are the natural starting point.</p>

                <p class="text-xl leading-relaxed mb-8">Now let's go deeper: how exactly Mosaic works as a PWA today, and where it could go in the long term.</p>

                <section id="how-mosaic-works-as-pwa" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">How Mosaic Works as a PWA</h3>

                    <p class="text-lg mb-4">At first, Mosaic can be implemented as a single container PWA hosted at <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code>.</p>

                    <p class="text-lg mb-4">When you install Mosaic once (from <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code>), you get the wrapper app that includes:</p>

                    <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                        <li><strong>Context Engine</strong> → interprets user goals.</li>
                        <li><strong>Tile Registry client</strong> → fetches logic, UI components, and metadata.</li>
                        <li><strong>Composer</strong> → assembles tiles into an App Flow and renders it.</li>
                    </ul>

                    <p class="text-lg mb-4">Each App Flow is just a route inside this PWA.</p>

                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                        <div class="space-y-2">
                            <p class="text-lg font-mono">https://&#123;abc.com&#125;/appflow/tokyo-trip</p>
                            <p class="text-lg font-mono">https://&#123;abc.com&#125;/appflow/moving-house</p>
                            <p class="text-lg font-mono">https://&#123;abc.com&#125;/appflow/meal-planner</p>
                        </div>
                    </div>

                    <p class="text-lg mb-6">All three share the same manifest, service worker, and scope.</p>

                    <section id="why-not-separate-pwas" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Why They Are Not Separate PWAs</h4>

                        <p class="text-lg mb-4">Browsers determine PWA identity by the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">scope</code> field in the manifest.</p>

                        <p class="text-lg mb-4">If Mosaic defines its manifest with:</p>

                        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6"><code class="language-json">&#123;
  "name": "Mosaic",
  "start_url": "/",
  "scope": "/appflow/"
&#125;</code></pre>

                        <p class="text-lg mb-4">Then every route under <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/appflow/</code> belongs to the same installed PWA.</p>

                        <p class="text-lg mb-6">This means you install once, and all flows open inside that single container.</p>

                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
                            <ul class="text-lg space-y-2 list-disc pl-6">
                                <li>To the OS, it's one PWA (one icon, one storage).</li>
                                <li>To the user, each flow feels like a different app because the Composer dynamically reshapes the UI based on the flow ID.</li>
                            </ul>
                        </div>

                        <p class="text-lg mb-4">So:</p>

                        <p class="text-lg mb-4">Tokyo Trip and Moving House are <strong>not</strong> two different PWAs.</p>

                        <p class="text-lg mb-6">They're two different parameters/configurations inside the Mosaic container.</p>

                        <p class="text-lg mb-6">This avoids clutter (otherwise every flow = new icon = recreating today's problem).</p>
                    </section>

                    <section id="why-pwas-perfect-bridge" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Why PWAs Are the Perfect Bridge</h4>

                        <p class="text-lg mb-4">PWAs already provide many of the features Mosaic needs:</p>

                        <div class="space-y-6 mb-8">
                            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                                <h5 class="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Self-updating</h5>
                                <p class="text-lg mb-2">Service Workers let PWAs update silently in the background.</p>
                                <p class="text-lg">Flows evolve without reinstallations.</p>
                            </div>

                            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                                <h5 class="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Cross-platform reach</h5>
                                <p class="text-lg mb-2">PWAs run in browsers, mobile, and desktop.</p>
                                <p class="text-lg">Flows are just links — instantly accessible.</p>
                            </div>

                            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                                <h5 class="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Installability</h5>
                                <p class="text-lg mb-2">The container can live on your home screen.</p>
                                <p class="text-lg">Users can "install Mosaic" once, but still open any App Flow link.</p>
                            </div>

                            <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                                <h5 class="text-lg font-semibold mb-3 text-orange-800 dark:text-orange-200">Offline capabilities</h5>
                                <p class="text-lg">Tiles can cache data or run local logic when offline.</p>
                            </div>

                            <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
                                <h5 class="text-lg font-semibold mb-3 text-teal-800 dark:text-teal-200">Instant shareability</h5>
                                <p class="text-lg mb-2">A Tokyo Trip flow is just a URL you can send to a friend.</p>
                                <p class="text-lg">When they click, it runs inside their Mosaic container (or in the browser if they haven't installed yet).</p>
                            </div>
                        </div>

                        <p class="text-lg mb-6">This makes PWAs the perfect near-term vehicle for Mosaic.</p>
                    </section>

                    <section id="pwa-constraints" class="mb-8">
                        <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">But PWAs Have Constraints</h4>

                        <p class="text-lg mb-4">We should be realistic about today's PWA ecosystem:</p>

                        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                            <li><strong>Device APIs</strong> — limited access to Bluetooth, NFC, sensors, and background sync.</li>
                            <li><strong>Discoverability</strong> — app stores prioritize native apps, PWAs feel hidden.</li>
                            <li><strong>Platform politics</strong> — iOS restricts push notifications, background tasks, and storage.</li>
                        </ul>

                        <p class="text-lg mb-6">These constraints mean PWAs can't unlock every use case. But they can already demonstrate the core Mosaic experience: adaptive, self-updating, and shareable App Flows.</p>
                    </section>
                </section>

                <section id="near-future-hosted-registries" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Near Future: Hosted Registries</h3>

                    <p class="text-lg mb-4">At the start, websites like <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code> can host Tile Registries and Flow Builders:</p>

                    <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                        <li>Developers publish reusable tiles.</li>
                        <li>Users combine tiles into App Flows via a simple web builder.</li>
                        <li>Flows are shared as URLs.</li>
                    </ul>

                    <p class="text-lg mb-4">Multiple providers could host registries — just like multiple app stores exist today.</p>
                    <p class="text-lg mb-6">Some registries may specialize (travel, fitness, education), while others remain general-purpose.</p>
                </section>

                <section id="long-term-os-level" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Long-Term Goal: OS-Level Mosaic</h3>

                    <p class="text-lg mb-4">Over time, Mosaic could move deeper into the operating system, just like app stores and file explorers did.</p>

                    <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                        <li>The Tile Registry becomes part of OS settings (where you choose which registries to trust).</li>
                        <li>App Flows become OS-native adaptive apps, disposable and self-updating.</li>
                        <li>Users don't manage dozens of installs. They simply trigger flows by expressing goals.</li>
                    </ul>

                    <p class="text-lg mb-4">This is where Mosaic diverges from MCP (Model Context Protocol):</p>

                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                        <ul class="text-lg space-y-3 list-disc pl-6">
                            <li><strong>MCP</strong> focuses on chat-based interaction — you ask, it responds.</li>
                            <li><strong>Mosaic</strong> delivers app-based experiences — not a conversation, but a disposable, adaptive app that appears, serves its purpose, and disappears.</li>
                        </ul>
                    </div>

                    <p class="text-lg mb-6"><strong>Mosaic = chatless orchestration + goal-driven adaptive apps.</strong></p>
                </section>

                <section id="the-roadmap" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Roadmap</h3>

                    <div class="space-y-8">
                        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                            <h4 class="text-lg font-semibold mb-3 text-blue-800 dark:text-blue-200">Today</h4>
                            <ul class="text-lg space-y-2 list-disc pl-6">
                                <li><code class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">&#123;abc.com&#125;</code> as a container PWA.</li>
                                <li>App Flows are just routes (<code class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">/appflow/:flowId</code>) inside it.</li>
                                <li>Install once, open any flow by link.</li>
                            </ul>
                        </div>

                        <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                            <h4 class="text-lg font-semibold mb-3 text-green-800 dark:text-green-200">Near Future</h4>
                            <ul class="text-lg space-y-2 list-disc pl-6">
                                <li>Multiple hosted registries.</li>
                                <li>Flow builders for families, teams, communities.</li>
                                <li>Sharing flows feels like sharing docs or playlists.</li>
                            </ul>
                        </div>

                        <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                            <h4 class="text-lg font-semibold mb-3 text-purple-800 dark:text-purple-200">Long Term</h4>
                            <ul class="text-lg space-y-2 list-disc pl-6">
                                <li>Registry management at the OS level.</li>
                                <li>Adaptive App Flows become first-class citizens of the OS.</li>
                                <li>Apps as we know them give way to goal-driven flows.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="why-this-matters-4" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why This Matters</h3>

                    <p class="text-lg mb-4">PWAs let us build Mosaic today — with one container app and flows as routes. Hosting registries at sites like <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code> lets users and developers experiment now.</p>

                    <p class="text-lg mb-4">But the long-term vision is bigger: Mosaic as an OS-native orchestrator, with registries managed at the system level. Unlike MCP's chat-first approach, Mosaic enables goal-first disposable apps that adapt and disappear when finished.</p>

                    <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-6 border border-indigo-200 dark:border-indigo-800">
                        <p class="text-xl font-semibold text-center mb-4">The future isn't about apps you hunt down and install.</p>
                        <p class="text-xl font-semibold text-center">It's about flows that find you, adapt with you, and vanish when the job is done.</p>
                    </div>
                </section>

                <section id="homework-4" class="mb-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Homework for You</h3>

                    <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 mb-6 border border-orange-200 dark:border-orange-800">
                        <p class="text-lg mb-4"><strong>👉 Homework 1:</strong> Look at the URLs you used today. How many of them could be App Flows inside one container PWA instead of separate apps?</p>

                        <p class="text-lg"><strong>👉 Homework 2:</strong> If you're technical, read a PWA manifest on one of your installed web apps. Notice the scope field. Can you imagine how <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded">/appflow/:flowId</code> could all be grouped under one container?</p>
                    </div>
                </section>
            </div>
        </section>

        <!-- Series conclusion -->
        <section class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <div class="text-center">
                <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Thank You for Reading!</h3>
                <p class="text-gray-600 dark:text-gray-300 mb-6">
                    You've completed the entire Mosaic series. Share your thoughts and continue the conversation.
                </p>
                <div class="flex flex-wrap gap-4 justify-center">
                    <a href="/mosaic" class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition">
                        ← Back to Series Overview
                    </a>
                    <a href="/" class="border border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-6 py-3 rounded-full transition">
                        Explore More Articles
                    </a>
                </div>
            </div>
        </section>
    </div>
</article>