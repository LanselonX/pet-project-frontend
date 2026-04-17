import { api } from "@/src/shared/api/api";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(2),
  password: z.string().min(2),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const login = async (data: LoginSchema) => {
  const res = await api.post(`/auth/login`, data);
  return res.data;
};
