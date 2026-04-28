import { api } from "@/src/api/api";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const authLogin = async (data: LoginSchema) => {
  const res = await api.post(`/auth/login`, data);
  return res.data;
};
