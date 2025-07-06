<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

    // Props
    export let articleData;
    export let navigation;
    /** @type {Array<{id: string, title: string, level: number}>} */
    export let tableOfContents = [];

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
            "name": "How I Built MiniBreaks.io With AI Series",
            "url": "https://hongincanada.com/series"
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
                <a href="/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">Home</a>
                <i class="fas fa-chevron-right text-gray-400 dark:text-gray-500"></i>
                <a href="/series" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">AI Development Series</a>
                <i class="fas fa-chevron-right text-gray-400 dark:text-gray-500"></i>
                <span class="text-gray-600 dark:text-gray-400">Part {navigation.currentPart}</span>
            </div>
            <!-- Part Indicator -->
            <div class="hidden sm:block">
                <span class="bg-blue-500 dark:bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                    <a href="/series" class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        <i class="fas fa-arrow-left mr-2"></i>Back to Series
                    </a>
                    <span class="bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Part {navigation.currentPart} of {navigation.totalParts}
                    </span>
                </div>
            </div>
            <!-- Desktop: Just the back button since part indicator is in nav -->
            <div class="hidden sm:block mb-6">
                <a href="/series" class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i>Back to Series
                </a>
            </div>
        </div>

        <!-- Allow customization of header content -->
        <slot name="header">
            <h1 class="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white transition-colors">
                {articleData.title}
            </h1>

            <div class="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <span><i class="fas fa-calendar mr-2"></i>{articleData.publishDate}</span>
                <span><i class="fas fa-clock mr-2"></i>{articleData.readTime}</span>
                <span><i class="fas fa-user mr-2"></i>Hong</span>
            </div>

            <p class="text-xl text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                {articleData.description}
            </p>
        </slot>
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
                    class="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
                >
                    <i class="fas fa-list text-blue-600 dark:text-blue-400"></i>
                    <span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Table of Contents</span>
                    <span class="sm:hidden">TOC</span>
                    <i class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-gray-400"></i>
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
                    <i class="fas fa-sun text-yellow-500"></i>
                    <span class="hidden sm:inline">Light Mode</span>
                {:else}
                    <i class="fas fa-moon text-gray-600 dark:text-gray-400"></i>
                    <span class="hidden sm:inline">Dark Mode</span>
                {/if}
            </button>
        </div>
    </div>
</div>

<!-- Article Content -->
<main class="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen">
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
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        <nav class="space-y-3">
                            {#each tableOfContents as item}
                                <a href="#{item.id}"
                                   class="block text-sm {item.level === 1 ? 'font-medium text-gray-900 dark:text-white py-1' : 'text-gray-600 dark:text-gray-400 ml-4 py-0.5'} hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded px-2 hover:bg-blue-50 dark:hover:bg-blue-900/20">
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
                                    prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:text-lg
                                    prose-strong:text-gray-900 dark:prose-strong:text-white
                                    prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300 prose-a:transition-colors
                                    prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:font-medium
                                    prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20 prose-code:px-2 prose-code:py-1 prose-code:rounded
                                    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                                    prose-blockquote:border-blue-500 dark:prose-blockquote:border-blue-400 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/10
                                    prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                                    prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                    prose-h1:mb-8 prose-h2:mb-6 prose-h2:mt-12 prose-h3:mb-4 prose-h3:mt-8
                                    prose-p:mb-6 prose-ul:mb-6 prose-ol:mb-6
                                    [&_p]:text-gray-700 dark:[&_p]:text-gray-300
                                    [&_span]:text-gray-700 dark:[&_span]:text-gray-300
                                    [&_div]:text-gray-700 dark:[&_div]:text-gray-300
                                    [&_section]:scroll-mt-24
                                    [&_h1]:scroll-mt-24 [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_h4]:scroll-mt-24 [&_h5]:scroll-mt-24 [&_h6]:scroll-mt-24">

                            <!-- Main content slot -->
                            <slot />
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
        <div class="flex justify-between items-center">
            <!-- Previous Part -->
            {#if navigation.prevPart}
                <a href="/series/{navigation.prevPart.slug}"
                   class="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition group">
                    <div class="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition">
                        <i class="fas fa-arrow-left text-lg"></i>
                    </div>
                    <div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">Previous</div>
                        <div class="font-medium">Part {navigation.prevPart.number}: {navigation.prevPart.title}</div>
                    </div>
                </a>
            {:else}
                <div></div>
            {/if}

            <!-- Series Overview -->
            <a href="/series"
               class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg transition font-medium">
                <i class="fas fa-list mr-2"></i>View All Parts
            </a>

            <!-- Next Part -->
            {#if navigation.nextPart}
                <a href="/series/{navigation.nextPart.slug}"
                   class="flex items-center space-x-3 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition group">
                    <div class="text-right">
                        <div class="text-sm text-gray-500 dark:text-gray-400">Next</div>
                        <div class="font-medium">Part {navigation.nextPart.number}: {navigation.nextPart.title}</div>
                    </div>
                    <div class="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition">
                        <i class="fas fa-arrow-right text-lg"></i>
                    </div>
                </a>
            {:else}
                <div></div>
            {/if}
        </div>
    </div>
</nav>

<!-- CTA Section -->
<slot name="cta">
    <section class="py-12 bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-600 dark:to-emerald-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-4">Enjoying the Series?</h2>
            <p class="text-blue-100 dark:text-blue-200 mb-6 text-lg">
                Share your thoughts or questions about AI-powered development.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:me@hongincanada.com?subject=AI Development Series - Part {navigation.currentPart} Feedback"
                   class="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg">
                    <i class="fas fa-envelope mr-2"></i>Send Feedback
                </a>
                <a href="https://www.linkedin.com/in/keepsrunning/" target="_blank"
                   class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-full font-medium transition">
                    <i class="fab fa-linkedin mr-2"></i>Discuss on LinkedIn
                </a>
            </div>
        </div>
    </section>
</slot>
