<script>
    // Page metadata
    const pageData = {
        title: "Mosaic, Part 4: Near Future and Beyond - Hong in Canada",
        description: "Challenges and opportunities for users and developers. The open-source component library vision.",
        canonical: "https://hongincanada.com/mosaic/near-future-and-beyond",
        ogImage: "https://hongincanada.com/mosaic-series/user-flow.jpg"
    };
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

<!-- Article Header -->
<section class="hero-pattern py-16 relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
            <div class="mb-6">
                <a href="/mosaic" class="text-purple-600 hover:text-purple-700 font-medium">
                    ← Back to Mosaic Series
                </a>
            </div>
            <div class="mb-4">
                <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    <i class="fas fa-th mr-2"></i>Part 4 of 4
                </span>
            </div>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Near Future and Beyond
            </h1>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                Challenges and opportunities for users and developers. The open-source component library vision.
            </p>
        </div>
    </div>
</section>

<!-- Article Content -->
<article class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="prose prose-lg mx-auto">
            <!-- Content will be added here -->
            <div class="bg-gray-50 rounded-xl p-8 text-center">
                <i class="fas fa-edit text-gray-400 text-4xl mb-4"></i>
                <h3 class="text-xl font-bold text-gray-600 mb-2">Content Coming Soon</h3>
                <p class="text-gray-500">
                    This article is currently being written. Check back soon for the full content!
                </p>
            </div>
        </div>
    </div>
</article>

<!-- Navigation -->
<section class="py-16 bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
            <div class="text-center">
                <div class="text-sm text-gray-500 mb-1">Previous Article</div>
                <a href="/mosaic/app-flow-under-the-hood" class="flex items-center text-purple-600 hover:text-purple-700 font-medium">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Part 3: Under the Hood
                </a>
            </div>
            <div class="text-center">
                <a href="/mosaic" class="text-purple-600 hover:text-purple-700 font-medium">
                    <i class="fas fa-th mr-2"></i>
                    Back to Series Overview
                </a>
            </div>
        </div>
    </div>
</section>