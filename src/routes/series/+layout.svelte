<script lang="ts">
	let { children } = $props();
</script>

<!-- Series Disclaimer Banner -->
<div class="sticky top-16 z-40 border-b border-amber-200 bg-amber-50/95 backdrop-blur-sm transition-colors dark:border-amber-700/40 dark:bg-amber-900/30">
	<div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
		<div class="flex items-start gap-3 text-sm leading-relaxed text-amber-900 dark:text-amber-200">
			<i class="fas fa-triangle-exclamation mt-0.5 text-amber-500" aria-hidden="true"></i>
			<p>
				<strong>Original 2025 series archive:</strong> This documents my first MiniBreaks build journey.
				For the current direction and updated AI workflow, read the new pivot post.
			</p>
		</div>
		<a
			href="/blog/minibreaks-pivot"
			class="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 transition-colors hover:bg-amber-200 dark:border-amber-600 dark:bg-amber-800/40 dark:text-amber-100 dark:hover:bg-amber-700/50"
		>
			Read: MiniBreaks Pivot
			<i class="fas fa-arrow-right text-xs" aria-hidden="true"></i>
		</a>
	</div>
</div>

{@render children()}