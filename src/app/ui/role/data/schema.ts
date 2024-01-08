import { z } from "zod";

export const roleSchema = z.object({
  id: z.string(),
  manager: z.boolean(),
  member: z.boolean(),
  user_id: z.string(),
  status: z.enum(["active", "inactive"]),
});

export type Role = z.infer<typeof roleSchema>;
