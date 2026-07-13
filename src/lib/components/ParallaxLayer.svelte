<script lang="ts">
	import { onMount } from 'svelte';

	let {
		speed = 0.12,
		class: className = '',
		children
	}: {
		speed?: number;
		class?: string;
		children?: any;
	} = $props();

	let el: HTMLElement;
	let offset = $state(0);

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) return;

		let ticking = false;

		function update() {
			ticking = false;
			if (!el) return;
			const rect = el.getBoundingClientRect();
			const distanceFromCenter = rect.top + rect.height / 2 - window.innerHeight / 2;
			offset = distanceFromCenter * speed;
		}

		function onScroll() {
			if (ticking) return;
			ticking = true;
			requestAnimationFrame(update);
		}

		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', update);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', update);
		};
	});
</script>

<div bind:this={el} class="pointer-events-none absolute inset-0 overflow-hidden {className}" aria-hidden="true">
	<div class="h-full w-full" style="transform: translate3d(0, {offset}px, 0); will-change: transform;">
		{@render children?.()}
	</div>
</div>
