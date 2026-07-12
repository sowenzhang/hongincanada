<script lang="ts">
	import '../app.css';
	import { onMount, onDestroy } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { getRecentPosts } from '$lib/data/blogPosts';

	let { children } = $props();

	const latestPosts = getRecentPosts(3);

	let drawerOpen = $state(false);
	let scrolled = $state(false);
	let scrollHandler: (() => void) | null = null;

	onMount(() => {
		// Light-first: default to light, respect saved preference
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
			if (!savedTheme) localStorage.setItem('theme', 'light');
		}

		scrollHandler = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', scrollHandler, { passive: true });
	});

	onDestroy(() => {
		if (scrollHandler) window.removeEventListener('scroll', scrollHandler);
	});

	function toggleTheme() {
		const isDark = document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}

	function closeDrawer() {
		drawerOpen = false;
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') drawerOpen = false;
	}

	// Primary route links get aria-current; hash links stay plain (same-page anchors)
	function isActive(path: string): boolean {
		const p = $page.url.pathname;
		if (path === '/') return p === '/';
		return p === path || p.startsWith(path + '/');
	}

	// Scroll to hash anchor after client-side navigation, and close the drawer
	afterNavigate(({ to }) => {
		drawerOpen = false;
		const hash = to?.url?.hash;
		if (hash) {
			requestAnimationFrame(() => {
				const el = document.querySelector(hash);
				if (el) el.scrollIntoView({ behavior: 'smooth' });
			});
		}
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- Fallback title only; every route sets its own title/description/canonical/OG/Twitter tags.
	     SvelteKit dedupes <title> (the page's wins), so this is a safe default for any route
	     that does not set one. Per-page SEO tags previously lived here too, but they duplicated
	     and preceded each page's own tags — causing every article to canonicalize to the home
	     URL and emit a conflicting og:type. Kept out of the layout to preserve per-page SEO. -->
	<title>Hong in Canada</title>

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

<svelte:window onkeydown={onKeydown} />

<!-- Skip link: first focusable element so keyboard/AT users can bypass the nav (WCAG 2.4.1) -->
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-lg"
	style="background: var(--accent); color: var(--on-accent);"
>
	Skip to main content
</a>

<!-- Reusable rail body (shared by desktop rail + mobile drawer) -->
{#snippet railBody()}
	<!-- Brand -->
	<a href="/" onclick={closeDrawer} class="block px-2">
		<span class="flex items-center gap-3">
			<img
				src="/profile.png"
				alt="Hong"
				class="h-11 w-11 flex-shrink-0 rounded-full object-cover ring-1"
				style="--tw-ring-color: var(--border-strong); background: var(--surface-2);"
			/>
			<span class="font-serif text-lg leading-tight" style="color: var(--text);">Hong</span>
		</span>
		<span class="rail-tags mt-3">
			<span class="rail-tag">Product</span>
			<span class="rail-tag">AI Native</span>
			<span class="rail-tag">HCI</span>
			<span class="rail-tag">Eng Lead</span>
		</span>
	</a>

	<!-- Explore -->
	<nav class="rail-section rail-section-first space-y-1" aria-label="Primary">
		<p class="mono-label rail-label px-3">Explore</p>
		<a href="/" onclick={closeDrawer} class="rail-link" aria-current={isActive('/') ? 'page' : undefined}>
			<i class="fas fa-house" aria-hidden="true"></i><span>Home</span>
		</a>
		<a href="/#projects" onclick={closeDrawer} class="rail-link">
			<i class="fas fa-cube" aria-hidden="true"></i><span>Projects</span>
		</a>
		<a href="/#writing" onclick={closeDrawer} class="rail-link">
			<i class="fas fa-pen-nib" aria-hidden="true"></i><span>Writing</span>
		</a>
		<a href="/#about" onclick={closeDrawer} class="rail-link">
			<i class="fas fa-circle-user" aria-hidden="true"></i><span>About</span>
		</a>
	</nav>

	<!-- Series & Tools -->
	<nav class="rail-section space-y-1" aria-label="Series and tools">
		<p class="mono-label rail-label px-3">Series &amp; Tools</p>
		<a href="/ai-workflow-review" onclick={closeDrawer} class="rail-link" aria-current={isActive('/ai-workflow-review') ? 'page' : undefined}>
			<i class="fas fa-wand-magic-sparkles" aria-hidden="true"></i><span>AI Review</span>
		</a>
		<a href="/blog/minibreaks-pivot" onclick={closeDrawer} class="rail-link" aria-current={isActive('/blog/minibreaks-pivot') ? 'page' : undefined}>
			<i class="fas fa-leaf" aria-hidden="true"></i><span>Minibreaks</span>
		</a>
		<a href="/mosaic" onclick={closeDrawer} class="rail-link" aria-current={isActive('/mosaic') ? 'page' : undefined}>
			<i class="fas fa-table-cells-large" aria-hidden="true"></i><span>Mosaic</span>
		</a>
	</nav>

	<!-- Latest posts: hidden on short viewports so the footer (social/theme
	     toggle) stays visible instead of pushing it off-screen or scrolling -->
	<nav class="rail-section rail-latest space-y-0.5" aria-label="Latest posts">
		<p class="mono-label rail-label px-3">Latest</p>
		{#each latestPosts as post (post.slug)}
			<a
				href={'/blog/' + post.slug}
				onclick={closeDrawer}
				class="rail-post"
				aria-current={isActive('/blog/' + post.slug) ? 'page' : undefined}
			>
				<i class="fas {post.icon}" aria-hidden="true"></i>
				<span class="rail-post-title">{post.shortTitle}</span>
			</a>
		{/each}
		<a href="/blog" onclick={closeDrawer} class="rail-link" aria-current={$page.url.pathname === '/blog' ? 'page' : undefined}>
			<i class="fas fa-arrow-right" aria-hidden="true"></i><span>All writing</span>
		</a>
	</nav>

	<!-- Bottom cluster -->
	<div class="rail-bottom mt-auto space-y-3">
		<a
			href="/#contact"
			onclick={closeDrawer}
			class="flex min-h-[44px] items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors"
			style="background: var(--accent); color: var(--on-accent);"
		>
			<i class="fas fa-paper-plane" aria-hidden="true"></i> Get in touch
		</a>
		<div class="flex items-center justify-between px-1">
			<div class="flex items-center gap-1">
				<a href="https://github.com/sowenzhang" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]" style="color: var(--faint);" aria-label="GitHub profile">
					<i class="fab fa-github text-lg" aria-hidden="true"></i>
				</a>
				<a href="https://www.linkedin.com/in/keepsrunning/" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]" style="color: var(--faint);" aria-label="LinkedIn profile">
					<i class="fab fa-linkedin-in text-lg" aria-hidden="true"></i>
				</a>
				<a href="https://www.strava.com/athletes/6051008" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]" style="color: var(--faint);" aria-label="Strava profile">
					<i class="fab fa-strava text-lg" aria-hidden="true"></i>
				</a>
			</div>
			<button
				onclick={toggleTheme}
				class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]"
				style="color: var(--faint);"
				aria-label="Toggle theme"
			>
				<i class="fas fa-circle-half-stroke text-lg" aria-hidden="true"></i>
			</button>
		</div>
	</div>
{/snippet}

<!-- Desktop left rail -->
<aside class="rail fixed inset-y-0 left-0 z-40 hidden w-64 flex-col overflow-y-auto p-5 lg:flex">
	{@render railBody()}
</aside>

<!-- Mobile top bar -->
<header class="nav-glass fixed inset-x-0 top-0 z-40 lg:hidden" class:scrolled>
	<div class="flex h-16 items-center justify-between px-4">
		<a href="/" class="flex items-center gap-2.5">
			<img src="/profile.png" alt="Hong" class="h-8 w-8 rounded-full object-cover" />
			<span class="font-serif text-lg" style="color: var(--text);">Hong</span>
		</a>
		<div class="flex items-center gap-1">
			<button onclick={toggleTheme} class="flex h-11 w-11 items-center justify-center rounded-lg" style="color: var(--muted);" aria-label="Toggle theme">
				<i class="fas fa-circle-half-stroke" aria-hidden="true"></i>
			</button>
			<button
				onclick={() => (drawerOpen = !drawerOpen)}
				class="flex h-11 w-11 items-center justify-center rounded-lg"
				style="color: var(--muted);"
				aria-label="Toggle menu"
				aria-expanded={drawerOpen}
			>
				<i class="fas {drawerOpen ? 'fa-times' : 'fa-bars'} text-xl" aria-hidden="true"></i>
			</button>
		</div>
	</div>
</header>

<!-- Mobile drawer -->
{#if drawerOpen}
	<div class="fixed inset-0 z-50 lg:hidden">
		<button
			class="absolute inset-0 h-full w-full"
			style="background: rgba(0,0,0,0.5);"
			onclick={closeDrawer}
			aria-label="Close menu"
			tabindex="-1"
		></button>
		<aside class="rail absolute inset-y-0 left-0 flex w-72 max-w-[84vw] flex-col overflow-y-auto p-5" style="background: var(--surface);">
			{@render railBody()}
		</aside>
	</div>
{/if}

<!-- Content column, offset for the rail on desktop -->
<div class="content-shell">
	<!-- Spacer for the mobile top bar -->
	<div class="h-16 lg:hidden"></div>

	<main id="main-content" tabindex="-1">
		{@render children()}
	</main>

	<footer class="border-t py-12 transition-colors" style="border-color: var(--border); background: var(--surface-2); color: var(--text);">
		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between gap-6 md:flex-row">
				<div class="text-center md:text-left">
					<a href="/" class="font-serif text-xl" style="color: var(--text);">hongincanada</a>
					<p class="mono-label mt-2">Product Builder · Engineering Leadership</p>
				</div>
				<div class="flex flex-col items-center gap-4 md:items-end">
					<div class="flex gap-2">
						<a href="https://github.com/sowenzhang" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]" style="color: var(--faint);" aria-label="GitHub profile">
							<i class="fab fa-github text-lg" aria-hidden="true"></i>
						</a>
						<a href="https://www.linkedin.com/in/keepsrunning/" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]" style="color: var(--faint);" aria-label="LinkedIn profile">
							<i class="fab fa-linkedin-in text-lg" aria-hidden="true"></i>
						</a>
						<a href="https://www.strava.com/athletes/6051008" target="_blank" rel="noopener noreferrer" class="flex h-11 w-11 items-center justify-center rounded-lg transition-colors hover:bg-[var(--accent-soft)]" style="color: var(--faint);" aria-label="Strava profile">
							<i class="fab fa-strava text-lg" aria-hidden="true"></i>
						</a>
					</div>
					<p class="text-xs" style="color: var(--faint);">&copy; 2026 Hong in Canada. All rights reserved.</p>
				</div>
			</div>
		</div>
	</footer>
</div>

<!-- Back to top -->
<button
	onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	class="fixed bottom-8 right-8 z-30 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition {scrolled
		? 'opacity-100'
		: 'pointer-events-none opacity-0'}"
	style="border-color: var(--border-strong); background: color-mix(in srgb, var(--surface) 85%, transparent); color: var(--muted);"
	aria-label="Back to top"
>
	<i class="fas fa-arrow-up" aria-hidden="true"></i>
</button>
