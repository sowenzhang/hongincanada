<script>
    import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
    import { getMosaicArticleData, getMosaicNavigationData } from '$lib/data/mosaicSeriesData';

    // Get data from the centralized mosaic series data
    const articleData = getMosaicArticleData(3);
    const navigation = getMosaicNavigationData(3);

    // Ensure data exists (shouldn't happen for valid part numbers, but TypeScript safety)
    if (!articleData || !navigation) {
        throw new Error('Article data not found for Part 3');
    }

    // Table of contents
    const tableOfContents = [
        { id: "core-building-blocks", title: "The Core Building Blocks", level: 1 },
        { id: "context-engine", title: "1. The Context Engine", level: 2 },
        { id: "registry-of-tiles", title: "2. The Registry of Tiles", level: 2 },
        { id: "the-composer", title: "3. The Composer", level: 2 },
        { id: "security-control", title: "4. Security & Control", level: 2 },
        { id: "why-pwas-bridge", title: "Why PWAs Are the Bridge", level: 1 },
        { id: "role-of-llms", title: "The Role of LLMs", level: 1 },
        { id: "why-this-matters", title: "Why This Matters", level: 1 },
        { id: "homework-for-you", title: "Homework for You", level: 1 }
    ];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
    <!-- Main content -->
    <section id="intro">
        <p class="text-xl leading-relaxed mb-8">So far, we've looked at the <em>why</em> of Mosaic: today's apps create friction, and App Flows adapt to your journey like a living companion.</p>

        <p class="text-xl leading-relaxed mb-8">Now, let's look at the <em>how</em>. What would it take to actually build Mosaic with today's technology?</p>
    </section>

    <section id="core-building-blocks">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Core Building Blocks</h2>

        <p class="text-lg mb-8">To make App Flows real, Mosaic relies on four components:</p>

        <div class="mb-12">
            <img
                src="/mosaic-series/core-architectural-design.jpg"
                alt="Core architectural design showing the four building blocks of Mosaic: Context Engine, Registry of Tiles, Composer, and Security & Control"
                class="w-full rounded-lg shadow-lg mb-4"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 italic text-center">
                The four core building blocks that make Mosaic App Flows possible
            </p>
        </div>

        <section id="context-engine">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">1. The Context Engine</h3>

            <p class="text-lg mb-4">This is the brain of Mosaic.</p>

            <p class="text-lg mb-4">Powered by a Large Language Model (LLM), it interprets a user's intent: "I'm visiting Tokyo," "I'm preparing for a check-up," "I'm starting a new class."</p>

            <p class="text-lg mb-4">It uses signals like time, location, role, and past behavior to understand what stage of the journey you're in.</p>

            <p class="text-lg mb-6">Unlike today's chatbots, which just respond to prompts, the Context Engine continuously updates context and reshapes the App Flow as your journey evolves.</p>
        </section>

        <section id="registry-of-tiles">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">2. The Registry of Tiles</h3>

            <p class="text-lg mb-4">The Tile Registry is the keystone of Mosaic — and the part that makes it more than "just another MCP."</p>

            <p class="text-lg mb-4">In MCP, registries expose APIs that an agent can call.</p>

            <p class="text-lg mb-6">In Mosaic, registries expose <strong>tiles</strong>: modular units made of three layers:</p>

            <div class="space-y-8">
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                    <h4 class="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Logic Layer</h4>
                    <p class="text-lg mb-4">Defines what the tile does.</p>
                    <p class="text-lg mb-4">Exposed as functions or API wrappers.</p>
                    <p class="text-lg mb-4 font-medium">Example (TypeScript):</p>

                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-typescript">// logic.ts
export async function getWeather(location: string) &#123;
  const response = await fetch(`/api/weather?loc=$&#123;location&#125;`);
  return await response.json();
&#125;</code></pre>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                    <h4 class="text-xl font-semibold mb-3 text-green-800 dark:text-green-200">Presentation Layer</h4>
                    <p class="text-lg mb-4">Defines how the tile looks inside an App Flow.</p>
                    <p class="text-lg mb-4">Built as reusable components (Web Components, Svelte, React, or Lit).</p>
                    <p class="text-lg mb-4">Supports different modes: card, widget, popup.</p>
                    <p class="text-lg mb-4 font-medium">Example (Svelte):</p>

                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-svelte">&lt;!-- WeatherTile.svelte --&gt;
&lt;script lang="ts"&gt;
  export let weather: &#123; temp: number; condition: string &#125;;
&lt;/script&gt;

&lt;div class="tile card"&gt;
  &lt;h3&gt;Weather&lt;/h3&gt;
  &lt;p&gt;&#123;weather.temp&#125;°C — &#123;weather.condition&#125;&lt;/p&gt;
&lt;/div&gt;</code></pre>
                </div>

                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                    <h4 class="text-xl font-semibold mb-3 text-purple-800 dark:text-purple-200">Metadata Layer</h4>
                    <p class="text-lg mb-4">Tells the Composer when and how to use the tile.</p>
                    <p class="text-lg mb-4 font-medium">Example manifest (JSON):</p>

                    <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-json">&#123;
  "name": "WeatherTile",
  "version": "1.0.0",
  "provider": "Community",
  "logic": "./logic.ts",
  "presentation": &#123;
    "modes": ["card", "widget"],
    "component": "./WeatherTile.svelte",
    "props": &#123;
      "weather": "object"
    &#125;
  &#125;,
  "metadata": &#123;
    "context": ["travel", "daily-life"],
    "priority": "medium",
    "pairsWith": ["MapTile"]
  &#125;
&#125;</code></pre>
                </div>
            </div>

            <p class="text-lg mt-6">So the registry doesn't store raw UI or screenshots. It stores logic modules, UI components, and metadata — everything needed for the Composer to use the tile.</p>
        </section>

        <section id="the-composer">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">3. The Composer</h3>

            <p class="text-lg mb-4">The Composer is the layout and integration engine.</p>

            <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                <li>It receives a set of relevant tiles from the Context Engine.</li>
                <li>It looks at each tile's manifest (logic + presentation + metadata).</li>
                <li>It decides:
                    <ul class="list-disc pl-6 mt-2 space-y-1">
                        <li>Which tiles to show.</li>
                        <li>In what order.</li>
                        <li>In what presentation mode (card, widget, popup).</li>
                    </ul>
                </li>
            </ul>

            <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">How the Composer Renders Tiles</h4>

            <p class="text-lg mb-4">The Composer uses a shared design system (like Tailwind, Material UI, or a custom theme) to keep tiles consistent.</p>

            <p class="text-lg mb-4">It mounts tile components dynamically, passing in data as props.</p>

            <p class="text-lg mb-4 font-medium">Example flow:</p>

            <ol class="text-lg space-y-2 mb-6 list-decimal pl-6">
                <li>Context Engine says weather is relevant.</li>
                <li>Composer imports <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">logic.ts</code>, runs <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">getWeather("Tokyo")</code>.</li>
                <li>Composer mounts <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">WeatherTile.svelte</code> in card mode, passing weather as props.</li>
            </ol>

            <p class="text-lg mb-6">With existing web tech (dynamic imports, Web Components, Svelte/React), this is totally possible today.</p>

            <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Handling Multiple Tiles for the Same Thing</h4>

            <p class="text-lg mb-4">What if there are multiple tiles for weather or translation? Mosaic handles this in layers:</p>

            <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                <li><strong>Registry curation</strong> — verified tiles can be highlighted.</li>
                <li><strong>Context Engine arbitration</strong> — the LLM can pick based on metadata (offline support, reputation, integration).</li>
                <li><strong>User override</strong> — users can swap tiles if they prefer a different one.</li>
                <li><strong>Coexistence</strong> — in some cases, multiple tiles can appear side by side.</li>
            </ul>

            <p class="text-lg mb-6">This avoids today's app-store chaos while still allowing competition.</p>
        </section>

        <section id="security-control">
            <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">4. Security &amp; Control</h3>

            <p class="text-lg mb-4">Dynamic apps need trust. Mosaic provides:</p>

            <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
                <li><strong>Version locking</strong> — freeze your App Flow at a safe state.</li>
                <li><strong>Rollback</strong> — undo unexpected updates.</li>
                <li><strong>Verified tiles</strong> — signed by trusted providers.</li>
                <li><strong>User overrides</strong> — control which tiles get used.</li>
            </ul>

            <p class="text-lg mb-6">This ensures flexibility without sacrificing control.</p>
        </section>
    </section>

    <section id="why-pwas-bridge">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why PWAs Are the Bridge</h2>

        <p class="text-lg mb-4">We don't need to invent a new OS to make this work. Progressive Web Apps (PWAs) already give us:</p>

        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
            <li><strong>Self-updating behavior</strong> (Service Workers).</li>
            <li><strong>Cross-platform reach</strong> (runs in browsers, mobile, desktop).</li>
            <li><strong>Installability</strong> (can live on the home screen or open via link).</li>
            <li><strong>Offline support</strong> (cached tiles, limited resilience).</li>
        </ul>

        <p class="text-lg mb-6">PWAs are the perfect near-term vehicle for Mosaic — an App Flow could be shared as a link, installed instantly, and evolve dynamically.</p>

        <h3 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">PWA Limitations</h3>

        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
            <li>Limited access to device APIs (push, Bluetooth, sensors).</li>
            <li>Discoverability bias (native apps favored in app stores).</li>
            <li>On iOS, stricter background and storage restrictions.</li>
        </ul>

        <p class="text-lg mb-6">So while PWAs can't yet replace every native app, they can already demonstrate the App Flow model in practice.</p>
    </section>

    <section id="role-of-llms">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Role of LLMs</h2>

        <p class="text-lg mb-4">The LLM-powered Context Engine is what ties it all together:</p>

        <div class="space-y-6 mb-8">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Interpret intent</h4>
                <p class="text-lg mb-2"><strong>User says:</strong> "I'm visiting Tokyo."</p>
                <p class="text-lg"><strong>LLM infers sub-goals:</strong> flights, hotels, maps, translation, restaurants.</p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Query registry</h4>
                <p class="text-lg">Finds relevant tiles: FlightTile, HotelTile, MapTile, TranslateTile.</p>
            </div>

            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h4 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Assemble flow</h4>
                <p class="text-lg">Tells Composer which tiles to render, in what order, and in what mode.</p>
            </div>
        </div>

        <p class="text-lg mb-6">The result: a persistent, adaptive App Flow that evolves with you, rather than static apps you have to juggle.</p>
    </section>

    <section id="why-this-matters">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why This Matters</h2>

        <p class="text-lg mb-4">With these pieces, Mosaic is not science fiction. Using today's tech:</p>

        <ul class="text-lg space-y-2 mb-6 list-disc pl-6">
            <li>Logic can be written as functions or API wrappers.</li>
            <li>UI can be packaged as components.</li>
            <li>Manifests can live in a registry (like NPM for tiles).</li>
            <li>PWAs can deliver adaptive App Flows cross-platform.</li>
            <li>LLMs can interpret user intent and orchestrate flows.</li>
        </ul>

        <p class="text-lg mb-6">Together, they transform apps from static silos into <strong>Living Companions</strong> that grow and adapt with your context — location, time, role, and goals.</p>
    </section>

    <section id="homework-for-you">
        <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Homework for You</h2>

        <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 mb-6 border border-orange-200 dark:border-orange-800">
            <p class="text-lg mb-4"><strong>👉 Homework 1:</strong> Pick one task you'd describe in a sentence ("I'm moving to a new house," "I'm training for a marathon"). What tiles would you need if Mosaic built an App Flow for you?</p>

            <p class="text-lg"><strong>👉 Homework 2 (for builders):</strong> Take one feature from your app and imagine it as a tile. Write a simple manifest:</p>
            <ul class="text-lg space-y-2 mt-4 list-disc pl-6">
                <li>What logic would you export?</li>
                <li>What UI component would you package?</li>
                <li>What metadata would you declare?</li>
            </ul>
        </div>
    </section>
</BaseSeriesPage>
