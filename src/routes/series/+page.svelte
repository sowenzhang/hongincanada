<script>
    import { seriesMetadata, seriesParts } from '$lib/data/seriesData';

    const seriesData = {
        title: seriesMetadata.title,
        description: seriesMetadata.description,
        canonical: seriesMetadata.canonical,
        ogImage: seriesMetadata.ogImage
    };

    const totalReadTime = seriesParts.reduce((total, part) => {
        const minutes = parseInt(part.readTime.split(' ')[0]);
        return total + minutes;
    }, 0);
</script>

<svelte:head>
    <title>{seriesData.title}</title>
    <meta name="description" content={seriesData.description} />
    <link rel="canonical" href={seriesData.canonical} />
    <meta property="og:title" content={seriesData.title} />
    <meta property="og:description" content={seriesData.description} />
    <meta property="og:image" content={seriesData.ogImage} />
    <meta property="og:url" content={seriesData.canonical} />
    <meta name="twitter:title" content={seriesData.title} />
    <meta name="twitter:description" content={seriesData.description} />
    <meta name="twitter:image" content={seriesData.ogImage} />

    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "How I Built a full website With AI - Series",
        "description": "A comprehensive series on building a full website using AI tools",
        "url": "https://hongincanada.com/series",
        "author": {
            "@type": "Person",
            "name": "Hong",
            "url": "https://hongincanada.com"
        },
        "blogPost": [
            ${seriesParts.map(part => `{
                "@type": "BlogPosting",
                "headline": "${part.title}",
                "description": "${part.description}",
                "url": "https://hongincanada.com/series/${part.slug}",
                "position": ${part.part}
            }`).join(',')}
        ]
    }
    </script>`}
</svelte:head>

<!-- Obsolete Disclaimer Banner -->
<div class="sticky top-16 z-40 bg-amber-50/95 dark:bg-amber-900/30 border-b border-amber-200 dark:border-amber-700/40 backdrop-blur-sm">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex gap-3">
        <i class="fas fa-triangle-exclamation mt-0.5 text-amber-500 flex-shrink-0" aria-hidden="true"></i>
        <div class="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
            <strong>Note: This series is no longer current.</strong> Many of the tools and services referenced here — including certain HuggingFace models and third-party integrations — are no longer available or have changed significantly. It's kept here as a record of a real learning journey. There are better ways to build a website with AI today, but the core takeaway probably remains the same: <em>it's possible, but it's also not as straightforward as people say.</em>
        </div>
    </div>
</div>

<!-- Hero Section -->
<section class="relative py-20 md:py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none"></div>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div class="mb-6">
            <span class="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-medium">
                <i class="fas fa-robot mr-2" aria-hidden="true"></i>AI Development Series — {seriesParts.length} Parts
            </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            How I Built <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MiniBreaks.io</span>
            <span class="block mt-2">With AI</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A comprehensive 10-part series documenting my journey of building a complete website using AI tools.
            Learn from real-world experience, challenges, and practical solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/series/full-series"
               class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition font-medium shadow-lg shadow-blue-600/25">
                <i class="fas fa-book-open mr-2" aria-hidden="true"></i>Read Full Series
            </a>
            <a href="https://minibreaks.io" target="_blank" rel="noopener"
               class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full transition font-medium">
                View MiniBreaks.io <i class="fas fa-external-link-alt ml-2" aria-hidden="true"></i>
            </a>
        </div>
    </div>
</section>

<!-- Read All at Once -->
<section class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-8 text-center">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="fas fa-book-open text-white text-xl" aria-hidden="true"></i>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">Prefer to Read Everything at Once?</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 max-w-xl mx-auto">
                Get all 10 parts in one continuous read with a floating table of contents.
            </p>
            <div class="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
                <span><i class="fas fa-clock mr-1" aria-hidden="true"></i>{totalReadTime} min read</span>
                <span><i class="fas fa-list mr-1" aria-hidden="true"></i>{seriesParts.length} parts combined</span>
            </div>
            <a href="/series/full-series"
               class="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition font-medium shadow-lg">
                <i class="fas fa-book-open mr-2" aria-hidden="true"></i>Read Full Series
            </a>
        </div>
    </div>
</section>

<!-- Series Content -->
<section id="series-content" class="py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Browse by Part</h2>
            <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Follow along step by step — from initial concept to final deployment.
            </p>
        </div>

        <div class="grid gap-4">
            {#each seriesParts as part}
                <article class="group rounded-xl border border-gray-200 dark:border-gray-700/50 bg-white dark:bg-gray-800/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 overflow-hidden">
                    <div class="p-6">
                        <div class="flex flex-nowrap min-w-0 items-center gap-3 mb-3">
                            <span class="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                                Part {part.part}
                            </span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                                <i class="fas fa-clock mr-1" aria-hidden="true"></i>{part.readTime}
                            </span>
                            {#if part.status === 'published'}
                                <span class="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                                    Published
                                </span>
                            {:else}
                                <span class="bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
                                    Coming Soon
                                </span>
                            {/if}
                        </div>

                        <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white leading-tight">
                            {#if part.status === 'published'}
                                <a href="/series/{part.slug}" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {part.title}
                                </a>
                            {:else}
                                {part.title}
                            {/if}
                        </h3>

                        <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {part.description}
                        </p>

                        {#if part.status === 'published'}
                            <a href="/series/{part.slug}"
                               class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors text-sm">
                                Read Part {part.part}
                                <i class="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true"></i>
                            </a>
                        {:else}
                            <span class="inline-flex items-center text-gray-400 font-medium text-sm">
                                Coming Soon
                            </span>
                        {/if}
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Start Your AI Journey?</h2>
        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Learn from both successes and failures along the way.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/series/part-1-can-you-build-with-ai"
               class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition shadow-lg shadow-blue-600/25">
                <i class="fas fa-play mr-2" aria-hidden="true"></i>Start with Part 1
            </a>
            <a href="/series/full-series"
               class="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-full font-medium transition">
                <i class="fas fa-book-open mr-2" aria-hidden="true"></i>Read All Parts
            </a>
        </div>
    </div>
</section>
