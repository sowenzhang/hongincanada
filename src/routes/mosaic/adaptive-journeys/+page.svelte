<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';

    // Article metadata
    const articleData = {
        title: "Mosaic, Part 2: Adaptive Journeys in App Flows",
        description: "Explore the heart of Mosaic: adaptive journeys and why this shift from static apps to dynamic App Flows matters for modern user experiences.",
        canonical: "https://hongincanada.com/mosaic/adaptive-journeys",
        ogImage: "https://hongincanada.com/mosaic-series/adaptive-ui.jpg",
        publishDate: "September 13, 2025",
        readTime: "7 min read"
    };

    // Navigation data
    const navigation = {
        currentPart: 2,
        totalParts: 4,
        seriesUrl: "/mosaic",
        seriesTitle: "Mosaic Series",
        prevPart: {
            number: 1,
            title: "The Problem with Apps Today",
            slug: "/mosaic/the-problem-with-apps-today"
        },
        nextPart: {
            number: 3,
            title: "Under the Hood",
            slug: "/mosaic/app-flow-under-the-hood"
        }
    };

    // Table of contents
    const tableOfContents = [
        { id: "challenge-of-todays-app-world", title: "The Challenge of Today's App World", level: 1 },
        { id: "what-makes-app-flows-different", title: "What Makes App Flows Different", level: 1 },
        { id: "tokyo-trip-example", title: "The Tokyo Trip Example", level: 1 },
        { id: "defining-app-flows-and-mosaic", title: "Defining App Flows and Mosaic", level: 1 },
        { id: "why-adaptive-journeys-matter", title: "Why Adaptive Journeys Matter", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];

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
    <title>{articleData.title} - Hong in Canada</title>
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
            "name": "From App Stores to App Flows: Why Mosaic Matters",
            "url": "https://hongincanada.com/mosaic"
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
                <a href="/" class="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Home</a>
                <i class="fas fa-chevron-right text-gray-400 dark:text-gray-500" aria-hidden="true"></i>
                <a href="/mosaic" class="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors">Mosaic Series</a>
                <i class="fas fa-chevron-right text-gray-400 dark:text-gray-500" aria-hidden="true"></i>
                <span class="text-gray-600 dark:text-gray-400">Part {navigation.currentPart}</span>
            </div>
            <!-- Part Indicator -->
            <div class="hidden sm:block">
                <span class="bg-purple-500 dark:bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
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
                    <a href="/mosaic" class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                        <i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Series
                    </a>
                    <span class="bg-purple-500 dark:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Part {navigation.currentPart} of {navigation.totalParts}
                    </span>
                </div>
            </div>
            <!-- Desktop: Just the back button since part indicator is in nav -->
            <div class="hidden sm:block mb-6">
                <a href="/mosaic" class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">
                    <i class="fas fa-arrow-left mr-2" aria-hidden="true"></i>Back to Series
                </a>
            </div>
        </div>

        <!-- Custom header with Mosaic-specific styling -->
        <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors">
                <span class="text-purple-600 dark:text-purple-400">Mosaic</span>, Part 2:<br>
                <span class="text-2xl md:text-3xl font-normal text-gray-700 dark:text-gray-300 mt-2 block">
                    Adaptive Journeys in App Flows
                </span>
            </h1>

            <div class="flex flex-wrap justify-center items-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
                <span><i class="fas fa-calendar mr-2" aria-hidden="true"></i>{articleData.publishDate}</span>
                <span><i class="fas fa-clock mr-2" aria-hidden="true"></i>{articleData.readTime}</span>
                <span><i class="fas fa-user mr-2" aria-hidden="true"></i>Hong</span>
            </div>

            <p class="text-xl text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
                In Part 1, we talked about the problem with today's apps: too many silos, too much friction, too little adaptability.
                We introduced Mosaic as a shift from apps to App Flows. Now let's explore the heart of Mosaic: adaptive journeys —
                and why this shift matters.
            </p>
        </div>
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
                    class="flex items-center space-x-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-200"
                >
                    <i class="fas fa-list text-purple-600 dark:text-purple-400" aria-hidden="true"></i>
                    <span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Table of Contents</span>
                    <span class="sm:hidden">TOC</span>
                    <i class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-gray-400" aria-hidden="true"></i>
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
                    <i class="fas fa-sun text-yellow-500" aria-hidden="true"></i>
                    <span class="hidden sm:inline">Light Mode</span>
                {:else}
                    <i class="fas fa-moon text-gray-600 dark:text-gray-400" aria-hidden="true"></i>
                    <span class="hidden sm:inline">Dark Mode</span>
                {/if}
            </button>
        </div>
    </div>
</div>

<!-- Article Content -->
<main class="py-12 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors min-h-screen">
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
                                <i class="fas fa-times" aria-hidden="true"></i>
                            </button>
                        </div>
                        <nav class="space-y-3">
                            {#each tableOfContents as item}
                                <a href="#{item.id}"
                                   class="block text-sm {item.level === 1 ? 'font-medium text-gray-900 dark:text-white py-1' : 'text-gray-600 dark:text-gray-400 ml-4 py-0.5'} hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded px-2 hover:bg-purple-50 dark:hover:bg-purple-900/20">
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
                                    prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:text-lg prose-li:mb-2 prose-li:pl-2
                                    prose-ul:ml-6 prose-ul:mb-6 prose-ul:mt-4 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
                                    prose-ol:ml-6 prose-ol:mb-6 prose-ol:mt-4 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
                                    prose-strong:text-gray-900 dark:prose-strong:text-white
                                    prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-purple-800 dark:hover:prose-a:text-purple-300 prose-a:transition-colors
                                    prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:font-medium
                                    prose-code:bg-pink-50 dark:prose-code:bg-pink-900/20 prose-code:px-2 prose-code:py-1 prose-code:rounded
                                    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700
                                    prose-blockquote:border-purple-500 dark:prose-blockquote:border-purple-400 prose-blockquote:bg-purple-50 dark:prose-blockquote:bg-purple-900/10
                                    prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
                                    prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                    prose-h1:mb-8 prose-h2:mb-6 prose-h2:mt-12 prose-h3:mb-4 prose-h3:mt-8
                                    prose-p:mb-6 prose-ul:mb-6 prose-ol:mb-6
                                    [&_p]:text-gray-700 dark:[&_p]:text-gray-300
                                    [&_span]:text-gray-700 dark:[&_span]:text-gray-300
                                    [&_div]:text-gray-700 dark:[&_div]:text-gray-300
                                    [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:pl-6 [&_ul]:space-y-2
                                    [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:pl-6 [&_ol]:space-y-2
                                    [&_li]:mb-2 [&_li]:pl-1
                                    [&_section]:scroll-mt-24
                                    [&_h1]:scroll-mt-24 [&_h2]:scroll-mt-24 [&_h3]:scroll-mt-24 [&_h4]:scroll-mt-24 [&_h5]:scroll-mt-24 [&_h6]:scroll-mt-24">

                            <section id="challenge-of-todays-app-world">
                                <h2>The Challenge of Today's App World</h2>

                                <div class="my-8 md:float-right md:ml-6 md:mb-4 md:w-80 lg:w-96">
                                    <img src="/mosaic-series/english-to-japanese-translator-app.jpg"
                                         alt="Multiple translator apps with similar features crowding the app store"
                                         class="w-full h-auto rounded-lg shadow-lg"
                                         loading="lazy" />
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                                        The endless cycle of app hunting and learning new interfaces
                                    </p>
                                </div>

                                <p>Every time you need something new, you're pushed into the same cycle:</p>

                                <div class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-xl p-6 my-6 border border-red-100 dark:border-red-800">
                                    <ol class="space-y-2 text-lg">
                                        <li>🔍 Search the app store.</li>
                                        <li>📊 Compare dozens of options with nearly identical features.</li>
                                        <li>📖 Read descriptions, ratings, and reviews.</li>
                                        <li>📱 Download and install one.</li>
                                        <li>🎯 Learn a new interface — even if it works just like others.</li>
                                        <li>👤 Sometimes: register, verify email, or sign in.</li>
                                    </ol>

                                    <div class="bg-white dark:bg-gray-800 rounded-lg p-4 mt-4 border-l-4 border-red-500">
                                        <p class="font-semibold text-red-700 dark:text-red-300">All of this for just one tiny piece of your journey.</p>
                                    </div>
                                </div>

                                <p>Take translator apps: the store is full of them, all doing roughly the same job. But as a user, you still need to guess which one is "best," install it, and learn yet another interface — even though what you really want is just translation within your current flow.</p>

                                <p><strong>It's a never-ending battle of app hunting and app learning.</strong></p>
                            </section>

                            <section id="what-makes-app-flows-different">
                                <h2>What Makes App Flows Different</h2>

                                <div class="grid md:grid-cols-2 gap-6 my-8">
                                    <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">📱 Traditional Apps</h3>
                                        <p class="text-gray-600 dark:text-gray-400">Static: once you install them, they look and behave the same, regardless of your stage in a journey.</p>
                                    </div>
                                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                                        <h3 class="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">🌊 App Flows</h3>
                                        <p class="text-purple-700 dark:text-purple-300">Dynamic and adaptive — living experiences that grow and shrink with your journey.</p>
                                    </div>
                                </div>

                                <p>App Flows, by contrast, are dynamic and adaptive. They:</p>

                                <ul>
                                    <li><strong>Highlight what matters most right now.</strong></li>
                                    <li><strong>Fade out or remove tiles that are no longer relevant.</strong></li>
                                    <li><strong>Rearrange themselves automatically as your context shifts.</strong></li>
                                </ul>

                                <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6 my-8">
                                    <p class="text-xl font-semibold text-purple-700 dark:text-purple-300 text-center">
                                        They are not "one app per problem" — they are <em>living experiences</em> that grow and shrink with your journey.
                                    </p>
                                </div>
                            </section>

                            <section id="tokyo-trip-example">
                                <h2>The Tokyo Trip Example</h2>

                                <div class="md:float-left md:mr-6 md:mb-4 md:w-80 lg:w-96">
                                    <img src="/mosaic-series/adaptive-ui.jpg"
                                         alt="Interface showing how an app adapts during different phases of a Tokyo trip"
                                         class="w-full h-auto rounded-lg shadow-lg"
                                         loading="lazy" />
                                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                                        A Living Companion that evolves as your context changes
                                    </p>
                                </div>

                                <p class="mb-6">Let's imagine you're planning a trip to Tokyo.</p>

                                <div class="clear-left md:clear-none">
                                    <h3 class="text-2xl font-bold mt-8 mb-4 text-blue-600 dark:text-blue-400">🛫 Before the trip</h3>
                                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-6 border border-blue-200 dark:border-blue-700 md:mr-8">
                                        <ul>
                                            <li>The App Flow emphasizes your <strong>flight tracker</strong> and <strong>hotel reservation</strong> details.</li>
                                            <li>Maps, translation, and restaurant suggestions exist but stay in the background.</li>
                                        </ul>
                                    </div>

                                    <h3 class="text-2xl font-bold mt-8 mb-4 text-green-600 dark:text-green-400">🗾 During the trip</h3>
                                    <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 mb-6 border border-green-200 dark:border-green-700 md:mr-8">
                                        <ul>
                                            <li>The App Flow <strong>reshapes itself automatically</strong>.</li>
                                            <li>Now, the <strong>translation tile</strong>, <strong>navigation maps</strong>, and <strong>restaurant finder</strong> rise to the top.</li>
                                            <li>The flight tracker shrinks into a small widget since it's less critical.</li>
                                        </ul>
                                    </div>

                                    <h3 class="text-2xl font-bold mt-8 mb-4 text-purple-600 dark:text-purple-400">📸 After the trip</h3>
                                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 mb-6 border border-purple-200 dark:border-purple-700 md:mr-8">
                                        <ul>
                                            <li>Your <strong>photo gallery</strong> and <strong>spending tracker</strong> take the spotlight.</li>
                                            <li>The flight tracker <strong>disappears completely</strong>.</li>
                                            <li>You're guided into reflection, sharing, and memory instead of logistics.</li>
                                        </ul>
                                    </div>
                                </div>

                                <h3 class="text-2xl font-bold mt-8 mb-4 text-orange-600 dark:text-orange-400">🗂️ Beyond the trip: Disposable & Archivable Flows</h3>
                                <div class="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 mb-6 border border-orange-200 dark:border-orange-700">
                                    <p class="text-orange-700 dark:text-orange-300 mb-4">Here's where App Flows truly differ from traditional apps:</p>
                                    <ul class="space-y-3">
                                        <li class="flex items-start">
                                            <span class="text-2xl mr-3">🗑️</span>
                                            <div>
                                                <strong class="text-orange-800 dark:text-orange-200">Disposable by default:</strong>
                                                <span class="text-orange-700 dark:text-orange-300">Once your Tokyo trip is complete, the entire App Flow can gracefully disappear. No cluttered home screen, no forgotten apps taking up storage.</span>
                                            </div>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-2xl mr-3">📦</span>
                                            <div>
                                                <strong class="text-orange-800 dark:text-orange-200">Archivable when needed:</strong>
                                                <span class="text-orange-700 dark:text-orange-300">If you want to keep the flow for reference or reuse, it gets archived with all your preferences, favorite restaurants, and learned patterns intact.</span>
                                            </div>
                                        </li>
                                        <li class="flex items-start">
                                            <span class="text-2xl mr-3">🔄</span>
                                            <div>
                                                <strong class="text-orange-800 dark:text-orange-200">Instantly retrievable:</strong>
                                                <span class="text-orange-700 dark:text-orange-300">Planning another trip to Japan two years later? Your archived "Tokyo Trip" flow can be restored instantly, with all your previous preferences and learnings ready to go.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-6 my-6 border border-orange-200 dark:border-orange-700">
                                    <div class="flex items-center justify-center mb-4">
                                        <span class="text-3xl mr-4">💡</span>
                                        <h4 class="text-xl font-bold text-orange-800 dark:text-orange-200">The Revolutionary Difference</h4>
                                    </div>
                                    <p class="text-center text-orange-700 dark:text-orange-300 text-lg">
                                        Instead of <strong>permanent apps</strong> that accumulate on your device forever, you get <strong>temporary experiences</strong>
                                        that exist only as long as you need them — and can be recalled when relevant again.
                                    </p>
                                </div>

                                <div class="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-8 my-8 border border-purple-200 dark:border-purple-700">
                                    <div class="flex items-center justify-center mb-4">
                                        <span class="text-3xl mr-4">🤝</span>
                                        <p class="text-xl font-bold text-center text-purple-700 dark:text-purple-300">
                                            This isn't just a self-updating app.
                                        </p>
                                    </div>
                                    <p class="text-lg text-center text-purple-600 dark:text-purple-400">
                                        It's a <strong>Living Companion</strong> — an app that evolves as your context (location, time, role, and goals).
                                    </p>
                                </div>
                            </section>

                            <section id="defining-app-flows-and-mosaic">
                                <h2>Defining App Flows and Mosaic</h2>

                                <p>To be precise:</p>

                                <div class="grid md:grid-cols-1 gap-6 my-8">
                                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-700">
                                        <h3 class="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">🌊 App Flows</h3>
                                        <p class="text-blue-700 dark:text-blue-300">The representation of the user's goal or journey. They describe what you want to achieve (plan a trip, complete a course, manage a health check-up) and evolve as your context changes.</p>
                                    </div>

                                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-700">
                                        <h3 class="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">🎯 Mosaic</h3>
                                        <p class="text-purple-700 dark:text-purple-300">The composition engine that interprets App Flows. It brings together the right "tiles" — small modular capabilities like translation, maps, reminders, or payments — and assembles them into a single adaptive experience.</p>
                                    </div>
                                </div>

                                <div class="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 my-8 border border-gray-300 dark:border-gray-600">
                                    <h3 class="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">In short:</h3>
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div class="text-center">
                                            <div class="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">🌊</div>
                                            <p class="text-xl font-semibold text-blue-600 dark:text-blue-400">App Flows capture your intent.</p>
                                        </div>
                                        <div class="text-center">
                                            <div class="bg-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">🎯</div>
                                            <p class="text-xl font-semibold text-purple-600 dark:text-purple-400">Mosaic builds the experience around it.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="why-adaptive-journeys-matter">
                                <h2>Why Adaptive Journeys Matter</h2>

                                <p>With Mosaic-driven App Flows:</p>

                                <div class="grid md:grid-cols-2 gap-4 my-8">
                                    <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                                        <div class="flex items-center mb-2">
                                            <span class="text-2xl mr-3">🎯</span>
                                            <h3 class="text-lg font-bold text-green-900 dark:text-green-100">Less clutter</h3>
                                        </div>
                                        <p class="text-green-700 dark:text-green-300">Only what matters now is visible.</p>
                                    </div>

                                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                                        <div class="flex items-center mb-2">
                                            <span class="text-2xl mr-3">⚡</span>
                                            <h3 class="text-lg font-bold text-blue-900 dark:text-blue-100">Less friction</h3>
                                        </div>
                                        <p class="text-blue-700 dark:text-blue-300">No more searching, installing, or relearning interfaces.</p>
                                    </div>

                                    <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                                        <div class="flex items-center mb-2">
                                            <span class="text-2xl mr-3">🔍</span>
                                            <h3 class="text-lg font-bold text-purple-900 dark:text-purple-100">More focus</h3>
                                        </div>
                                        <p class="text-purple-700 dark:text-purple-300">Your app evolves with you, stage by stage.</p>
                                    </div>

                                    <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-700">
                                        <div class="flex items-center mb-2">
                                            <span class="text-2xl mr-3">🤝</span>
                                            <h3 class="text-lg font-bold text-indigo-900 dark:text-indigo-100">More trust</h3>
                                        </div>
                                        <p class="text-indigo-700 dark:text-indigo-300">You know the right tool will surface when you need it.</p>
                                    </div>

                                    <div class="md:col-span-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-700">
                                        <div class="flex items-center justify-center mb-2">
                                            <span class="text-2xl mr-3">❤️</span>
                                            <h3 class="text-lg font-bold text-yellow-900 dark:text-yellow-100">More human</h3>
                                        </div>
                                        <p class="text-yellow-700 dark:text-yellow-300 text-center">Apps finally mirror the way we actually live — in flows, not silos.</p>
                                    </div>
                                </div>
                            </section>

                            <section id="homework-for-you">
                                <h2>Homework for You</h2>

                                <div class="space-y-6 my-8">
                                    <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
                                        <div class="flex items-center space-x-4 mb-3">
                                            <div class="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                                            <h3 class="text-lg font-bold text-purple-900 dark:text-purple-100">👉 Homework 1:</h3>
                                        </div>
                                        <div class="ml-12">
                                            <p class="text-purple-700 dark:text-purple-300">Think of one journey in your life (a trip, a health check-up, a project, or a course). Write down the stages of that journey. What apps did you use at each stage?</p>
                                        </div>
                                    </div>

                                    <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
                                        <div class="flex items-center space-x-4 mb-3">
                                            <div class="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                                            <h3 class="text-lg font-bold text-purple-900 dark:text-purple-100">👉 Homework 2:</h3>
                                        </div>
                                        <div class="ml-12">
                                            <p class="text-purple-700 dark:text-purple-300">On your phone, scroll through your installed apps. Which ones did you download for a single purpose — and never use again?</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-8 my-8 border border-purple-200 dark:border-purple-700">
                                    <p class="text-lg text-center text-purple-700 dark:text-purple-300 italic">
                                        Imagine if those weren't permanent apps on your phone, but temporary tiles that appeared in your App Flow when needed, and gracefully disappeared afterward.
                                    </p>
                                </div>
                            </section>

                            <!-- Next Up Section -->
                            <section class="mt-16">
                                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700">
                                    <h3 class="text-2xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100">
                                        Next Up: Part 3 — Under the Hood
                                    </h3>
                                    <p class="text-center text-blue-700 dark:text-blue-300 text-lg">
                                        We'll look behind the scenes at how App Flows are built: the Context Engine, the Registry of Tiles, the Composer, and how Mosaic keeps them secure and trustworthy.
                                    </p>
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</main>

<!-- Navigation -->
<section class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
            <div class="text-center">
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Previous Article</div>
                <a href="/mosaic/the-problem-with-apps-today" class="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors">
                    <i class="fas fa-arrow-left mr-2"></i>
                    Part 1: The Problem with Apps Today
                </a>
            </div>
            <div class="text-center">
                <div class="text-sm text-gray-500 dark:text-gray-400 mb-1">Next Article</div>
                <a href="/mosaic/app-flow-under-the-hood" class="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors">
                    Part 3: Under the Hood
                    <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </div>
    </div>
</section>