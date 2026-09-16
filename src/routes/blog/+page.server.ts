// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/client';
import type { PageServerLoad } from './$types';
import { authors, posts } from '$lib/server/db/schema'

export const load: PageServerLoad = async ({ params }) => {
	const authorResponse = await db.select().from(authors);
	const postResponse = await db.select().from(posts);
	
	if (!authorResponse || !postResponse) throw error(404, 'Not found');
	return {
		authors: authorResponse,
		posts: postResponse,
		serverMessage: 'hello from server load function'
	};
};