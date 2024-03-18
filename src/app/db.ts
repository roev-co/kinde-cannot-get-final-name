import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { drizzle as drizzleNeonHttp } from "drizzle-orm/neon-http";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

// -- Neon http connection
const sql = neon(process.env.DATABASE_URL!, {
  fetchOptions: {
    cache: "no-store",
    revalidate: 0,
    tags: ["neon", "db"],
  },
}) as NeonQueryFunction<boolean, boolean>;

export const db = drizzleNeonHttp(sql);

export const sessions = pgTable("sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  key: varchar("key", { length: 64 }).notNull(),
});
