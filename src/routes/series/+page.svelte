<script>
    import { seriesMetadata, seriesParts } from '$lib/data/seriesData';

    // Use centralized series metadata
    const seriesData = {
        title: seriesMetadata.title,
        description: seriesMetadata.description,
        canonical: seriesMetadata.canonical,
        ogImage: seriesMetadata.ogImage
    };
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

    <!-- Structured Data for Article Series -->
    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "How I Built MiniBreaks.io With AI Series",
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

<!-- Hero Section -->
<section class="hero-pattern py-20 md:py-24 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="mb-6">
            <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <i class="fas fa-robot mr-2"></i>AI Development Series
            </span>
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How I Built <span class="gradient-text">MiniBreaks.io</span>
            <span class="block">With AI</span>
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A comprehensive 10-part series documenting my journey of building a complete website using AI tools.
            Learn from real-world experience, challenges, and practical solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#series-content"
               class="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition font-medium">
                Start Reading
            </a>
            <a href="https://minibreaks.io" target="_blank"
               class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-full transition font-medium">
                View MiniBreaks.io <i class="fas fa-external-link-alt ml-2"></i>
            </a>
        </div>
    </div>
</section>

<!-- Series Content -->
<section id="series-content" class="py-16 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Series Overview</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Follow along as I document every step of building MiniBreaks.io with AI assistance.
                From initial concept to final deployment, learn the real challenges and solutions.
            </p>
        </div>

        <div class="grid gap-6">
            {#each seriesParts as part}
                <article class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                    Part {part.part}
                                </span>
                                <span class="text-sm text-gray-500">
                                    <i class="fas fa-clock mr-1"></i>{part.readTime}
                                </span>
                                {#if part.status === 'published'}
                                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                                        <i class="fas fa-check mr-1"></i>Published
                                    </span>
                                {:else}
                                    <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                                        <i class="fas fa-clock mr-1"></i>Coming Soon
                                    </span>
                                {/if}
                            </div>
                        </div>

                        <h3 class="text-xl font-bold mb-3 text-gray-900 leading-tight">
                            {#if part.status === 'published'}
                                <a href="/series/{part.slug}" class="hover:text-blue-600 transition-colors">
                                    {part.title}
                                </a>
                            {:else}
                                {part.title}
                            {/if}
                        </h3>

                        <p class="text-gray-600 mb-4 leading-relaxed">
                            {part.description}
                        </p>

                        {#if part.status === 'published'}
                            <a href="/series/{part.slug}"
                               class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                Read Part {part.part}
                                <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        {:else}
                            <span class="inline-flex items-center text-gray-400 font-medium">
                                Coming Soon
                                <i class="fas fa-hourglass-half ml-2"></i>
                            </span>
                        {/if}
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join me as I share the complete process of building a real website with AI tools.
            Learn from both successes and failures along the way.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/series/part-1-can-you-build-with-ai"
               class="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition shadow-lg">
                <i class="fas fa-play mr-2"></i>Start with Part 1
            </a>
            <a href="mailto:me@hongincanada.com?subject=AI Development Series Questions"
               class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition">
                <i class="fas fa-envelope mr-2"></i>Ask Questions
            </a>
        </div>
    </div>
</section>

<!-- <style>
    .hero-pattern {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    }

    .gradient-text {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
</style> -->
