"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MealTable } from "../types/meal-types";
import { RowLinkCell } from "@/src/components/shared/row-link-share";

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
  },
  {
    accessorKey: "updatedAt",
    header: "UpdatedAt",
  },
  {
    id: "actions",
    cell: ({ row }) => <RowLinkCell href={`/admin/meal/${row.original.id}`} />,
  },
];
