<script lang="ts">
	import { resolve } from "$app/paths";
	import type { ResolvedPathname } from "$app/types";

	interface RouteOption {
		label: string;
		route: ResolvedPathname;
	}

	let options: RouteOption[] = [
		{ label: 'a blog', route: resolve("/")},
		{ label: 'practice', route: resolve("/")},
		{ label: 'a crush', route: resolve("/")},
		{ label: 'a classic album', route: resolve("/")},
		{ label: 'the perfect sandwich', route: resolve("/")},
		{ label: 'a garden', route: resolve("/")},
		{ label: 'character', route: resolve("/")},
		{ label: 'a feeling', route: resolve("/")},
		{ label: 'encryption', route: resolve("/")},
		{ label: 'a library', route: resolve("/")},
	];
	function typewriter(text: string, onDone: () => void ) {
		let textNode: HTMLElement | null = document.getElementById('blog-entry');
		
		if (textNode) {
			let i = 1;
			let backspace = false;
			typeText();

			function typeText() {
				if (textNode) {
					if (!backspace && i <= text.length) {
						textNode.textContent = text.slice(0, i) + '​';
						i++;
						setTimeout(typeText, characterInterval);
					} else if (!backspace && i > text.length) {
						backspace = true;
						setTimeout(typeText, backspacePause);
					} else if (backspace && i >= 0) {
						textNode.textContent = text.slice(0, i) + '​';
						i--;
						setTimeout(typeText, characterInterval);
					} else {
						onDone();
					}
				}
			}
		}
	}

	const characterInterval = 150;
	const backspacePause = 2500;

	let currentEntry = $state(0);
	
	$effect(() => {
		typewriter(options[currentEntry].label, () => {
			setTimeout(() => {
				currentEntry = (currentEntry + 1) % options.length;
			}, 750);
		})
	})
</script>

<div class="container">
	<div class="content">
		<div class="typewriter">
			<span class="prefix">Source code for</span><span class="blog-title" id="blog-entry">&ZeroWidthSpace;</span><span class="period">.</span>
		</div>
		<div>
			<span class="suffix-sm">coming soon</span>
			<span class="suffix-lg">coming soon.</span>
		</div>
	</div>
</div>

<style>
	.container {
		flex: 1;
	}

	.content {
		margin-top: 9rem;
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
	}

	.typewriter {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
	}

	.content, .typewriter {
		gap: 0.75em;
	}

	.prefix, .blog-title, .suffix-sm, .suffix-lg, .period {
		font-family: 'JetBrains Mono Regular';
		font-weight: normal;
		font-size: 1.75em;
		text-transform: lowercase;
		text-wrap: wrap;
		color: var(--text-primary);
	}

	.suffix-lg, .period {
		display: none;
	}

	.blog-title {
		color: var(--text-secondary);
		margin-right: -12px;
		font-family: 'JetBrains Mono Bold';
		display: block;
	}

	/* Extra small devices (phones, 600px and down) */
	@media only screen and (max-width: 600px) {

	}

	/* Small devices (portrait tablets and large phones, 600px and up) */
	@media only screen and (min-width: 600px) {

	}

	/* Medium devices (landscape tablets, 768px and up) */
	@media only screen and (min-width: 768px) {
		.prefix, .blog-title, .suffix-sm, .suffix-lg, .period {
			font-size: 2.5em;
		}
	}

	/* Large devices (laptops/desktops, 992px and up) */
	@media only screen and (min-width: 992px) {
		.content {
			flex-direction: column;
			margin-top: 12.5rem;
		}

		.typewriter {
			flex-direction: row;
		}

		.suffix-sm {
			display: none;
		}

		.suffix-lg, .period {
			display: block;
		}
	}

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
		.prefix, .blog-title, .suffix-sm, .suffix-lg, .period {
			font-size: 3em;
		}
	}
</style>