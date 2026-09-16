<script lang="ts">
	import { resolve } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a href={resolve('/')}>Home</a>
<a href={resolve('/author')}>Authors</a>
<a href={resolve('/blog')}>Blogs</a>
{@render children()}
