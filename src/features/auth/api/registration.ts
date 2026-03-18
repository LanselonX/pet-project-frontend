import { api } from "@/src/api/api";
import { z } from "zod";

export const Roles = ["ADMIN", "USER"] as const;

export const formSchema = z.object({
  email: z.string().min(2),
  name: z.string().min(2),
  password: z.string().min(2),
  role: z.enum(Roles),
});

export type AuthSchema = z.infer<typeof formSchema>;

export default async function registration(data: AuthSchema) {
  try {
    return await api.post(`/auth/register`, data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
