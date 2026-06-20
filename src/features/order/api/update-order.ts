import { api } from "@/src/api/api";
import { OrderStatus } from "../types/order.types";

export async function updateOrderStatus({
  id,
  status,
}: {
  id: number;
  status: OrderStatus;
}) {
  const res = await api.patch(`/orders/status/${id}`, { status });
  return res.data;
}
