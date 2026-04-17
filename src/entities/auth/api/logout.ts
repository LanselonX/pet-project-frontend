import { api } from "@/src/shared/api/api";

export const logout = async () => {
  return await api.post(`/auth/logout`, {});
};
