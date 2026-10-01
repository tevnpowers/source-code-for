<script lang="ts">
	import { createP5Bridge } from "svelte-p5";
	import { Bread, Ingredient } from "./sandwich";
	import SandwichSketch from "./SandwichSketch.svelte";
	import TrashIcon from "$lib/icons/TrashIcon.svelte";
	import DownArrowIcon from "$lib/icons/DownArrowIcon.svelte";
	import UpArrowIcon from "$lib/icons/UpArrowIcon.svelte";

	interface Props {
		breads: Bread[];
		meats: Ingredient[];
		seafood: Ingredient[];
		produce: Ingredient[];
		cheeses: Ingredient[];
		condiments: Ingredient[];
		spreads: Ingredient[];
	}

	let { breads, meats, seafood, produce, cheeses, condiments, spreads }: Props = $props();

	let instructions: string[] = [
		'none',
		'cold',
		'toasted',
		'grilled'
	]

	let name = $state('');
	let description = $state('');
	let flavor = $state(5);
	let health = $state(5);
	let nostalgia = $state(5);

	let selected_instruction = $state(instructions[0]);

	const bridge = createP5Bridge({
		ingredients: [] as (Bread|Ingredient)[]
	});

	function addIngredient() {
		bridge.state.ingredients.push(breads[0]);
	}

	function removeIngredient(index: number) {
		bridge.state.ingredients.splice(index, 1);
	}


	function saveSandwich() {
		alert('This feature is coming soon!');
	}
</script>

<div class="container">
	<h2>Your Perfect Sandwich:</h2>
	<SandwichSketch bridge={bridge} height={600} width={600}/>

	<div class="name-group">
		<label for="sandwich-name">Sandwich Name:</label>
		<input type="text" id="sandwich-name" name="sandwich-name" bind:value={name}>
	</div>

	<div class="description-group">
		<label for="sandwich-description">Description:</label>
		<textarea id="sandwich-description" name="sandwich-description" bind:value={description}></textarea>
	</div>

	<div class="score-group">
		<div class="score-controls">
			<label for="flavor-score">Flavor:</label>
			<span>{flavor}</span>
			<input id="flavor-score" type="range" min="1" max="10" bind:value={flavor}>
		</div>

		<div class="score-controls">
			<label for="health-score">Health:</label>
			<span>{health}</span>
			<input id="health-score" type="range" min="1" max="10" bind:value={health}>
		</div>
		
		<div class="score-controls">
			<label for="nostalgia-score">Nostalgia:</label>
			<span>{nostalgia}</span>
			<input id="nostalgia-score" type="range" min="1" max="10" bind:value={nostalgia}>
		</div>
	</div>

	<div class="sandwich-instructions">
		<p>Instruction:</p>
		{#each instructions as instruction, i (i)}
			<div style="display: flex;">
				<input type="radio" id="instruction-{instruction}" name="sandwich-instructions" value="{instruction}" bind:group={selected_instruction}>
				<label for="instruction-{instruction}">{instruction}</label><br>
			</div>
		{/each}
	</div>

	<label for="sandwich-ingredients">Sandwich Ingredients:</label>
	{#if bridge.state.ingredients.length > 0}
		<ul class="sandwich-ingredients" id="sandwich-ingredients">
			{#each bridge.state.ingredients as _, index (index)}
				<li>
					<label>
						<select bind:value={bridge.state.ingredients[index]}>
							<optgroup label="Bread">
								{#each breads as bread (bread.name)}
									<option value={bread}>{bread.name}</option>
								{/each}
							</optgroup>
							<optgroup label="Meat">
								{#each meats as meat (meat.name)}
									<option value={meat}>{meat.name}</option>
								{/each}
							</optgroup>
							<optgroup label="Seafood">
								{#each seafood as seafood_item (seafood_item.name)}
									<option value={seafood_item}>{seafood_item.name}</option>
								{/each}
							</optgroup>
							<optgroup label="Produce">
								{#each produce as p (p.name)}
									<option value={p}>{p.name}</option>
								{/each}
							</optgroup>
							<optgroup label="Cheese">
								{#each cheeses as cheese (cheese.name)}
									<option value={cheese}>{cheese.name}</option>
								{/each}
							</optgroup>
							<optgroup label="Condiments">
								{#each condiments as condiment (condiment.name)}
									<option value={condiment}>{condiment.name}</option>
								{/each}
							</optgroup>
							<optgroup label="Spreads">
								{#each spreads as spread (spread.name)}
									<option value={spread}>{spread.name}</option>
								{/each}
							</optgroup>
						</select>
						<button class="shift-button" aria-label="Move ingredient up in order">
							<UpArrowIcon width={20} height={20} />
						</button>
						<button class="shift-button" aria-label="Move ingredient down in order">
							<DownArrowIcon width={20} height={20} />
						</button>
						<button class="remove-button" onclick={() => removeIngredient(index)} aria-label="Remove">
							<TrashIcon width={18} height={18} color='#86CF86' title='Remove Ingredient' description='Remove ingredient from sandwich'/>
						</button>
					</label>
				</li>
			{/each}
		</ul>
	{:else}
		<div class="empty-list">
			<p>Ingredients will appear here as you add them</p>
		</div>
	{/if}
	<button onclick={addIngredient} class="button">Add Ingredient</button>
	<button onclick={saveSandwich} class="button">Save to Community Lunchbox</button>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		gap: 12px;

		font-family: 'JetBrains Mono Bold';
		color: var(--text-primary);
	}

	h2 {
		font-family: 'JetBrains Mono Bold';
		font-weight: normal;
		color: var(--text-primary);
		line-height: 115%;
	}

	.name-group, .description-group {
		display: flex;
		flex-direction: row;
		align-items: start;
		justify-content: start;
		width: 100%;
		gap: 4px;
	}

	.name-group input {
		flex: 1;
	}

	.description-group textarea {
		width: 100%;
	}

	.score-group {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: start;
		gap: 12px;
	}

	.score-controls {
		display: flex;
		gap:12px;
	}

	.score-controls input {
		flex: 1;
	}

	.sandwich-instructions {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		flex-wrap: wrap;
		gap: 12px;
	}

	.sandwich-ingredients {
		max-width: 100%;
		padding: 0;
		display: flex;
		flex-direction: column-reverse;
		align-items: start;
		justify-content: start;
		gap: 12px;
		list-style-type: none;
	}

	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 12px;
	}

	.empty-list {
		width: 100%;
		border: 2px dashed var(--text-secondary);
		text-align: center;
	}

	button, select {
		font-family: 'JetBrains Mono Regular';
		color: var(--text-primary);
	}

	.remove-button, .shift-button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>