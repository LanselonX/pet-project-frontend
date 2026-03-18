import { api } from "@/src/api/api";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export default async function login(data: LoginSchema) {
  try {
    return await api.post(`/auth/login`, data, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
  }
}
