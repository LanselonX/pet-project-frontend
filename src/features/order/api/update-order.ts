import { api } from "@/src/api/api";

export async function updateOrderStatus({
  id,
  status,
}: {
  id: number;
  status: string;
}) {
  const res = await api.patch(`/orders/status/${id}`, { status });
  return res.data;
}
