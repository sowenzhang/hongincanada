<script>
    // Page metadata
    const pageData = {
        title: "Home - Hong in Canada",
        description: "Engineering Manager with a passion for building products that people love. Background HCI with Product Mindset.",
        canonical: "https://www.hongincanada.com",
        ogImage: "https://www.hongincanada.com/profile.png"
    };

    function generateEmailLink() {
        const email = 'me@hongincanada.com';
        return `mailto:${email}`;
    }

    function getEmailDisplay() {
        return 'me@hongincanada.com';
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

    <!-- Structured Data -->
    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Hong",
        "jobTitle": "Engineering Manager",
        "description": "Engineering Manager with a passion for building products that people love. Background HCI with Product Mindset.",
        "url": "https://www.hongincanada.com",
        "sameAs": [
            "https://www.linkedin.com/in/keepsrunning/",
            "https://www.strava.com/athletes/6051008"
        ],
        "alumniOf": {
            "@type": "Organization",
            "name": "University of Manitoba"
        },
        "knowsAbout": ["Software Engineering", "Product Management", "Human-Computer Interaction", "Table Tennis", "Running"],
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        }
    }
    </script>`}
</svelte:head>

<!-- Main page content migrated from Index.cshtml -->

<!-- Hero Section -->
<section class="hero-pattern py-12 md:py-16 relative overflow-hidden" itemscope itemtype="https://schema.org/Person">
    <!-- Subtle background image -->
    <!-- <div class="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img src="/profile.png" alt="" class="h-full object-contain" loading="lazy">
    </div> -->

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10">
        <!-- Header with Stats -->
        <div class="text-center mb-8">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                <span class="whitespace-nowrap">Hello, I'm <span class="gradient-text" itemprop="name">Hong</span></span>
            </h1>
            <p class="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-4" itemprop="description">
                <span itemprop="jobTitle">Engineering Manager</span> building products that people love.
                Background in <span itemprop="knowsAbout">HCI</span> with Product Mindset.
            </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid md:grid-cols-2 gap-4 mb-6">
            <!-- AI Series Card -->
            <a href="/series" class="block bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-emerald-200 group">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-robot text-white text-lg"></i>
                        </div>
                        <span class="bg-emerald-200 text-emerald-900 px-2 py-1 rounded-full text-xs font-bold">
                            10 PARTS
                        </span>
                    </div>
                    <i class="fas fa-arrow-right text-emerald-600 group-hover:translate-x-1 transition"></i>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 text-lg leading-tight">How I Built MiniBreaks.io With AI</h3>
                <p class="text-sm text-gray-700 mb-3">Real-world journey of building a complete website using AI assistance</p>
                <div class="flex items-center justify-between">
                    <span class="text-emerald-700 font-semibold text-sm">Read Series →</span>
                    <span class="text-xs text-gray-600">~ 45 min read</span>
                </div>
            </a>

            <!-- Mosaic Article Card -->
            <a href="/mosaic" class="block bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-purple-200 group">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-th text-white text-lg"></i>
                        </div>
                        <span class="bg-purple-200 text-purple-900 px-2 py-1 rounded-full text-xs font-bold">
                            NEW
                        </span>
                    </div>
                    <i class="fas fa-arrow-right text-purple-600 group-hover:translate-x-1 transition"></i>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 text-lg leading-tight">Why Mosaic Matters</h3>
                <p class="text-sm text-gray-700 mb-3">A vision that replaces app stores with seamless app flows</p>
                <div class="flex items-center justify-between">
                    <span class="text-purple-700 font-semibold text-sm">Read Article →</span>
                    <span class="text-xs text-gray-600">~ 20 min read</span>
                </div>
            </a>

            <!-- Other Writing Card -->
            <!-- <a href="#writing" class="block bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-5 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-orange-200 group">
                <div class="flex items-center justify-between mb-3">
                    <div class="flex items-center gap-2">
                        <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <i class="fas fa-pen-fancy text-white text-lg"></i>
                        </div>
                        <span class="bg-orange-200 text-orange-900 px-2 py-1 rounded-full text-xs font-bold">
                            MORE
                        </span>
                    </div>
                    <i class="fas fa-arrow-down text-orange-600 group-hover:translate-y-1 transition"></i>
                </div>
                <h3 class="font-bold text-gray-900 mb-2 text-lg leading-tight">More Writing</h3>
                <p class="text-sm text-gray-700 mb-3">Engineering insights, product thoughts, and life reflections</p>
                <div class="flex items-center justify-between">
                    <span class="text-orange-700 font-semibold text-sm">Explore All →</span>
                    <span class="text-xs text-gray-600">14 articles</span>
                </div>
            </a> -->
        </div>

        <!-- Live Websites Section -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-5 shadow-lg border-2 border-blue-100">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-2">
                    <i class="fas fa-rocket text-blue-500 text-xl"></i>
                    <h3 class="text-lg font-bold text-gray-900">Live Websites</h3>
                    <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <i class="fas fa-circle text-green-500 text-[6px]"></i> ACTIVE
                    </span>
                </div>
                <a href="#projects" class="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                    View all projects <i class="fas fa-arrow-down text-xs"></i>
                </a>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <!-- Minibreaks.io -->
                <a href="https://minibreaks.io" target="_blank"
                   class="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-4 hover:from-blue-100 hover:to-blue-200 transition group border border-blue-200">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <i class="fas fa-spa text-white text-xl"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-bold text-gray-900">Minibreaks.io</span>
                            <i class="fas fa-external-link-alt text-blue-500 text-xs opacity-0 group-hover:opacity-100 transition"></i>
                        </div>
                        <p class="text-xs text-gray-600 mb-1">Mental health breaks in your workplace</p>
                        <div class="flex gap-1">
                            <span class="bg-blue-200 text-blue-800 px-2 py-0.5 rounded text-[10px] font-medium">Mental Health</span>
                            <span class="bg-green-200 text-green-800 px-2 py-0.5 rounded text-[10px] font-medium">Fun</span>
                        </div>
                    </div>
                </a>

                <!-- NearbyGame.com -->
                <a href="https://nearbygame.com" target="_blank"
                   class="flex items-center gap-3 bg-gradient-to-r from-teal-50 to-cyan-100 rounded-lg p-4 hover:from-teal-100 hover:to-cyan-200 transition group border border-teal-200">
                    <div class="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <i class="fas fa-location-dot text-white text-xl"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-bold text-gray-900">NearbyGame.com</span>
                            <i class="fas fa-external-link-alt text-teal-500 text-xs opacity-0 group-hover:opacity-100 transition"></i>
                        </div>
                        <p class="text-xs text-gray-600 mb-1">Discover local games near you</p>
                        <div class="flex gap-1">
                            <span class="bg-teal-200 text-teal-800 px-2 py-0.5 rounded text-[10px] font-medium">Location</span>
                            <span class="bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded text-[10px] font-medium">Community</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="py-10 bg-white" itemscope itemtype="https://schema.org/AboutPage">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
        </div>
        <div class="flex flex-col md:flex-row items-top">
            <div class="md:w-1/3 mb-8 md:mb-0 flex flex-col items-center space-y-4">
                <div class="w-48 h-48 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full overflow-hidden shadow-lg">
                    <img src="/melody.jpg" loading="lazy" alt="Melody - Hong's cat" class="w-full h-full object-cover">
                </div>
                <div class="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full overflow-hidden shadow-lg">
                    <img src="/otto.jpg" loading="lazy" alt="Otto - Hong's cat" class="w-full h-full object-cover">
                </div>
                <div class="w-48 h-[22rem] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full overflow-hidden shadow-lg">
                    <img src="/AI-me-and-otto.jpg" loading="lazy" alt="Hong and Otto together" class="w-full h-full object-cover">
                </div>
            </div>
            <div class="md:w-2/3 md:pl-12" itemprop="about">
                <h3 class="text-2xl font-bold mb-6">Engineering Manager & Product Builder</h3>
                <p class="text-gray-600 mb-6">
                    With a background in <strong>Human-Computer Interaction (HCI)</strong>, I bridge the gap between technology and
                    people.
                    I'm passionate about creating intuitive, user-centered products that solve real problems.
                </p>
                <p class="text-gray-600 mb-6">
                    As an <strong>Engineering Manager</strong>, I lead teams to build scalable, high-quality software while fostering
                    a culture of collaboration, continuous learning, and innovation.
                </p>
                <div class="mb-8">
                    <h4 class="font-bold mb-4">My Interests</h4>
                    <div class="flex flex-wrap gap-3">
                        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Running</span>
                        <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">Table Tennis</span>
                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Cats</span>
                        <span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">UX Design</span>
                        <span class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Product Strategy</span>
                        <span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                            Team
                            Leadership
                        </span>
                    </div>
                </div>
                <div>
                    <h4 class="font-bold mb-4">My Journey</h4>
                    <div class="relative">
                        <!-- Timeline -->
                        <div class="border-l-2 border-blue-200 pl-8 space-y-8">
                            <div class="relative">
                                <div class="absolute -left-11 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-sm">
                                    <h5 class="font-bold">Master's in HCI</h5>
                                    <p class="text-sm text-gray-500">University of Manitoba</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -left-11 top-0 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                                    <i class="fas fa-laptop-code"></i>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-sm">
                                    <h5 class="font-bold">Software Engineer</h5>
                                    <p class="text-sm text-gray-500">Business Consulting, Starbucks, Microsoft, etc.</p>
                                    <p class="text-sm text-gray-500">also, App developer</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="absolute -left-11 top-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div class="bg-white p-4 rounded-lg shadow-sm">
                                    <h5 class="font-bold">Engineering Manager</h5>
                                    <p class="text-sm text-gray-500">also, product builder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Projects Section -->
<section id="projects" class="py-10 bg-gradient-to-r from-blue-50 to-emerald-50" itemscope itemtype="https://schema.org/CreativeWork">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
            <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
                Products I've built that are live and serving users.
            </p>
        </div>

        <!-- Live Websites - Featured at top -->
        <div class="mb-12">
            <div class="flex items-center justify-center mb-6">
                <i class="fas fa-rocket text-blue-500 text-2xl mr-3"></i>
                <h3 class="text-2xl font-bold text-gray-900">Live Websites</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <!-- Minibreaks.io -->
                <article class="bg-white rounded-xl overflow-hidden shadow-lg card-hover border-2 border-blue-200 flex flex-col" itemscope itemtype="https://schema.org/SoftwareApplication">
                    <div class="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center relative flex-shrink-0">
                        <i class="fas fa-spa text-white text-6xl"></i>
                        <div class="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                            <i class="fas fa-circle text-green-500 mr-1"></i>Live
                        </div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-2xl font-bold mb-2" itemprop="name">Minibreaks.io</h3>
                        <p class="text-gray-600 mb-4 flex-grow" itemprop="description">
                            A website promoting better mental health by encouraging users to take regular breaks. Built with AI assistance.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">SvelteKit</span>
                            <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">AI-Powered</span>
                            <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">Node.js</span>
                        </div>
                        <a href="https://minibreaks.io" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center text-lg mt-auto" itemprop="url">
                            Visit Site <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                </article>

                <!-- NearbyGame.com -->
                <article class="bg-white rounded-xl overflow-hidden shadow-lg card-hover border-2 border-emerald-200 flex flex-col" itemscope itemtype="https://schema.org/SoftwareApplication">
                    <div class="h-48 bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center relative flex-shrink-0">
                        <i class="fas fa-location-dot text-white text-6xl"></i>
                        <div class="absolute top-4 right-4 bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                            <i class="fas fa-circle text-green-500 mr-1"></i>Live
                        </div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-2xl font-bold mb-2" itemprop="name">NearbyGame.com</h3>
                        <p class="text-gray-600 mb-4 flex-grow" itemprop="description">
                            Discover and join local games and sports activities in your area. Connect with players and find your next match.
                        </p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">SvelteKit</span>
                            <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Location-based</span>
                            <span class="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs">Community</span>
                        </div>
                        <a href="https://nearbygame.com" target="_blank" class="text-emerald-500 hover:text-emerald-700 font-medium flex items-center text-lg mt-auto" itemprop="url">
                            Visit Site <i class="fas fa-external-link-alt ml-2"></i>
                        </a>
                    </div>
                </article>
            </div>
        </div>

        <!-- Other Projects -->
        <div class="border-t-2 border-gray-200 pt-12">
            <h3 class="text-lg font-semibold text-gray-600 text-center mb-6">Other Projects</h3>
            <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <!-- Project 1 - Removed Minibreaks since it's featured above -->
            <!-- Project 2 -->
            <article class="bg-white rounded-lg overflow-hidden shadow-md card-hover flex flex-col w-full" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="h-32 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center relative flex-shrink-0">
                    <i class="fas fa-robot text-white text-4xl"></i>
                    <div class="absolute top-2 right-2 bg-white text-purple-600 px-2 py-1 rounded-full text-[10px] font-medium">
                        App
                    </div>
                </div>
                <div class="p-4 flex flex-col flex-1">
                    <h3 class="text-base font-bold mb-1" itemprop="name">FakeBlueScreen</h3>
                    <p class="text-gray-600 mb-3 text-sm flex-1" itemprop="description">
                        A fake blue screen with progress. It gives you a legitimate excuse to procrastinate for a while, or forever, whatever you like.
                    </p>
                    <div class="flex flex-wrap gap-1 mb-3 mt-auto">
                        <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-[10px]" itemprop="programmingLanguage">WinUI3</span>
                        <span class="bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full text-[10px]" itemprop="programmingLanguage">C#</span>
                    </div>
                    <a href="https://apps.microsoft.com/detail/9n8r514363br" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center text-sm" itemprop="url">
                        View Project <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </a>
                </div>
            </article>
            <!-- Project 3 -->
            <article class="bg-white rounded-lg overflow-hidden shadow-md card-hover flex flex-col w-full" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="h-32 bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center relative flex-shrink-0">
                    <i class="fas fa-window-maximize text-white text-4xl"></i>
                    <div class="absolute top-2 right-2 bg-white text-emerald-600 px-2 py-1 rounded-full text-[10px] font-medium">
                        App
                    </div>
                </div>
                <div class="p-4 flex flex-col flex-1">
                    <h3 class="text-base font-bold mb-1" itemprop="name">FotoAssemblyLine Free</h3>
                    <p class="text-gray-600 mb-3 text-sm flex-1" itemprop="description">
                        Apply filter, edit or watermark and process multiple images at once.
                    </p>
                    <div class="flex flex-wrap gap-1 mb-3 mt-auto">
                        <span class="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-[10px]" itemprop="programmingLanguage">UWP</span>
                        <span class="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-[10px]" itemprop="programmingLanguage">C#</span>
                    </div>
                    <a href="https://apps.microsoft.com/detail/9mtg2ff7rnq4" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center text-sm" itemprop="url">
                        View Project <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </a>
                </div>
            </article>
        </div>
        </div>
        <div class="text-center mt-8 text-gray-600">
            <p>I am in the process of trying to make some of my projects open source...</p>
        </div>
    </div>
</section>

<!-- Writing Section -->
<section id="writing" class="py-10 bg-yellow-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Writing</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
            <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
                Sharing learning and reflections on engineering, life, and everything in between.
            </p>
        </div>
        <!-- Mosaic Article - Featured at top -->
        <div class="max-w-3xl mx-auto mb-8">
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
                <div class="flex items-center mb-4">
                    <i class="fas fa-th text-purple-500 text-xl mr-3"></i>
                    <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        New Article
                    </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">From App Stores to App Flows: Why Mosaic Matters</h3>
                <p class="text-gray-600 mb-4">
                    For years, our digital lives have revolved around app stores. We search, download, install, and juggle dozens of apps: each built as a siloed product. But our lives don't happen in silos. They happen in flows. Mosaic is a vision that replaces app stores with app flows.
                </p>
                <div class="flex items-center justify-between">
                    <div class="text-gray-500 text-sm">
                        <i class="fas fa-clock mr-1"></i> 4-part article
                    </div>
                    <a href="/mosaic" class="text-purple-600 hover:text-purple-700 font-medium flex items-center">
                        Start Reading <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- AI Series -->
        <div class="max-w-3xl mx-auto mb-8">
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-emerald-500">
                <div class="flex items-center mb-4">
                    <i class="fas fa-robot text-emerald-500 text-xl mr-3"></i>
                    <span class="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured Series
                    </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">How I Built MiniBreaks.io With AI</h3>
                <p class="text-gray-600 mb-4">
                    A comprehensive 10-part series documenting my journey of building a complete website using AI tools. Learn from real-world experience and practical solutions.
                </p>
                <div class="flex items-center justify-between">
                    <div class="text-gray-500 text-sm">
                        <i class="fas fa-clock mr-1"></i> 10-part series
                    </div>
                    <a href="/series" class="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                        Start Reading <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </div>

        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
                <div class="flex items-center mb-4">
                    <i class="fas fa-cat text-green-500 text-xl mr-3"></i>
                    <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                    </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">How having 2 cats help me become a better engineering manager</h3>
                <p class="text-gray-600 mb-4">
                    There is no scientific proof, but I do believe the effect.
                </p>
                <div class="text-gray-500 text-sm">
                    <i class="fas fa-clock mr-1"></i> 8 min read
                </div>
            </div>
        </div> -->
        <div class="text-center mt-12">
            <p class="text-gray-600 mb-4">More thoughts and stories coming soon!</p>
        </div>
        <!-- <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg p-8 text-center text-white mb-12">
            <h3 class="text-2xl font-bold mb-4">From My Previous Blog</h3>
            <p class="text-purple-100 mb-6">
                I've been writing about my experiences and thoughts for a while. Check out my previous blog posts to get
                a sense of my perspective.
            </p>
            <a href="http://hongincanada.com/blog" target="_blank"
               class="bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition inline-flex items-center">
                Visit My Old Blog <i class="fas fa-external-link-alt ml-2"></i>
            </a>
        </div> -->
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-10 bg-gradient-to-r from-blue-500 to-emerald-500 text-white">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <div class="w-20 h-1 bg-white mx-auto"></div>
            <p class="text-blue-100 mt-2 max-w-2xl mx-auto">
                I'd love to connect with fellow engineers, ping pong enthusiasts, and anyone interested in sharing
                life in Canada or the US. I am currently living in the Seattle metro area.
            </p>
        </div>
        <div class="bg-white rounded-xl shadow-xl p-8 max-w-2xl mx-auto">
            <div class="space-y-4">
                <a href={generateEmailLink()}
                   class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                    <div class="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition">
                        <i class="fas fa-envelope text-white"></i>
                    </div>
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium text-gray-800">Email Me</h4>
                        <p class="text-gray-600 text-sm">Me, me, me!</p>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/keepsrunning/" target="_blank"
                   class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                    <div class="w-12 h-12 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition">
                        <i class="fab fa-linkedin-in text-white"></i>
                    </div>
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium text-gray-800">LinkedIn</h4>
                        <p class="text-gray-600 text-sm">Professional network</p>
                    </div>
                </a>
                <a href="https://www.strava.com/athletes/6051008" target="_blank"
                   class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                    <div class="w-12 h-12 flex-shrink-0 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition">
                        <i class="fab fa-strava text-white"></i>
                    </div>
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium text-gray-800">Strava</h4>
                        <p class="text-gray-600 text-sm">Running & fitness activities</p>
                    </div>
                </a>
                <a href="https://usatt.simplycompete.com/userAccount/up/189180?uai=189180" target="_blank"
                   class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                    <div class="w-12 h-12 flex-shrink-0 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-red-600 transition">
                        <i class="fas fa-table-tennis-paddle-ball text-white"></i>
                    </div>
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium text-gray-800">USATT</h4>
                        <p class="text-gray-600 text-sm">Table tennis rating, not very good, but I am still learning and improving. :)</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>
