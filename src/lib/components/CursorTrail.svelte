<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D | null = null;
	let particles: Array<{
		x: number;
		y: number;
		vx: number;
		vy: number;
		life: number;
		size: number;
		hue: number;
	}> = [];
	let mouseX = 0;
	let mouseY = 0;
	let animationId: number;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

		if (prefersReducedMotion || isTouch) return;

		ctx = canvas.getContext('2d');
		if (!ctx) return;

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);
		window.addEventListener('mousemove', handleMouseMove);
		animate();

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationId) cancelAnimationFrame(animationId);
		};
	});

	function resizeCanvas() {
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	}

	function handleMouseMove(e: MouseEvent) {
		mouseX = e.clientX;
		mouseY = e.clientY;

		for (let i = 0; i < 2; i++) {
			particles.push({
				x: mouseX,
				y: mouseY,
				vx: (Math.random() - 0.5) * 1.5,
				vy: (Math.random() - 0.5) * 1.5,
				life: 1,
				size: Math.random() * 2.5 + 0.5,
				hue: 210 + Math.random() * 50
			});
		}

		if (particles.length > 80) {
			particles = particles.slice(-80);
		}
	}

	function animate() {
		if (!ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		particles = particles.filter((p) => {
			p.x += p.vx;
			p.y += p.vy;
			p.life -= 0.025;

			if (p.life <= 0) return false;

			const alpha = p.life * 0.5;
			const size = p.size * p.life;

			ctx!.beginPath();
			ctx!.arc(p.x, p.y, size, 0, Math.PI * 2);
			ctx!.fillStyle = `hsla(${p.hue}, 70%, 65%, ${alpha})`;
			ctx!.fill();

			return true;
		});

		animationId = requestAnimationFrame(animate);
	}
</script>

<canvas bind:this={canvas} class="pointer-events-none fixed inset-0 z-[9999]" aria-hidden="true"
></canvas>
