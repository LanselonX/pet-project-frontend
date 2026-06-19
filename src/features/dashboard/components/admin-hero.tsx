"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCountDashboard } from "../api/get-count-dashboard";
import { ADMINHERO, QUICK_LINKS } from "../config/admin-hero.config";
import { ArrowRight, Check, X, Clock } from "lucide-react";
import { updateOrderStatus } from "../../order/api/update-order";
import { Skeleton } from "@/src/components/ui/skeleton";
import { PendingOrder } from "../types/admin-hero-type";
import { formatTime } from "@/src/lib/format-time";
import Link from "next/link";

export default function AdminHero() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["dashboardCount"],
    queryFn: getCountDashboard,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: updateOrderStatus,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["dashboardCount"] }),
  });

  const pendingOrders = data?.pendingOrders ?? [];

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Панель управления</h1>
        <p className="text-muted-foreground">
          Обзор и быстрый доступ к разделам
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ADMINHERO.map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border p-5 transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-foreground/20"
          >
            <div className="text-sm text-muted-foreground">{label}</div>
            <div className="mt-2 text-3xl font-bold">
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                (data?.[value] ?? 0)
              )}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="mb-4 text-lg font-medium">Быстрые действия</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-between rounded-xl border p-5 transition-all hover:bg-muted/50 hover:border-foreground/20"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{label}</span>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Новые заказы</h2>
          <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
            {pendingOrders.length} в очереди
          </span>
        </div>

        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-xl" />
            ))}
          </div>
        ) : pendingOrders.length === 0 ? (
          <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
            Новых заказов пока нет 🍽️
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pendingOrders.map((order: PendingOrder) => (
              <div
                key={order.id}
                className="flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-semibold">Заказ #{order.id}</div>
                    <div className="text-sm text-muted-foreground">
                      {order.user?.name ?? "Без имени"}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {formatTime(order.createdAt)}
                  </div>
                </div>

                <div className="mt-auto flex gap-2 pt-4">
                  <button
                    disabled={isPending}
                    onClick={() => mutate({ id: order.id, status: "SHIPPED" })}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    <Check className="h-4 w-4" />
                    Принять
                  </button>
                  <button
                    disabled={isPending}
                    onClick={() =>
                      mutate({ id: order.id, status: "CANCELLED" })
                    }
                    className="flex items-center justify-center rounded-lg border px-3 py-2 text-sm text-red-600 transition-colors hover:bg-red-50 disabled:opacity-50"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
