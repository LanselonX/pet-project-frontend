import { AdminMealForm } from "@/src/features/meal/components/admin-meal-form";

export default async function AdminIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <AdminMealForm id={Number(id)} />;
}
