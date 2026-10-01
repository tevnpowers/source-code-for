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

				//p.stroke(bridge.state.ingredients[i].color);
				// p.fill(bridge.state.ingredients[i].color);
				p.noStroke();
				// p.rect(0, y, p.width, layerHeight);
				drawShape(i, y, layerHeight, bridge.state.ingredients[i].color, bridge.state.ingredients[i].type);
			}
		};

		function gradient(x1: number, y1: number, x2: number, y2: number, col1: p5.Color, col2: p5.Color) {
			let grad = p.drawingContext.createLinearGradient(x1, y1, x2, y2);
			grad.addColorStop(0, col1);
			grad.addColorStop(1, col2);
			p.drawingContext.fillStyle = grad;
		}

		function drawShape(index: number, y: number, layerHeight: number, color: string, type: string) {
			// Color
			gradient(0, y, 0, y + layerHeight * 2, p.color(color), p.color(0,0,0));

			// Start drawing the shape.
			p.beginShape();

			// Add vertices.
			if (type == 'meat') {
				// Set spline tightness using splineProperties
				p.splineProperties({
					tightness: 0
				});
				p.splineVertex(0, y);
				p.splineVertex(width, y);
				p.splineVertex(width, y + layerHeight);
				p.splineVertex(0, y + layerHeight);
			} else {
				p.vertex(0, y);
				p.vertex(width, y);
				p.vertex(width, y + layerHeight);
			
				let flip = index % 2 == 0;
				if (type == 'bun' || type == 'sliced') {
					for (let x = width; x >= 0; x--) {
						p.vertex(x, y + layerHeight + getSpreadCurve(x, layerHeight / 5, flip));
					}
				} else if (type == 'condiment') {
					for (let x = width; x >= 0; x--) {
						p.vertex(x, y + layerHeight + getCondimentCurve(x, layerHeight / 5, flip));
					}
				} else if (type == 'spread') {
					for (let x = width; x >= 0; x--) {
						p.vertex(x, y + layerHeight + getSpreadCurve(x, layerHeight / 5, flip));
					}
				} else if (type == 'produce') {
					for (let x = width; x >= 0; x--) {
						p.vertex(x, y + layerHeight + getProduceCurve(x, layerHeight / 5, flip));
					} 
				}

				p.vertex(0, y + layerHeight);
			}
		
			// Stop drawing the shape.
			p.endShape(p.CLOSE);
		}

		// spread curve
		function getSpreadCurve(x: number, maxOffset: number, flip: boolean) {
			console.log('Flip: ', flip);
			if (flip) {
				return maxOffset * p.cos(x * 0.01) + maxOffset; 
			}

			return maxOffset * p.sin(x * 0.01) + maxOffset;
		}

		// condiment offset
		function getCondimentCurve(x: number, maxOffset: number, flip: boolean) {
			if (flip) {
				return maxOffset * p.cos(x * 0.05) + maxOffset;  
			}

			return maxOffset * p.sin(x * 0.05) + maxOffset;
		}

		// produce curve
		function getProduceCurve(x: number, maxOffset: number, flip: boolean) {
			if (flip) {
			return maxOffset * p.cos(x * 0.25) + 2 * maxOffset;
			}
			return maxOffset * p.sin(x * 0.25) + 2 * maxOffset;
		}
	};
</script>

<P5Canvas style="width: 100%;" {sketch} />