// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	const response = await db.query.posts.findFirst({
		where: (p, { eq }) => eq(p.slug, params.slug),
		with: { author: true }
	});
	
	if (!response) throw error(404, 'Not found');
	return {
		post: response,
		serverMessage: 'hello from server load function'
	};
};