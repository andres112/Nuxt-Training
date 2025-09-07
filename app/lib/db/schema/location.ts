import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const location = sqliteTable('location', {
	id: int().primaryKey({ autoIncrement: true }),
	name: text().notNull(),
});
