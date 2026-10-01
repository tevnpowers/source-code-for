import { Bread, Ingredient } from './lib/components/sketches/sandwich';
import type { Transport } from '@sveltejs/kit';

export const transport: Transport = {
	Bread: {
		encode: (value) => value instanceof Bread && [value.name, value.type, value.toasted, value.color],
		decode: ([name, type, toasted, color]) => new Bread(name, type, toasted, color)
	},
	Ingredient: {
		encode: (value) => value instanceof Ingredient && [value.name, value.type, value.amount, value.color],
		decode: ([name, type, amount, color]) => new Ingredient(name, type, amount, color)
	}
};