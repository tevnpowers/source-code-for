// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	const authorResponse = await db.query.authors.findFirst({
		where: (author, { eq }) => eq(author.id, params.slug),
		with: { posts: true }
	});
	/*
	const response = await db.query.posts.findFirst({
		where: (p, { eq }) => eq(p.slug, params.slug),
		with: { author: true }
	}); */
	
	if (!authorResponse) throw error(404, 'Not found');
	return {
		author: authorResponse,
		serverMessage: 'hello from server load function'
	};
};