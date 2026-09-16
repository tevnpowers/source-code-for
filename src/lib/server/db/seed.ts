import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { reset, seed } from "drizzle-seed";
import * as schema from './schema';
import { authors, posts } from './schema';

async function insertDB() {
	const client = createClient({ url: process.env.DB_URL! });
	const db = drizzle(client);

	try {
		// await seed(db, { authors });
		// await seed(db, { posts });
		await seed(db, schema).refine((f) => ({
			authors: {
				columns: {},
				count: 10,
				with: {
					posts: 10
				}
			},
		}));
	} catch (error) {
		// Access the underlying database error (e.g., pg, mysql2, bun:sqlite)
		console.error("Database failed:", error); 
	}
}

async function resetDB() {
	const client = createClient({ url: process.env.DB_URL! });
	const db = drizzle(client);

	await reset(db, schema);
}

// resetDB();
insertDB();