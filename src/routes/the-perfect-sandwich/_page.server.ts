// src/routes/the-perfect-sandwich/+page.server.ts
import { breads } from '$lib/server/sandwich/bread';
import { meats, seafood, produce, cheeses, condiments, spreads } from '$lib/server/sandwich/ingredients';
import type { PageServerLoad } from './$types';
import { transport } from '../../hooks';

export const load: PageServerLoad = async ({ params }) => {

	return {
		breads: breads.map(b => transport.Bread.encode(b)),
		meats: meats.map(m => transport.Ingredient.encode(m)),
		seafood: seafood.map(s => transport.Ingredient.encode(s)),
		produce: produce.map(p => transport.Ingredient.encode(p)),
		cheeses: cheeses.map(c => transport.Ingredient.encode(c)),
		condiments: condiments.map(c => transport.Ingredient.encode(c)),
		spreads: spreads.map(s => transport.Ingredient.encode(s))
	};
};