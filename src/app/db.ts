import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const queryClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db");
export const db = drizzle(queryClient);

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: varchar("key", { length: 64 }).notNull(),
});
