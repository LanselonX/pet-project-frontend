import { api } from "@/shared/api";

export const createOrder = async () => {
  return await api.post(`orders`, {});
};
