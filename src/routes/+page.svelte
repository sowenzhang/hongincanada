<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';
	import { onMount } from 'svelte';

	// Page metadata
	const pageData = {
		title: 'Hong in Canada — Engineering Manager, HCI, Product Builder',
		description:
			'Engineering Manager with a passion for building products that people love. Background in HCI with Product Mindset.',
		canonical: 'https://www.hongincanada.com',
		ogImage: 'https://www.hongincanada.com/profile.png'
	};

	// Hero entrance animation state
	let heroReady = $state(false);

	onMount(() => {
		// Trigger entrance animation
		requestAnimationFrame(() => {
			heroReady = true;
		});
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
<!-- HERO: Full-viewport immersive entrance       -->
<!-- ============================================ -->
<section
	class="hero-gradient-mesh relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
	itemscope
	itemtype="https://schema.org/Person"
>
	<!-- Subtle grid pattern overlay -->
	<div
		class="pointer-events-none absolute inset-0 opacity-[0.03]"
		style="background-image: radial-gradient(circle, currentColor 1px, transparent 1px); background-size: 32px 32px;"
	></div>

	<div class="relative z-10 mx-auto max-w-4xl px-4 text-center">
		<!-- Name -->
		<h1
			class="mb-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-1000 md:text-7xl lg:text-8xl {heroReady
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<span class="font-serif">Hello, I'm </span>
			<span class="gradient-text font-serif" itemprop="name">Hong</span>
		</h1>

		<!-- Tagline -->
		<p
			class="mb-3 text-lg text-gray-600 dark:text-gray-400 transition-all delay-300 duration-1000 md:text-xl {heroReady
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
			itemprop="description"
		>
			<span itemprop="jobTitle">Engineering/Product Lead</span> · HCI · Product Builder
		</p>

		<!-- Sub-tagline -->
		<p
			class="mb-10 text-sm text-gray-500 dark:text-gray-500 transition-all delay-500 duration-1000 md:text-base {heroReady
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			I build things that solve real problems for real people.
		</p>

		<!-- CTA links -->
		<div
			class="flex flex-wrap items-center justify-center gap-4 transition-all delay-700 duration-1000 {heroReady
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			<a
				href="#projects"
				class="rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 transition hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-white"
			>
				See My Work
			</a>
			<a
				href="#about"
				class="rounded-full border border-gray-300 dark:border-white/10 px-6 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 transition hover:border-gray-400 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white"
			>
				About Me
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-1000 duration-1000 {heroReady
			? 'opacity-100'
			: 'opacity-0'}"
	>
		<div class="flex animate-bounce flex-col items-center gap-2 text-gray-600">
			<span class="text-xs tracking-widest uppercase">Scroll</span>
			<i class="fas fa-chevron-down text-sm"></i>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- PROJECTS: What I Build                       -->
<!-- ============================================ -->
<section id="projects" class="section-glow bg-white dark:bg-gray-950 py-24" itemscope itemtype="https://schema.org/CreativeWork">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-16 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-blue-400">Projects</p>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">What I Build</h2>
				<p class="mx-auto mt-4 max-w-xl text-gray-500">
					Products I've shipped that are live and serving users. Every one started with a real problem.
				</p>
			</div>
		</ScrollReveal>

		<!-- Featured Live Projects -->
		<div class="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<!-- Minibreaks.io -->
			<ScrollReveal delay={100}>
				<a
					href="https://minibreaks.io"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group block rounded-2xl p-6"
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
					<p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400" itemprop="description">
						Mental health breaks in your workplace. Built with AI assistance — the subject of my 10-part series.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">SvelteKit</span>
						<span class="rounded-full bg-green-500/10 px-2.5 py-0.5 text-[10px] font-medium text-green-400">AI-Powered</span>
						<span class="rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[10px] font-medium text-purple-400">Mental Health</span>
					</div>
				</a>
			</ScrollReveal>

			<!-- NearbyGame.com -->
			<ScrollReveal delay={200}>
				<a
					href="https://nearbygame.com"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group block rounded-2xl p-6"
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
					<p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400" itemprop="description">
						Discover and join local games and sports. Connect with players, find your next match.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">SvelteKit</span>
						<span class="rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-[10px] font-medium text-yellow-400">Location</span>
						<span class="rounded-full bg-pink-500/10 px-2.5 py-0.5 text-[10px] font-medium text-pink-400">Community</span>
					</div>
				</a>
			</ScrollReveal>

			<!-- Nocloud -->
			<ScrollReveal delay={300}>
				<a
					href="https://github.com/sowenzhang/Nocloud"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group block rounded-2xl p-6"
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
					<h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white" itemprop="name">Nocloud</h3>
					<p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400" itemprop="description">
						A messaging app for home. Works within your subnet — no registration, no cloud, complete privacy.
					</p>
					<div class="flex flex-wrap gap-2">
						<span class="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">Privacy-First</span>
						<span class="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-[10px] font-medium text-orange-400">Local Network</span>
						<span class="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-400">Messaging</span>
					</div>
				</a>
			</ScrollReveal>
		</div>

		<!-- Secondary Projects -->
		<ScrollReveal delay={100}>
			<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
				<a
					href="https://apps.microsoft.com/detail/9n8r514363br"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex items-center gap-4 rounded-xl p-4"
				>
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
						<i class="fas fa-robot text-purple-400"></i>
					</div>
					<div class="min-w-0">
						<h4 class="font-semibold text-gray-900 dark:text-white">FakeBlueScreen</h4>
						<p class="truncate text-xs text-gray-500">A legitimate excuse to procrastinate</p>
					</div>
					<i class="fas fa-arrow-right ml-auto text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>
				<a
					href="https://apps.microsoft.com/detail/9mtg2ff7rnq4"
					target="_blank"
					rel="noopener noreferrer"
					class="glass-card group flex items-center gap-4 rounded-xl p-4"
				>
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
						<i class="fas fa-images text-emerald-400"></i>
					</div>
					<div class="min-w-0">
						<h4 class="font-semibold text-gray-900 dark:text-white">FotoAssemblyLine</h4>
						<p class="truncate text-xs text-gray-500">Batch image processing & filters</p>
					</div>
<i class="fas fa-arrow-right ml-auto text-xs text-gray-400 dark:text-gray-600 transition group-hover:text-gray-900 dark:group-hover:text-white"></i>
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- WRITING: What I Think                        -->
<!-- ============================================ -->
<section id="writing" class="section-glow bg-gray-50 dark:bg-gray-900/50 py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-16 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-purple-400">Writing</p>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">What I Think</h2>
				<p class="mx-auto mt-4 max-w-xl text-gray-500">
					Ideas on product design, engineering with AI, and rethinking how software should work.
				</p>
			</div>
		</ScrollReveal>

		<div class="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
			<!-- Mosaic Series -->
			<ScrollReveal delay={100}>
				<a href="/mosaic" class="glass-card group block rounded-2xl p-6">
					<div class="mb-4 flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
							<i class="fas fa-th text-purple-400"></i>
						</div>
						<span class="rounded-full bg-purple-500/10 px-2.5 py-1 text-[10px] font-medium text-purple-400">
							4-PART ARTICLE
						</span>
					</div>
					<h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-300 transition">
						Mosaic: From App Stores to App Flows
					</h3>
					<p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						A vision that replaces app stores with seamless, context-aware app flows. What if your phone understood your journey?
					</p>
					<span class="flex items-center gap-2 text-sm font-medium text-purple-400 transition group-hover:gap-3">
						Read Article <i class="fas fa-arrow-right text-xs"></i>
					</span>
				</a>
			</ScrollReveal>

			<!-- AI Series -->
			<ScrollReveal delay={200}>
				<a href="/series" class="glass-card group block rounded-2xl p-6">
					<div class="mb-4 flex items-center gap-3">
						<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
							<i class="fas fa-robot text-emerald-400"></i>
						</div>
						<span class="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-medium text-emerald-400">
							10-PART SERIES
						</span>
					</div>
					<h3 class="mb-2 text-lg font-bold text-gray-900 dark:text-white group-hover:text-emerald-300 transition">
						How I Built MiniBreaks.io With AI
					</h3>
					<p class="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						The real story of building a complete website with AI — from idea to deployment. What worked. What didn't.
					</p>
					<span class="flex items-center gap-2 text-sm font-medium text-emerald-400 transition group-hover:gap-3">
						Read Series <i class="fas fa-arrow-right text-xs"></i>
					</span>
				</a>
			</ScrollReveal>
		</div>

		<!-- Coming soon teaser -->
		<ScrollReveal delay={300}>
			<p class="mt-10 text-center text-sm text-gray-600">
				<i class="fas fa-pen-nib mr-1"></i> 2 more articles in the works — stay tuned.
			</p>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- ABOUT: The Journey                           -->
<!-- ============================================ -->
<section id="about" class="section-glow bg-white dark:bg-gray-950 py-24" itemscope itemtype="https://schema.org/AboutPage">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-16 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-cyan-400">Background</p>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">The Journey</h2>
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
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Where I learned that the best technology is invisible — it just works for people.</p>
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
							<h3 class="font-bold text-gray-900 dark:text-white">Engineering Manager</h3>
							<p class="text-sm text-gray-500">Leading teams, still building products</p>
							<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">I lead teams to build scalable software while fostering collaboration, learning, and a relentless focus on the user.</p>
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
<section class="section-glow bg-gray-50 dark:bg-gray-900/50 py-24">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-pink-400">Life</p>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Beyond the Code</h2>
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
								class="h-48 w-full object-cover"
							/>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="glass-card overflow-hidden rounded-2xl">
								<img
									src="/otto.jpg"
									loading="lazy"
									alt="Otto — Hong's cat"
									class="h-32 w-full object-cover"
								/>
							</div>
							<div class="glass-card overflow-hidden rounded-2xl">
								<img
									src="/AI-me-and-otto.jpg"
									loading="lazy"
									alt="Hong and Otto together"
									class="h-32 w-full object-cover"
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
								<i class="fas fa-lightbulb mr-2 text-blue-400"></i>Product Strategy
							</span>
							<span class="glass-card rounded-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
								<i class="fas fa-people-group mr-2 text-cyan-400"></i>Team Leadership
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
<section id="contact" class="section-glow bg-white dark:bg-gray-950 py-24">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-blue-400">Connect</p>
				<h2 class="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Let's Talk</h2>
				<p class="mx-auto mt-4 max-w-lg text-gray-500">
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
