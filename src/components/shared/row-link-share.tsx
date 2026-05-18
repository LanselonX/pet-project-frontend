"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { AxeIcon } from "lucide-react";

interface RowLinkCellProps {
  href: string;
}

export function RowLinkCell({ href }: RowLinkCellProps) {
  return (
    <Button variant="ghost" size="icon" asChild>
      <Link href={href}>
        <AxeIcon className="h-4 w-4" />
      </Link>
    </Button>
  );
}
