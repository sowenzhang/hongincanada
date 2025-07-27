<script>
	import BaseSeriesPage from '$lib/components/BaseSeriesPage.svelte';
	import { getArticleData, getNavigationData } from '$lib/data/seriesData';

	// Get centralized data for Part 7
	const articleData = getArticleData(7);
	const navigation = getNavigationData(7);

	// Table of contents
	const tableOfContents = [
		{ id: 'intro', title: 'Introduction', level: 1 },
		{ id: 'what-is-database', title: 'What is a Database?', level: 1 },
		{ id: 'postgresql-setup', title: 'Setting Up PostgreSQL', level: 1 },
		{ id: 'install-postgresql', title: 'How to Install PostgreSQL', level: 2 },
		{ id: 'creating-user-table', title: 'Creating a User Table', level: 1 },
		{ id: 'building-authentication', title: 'Building Authentication Step-by-Step', level: 1 },
		{ id: 'signup-page', title: 'Step 1: Sign-Up Page', level: 2 },
		{ id: 'login-page', title: 'Step 2: Login Page', level: 2 },
		{ id: 'password-recovery', title: 'Step 3: Password Recovery Page', level: 2 },
		{ id: 'email-api-integration', title: 'Connecting Email Sending with an External API', level: 1 },
		{ id: 'brevo-setup', title: 'Setting Up Brevo API', level: 2 },
		{ id: 'ai-integration', title: 'Using AI to Complete Email Integration', level: 2 },
		{ id: 'best-practices', title: 'Security Best Practices', level: 1 },
		{ id: 'homework', title: 'Homework', level: 1 },
		{ id: 'next-steps', title: "What's Next", level: 1 }
	];
</script>

<BaseSeriesPage {articleData} {navigation} {tableOfContents}>
	<!-- Custom header content -->
	<svelte:fragment slot="header">
		<h1
			class="mb-6 text-center text-4xl font-bold text-gray-900 transition-colors md:text-5xl dark:text-white"
		>
			Adding Advanced Features with AI
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
			Now that your website is functioning and your code is neatly structured, it's time to level up by adding advanced features using AI. We'll walk through databases, authentication, and email functionality step by step.
		</p>
	</svelte:fragment>

	<section id="intro">
		<h2>🚀 Ready to Level Up?</h2>

		<p>
			Congratulations! You've built the foundation of your website and learned how to work effectively with AI for coding. Now it's time to add the features that will make your site truly functional and professional.
		</p>

		<p>In this part, we'll cover:</p>

		<ul>
			<li><strong>Setting up a database</strong> - Your website's memory bank</li>
			<li><strong>Creating a user table</strong> - Managing user accounts</li>
			<li><strong>Implementing authentication</strong> - Secure login and signup</li>
			<li><strong>Adding password recovery</strong> - Using an email API for user support</li>
		</ul>

		<div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-2 font-medium text-blue-800 dark:text-blue-200">
				<i class="fas fa-lightbulb mr-2" aria-hidden="true"></i>Remember Our Approach
			</p>
			<p class="text-blue-700 dark:text-blue-300">
				We'll continue using AI assistance throughout this process. The key is breaking down complex features into clear, manageable steps that AI can help us implement effectively.
			</p>
		</div>
	</section>

	<section id="what-is-database">
		<h2>📊 What is a Database?</h2>

		<p>
			Think of a database as a digital notebook that stores all your website's important information neatly organized into tables. Each table is like a spreadsheet with rows and columns.
		</p>

		<div class="not-prose my-6 space-y-4">
			<div class="flex items-start space-x-4">
				<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
					<i class="fas fa-table" aria-hidden="true"></i>
				</div>
				<div>
					<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Table</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Like a sheet in Excel where you store related information (e.g., all your users).
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					<i class="fas fa-columns" aria-hidden="true"></i>
				</div>
				<div>
					<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Column</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Like headings on your sheet (e.g., username, password, email).
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
					<i class="fas fa-grip-lines-vertical" aria-hidden="true"></i>
				</div>
				<div>
					<h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Row</h4>
					<p class="text-gray-700 dark:text-gray-300">
						Each individual record under the columns (each user's data).
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="postgresql-setup">
		<h2>🧰 Setting Up PostgreSQL</h2>

		<p>
			PostgreSQL is a reliable and free database system that's perfect for our needs. It's what many professional websites use, and it integrates well with modern web applications.
		</p>

		<h3 id="install-postgresql">How to Install PostgreSQL</h3>

		<p>Follow these easy steps:</p>

		<div class="not-prose my-6 space-y-4">
			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
					1
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Go to <a href="https://www.postgresql.org/download/" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 underline">PostgreSQL Download</a> and choose your operating system.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					2
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Download and follow the installation guide.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
					3
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						<strong>Set a password during installation</strong> (save this password somewhere secure!).
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
					4
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Install pgAdmin (an easy-to-use graphical tool that comes with PostgreSQL).
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-white font-bold">
					5
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Open pgAdmin and create a new database called <code>minibreaks_db</code> (or whatever fits your project).
					</p>
				</div>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
			<p class="mb-2 font-medium text-amber-800 dark:text-amber-200">
				<i class="fas fa-exclamation-triangle mr-2" aria-hidden="true"></i>Important Note
			</p>
			<p class="text-amber-700 dark:text-amber-300">
				Keep your database password safe! You'll need it to connect your website to the database. Consider using a password manager or writing it down securely.
			</p>
		</div>
	</section>

	<section id="creating-user-table">
		<h2>🗃️ Creating a User Table</h2>

		<p>
			We'll use AI to help us easily create the table. Here's how to ask clearly for what we need:
		</p>

		<div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
			<div class="mb-4 flex items-center">
				<i class="fas fa-robot mr-3 text-blue-500 text-2xl" aria-hidden="true"></i>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Example Prompt (for non-engineers):</h4>
			</div>
			<div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-blue-500">
				<p class="text-gray-700 dark:text-gray-300 italic">
					"Create SQL commands to set up a table named 'users'. Each user needs:
				</p>
				<ul class="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
					<li>An automatically assigned ID number</li>
					<li>A username that must be unique</li>
					<li>A password (encrypted)</li>
					<li>An email (optional)</li>
					<li>A timestamp to know when the user joined"</li>
				</ul>
			</div>
		</div>

		<p>
			ChatGPT will give you clear, simple SQL commands you can run directly in pgAdmin.
		</p>

		<p>
			Save these commands in your project as <code>db/schema.sql</code> with a simple note at the top:
		</p>

		<div class="not-prose my-6 rounded-lg bg-gray-900 p-4">
			<pre class="text-green-400"><code>-- user table for the website
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>
		</div>

		<div class="not-prose my-8 border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
			<p class="mb-2 font-medium text-green-800 dark:text-green-200">
				<i class="fas fa-check-circle mr-2" aria-hidden="true"></i>Pro Tip
			</p>
			<p class="text-green-700 dark:text-green-300">
				Always store password hashes, never plain text passwords! AI will help you implement proper password hashing when we build the authentication logic.
			</p>
		</div>
	</section>

	<section id="building-authentication">
		<h2>🔑 Building Authentication Step-by-Step</h2>

		<p>
			To help AI generate accurate results, let's break down the authentication feature clearly into multiple prompts. This approach ensures we get focused, high-quality code for each piece.
		</p>

		<h3 id="signup-page">Step 1: Sign-Up Page</h3>

		<div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
			<div class="mb-4 flex items-center">
				<i class="fas fa-user-plus mr-3 text-green-500 text-2xl" aria-hidden="true"></i>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Prompt Example:</h4>
			</div>
			<div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-green-500">
				<p class="text-gray-700 dark:text-gray-300 italic">
					"Create a simple sign-up webpage that asks users to create a username and password. Include an optional field for users to enter their email, but don't make this mandatory. Use modern styling and include proper form validation."
				</p>
			</div>
		</div>

		<h3 id="login-page">Step 2: Login Page</h3>

		<div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
			<div class="mb-4 flex items-center">
				<i class="fas fa-sign-in-alt mr-3 text-blue-500 text-2xl" aria-hidden="true"></i>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Prompt Example:</h4>
			</div>
			<div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-blue-500">
				<p class="text-gray-700 dark:text-gray-300 italic">
					"Create a basic login page where users can enter their username and password to log in to their account. Include a 'Remember me' checkbox and a link to password recovery."
				</p>
			</div>
		</div>

		<h3 id="password-recovery">Step 3: Password Recovery Page (Without Email Sending)</h3>

		<div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
			<div class="mb-4 flex items-center">
				<i class="fas fa-key mr-3 text-purple-500 text-2xl" aria-hidden="true"></i>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Prompt Example:</h4>
			</div>
			<div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-purple-500">
				<p class="text-gray-700 dark:text-gray-300 italic">
					"Create a page that lets users recover their password by entering their email. For now, just create the form and logic, but leave the email sending functionality as a placeholder that I can complete later."
				</p>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:bg-blue-900/20">
			<p class="mb-2 font-medium text-blue-800 dark:text-blue-200">
				<i class="fas fa-lightbulb mr-2" aria-hidden="true"></i>Why Break It Down?
			</p>
			<p class="text-blue-700 dark:text-blue-300">
				By splitting authentication into separate prompts, you get cleaner, more focused code. AI can concentrate on one task at a time, resulting in better quality and easier debugging.
			</p>
		</div>
	</section>

	<section id="email-api-integration">
		<h2>🔐 Connecting Email Sending with an External API</h2>

		<p>
			We'll use the Brevo API to enable our website to send emails. Brevo (formerly Sendinblue) offers a reliable, free tier that's perfect for getting started.
		</p>

		<h3 id="brevo-setup">Setting Up Brevo API</h3>

		<div class="not-prose my-6 space-y-4">
			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white font-bold">
					1
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Visit <a href="https://developers.brevo.com/docs/send-a-transactional-email" target="_blank" rel="noopener" class="text-blue-600 dark:text-blue-400 underline">Brevo API documentation</a>.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold">
					2
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Sign up for a free account and get an API key from your dashboard.
					</p>
				</div>
			</div>

			<div class="flex items-start space-x-4">
				<div class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-500 text-white font-bold">
					3
				</div>
				<div>
					<p class="text-gray-700 dark:text-gray-300">
						Keep your API key secure - you'll need it for the next step.
					</p>
				</div>
			</div>
		</div>

		<h3 id="ai-integration">Using AI to Complete Email Integration</h3>

		<p>
			Now comes the magic moment! Prompt your AI coding assistant clearly in your code editor (e.g., GitHub Copilot, Cursor):
		</p>

		<div class="not-prose my-8 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
			<div class="mb-4 flex items-center">
				<i class="fas fa-envelope mr-3 text-red-500 text-2xl" aria-hidden="true"></i>
				<h4 class="text-lg font-semibold text-gray-900 dark:text-white">Email Integration Prompt:</h4>
			</div>
			<div class="bg-white dark:bg-gray-900 p-4 rounded border-l-4 border-red-500">
				<p class="text-gray-700 dark:text-gray-300 italic">
					"Complete the password recovery feature by using Brevo transactional email API (https://developers.brevo.com/docs/send-a-transactional-email). Send a password reset link to the user's email address when they request it."
				</p>
			</div>
		</div>

		<p>
			Watch the AI assistant complete the magic! The AI agent should be able to fetch the web page and understand how to use the API.
		</p>

		<div class="not-prose my-8 border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
			<p class="mb-2 font-medium text-amber-800 dark:text-amber-200">
				<i class="fas fa-exclamation-triangle mr-2" aria-hidden="true"></i>Important Note
			</p>
			<p class="text-amber-700 dark:text-amber-300">
				It's important to explicitly call out to use the API, otherwise AI may pull a different framework, which is usually a wrapper of the API. In my experience, AI pulled a deprecated library for email sending, and it didn't work. 😫
			</p>
		</div>

		<div class="not-prose my-8 border-l-4 border-green-500 bg-green-50 p-6 dark:bg-green-900/20">
			<p class="mb-2 font-medium text-green-800 dark:text-green-200">
				<i class="fas fa-magic mr-2" aria-hidden="true"></i>AI Magic in Action
			</p>
			<p class="text-green-700 dark:text-green-300">
				This is where AI truly shines! It can read the API documentation, understand the required parameters, and generate the exact code you need to integrate email functionality. No need to manually parse through documentation or figure out the API calls yourself.
			</p>
		</div>
	</section>

	<section id="best-practices">
		<h2>🛡️ Security Best Practices</h2>

		<p>
			When building authentication features, security should always be a priority. Here are the essential practices to implement:
		</p>

		<div class="my-8 space-y-6">
			<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					<i class="fas fa-lock mr-3 text-red-500" aria-hidden="true"></i>
					Password Security
				</h4>
				<ul class="space-y-2 text-gray-700 dark:text-gray-300">
					<li>Always hash passwords before storing them</li>
					<li>Never store passwords in plain text</li>
					<li>Enforce strong password requirements (but not crazy to annoy users)</li>
				</ul>
			</div>

			<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					<i class="fas fa-shield-alt mr-3 text-blue-500" aria-hidden="true"></i>
					API Key Security
				</h4>
				<ul class="space-y-2 text-gray-700 dark:text-gray-300">
					<li>Store API keys in environment variables</li>
					<li>Never commit API keys to version control</li>
					<li>Use different keys for development and production</li>
					<li>Regularly rotate your API keys</li>
				</ul>
			</div>

			<div class="rounded-lg border border-gray-200 p-6 dark:border-gray-700 dark:bg-gray-800">
				<h4 class="mb-3 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
					<i class="fas fa-user-check mr-3 text-green-500" aria-hidden="true"></i>
					User Input Validation
				</h4>
				<ul class="space-y-2 text-gray-700 dark:text-gray-300">
					<li>Validate all user inputs on both client and server</li>
					<li>Sanitize data before database queries</li>
					<li>Use parameterized queries to prevent SQL injection</li>
					<li>Implement rate limiting for login attempts (we will discuss more in next part)</li>
				</ul>
			</div>
		</div>

	</section>

	<section id="homework">
		<h2>📓 Homework</h2>

		<p>
			Time to put everything into practice! Complete these tasks before moving to the next part:
		</p>

		<div class="my-6 space-y-4">
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Install PostgreSQL, create your database, and user table using the SQL commands generated by AI</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Generate your signup and login pages using clear AI prompts</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Create the password recovery page without the email-sending logic</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Sign up for Brevo, obtain your API key, and store it securely</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Use AI to connect email sending functionality to your password recovery</span>
			</div>
			<div class="flex items-start space-x-3">
				<input type="checkbox" class="mt-1 h-5 w-5 rounded text-blue-600" disabled />
				<span>Document your prompts and AI outputs clearly to track your progress!</span>
			</div>
		</div>

		<div class="not-prose my-8 border-l-4 border-emerald-500 bg-emerald-50 p-6 dark:bg-emerald-900/20">
			<p class="mb-2 font-medium text-emerald-800 dark:text-emerald-200">
				<i class="fas fa-lightbulb mr-2" aria-hidden="true"></i>Documentation Tip
			</p>
			<p class="text-emerald-700 dark:text-emerald-300">
				Keep a simple text file or document where you record the prompts you used and what AI generated. This becomes invaluable when you need to make changes or debug issues later. It's like having a conversation history with your AI assistant!
			</p>
		</div>
	</section>

	<section id="next-steps">
		<h2>🎯 What's Next</h2>

		<p>
			Congratulations! You've just added some seriously advanced functionality to your website. In Part 8, we'll prepare your creation for the real world by focusing on testing and deployment preparation.
		</p>

		<p>We'll explore:</p>

		<ul>
			<li>Essential questions to ask before going live</li>
			<li>Key areas to test and validate</li>
			<li>What to pay attention to before deployment</li>
			<li>Different deployment environments and strategies</li>
		</ul>

		<div class="not-prose my-8 border-l-4 border-purple-500 bg-purple-50 p-6 dark:bg-purple-900/20">
			<p class="mb-0 text-gray-700 dark:text-gray-300">
				<strong>🚀 Coming up:</strong> We'll explore how to ensure your website is ready for real users, including performance considerations, security checks, and deployment best practices that will make your launch smooth and successful.
			</p>
		</div>
	</section>
</BaseSeriesPage>
