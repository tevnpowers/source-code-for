<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
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

<div class="app dark-mode">
	<!-- Header appears on every route -->
	<header>
		<!-- Navigation menu -->
		<nav>
			<a href={resolve('/')}>Home</a>
			<a href={resolve('/author')}>Authors</a>
			<a href={resolve('/blog')}>Blog</a>
		</nav>

		<!-- Dark/light mode switch -->
		<div class="toggle-container">
			<label class="switch">
				<input type="checkbox">
				<span class="slider round"></span>
			</label>
			<span class="label-text">Dark theme</span>
		</div>
	</header>

	<!-- Dynamic content that changers per route -->
	 <main>
		{@render children()}
	 </main>

	<!-- Footer appears on every route -->
	<footer>
		<div class="path">/home</div>
		<div class="newsletter-container">
			<script async src="https://subscribe-forms.beehiiv.com/v3/loader.js" data-beehiiv-form="6dab7cfe-cdb8-4a12-9dfd-88c35e03dbc0"></script>
		</div>
	</footer>
</div>

<style>
	.app {
		margin: 0;
		padding: 0 15%;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	main {
		width: 100%;
		flex: 1;
		display: flex;
		align-items: stretch;
		justify-content: center;
	}

	header, footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	header {
		margin-top: 4%;
		font-family: 'JetBrains Mono Semibold';
	}
	
	nav {
		display: flex;
		flex-direction: row;
		gap: 128px;
	}

	nav a {
		font-size: 22px;
		text-decoration: none;
		text-transform: lowercase;
	}

	.label-text {
		font-size: 18px;
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
		background-color: var(--black);
		border: 2px solid var(--white);
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
		background-color: var(--white);
		-webkit-transition: .4s;
		transition: .4s;
	}

	input:checked + .slider {
		background-color: #2196F3;
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #2196F3;
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

	footer {
		margin-bottom: 4%;
		padding: 0;
		height: fit-content;

		font-family: 'JetBrains Mono Medium';
	}

	.path {
		font-size: 22px;
	}

	.newsletter-container {
		min-width: 400px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	/* Dark Mode */
	.dark-mode {
		background-color: var(--black);
	}

	.dark-mode nav a, .dark-mode .label-text {
		color: var(--white);
	}

	.dark-mode footer {
		color: var(--green);
	}

	/* Light Mode */


	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {

	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {

	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {

	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {

	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {

	}
</style>