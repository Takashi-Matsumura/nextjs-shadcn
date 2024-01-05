import { z } from "zod";

export const employeeSchema = z.object({
  id: z.string(),
  nameKanji: z.string(),
  nameKana: z.string(),
  gender: z.enum(["男性", "女性"]),
  birthDate: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  postalCode: z.string(),
  address: z.string(),
  status: z.enum(["active", "inactive"]),
});

export type Employee = z.infer<typeof employeeSchema>;
