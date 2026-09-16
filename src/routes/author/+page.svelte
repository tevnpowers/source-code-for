<!-- src/routes/author/+page.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<h1>Authors</h1>
	<ul>
		{#each data.authors as author (author.id)}
			<li><a href={resolve(`/author/${author.id}`)}>{author.name} - {author.email}</a></li>
		{/each}
	</ul>

	<form method="POST" action="?/create">
		<label for="fname">First name:</label><br>
		<input type="text" id="fname" name="fname" placeholder="John"><br>
		<label for="lname">Last name:</label><br>
		<input type="text" id="lname" name="lname" placeholder="Doe"><br><br>
		<label for="email">Email:</label><br>
		<input type="email" id="email" name="email" placeholder="your@email.com"><br><br>
		<input type="submit" value="Submit">
	</form>

</article>