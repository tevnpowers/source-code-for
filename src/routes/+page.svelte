<script lang="ts">
	import { resolve } from "$app/paths";
</script>

<div class="container">
	<div class="content">
		<label for="blog-select">Source code for</label>
		<select name="blog-entries" id="blog-select">
			<option value="a-blog">a blog</option>
			<option value="a-feeling">a feeling</option>
			<option value="the-perfect-sandwich">the perfect sandwich</option>
		</select>
		<a href={resolve('/')} class="button" aria-label="go to ___" title="go to ___">
			<svg width="48px" height="48px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="var(--white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
		color: var(--white);
	}

	select {
		font-size: 28px;
		color: var(--green);
		background-color: var(--black);
		border: 2px solid var(--white);
		padding: 2px 8px;
		border-radius: 8px;
	}

	a.button {
		padding: 1px 6px;
		height: 40px;
		width: 40px;
		border-radius: 50px;
		border: 2px solid var(--white);
		background-color: transparent;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>