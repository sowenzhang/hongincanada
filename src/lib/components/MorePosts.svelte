<script lang="ts">
	import { onMount } from 'svelte';
	import { blogPosts, type BlogPostMeta } from '$lib/data/blogPosts';

	let { currentSlug = '', count = 3 }: { currentSlug?: string; count?: number } = $props();

	const others = blogPosts.filter((p) => p.slug !== currentSlug);

	/**
	 * Deterministic initial selection so server and client render the same markup
	 * (no hydration mismatch, no console warnings). Rotating the pool by the current
	 * post's position also gives every article a distinct, stable set of suggestions.
	 */
	function rotatedPick(): BlogPostMeta[] {
		const idx = blogPosts.findIndex((p) => p.slug === currentSlug);
		const start = idx < 0 ? 0 : idx;
		const pick: BlogPostMeta[] = [];
		for (let i = 0; i < others.length && pick.length < count; i++) {
			pick.push(others[(start + i) % others.length]);
		}
		return pick;
	}

	let posts = $state<BlogPostMeta[]>(rotatedPick());

	onMount(() => {
		// Reshuffle on the client (runs after hydration) so each visit surfaces a fresh
		// random mix of other posts.
		const pool = [...others];
		for (let i = pool.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pool[i], pool[j]] = [pool[j], pool[i]];
		}
		posts = pool.slice(0, count);
	});
</script>

{#if posts.length}
	<section
		aria-labelledby="more-posts-heading"
		class="border-t border-gray-200 bg-[var(--bg)] py-14 transition-colors dark:border-gray-800"
	>
		<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
			<div class="mb-8 flex items-end justify-between gap-4">
				<div>
					<p class="mb-1 text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
						Keep reading
					</p>
					<h2 id="more-posts-heading" class="font-serif text-2xl font-semibold text-gray-900 dark:text-white">
						More from the blog
					</h2>
				</div>
				<a
					href="/blog"
					class="hidden shrink-0 items-center gap-2 text-sm font-medium text-teal-700 transition hover:gap-3 hover:underline dark:text-teal-400 sm:inline-flex sm:min-h-[44px]"
				>
					All posts <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
				</a>
			</div>

			<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each posts as post (post.slug)}
					<a
						href={'/blog/' + post.slug}
						class="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-teal-700"
					>
						<div
							class="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400"
						>
							<i class="fas {post.icon}" aria-hidden="true"></i>
						</div>
						<h3
							class="mb-2 font-serif text-lg font-semibold leading-snug text-gray-900 transition group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-300"
						>
							{post.title}
						</h3>
						<p class="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
							{post.description}
						</p>
						<span
							class="inline-flex items-center gap-2 text-sm font-medium text-teal-700 transition group-hover:gap-3 dark:text-teal-400"
						>
							Read post <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
						</span>
					</a>
				{/each}
			</div>

			<div class="mt-6 sm:hidden">
				<a
					href="/blog"
					class="inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-teal-700 hover:underline dark:text-teal-400"
				>
					All posts <i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
				</a>
			</div>
		</div>
	</section>
{/if}
