import { DataTable } from "@/src/components/shared/data-table";
import { getAllUsers } from "@/src/features/users/api/get-users";
import { columns } from "@/src/features/users/config/user-columns";

export default async function UserPage() {
  const data = await getAllUsers();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
