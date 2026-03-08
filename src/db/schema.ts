import { pgTable, serial, varchar, integer } from 'drizzle-orm/pg-core';

// example schema; adjust tables/columns as needed
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  credits: integer('credits').default(0),
});
