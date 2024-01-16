import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  // status: z.enum(["active", "inactive"]),
  //status: z.string(),
});

export type User = z.infer<typeof userSchema>;
