<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
    import { getMosaicArticleData, getMosaicNavigationData } from '$lib/data/mosaicSeriesData';

    // Get data from the centralized mosaic series data
    const articleData = getMosaicArticleData(4);
    const navigation = getMosaicNavigationData(4);

    // Ensure data exists (shouldn't happen for valid part numbers, but TypeScript safety)
    if (!articleData || !navigation) {
        throw new Error('Article data not found for Part 4');
    }

    // Table of contents
    const tableOfContents = [
        { id: "how-mosaic-works-as-pwa", title: "How Mosaic Works as a PWA", level: 1 },
        { id: "why-not-separate-pwas", title: "Why They Are Not Separate PWAs", level: 2 },
        { id: "why-pwas-perfect-bridge", title: "Why PWAs Are the Perfect Bridge", level: 2 },
        { id: "pwa-constraints", title: "But PWAs Have Constraints", level: 2 },
        { id: "near-future-hosted-registries", title: "The Near Future: Hosted Registries", level: 1 },
        { id: "long-term-os-level", title: "The Long-Term Goal: OS-Level Mosaic", level: 1 },
        { id: "the-roadmap", title: "The Roadmap", level: 1 },
        { id: "why-this-matters", title: "Why This Matters", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
    <!-- Main content -->
    <section id="intro">
        <p class="text-xl leading-relaxed mb-6">In Part 3, we looked under the hood of Mosaic — the Context Engine, the Registry of Tiles, and the Composer. We also saw why Progressive Web Apps (PWAs) are the natural starting point.</p>

        <p class="text-xl leading-relaxed mb-8">Now let's go deeper: how exactly Mosaic works as a PWA today, and where it could go in the long term.</p>
    </section>

    <section id="how-mosaic-works-as-pwa">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">How Mosaic Works as a PWA</h2>

        <p class="text-lg mb-4">At first, Mosaic can be implemented as a single container PWA hosted at <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code>.</p>

        <p class="text-lg mb-4">When you install Mosaic once (from <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code>), you get the wrapper app that includes:</p>

        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
            <li><strong>Context Engine</strong> → interprets user goals.</li>
            <li><strong>Tile Registry client</strong> → fetches logic, UI components, and metadata.</li>
            <li><strong>Composer</strong> → assembles tiles into an App Flow and renders it.</li>
        </ul>

        <p class="text-lg mb-4">Each App Flow is just a route inside this PWA.</p>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <div class="space-y-2">
                <p class="text-lg font-mono">https://&#123;abc.com&#125;/appflow/tokyo-trip</p>
                <p class="text-lg font-mono">https://&#123;abc.com&#125;/appflow/moving-house</p>
                <p class="text-lg font-mono">https://&#123;abc.com&#125;/appflow/meal-planner</p>
            </div>
        </div>

        <p class="text-lg mb-6">All three share the same manifest, service worker, and scope.</p>

        <section id="why-not-separate-pwas">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Why They Are Not Separate PWAs</h3>

            <p class="text-lg mb-4">Browsers determine PWA identity by the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">scope</code> field in the manifest.</p>

            <p class="text-lg mb-4">If Mosaic defines its manifest with:</p>

            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6"><code class="language-json">&#123;
  "name": "Mosaic",
  "start_url": "/",
  "scope": "/appflow/"
&#125;</code></pre>

            <p class="text-lg mb-4">Then every route under <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/appflow/</code> belongs to the same installed PWA.</p>

            <p class="text-lg mb-6">This means you install once, and all flows open inside that single container.</p>

            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
                <ul class="text-lg space-y-2 list-disc pl-6">
                    <li>To the OS, it's one PWA (one icon, one storage).</li>
                    <li>To the user, each flow feels like a different app because the Composer dynamically reshapes the UI based on the flow ID.</li>
                </ul>
            </div>

            <p class="text-lg mb-4">So:</p>

            <p class="text-lg mb-4">Tokyo Trip and Moving House are <strong>not</strong> two different PWAs.</p>

            <p class="text-lg mb-6">They're two different parameters/configurations inside the Mosaic container.</p>

            <p class="text-lg mb-6">This avoids clutter (otherwise every flow = new icon = recreating today's problem).</p>
        </section>

        <section id="why-pwas-perfect-bridge">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Why PWAs Are the Perfect Bridge</h3>

            <p class="text-lg mb-4">PWAs already provide many of the features Mosaic needs:</p>

            <div class="space-y-6 mb-8">
                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                    <h4 class="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">Self-updating</h4>
                    <p class="text-lg mb-2">Service Workers let PWAs update silently in the background.</p>
                    <p class="text-lg">Flows evolve without reinstallations.</p>
                </div>

                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <h4 class="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Cross-platform reach</h4>
                    <p class="text-lg mb-2">PWAs run in browsers, mobile, and desktop.</p>
                    <p class="text-lg">Flows are just links — instantly accessible.</p>
                </div>

                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                    <h4 class="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">Installability</h4>
                    <p class="text-lg mb-2">The container can live on your home screen.</p>
                    <p class="text-lg">Users can "install Mosaic" once, but still open any App Flow link.</p>
                </div>

                <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
                    <h4 class="text-xl font-semibold mb-3 text-orange-800 dark:text-orange-200">Offline capabilities</h4>
                    <p class="text-lg">Tiles can cache data or run local logic when offline.</p>
                </div>

                <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
                    <h4 class="text-xl font-semibold mb-3 text-teal-800 dark:text-teal-200">Instant shareability</h4>
                    <p class="text-lg mb-2">A Tokyo Trip flow is just a URL you can send to a friend.</p>
                    <p class="text-lg">When they click, it runs inside their Mosaic container (or in the browser if they haven't installed yet).</p>
                </div>
            </div>

            <p class="text-lg mb-6">This makes PWAs the perfect near-term vehicle for Mosaic.</p>
        </section>

        <section id="pwa-constraints">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">But PWAs Have Constraints</h3>

            <p class="text-lg mb-4">We should be realistic about today's PWA ecosystem:</p>

            <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                <li><strong>Device APIs</strong> — limited access to Bluetooth, NFC, sensors, and background sync.</li>
                <li><strong>Discoverability</strong> — app stores prioritize native apps, PWAs feel hidden.</li>
                <li><strong>Platform politics</strong> — iOS restricts push notifications, background tasks, and storage.</li>
            </ul>

            <p class="text-lg mb-6">These constraints mean PWAs can't unlock every use case. But they can already demonstrate the core Mosaic experience: adaptive, self-updating, and shareable App Flows.</p>
        </section>
    </section>

    <section id="near-future-hosted-registries">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Near Future: Hosted Registries</h2>

        <p class="text-lg mb-4">At the start, websites like <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code> can host Tile Registries and Flow Builders:</p>

        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
            <li>Developers publish reusable tiles.</li>
            <li>Users combine tiles into App Flows via a simple web builder.</li>
            <li>Flows are shared as URLs.</li>
        </ul>

        <p class="text-lg mb-4">Multiple providers could host registries — just like multiple app stores exist today.</p>
        <p class="text-lg mb-6">Some registries may specialize (travel, fitness, education), while others remain general-purpose.</p>
    </section>

    <section id="long-term-os-level">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Long-Term Goal: OS-Level Mosaic</h2>

        <p class="text-lg mb-4">Over time, Mosaic could move deeper into the operating system, just like app stores and file explorers did.</p>

        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
            <li>The Tile Registry becomes part of OS settings (where you choose which registries to trust).</li>
            <li>App Flows become OS-native adaptive apps, disposable and self-updating.</li>
            <li>Users don't manage dozens of installs. They simply trigger flows by expressing goals.</li>
        </ul>

        <p class="text-lg mb-4">This is where Mosaic diverges from MCP (Model Context Protocol):</p>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <ul class="text-lg space-y-3 list-disc pl-6">
                <li><strong>MCP</strong> focuses on chat-based interaction — you ask, it responds.</li>
                <li><strong>Mosaic</strong> delivers app-based experiences — not a conversation, but a disposable, adaptive app that appears, serves its purpose, and disappears.</li>
            </ul>
        </div>

        <p class="text-lg mb-6"><strong>Mosaic = chatless orchestration + goal-driven adaptive apps.</strong></p>
    </section>

    <section id="the-roadmap">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Roadmap</h2>

        <div class="space-y-8">
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <h3 class="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Today</h3>
                <ul class="text-lg space-y-2 list-disc pl-6">
                    <li><code class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">&#123;abc.com&#125;</code> as a container PWA.</li>
                    <li>App Flows are just routes (<code class="bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">/appflow/:flowId</code>) inside it.</li>
                    <li>Install once, open any flow by link.</li>
                </ul>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <h3 class="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">Near Future</h3>
                <ul class="text-lg space-y-2 list-disc pl-6">
                    <li>Multiple hosted registries.</li>
                    <li>Flow builders for families, teams, communities.</li>
                    <li>Sharing flows feels like sharing docs or playlists.</li>
                </ul>
            </div>

            <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                <h3 class="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">Long Term</h3>
                <ul class="text-lg space-y-2 list-disc pl-6">
                    <li>Registry management at the OS level.</li>
                    <li>Adaptive App Flows become first-class citizens of the OS.</li>
                    <li>Apps as we know them give way to goal-driven flows.</li>
                </ul>
            </div>
        </div>
    </section>

    <section id="why-this-matters">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why This Matters</h2>

        <p class="text-lg mb-4">PWAs let us build Mosaic today — with one container app and flows as routes. Hosting registries at sites like <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">&#123;abc.com&#125;</code> lets users and developers experiment now.</p>

        <p class="text-lg mb-4">But the long-term vision is bigger: Mosaic as an OS-native orchestrator, with registries managed at the system level. Unlike MCP's chat-first approach, Mosaic enables goal-first disposable apps that adapt and disappear when finished.</p>

        <div class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-6 border border-indigo-200 dark:border-indigo-800">
            <p class="text-xl font-semibold text-center mb-4">The future isn't about apps you hunt down and install.</p>
            <p class="text-xl font-semibold text-center">It's about flows that find you, adapt with you, and vanish when the job is done.</p>
        </div>
    </section>

    <section id="homework-for-you">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Homework for You</h2>

        <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 mb-6 border border-orange-200 dark:border-orange-800">
            <p class="text-lg mb-4"><strong>👉 Homework 1:</strong> Look at the URLs you used today. How many of them could be App Flows inside one container PWA instead of separate apps?</p>

            <p class="text-lg"><strong>👉 Homework 2:</strong> If you're technical, read a PWA manifest on one of your installed web apps. Notice the scope field. Can you imagine how <code class="bg-orange-100 dark:bg-orange-800 px-2 py-1 rounded">/appflow/:flowId</code> could all be grouped under one container?</p>
        </div>
    </section>
</BaseSeriesPage>