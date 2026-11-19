<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import GitHubLogo from '$lib/icons/GitHubLogo.svelte';
	import '../styles/fonts.css'

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:url" content="https://sourcecodefor.blog/"/>
	<meta property="og:title" content="Source Code For"/>
	<meta property="og:description" content="Technically a technical blog"/>
	<meta property="og:image:alt" content="Source Code For icon"/>
	<meta name="description" content="Technically a technical blog">
	<title>Source Code For</title>
</svelte:head>

<div class="app">
	<!-- Header appears on every route -->
	<header>
		<!-- Navigation menu -->
		<nav>
			<a href={resolve('/')}>01. Home</a>
		</nav>
	</header>

	<!-- Dynamic content that changers per route -->
	 <main>
		{@render children()}
	 </main>

	<!-- Footer appears on every route -->
	<footer class="footer-sm">
		<!-- TODO: Dynamically generate path -->
		<div class="contact-container">
			<div class="path">/home</div>
			<div class="social-container">
				<a href="https://github.com/tevnpowers/source-code-for" target="_blank" rel="noopener noreferrer" class="button" aria-label="send email" title="send email">
					<GitHubLogo height={22} width={22} />
				</a>
				<a href="mailto:hi@tev.dev" class="button" aria-label="send email" title="send email">
					<MailIcon height={24} width={24} />
				</a>
			</div>
		</div>
		<div class="newsletter-container">
			<script async src="https://subscribe-forms.beehiiv.com/v3/loader.js" data-beehiiv-form="6dab7cfe-cdb8-4a12-9dfd-88c35e03dbc0"></script>
		</div>
	</footer>

	<!-- Footer appears on every route -->
	<footer class="footer-lg">
		<!-- TODO: Dynamically generate path -->
		<div class="path">/home</div>
		<div class="contact-container">
			<div class="newsletter-container">
				<script async src="https://subscribe-forms.beehiiv.com/v3/loader.js" data-beehiiv-form="6dab7cfe-cdb8-4a12-9dfd-88c35e03dbc0"></script>
			</div>
			<div class="social-container">
				<a href="https://github.com/tevnpowers/source-code-for" target="_blank" rel="noopener noreferrer" class="button" aria-label="send email" title="send email">
					<GitHubLogo height={26} width={26} />
				</a>
				<a href="mailto:hi@tev.dev" class="button" aria-label="send email" title="send email">
					<MailIcon height={30} width={30}/>
				</a>
			</div>
		</div>
	</footer>
</div>

<style>
	.app {
		margin: 0;
		padding: 0 8%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;

		background-color: var(--background);
	}

	main {
		width: 100%;
		flex: 1;
		display: flex;
		align-items: stretch;
		justify-content: center;
	}

	footer {
		overflow: hidden;
	}

	header {
		width: 100%;
		margin-top: 1.5rem;
		
		display: flex;
		align-items: start;
		flex-direction: row;
		justify-content: space-between;
		font-family: 'JetBrains Mono Semibold';
	}

	.footer-sm {
		width: 100%;
		margin: 1.25rem 0;
		padding: 0;
		height: fit-content;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 0.75em;

		font-family: 'JetBrains Mono Medium';
	}

	.footer-lg {
		width: 100%;
		padding: 0;
		display: none;

		font-family: 'JetBrains Mono Medium';
	}

	nav {
		display: flex;
		flex-direction: row;
	}

	nav a {
		font-size: 1.35em;
		color: var(--text-primary);
		text-decoration: none;
		text-transform: capitalize;
		cursor: pointer;
	}

	nav a:hover {
		color: var(--text-secondary);
		text-decoration: underline 2px;
	}


	.path {
		font-size: 1em;
		color: var(--text-secondary);
	}

	.contact-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.newsletter-container {
		max-height: 1.75em;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.social-container {
		display: flex;
		flex-direction: row;
		gap: 0.65em;
	}

	a.button {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {

	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {

	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.footer-sm {
			display: none;
		}

		.footer-lg {
			display: flex;
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
			margin: 1.5rem 0;
		}

		.contact-container {
			width: fit-content;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			gap: 0.75em;
		}

		.path {
			font-size: 1.2em;
		}

		.newsletter-container {
			min-width: 24em;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.app {
			padding: 0 15%;
		}

		header {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		nav a, .path {
			font-size: 1.35em;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {

	}
</style>