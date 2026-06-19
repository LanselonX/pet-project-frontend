"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserInfo } from "../types/user.interface";
import { formatTime } from "@/src/lib/format-time";

export const columns: ColumnDef<UserInfo>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
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
];
