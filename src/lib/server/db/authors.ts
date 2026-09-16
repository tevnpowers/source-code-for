// src/lib/server/db/posts.ts
import { db } from './client';
import { authors } from './schema';

export const createAuthor = async (data: typeof authors.$inferInsert) =>
	await db.insert(authors).values(data).returning();

export const getDirectory = async () => await db.query.authors.findMany({
	with: {
		posts: {
			columns: { id: true, title: true, slug: true }
		}
	}
});
