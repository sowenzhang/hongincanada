<script>
    // Page metadata
    const pageData = {
        title: "Home - Hong in Canada",
        description: "Engineering Manager with a passion for building products that people love. Canadian/Chinese with a background in HCI.",
        canonical: "https://hongincanada.com",
        ogImage: "https://hongincanada.com/profile.png"
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

    <!-- Structured Data -->
    {@html `<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Hong",
        "jobTitle": "Engineering Manager",
        "description": "Engineering Manager with a passion for building products that people love. Canadian/Chinese with a background in HCI.",
        "url": "https://hongincanada.com",
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
<section class="hero-pattern py-20 md:py-22 relative overflow-hidden" itemscope itemtype="https://schema.org/Person">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-16 md:mb-0 relative z-10">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span class="block">Hello, I'm</span>
                    <span class="gradient-text" itemprop="name">Hong</span>
                </h1>
                <p class="text-xl text-gray-600 mb-8" itemprop="description">
                    <span itemprop="jobTitle">Engineering Manager</span> with a passion for building products that people love.
                    <span class="font-medium">Canadian/Chinese</span> with a background in <span itemprop="knowsAbout">HCI</span>.
                </p>
                <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a href="#projects"
                       class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
                        View My Work
                    </a>
                    <a href="/series"
                       class="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-full transition">
                        <i class="fas fa-robot mr-2"></i>AI Series
                    </a>
                    <a href="#contact"
                       class="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-3 rounded-full transition">
                        Get In Touch
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center relative">
                <div class="relative">
                    <div class="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full flex items-center justify-center overflow-hidden shadow-xl">
                        <img src="/profile.png" alt="Hong - Engineering Manager and Product Builder" class="w-full h-full object-cover" itemprop="image">
                    </div>
                    <div class="absolute -bottom-6 -left-12 bg-white p-2 rounded-lg shadow-md">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                                <i class="fas fa-table-tennis-paddle-ball text-white text-lg"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-xs text-gray-500">Currently</p>
                                <p class="font-medium">Playing TT</p>
                            </div>
                        </div>
                    </div>
                    <div class="absolute -top-8 -right-16 bg-white p-2 rounded-lg shadow-md">
                        <div class="flex items-center">
                            <div class="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center">
                                <i class="fas fa-cat text-white text-lg"></i>
                            </div>
                            <div class="ml-3">
                                <p class="text-xs text-gray-500">Cat lover</p>
                                <p class="font-medium">2 cats</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Decorative elements -->
                <div class="cat-paw top-12 left-12 text-6xl text-gray-400">
                    <i class="fas fa-paw"></i>
                </div>
                <div class="cat-paw bottom-24 right-24 text-5xl text-gray-400">
                    <i class="fas fa-paw"></i>
                </div>
                <div class="cat-paw top-1/3 right-1/4 text-4xl text-gray-400">
                    <i class="fas fa-paw"></i>
                </div>
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
                    <img src="/melody.jpg" alt="Melody - Hong's cat" class="w-full h-full object-cover">
                </div>
                <div class="w-48 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full overflow-hidden shadow-lg">
                    <img src="/otto.jpg" alt="Otto - Hong's cat" class="w-full h-full object-cover">
                </div>
                <div class="w-48 h-[22rem] bg-gradient-to-br from-purple-100 to-pink-100 rounded-full overflow-hidden shadow-lg">
                    <img src="/AI-me-and-otto.jpg" alt="Hong and Otto together" class="w-full h-full object-cover">
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
                Here are some of the products I've built and still alive.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <article class="bg-white rounded-xl overflow-hidden shadow-md card-hover" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center relative">
                    <i class="fas fa-globe text-white text-6xl"></i>
                    <div class="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        Web
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2" itemprop="name">Minibreaks</h3>
                    <p class="text-gray-600 mb-4" itemprop="description">
                        A website that promotes better mental health encouraging users to take regular breaks.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">SvelteKit</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">AI</span>
                        <span class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">Node.js</span>
                    </div>
                    <a href="https://minibreaks.io" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center" itemprop="url">
                        View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </article>
            <!-- Project 2 -->
            <article class="bg-white rounded-xl overflow-hidden shadow-md card-hover" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center relative">
                    <i class="fas fa-robot text-white text-6xl"></i>
                    <div class="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
                        App
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2" itemprop="name">FakeBlueScreen</h3>
                    <p class="text-gray-600 mb-4" itemprop="description">
                        A fake blue screen with progress. It gives you a legitimate excuse to procrastinate for a while, or forever, whatever you like.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">WinUI3</span>
                        <span class="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">C#</span>
                    </div>
                    <a href="https://apps.microsoft.com/detail/9n8r514363br" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center" itemprop="url">
                        View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </article>
            <!-- Project 3 -->
            <article class="bg-white rounded-xl overflow-hidden shadow-md card-hover" itemscope itemtype="https://schema.org/SoftwareApplication">
                <div class="h-48 bg-gradient-to-r from-emerald-400 to-emerald-600 flex items-center justify-center relative">
                    <i class="fas fa-window-maximize text-white text-6xl"></i>
                    <div class="absolute top-4 right-4 bg-white text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                        App
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-bold mb-2" itemprop="name">FotoAssemblyLine Free</h3>
                    <p class="text-gray-600 mb-4" itemprop="description">
                        Apply filter, edit or watermark and process multiple images at once.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">UWP</span>
                        <span class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs" itemprop="programmingLanguage">C#</span>
                    </div>
                    <a href="https://apps.microsoft.com/detail/9mtg2ff7rnq4" target="_blank" class="text-blue-500 hover:text-blue-700 font-medium flex items-center" itemprop="url">
                        View Project <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </article>
        </div>
        <div class="text-center mt-4 text-gray-600">
            <p>I am in the process of trying to make some of my projects open source...</p>
        </div>
    </div>
</section>

<!-- Thoughts Section -->
<section id="thoughts" class="py-10 bg-yellow-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">My Thoughts</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto"></div>
            <p class="text-gray-600 mt-6 max-w-2xl mx-auto">
                Sharing learning and reflections on engineering, life, and everything in between.
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Featured Series -->
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
            <!-- Coming Soon Articles -->
            <!-- <div class="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <div class="flex items-center mb-4">
                    <i class="fas fa-code text-blue-500 text-xl mr-3"></i>
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Coming Soon
                    </span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Can we use AI to build a full website?</h3>
                <p class="text-gray-600 mb-4">
                    I will discuss how I use the power of AI to build a full website of Minibreaks.
                </p>
                <div class="text-gray-500 text-sm">
                    <i class="fas fa-clock mr-1"></i> 10 min read
                </div>
            </div> -->
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
                <a href="mailto:me@hongincanada.com"
                   class="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition group">
                    <div class="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition">
                        <i class="fas fa-envelope text-white"></i>
                    </div>
                    <div class="ml-4 flex-1">
                        <h4 class="font-medium text-gray-800">Email Me</h4>
                        <p class="text-gray-600 text-sm">me@hongincanada.com</p>
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
