"use server";

import { assertUserIsAdmin } from "./auth";

// eslint-disable-next-line require-await
export const explodeMe = async () => {
  await assertUserIsAdmin(); // commenting this out will make the build pass
  return { success: true };
};
