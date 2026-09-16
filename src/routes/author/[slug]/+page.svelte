<!-- src/routes/author/[slug]/+page.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();

	console.log(data);
</script>

<article>
	<h1>{data.author.name}</h1>
	<ol>
		{#each data.author.posts as post (post.id)}
			<li><a href={resolve(`/blog/${post.slug}`)}>{post.title} - {post.createdAt}</a></li>
		{/each}
	</ol>
</article>