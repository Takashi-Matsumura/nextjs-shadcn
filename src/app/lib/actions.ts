"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import bcrypt from "bcryptjs";

export async function dbConnectionCheck(formData: any) {
  try {
    const result = await sql`SELECT 1;`;
    console.log(result);
  } catch (error) {
    console.error(process.env.POSTGRES_URL);
    console.error("Database connection error:", error);
  }
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  useremail: z.string().email({ message: "Invalid email address." }),
  userpassword: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export async function createUser(data: any) {
  console.log("create user..." + data.get("username"));
  // const validatedFields = FormSchema.safeParse(data);

  // if (!validatedFields.success) {
  //   console.log("Missing Fields. Failed to Create User.");
  //   return {
  //     errors: validatedFields.error.flatten().fieldErrors,
  //     message: "Missing Fields. Failed to Create User.",
  //   };
  // }

  // const { username, useremail, userpassword } = validatedFields.data;
  const username = data.get("username");
  const useremail = data.get("useremail");
  const userpassword = data.get("userpassword");

  const hashedPassword = await bcrypt.hash(userpassword, 10);
  console.log("insert user data..." + username + useremail + hashedPassword);

  try {
    await sql`INSERT INTO Users (Name, Email, Password) VALUES (${username}, ${useremail}, ${hashedPassword});`;
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
}
