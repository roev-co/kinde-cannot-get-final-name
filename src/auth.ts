import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { and, eq, sql } from "drizzle-orm";
import { db, sessions } from "./app/db";

const loadSessionFromDb = async (sessionId: string, key: string) => {
  return await db
    .select({ count: sql<number>`count(*)` })
    .from(sessions)
    .where(and(eq(sessions.id, sessionId), eq(sessions.key, key)))
    .limit(1);
};

export const assertUserIsAdmin = async () => {
  await getKindeServerSession().getAccessToken();
  return true;
};
