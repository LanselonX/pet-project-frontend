import { api } from "@/src/api/api";

export const createOrder = async () => {
  return await api.post(`orders`, {});
};
