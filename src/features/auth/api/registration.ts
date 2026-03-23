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

export const registration = async (data: AuthSchema) => {
  const res = await api.post(`/auth/register`, data);
  return res.data;
};
