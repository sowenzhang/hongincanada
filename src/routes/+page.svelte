<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import { onMount } from 'svelte';

	// Page metadata
	const pageData = {
		title: 'Hong in Canada — Product Builder, HCI, Engineering Leadership',
		description:
			'Product Builder with a passion for building products that people love. Background in HCI with Product Mindset.',
		canonical: 'https://www.hongincanada.com',
		ogImage: 'https://www.hongincanada.com/profile.png'
	};

	// Hero entrance animation — multi-stage cinematic reveal
	let stage = $state(0); // 0=hidden, 1=bg, 2=line, 3=greeting, 4=name, 5=tagline, 6=subtagline, 7=cta, 8=scroll

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			stage = 8;
			return;
		}

		// Cinematic staggered entrance
		const timings = [100, 400, 800, 1000, 1500, 1900, 2300, 2800];
		const timeouts: ReturnType<typeof setTimeout>[] = [];
		timings.forEach((ms, i) => {
			timeouts.push(setTimeout(() => { stage = i + 1; }, ms));
		});

		return () => timeouts.forEach(clearTimeout);
	});

	function generateEmailLink() {
		const email = 'me@hongincanada.com';
		return `mailto:${email}`;
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
        "jobTitle": "Engineering/Product Lead",
        "description": "Engineering/Product Lead with a passion for building products that people love. Background in HCI with Product Mindset.",
        "url": "https://www.hongincanada.com",
        "sameAs": [
            "https://www.linkedin.com/in/keepsrunning/",
            "https://github.com/sowenzhang",
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

<!-- ============================================ -->
<!-- HERO: Refined editorial typographic entrance -->
<!-- ============================================ -->
<section
	class="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
	style="background: var(--bg);"
	itemscope
	itemtype="https://schema.org/Person"
>
	<!-- Quiet accent wash at the top -->
	<div
		class="hero-bg-reveal hero-gradient-mesh pointer-events-none absolute inset-0"
		style="opacity: {stage >= 1 ? 1 : 0};"
	></div>

	<div class="relative z-10 mx-auto w-full max-w-4xl px-6 sm:px-8">
		<!-- Eyebrow -->
		<p
			class="hero-text-reveal mb-5 flex items-center gap-3 text-sm"
			style="color: var(--faint); opacity: {stage >= 3 ? 1 : 0}; transform: translateY({stage >= 3 ? '0' : '14px'});"
		>
			<span class="inline-block h-px w-8" style="background: var(--accent);"></span>
			Hello, I'm
		</p>

		<!-- Name -->
		<h1
			class="hero-name-dramatic mb-6 font-serif text-7xl font-medium leading-[0.95] tracking-tight md:text-8xl lg:text-9xl"
			style="color: var(--text); opacity: {stage >= 4 ? 1 : 0}; transform: translateY({stage >= 4 ? '0' : '18px'}); filter: blur({stage >= 4 ? '0px' : '10px'});"
		>
			<span itemprop="name">Hong</span><span style="color: var(--accent);">.</span>
		</h1>

		<!-- Positioning line -->
		<p
			class="hero-text-reveal mb-4 max-w-2xl text-2xl font-medium md:text-3xl"
			style="color: var(--text); opacity: {stage >= 5 ? 1 : 0}; transform: translateY({stage >= 5 ? '0' : '14px'});"
			itemprop="description"
		>
			<span itemprop="jobTitle">Product Builder</span> · HCI ·
			<span class="whitespace-nowrap">Engineering Leadership</span>
		</p>

		<!-- Sub-tagline -->
		<p
			class="hero-text-reveal mb-10 max-w-xl text-lg leading-relaxed"
			style="color: var(--muted); opacity: {stage >= 6 ? 1 : 0}; transform: translateY({stage >= 6 ? '0' : '12px'});"
		>
			I build AI-powered products from 0 → 1, fast — designing systems where ideas
			turn into working software in days, not months.
		</p>

		<!-- CTAs -->
		<div
			class="hero-cta-pop flex flex-wrap items-center gap-3"
			style="opacity: {stage >= 7 ? 1 : 0}; transform: translateY({stage >= 7 ? '0' : '12px'});"
		>
			<a
				href="#projects"
				class="rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors"
				style="background: var(--accent);"
				onmouseover={(e) => (e.currentTarget.style.background = 'var(--accent-strong)')}
				onfocus={(e) => (e.currentTarget.style.background = 'var(--accent-strong)')}
				onmouseout={(e) => (e.currentTarget.style.background = 'var(--accent)')}
				onblur={(e) => (e.currentTarget.style.background = 'var(--accent)')}
			>
				See my work
			</a>
			<a
				href="#writing"
				class="rounded-full border px-6 py-3 text-sm font-semibold transition-colors"
				style="border-color: var(--border-strong); color: var(--text);"
			>
				Read the writing
			</a>
			<a
				href="#contact"
				class="px-2 py-3 text-sm font-semibold underline decoration-1 underline-offset-4 transition-colors"
				style="color: var(--accent);"
			>
				Get in touch →
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		class="hero-text-reveal absolute bottom-8 left-1/2 -translate-x-1/2"
		style="opacity: {stage >= 8 ? 1 : 0};"
	>
		<div class="flex animate-bounce flex-col items-center gap-2" style="color: var(--faint);">
			<span class="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
			<i class="fas fa-chevron-down text-xs"></i>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- PROJECTS: What I Build                       -->
<!-- ============================================ -->
<section id="projects" class="section-glow py-24" style="background: var(--bg);" itemscope itemtype="https://schema.org/CreativeWork">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-16 text-center">
				<p class="eyebrow mb-3">Projects</p>
				<h2 class="font-serif text-4xl font-medium md:text-5xl" style="color: var(--text);">What I Build</h2>
				<p class="mx-auto mt-4 max-w-xl" style="color: var(--muted);">
					Products I've shipped that are live and serving users. Every one started with a real problem.
				</p>
			</div>
		</ScrollReveal>

		<!-- Featured Live Projects -->
		<div class="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- NoCloud Chat -->
			<ScrollReveal delay={100}>
				<a
					href="https://github.com/sowenzhang/Nocloud"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex h-full flex-col rounded-2xl p-6"
					itemscope
					itemtype="https://schema.org/SoftwareApplication"
				>
					<div class="mb-4 flex items-center justify-between">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
							<i class="fas fa-shield-halved text-xl text-emerald-400"></i>
						</div>
						<div class="flex items-center gap-2">
							<span class="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
								<i class="fab fa-github text-[10px]"></i> Open Source
							</span>
							<i class="fas fa-external-link-alt text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-emerald-400"></i>
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white" itemprop="name">NoCloud Chat</h3>
					<p class="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400" itemprop="description">
						A messaging app for home. Works within your subnet — no registration, no cloud, complete privacy.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">Privacy-First</span>
						<span class="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-medium text-orange-400">Local Network</span>
						<span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">Messaging</span>
					</div>
				</a>
			</ScrollReveal>

			<!-- NearbyGame.com -->
			<ScrollReveal delay={200}>
				<a
					href="https://nearbygame.com"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex h-full flex-col rounded-2xl p-6"
					itemscope
					itemtype="https://schema.org/SoftwareApplication"
				>
					<div class="mb-4 flex items-center justify-between">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10">
							<i class="fas fa-location-dot text-xl text-teal-400"></i>
						</div>
						<div class="flex items-center gap-2">
							<span class="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] font-medium text-green-400">
								<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>Live
							</span>
							<i class="fas fa-external-link-alt text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-teal-400"></i>
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white" itemprop="name">NearbyGame.com</h3>
					<p class="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400" itemprop="description">
						A calming experience: just walk, relax, explore, collect, and learn about the world nearby.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">SvelteKit</span>
						<span class="rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-[10px] font-medium text-yellow-400">Tauri</span>
						<span class="rounded-full bg-pink-500/10 px-2.5 py-0.5 text-[10px] font-medium text-pink-400">Community</span>
					</div>
				</a>
			</ScrollReveal>

			<!-- Minibreaks.io -->
			<ScrollReveal delay={300}>
				<a
					href="https://minibreaks.io"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex h-full flex-col rounded-2xl p-6"
					itemscope
					itemtype="https://schema.org/SoftwareApplication"
				>
					<div class="mb-4 flex items-center justify-between">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10">
							<i class="fas fa-spa text-xl text-blue-400"></i>
						</div>
						<div class="flex items-center gap-2">
							<span class="flex items-center gap-1.5 rounded-full bg-green-500/10 px-2.5 py-1 text-[10px] font-medium text-green-400">
								<span class="h-1.5 w-1.5 rounded-full bg-green-400"></span>Live
							</span>
							<i class="fas fa-external-link-alt text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-blue-400"></i>
						</div>
					</div>
					<h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white" itemprop="name">Minibreaks.io</h3>
					<p class="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400" itemprop="description">
						An AI-driven product engine: One app every week. Built using structured AI workflows and rapid iteration loops.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">SvelteKit</span>
						<span class="rounded-full bg-green-500/10 px-2.5 py-0.5 text-[10px] font-medium text-green-400">AI-Powered</span>
						<span class="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-medium text-purple-400">Mental Health</span>
					</div>
				</a>
			</ScrollReveal>
		</div>

		<!-- Secondary Projects -->
		<ScrollReveal delay={100}>
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
				<a
					href="https://apps.microsoft.com/detail/9p6jx7l8f0x9"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex min-h-[88px] items-start gap-4 rounded-xl p-5"
				>
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-teal-500/10">
						<i class="fas fa-check-double text-teal-400"></i>
					</div>
					<div class="min-w-0">
						<h4 class="font-semibold text-gray-900 dark:text-white">CrossIt</h4>
						<p class="text-xs leading-relaxed text-gray-500">A lightweight habit helper for recurring routines</p>
					</div>
					<i class="fas fa-arrow-right ml-auto mt-1 text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>
				<a
					href="https://apps.microsoft.com/detail/9n8r514363br"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex min-h-[88px] items-start gap-4 rounded-xl p-5"
				>
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
						<i class="fas fa-robot text-purple-400"></i>
					</div>
					<div class="min-w-0">
						<h4 class="font-semibold text-gray-900 dark:text-white">FakeBlueScreen</h4>
						<p class="text-xs leading-relaxed text-gray-500">A legitimate excuse to procrastinate, prank it!</p>
					</div>
					<i class="fas fa-arrow-right ml-auto mt-1 text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>
				<a
					href="https://apps.microsoft.com/detail/9mtg2ff7rnq4"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex min-h-[88px] items-start gap-4 rounded-xl p-5"
				>
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
						<i class="fas fa-images text-emerald-400"></i>
					</div>
					<div class="min-w-0">
						<h4 class="font-semibold text-gray-900 dark:text-white">FotoAssemblyLine</h4>
						<p class="text-xs leading-relaxed text-gray-500">Batch image processing, watermarking, & filters</p>
					</div>
					<i class="fas fa-arrow-right ml-auto mt-1 text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- WRITING: What I Think                        -->
<!-- ============================================ -->
<section id="writing" class="section-glow py-24" style="background: var(--surface-2);">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-16 text-center">
				<p class="eyebrow mb-3">Writing</p>
				<h2 class="font-serif text-4xl font-medium md:text-5xl" style="color: var(--text);">What I Think</h2>
				<p class="mx-auto mt-4 max-w-xl" style="color: var(--muted);">
					Ideas on product design, engineering with AI, and rethinking how software should work.
				</p>
			</div>
		</ScrollReveal>

		<ScrollReveal>
			<div class="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
				<!-- Latest blog first: duplicate this block to add future posts -->
				<article class="h-full">
					<a href="/blog/loop-engineering" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
								<i class="fas fa-arrows-rotate text-cyan-400"></i>
							</div>
							<span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-400">
								LATEST BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 transition group-hover:text-cyan-300 dark:text-white">
							Loop Engineering: Building Web Apps with an Agent in the Loop
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							Why an AI agent needs a governed loop of observation, objective gates, iteration, and honest stopping to ship reliable web apps.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-cyan-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/building-deckmark" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/10">
								<i class="fas fa-wand-magic-sparkles text-indigo-400"></i>
							</div>
							<span class="rounded-full bg-indigo-500/10 px-2.5 py-1 text-[10px] font-medium text-indigo-400">
								LATEST BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 transition group-hover:text-indigo-300 dark:text-white">
							Building Deckmark: Closing the Feedback Loop for AI-Generated Slide Decks
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							An MCP server that lets you click directly on slide elements to give feedback to an AI agent. Why I built it, and the human-in-the-loop pattern behind it.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-indigo-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/nearbygame-what-i-learned" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
								<i class="fas fa-route text-emerald-400"></i>
							</div>
							<span class="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
								BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 transition group-hover:text-emerald-300 dark:text-white">
							What I Learned Building a Walking Game With AI's Help
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							Geography, ambient audio, and the pain of Microsoft Store IAP — a year of solo dev notes from building NearbyGame.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-emerald-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/app-flow-first-pilot" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
								<i class="fas fa-link text-orange-400"></i>
							</div>
							<span class="rounded-full bg-orange-500/10 px-2.5 py-1 text-[10px] font-medium text-orange-400">
								BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 transition group-hover:text-orange-300 dark:text-white">
							App Flow: First Pilot
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							A practical pilot of disposable micro-apps that chain from Squad Shuffer to Group Qualifier to Tournament Bracket, with optional paths for different match formats.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-orange-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/nearbygame-pivot" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
								<i class="fas fa-route text-emerald-400"></i>
							</div>
							<span class="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
								BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 transition group-hover:text-emerald-300 dark:text-white">
							How I Pivoted NearbyGame and Used AI to Go From 0 to 1
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							Why I abandoned a venue-discovery idea, reframed the problem with AI, and turned NearbyGame into a calm walking experience built for one user first.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-emerald-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/introducing-crossit" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10">
								<i class="fas fa-check-double text-teal-400"></i>
							</div>
							<span class="rounded-full bg-teal-500/10 px-2.5 py-1 text-[10px] font-medium text-teal-400">
								BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-teal-300 transition">
							Introducing CrossIt: A Lightweight Habit Helper
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							A simple local-first habit helper focused on one action: complete a routine and cross it off.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-teal-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/minibreaks-pivot" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
								<i class="fas fa-leaf text-orange-400"></i>
							</div>
							<span class="rounded-full bg-orange-500/10 px-2.5 py-1 text-[10px] font-medium text-orange-400">
								BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-300 transition">
							MiniBreaks Pivot: From Wellness to Micro-Apps
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							Why I pivoted MiniBreaks into a weekly micro-app experiment, and how I structured AI roles to ship one tiny app every week.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-orange-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/blog/why-i-build-nocloud-chat" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
								<i class="fas fa-cloud text-cyan-400"></i>
							</div>
							<span class="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-400">
								BLOG
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-300 transition">
							Why Do I Build NoCloud Chat
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							Why I built a local-first chat app with no registration and no cloud dependency.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-cyan-400 transition group-hover:gap-3">
							Read Post <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/mosaic" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
								<i class="fas fa-th text-purple-400"></i>
							</div>
							<span class="rounded-full bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium text-purple-400">
								4-PART ARTICLE
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-300 transition">
							Mosaic: From App Stores to App Flows
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							A vision that replaces app stores with seamless, context-aware app flows.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-purple-400 transition group-hover:gap-3">
							Read Article <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>

				<article class="h-full">
					<a href="/series" class="glass-card group flex h-full min-h-[240px] flex-col rounded-2xl p-6">
						<div class="mb-4 flex items-center gap-3">
							<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
								<i class="fas fa-robot text-emerald-400"></i>
							</div>
							<span class="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
								10-PART SERIES
							</span>
						</div>
						<h3 class="writing-card-title mb-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-300 transition">
							How I Built MiniBreaks.io With AI
						</h3>
						<p class="writing-card-description mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							The full story of building a complete website with AI from idea to deployment.
						</p>
						<span class="flex items-center gap-2 text-sm font-medium text-emerald-400 transition group-hover:gap-3">
							Read Series <i class="fas fa-arrow-right text-xs"></i>
						</span>
					</a>
				</article>
			</div>
		</ScrollReveal>

		<!-- Coming soon teaser -->
		<ScrollReveal delay={400}>
			<p class="mt-10 text-center text-sm text-gray-600">
				<i class="fas fa-pen-nib mr-1"></i> More articles in the works — stay tuned.
			</p>
		</ScrollReveal>
	</div>
</section>

<style>
	.writing-card-title {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		line-clamp: 2;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}

	.writing-card-description {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		line-clamp: 3;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>

<!-- ============================================ -->
<!-- ABOUT: The Journey                           -->
<!-- ============================================ -->
<section id="about" class="section-glow py-24" style="background: var(--bg);" itemscope itemtype="https://schema.org/AboutPage">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-16 text-center">
				<p class="eyebrow mb-3">Background</p>
				<h2 class="font-serif text-4xl font-medium md:text-5xl" style="color: var(--text);">The Journey</h2>
			</div>
		</ScrollReveal>

		<div class="mx-auto max-w-3xl">
			<!-- Identity statement -->
			<ScrollReveal>
				<div class="mb-16 text-center" itemprop="about">
					<p class="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
						With a Master's in <strong class="text-gray-900 dark:text-white">Human-Computer Interaction</strong>, I bridge the gap between technology and people.
						I think like a product manager, build like an engineer, and always start with the user.
					</p>
				</div>
			</ScrollReveal>

			<!-- Timeline -->
			<div class="relative border-l border-gray-200 dark:border-white/10 pl-8 space-y-12 ml-4">
				<!-- Education -->
				<ScrollReveal delay={100}>
					<div class="relative">
						<div class="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 ring-2 ring-blue-500/30">
							<i class="fas fa-graduation-cap text-sm text-blue-400"></i>
						</div>
						<div class="glass-card rounded-xl p-5">
							<h3 class="font-bold text-gray-900 dark:text-white">Master's in HCI</h3>
							<p class="text-sm text-gray-500">University of Manitoba</p>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Where I learned that the best technology is invisible: it should just work for users.</p>
						</div>
					</div>
				</ScrollReveal>

				<!-- Software Engineer -->
				<ScrollReveal delay={200}>
					<div class="relative">
						<div class="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 ring-2 ring-emerald-500/30">
							<i class="fas fa-laptop-code text-sm text-emerald-400"></i>
						</div>
						<div class="glass-card rounded-xl p-5">
							<h3 class="font-bold text-gray-900 dark:text-white">Software Engineer</h3>
							<p class="text-sm text-gray-500">Business Consulting · Starbucks · Microsoft</p>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Shipped products at scale. Also built independent apps on the side — because I can't stop building.</p>
						</div>
					</div>
				</ScrollReveal>

				<!-- Engineering Manager -->
				<ScrollReveal delay={300}>
					<div class="relative">
						<div class="absolute -left-[2.6rem] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 ring-2 ring-purple-500/30">
							<i class="fas fa-users text-sm text-purple-400"></i>
						</div>
						<div class="glass-card rounded-xl p-5">
							<h3 class="font-bold text-gray-900 dark:text-white">Product Builder & Engineering Leadership</h3>
							<p class="text-sm text-gray-500">Still always building products and applying engineering lean principles</p>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">I lead teams to build scalable software while fostering collaboration, learning, and a relentless focus on the user.
Never stop building products in the last 10+ years.
							</p>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- THE HUMAN: Personality & Interests           -->
<!-- ============================================ -->
<section class="section-glow py-24" style="background: var(--surface-2);">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="eyebrow mb-3">Life</p>
				<h2 class="font-serif text-4xl font-medium md:text-5xl" style="color: var(--text);">Beyond the Code</h2>
			</div>
		</ScrollReveal>

		<div class="mx-auto max-w-4xl">
			<div class="grid gap-8 md:grid-cols-2">
				<!-- Photos -->
				<ScrollReveal delay={100}>
					<div class="flex flex-col gap-4">
						<div class="glass-card overflow-hidden rounded-2xl">
							<img
								src="/melody.jpg"
								loading="lazy"
								alt="Melody — Hong's cat"
								class="h-48 w-full object-cover grayscale"
							/>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="glass-card overflow-hidden rounded-2xl">
								<img
									src="/otto.jpg"
									loading="lazy"
									alt="Otto — Hong's cat"
									class="h-40 w-full object-cover"
								/>
							</div>
							<div class="glass-card overflow-hidden rounded-2xl">
								<img
									src="/AI-me-and-otto.jpg"
									loading="lazy"
									alt="Hong and Otto together"
									class="h-40 w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</ScrollReveal>

				<!-- Interests -->
				<ScrollReveal delay={200}>
					<div class="flex h-full flex-col justify-center">
						<p class="mb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
							When I'm not building products or leading teams, you'll find me running trails around the Seattle area,
							playing table tennis (still learning — still improving), or being bossed around by Melody and Otto.
						</p>
						<p class="mb-6 text-sm italic text-gray-500 dark:text-gray-400 leading-relaxed">
							In loving memory of Melody. You are deeply missed and always in our hearts.
						</p>
						<div class="flex flex-wrap gap-3">
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-running mr-2 text-orange-400"></i>Running
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-table-tennis-paddle-ball mr-2 text-red-400"></i>Table Tennis
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-cat mr-2 text-purple-400"></i>Cats
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-swatchbook mr-2 text-yellow-400"></i>UX Design
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-microscope mr-2 text-yellow-400"></i>HCI Researcher
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-lightbulb mr-2 text-blue-400"></i>Product Mindset
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-wand-magic-sparkles mr-2 text-indigo-400"></i>AI Builder
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-drafting-compass mr-2 text-emerald-400"></i>UX Thinking
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-people-group mr-2 text-cyan-400"></i>Engineering Lead
							</span>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- CONNECT: Let's Talk                          -->
<!-- ============================================ -->
<section id="contact" class="section-glow py-24" style="background: var(--bg);">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="eyebrow mb-3">Connect</p>
				<h2 class="font-serif text-4xl font-medium md:text-5xl" style="color: var(--text);">Let's Talk</h2>
				<p class="mx-auto mt-4 max-w-lg" style="color: var(--muted);">
					I'd love to connect with fellow engineers, product enthusiasts, or anyone who just wants to say hi. Currently in the Seattle metro area.
				</p>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<div class="mx-auto grid max-w-2xl gap-3">
				<a
					href={generateEmailLink()}
					class="glass-card group flex items-center gap-4 rounded-xl p-4 transition"
				>
					<div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10">
						<i class="fas fa-envelope text-blue-400"></i>
					</div>
					<div>
						<h4 class="font-medium text-gray-900 dark:text-white">Email</h4>
						<p class="text-sm text-gray-500">The best way to reach me</p>
					</div>
					<i class="fas fa-arrow-right ml-auto text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>

				<a
					href="https://github.com/sowenzhang"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex items-center gap-4 rounded-xl p-4 transition"
				>
					<div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gray-500/10">
						<i class="fab fa-github text-gray-700 dark:text-gray-300"></i>
					</div>
					<div>
						<h4 class="font-medium text-gray-900 dark:text-white">GitHub</h4>
						<p class="text-sm text-gray-500">Open source & side projects</p>
					</div>
					<i class="fas fa-arrow-right ml-auto text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>

				<a
					href="https://www.linkedin.com/in/keepsrunning/"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex items-center gap-4 rounded-xl p-4 transition"
				>
					<div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/10">
						<i class="fab fa-linkedin-in text-blue-400"></i>
					</div>
					<div>
						<h4 class="font-medium text-gray-900 dark:text-white">LinkedIn</h4>
						<p class="text-sm text-gray-500">Professional network</p>
					</div>
					<i class="fas fa-arrow-right ml-auto text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>

				<a
					href="https://www.strava.com/athletes/6051008"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex items-center gap-4 rounded-xl p-4 transition"
				>
					<div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/10">
						<i class="fab fa-strava text-orange-400"></i>
					</div>
					<div>
						<h4 class="font-medium text-gray-900 dark:text-white">Strava</h4>
						<p class="text-sm text-gray-500">Running & fitness activities</p>
					</div>
					<i class="fas fa-arrow-right ml-auto text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>

				<a
					href="https://usatt.simplycompete.com/userAccount/up/189180?uai=189180"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex items-center gap-4 rounded-xl p-4 transition"
				>
					<div class="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-red-500/10">
						<i class="fas fa-table-tennis-paddle-ball text-red-400"></i>
					</div>
					<div>
						<h4 class="font-medium text-gray-900 dark:text-white">USATT</h4>
						<p class="text-sm text-gray-500">Table tennis rating — not great, but improving</p>
					</div>
					<i class="fas fa-arrow-right ml-auto text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>
