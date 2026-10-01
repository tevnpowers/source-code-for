<!-- example from https://github.com/edw1nzhao/svelte-p5 -->
<script lang="ts">
	import { P5Canvas } from 'svelte-p5';
	import type p5 from 'p5';
	import { Bread, Ingredient } from './sandwich';

	interface Props {
		width: number;
		height: number;
		bridge: { state: { ingredients: (Bread | Ingredient)[]; };  };
	}

	let { width, height, bridge }: Props = $props();

	const sketch = (p: p5) => {
		p.setup = () => {
			p.createCanvas(width, height);
			// p.colorMode(p.HSB, 360, 100, 100, 1);
			p.background(255);
			// p.noLoop();
		};

		p.draw = () => {
			let layerHeight = p.height / bridge.state.ingredients.length;
			let y = p.height;

			p.background(255);
			for (let i = 0; i < bridge.state.ingredients.length; i++) {
				y -= layerHeight;

				p.stroke(bridge.state.ingredients[i].color);
				p.fill(bridge.state.ingredients[i].color);
				p.rect(0, y, p.width, layerHeight);
			}
		};
	};
</script>

<P5Canvas style="width: 100%;" {sketch} />