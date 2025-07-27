<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 2
	const articleData = getArticleData(2);
	const navigation = getNavigationData(2);

	// Table of contents for this part
	const tableOfContents = [
		{ id: 'my-original-expectations', title: 'My Original Expectations', level: 1 },
		{ id: 'the-time-problem', title: 'The Time Problem', level: 2 },
		{ id: 'what-i-wanted-ai-to-do', title: 'What I Wanted AI to Do', level: 2 },
		{ id: 'what-ai-actually-delivered', title: 'What AI Actually Delivered', level: 1 },
		{ id: 'beyond-expectations', title: 'Beyond My Expectations', level: 2 },
		{ id: 'the-partnership-shift', title: 'The Partnership Shift', level: 2 },
		{ id: 'reality-check', title: 'The Reality Check', level: 1 },
		{ id: 'setting-your-expectations', title: 'Setting Your Expectations', level: 1 },
		{ id: 'reflection-questions', title: 'Questions for You', level: 2 },
		{ id: 'the-key-mindset', title: 'The Key Mindset', level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Why I Wanted to Use AI
		</h1>
		<h2 class="mb-8 text-center text-2xl font-medium text-blue-600 md:text-3xl dark:text-blue-400">
			Setting Realistic Expectations
		</h2>

		<div
			class="mb-8 flex flex-wrap items-center justify-center gap-6 text-gray-600 dark:text-gray-400"
		>
			<span><i class="fas fa-calendar mr-2" aria-hidden="true"></i>{articleData?.publishDate}</span>
			<span><i class="fas fa-clock mr-2" aria-hidden="true"></i>{articleData?.readTime}</span>
			<span><i class="fas fa-user mr-2" aria-hidden="true"></i>Hong</span>
		</div>

		<p
			class="mx-auto max-w-4xl text-center text-xl leading-relaxed text-gray-600 dark:text-gray-300"
		>
			{articleData?.description}
		</p>
	</svelte:fragment>

	<section id="my-original-expectations">
		<h2>My Original Expectations</h2>

		<p>
			Before we formally start the series, I want to let you, the reader, know what my original
			expectation of using AI was. This transparency is important because it sets the foundation for
			everything that follows in this series.
		</p>

		<h3 id="the-time-problem">The Time Problem</h3>

		<p>
			Having built several websites and apps before, I knew how much time even a "simple" project
			could take. For something the size of MiniBreaks, doing everything from scratch—while juggling
			a full-time job, would easily eat up a year or more. The endless cycle of:
		</p>

		<ul>
			<li>Setting up project structure and tooling</li>
			<li>Writing boilerplate code for authentication, databases, and APIs</li>
			<li>Designing and iterating on UI components</li>
			<li>Writing marketing copy and content</li>
			<li>Making countless small design decisions</li>
		</ul>

		<p>
			I'd been through this before. I knew that by month 6, motivation would wane. By month 9, I'd
			be questioning whether the project was worth continuing. And by month 12, there was a good
			chance it would join the graveyard of unfinished side projects.
		</p>

		<h3 id="what-i-wanted-ai-to-do">What I Wanted AI to Do</h3>

		<p>
			I wanted AI to accelerate the boring parts—the foundation work that every project needs but
			that doesn't feel particularly creative or engaging:
		</p>

		<ul>
			<li>
				<strong>Help me bootstrap a well-organized codebase</strong> with proper folder structure, configuration
				files, and initial setup
			</li>
			<li>
				<strong>Offer quick ideas for UI/UX</strong> when I was stuck staring at a blank screen
			</li>
			<li>
				<strong>Speed up writing copy and generating content</strong> for landing pages, feature descriptions,
				and marketing materials
			</li>
			<li>
				<strong>Act like a second brain during design decisions</strong>, someone to bounce ideas
				off when I wasn't sure which approach to take
			</li>
		</ul>

		<p>
			Essentially, I wanted AI to be my development accelerator, not my replacement. I still wanted
			to make the key decisions, write the critical logic, and shape the product vision. But I hoped
			AI could eliminate the friction that often kills side projects before they gain momentum.
		</p>
		<p>
			More importantly, I needed AI to help me finish my project before it becomes another my
			abandoned project! 🤦‍♂️
		</p>
	</section>

	<section id="what-ai-actually-delivered">
		<h2>What AI Actually Delivered</h2>

		<p>AI did all of those things I expected—and occasionally, it did more. Much more.</p>

		<h3 id="beyond-expectations">Beyond My Expectations</h3>

		<p>
			For example, AI not only refactored my code using solid architecture principles, it sometimes
			suggested layouts or visuals better than what I had in mind. It would reuse styles from my
			existing design system and make smart decisions about what elements to highlight on a new
			page.
		</p>

		<p>
			There were moments when I'd describe a feature I wanted, and AI would come back with an
			implementation that was not just functional, but elegant. It would suggest patterns I hadn't
			considered, point out potential edge cases, and even recommend user experience improvements.
		</p>

		<p>
			Along the way, I had a few "aha" moments—like realizing I could ask AI not just to generate
			code, but to help structure it using best practices. Suddenly, my project folders were clean,
			organized, and extensible. My components followed consistent patterns. My API endpoints had
			proper error handling and validation.
		</p>

		<h3 id="the-partnership-shift">The Partnership Shift</h3>

		<p>
			The real breakthrough came when I stopped thinking of AI as a tool and started treating it as
			a development partner. Instead of asking "Can you write a function of doing X?" I began asking
			something like "Before we go further, I want us to consider our current architecture so it
			will be more maintainable in the long term?" or "For this feature, but how can we sustain user
			engagement?"
		</p>

		<p>
			Over time, I began giving more instructions to AI instead of writing the changes manually.
			This wasn't because I became lazy; it was because I discovered that articulating my
			requirements clearly to AI forced me to think more systematically about what I was building.
		</p>

		<p>
			And that shift, treating AI as a partner rather than a tool, was what really unlocked its
			value.
		</p>
	</section>

	<section id="reality-check">
		<h2>The Reality Check</h2>

		<p>
			But let's be honest: it wasn't hands-off magic. AI required careful direction, clear
			communication, and constant quality control. There were moments of frustration when AI would
			misunderstand requirements or generate code that looked right but had subtle bugs.
		</p>

		<p>
			I learned that AI amplifies both good and bad practices. If I was unclear in my instructions,
			I got unclear results. If I didn't understand the problem space well enough, AI couldn't
			compensate for that gap.
		</p>

    <div
			class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20"
		>
			<div class="flex items-start space-x-3">
				<i class="fas fa-lightbulb mt-1 text-emerald-600 dark:text-emerald-400" aria-hidden="true"></i>
				<div>
					<p class="mb-2 font-semibold text-emerald-800 dark:text-emerald-300">Key Lesson</p>
					<p class="mb-0 text-emerald-700 dark:text-emerald-400">
I need to get my requirements right before
      asking AI to implement them.
    					</p>
				</div>
			</div>
		</div>

		<p>
			The most successful outcomes happened when I combined my domain knowledge, strategic thinking,
			and product vision with AI's ability to rapidly generate, iterate, and implement solutions.
		</p>
	</section>

	<section id="setting-your-expectations">
		<h2>Setting Your Expectations</h2>

		<p>Therefore, I want you to ask yourself a few questions before we continue with the series:</p>

		<h3 id="reflection-questions">Questions for You</h3>

		<div class="my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<ul class="space-y-3">
				<li>
					<strong>What do you want AI to do for you?</strong> Be specific. Is it about speed? Learning?
					Handling tasks you find tedious?
				</li>
				<li>
					<strong>How much are you expecting AI to do for you?</strong> 20% of the work? 50%? 80%? What
					would success look like?
				</li>
				<li>
					<strong>What are you willing to learn or adapt?</strong> Working with AI effectively requires
					new skills—prompt engineering, quality control, strategic oversight.
				</li>
				<li>
					<strong>What parts of development do you actually enjoy?</strong> AI should amplify the fun
					parts, not replace them entirely.
				</li>
			</ul>
		</div>

		<p>
			Briefly write down your answers. I'd encourage you to come back to these notes halfway through
			the series and see if everything is meeting your expectations. If not, that's valuable
			feedback: both for adjusting your approach and for understanding where AI's current
			capabilities align with your needs.
		</p>
	</section>

	<section id="the-key-mindset">
		<h2>The Key Mindset</h2>

		<p>
			The most important mindset shift I made was this: <strong
				>AI is not about replacing your thinking, it's about amplifying it.</strong
			>
		</p>

		<p>
			The developers who struggle with AI are often those who expect it to read their minds or solve
			problems they haven't fully understood themselves. The developers who thrive are those who use
			AI to execute their well-thought-out plans more efficiently.
		</p>

		<p>
			In the next part, we'll dive into the specific tools and setup that made this collaboration
			possible. But first, take a moment to think about your own expectations and motivations.
			They'll shape everything that follows.
		</p>

		<div class="my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
			<p class="mb-2 font-medium text-amber-800 dark:text-amber-200">💡 Pro Tip</p>
			<p class="text-amber-700 dark:text-amber-300">
				Start a development journal for this series. Document your expectations now, track your
				experiences as you follow along, and note what surprises you. This self-reflection will be
				invaluable for developing your own AI-assisted development style.
			</p>
		</div>
	</section>
</BaseSeriesPage>
