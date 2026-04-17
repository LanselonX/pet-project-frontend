import { api } from "@/src/shared/api/api";

export const createOrder = async () => {
  return await api.post(`orders`, {});
};
