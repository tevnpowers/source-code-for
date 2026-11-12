<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import MailIcon from '$lib/icons/MailIcon.svelte';
	import GitHubLogo from '$lib/icons/GitHubLogo.svelte';
	import '../styles/fonts.css'
	import { onMount } from 'svelte';

	let { children } = $props();

	const LIGHT_THEME_TEXT = 'light';
	const DARK_THEME_TEXT = 'dark';

	const LOCAL_STORAGE_THEME_KEY = 'scf_blog::theme';

	onMount(() => {
		lightTheme = getInitialLightTheme();
	});

	function getInitialLightTheme(): boolean {
		return !document.documentElement.classList.contains(DARK_THEME_TEXT);
	}

	function getThemeText(light: boolean): string {
		return light ? LIGHT_THEME_TEXT : DARK_THEME_TEXT; 
	}

	let lightTheme = $state(true);

	$effect(() => {
		const html = document.querySelector('html');

		if (html) {
			let theme_text = getThemeText(lightTheme);
			// html.style.setProperty("color-scheme", theme_text);
			document.documentElement.classList.remove(LIGHT_THEME_TEXT, DARK_THEME_TEXT);
			document.documentElement.classList.add(theme_text);
			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme_text);
		}
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta property="og:url" content="https://sourcecodefor.blog/"/>
	<meta property="og:title" content="Source Code For"/>
	<meta property="og:description" content="Technically a technical blog"/>
	<meta property="og:image:alt" content="Source Code For icon"/>
	<meta name="description" content="Technically a technical blog">
	<title>Source Code For</title>
	<script lang="ts">
		console.log('hello layout head');
		const theme = localStorage.getItem('scf_blog::theme') || '';
		console.log('theme: ', theme);

		if (theme == 'light' || theme == 'dark') {
			document.documentElement.classList.add(theme);
		}
	</script>
	<style>
		.light body {
			color-scheme: light;
		}

		.dark body {
			color-scheme: dark;
		}
	</style>
</svelte:head>

<div class="app">
	<!-- Header appears on every route -->
	<header>
		<!-- Navigation menu -->
		<nav>
			<a href={resolve('/')}>Home</a>
		</nav>

		<!-- Dark/light mode switch -->
		<div class="toggle-container">
			<label class="switch">
				<input type="checkbox" bind:checked={lightTheme}>
				<span class="slider round"></span>
			</label>
			<span class="label-text">{lightTheme ? "Light" : "Dark"} theme</span>
		</div>
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
					<GitHubLogo height={24} width={24} />
				</a>
				<a href="mailto:hi@tev.dev" class="button" aria-label="send email" title="send email">
					<MailIcon height={28} width={28} />
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
					<GitHubLogo height={32} width={32} />
				</a>
				<a href="mailto:hi@tev.dev" class="button" aria-label="send email" title="send email">
					<MailIcon height={36} width={36} />
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
		margin-top: 4%;
		
		display: flex;
		align-items: start;
		flex-direction: row;
		justify-content: space-between;
		font-family: 'JetBrains Mono Semibold';
	}

	.footer-sm {
		width: 100%;
		margin: 8% 0;
		padding: 0;
		height: fit-content;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		gap: 12px;

		color: var(--text-secondary);
		font-family: 'JetBrains Mono Medium';
	}

	.footer-lg {
		width: 100%;
		margin: 8% 0;
		padding: 0;
		display: none;

		color: var(--text-secondary);
		font-family: 'JetBrains Mono Medium';
	}

	nav {
		display: flex;
		flex-direction: row;
		gap: 128px;
	}

	nav a {
		font-size: 22px;
		color: var(--text-primary);
		text-decoration: none;
		text-transform: lowercase;
		cursor: pointer;
	}

	.label-text {
		font-size: 18px;
		color: var(--text-primary);
		text-transform: lowercase;
	}

	nav a:hover {
		text-decoration: underline 2px;
	}

	/* Theme toggle */
	.toggle-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}

	/* The switch - the box around the slider */
	.switch {
		position: relative;
		display: inline-block;
		width: 48px;
		height: 28px;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* The slider */
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: transparent;
		border: 2px solid var(--text-primary);
		-webkit-transition: .4s;
		transition: .4s;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 16px;
		width: 16px;
		left: 4px;
		bottom: 4px;
		background-color: var(--background-reverse);
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}

	/* Rounded sliders */
	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}

	.path {
		font-size: 18px;
	}

	.contact-container {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
	}

	.newsletter-container {
		max-height: 36px;
		min-width: 325px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}

	.social-container {
		display: flex;
		flex-direction: row;
		gap: 12px;
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
			gap: 12px;
			margin: 4% 0;
		}

		.contact-container {
			width: fit-content;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			gap: 12px;
		}

		.path {
			font-size: 22px;
		}

		.newsletter-container {
			min-width: 350px;
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

		nav a {
			font-size: 28px;
		}

		.path {
			font-size: 24px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {

	}
</style>