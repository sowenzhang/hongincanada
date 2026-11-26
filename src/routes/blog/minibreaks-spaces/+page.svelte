<script lang="ts">
	import { onMount } from 'svelte';
	import MorePosts from '$lib/components/MorePosts.svelte';
	import { slide } from 'svelte/transition';

	const pageData = {
		title: 'MiniBreaks Spaces: Turning 52 Tiny Apps Into a Desk You Come Back To | Hong in Canada',
		description:
			'MiniBreaks Spaces puts the right tiny apps on one desk for teachers, coaches, focused workdays and personal bests. Why it matters, who it is for, and how I built it with AI.',
		canonical: 'https://www.hongincanada.com/blog/minibreaks-spaces',
		ogImage: 'https://www.hongincanada.com/minibreaks-spaces/classroom-maximized.png',
		publishDate: 'December 3, 2026',
		readTime: '~7 min read'
	};

	const tableOfContents = [
		{ id: 'monday-morning', title: 'A Monday morning' },
		{ id: 'one-desk', title: 'From 52 apps to one desk' },
		{ id: 'why-a-workspace', title: 'Why a dedicated workspace?' },
		{ id: 'who-its-for', title: "Who it's for" },
		{ id: 'why-build-on-apps', title: 'Why build on the 52 apps?' },
		{ id: 'built-with-ai', title: 'How I built it with AI' },
		{ id: 'whats-next', title: "What's next" },
		{ id: 'try-it', title: 'Try it' }
	];

	const screenshots = {
		landing: {
			src: '/minibreaks-spaces/spaces-landing.png',
			alt: 'The MiniBreaks Spaces landing page offering four setups: Classroom, Coach, Office and Human Performer',
			caption: 'Pick a setup, give it a name, and it is ready to use.'
		},
		maximized: {
			src: '/minibreaks-spaces/classroom-maximized.png',
			alt: 'A Classroom Space maximized to fill the screen, with a large clock and a running classroom timer above the tool shortcuts',
			caption: 'Maximize Space for the projector. The timer keeps running.'
		},
		whiteboard: {
			src: '/minibreaks-spaces/classroom-whiteboard.png',
			alt: 'The Whiteboard tool open in a popup over a Classroom Space, showing a simple hand-drawn diagram',
			caption: 'Open a tool on top of the desk. Close it and you are right back where you were.'
		},
		coach: {
			src: '/minibreaks-spaces/coach-space.png',
			alt: 'A Coach Space named Saturday U12 Soccer with a clock, a session timer, and Squad Shuffle, Group Qualifier, Bracket Blitz and Whiteboard shortcuts',
			caption: 'A Coach Space for a Saturday youth soccer session.'
		},
		focus: {
			src: '/minibreaks-spaces/office-focus-view.png',
			alt: 'An Office Space in Focus view: the Focus Sprint timer is outlined while the other widgets and shortcuts are blurred and dimmed under a warm amber tint',
			caption: 'Focus view: everything except the timer fades away until the work session ends.'
		},
		performer: {
			src: '/minibreaks-spaces/human-performer.png',
			alt: 'A Human Performer Space with a Personal Records card and shortcuts to six challenge games',
			caption: 'Your tests, your progress. No composite score.'
		}
	};

	let isDark = $state(false);
	let showTOC = $state(false);
	let prefersReducedMotion = $state(false);
	let copyStatus = $state('');

	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		prefersReducedMotion = mediaQuery.matches;

		const saved = localStorage.getItem('theme');
		isDark = saved ? saved === 'dark' : false;
		document.documentElement.classList.toggle('dark', isDark);
		showTOC = window.innerWidth >= 1024;

		const handleMotionChange = (event: MediaQueryListEvent) => {
			prefersReducedMotion = event.matches;
		};

		mediaQuery.addEventListener('change', handleMotionChange);
		return () => {
			mediaQuery.removeEventListener('change', handleMotionChange);
		};
	});

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle('dark', isDark);
		localStorage.setItem('theme', isDark ? 'dark' : 'light');
	}


	async function copyLink() {
		try {
			await navigator.clipboard.writeText(pageData.canonical);
			copyStatus = 'Link copied';
		} catch {
			copyStatus = 'Copy failed';
		}

		setTimeout(() => {
			copyStatus = '';
		}, 2000);
	}

	function getTwitterShareUrl() {
		return `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageData.canonical)}&text=${encodeURIComponent(pageData.title)}`;
	}

	function getLinkedInShareUrl() {
		return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageData.canonical)}`;
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
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageData.title} />
	<meta name="twitter:description" content={pageData.description} />
	<meta name="twitter:image" content={pageData.ogImage} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			"headline": "MiniBreaks Spaces: Turning 52 Tiny Apps Into a Desk You Come Back To",
			"description": "MiniBreaks Spaces puts the right tiny apps on one desk for teachers, coaches, focused workdays and personal bests. Why it matters, who it is for, and how I built it with AI.",
			"author": {
				"@type": "Person",
				"name": "Hong"
			},
			"datePublished": "2026-12-03",
			"image": "https://www.hongincanada.com/minibreaks-spaces/classroom-maximized.png"
		}
	</script>
</svelte:head>

{#snippet screenshot(shot: { src: string; alt: string; caption: string }, eager = false)}
	<figure class="not-prose my-10">
		<div
			class="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-800/50"
		>
			<img
				src={shot.src}
				alt={shot.alt}
				width="1440"
				height="900"
				class="h-auto w-full rounded-xl shadow-sm"
				loading={eager ? 'eager' : 'lazy'}
			/>
		</div>
		<figcaption class="mt-3 text-center text-sm text-gray-500 dark:text-gray-400">
			{shot.caption}
		</figcaption>
	</figure>
{/snippet}

<div class="min-h-screen bg-white transition-colors dark:bg-gray-950">
	<div
		class="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm transition-colors dark:border-gray-700 dark:bg-gray-900"
	>
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
			<div class="flex items-center gap-4">
				<a
					href="/"
					class="flex min-h-[44px] items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
				>
					<i class="fas fa-arrow-left text-xs" aria-hidden="true"></i>
					Hong in Canada
				</a>
				<button
					onclick={() => (showTOC = !showTOC)}
					aria-label="{showTOC ? 'Hide' : 'Show'} contents"
					aria-expanded={showTOC}
					class="flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
				>
					<i class="fas fa-list text-xs text-teal-500" aria-hidden="true"></i>
					<span class="hidden sm:inline">{showTOC ? 'Hide' : 'Show'} Contents</span>
					<i
						class="fas fa-chevron-{showTOC ? 'up' : 'down'} text-xs text-gray-400"
						aria-hidden="true"
					></i>
				</button>
			</div>
			<button
				onclick={toggleTheme}
				class="flex min-h-[44px] items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
				aria-label="Toggle theme"
			>
				{#if isDark}
					<i class="fas fa-sun text-xs text-yellow-500" aria-hidden="true"></i>
					<span class="hidden sm:inline">Light Mode</span>
				{:else}
					<i class="fas fa-moon text-xs" aria-hidden="true"></i>
					<span class="hidden sm:inline">Dark Mode</span>
				{/if}
			</button>
		</div>
	</div>

	<header class="bg-white py-12 transition-colors dark:bg-gray-900">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<nav
				class="mb-8 flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
				aria-label="Breadcrumb"
			>
				<a href="/" class="transition-colors hover:text-gray-900 dark:hover:text-gray-200">Home</a>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<a href="/blog" class="transition-colors hover:text-gray-900 dark:hover:text-gray-200"
					>Blog</a
				>
				<i class="fas fa-chevron-right text-[9px]" aria-hidden="true"></i>
				<span class="text-gray-600 dark:text-gray-300">MiniBreaks Spaces</span>
			</nav>
			<div class="mb-4 flex items-center gap-3">
				<span
					class="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700 dark:text-teal-300"
				>
					<i class="fas fa-table-cells-large mr-1.5" aria-hidden="true"></i>MiniBreaks
				</span>
				<span
					class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
				>
					Product Design
				</span>
			</div>
			<h1
				class="mb-5 font-serif text-4xl font-semibold leading-tight text-gray-900 dark:text-white md:text-5xl"
			>
				MiniBreaks Spaces: Turning 52 Tiny Apps Into a Desk You Come Back To
			</h1>
			<p class="max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
				The right tools for the job, together on one desk that remembers you. Free, with no
				account.
			</p>
			<div class="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
				<span><i class="fas fa-calendar mr-1.5" aria-hidden="true"></i>{pageData.publishDate}</span>
				<span><i class="fas fa-clock mr-1.5" aria-hidden="true"></i>{pageData.readTime}</span>
				<span><i class="fas fa-user mr-1.5" aria-hidden="true"></i>Hong</span>
			</div>
		</div>
	</header>

	<div class="min-h-screen bg-[var(--bg)] py-12 transition-colors">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col gap-8 lg:flex-row">
				<article class="min-w-0 flex-1">
					<div
						class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-900"
					>
						<div class="p-8 lg:p-14">
							<div
								class="prose prose-lg dark:prose-invert prose-headings:font-bold
									prose-headings:text-gray-900 dark:prose-headings:text-white prose-h2:mt-12
									prose-h2:mb-5 prose-h2:text-2xl prose-h2:scroll-mt-24 prose-h3:mt-10
									prose-h3:text-xl prose-p:leading-relaxed prose-p:text-gray-700
									dark:prose-p:text-gray-300 prose-li:mb-2 prose-li:text-gray-700
									dark:prose-li:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white
									prose-a:text-teal-600 prose-a:underline-offset-2 dark:prose-a:text-teal-400
									max-w-none [&_h2]:scroll-mt-24 [&_section]:scroll-mt-24"
							>
								<section id="monday-morning">
									<p class="text-lg leading-relaxed">
										It's 8:55 on a Monday. Class starts in five minutes. You need a timer on the
										projector, something to sketch on, and a fair way to pick who answers first.
									</p>
									<p>
										So you open a tab for a timer. Another for a whiteboard. Another for a name
										picker, where you paste the class list in again, like you did last week. Then
										someone asks a question, you click the wrong tab, and the timer is gone from the
										screen.
									</p>
									<p>
										None of those tools is bad. The problem is that they don't know about each
										other, and none of them remember you.
									</p>
									<p>That's the problem <strong>MiniBreaks Spaces</strong> is built to solve.</p>
									{@render screenshot(screenshots.landing, true)}
								</section>

								<section id="one-desk">
									<h2>From 52 apps to one desk</h2>
									<p>
										For the past year I've shipped one small app every week on
										<a href="https://minibreaks.io" target="_blank" rel="noopener noreferrer"
											>MiniBreaks.io</a
										>. Timers, pickers, team shufflers, quick games, a calculator you drive from the
										keyboard. As of this week there are 51, and number 52 lands in a few days.
									</p>
									<p>
										Each app was designed to do one thing well, in one browser tab. But the longer I
										watched how people (including me) actually used them, the clearer it was that
										real work rarely needs just one tool. A lesson needs a clock, a timer, a
										whiteboard and a name picker, <em>at the same time</em>. A practice needs a
										session timer, a way to split players into teams and a bracket for the final.
									</p>
									<p>
										Spaces takes the apps people already use and puts the right ones together on a
										single desk, set up for a specific job.
									</p>
								</section>

								<section id="why-a-workspace">
									<h2>Why a dedicated workspace?</h2>
									<p>
										A Space isn't a page of shortcuts. It's a place you come back to. Here's what
										that means in practice:
									</p>
									<p>
										<strong>It remembers your stuff.</strong> Your class list, today's whiteboard drawing,
										your clock cities and your best scores are still there tomorrow. You don't paste
										the same 28 names again.
									</p>
									<p>
										<strong>The important things stay on screen.</strong> The clock and timer are always
										visible. Open the whiteboard or the student picker on top, and the timer keeps
										counting underneath. Close the tool and you're right back where you were.
									</p>
									<p>
										<strong>It's ready the moment you open it.</strong> No setup wizard, no class list
										required to get started. Pick a setup, give it a name, and it's usable straight away.
									</p>
									<p>
										<strong>It looks good on a projector.</strong>
										<em>Maximize Space</em> hides everything else on the page and enlarges the clock and
										timer so the back row can read them.
									</p>
									{@render screenshot(screenshots.maximized)}
									<p>
										<strong>You can have more than one.</strong> Teach two classes? Coach two teams?
										Create a Space for each. Their names, drawings and lists stay separate.
									</p>
									<p>
										<strong>No account. Your data stays with you.</strong> Everything is saved in your
										browser, on your device. Nothing to sign up for, nothing synced to a server. For a
										teacher, this means student names never leave the classroom computer. (I'd still
										recommend initials or nicknames.) If you want a copy, you can export a backup file
										and import it later.
									</p>
								</section>

								<section id="who-its-for">
									<h2>Who it's for</h2>
									<p>
										I started with four setups, each built around a real moment rather than a
										feature list.
									</p>

									<h3>Classroom: for teachers, tutors and workshop leaders</h3>
									<p>
										<em>"A little room for big ideas."</em> A clock and classroom timer up top, then
										Whiteboard, Student Picker, Squad Shuffle, Spin Decider and Icebreaker. You can
										add a short lesson agenda that shows what's <strong>Now</strong> and what's
										<strong>Next</strong>, or a scoreboard for a review game.
									</p>
									{@render screenshot(screenshots.whiteboard)}
									<p>
										Enter your class list once. Student Picker, Squad Shuffle and Spin Decider all
										use it, and the picker remembers who has already had a turn.
									</p>

									<h3>Coach: for coaches and small tournament organizers</h3>
									<p>
										<em>"From warm-up to the final."</em> A session timer, then the tools a tournament
										actually runs on: Squad Shuffle to make teams, Group Qualifier to run group play
										and Bracket Blitz for the knockout round.
									</p>
									{@render screenshot(screenshots.coach)}
									<p>
										The best part is that they pass results to each other. Shuffle your players into
										teams, send the teams to the qualifier, then send the winners to the bracket. You
										never retype a name, and the names never end up in a link or anywhere else
										outside your browser.
									</p>

									<h3>Office: for focused workdays</h3>
									<p>
										<em>"A calm place to focus and get things done."</em> A world clock with up to two
										extra cities (handy if your team is spread across time zones), a Focus Sprint timer,
										and Keyboard Calc, Whiteboard, Tone Mirror, Done List and Desk Stretch.
									</p>
									<p>
										Focus Sprint has one feature I really like. Start a work session and everything
										else on the desk fades and blurs, so only the timer is left. You can also pick
										how you're feeling (Low energy, Steady or Energized), and the desk takes on a
										matching tint. It's just a small, private nudge: no streaks, no scores, no
										tracking.
									</p>
									{@render screenshot(screenshots.focus)}

									<h3>Human Performer: for people who like to beat their own score</h3>
									<p>
										<em>"Short challenges. Your own personal records."</em> Reaction Time, Type Sprint,
										Memory Match, Quick Sort, Pattern Lock and Ink Match, plus a Personal Records card
										that keeps your best and recent results.
									</p>
									{@render screenshot(screenshots.performer)}
									<p>
										The records are yours alone. There's no leaderboard, and I deliberately didn't
										add a combined "brain score." A reaction time in milliseconds and a typing speed
										in words per minute aren't the same thing, and pretending otherwise would be
										misleading.
									</p>
								</section>

								<section id="why-build-on-apps">
									<h2>Why build on the 52 apps?</h2>
									<p>
										I could have built a workspace from scratch. Building on the existing collection
										was better, for users and for me.
									</p>
									<ul>
										<li>
											<strong>The tools are already proven.</strong> Each app has been live on its own
											for weeks or months. Spaces doesn't introduce new, untested tools. It brings familiar
											ones together.
										</li>
										<li>
											<strong>Nothing breaks for existing users.</strong> Every app still works on its
											own page, exactly as before. Spaces is an extra way to use them, not a replacement.
										</li>
										<li>
											<strong>The collection keeps growing.</strong> Each new app is a possible new tool
											for a Space. The weekly experiment now has somewhere to go.
										</li>
									</ul>
									<p>
										Getting there was more work than I expected, though. Apps built to fill a whole
										browser tab had to learn to live inside a small window on a desk. They had to
										keep running while you maximize them, share one class list, and pass results to
										each other without losing anything along the way. That's where AI came in.
									</p>
								</section>

								<section id="built-with-ai">
									<h2>How I built it with AI</h2>
									<p>The process looked a lot more like running a small team than like typing prompts.</p>
									<p>
										<strong>1. Write the brief first.</strong> Before any code, I worked with AI to write
										a full product brief: who each Space is for, what's on each desk, how data stays
										private and what "done" looks like. This became the source of truth for everything
										after it.
									</p>
									<p>
										<strong>2. Look before you build.</strong> The first task for the coding agent wasn't
										to write code. It was to go through all the existing apps and report which ones could
										live inside a Space as they were, which needed changes, and which (like the live voting
										app) didn't fit at all.
									</p>
									<p>
										<strong>3. Build in small phases.</strong> One working Space end to end first, then
										Classroom and Coach, then Office and Human Performer, then the extras like Weather,
										Agenda and Scoreboard. Each phase had to pass before the next one started.
									</p>
									<p>
										<strong>4. Get a second opinion from a different AI.</strong> Once it was "done," I
										asked a separate model to review the whole experience as a critical UX reviewer, and
										compare it with tools people already know, like Classroomscreen, Notion and the Windows
										focus timer. Its verdict: <strong>not ready.</strong> Clock cards were mostly empty
										space, and the clock showed 12-hour time to people who use a 24-hour clock. Fair points,
										and both are now fixed.
									</p>
									<p>
										<strong>5. Let the tests be the judge.</strong> Every behavior I cared about (a timer
										surviving a reload, two classes not mixing up their lists, a popup not losing your
										drawing when you maximize it) became an automated browser test. The final run is 66
										tests passing, plus a check that all the original standalone apps still work.
									</p>
									<p>
										My job shifted from writing code to deciding what mattered, then checking that it
										was true. I wrote more about that loop in
										<a href="/blog/loop-engineering">Loop Engineering</a>.
									</p>
								</section>

								<section id="whats-next">
									<h2>What's next</h2>
									<ul>
										<li>
											<strong>More tools for each Space</strong>, added only where they make a real moment
											better. Ideas on the list: a noise meter for classrooms, a meeting cost ticker for
											the office, a calming sound garden and more challenges for Personal Records.
										</li>
										<li>
											<strong>New Spaces.</strong> I'm exploring setups for a quiet, mindful corner and
											for the kitchen.
										</li>
										<li>
											<strong>Listening.</strong> Honestly, I don't know yet which Space people will love
											most. I'll keep watching which ones get used and build more for those, rather than
											guessing.
										</li>
									</ul>
								</section>

								<section id="try-it">
									<h2>Try it</h2>
									<div
										class="not-prose my-8 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-5 dark:border-teal-900 dark:bg-teal-900/20"
									>
										<p class="mb-2 font-serif text-xl font-semibold text-gray-900 dark:text-white">
											Create your first Space
										</p>
										<p class="text-base leading-relaxed text-gray-700 dark:text-gray-300">
											It takes about ten seconds and no account.
										</p>
										<a
											href="https://minibreaks.io/spaces"
											target="_blank"
											rel="noopener noreferrer"
											class="mt-4 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-teal-700 px-5 py-2.5 text-sm font-semibold !text-white !no-underline transition-colors hover:bg-teal-800 hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 dark:bg-teal-400 dark:!text-gray-950 dark:hover:bg-teal-300 dark:hover:!text-gray-950 dark:focus-visible:ring-teal-300 dark:focus-visible:ring-offset-gray-900"
										>
											Open MiniBreaks Spaces <i class="fas fa-arrow-right text-xs" aria-hidden="true"
											></i><span class="sr-only"> (opens in a new tab)</span>
										</a>
									</div>
									<p>
										If you're a teacher, coach or anyone who runs things from a screen, I'd love to
										hear what your Space is missing.
									</p>
								</section>
							</div>
						</div>
					</div>
				</article>

				{#if showTOC}
					<aside
						class="lg:w-56 lg:flex-shrink-0"
						transition:slide={{ axis: 'x', duration: prefersReducedMotion ? 0 : 250 }}
					>
						<div class="sticky top-20 space-y-4">
							<div
								class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-900"
							>
								<h3
									class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
								>
									Contents
								</h3>
								<nav class="space-y-1" aria-label="Table of contents">
									{#each tableOfContents as item (item.id)}
										<a
											href="#{item.id}"
											class="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-teal-50 hover:text-teal-600 dark:text-gray-300 dark:hover:bg-teal-900/20 dark:hover:text-teal-400"
										>
											{item.title}
										</a>
									{/each}
								</nav>
							</div>

							<div
								class="rounded-xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-700 dark:bg-gray-900"
							>
								<h3
									class="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
								>
									Share
								</h3>
								<div class="flex gap-2">
									<a
										href={getTwitterShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on Twitter"
										class="flex-1 rounded-lg bg-teal-50 p-2 text-center text-sm font-medium text-teal-600 transition-colors hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:hover:bg-teal-900/50"
									>
										<i class="fab fa-twitter text-xs" aria-hidden="true"></i>
									</a>
									<a
										href={getLinkedInShareUrl()}
										target="_blank"
										rel="noopener noreferrer"
										aria-label="Share on LinkedIn"
										class="flex-1 rounded-lg bg-teal-50 p-2 text-center text-sm font-medium text-teal-600 transition-colors hover:bg-teal-100 dark:bg-teal-900/30 dark:text-teal-400 dark:hover:bg-teal-900/50"
									>
										<i class="fab fa-linkedin-in text-xs" aria-hidden="true"></i>
									</a>
									<button
										onclick={copyLink}
										aria-label="Copy link to clipboard"
										class="flex-1 rounded-lg bg-gray-100 p-2 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
									>
										<i class="fas fa-link text-xs" aria-hidden="true"></i>
									</button>
								</div>
								<p class="mt-2 text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
									{copyStatus}
								</p>
							</div>
						</div>
					</aside>
				{/if}
			</div>
		</div>
	</div>

	<MorePosts currentSlug="minibreaks-spaces" />

	<footer
		class="border-t border-gray-200 py-10 text-center text-sm text-gray-600 dark:border-gray-800 dark:text-gray-400"
	>
		<a href="/" class="transition-colors hover:text-gray-700 dark:hover:text-gray-300">
			Back to hongincanada.com
		</a>
	</footer>
</div>

