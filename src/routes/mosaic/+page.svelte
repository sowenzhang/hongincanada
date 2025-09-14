<script>
    import { mosaicSeriesMetadata, mosaicSeriesParts } from '$lib/data/mosaicSeriesData';

    // Page metadata
    const pageData = {
        title: "From App Stores to App Flows: Why Mosaic Matters - Hong in Canada",
        description: mosaicSeriesMetadata.description,
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
    <link rel="canonical" href={pageData.canonical} />
    <meta property="og:title" content={pageData.title} />
    <meta property="og:description" content={pageData.description} />
    <meta property="og:image" content={pageData.ogImage} />
    <meta property="og:url" content={pageData.canonical} />
    <meta name="twitter:title" content={pageData.title} />
    <meta name="twitter:description" content={pageData.description} />
    <meta name="twitter:image" content={pageData.ogImage} />
</svelte:head>

<!-- Hero Section -->
<section class="hero-pattern py-20 md:py-22 relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <div class="mb-6">
                <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    <i class="fas fa-th mr-2"></i>4-Part Article
                </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                From App Stores to <span class="gradient-text">App Flows</span>
            </h1>
            <h2 class="text-2xl md:text-3xl text-gray-600 mb-8 font-light">
                Why Mosaic Matters
            </h2>
            <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {mosaicSeriesMetadata.description}
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
                <a href="/mosaic/part-1"
                   class="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition">
                    Start Reading Part 1
                </a>
                <a href="/"
                   class="border border-purple-500 text-purple-500 hover:bg-purple-50 px-6 py-3 rounded-full transition">
                    ← Back to Home
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Article Navigation -->
<section class="py-8 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h3 class="text-2xl font-bold mb-4">Article Structure</h3>
            <p class="text-gray-600">This article is divided into 4 parts for better readability</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {#each mosaicSeriesParts as part, index}
                <article class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-purple-{part.status === 'published' ? '500' : '400'} text-white rounded-full flex items-center justify-center font-bold mr-4">
                            {part.part}
                        </div>
                        <div>
                            <h4 class="font-bold text-lg">{part.title}</h4>
                            <p class="text-sm text-gray-500">{part.status === 'published' ? part.readTime : 'Published'}</p>
                        </div>
                    </div>
                    <p class="text-gray-600 mb-4">
                        {part.description}
                    </p>
                    <a href="/mosaic/{part.slug}" class="text-purple-600 hover:text-purple-700 font-medium">
                        Read Part {part.part} →
                    </a>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- Read All Parts Option -->
<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-purple-200 dark:border-purple-800">
            <div class="text-center">
                <div class="mb-6">
                    <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas fa-book-open text-white text-2xl"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Prefer to Read Everything at Once?</h3>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">
                        Get the complete Mosaic series in one continuous read. Perfect for deep dives and comprehensive understanding.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-sm">
                    <div class="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
                        <div class="flex items-center">
                            <i class="fas fa-clock mr-2"></i>
                            <span>{totalReadTime} min read</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-list mr-2"></i>
                            <span>{mosaicSeriesMetadata.totalParts} parts combined</span>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-calendar mr-2"></i>
                            <span>Updated Sept 13, 2025</span>
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap gap-4 justify-center">
                    <a href="/mosaic/full-series"
                       class="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full transition font-medium shadow-lg">
                        <i class="fas fa-book-open mr-2"></i>Read Full Series
                    </a>
                    <a href="/mosaic/the-problem-with-apps-today"
                       class="border border-purple-500 text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 px-8 py-3 rounded-full transition font-medium">
                        <i class="fas fa-play mr-2"></i>Start with Part 1
                    </a>
                </div>

                <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    💡 <strong>Tip:</strong> The full series page includes a floating table of contents for easy navigation between sections.
                </p>
            </div>
        </div>
    </div>
</section>