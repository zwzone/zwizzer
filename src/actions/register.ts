"use server";

import * as z from "zod";
import { registerSchema } from "@/src/schemas";

export const register = async (values: z.infer<typeof registerSchema>) => {
  // Regsiter logic here
  const validatedFields = registerSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid fields!" };
  return { success: "Rgistered successfully!" };
};
