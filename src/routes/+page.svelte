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
		flex-direction: row;
		align-items: center;
		justify-content: start;
		gap: 24px;
	}

	label, select {
		font-family: 'JetBrains Mono Regular';
		font-weight: normal;
		text-transform: lowercase;
	}

	label {
		font-size: 30px;
		color: var(--text-primary);
	}

	select {
		font-size: 28px;
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
</style>