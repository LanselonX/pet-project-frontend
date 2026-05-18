import { api } from "@/src/api/api";
import { OrderInfo } from "../types/order.types";
import { IPagination } from "@/src/types/interface";

// TODO: check orders
export default async function getOrders(): Promise<IPagination<OrderInfo>> {
  const response = await api.get(`orders`);
  return response.data;
}
