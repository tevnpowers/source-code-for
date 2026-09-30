<!-- example from https://github.com/edw1nzhao/svelte-p5 -->
<script lang="ts">
	import { P5Canvas } from 'svelte-p5';
	import type p5 from 'p5';
	import type { Sandwich } from './sandwich';

	interface Props {
		sandwich: Sandwich;
		width: number;
		height: number;
	}

	let { sandwich, width, height }: Props = $props();

	const sketch = (p: p5) => {
		p.setup = () => {
			p.createCanvas(width, height);
			// p.colorMode(p.HSB, 360, 100, 100, 1);
			p.background(255);
			p.noLoop();
		};

		p.draw = () => {
			let layerHeight = p.height / sandwich.ingredients.length;
			let y = p.height;

			for (let i = 0; i < sandwich.ingredients.length; i++) {
				y -= layerHeight;

				p.stroke(sandwich.ingredients[i].color);
				p.fill(sandwich.ingredients[i].color);
				p.rect(0, y, p.width, layerHeight);
			}
		};
	};
</script>

<P5Canvas style="width: 100%;" {sketch} />