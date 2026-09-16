// src/lib/server/db/schema.ts
import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const timestamps = {
  createdAt: integer('created_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .notNull()
    .$defaultFn(() => new Date())
};

export const authors = sqliteTable('authors', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  ...timestamps
});

export const posts = sqliteTable('posts', {
  id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
  authorId: text('author_id')
    .notNull()
    .references(() => authors.id),
  title: text('title').notNull(),
  slug: text('slug').notNull().unique(),
  body: text('body'),
  tags: text('tags', { mode: 'json' }).$type<string[]>(),
  ...timestamps
});

export const authorsRelations = relations(authors, ({ many }) => ({
  posts: many(posts)
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(authors, {
    fields: [posts.authorId],
    references: [authors.id]
  })
}));

export type InsertAuthorParams = typeof authors.$inferInsert;