<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 8
	const articleData = getArticleData(8);
	const navigation = getNavigationData(8);

	// Table of contents
	const tableOfContents = [
		{ id: 'intro', title: 'Introduction', level: 1 },
		{ id: 'testing', title: 'Testing Your Website', level: 1 },
		{ id: 'manual-testing', title: 'Manual Testing', level: 2 },
		{ id: 'debugging-with-ai', title: 'Debugging with AI Assistance', level: 2 },
		{ id: 'automation-testing', title: 'Automation Testing (Optional)', level: 2 },
		{ id: 'security-check', title: 'Security Check', level: 1 },
		{ id: 'common-security-measures', title: 'Common Security Measures', level: 2 },
		{ id: 'securing-sensitive-data', title: 'Securing Sensitive Data', level: 2 },
		{ id: 'accessibility-responsiveness', title: 'Accessibility and Responsiveness', level: 1 },
		{ id: 'accessibility-checks', title: 'Accessibility Checks', level: 2 },
		{ id: 'responsiveness-testing', title: 'Responsiveness Testing', level: 2 },
		{ id: 'performance-check', title: 'Performance Check', level: 1 },
		{ id: 'lighthouse-tool', title: 'Using Lighthouse Tool', level: 2 },
		{ id: 'performance-optimization', title: 'Performance Optimization', level: 2 },
		{ id: 'seo', title: 'SEO (Search Engine Optimization)', level: 1 },
		{ id: 'seo-basics', title: 'SEO Basics', level: 2 },
		{ id: 'meta-tags-content', title: 'Meta Tags and Content', level: 2 },
		{ id: 'deployment-time', title: 'Deployment Time', level: 1 },
		{ id: 'deployment-options', title: 'Deployment Options', level: 2 },
		{ id: 'deployment-checklist', title: 'Pre-Deployment Checklist', level: 2 },
		{ id: 'homework', title: 'Homework', level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header content -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Before Deployment: Testing & Preparation
		</h1>

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
			You've built something amazing! Before launching your website to the world, let's ensure it's ready for real users. This guide covers essential testing, security, performance, and deployment preparation steps.
		</p>
	</svelte:fragment>

	<!-- Main content -->
	<section id="intro">
		<h2>Introduction</h2>
		<p>
			Congratulations on reaching this stage! You've successfully created an MVP (Minimum Viable Product) for your website. Now comes a crucial phase that many developers overlook: preparation for deployment.
		</p>
		<p>
			This isn't just about making your website "go live" – it's about ensuring your users have a smooth, secure, and enjoyable experience from day one. Since it's impossible to know everything from the start, we'll leverage AI to help us ask the right questions and implement the best practices.
		</p>

	</section>

	<section id="testing">
		<h2>Testing Your Website</h2>
		<p>
			Testing ensures your website functions correctly and provides a good user experience. Think of it as quality assurance for your digital product. There are several types of testing, but don't worry – we'll focus on the most practical approaches for your project.
		</p>

		<h3 id="manual-testing">Manual Testing</h3>
		<p>
			For personal projects and MVPs, thorough manual testing is often sufficient and the most practical approach. Here's how to do it effectively:
		</p>

		<ol>
			<li><strong>Start your development server:</strong> Run your website locally using <code>npm run dev</code></li>
			<li><strong>Test systematically:</strong> Open your browser and test every page, button, form, and feature</li>
			<li><strong>Check different scenarios:</strong> Try entering invalid data, clicking buttons multiple times, testing edge cases</li>
			<li><strong>Test user flows:</strong> Go through complete user journeys from start to finish</li>
		</ol>

		<!-- Placeholder for manual testing image -->
		<div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
			<img src="/ai-series/testing_minibreak_locally.jpg" loading="lazy"
				 alt="Screenshot of browser dev tools showing manual testing process"
				 class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto"
				 style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
		</div>

    <p>
      In the above screenshot, you can see the browser's developer tools open, which is essential for debugging and testing.
      You can inspect elements, view console logs, and check network requests to ensure everything is functioning as expected.
      One thing to keep in mind is you should disable cache so you will not accidentally use cached data during testing.
    </p>
		<h3 id="debugging-with-ai">Debugging with AI Assistance</h3>
		<p>
			When something doesn't behave correctly, AI can be your debugging partner. Here's a systematic approach:
		</p>

		<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
				<i class="fas fa-lightbulb mr-2" aria-hidden="true"></i>AI Debugging Prompt Template
			</h4>
			<p class="text-blue-700 dark:text-blue-300 mb-3">
				"This [page/feature] isn't working as expected. Here's what I'm seeing: [describe the issue clearly]. Can you help me write a console log to identify the issue?"
			</p>
			<p class="text-sm text-blue-600 dark:text-blue-400">
				💡 Pro tip: Capture screenshots of browser console logs and share them with AI for more accurate assistance.
			</p>
		</div>

		<h3 id="automation-testing">Automation Testing (Optional)</h3>
		<p>
			For those interested in more advanced testing, automation tools can help verify your site's behavior automatically. While not essential for MVPs, they're valuable for larger projects:
		</p>

		<ul>
			<li><strong><a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">Playwright</a></strong> - Modern automation testing framework</li>
			<li><strong><a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">Cypress</a></strong> - Popular end-to-end testing tool</li>
			<li><strong><a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">Jest</a></strong> - JavaScript testing framework for unit tests</li>
		</ul>
	</section>

	<section id="security-check">
		<h2>Security Check</h2>
		<p>
			Security isn't just for big corporations – every website needs protection against common threats. Don't worry, we'll cover the essentials without getting too technical.
		</p>

		<h3 id="common-security-measures">Common Security Measures</h3>
		<p>
			Here are the fundamental security practices every website should implement:
		</p>

		<ul>
			<li><strong>CORS (Cross-Origin Resource Sharing):</strong> Controls which domains can access your resources</li>
			<li><strong>CSP (Content Security Policy):</strong> Prevents cross-site scripting attacks</li>
			<li><strong>Input Validation:</strong> Protects against malicious or invalid data</li>
			<li><strong>Rate Limiting:</strong> Guards against excessive requests and DDoS attacks</li>
			<li><strong>SQL Injection Prevention:</strong> Secures database queries</li>
		</ul>

		<!-- Placeholder for security measures image -->
		<div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
			<img src="/ai-series/security-practice.jpg" loading="lazy"
				 alt="Security best practices infographic"
				 class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto"
				 style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
		</div>

		<div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
				<i class="fas fa-robot mr-2" aria-hidden="true"></i>AI Security Review Prompt
			</h4>
			<p class="text-yellow-700 dark:text-yellow-300">
				"Review my [technology stack] solution and implement security best practices tailored for it. Focus on the most critical vulnerabilities for a [type of application] website."
			</p>
		</div>

		<h3 id="securing-sensitive-data">Securing Sensitive Data</h3>
		<p>
			One critical aspect often overlooked: <strong>never put sensitive information in your source code</strong>. This includes:
		</p>

		<ul>
			<li>API keys</li>
			<li>Database passwords</li>
			<li>Third-party service credentials</li>
			<li>Secret tokens</li>
		</ul>

		<p>
			Instead, store these in environment files (like <code>.env</code>) that are never committed to your repository. AI can help you identify and properly secure these sensitive pieces of information.
		</p>
	</section>

	<section id="accessibility-responsiveness">
		<h2>Accessibility and Responsiveness</h2>
		<p>
			Making your website accessible and responsive isn't just good practice – it's about ensuring everyone can use and enjoy your creation, regardless of their device or abilities.
		</p>

		<h3 id="accessibility-checks">Accessibility Checks</h3>
		<p>
			Accessibility ensures your website is usable by people with disabilities and provides a better experience for everyone:
		</p>

		<ul>
			<li><strong>Color contrast:</strong> Ensure text is readable in both light and dark modes</li>
			<li><strong>Keyboard navigation:</strong> All interactive elements should be accessible via keyboard</li>
			<li><strong>Screen reader compatibility:</strong> Proper heading structure and alt text for images</li>
			<li><strong>Focus indicators:</strong> Clear visual indication of focused elements</li>
		</ul>

		<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
				<i class="fas fa-tools mr-2" aria-hidden="true"></i>Recommended Tool: Accessibility Insights
			</h4>
			<p class="text-green-700 dark:text-green-300 mb-3">
				Install the <a href="https://chromewebstore.google.com/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni?hl=en" target="_blank" rel="noopener noreferrer" class="underline">Accessibility Insights browser extension</a> for a quick accessibility audit.
			</p>
			<p class="text-sm text-green-600 dark:text-green-400">
				This free tool from Microsoft provides automated and guided testing for accessibility issues.
			</p>
		</div>

		<h3 id="responsiveness-testing">Responsiveness Testing</h3>
		<p>
			Your website should work beautifully on all devices. Test across different:
		</p>

		<ul>
			<li><strong>Screen sizes:</strong> Mobile phones, tablets, desktop computers</li>
			<li><strong>Browsers:</strong> Chrome, Firefox, Safari, Edge</li>
			<li><strong>Orientations:</strong> Portrait and landscape modes on mobile devices</li>
		</ul>

		<!-- Placeholder for responsiveness testing image -->
		<div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
			<img src="/ai-series/responsiveness-testing.jpg" loading="lazy"
				 alt="Screenshot showing responsive design testing across different devices"
				 class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto"
				 style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
		</div>

    <p>In the above screenshot, you can toggle the responsiveness testing by clicking the button pointed by the red arrow, and you can also change your device size with the dropdown once it's toggled.</p>

		<div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-purple-800 dark:text-purple-200 mb-3">
				<i class="fas fa-robot mr-2" aria-hidden="true"></i>AI Accessibility Prompt
			</h4>
			<p class="text-purple-700 dark:text-purple-300">
				"Can you create a simple checklist to ensure my website is accessible and responsive? Focus on the most important items for a beginner."
			</p>
		</div>
	</section>

	<section id="performance-check">
		<h2>Performance Check</h2>
		<p>
			A fast website is crucial for good user experience. Users expect pages to load quickly, and search engines favor faster websites.
		</p>

		<h3 id="lighthouse-tool">Using Lighthouse Tool</h3>
		<p>
			Lighthouse is a free tool built into Chrome that audits your website's performance, accessibility, and SEO:
		</p>

		<ol>
			<li>Open your website in Google Chrome</li>
			<li>Press F12 to open Developer Tools, if you do not see it, <a href="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk" target="_blank">go here to install it</a>.</li>
			<li>Click on the "Lighthouse" tab</li>
			<li>Click "Analyze page load" to run the audit</li>
			<li>Review the suggestions and implement improvements</li>
		</ol>

		<!-- Placeholder for Lighthouse tool image -->
		<div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
			<img src="/ai-series/lighthouse-testing.jpg" loading="lazy"
				 alt="Screenshot of Lighthouse tool showing performance audit results"
				 class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto"
				 style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
		</div>

    <p>One tip is, when running lighthouse testing locally, you should always run it in incognito or private mode, otherwise your browser extensions may affect your testing.</p>

		<h3 id="performance-optimization">Performance Optimization</h3>
		<p>
			Common performance improvements include:
		</p>

		<ul>
			<li><strong>Image optimization:</strong> Compress images and use modern formats</li>
			<li><strong>Code splitting:</strong> Load only necessary code for each page</li>
			<li><strong>Caching:</strong> Store frequently accessed data</li>
			<li><strong>Minification:</strong> Remove unnecessary characters from code</li>
		</ul>

		<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
				<i class="fas fa-robot mr-2" aria-hidden="true"></i>AI Performance Prompt
			</h4>
			<p class="text-blue-700 dark:text-blue-300">
				"Can you review my solution and identify possible improvements for performance? Focus on the biggest impact optimizations for a [your technology stack] website."
			</p>
		</div>
	</section>

	<section id="seo">
		<h2>SEO (Search Engine Optimization)</h2>
		<p>
			SEO helps your website appear in search engine results and attract visitors. Even if you're building a personal project, good SEO practices improve discoverability.
		</p>

		<h3 id="seo-basics">SEO Basics</h3>
		<p>
			Essential SEO elements include:
		</p>

		<ul>
			<li><strong>Keywords:</strong> Include relevant keywords naturally in your content</li>
			<li><strong>URL structure:</strong> Keep URLs clear, short, and keyword-rich</li>
			<li><strong>Internal linking:</strong> Link related pages together for better navigation</li>
			<li><strong>Site speed:</strong> Fast loading times improve search rankings</li>
		</ul>

		<h3 id="meta-tags-content">Meta Tags and Content</h3>
		<p>
			Key meta elements that help search engines understand your content:
		</p>

		<ul>
			<li><strong>Title tags:</strong> Descriptive and unique for each page</li>
			<li><strong>Meta descriptions:</strong> Compelling summaries that encourage clicks</li>
			<li><strong>Alt text for images:</strong> Describes images for screen readers and search engines</li>
			<li><strong>Header structure:</strong> Proper use of H1, H2, H3 tags</li>
		</ul>

		<!-- Placeholder for SEO optimization image -->
		<div class="my-4 rounded-lg bg-gray-100 dark:bg-gray-800 p-2 text-center">
			<img src="/ai-series/SEO-metadata.jpg" loading="lazy"
				 alt="Screenshot showing SEO metadata setup in a website"
				 class="w-full h-auto object-contain rounded-lg shadow-sm max-w-4xl mx-auto"
				 style="image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;">
		</div>

		<div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-green-800 dark:text-green-200 mb-3">
				<i class="fas fa-robot mr-2" aria-hidden="true"></i>AI SEO Prompt
			</h4>
			<p class="text-green-700 dark:text-green-300">
				"Can you review my website and implement SEO improvements using best practices? Focus on the most important elements for a [type of website] targeting [your audience]."
			</p>
		</div>
	</section>

	<section id="deployment-time">
		<h2>Deployment Time</h2>
		<p>
			Now for the exciting part – making your website live! The deployment method depends on your hosting choice and technology stack.
		</p>

		<h3 id="deployment-options">Deployment Options</h3>
		<p>
			Popular deployment platforms for modern web applications:
		</p>

		<ul>
			<li><strong>Vercel:</strong> Excellent for SvelteKit, React, and Next.js applications</li>
			<li><strong>Netlify:</strong> Great for static sites and JAMstack applications</li>
			<li><strong>Railway:</strong> Good for full-stack applications with databases</li>
			<li><strong>DigitalOcean:</strong> More control with VPS hosting</li>
			<li><strong>GitHub Pages:</strong> Free hosting for static sites</li>
		</ul>

		<h3 id="deployment-checklist">Pre-Deployment Checklist</h3>
		<p>
			Before hitting the deploy button, ensure you've completed these steps:
		</p>

		<ul>
			<li>✅ All manual testing completed</li>
			<li>✅ Security measures implemented</li>
			<li>✅ Environment variables properly configured</li>
			<li>✅ Lighthouse performance score above 80</li>
			<li>✅ Accessibility audit passed</li>
			<li>✅ Responsive design tested on multiple devices</li>
			<li>✅ SEO elements properly configured</li>
			<li>✅ Error handling implemented for edge cases</li>
		</ul>

		<div class="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">
				<i class="fas fa-rocket mr-2" aria-hidden="true"></i>For SvelteKit Users
			</h4>
			<p class="text-orange-700 dark:text-orange-300 mb-3">
				SvelteKit supports multiple deployment methods (serverless, static, node). Check the <a href="https://kit.svelte.dev/docs/adapters" target="_blank" rel="noopener noreferrer" class="underline">adapter documentation</a> for your chosen platform.
			</p>
		</div>

		<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 my-6">
			<h4 class="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-3">
				<i class="fas fa-robot mr-2" aria-hidden="true"></i>AI Deployment Prompt
			</h4>
			<p class="text-blue-700 dark:text-blue-300">
				"Guide me step-by-step on how to deploy my [technology stack] app using [chosen hosting platform]. Include any specific configuration needed for my setup."
			</p>
		</div>
	</section>

	<section id="homework">
		<h2>📋 Homework</h2>

		<p>
			Here's your assignment to reinforce these concepts and prepare your website for launch:
		</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Manual Testing:</strong> Perform thorough manual testing locally (run <code>npm run dev</code>) to verify all functionality works as expected.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Security Implementation:</strong> Apply at least two recommended security practices using AI guidance. Focus on input validation and environment variable protection.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Accessibility Audit:</strong> Use the Accessibility Insights extension to perform a quick accessibility audit and fix any critical issues found.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Performance Optimization:</strong> Run Lighthouse to boost your website's performance score above 80. Implement suggested improvements.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>SEO Enhancement:</strong> Implement basic SEO improvements including proper meta tags, alt text for images, and keyword optimization.</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span><strong>Deployment Preparation:</strong> Ask AI for detailed deployment guidance on your selected platform and successfully deploy your MVP.</span>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
			<p class="mb-2 text-lg font-semibold text-green-700 dark:text-green-300">
				🚀 Bonus Challenge
			</p>
			<p class="mb-0 text-green-700 dark:text-green-300">
				Set up automated deployment from your GitHub repository so that future changes automatically deploy to your live site. This is a game-changer for ongoing development!
			</p>
		</div>

		<p>
			Once you've completed these tasks, you'll have a production-ready website that's secure, performant, and accessible. Remember, launching is just the beginning – real users will provide valuable feedback for future improvements.
		</p>

	</section>
</BaseSeriesPage>
