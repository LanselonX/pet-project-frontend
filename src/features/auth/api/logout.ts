import { api } from "@/src/api/api";

export const logout = async () => {
  return await api.post(`/auth/logout`, {});
};
