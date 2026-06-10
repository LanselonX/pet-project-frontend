"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import cartImage from "../../../public/empty-cart-2.svg";
import { getCart } from "../api/get-cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../order/api/create-order";

export const Cart = () => {
  const queryClient = useQueryClient();
  const { data } = useQuery({ queryKey: ["cart"], queryFn: getCart });

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });

  if (!data || data.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Image
          src={cartImage}
          alt=""
          width={360}
          height={210}
          className="opacity-90"
        />
        <h2 className="mt-6 text-lg font-medium">Корзина пуста</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Добавьте блюда из меню, чтобы оформить заказ.
        </p>
        <Button asChild variant="outline" className="mt-5">
          <Link href="/meals">Перейти в меню</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">Корзина</h1>
      <div className="grid items-start gap-8 lg:grid-cols-[1fr_360px]">
        <div className="divide-y divide-border rounded-(--radius) border">
          {data.items.map((item) => (
            <div key={item.meal.id} className="flex gap-4 p-4">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-muted">
                {item.meal.imageUrl && (
                  <Image
                    src={item.meal.imageUrl}
                    alt={item.meal.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-medium leading-tight">
                    {item.meal.name}
                  </h3>
                  <span className="shrink-0 font-semibold tabular-nums">
                    {item.price * item.quantity} ₴
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {item.meal.description}
                </p>
                <div className="mt-auto pt-3 text-sm text-muted-foreground tabular-nums">
                  {item.quantity} × {item.price} ₴
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="lg:sticky lg:top-6">
          <div className="rounded-(--radius) border p-6">
            <h2 className="text-lg font-semibold">К оплате</h2>

            <div className="mt-4 space-y-3">
              {data.items.map((item) => (
                <div
                  key={item.meal.id}
                  className="flex items-start justify-between gap-3 text-sm"
                >
                  <span className="text-muted-foreground">
                    {item.meal.name}
                    <span className="text-muted-foreground/60">
                      {" "}
                      · {item.quantity} шт
                    </span>
                  </span>
                  <span className="shrink-0 tabular-nums">
                    {item.price * item.quantity} ₴
                  </span>
                </div>
              ))}
            </div>

            <div className="my-4 border-t" />

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Итого</span>
              <span className="text-xl font-semibold tabular-nums">
                {data.totalPrice} ₴
              </span>
            </div>

            <Button
              className="mt-5 w-full"
              onClick={() => mutation.mutate()}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Оформляем…" : "Оформить заказ"}
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
};
