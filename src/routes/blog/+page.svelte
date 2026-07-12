<script lang="ts">
	import { recentPosts, formatPostDate } from '$lib/data/blogPosts';

	const canonical = 'https://www.hongincanada.com/blog';
	const title = 'Writing — Blog | Hong in Canada';
	const description =
		'Essays and field notes on building AI-powered products from 0 to 1: agentic workflows, product design, and lessons from shipping software fast.';
	const ogImage = 'https://www.hongincanada.com/profile.png';

	const blogSchema = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Hong in Canada — Writing',
		description,
		url: canonical,
		author: { '@type': 'Person', name: 'Hong', url: 'https://www.hongincanada.com' },
		blogPost: recentPosts.map((p) => ({
			'@type': 'BlogPosting',
			headline: p.title,
			description: p.description,
			datePublished: p.date,
			url: 'https://www.hongincanada.com/blog/' + p.slug
		}))
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{@html '<script type="application/ld+json">' + blogSchema + '<' + '/script>'}
</svelte:head>

<section class="py-16 sm:py-20" style="background: var(--bg);">
	<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
		<!-- Breadcrumb -->
		<nav class="mono-label mb-8 flex items-center gap-2" aria-label="Breadcrumb">
			<a href="/" class="transition-colors hover:text-[var(--accent)]">Home</a>
			<span aria-hidden="true">/</span>
			<span style="color: var(--muted);">Writing</span>
		</nav>

		<header class="mb-12 max-w-2xl">
			<p class="eyebrow mb-3">Writing</p>
			<h1 class="font-serif text-4xl font-medium md:text-5xl" style="color: var(--text);">
				Notes on building with AI
			</h1>
			<p class="mt-4 text-lg leading-relaxed" style="color: var(--muted);">
				{description}
			</p>
		</header>

		<div class="grid gap-5 sm:grid-cols-2">
			{#each recentPosts as post (post.slug)}
				<article class="h-full">
					<a
						href={'/blog/' + post.slug}
						class="glass-card group flex h-full flex-col rounded-2xl p-6"
					>
						<div class="mb-4 flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg"
								style="background: var(--accent-soft); color: var(--accent);"
							>
								<i class="fas {post.icon}" aria-hidden="true"></i>
							</div>
							<time class="mono-label" datetime={post.date}>{formatPostDate(post.date)}</time>
						</div>
						<h2
							class="mb-2 font-serif text-xl font-semibold leading-snug transition group-hover:text-[var(--accent)]"
							style="color: var(--text);"
						>
							{post.title}
						</h2>
						<p class="mb-4 flex-1 text-sm leading-relaxed" style="color: var(--muted);">
							{post.description}
						</p>
						<span
							class="inline-flex items-center gap-2 text-sm font-medium transition group-hover:gap-3"
							style="color: var(--accent);"
						>
							Read post <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
						</span>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
