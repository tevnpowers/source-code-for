<script lang="ts">
	import { createP5Bridge } from "svelte-p5";
	import { Bread, Ingredient } from "./sandwich";
	import SandwichSketch from "./SandwichSketch.svelte";
	import TrashIcon from "$lib/icons/TrashIcon.svelte";

	interface Props {
		breads: Bread[];
		meats: Ingredient[];
		produce: Ingredient[];
		cheeses: Ingredient[];
		condiments: Ingredient[];
		spreads: Ingredient[];
	}

	let { breads, meats, produce, cheeses, condiments, spreads }: Props = $props();

	let actions: string[] = [
		'cold',
		'room temp',
		'panini press',
		'toast',
		'pan-fry',
	]

	const bridge = createP5Bridge({
		name: '',
		action: actions[1],
		ingredients: [] as (Bread|Ingredient)[]
	});

	function addIngredient() {
		bridge.state.ingredients.push(breads[0]);
	}

	function removeIngredient(index: number) {
		bridge.state.ingredients.splice(index, 1);
	}
</script>

<div class="container">
	<h2>Your Perfect Sandwich:</h2>
	<SandwichSketch bridge={bridge} height={600} width={600}/>

	<div class="name-group">
		<label for="fname">Sandwich Name:</label>
		<input type="text" id="sandwich-name" name="sandwich-name" bind:value={bridge.state.name}>
	</div>

	<div class="sandwich-actions">
		<p>Serve:</p>
		{#each actions as action, i (i)}
			<input type="radio" id="action-{action}" name="sandwich-actions" value="{action}" bind:group={bridge.state.action}>
			<label for="action-{action}">{action}</label><br>
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
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
		gap: 12px;

		font-family: 'JetBrains Mono Regular';
		color: var(--text-primary);
	}

	h2 {
		font-family: 'JetBrains Mono Bold';
		font-weight: normal;
		color: var(--text-primary);
		line-height: 115%;
	}

	.name-group {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: start;
		width: 100%;
		gap: 4px;
	}

	.name-group input {
		flex: 1;
	}

	.sandwich-actions {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
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
		gap: 16px;
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

	.remove-button {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
</style>