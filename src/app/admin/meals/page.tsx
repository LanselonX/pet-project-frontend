import { DataTable } from "@/src/components/shared/data-table";
import { getAllMealsAdmin } from "@/src/features/meal/api/get-meals-admin";
import { columns } from "@/src/features/meal/config/meal-columns";

export default async function MealsTable() {
  const data = await getAllMealsAdmin();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
