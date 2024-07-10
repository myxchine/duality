import { uuid, pgTableCreator, text } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// Helper function to create table names with a prefix
export const createTable = pgTableCreator((name) => `wbw_${name}`);

// Photos table definition
export const contacts = createTable("contacts", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  surname: text("surname").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const mailList = createTable("mailList", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
});
