// src/lib/server/db/posts.ts
import { eq } from 'drizzle-orm';
import { db } from './client';
import { posts } from './schema';

export const getPostById = async (id: string) =>
  await db.select().from(posts).where(eq(posts.id, id));

export const getPostBySlug = async (slug: string) =>
  	// db.select().from(posts).where(eq(posts.slug, slug)).get();
	await db.query.posts.findFirst({
		where: (posts, { eq }) => eq(posts.slug, slug),
		with: { author: true }
	});

export const createPost = async (data: typeof posts.$inferInsert) =>
  await db.insert(posts).values(data).returning();

export const updatePost = async (id: string, data: Partial<typeof posts.$inferInsert>) =>
  await db.update(posts).set(data).where(eq(posts.id, id)).run();

export const deletePost = async (id: string) =>
  await db.delete(posts).where(eq(posts.id, id)).run();
