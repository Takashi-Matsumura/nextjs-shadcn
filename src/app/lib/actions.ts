"use server";

import { sql } from "@vercel/postgres";

export async function dbConnectionCheck(formData: any) {
  try {
    const result = await sql`SELECT 1;`;
    console.log(result);
  } catch (error) {
    console.error(process.env.POSTGRES_URL);
    console.error("Database connection error:", error);
  }
}
