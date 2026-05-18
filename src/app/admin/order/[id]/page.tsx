import { AdminMealForm } from "@/src/features/meal/components/admin-meal-form";
import { OrderInfoAdmin } from "@/src/features/order/components/order-info-admin";

export default async function OrderIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <OrderInfoAdmin id={Number(id)} />;
}
