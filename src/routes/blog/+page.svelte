<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();


	console.log(data);
</script>

<article>
	<h1>Blogs</h1>
	{#each data.authors as author (author.id)}
		<p>{author.name} - {author.email}</p>
		<ol>
			{#each data.posts as post (post.id)}
				{#if post.authorId == author.id}
					<li><a href={resolve(`/blog/${post.slug}`)}>{post.slug}</a></li>
				{/if}
			{/each}
		</ol>
	{/each}
</article>