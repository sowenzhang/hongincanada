<script lang="ts">
	import ScrollReveal from '$lib/components/ScrollReveal.svelte';

	const pageData = {
		title: 'Free AI Workflow Review | Hong in Canada',
		description:
			'Send me one repetitive workflow. I may send back a short written review with practical AI ideas, prompts, risks, and next steps.',
		canonical: 'https://www.hongincanada.com/ai-workflow-review',
		ogImage: 'https://www.hongincanada.com/profile.png'
	};

	let formData = $state({
		name: '',
		email: '',
		workflow: '',
		currentProcess: '',
		tools: '',
		betterLooksLike: '',
		sensitiveData: ''
	});

	let formStatus = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		formStatus = 'sending';

		try {
			const subject = encodeURIComponent('AI Workflow Review Request');
			const body = encodeURIComponent(
				`Name: ${formData.name}\n` +
				`Email: ${formData.email}\n\n` +
				`Workflow to review:\n${formData.workflow}\n\n` +
				`How it works today:\n${formData.currentProcess}\n\n` +
				`Current tools:\n${formData.tools}\n\n` +
				`What "better" looks like:\n${formData.betterLooksLike}\n\n` +
				`Sensitive data note:\n${formData.sensitiveData}`
			);
			window.location.href = `mailto:me@hongincanada.com?subject=${subject}&body=${body}`;
			formStatus = 'sent';
		} catch {
			formStatus = 'error';
		}
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
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageData.title} />
	<meta name="twitter:description" content={pageData.description} />
	<meta name="twitter:image" content={pageData.ogImage} />

	{@html `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://www.hongincanada.com/#person",
      "name": "Hong Zhang",
      "url": "https://www.hongincanada.com",
      "jobTitle": "Software and Product Leader",
      "description": "Software and product leader with experience in business consulting, large-scale systems, UX, experimentation, and AI-assisted development workflows."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.hongincanada.com/ai-workflow-review#webpage",
      "url": "https://www.hongincanada.com/ai-workflow-review",
      "name": "Free AI Workflow Review",
      "headline": "Free AI Workflow Review",
      "description": "Send one repetitive workflow and receive a short written review with practical AI ideas, prompt suggestions, risks, guardrails, and next steps.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.hongincanada.com/#website",
        "name": "hongincanada",
        "url": "https://www.hongincanada.com"
      },
      "about": {
        "@id": "https://www.hongincanada.com/ai-workflow-review#service"
      },
      "author": {
        "@id": "https://www.hongincanada.com/#person"
      },
      "mainEntity": {
        "@id": "https://www.hongincanada.com/ai-workflow-review#service"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.hongincanada.com/ai-workflow-review#service",
      "name": "Free AI Workflow Review",
      "serviceType": "AI workflow review",
      "provider": {
        "@id": "https://www.hongincanada.com/#person"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "audience": {
        "@type": "Audience",
        "audienceType": "Small business owners, solo professionals, educators, creators, builders, and small teams"
      },
      "description": "An informal free review of one repetitive knowledge-work workflow, with practical AI suggestions, prompt ideas, risks, guardrails, and next steps.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/LimitedAvailability",
        "description": "Free informal workflow review. Selected requests are reviewed when availability allows."
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.hongincanada.com/ai-workflow-review#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can't I just ask ChatGPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, and sometimes that is enough. This review is for people who want another human to look at the workflow, spot risks, suggest a simpler first step, and turn a vague idea into something testable."
          }
        },
        {
          "@type": "Question",
          "name": "When should I expect a response?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "I review selected requests when I have availability. If I'm able to review your workflow, I'll usually try to respond within 1–3 weeks. I may not be able to respond to every submission."
          }
        },
        {
          "@type": "Question",
          "name": "Is this free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. This is currently free. I review selected requests when I have availability, so I may not be able to respond to every submission."
          }
        },
        {
          "@type": "Question",
          "name": "Will you build the automation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not as part of this free review. The goal is to suggest a practical first version you can test, not to build or operate production systems."
          }
        }
      ]
    }
  ]
}
	</script>`}
</svelte:head>

<!-- ============================================ -->
<!-- HERO                                         -->
<!-- ============================================ -->
<section class="relative overflow-hidden bg-white dark:bg-gray-950 py-24 md:py-32">
	<div class="hero-gradient-mesh pointer-events-none absolute inset-0 opacity-50"></div>
	<div class="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
		<ScrollReveal>
			<h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
				Free AI Workflow Review
			</h1>
			<p class="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
				Send me one repetitive workflow. I may send back a short written review with practical AI ideas, prompts, risks, and next steps.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4">
				<a
					href="#send-workflow"
					class="rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-white"
				>
					Send a Workflow
				</a>
				<a
					href="#examples"
					class="rounded-full border border-gray-300 dark:border-white/10 px-6 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:border-gray-400 dark:hover:border-white/20 hover:text-gray-900 dark:hover:text-white"
				>
					See Examples
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- WHY THIS EXISTS                              -->
<!-- ============================================ -->
<section class="bg-gray-50 dark:bg-gray-900/50 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
				AI advice is often too vague to act on
			</h2>
			<div class="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
				<p>
					Most people do not need a giant AI strategy. They need help looking at one real workflow and figuring out whether AI can make it easier, safer, or faster.
				</p>
				<p>
					This page is for anyone who has a repetitive knowledge-work task and wants a practical second opinion. Not a sales pitch. Not a generic list of AI tools. Just a calm look at your workflow with honest suggestions.
				</p>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- HOW IT WORKS                                 -->
<!-- ============================================ -->
<section class="bg-white dark:bg-gray-950 py-12">
	<div class="mx-auto max-w-4xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-blue-400">Process</p>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">How it works</h2>
			</div>
		</ScrollReveal>

		<!-- Flowchart -->
		<div class="mx-auto max-w-2xl">
			<div class="relative">
				<!-- Connecting line -->
				<div class="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-emerald-500/40 md:left-8"></div>

				<ScrollReveal delay={100}>
					<div class="relative mb-8 flex items-start gap-4 md:gap-6">
						<div class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20 md:h-16 md:w-16">
							<span class="text-lg font-bold text-blue-400 md:text-xl">1</span>
						</div>
						<div class="pt-2 md:pt-4">
							<h3 class="mb-1 font-semibold text-gray-900 dark:text-white">You describe one workflow</h3>
							<p class="text-sm text-gray-500 dark:text-gray-400">Use the form below to explain what you do repeatedly and how it works today.</p>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal delay={200}>
					<div class="relative mb-8 flex items-start gap-4 md:gap-6">
						<div class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-500/10 border border-purple-500/20 md:h-16 md:w-16">
							<span class="text-lg font-bold text-purple-400 md:text-xl">2</span>
						</div>
						<div class="pt-2 md:pt-4">
							<h3 class="mb-1 font-semibold text-gray-900 dark:text-white">I review selected requests</h3>
							<p class="text-sm text-gray-500 dark:text-gray-400">I read through submissions when I have availability. I may not be able to respond to every one.</p>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal delay={300}>
					<div class="relative mb-8 flex items-start gap-4 md:gap-6">
						<div class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-500/20 md:h-16 md:w-16">
							<span class="text-lg font-bold text-cyan-400 md:text-xl">3</span>
						</div>
						<div class="pt-2 md:pt-4">
							<h3 class="mb-1 font-semibold text-gray-900 dark:text-white">I send back a short written review</h3>
							<p class="text-sm text-gray-500 dark:text-gray-400">A plain-language summary with AI opportunities, prompt ideas, risks, and a suggested first step.</p>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal delay={400}>
					<div class="relative flex items-start gap-4 md:gap-6">
						<div class="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 md:h-16 md:w-16">
							<span class="text-lg font-bold text-emerald-400 md:text-xl">4</span>
						</div>
						<div class="pt-2 md:pt-4">
							<h3 class="mb-1 font-semibold text-gray-900 dark:text-white">You decide whether to test it</h3>
							<p class="text-sm text-gray-500 dark:text-gray-400">No pressure. Try the suggestions if they make sense, or don't. It is your workflow.</p>
						</div>
					</div>
				</ScrollReveal>
			</div>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- WHO THIS IS FOR                              -->
<!-- ============================================ -->
<section class="bg-gray-50 dark:bg-gray-900/50 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
				Who this is for
			</h2>
			<p class="mb-6 text-gray-600 dark:text-gray-400">This may be useful if you are someone who has repetitive knowledge work, for example:</p>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<ul class="space-y-3">
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
					<span class="text-gray-700 dark:text-gray-300">A small business owner with repeated customer questions, documents, or admin work</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
					<span class="text-gray-700 dark:text-gray-300">A solo professional or consultant who creates similar proposals, reports, or follow-ups</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
					<span class="text-gray-700 dark:text-gray-300">An educator or creator trying to turn notes, lessons, or ideas into reusable material</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
					<span class="text-gray-700 dark:text-gray-300">A small team trying to use AI without buying a big system or starting a huge project</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
					<span class="text-gray-700 dark:text-gray-300">A builder who has a messy workflow and wants a second opinion on where AI can help</span>
				</li>
			</ul>
		</ScrollReveal>

		<ScrollReveal delay={200}>
			<div class="mt-10 flex justify-center">
				<a
					href="#send-workflow"
					class="rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-white"
				>
					Send a Workflow
				</a>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- PROBABLY NOT A GOOD FIT                      -->
<!-- ============================================ -->
<section class="bg-white dark:bg-gray-950 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<h2 class="mb-8 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
				Probably not a good fit
			</h2>
			<p class="mb-6 text-gray-600 dark:text-gray-400">This is probably not a good fit if you need:</p>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<ul class="space-y-3">
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-xmark mt-0.5 text-sm text-orange-400"></i>
					<span class="text-gray-700 dark:text-gray-300">Legal, medical, tax, financial, HR, or compliance advice</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-xmark mt-0.5 text-sm text-orange-400"></i>
					<span class="text-gray-700 dark:text-gray-300">Someone to handle sensitive or confidential data</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-xmark mt-0.5 text-sm text-orange-400"></i>
					<span class="text-gray-700 dark:text-gray-300">Production automation or system integration</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-xmark mt-0.5 text-sm text-orange-400"></i>
					<span class="text-gray-700 dark:text-gray-300">Guaranteed business results</span>
				</li>
				<li class="flex items-start gap-3">
					<i class="fas fa-circle-xmark mt-0.5 text-sm text-orange-400"></i>
					<span class="text-gray-700 dark:text-gray-300">A full custom software project</span>
				</li>
			</ul>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- STILL NOT SURE                               -->
<!-- ============================================ -->
<section class="bg-white dark:bg-gray-950 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 md:p-6">
				<h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">Still not sure?</h3>
				<p class="mb-6 text-gray-600 dark:text-gray-400">
					That's okay. Send a simple, anonymized version of the workflow and I'll decide whether it's something I can reasonably review.
				</p>
				<div class="flex justify-center">
					<a
						href="#send-workflow"
						class="rounded-full border border-blue-500/50 bg-blue-500/10 px-6 py-2.5 text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors hover:bg-blue-500/20 hover:text-blue-700 dark:hover:text-white"
					>
						Send a Workflow
					</a>
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- GOOD EXAMPLES                                -->
<!-- ============================================ -->
<section id="examples" class="bg-gray-50 dark:bg-gray-900/50 py-12">
	<div class="mx-auto max-w-5xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-emerald-400">Examples</p>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Workflows that work well for this</h2>
			</div>
		</ScrollReveal>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			<ScrollReveal delay={100}>
				<div class="glass-card flex h-full min-h-[132px] items-start gap-4 rounded-xl p-5">
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
						<i class="fas fa-envelope text-blue-400"></i>
					</div>
					<div class="flex min-h-full flex-1 flex-col">
						<h3 class="min-h-[3rem] font-semibold leading-tight text-gray-900 dark:text-white">Customer email replies</h3>
						<p class="mt-1 min-h-[2.25rem] text-xs leading-snug text-gray-500 dark:text-gray-400">Responding to similar questions over and over</p>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={150}>
				<div class="glass-card flex h-full min-h-[132px] items-start gap-4 rounded-xl p-5">
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500/10">
						<i class="fas fa-list-check text-purple-400"></i>
					</div>
					<div class="flex min-h-full flex-1 flex-col">
						<h3 class="min-h-[3rem] font-semibold leading-tight text-gray-900 dark:text-white">Meeting notes to action items</h3>
						<p class="mt-1 min-h-[2.25rem] text-xs leading-snug text-gray-500 dark:text-gray-400">Turning conversation into clear next steps</p>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={200}>
				<div class="glass-card flex h-full min-h-[132px] items-start gap-4 rounded-xl p-5">
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
						<i class="fas fa-chart-bar text-cyan-400"></i>
					</div>
					<div class="flex min-h-full flex-1 flex-col">
						<h3 class="min-h-[3rem] font-semibold leading-tight text-gray-900 dark:text-white">Weekly reports</h3>
						<p class="mt-1 min-h-[2.25rem] text-xs leading-snug text-gray-500 dark:text-gray-400">Pulling data together into a recurring summary</p>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={250}>
				<div class="glass-card flex h-full min-h-[132px] items-start gap-4 rounded-xl p-5">
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
						<i class="fas fa-file-lines text-orange-400"></i>
					</div>
					<div class="flex min-h-full flex-1 flex-col">
						<h3 class="min-h-[3rem] font-semibold leading-tight text-gray-900 dark:text-white">Proposal and content drafts</h3>
						<p class="mt-1 min-h-[2.25rem] text-xs leading-snug text-gray-500 dark:text-gray-400">Writing similar documents from scratch each time</p>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={300}>
				<div class="glass-card flex h-full min-h-[132px] items-start gap-4 rounded-xl p-5">
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500/10">
						<i class="fas fa-microscope text-pink-400"></i>
					</div>
					<div class="flex min-h-full flex-1 flex-col">
						<h3 class="min-h-[3rem] font-semibold leading-tight text-gray-900 dark:text-white">Research organization</h3>
						<p class="mt-1 min-h-[2.25rem] text-xs leading-snug text-gray-500 dark:text-gray-400">Gathering and synthesizing scattered information</p>
					</div>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={350}>
				<div class="glass-card flex h-full min-h-[132px] items-start gap-4 rounded-xl p-5">
					<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
						<i class="fas fa-file-contract text-emerald-400"></i>
					</div>
					<div class="flex min-h-full flex-1 flex-col">
						<h3 class="min-h-[3rem] font-semibold leading-tight text-gray-900 dark:text-white">Public document summaries</h3>
						<p class="mt-1 min-h-[2.25rem] text-xs leading-snug text-gray-500 dark:text-gray-400">Condensing long public documents into key points</p>
					</div>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- WHAT YOU MAY RECEIVE                         -->
<!-- ============================================ -->
<section class="bg-white dark:bg-gray-950 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="mb-8 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-purple-400">Output</p>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">What you may receive</h2>
			</div>
			<p class="mb-8 text-center text-gray-600 dark:text-gray-400">
				If I review your workflow, I will send a short written document that may include:
			</p>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<div class="glass-card rounded-2xl p-6 md:p-8">
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-blue-400"></i>
						<span class="text-gray-700 dark:text-gray-300">A summary of your workflow as I understand it</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
						<span class="text-gray-700 dark:text-gray-300">Where AI might realistically help</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-orange-400"></i>
						<span class="text-gray-700 dark:text-gray-300">Where AI should not be used</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-purple-400"></i>
						<span class="text-gray-700 dark:text-gray-300">Suggested prompts or templates you can try</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-cyan-400"></i>
						<span class="text-gray-700 dark:text-gray-300">Simple tool suggestions (if relevant)</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-pink-400"></i>
						<span class="text-gray-700 dark:text-gray-300">Risks and guardrails to keep in mind</span>
					</li>
					<li class="flex items-start gap-3">
						<i class="fas fa-circle-check mt-0.5 text-sm text-emerald-400"></i>
						<span class="text-gray-700 dark:text-gray-300">A small test plan or next steps</span>
					</li>
				</ul>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- FAQ                                          -->
<!-- ============================================ -->
<section class="bg-gray-50 dark:bg-gray-900/50 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="mb-12 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-cyan-400">Questions</p>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Common questions</h2>
			</div>
		</ScrollReveal>

		<div class="space-y-6">
			<ScrollReveal delay={100}>
				<div id="faq-chatgpt" class="glass-card rounded-xl p-6">
					<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">Can't I just ask ChatGPT?</h3>
					<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						Yes, and sometimes that is enough. This review is for people who want another human to look at the workflow, spot risks, suggest a simpler first step, and turn a vague idea into something testable.
					</p>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={200}>
				<div id="faq-response-time" class="glass-card rounded-xl p-6">
					<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">When should I expect a response?</h3>
					<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						I review selected requests when I have availability. If I'm able to review your workflow, I'll usually try to respond within 1–3 weeks. I may not be able to respond to every submission.
					</p>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={300}>
				<div id="faq-free" class="glass-card rounded-xl p-6">
					<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">Is this free?</h3>
					<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						Yes. This is currently free. I review selected requests when I have availability, so I may not be able to respond to every submission.
					</p>
				</div>
			</ScrollReveal>

			<ScrollReveal delay={400}>
				<div id="faq-automation" class="glass-card rounded-xl p-6">
					<h3 class="mb-2 font-semibold text-gray-900 dark:text-white">Will you build the automation?</h3>
					<p class="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
						Not as part of this free review. The goal is to suggest a practical first version you can test, not to build or operate production systems.
					</p>
				</div>
			</ScrollReveal>
		</div>
	</div>
</section>

<!-- ============================================ -->
<!-- SAFETY BOUNDARIES                            -->
<!-- ============================================ -->
<section class="bg-white dark:bg-gray-950 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6 md:p-8">
				<div class="mb-4 flex items-center gap-3">
					<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
						<i class="fas fa-shield-halved text-orange-400"></i>
					</div>
					<h2 class="text-xl font-bold text-gray-900 dark:text-white">Please do not send sensitive data</h2>
				</div>
				<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
					This review involves discussing your workflow in writing. Do not include anything you would not want pasted into an AI tool. Specifically, please avoid sending:
				</p>
				<ul class="mb-6 space-y-2">
					<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
						<i class="fas fa-xmark mt-0.5 text-xs text-orange-400"></i>
						Private customer data
					</li>
					<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
						<i class="fas fa-xmark mt-0.5 text-xs text-orange-400"></i>
						Medical, legal, or financial records
					</li>
					<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
						<i class="fas fa-xmark mt-0.5 text-xs text-orange-400"></i>
						Passwords or API keys
					</li>
					<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
						<i class="fas fa-xmark mt-0.5 text-xs text-orange-400"></i>
						Confidential company documents
					</li>
					<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
						<i class="fas fa-xmark mt-0.5 text-xs text-orange-400"></i>
						Employee performance data
					</li>
					<li class="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
						<i class="fas fa-xmark mt-0.5 text-xs text-orange-400"></i>
						Anything sensitive that should not be pasted into an AI tool
					</li>
				</ul>

				<div class="rounded-lg border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-gray-900/50 p-4">
					<p class="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
						<strong class="text-gray-700 dark:text-gray-300">Disclaimer:</strong> This is informal educational feedback, not legal, financial, medical, compliance, security, or professional business advice. You are responsible for testing and reviewing anything before using it in real work. No results are guaranteed.
					</p>
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- ABOUT ME                                     -->
<!-- ============================================ -->
<section class="bg-gray-50 dark:bg-gray-900/50 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="flex flex-col items-center gap-6 md:flex-row md:items-start">
				<div class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/20">
					<i class="fas fa-user text-2xl text-blue-400"></i>
				</div>
				<div>
					<h2 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">About me</h2>
					<p class="leading-relaxed text-gray-600 dark:text-gray-400">
						I’m Hong Zhang. I’ve spent years working across business consulting, large-scale software systems, product UX, experimentation, and AI-assisted development workflows. I’ve worked in both consulting environments and large corporations, where much of the work is turning vague problems into practical systems people can actually use.
					</p>
				</div>
			</div>
		</ScrollReveal>
	</div>
</section>

<!-- ============================================ -->
<!-- CONTACT FORM                                 -->
<!-- ============================================ -->
<section id="send-workflow" class="bg-white dark:bg-gray-950 py-12">
	<div class="mx-auto max-w-2xl px-4 sm:px-6">
		<ScrollReveal>
			<div class="mb-10 text-center">
				<p class="mb-2 text-sm font-medium tracking-widest uppercase text-blue-400">Submit</p>
				<h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">Send a workflow</h2>
				<p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
					Describe one repetitive workflow. I will review selected requests when I have availability.
				</p>
			</div>
		</ScrollReveal>

		<ScrollReveal delay={100}>
			<form onsubmit={handleSubmit} class="space-y-6">
				<div>
					<label for="name" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="Your name"
					/>
				</div>

				<div>
					<label for="email" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="you@example.com"
					/>
				</div>

				<div>
					<label for="workflow" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">What workflow do you want reviewed?</label>
					<textarea
						id="workflow"
						bind:value={formData.workflow}
						required
						rows="3"
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="e.g. I reply to 20+ similar customer emails each day about shipping status"
					></textarea>
				</div>

				<div>
					<label for="currentProcess" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">How does it work today?</label>
					<textarea
						id="currentProcess"
						bind:value={formData.currentProcess}
						rows="3"
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="Walk through the steps you currently take"
					></textarea>
				</div>

				<div>
					<label for="tools" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">What tools do you currently use?</label>
					<input
						type="text"
						id="tools"
						bind:value={formData.tools}
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="e.g. Gmail, Google Docs, Slack, Notion"
					/>
				</div>

				<div>
					<label for="betterLooksLike" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">What would "better" look like?</label>
					<textarea
						id="betterLooksLike"
						bind:value={formData.betterLooksLike}
						rows="2"
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="e.g. Spend less time writing the same thing, fewer errors, faster turnaround"
					></textarea>
				</div>

				<div>
					<label for="sensitiveData" class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Does this involve sensitive data?</label>
					<textarea
						id="sensitiveData"
						bind:value={formData.sensitiveData}
						rows="2"
						class="w-full rounded-lg border border-gray-300 dark:border-white/10 bg-white dark:bg-gray-900 px-4 py-2.5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
						placeholder="If yes, please anonymize before sending. Describe the type of data without including actual records."
					></textarea>
				</div>

				<button
					type="submit"
					disabled={formStatus === 'sending'}
					class="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-offset-gray-950"
				>
					{#if formStatus === 'sending'}
						Preparing...
					{:else if formStatus === 'sent'}
						Opening email client...
					{:else}
						Send Workflow
					{/if}
				</button>

				{#if formStatus === 'sent'}
					<p class="text-center text-sm text-emerald-500">
						Your email client should open with the details pre-filled. If it did not, you can email me directly at me@hongincanada.com.
					</p>
				{/if}
			</form>
		</ScrollReveal>
	</div>
</section>
