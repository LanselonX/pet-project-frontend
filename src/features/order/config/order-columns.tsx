"use client";

import { ColumnDef } from "@tanstack/react-table";
import { OrderTable } from "../types/order.types";
import { RowLinkCell } from "@/src/components/shared/row-link-share";
import { formatTime } from "@/src/lib/format-time";

export const columns: ColumnDef<OrderTable>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "userId", header: "UserID" },
  { accessorKey: "totalPrice", header: "Total Price" },
  {
    accessorKey: "createdAt",
    header: "CreatedAt",
    cell: ({ row }) => formatTime(row.original.createdAt),
  },
  {
    accessorKey: "updatedAt",
    header: "UpdatedAt",
    cell: ({ row }) => formatTime(row.original.updatedAt),
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <RowLinkCell href={`/admin/orders/${row.original.id}`} />
    ),
  },
];
