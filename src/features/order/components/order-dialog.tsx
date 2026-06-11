"use client";

import { getOrderById } from "../api/get-order-by-id";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Badge } from "@/src/components/ui/badge";
import { OrderIdProps } from "../types/order.types";
import { getBadgeStatus } from "../utils/badge-status.utils";
import { useQuery } from "@tanstack/react-query";

export const OrderDialog = ({ id }: OrderIdProps) => {
  const { data } = useQuery({
    queryKey: ["orderId", id],
    queryFn: () => getOrderById(id),
  });

  console.log("order dialog data is:", data);

  if (!data) return null;

  return (
    <div>
      <Dialog>
        <DialogTrigger>Подробнее о заказе</DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <div className="flex items-start justify-between gap-4 pr-8">
              <div className="flex flex-col gap-1">
                <DialogTitle>Заказ #{data.id}</DialogTitle>
                <DialogDescription>
                  {new Date(data.createdAt).toDateString()}
                </DialogDescription>
              </div>
              <Badge variant={getBadgeStatus(data.status)}>{data.status}</Badge>
            </div>
          </DialogHeader>

          <div className="divide-y divide-border">
            {data.items.map((item) => (
              <div
                key={item.meal.id}
                className="flex items-start justify-between gap-4 py-3"
              >
                <div className="min-w-0">
                  <p className="font-medium">{item.meal.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
                    {item.meal.description}
                  </p>
                </div>
                <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                  {item.price} ₴ × {item.quantity}
                </span>
              </div>
            ))}
          </div>

          <DialogFooter className="sm:justify-between">
            <span className="text-muted-foreground">Итого</span>
            <span className="text-lg font-semibold tabular-nums">
              {data.totalPrice} ₴
            </span>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
