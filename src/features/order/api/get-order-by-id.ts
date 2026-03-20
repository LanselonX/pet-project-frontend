import { api } from "@/src/api/api";

export const getOrderById = async (id: number) => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};
