<script>
    // Series metadata
    const seriesData = {
        title: "How I Built MiniBreaks.io With AI Series - Hong in Canada",
        description: "A comprehensive 10-part series on building a full website using AI tools. Learn from real-world experience, challenges, and solutions.",
        canonical: "https://hongincanada.com/series",
        ogImage: "https://hongincanada.com/profile.png"
    };

    // Series parts data
    const seriesParts = [
        {
            part: 1,
            title: "Can You Really Build a Website with AI? (Spoiler: Yes, But…)",
            description: "Set expectations about what AI can and can't do. Share your personal journey, highlight how it's not fully magical, but absolutely empowering when used correctly.",
            readTime: "8 min read",
            status: "published",
            slug: "part-1-can-you-build-with-ai"
        },
        {
            part: 2,
            title: "Why I Wanted to Use AI",
            description: "Talk about your motivation: saving time, improving quality, and treating AI as a partner. Encourage readers to reflect on what they want AI to help them with, and write it down as homework.",
            readTime: "6 min read",
            status: "published",
            slug: "part-2-why-use-ai"
        },
        {
            part: 3,
            title: "Choosing Your Tools & Setting Up",
            description: "Introduce the minimal set of tools needed: ChatGPT, GitHub Copilot/Cursor, and Hugging Face. Walk readers through creating a GitHub account and setting up their first repository, even if they're non-engineers.",
            readTime: "12 min read",
            status: "published",
            slug: "part-3-tools-and-setup"
        },
        {
            part: 4,
            title: "Crafting Your Idea & MVP with AI",
            description: "Guide readers through brainstorming ideas with AI and defining a Minimum Viable Product (MVP). Show how to prompt AI to focus on what matters most. Homework: Write down your MVP in one paragraph.",
            readTime: "10 min read",
            status: "coming-soon",
            slug: "part-4-crafting-idea-mvp"
        },
        {
            part: 5,
            title: "Designing Your UI/UX with AI",
            description: "Explore how to use AI for wireframing, generating page layouts, and writing user-facing copy. Homework: Draw or describe your main page's layout based on AI suggestions.",
            readTime: "12 min read",
            status: "coming-soon",
            slug: "part-5-designing-ui-ux"
        },
        {
            part: 6,
            title: "Building the Frontend with AI",
            description: "Show how to use AI + Copilot/Cursor to scaffold and write clean frontend code. Explain the concepts in plain language. Homework: Push your first HTML/CSS page to GitHub.",
            readTime: "15 min read",
            status: "coming-soon",
            slug: "part-6-building-frontend"
        },
        {
            part: 7,
            title: "Adding the Backend & Database with AI",
            description: "Explain how AI can help generate a simple backend and connect to a database. Keep it light and friendly for non-engineers. Homework: Add one backend API endpoint.",
            readTime: "12 min read",
            status: "coming-soon",
            slug: "part-7-backend-database"
        },
        {
            part: 8,
            title: "Testing, Debugging & Improving with AI",
            description: "Teach readers how to ask AI to write tests, debug issues, and improve their code iteratively. Homework: Fix one bug or add one improvement to your site.",
            readTime: "11 min read",
            status: "coming-soon",
            slug: "part-8-testing-debugging"
        },
        {
            part: 9,
            title: "Deploying & Hosting Your Website",
            description: "Show how to deploy the site for free or cheap using modern hosting services (Netlify, Vercel, or similar). Homework: Share your live URL!",
            readTime: "9 min read",
            status: "coming-soon",
            slug: "part-9-deploying-hosting"
        },
        {
            part: 10,
            title: "Reflecting & Next Steps",
            description: "Encourage readers to reflect on what worked, what didn't, and how they can keep learning and building. Offer a downloadable 'certificate of completion' or badge.",
            readTime: "7 min read",
            status: "coming-soon",
            slug: "part-10-reflecting-next-steps"
        }
    ];
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

<!-- Series Overview -->
<section class="py-16 bg-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div class="text-center p-6 bg-blue-50 rounded-xl">
                <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-brain text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">AI-Powered Development</h3>
                <p class="text-gray-600">Learn how to leverage AI tools effectively for web development and avoid common pitfalls.</p>
            </div>
            <div class="text-center p-6 bg-emerald-50 rounded-xl">
                <div class="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-code text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">Practical Implementation</h3>
                <p class="text-gray-600">Real code examples, decision-making processes, and hands-on development techniques.</p>
            </div>
            <div class="text-center p-6 bg-purple-50 rounded-xl">
                <div class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-rocket text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-bold mb-2">End-to-End Process</h3>
                <p class="text-gray-600">From initial planning to production deployment, covering the complete development lifecycle.</p>
            </div>
        </div>
    </div>
</section>

<!-- Series Content -->
<section id="series-content" class="py-16 bg-gradient-to-r from-blue-50 to-emerald-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Series Contents</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
            <p class="text-gray-600 mt-6">Follow along as I document every step of building MiniBreaks.io with AI assistance.</p>
        </div>

        <div class="space-y-6">
            {#each seriesParts as part}
                <article class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div class="p-6">
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center space-x-3">
                                <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Part {part.part}
                                </span>
                                {#if part.status === 'published'}
                                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                                        <i class="fas fa-check mr-1"></i>Published
                                    </span>
                                {:else}
                                    <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">
                                        <i class="fas fa-clock mr-1"></i>Coming Soon
                                    </span>
                                {/if}
                            </div>
                            <span class="text-gray-500 text-sm">
                                <i class="fas fa-clock mr-1"></i>{part.readTime}
                            </span>
                        </div>

                        <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3">{part.title}</h3>
                        <p class="text-gray-600 mb-4">{part.description}</p>

                        <div class="flex items-center justify-between">
                            {#if part.status === 'published'}
                                <a href="/series/{part.slug}"
                                   class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition font-medium inline-flex items-center">
                                    Read Part {part.part} <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            {:else}
                                <button disabled
                                        class="bg-gray-300 text-gray-500 px-6 py-2 rounded-full font-medium cursor-not-allowed">
                                    Coming Soon
                                </button>
                            {/if}

                            <!-- Progress indicator for published parts -->
                            {#if part.status === 'published'}
                                <div class="text-green-600">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                            {/if}
                        </div>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-16 bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Want to Follow Along?</h2>
        <p class="text-blue-100 mb-8 text-lg">
            Get notified when new parts are published and join the discussion about AI-powered development.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:me@hongincanada.com?subject=AI Development Series Updates"
               class="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
                <i class="fas fa-envelope mr-2"></i>Get Email Updates
            </a>
            <a href="https://www.linkedin.com/in/keepsrunning/" target="_blank"
               class="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition">
                <i class="fab fa-linkedin mr-2"></i>Connect on LinkedIn
            </a>
        </div>
    </div>
</section>
