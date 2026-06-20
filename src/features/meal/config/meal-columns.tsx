"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MealTable } from "../types/meal-types";
import { RowLinkCell } from "@/src/components/shared/row-link-share";
import { formatTime } from "@/src/lib/format-time";

export const columns: ColumnDef<MealTable>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
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
    cell: ({ row }) => <RowLinkCell href={`/admin/meals/${row.original.id}`} />,
  },
];
