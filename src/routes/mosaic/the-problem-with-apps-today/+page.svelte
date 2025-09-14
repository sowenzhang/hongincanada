<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

    // Article metadata
    const articleData = {
        title: "Mosaic, Part 1: The Problem with Apps Today",
        description: "Think about the last time you planned a trip. You opened your airline's app to check flights. Switched to Google Maps for directions. Used WhatsApp to coordinate with friends. This is normal today. But it doesn't feel right, does it?",
        canonical: "https://hongincanada.com/mosaic/the-problem-with-apps-today",
        ogImage: "https://hongincanada.com/mosaic-series/user-flow.jpg",
        publishDate: "September 12, 2025",
        readTime: "5 min read"
    };

    // Navigation data
    const navigation = {
        currentPart: 1,
        totalParts: 4,
        seriesUrl: "/mosaic",
        seriesTitle: "Mosaic Series",
        prevPart: null,
        nextPart: {
            number: 2,
            title: "The Mosaic Concept: Adaptive Journeys",
            slug: "/mosaic/adaptive-journeys"
        }
    };

    // Table of contents
    const tableOfContents = [
        { id: "what-is-mosaic", title: "What is Mosaic?", level: 1 },
        { id: "what-this-series-will-cover", title: "What This Series Will Cover", level: 1 },
        { id: "why-start-here", title: "Why Start Here?", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];

    // Theme management
    let isDarkMode = false;
    let showTOC = false;

    onMount(() => {
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            isDarkMode = savedTheme === 'dark';
        } else {
            // Check system preference
            isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        applyTheme();
    });

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        applyTheme();
    }

    function applyTheme() {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }

    function toggleTOC() {
        showTOC = !showTOC;
    }
</script>

<svelte:head>
    <title>{articleData.title}</title>
    <meta name="description" content={articleData.description} />
    <link rel="canonical" href={articleData.canonical} />
    <meta property="og:title" content={articleData.title} />
    <meta property="og:description" content={articleData.description} />
    <meta property="og:image" content={articleData.ogImage} />
    <meta property="og:url" content={articleData.canonical} />
    <meta name="twitter:title" content={articleData.title} />
    <meta name="twitter:description" content={articleData.description} />
    <meta name="twitter:image" content={articleData.ogImage} />

    <!-- Structured Data -->
    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "${articleData.title}",
        "description": "${articleData.description}",
        "url": "${articleData.canonical}",
        "datePublished": "${articleData.publishDate}",
        "author": {
            "@type": "Person",
            "name": "Hong",
            "url": "https://hongincanada.com"
        },
        "isPartOf": {
            "@type": "Blog",
            "name": "From App Stores to App Flows: Why Mosaic Matters",
            "url": "https://hongincanada.com/mosaic"
        }
    }
   </script>`}
</svelte:head>

<!-- Breadcrumb -->
<nav class="bg-gray-50 dark:bg-gray-900 py-4 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-4">
            <!-- Breadcrumb Path -->
            <div class="flex items-center space-x-2 text-sm">
                <a href="/" class="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Home</a>
                <i class="fas fa-chevron-right text-gray-400 dark:text-gray-500" aria-hidden="true"></i>
                <a href="/mosaic" class="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Mosaic Series</a>
                <i class="fas fa-chevron-right text-gray-400 dark:text-gray-500" aria-hidden="true"></i>
                <span class="text-gray-600 dark:text-gray-400">Part {navigation.currentPart}</span>
            </div>
            <!-- Part Indicator -->
            <div class="hidden sm:block">
                <span class="bg-purple-500 dark:bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Part {navigation.currentPart} of {navigation.totalParts}
                </span>
            </div>
        </div>
    </div>
</nav>

<!-- Article Header -->
<header class="py-12 bg-white dark:bg-gray-900 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <!-- Back to Series button - only show on mobile when part indicator is hidden -->
            <div class="sm:hidden mb-6">
                <div class="flex flex-col items-center gap-3">
                    <a href="/mosaic" class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                        <i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Series
                    </a>
                    <span class="bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Part {navigation.currentPart} of {navigation.totalParts}
                    </span>
                </div>
            </div>
            <!-- Desktop: Just the back button since part indicator is in nav -->
            <div class="hidden sm:block mb-6">
                <a href="/mosaic" class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                    <i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Series
                </a>
            </div>
        </div>

        <!-- Custom header with Mosaic-specific styling -->
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                <span class="text-purple-600 dark:text-purple-400">Mosaic</span>, Part 1:<br>
                <span class="text-2xl md:text-3xl font-normal text-gray-700 dark:text-gray-300 mt-2 block">
                    The Problem with Apps Today
                </span>
            </h1>

            <div class="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <span><i class="fas fa-calendar mr-2" aria-hidden="true"></i>{articleData.publishDate}</span>
                <span><i class="fas fa-clock mr-2" aria-hidden="true"></i>{articleData.readTime}</span>
                <span><i class="fas fa-user mr-2" aria-hidden="true"></i>Hong</span>
            </div>

            <p class="text-xl text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                Think about the last time you planned a trip. You opened your airline's app to check flights.
                Switched to Google Maps for directions. Used WhatsApp to coordinate with friends.
                This is normal today. But it doesn't feel right, does it?
            </p>
        </div>
    </div>
</header>

<!-- Sticky Navigation Bar -->
<div class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 transition-colors shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between py-3">
            <!-- TOC Toggle Button -->
            {#if tableOfContents.length > 0}
                <button
                    on:click={toggleTOC}
                    class="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
                >
                    <i class="fas fa-list text-purple-600 dark:text-purple-400" aria-hidden="true"></i>
                    <span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Table of Contents</span>
                    <span class="sm:hidden">TOC</span>
                    <i class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-gray-400" aria-hidden="true"></i>
                </button>
            {:else}
                <div></div>
            {/if}

            <!-- Theme Toggle Button -->
            <button
                on:click={toggleTheme}
                class="flex items-center space-x-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
                aria-label="Toggle theme"
            >
                {#if isDarkMode}
                    <i class="fas fa-sun text-yellow-500" aria-hidden="true"></i>
                    <span class="hidden sm:inline">Light Mode</span>
                {:else}
                    <i class="fas fa-moon text-gray-600 dark:text-gray-400" aria-hidden="true"></i>
                    <span class="hidden sm:inline">Dark Mode</span>
                {/if}
            </button>
        </div>
    </div>
</div>

<!-- Article Content -->
<main class="py-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col lg:flex-row gap-8 transition-all duration-300">

            <!-- Table of Contents (Collapsible Sidebar) -->
            {#if showTOC && tableOfContents.length > 0}
                <aside class="lg:w-80 lg:flex-shrink-0" transition:slide>
                    <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sticky top-6">
                        <div class="flex items-center justify-between mb-5">
                            <h3 class="font-bold text-gray-900 dark:text-white text-lg">Table of Contents</h3>
                            <button
                                on:click={toggleTOC}
                                class="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 p-1"
                                aria-label="Close table of contents"
                            >
                                <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        <nav class="space-y-3">
                            {#each tableOfContents as item}
                                <a href="#{item.id}"
                                   class="block text-sm {item.level === 1 ? 'font-medium text-gray-900 dark:text-white py-1' : 'text-gray-600 dark:text-gray-400 ml-4 py-0.5'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded px-2 hover:bg-purple-50 dark:hover:bg-purple-900/20">
                                    {item.title}
                                </a>
                            {/each}
                        </nav>
                    </div>
                </aside>
            {/if}

            <!-- Article Content -->
            <article class="flex-1 max-w-none text-gray-700 dark:text-gray-300">
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                    <!-- Reading optimized content area -->
                    <div class="p-8 lg:p-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
                        <div class="prose prose-xl dark:prose-invert max-w-4xl mx-auto scroll-pt-24
                                    prose-headings:text-gray-900 dark:prose-headings:text-white prose-headings:font-bold
                                    prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
                                    prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:text-lg prose-li:mb-2 prose-li:pl-2
                                    prose-ul:ml-6 prose-ul:mb-6 prose-ul:mt-4 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                                    prose-ol:ml-6 prose-ol:mb-6 prose-ol:mt-4 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
                                    prose-strong:text-gray-900 dark:prose-strong:text-white
                                    prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-purple-800 dark:hover:prose-a:text-purple-300 prose-a:transition-colors
                                    prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:font-medium
                                    prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20 prose-code:px-2 prose-code:py-1 prose-code:rounded
                                    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                                    prose-blockquote:border-purple-500 dark:prose-blockquote:border-purple-400 prose-blockquote:bg-purple-50 dark:prose-blockquote:bg-purple-900/10
                                    prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                                    prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                    prose-h1:mb-8 prose-h2:mb-6 prose-h2:mt-12 prose-h3:mb-4 prose-h3:mt-8
                                    prose-p:mb-6 prose-ul:mb-6 prose-ol:mb-6
                                    [&_p]:text-gray-700 dark:[&_p]:text-gray-300
                                    [&_span]:text-gray-700 dark:[&_span]:text-gray-300
                                    [&_div]:text-gray-700 dark:[&_div]:text-gray-300
                                    [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:pl-6 [&_ul]:space-y-2
                                    [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:pl-6 [&_ol]:space-y-2
                                    [&_li]:mb-2 [&_li]:pl-1
                                    [&_section]:scroll-mt-24
                                    [&_h1]:scroll-mt-24 [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_h4]:scroll-mt-24 [&_h5]:scroll-mt-24 [&_h6]:scroll-mt-24">

                            <!-- Article Content -->
                            <section id="intro">
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

                            <section id="what-is-mosaic">
                                <h2>What is Mosaic?</h2>

                                <p>At its core, Mosaic is a vision:</p>

                                <ul>
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

                            <section id="what-this-series-will-cover">
                                <h2>What This Series Will Cover</h2>

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

                            <section id="why-start-here">
                                <h2>Why Start Here?</h2>

                                <p>Before we can imagine a new model, we need to clearly see what's broken today:</p>

                                <ul>
                                    <li><strong>Too many apps.</strong> Every task means juggling 3–5 different tools.</li>
                                    <li><strong>Too much friction.</strong> Search, install, learn, delete. Repeat.</li>
                                    <li><strong>Too little adaptability.</strong> Apps don't evolve with your journey.</li>
                                </ul>

                                <p>Mosaic is my attempt to rethink this from the ground up.</p>
                            </section>

                            <section id="homework-for-you">
                                <h2>Homework for You</h2>

                                <p>Before the next part, here's a simple exercise:</p>

                                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 my-8">
                                    <p class="text-lg font-medium mb-3">👉 Think of one thing you did this week that required 3 or more apps.</p>
                                    <p class="mb-3">Write them down. How did it feel switching back and forth?</p>
                                    <p>Hold onto that example — we'll revisit it in Part 2, when we imagine how Mosaic would handle it.</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</main>

<!-- Navigation Footer -->
<nav class="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 sm:gap-0 min-w-0">
            <!-- Previous Part -->
            <div></div>

            <!-- Series Overview -->
            <a href="/mosaic"
               class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg transition font-medium flex-shrink-0 whitespace-nowrap">
                <i class="fas fa-list mr-2" aria-hidden="true"></i>View All Parts
            </a>

            <!-- Next Part -->
            <a href="/mosaic/adaptive-journeys"
               class="flex items-center space-x-3 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition group min-w-0">
                <div class="text-right min-w-0">
                    <div class="text-sm text-gray-500 dark:text-gray-400">Next</div>
                    <div class="font-medium truncate overflow-hidden min-w-0">Part 2: The Mosaic Concept</div>
                </div>
                <div class="flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition">
                    <i class="fas fa-arrow-right text-lg" aria-hidden="true"></i>
                </div>
            </a>
        </div>
    </div>
</nav>

<!-- CTA Section -->
<section class="py-12 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Ready for Part 2?</h2>
        <p class="text-purple-100 dark:text-purple-200 mb-6 text-lg">
            In the next part, we'll dive into how Mosaic apps adapt to your journey using a Tokyo trip example.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/mosaic/adaptive-journeys"
               class="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg">
                <i class="fas fa-arrow-right mr-2" aria-hidden="true"></i>Continue to Part 2
            </a>
            <a href="/mosaic"
               class="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-full font-medium transition">
                <i class="fas fa-th mr-2" aria-hidden="true"></i>View Series Overview
            </a>
        </div>
    </div>
</section>