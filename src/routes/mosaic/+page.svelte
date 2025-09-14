<script>
    // Page metadata
    const pageData = {
        title: "From App Stores to App Flows: Why Mosaic Matters - Hong in Canada",
        description: "For years, our digital lives have revolved around app stores. We search, download, install, and juggle dozens of apps: each built as a siloed product. But our lives don't happen in silos. They happen in flows. Mosaic is a vision that replaces app stores with app flows.",
        canonical: "https://hongincanada.com/mosaic",
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
                For years, our digital lives have revolved around app stores. We search, download, install, and juggle dozens of apps: each built as a siloed product. But our lives don't happen in silos. They happen in flows. Mosaic is a vision that replaces app stores with app flows.
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
            <!-- Part 1 -->
            <article class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        1
                    </div>
                    <div>
                        <h4 class="font-bold text-lg">The Problem with Apps Today</h4>
                        <p class="text-sm text-gray-500">5-7 min read</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    Why app stores and siloed apps don't fit the modern user journey. Introduce the Mosaic concept at a high level.
                </p>
                <a href="/mosaic/the-problem-with-apps-today" class="text-purple-600 hover:text-purple-700 font-medium">
                    Read Part 1 →
                </a>
            </article>

            <!-- Part 2 -->
            <article class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-purple-400 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        2
                    </div>
                    <div>
                        <h4 class="font-bold text-lg">The Mosaic Concept: Adaptive Journeys</h4>
                        <p class="text-sm text-gray-500">Coming Soon</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    Deep dive on "tiles," adaptive layouts, self-updating flows. Featuring a detailed Tokyo trip example.
                </p>
                <a href="/mosaic/adaptive-journeys" class="text-purple-600 hover:text-purple-700 font-medium">
                    Read Part 2 →
                </a>
            </article>

            <!-- Part 3 -->
            <article class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-purple-400 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        3
                    </div>
                    <div>
                        <h4 class="font-bold text-lg">Under the Hood: Context Engine, Registry, Composer</h4>
                        <p class="text-sm text-gray-500">Coming Soon</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    Explain the building blocks and why this differs from MCP/agents. Discuss security, version locking, rollbacks.
                </p>
                <a href="/mosaic/app-flow-under-the-hood" class="text-purple-600 hover:text-purple-700 font-medium">
                    Read Part 3 →
                </a>
            </article>

            <!-- Part 4 -->
            <article class="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div class="flex items-center mb-4">
                    <div class="w-10 h-10 bg-purple-400 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        4
                    </div>
                    <div>
                        <h4 class="font-bold text-lg">Near Future & Beyond</h4>
                        <p class="text-sm text-gray-500">Coming Soon</p>
                    </div>
                </div>
                <p class="text-gray-600 mb-4">
                    Why PWAs are the natural first step. The long-term OS-level vision. Examples: travel, health, learning.
                </p>
                <a href="/mosaic/near-future-and-beyond" class="text-purple-600 hover:text-purple-700 font-medium">
                    Read Part 4 →
                </a>
            </article>
        </div>
    </div>
</section>

<!-- About the Author -->
<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex flex-col md:flex-row items-center">
                <div class="md:w-1/4 mb-6 md:mb-0">
                    <div class="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full overflow-hidden mx-auto">
                        <img src="/profile.png" alt="Hong - Engineering Manager" class="w-full h-full object-cover">
                    </div>
                </div>
                <div class="md:w-3/4 md:pl-8 text-center md:text-left">
                    <h4 class="text-xl font-bold mb-2">About the Author</h4>
                    <p class="text-gray-600 mb-4">
                        Hong is an Engineering Manager with a background in Human-Computer Interaction. He's passionate about building products that people love and exploring new paradigms for digital experiences.
                    </p>
                    <a href="/" class="text-purple-600 hover:text-purple-700 font-medium">
                        Learn more about Hong →
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>