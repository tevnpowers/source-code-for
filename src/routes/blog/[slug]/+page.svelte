<!-- src/routes/blog/[slug]/+page.svelte -->
<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

<article>
	<h1>{data.post.title}</h1>
	<p>By <a href={resolve(`/author/${data.post.author.id}`)}>{data.post.author.name}</a> - {data.post.author.email}</p>
	<p>{data.post.body}</p>
</article>