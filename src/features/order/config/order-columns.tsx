"use client";

import { ColumnDef } from "@tanstack/react-table";
import { OrderTable } from "../types/order.types";
import { RowLinkCell } from "@/src/components/shared/row-link-share";

export const columns: ColumnDef<OrderTable>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "userId", header: "UserID" },
  { accessorKey: "totalPrice", header: "Total Price" },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
  },
  {
    accessorKey: "updatedAt",
    header: "UpdatedAt",
  },
  {
    id: "actions",
    cell: ({ row }) => <RowLinkCell href={`/admin/order/${row.original.id}`} />,
  },
];
