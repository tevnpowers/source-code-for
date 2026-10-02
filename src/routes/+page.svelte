<script lang="ts">
	import { resolve } from "$app/paths";
	import ArrowIcon from "$lib/icons/ArrowIcon.svelte";

	let route = $state(resolve("/blog/the-perfect-sandwich"));
</script>

<div class="container">
	<div class="content">
		<label for="blog-select">Source code for</label>
		<select name="blog-entries" id="blog-select" bind:value={route}>
			<option value={resolve("/blog/the-perfect-sandwich")}>the perfect sandwich</option>
		</select>
		<a href={route} class="button" aria-label="go to ___" title="go to ___">
			<ArrowIcon width={48} height={48}/>
		</a>
	</div>
</div>

<style>
	.container {
		flex: 1;
	}

	.content {
		margin-top: 200px;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 12px;
	}

	label, select {
		font-family: 'JetBrains Mono Regular';
		font-weight: normal;
		text-transform: lowercase;
	}

	label {
		font-size: 28px;
		color: var(--text-primary);
	}

	select {
		font-size: 22px;
		color: var(--text-secondary);
		background-color: transparent;
		border: 2px solid var(--background-reverse);
		padding: 2px 8px;
		border-radius: 8px;
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
		label {
			font-size: 30px;
		}

		.content {
			flex-direction: row;
			align-items: center;
			gap: 24px;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		select {
			font-size: 28px;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {

	}
</style>