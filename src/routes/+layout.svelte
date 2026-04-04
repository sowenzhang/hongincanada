<script lang="ts">
	import '../app.css';
	import CursorTrail from '$lib/components/CursorTrail.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	let { children } = $props();

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);
	let scrollHandler: (() => void) | null = null;

	onMount(() => {
		// Dark mode: default to dark, respect saved preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'light') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
			if (!savedTheme) localStorage.setItem('theme', 'dark');
		}

		// Nav scroll effect
		scrollHandler = () => {
			scrolled = window.scrollY > 50;
		};
		window.addEventListener('scroll', scrollHandler, { passive: true });
	});

	onDestroy(() => {
		if (scrollHandler) {
			window.removeEventListener('scroll', scrollHandler);
		}
	});

	function toggleTheme() {
		const isDark = document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Scroll to hash anchor after client-side navigation (e.g. from /mosaic to /#writing)
	afterNavigate(({ to }) => {
		const hash = to?.url?.hash;
		if (hash) {
			// Wait for DOM to update before scrolling
			requestAnimationFrame(() => {
				const el = document.querySelector(hash);
				if (el) {
					el.scrollIntoView({ behavior: 'smooth' });
				}
			});
		}
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Hong in Canada</title>
	<meta
		name="description"
		content="Product Builder with a passion for building products that people love. Background in HCI with Product Mindset."
	/>
	<meta name="keywords" content="Engineering, Product, HCI, Canada, Hong" />
	<meta name="author" content="Hong" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://hongincanada.com" />
	<meta property="og:title" content="Hong in Canada" />
	<meta
		property="og:description"
		content="Product Builder with a passion for building products that people love. Background in HCI with Product Mindset."
	/>
	<meta property="og:image" content="/profile.png" />
	<meta property="og:url" content="https://hongincanada.com" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Hong in Canada" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hong in Canada" />
	<meta
		name="twitter:description"
		content="Product Builder with a passion for building products that people love. Background in HCI with Product Mindset."
	/>
	<meta name="twitter:image" content="/profile.png" />

	<meta name="impact-site-verification" content="118ac292-615c-404f-acb1-f625915e6b02" />

	<link rel="icon" type="image/x-icon" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png.placeholder" />

	<!-- Font Awesome -->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
		integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF4DS5T0H9"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-LF4DS5T0H9');
	</script>

	<!-- AdSense -->
	<script
		async
		src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3210995713998595"
		crossorigin="anonymous"
	></script>
</svelte:head>

<!-- Cursor Trail (desktop only, respects reduced motion) -->
<CursorTrail />

<!-- Navigation -->
<nav
	class="nav-glass fixed left-0 right-0 top-0 z-50 transition-all duration-300"
	class:scrolled
>
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="flex items-center text-xl font-bold">
				<span class="gradient-text font-serif">hongincanada</span>
			</a>

			<!-- Desktop nav -->
			<div class="hidden items-center space-x-8 md:flex">
				<a href="/#about" class="text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white">About</a>
				<a href="/#projects" class="text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white">Projects</a>
				<a href="/#writing" class="text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white">Writing</a>
				<a
					href="/#contact"
					class="rounded-full border border-blue-500/50 bg-blue-500/10 px-4 py-2 text-blue-600 dark:text-blue-400 transition hover:bg-blue-500/20 hover:text-blue-800 dark:hover:text-white"
				>
					Contact
				</a>
				<button
					onclick={toggleTheme}
					class="text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white"
					aria-label="Toggle theme"
				>
					<i class="fas fa-adjust"></i>
				</button>
			</div>

			<!-- Mobile menu button -->
			<div class="flex items-center gap-3 md:hidden">
				<button
					onclick={toggleTheme}
					class="text-gray-600 dark:text-gray-400 transition hover:text-gray-900 dark:hover:text-white"
					aria-label="Toggle theme"
				>
					<i class="fas fa-adjust"></i>
				</button>
				<button
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
					aria-label="Toggle menu"
				>
					<i class="fas {mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl"></i>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-gray-200 dark:border-white/5 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg md:hidden">
			<div class="space-y-1 px-4 py-4">
				<a
					href="/#about"
					onclick={closeMobileMenu}
					class="block rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
				>
					About
				</a>
				<a
					href="/#projects"
					onclick={closeMobileMenu}
					class="block rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
				>
					Projects
				</a>
				<a
					href="/#writing"
					onclick={closeMobileMenu}
					class="block rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 transition hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
				>
					Writing
				</a>
				<a
					href="/#contact"
					onclick={closeMobileMenu}
					class="mt-2 block rounded-lg bg-blue-500/10 px-3 py-2 text-center text-blue-600 dark:text-blue-400 transition hover:bg-blue-500/20"
				>
					Contact
				</a>
			</div>
		</div>
	{/if}
</nav>

<!-- Spacer for fixed nav -->
<div class="h-16"></div>

<main>
	{@render children()}
</main>

<footer class="border-t border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-gray-950 py-12 text-gray-900 dark:text-white transition-colors">
	<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-6 md:mb-0">
				<a href="/" class="flex items-center text-xl font-bold">
					<span class="gradient-text font-serif">hongincanada</span>
				</a>
				<p class="mt-2 text-sm text-gray-500">Engineering Manager & Product Builder</p>
			</div>
			<div class="flex flex-col items-center md:items-end">
				<div class="mb-4 flex space-x-5">
					<a
						href="https://github.com/sowenzhang"
						target="_blank"
						class="text-gray-400 dark:text-gray-500 transition hover:text-gray-900 dark:hover:text-white"
						aria-label="GitHub profile"
					>
						<i class="fab fa-github text-lg"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/keepsrunning/"
						target="_blank"
						class="text-gray-400 dark:text-gray-500 transition hover:text-gray-900 dark:hover:text-white"
						aria-label="LinkedIn profile"
					>
						<i class="fab fa-linkedin-in text-lg"></i>
					</a>
					<a
						href="https://www.strava.com/athletes/6051008"
						target="_blank"
						class="text-gray-400 dark:text-gray-500 transition hover:text-gray-900 dark:hover:text-white"
						aria-label="Strava profile"
					>
						<i class="fab fa-strava text-lg"></i>
					</a>
				</div>
				<p class="text-xs text-gray-400 dark:text-gray-600">&copy; 2025 Hong in Canada. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>

<!-- Back to top -->
<button
	onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	class="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 dark:border-white/10 bg-white/80 dark:bg-gray-900/80 text-gray-500 dark:text-gray-400 shadow-lg backdrop-blur-sm transition hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white {scrolled
		? 'opacity-100'
		: 'pointer-events-none opacity-0'}"
	aria-label="Back to top"
>
	<i class="fas fa-arrow-up"></i>
</button>
