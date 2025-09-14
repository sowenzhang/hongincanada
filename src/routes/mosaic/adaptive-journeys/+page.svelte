<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
    import { getMosaicArticleData, getMosaicNavigationData } from '$lib/data/mosaicSeriesData';

    // Get data from the centralized mosaic series data
    const articleData = getMosaicArticleData(2);
    const navigation = getMosaicNavigationData(2);

    // Ensure data exists (shouldn't happen for valid part numbers, but TypeScript safety)
    if (!articleData || !navigation) {
        throw new Error('Article data not found for Part 2');
    }

    // Table of contents
    const tableOfContents = [
        { id: "challenge-of-todays-app-world", title: "The Challenge of Today's App World", level: 1 },
        { id: "what-makes-app-flows-different", title: "What Makes App Flows Different", level: 1 },
        { id: "tokyo-trip-example", title: "The Tokyo Trip Example", level: 1 },
        { id: "defining-app-flows-and-mosaic", title: "Defining App Flows and Mosaic", level: 1 },
        { id: "why-adaptive-journeys-matter", title: "Why Adaptive Journeys Matter", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
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
</BaseSeriesPage>