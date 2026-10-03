import { Ingredient } from '$lib/components/sketches/sandwich';

export const meats: Ingredient[] = [
	new Ingredient('bacon', 'meat', 2, '#ca4e3d'),
	new Ingredient('burger', 'meat', 2, '#7d3800'),
	new Ingredient('burger (smashed)', 'meat', 2, '#4b2200'),
	new Ingredient('chicken breast (grilled)', 'meat', 2, '#fff3cf'),
	new Ingredient('chicken breast (fried)', 'meat', 2, '#d69600'),
	new Ingredient('chicken thigh (grilled)', 'meat', 2, '#b2a57d'),
	new Ingredient('chicken thigh (fried)', 'meat', 2, '#564100'),
]

export const seafood: Ingredient[] = [
	new Ingredient('catfish (grilled)', 'meat', 2, '#fff3cf'),
	new Ingredient('catfish (fried)', 'meat', 2, '#fff3cf'),
	new Ingredient('crab', 'meat', 2, '#fff3cf'),
	new Ingredient('salmon', 'meat', 2, '#fff3cf'),
	new Ingredient('shrimp (grilled)', 'meat', 2, '#fff3cf'),
	new Ingredient('shrimp (fried)', 'meat', 2, '#fff3cf'),
	new Ingredient('tilapia', 'meat', 2, '#fff3cf'),
	new Ingredient('whiting (grilled)', 'meat', 2, '#fff3cf'),
	new Ingredient('whiting (fried)', 'meat', 2, '#fff3cf'),
]

export const produce: Ingredient[] = [
	new Ingredient('arugula', 'produce', 2, '#009d20'),
	new Ingredient('kale', 'produce', 2, '#006f16'),
	new Ingredient('lettuce', 'produce', 2, '#00ca28'),
	new Ingredient('spinach', 'produce', 2, '#003d0c'),
	new Ingredient('banana peppers', 'produce', 2, '#ffff00'),
	new Ingredient('hot peppers', 'produce', 2, '#ff0000'),
	new Ingredient('sweet peppers', 'produce', 2, '#ff9900'),
	new Ingredient('pickles', 'produce', 2, '#2a9029'),
	new Ingredient('onions', 'produce', 2, '#e8c9be'),
	new Ingredient('onions (caramelized)', 'produce', 2, '#975c21'),
	new Ingredient('onions (grilled)', 'produce', 2, '#96857e'),
	new Ingredient('tomato', 'produce', 2, '#ff1e00'),
	new Ingredient('red onion', 'produce', 2, '#4c0086'),
	new Ingredient('red onion (pickled)', 'produce', 2, '#b30086'),
	new Ingredient('white onion', 'produce', 2, '#fff2ee'),
]

export const cheeses: Ingredient[] = [
	new Ingredient('cheddar (slice)', 'cheese', 2, '#ffb700'),
	new Ingredient('mozzarella (slice)', 'cheese', 2, '#fff3d4'),
	new Ingredient('pepper jack (slice)', 'cheese', 2, '#ffc880'),
	new Ingredient('provolone (slice)', 'cheese', 2, '#fffdf6'),
	new Ingredient('swiss (slice)', 'cheese', 2, '#fef9ec'),
]

export const condiments: Ingredient[] = [
	new Ingredient('ketchup', 'condiment', 2, '#ff2600'),
	new Ingredient('mayo', 'condiment', 2, '#feffff'),
	new Ingredient('mustard', 'condiment', 2, '#fefb00'),
	new Ingredient('barbecue', 'condiment', 2, '#610022'),
	new Ingredient('hot sauce', 'condiment', 2, '#fe6e00'),
	new Ingredient('hot sauce (texas pete)', 'condiment', 2, '#fe6e00'),
]

export const spreads: Ingredient[] = [
	new Ingredient('butter', 'spread', 2, '#fcfec6'),
	new Ingredient('jelly (grape)', 'spread', 3, '#7b039c'),
	new Ingredient('jelly (strawberry)', 'spread', 3, '#c80003'),
	new Ingredient('peanut butter (creamy)', 'spread', 2, '#b86b1f'),
	new Ingredient('peanut butter (crunchy)', 'spread', 2, '#794612')
]