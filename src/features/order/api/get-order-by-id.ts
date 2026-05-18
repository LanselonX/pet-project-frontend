import { api } from "@/src/api/api";
import { OrderInfoId } from "../types/order.types";

export const getOrderById = async (id: number): Promise<OrderInfoId> => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};
