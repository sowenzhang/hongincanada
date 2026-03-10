<script>
    import { mosaicSeriesMetadata, mosaicSeriesParts } from '$lib/data/mosaicSeriesData';

    // Page metadata
    const pageData = {
        title: "Mosaic App Design Series: From App Stores to Adaptive App Flows | Hong in Canada",
        description: "A comprehensive 4-part series exploring how to design apps that work together seamlessly, adapting to user context and creating unified experiences across platforms. Learn about adaptive journeys, context engines, and the future of progressive web apps.",
        canonical: mosaicSeriesMetadata.canonical,
        ogImage: mosaicSeriesMetadata.ogImage
    };

    // Calculate total reading time
    const totalReadTime = mosaicSeriesParts.reduce((total, part) => {
        const minutes = parseInt(part.readTime.split(' ')[0]);
        return total + minutes;
    }, 0);
</script>

<svelte:head>
    <title>{pageData.title}</title>
    <meta name="description" content={pageData.description} />
    <meta name="keywords" content="app design, user experience, progressive web apps, PWA, app flows, mobile apps, software architecture, product design, adaptive interfaces, context-aware apps" />
    <meta name="author" content="Hong" />
    <link rel="canonical" href={pageData.canonical} />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article" />
    <meta property="og:title" content={pageData.title} />
    <meta property="og:description" content={pageData.description} />
    <meta property="og:image" content={pageData.ogImage} />
    <meta property="og:url" content={pageData.canonical} />
    <meta property="og:site_name" content="Hong in Canada" />
    <meta property="article:published_time" content="2025-09-12T00:00:00Z" />
    <meta property="article:modified_time" content="2025-09-13T00:00:00Z" />
    <meta property="article:author" content="Hong" />
    <meta property="article:section" content="Technology" />
    <meta property="article:tag" content="App Design" />
    <meta property="article:tag" content="User Experience" />
    <meta property="article:tag" content="Progressive Web Apps" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageData.title} />
    <meta name="twitter:description" content={pageData.description} />
    <meta name="twitter:image" content={pageData.ogImage} />
    <meta name="twitter:creator" content="@hongincanada" />

    <!-- Additional SEO -->
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="alternate" type="application/rss+xml" title="Hong in Canada RSS Feed" href="/rss.xml" />
</svelte:head>

<!-- Hero Section -->
<section class="relative py-20 md:py-22 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-indigo-900/20 pointer-events-none"></div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
            <div class="mb-6">
                <span class="bg-purple-500/10 text-purple-400 border border-purple-500/20 px-4 py-2 rounded-full text-sm font-medium">
                    <i class="fas fa-th mr-2" aria-hidden="true"></i>4-Part Article
                </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                From App Stores to <span class="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">App Flows</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                Why Mosaic Matters
            </h2>
            <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {mosaicSeriesMetadata.description}
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
                <a href="/mosaic/full-series"
                   class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition shadow-lg shadow-purple-600/25 font-medium">
                    <i class="fas fa-book-open mr-2" aria-hidden="true"></i>Read Full Series
                </a>
                <a href="/"
                   class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 px-6 py-3 rounded-full transition font-medium">
                    ← Back to Home
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Article Navigation -->
<section class="py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Browse by Part</h3>
            <p class="text-gray-600 dark:text-gray-400">This article is divided into 4 parts for better readability</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each mosaicSeriesParts as part, index}
                <article class="group rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-200 p-6">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                            {part.part}
                        </div>
                        <div>
                            <h4 class="font-bold text-lg text-gray-900 dark:text-white">{part.title}</h4>
                            <p class="text-sm text-gray-500 dark:text-gray-400">{part.readTime}</p>
                        </div>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 mb-4">
                        {part.description}
                    </p>
                    <a href="/mosaic/{part.slug}" class="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 font-medium text-sm transition-colors">
                        Read Part {part.part}
                        <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- Read All Parts Option -->
<section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-xl bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 p-8 text-center">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-book-open text-white text-xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Prefer to Read Everything at Once?</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-xl mx-auto">
                Get the complete Mosaic series in one continuous read with a floating table of contents.
            </p>
            <div class="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span><i class="fas fa-clock mr-1" aria-hidden="true"></i>{totalReadTime} min read</span>
                <span><i class="fas fa-list mr-1" aria-hidden="true"></i>{mosaicSeriesMetadata.totalParts} parts combined</span>
            </div>
            <div class="flex flex-wrap gap-4 justify-center">
                <a href="/mosaic/full-series"
                   class="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition font-medium shadow-lg">
                    <i class="fas fa-book-open mr-2" aria-hidden="true"></i>Read Full Series
                </a>
                <a href="/mosaic/the-problem-with-apps-today"
                   class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 px-8 py-3 rounded-full transition font-medium">
                    <i class="fas fa-play mr-2" aria-hidden="true"></i>Start with Part 1
                </a>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
                💡 <strong>Tip:</strong> The full series page includes a floating table of contents for easy navigation.
            </p>
        </div>
    </div>
</section>