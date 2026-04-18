import { api } from "@/shared/api/api";
import { IPagination } from "@/shared/types";
import { OrderInfo } from "../model/order.interface";

// TODO: check orders
export default async function getOrders(): Promise<IPagination<OrderInfo>> {
  const response = await api.get(`orders`);
  return response.data;
}
