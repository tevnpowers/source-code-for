// src/routes/blog/[slug]/+page.server.ts
import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db/client';
import type { PageServerLoad } from './$types';
import { authors, posts } from '$lib/server/db/schema'
import { createAuthor } from '$lib/server/db/authors';

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

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		// db.createTodo(cookies.get('userid'), data.get('description'));
		console.log('data: ', data);
		const response = await insertAuthor({
			name: data.get('fname') + ' ' + data.get('lname'),
			email: data.get('email') + ''
		});

		console.log('response: ', response);
	}
};

const insertAuthor = async (author: typeof authors.$inferInsert) => {
	const response = await createAuthor(author);
	return {
		author: response,
		serverMessage: 'inserted author'
	}
}

// TODO: CRUD write action
/*
import { createAuthor } from '$lib/server/db/authors';
export const insertAuthor = async (author: typeof authors.$inferInsert) => {
	const insertResponse = await createAuthor(author);
	return {
		newAuthor: insertResponse,
		serverMessage: 'inserted author'
	}
}
*/