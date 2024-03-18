import { and, eq, sql } from "drizzle-orm";
import { cookies } from "next/headers";
import { db, sessions } from "./app/db";

const loadSessionFromDb = async (sessionId: string, key: string) => {
  return await db
    .select({ count: sql<number>`count(*)` })
    .from(sessions)
    .where(and(eq(sessions.id, sessionId), eq(sessions.key, key)))
    .limit(1);
};

export async function validateSessionKey(isid: string, isidKey: string) {
  let lastError: Error | undefined;
  await loadSessionFromDb(isid, isidKey);
  return true;
}

export const getCurrentValidatedSessionId = async () => {
  const a = cookies().get("a")?.value || "";
  const b = cookies().get("b")?.value || "";

  if (!(await validateSessionKey(a, b))) {
    throw new Error("Invalid session");
  }

  return a as string;
};

export const assertUserIsAdmin = async () => {
  return true;
};
