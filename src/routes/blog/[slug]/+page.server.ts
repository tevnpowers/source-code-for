// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/client';
import { breads } from '$lib/server/sandwich/bread';
import { meats, produce, cheeses, condiments, spreads } from '$lib/server/sandwich/ingredients';
import type { PageServerLoad } from './$types';
import { transport } from '../../../hooks';

export const load: PageServerLoad = async ({ params }) => {

	/*
	const response = await db.query.posts.findFirst({
		where: (p, { eq }) => eq(p.slug, params.slug),
		with: { author: true }
	});
	
	if (!response) throw error(404, 'Not found');
	*/
	return {
		breads: breads.map(b => transport.Bread.encode(b)),
		meats: meats.map(m => transport.Ingredient.encode(m)),
		produce: produce.map(p => transport.Ingredient.encode(p)),
		cheeses: cheeses.map(c => transport.Ingredient.encode(c)),
		condiments: condiments.map(c => transport.Ingredient.encode(c)),
		spreads: spreads.map(s => transport.Ingredient.encode(s))
	};
};