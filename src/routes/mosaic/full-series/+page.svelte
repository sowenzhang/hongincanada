<script lang="ts">
    import { mosaicSeriesMetadata } from '$lib/data/mosaicSeriesData';
    import { onMount } from 'svelte';

    // Page metadata
    const pageData = {
        title: "Mosaic: Complete Series - Rethinking App Design for the Multi-App Era",
        description: `${mosaicSeriesMetadata.description} Read the complete 4-part series in one continuous article.`,
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

            // Find active section
            const sections = fullTOC.map(item => document.getElementById(item.id)).filter(Boolean);
            const currentSection = sections.find(section => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
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
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
</script>

<svelte:head>
    <title>{pageData.title}</title>
    <meta name="description" content={pageData.description} />
    <link rel="canonical" href={pageData.canonical} />
    <meta property="og:title" content={pageData.title} />
    <meta property="og:description" content={pageData.description} />
    <meta property="og:image" content={pageData.ogImage} />
    <meta property="og:url" content={pageData.canonical} />
    <meta name="twitter:title" content={pageData.title} />
    <meta name="twitter:description" content={pageData.description} />
    <meta name="twitter:image" content={pageData.ogImage} />
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

            <!-- Include Part 1 content here - you would import or copy the content from part 1 -->
            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-xl leading-relaxed mb-8">Think about the last time you planned a trip.</p>
                <!-- This would continue with the full Part 1 content -->
                <p class="text-gray-600 italic">
                    [Part 1 content would be inserted here - the full content from the individual part pages]
                </p>
            </div>
        </section>

        <!-- Part separators and content for Parts 2, 3, 4 would follow the same pattern -->
        <section id="part-2" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 2: Adaptive Journeys in App Flows</h2>
                <p class="text-gray-600 dark:text-gray-400">7 min read • September 13, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-gray-600 italic">
                    [Part 2 content would be inserted here]
                </p>
            </div>
        </section>

        <section id="part-3" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 3: Under the Hood of App Flows</h2>
                <p class="text-gray-600 dark:text-gray-400">15 min read • September 13, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-gray-600 italic">
                    [Part 3 content would be inserted here]
                </p>
            </div>
        </section>

        <section id="part-4" class="mb-16">
            <div class="border-l-4 border-purple-500 pl-6 mb-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Part 4: The Near Future and Beyond</h2>
                <p class="text-gray-600 dark:text-gray-400">8 min read • September 13, 2025</p>
            </div>

            <div class="prose prose-lg dark:prose-invert max-w-none">
                <p class="text-gray-600 italic">
                    [Part 4 content would be inserted here]
                </p>
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