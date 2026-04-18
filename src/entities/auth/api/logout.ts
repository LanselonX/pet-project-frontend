import { api } from "@/shared/api";

export const logout = async () => {
  return await api.post(`/auth/logout`, {});
};
