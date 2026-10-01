export class Sandwich {
	name: string;
	flavor: number;
	health: number;
	nostalgia: number;
	instruction: string;
	ingredients: ( Bread | Ingredient)[];

	constructor(name: string, flavor: number, health: number, nostalgia: number, instruction: string) {
		// The name of this sandwich
		this.name = name;

		// Instruction for cooking and serving the sandwich after preparing.
		// e.g. serve room temp, hot, cold, panini pressed, grilled, toasted?
		this.instruction = instruction;

		// Various scores in the range [1, 10]
		this.flavor = flavor;
		this.health = health;
		this.nostalgia = nostalgia;

		// The list of ingredients (in order from bottom to top)
		// Starts empty, we add ingredients later.
		this.ingredients = [];
	}

		// Add a piece of bread to our list of ingredients
	addBread(bread: Bread) {
		this.ingredients.push(bread);
	}

	// Add one or more servings of an ingredient to our sandwich
	addIngredient(ingredient: Ingredient) {
		// Add the specified number of servings for this ingredient
		// to our list of ingredients for the sandwich
		for (let i = 0; i < ingredient.amount; i++) {
			this.ingredients.push(ingredient);
		}
	}
}

export class Bread {
	name: string;
	type: string;
	toasted: boolean;
	color: string;

	constructor(name: string, type: string, toasted: boolean, color: string) {
		// Name of bread
		this.name = name;

		// Functional type of bread (sliced, sub, bun, open face, etc.)
		this.type = type;

		// Toasted or untoasted
		this.toasted = toasted;

		// Color to render
		this.color = color;
	}
}

export class Ingredient {
	name: string;
	type: string;
	amount: number;
	color: string;

	constructor(name: string, type: string, amount: number, color: string) {
		// Name of the ingredient
		this.name = name;

		// Type of ingredient (meat, produce, spread, condiment)
		this.type = type;

		// Light, normal, heavy, more than you think
		this.amount = amount;

		// Color to render
		this.color = color;
	}
}