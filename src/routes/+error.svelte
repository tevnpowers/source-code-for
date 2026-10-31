<script lang="ts">
	import { page } from '$app/state';
	import computer_icon from '$lib/assets/computer-icon.png';

	function getErrorMessage(status: number, defaultMessage: string | undefined): string {
		if (status == 404) {
			return `Sorry, the page you are looking for does not exist.`;
		} else {
			return `Error: ${defaultMessage}`;
		}
	}
</script>

<div class="container">
	<!-- TODO: Replace with randomly selected p5 sketch from gallery -->
	<!-- TODO: Use SVG icon: '$lib/icons/3dComputerIcon.svelte' -->
	<img alt="Computer icon " src={computer_icon} />

	<!-- TODO: Place attribution in website credits -->
	<!-- <a href="https://www.flaticon.com/free-icons/3d-computer" title="3d computer icons">3d computer icons created by Magnific - Flaticon</a> -->

	<div class="error-text">
		<h1>{page.status}{page.error ?  ':' : ''}{page.error?.message}</h1>
		<h2>{getErrorMessage(page.status, page.error?.message)}</h2>
	</div>
</div>

<style>
	.container {
		width: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	h1, h2 {
		margin: 0;
		font-weight: normal;
		text-wrap: wrap;
		color: var(--text-primary);
		text-align: center;
	}

	h1 {
		font-family: 'JetBrains Mono Bold';
		font-size: 36px;
	}

	h2 {
		font-family: 'JetBrains Mono Regular';
		font-size: 18;
	}

	img {
		height: 128px;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {

	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {

	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.container {
			margin-top: 128px;
			display: flex;
			flex-direction: row;
			align-items: start;
			justify-content: start;
			gap: 64px;
		}

		h1 {
			margin-top: -24px;
			font-size: 56px;
		}

		h2 {
			font-size: 24px;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		h1 {
			font-size: 64px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {

	}

	/* Extra extra large devices */
	@media only screen and (min-width: 1400px) {
		h1 {
			font-size: 96px;
		}

		h2 {
			font-size: 28px;
		}

		img {
			height: 160px;
		}
	}
</style>