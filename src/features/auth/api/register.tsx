import { z } from "zod";

// TODO: need delete this
const url = "http://localhost:3000/auth/register";

export const Roles = ["ADMIN", "USER"] as const;

export const formSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
  role: z.enum(Roles),
});

export type AuthSchema = z.infer<typeof formSchema>;

export default async function Register(data: AuthSchema) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const json = await response.json();
    console.log("Success", JSON.stringify(json));
  } catch (error) {
    console.log("Error is", error);
  }
}
