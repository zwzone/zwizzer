"use server";

import * as z from "zod";
import { loginSchema } from "@/src/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
  // Login logic here
  const validatedFields = loginSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields!" };
  return { success: "Logged in!" };
};
