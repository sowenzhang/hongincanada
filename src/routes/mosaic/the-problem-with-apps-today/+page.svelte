<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
    import { getMosaicArticleData, getMosaicNavigationData } from '$lib/data/mosaicSeriesData';

    // Get data from the centralized mosaic series data
    const articleData = getMosaicArticleData(1);
    const navigation = getMosaicNavigationData(1);

    // Ensure data exists (shouldn't happen for valid part numbers, but TypeScript safety)
    if (!articleData || !navigation) {
        throw new Error('Article data not found for Part 1');
    }

    // Table of contents
    const tableOfContents = [
        { id: "what-is-mosaic", title: "What is Mosaic?", level: 1 },
        { id: "what-this-series-will-cover", title: "What This Series Will Cover", level: 1 },
        { id: "why-start-here", title: "Why Start Here?", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
    <!-- Article Content -->
    <section id="intro">
        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-8 border border-purple-100 dark:border-purple-800">
            <p class="text-xl leading-relaxed mb-4">Think about the last time you planned a trip.</p>

            <div class="space-y-4 text-lg">
                <p>📱 You opened your airline's app to check flights.</p>
                <p>🗺️ Switched to Google Maps for directions.</p>
                <p>💬 Used WhatsApp to coordinate with friends.</p>
                <p>🌍 Maybe downloaded a translation app just for the week.</p>
                <p>📸 And after the trip? You probably dug through Photos and a budgeting app to figure out what you spent.</p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-lg p-6 mt-6 border-l-4 border-purple-500">
                <p class="text-xl font-semibold text-purple-700 dark:text-purple-300 mb-2">That's five or six apps — all for one journey.</p>
                <p class="text-gray-600 dark:text-gray-400">This is normal today. But it doesn't feel right, does it?</p>
            </div>
        </div>

        <p class="text-lg leading-relaxed mb-6">We live in a world where apps are still siloed products. App stores want you to search, install, and learn them one by one. But our lives don't fit into silos. We live in <em class="font-semibold text-purple-600 dark:text-purple-400">flows</em> — trips, health check-ups, courses, projects — and those flows cut across dozens of apps.</p>

        <div class="text-center my-8">
            <p class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">This series is about a different way of thinking:</p>
            <p class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Mosaic</p>
        </div>
    </section>

    <section id="what-is-mosaic">
        <h2>What is Mosaic?</h2>

        <p>At its core, Mosaic is a vision:</p>

        <ul>
            <li>Instead of monolithic apps, we think in <strong>tiles</strong> — small modular capabilities.</li>
            <li>A user's intent ("I'm visiting Tokyo") becomes the starting point.</li>
            <li>The right set of tiles assemble into a cohesive app, just for that journey.</li>
            <li>And as your journey changes, the app reshapes itself.</li>
        </ul>

        <div class="my-8 md:float-right md:ml-6 md:mb-4 md:w-80 lg:w-96">
            <img src="/mosaic-series/user-flow.jpg"
                 alt="User flow diagram showing how Mosaic adapts apps to user journeys"
                 class="w-full h-auto rounded-lg shadow-lg"
                 loading="lazy" />
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                How Mosaic assembles the right capabilities for your specific journey
            </p>
        </div>

        <p>In the coming parts of this series, I'll unpack this vision step by step.</p>
    </section>

    <section id="what-this-series-will-cover">
        <h2>What This Series Will Cover</h2>

        <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6 my-8">
            <ul class="space-y-3">
                <li><strong>Part 1 — The Problem with Apps Today</strong><br>
                    <span class="text-gray-600 dark:text-gray-400">You're reading it! Why app stores and siloed apps don't fit the modern user journey. Introduce the Mosaic concept at a high level.</span></li>

                <li><strong>Part 2 — The Mosaic Concept: Adaptive Journeys</strong><br>
                    <span class="text-gray-600 dark:text-gray-400">Deep dive on "tiles," adaptive layouts, self-updating flows. Tokyo trip example.</span></li>

                <li><strong>Part 3 — Under the Hood: Context Engine, Registry, Composer</strong><br>
                    <span class="text-gray-600 dark:text-gray-400">Explain the building blocks and why this differs from MCP/agents. Discuss security, version locking, rollbacks.</span></li>

                <li><strong>Part 4 — Near Future & Beyond</strong><br>
                    <span class="text-gray-600 dark:text-gray-400">Why PWAs are the natural first step. The long-term OS-level vision. Examples: travel, health, learning.</span></li>
            </ul>
        </div>
    </section>

    <section id="why-start-here">
        <h2>Why Start Here?</h2>

        <p>Before we can imagine a new model, we need to clearly see what's broken today:</p>

        <ul>
            <li><strong>Too many apps.</strong> Every task means juggling 3–5 different tools.</li>
            <li><strong>Too much friction.</strong> Search, install, learn, delete. Repeat.</li>
            <li><strong>Too little adaptability.</strong> Apps don't evolve with your journey.</li>
        </ul>

        <p>Mosaic is my attempt to rethink this from the ground up.</p>
    </section>

    <section id="homework-for-you">
        <h2>Homework for You</h2>

        <p>Before the next part, here's a simple exercise:</p>

        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 my-8">
            <p class="text-lg font-medium mb-3">👉 Think of one thing you did this week that required 3 or more apps.</p>
            <p class="mb-3">Write them down. How did it feel switching back and forth?</p>
            <p>Hold onto that example — we'll revisit it in Part 2, when we imagine how Mosaic would handle it.</p>
        </div>
    </section>
</BaseSeriesPage>
