<script lang="ts">
	import '../app.css';
	import { onMount, onDestroy } from 'svelte';

	let { children } = $props();

	let menuBtn: HTMLElement | null = null;
	let mobileMenu: HTMLElement | null = null;
	let backToTopBtn: HTMLElement | null = null;
	let pingPongInterval: number | null = null;
	let scrollHandler: ((event: Event) => void) | null = null;

	onMount(() => {
		// Get DOM elements
		menuBtn = document.getElementById("menu-btn");
		mobileMenu = document.getElementById("mobile-menu");
		backToTopBtn = document.getElementById("back-to-top");

		// Mobile menu toggle
		if (menuBtn && mobileMenu) {
			const handleMenuClick = () => {
				mobileMenu?.classList.toggle("hidden");
			};
			menuBtn.addEventListener("click", handleMenuClick);
		}

		// Back to top button scroll handler
		if (backToTopBtn) {
			scrollHandler = () => {
				if (window.pageYOffset > 300) {
					backToTopBtn?.classList.remove("opacity-0", "invisible");
					backToTopBtn?.classList.add("opacity-100", "visible");
				} else {
					backToTopBtn?.classList.remove("opacity-100", "visible");
					backToTopBtn?.classList.add("opacity-0", "invisible");
				}
			};
			window.addEventListener("scroll", scrollHandler);

			// Back to top button click handler
			const handleBackToTopClick = () => {
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				});
			};
			backToTopBtn.addEventListener("click", handleBackToTopClick);
		}

		// Ping pong ball animation
		function createPingPongBall(): void {
			const ball = document.createElement("div");
			ball.className = "ping-pong-ball";

			// Random position at the top of the viewport
			const startX = Math.random() * window.innerWidth;
			ball.style.left = `${startX}px`;
			ball.style.top = "-20px";

			document.body.appendChild(ball);

			// Random end position at the bottom
			const endX = Math.random() * window.innerWidth;

			// Animate
			let opacity = 0;
			let top = -20;
			const id = setInterval(frame, 20);

			function frame(): void {
				if (top >= window.innerHeight) {
					clearInterval(id);
					ball.remove();
				} else {
					opacity += 0.02;
					if (opacity > 1) opacity = 1;
					top += 5;

					// Calculate current x position (quadratic curve)
					const progress = top / window.innerHeight;
					const currentX = startX + (endX - startX) * progress;

					ball.style.opacity = opacity.toString();
					ball.style.top = `${top}px`;
					ball.style.left = `${currentX}px`;
				}
			}
		}

		// Create ping pong balls periodically
		pingPongInterval = window.setInterval(createPingPongBall, 2000);

		// Smooth scrolling for anchor links
		document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
			const handleAnchorClick = (e: Event) => {
				e.preventDefault();

				const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
				if (targetId === "#") return;

				const targetElement = document.querySelector(targetId!);
				if (targetElement) {
					targetElement.scrollIntoView({
						behavior: "smooth",
					});

					// Close mobile menu if open
					if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
						mobileMenu.classList.add("hidden");
					}
				}
			};
			anchor.addEventListener("click", handleAnchorClick);
		});
	});

	onDestroy(() => {
		// Clean up interval
		if (pingPongInterval) {
			clearInterval(pingPongInterval);
		}

		// Clean up scroll event listener
		if (scrollHandler) {
			window.removeEventListener("scroll", scrollHandler);
		}
	});
</script>

<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Hong in Canada</title>
	<meta name="description" content="Engineering Manager with a passion for building products that people love. Canadian/Chinese with a background in HCI." />
	<meta name="keywords" content="Engineering, Product, HCI, Canada, Hong" />
	<meta name="author" content="Hong" />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href="https://hongincanada.com" />
	<meta property="og:title" content="Hong in Canada" />
	<meta property="og:description" content="Engineering Manager with a passion for building products that people love. Canadian/Chinese with a background in HCI." />
	<meta property="og:image" content="/profile.png" />
	<meta property="og:url" content="https://hongincanada.com" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Hong in Canada" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Hong in Canada" />
	<meta name="twitter:description" content="Engineering Manager with a passion for building products that people love. Canadian/Chinese with a background in HCI." />
	<meta name="twitter:image" content="/profile.png" />
	<link rel="icon" type="image/x-icon" href="/favicon.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png.placeholder" />

	<!-- Font Awesome -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	<script async src="https://www.googletagmanager.com/gtag/js?id=G-LF4DS5T0H9"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());
		gtag('config', 'G-LF4DS5T0H9');
	</script>
	<script src="/site.js"></script>
</svelte:head>

<!-- Navigation -->
<nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex items-center">
				<a href="/" class="text-xl font-bold text-gray-900 flex items-center">
					<span class="gradient-text font-serif">hongincanada</span>
				</a>
			</div>
			<div class="hidden md:flex items-center space-x-8">
				<a href="#about" class="text-gray-600 hover:text-gray-900 transition">About</a>
				<a href="#projects" class="text-gray-600 hover:text-gray-900 transition">Projects</a>
				<a href="#thoughts" class="text-gray-600 hover:text-gray-900 transition">Thoughts</a>
				<a href="#contact" class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">Contact</a>
			</div>
			<div class="md:hidden flex items-center">
				<button id="menu-btn" class="text-gray-600 hover:text-gray-900" aria-label="Open menu">
					<i class="fas fa-bars text-xl"></i>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu -->
	<div id="mobile-menu" class="hidden md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200">
		<div class="px-4 py-3 space-y-3">
			<a href="#about" class="block text-gray-600 hover:text-gray-900 transition">About</a>
			<a href="#projects" class="block text-gray-600 hover:text-gray-900 transition">Projects</a>
			<a href="#thoughts" class="block text-gray-600 hover:text-gray-900 transition">Thoughts</a>
			<a href="#contact" class="block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-center">Contact</a>
		</div>
	</div>
</nav>

<!-- Add padding to account for fixed navbar -->
<div class="pt-16"></div>

<main>
	{@render children()}
</main>

<footer class="bg-gray-900 text-white py-12">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col md:flex-row justify-between items-center">
			<div class="mb-6 md:mb-0">
				<a href="/" class="text-xl font-bold flex items-center">
					<span class="gradient-text font-serif">hongincanada</span>
				</a>
				<p class="text-gray-400 mt-2">Engineering Manager & Product Builder</p>
			</div>
			<div class="flex flex-col items-center md:items-end">
				<div class="flex space-x-6 mb-4">
					<a href="https://www.linkedin.com/in/keepsrunning/" class="text-gray-400 hover:text-white transition" aria-label="LinkedIn profile">
						<i class="fab fa-linkedin-in"></i>
					</a>
				</div>
				<p class="text-gray-400 text-sm">© 2025 Hong in Canada. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>

<!-- Back to top button -->
<button id="back-to-top" class="fixed bottom-8 right-8 bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition opacity-0 invisible" aria-label="Back to top">
	<i class="fas fa-arrow-up"></i>
</button>

