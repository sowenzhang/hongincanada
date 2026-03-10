<script lang="ts">
	import { onMount } from 'svelte';

	let {
		direction = 'up',
		delay = 0,
		duration = 700,
		threshold = 0.15,
		children
	}: {
		direction?: 'up' | 'down' | 'left' | 'right' | 'none';
		delay?: number;
		duration?: number;
		threshold?: number;
		children: any;
	} = $props();

	let element: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (prefersReducedMotion) {
			isVisible = true;
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold }
		);

		observer.observe(element);

		return () => observer.disconnect();
	});

	const transforms: Record<string, string> = {
		up: 'translateY(40px)',
		down: 'translateY(-40px)',
		left: 'translateX(40px)',
		right: 'translateX(-40px)',
		none: 'none'
	};
</script>

<div
	bind:this={element}
	style="opacity: {isVisible ? 1 : 0}; transform: {isVisible
		? 'none'
		: transforms[direction]}; transition: opacity {duration}ms cubic-bezier(0.16, 1, 0.3, 1) {delay}ms, transform {duration}ms cubic-bezier(0.16, 1, 0.3, 1) {delay}ms;"
>
	{@render children()}
</div>
