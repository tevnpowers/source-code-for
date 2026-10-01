import { Ingredient } from '$lib/components/sketches/sandwich';

export const meats: Ingredient[] = [
	new Ingredient('bacon', 'meat', 2, '#ca4e3d'),
	new Ingredient('chicken breast', 'meat', 2, '#fff3cf'),
	
]

export const produce: Ingredient[] = [
	new Ingredient('lettuce', 'produce', 2, '#009d20'),
	new Ingredient('onions (grilled)', 'produce', 2, '#e8c9be'),
	new Ingredient('tomato', 'produce', 2, '#ff1e00'),
]

export const cheeses: Ingredient[] = [
	new Ingredient('cheese (cheddar)', 'cheese', 2, '#ffbe1f'),
]

export const condiments: Ingredient[] = [
	new Ingredient('ketchup', 'condiment', 2, '#ff2600'),
	new Ingredient('mayo', 'condiment', 2, '#feffff'),
	new Ingredient('mustard', 'condiment', 2, '#fefb00')
]

export const spreads: Ingredient[] = [
	new Ingredient('jelly (grape)', 'spread', 3, '#7b039c'),
	new Ingredient('peanut butter', 'spread', 2, '#b86b1f')
]