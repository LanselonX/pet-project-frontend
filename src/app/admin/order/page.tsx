import { DataTable } from "@/src/components/shared/data-table";
import { getAllOrdersAdmin } from "@/src/features/order/api/get-all-orders-admin";
import { columns } from "@/src/features/order/config/order-columns";

export default async function OrdersTable() {
  const data = await getAllOrdersAdmin();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
