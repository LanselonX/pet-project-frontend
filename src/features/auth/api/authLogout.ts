import { api } from "@/src/api/api";

export const authLogout = async () => {
  return await api.post(`/auth/logout`, {});
};
