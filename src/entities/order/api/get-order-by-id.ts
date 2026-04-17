import { api } from "@/src/shared/api/api";
import { OrderInfoId } from "../model/order.interface";

export const getOrderById = async (id: number): Promise<OrderInfoId> => {
  const response = await api.get(`/orders/${id}`);
  return response.data;
};
