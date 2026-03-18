"use client";

import { useData } from "@/src/hooks/use-data";
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
import { OrderIdProps, OrderInfoId } from "../types/order.interface";
import { getBadgeStatus } from "../utils/badge-status.utils";

export const OrderDialog = ({ id }: OrderIdProps) => {
  const { data } = useData<OrderInfoId>(() => getOrderById(id));

  if (!data) return null;

  return (
    <div>
      <Dialog>
        <DialogTrigger>Подробнее о заказе</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <div className="flex justify-between">
                <div className="flex gap-2 flex-col">
                  <p>Order number: {data.id}</p>
                  <span>{new Date(data.createdAt).toDateString()}</span>
                </div>
                <Badge variant={getBadgeStatus(data.status)} className="mx-4">
                  {data.status}
                </Badge>
              </div>
            </DialogTitle>
            <DialogDescription></DialogDescription>
            <div>
              {data.items.map((item) => (
                <div key={item.meal.id} className="py-2">
                  <div className="flex justify-between">
                    <p className="font-bold">{item.meal.name}</p>
                    <div className="flex gap-4">
                      <p>{item.price}₴</p> x<p>{item.quantity}</p>
                    </div>
                  </div>
                  <p>{item.meal.description}</p>
                </div>
              ))}
            </div>
          </DialogHeader>
          <DialogFooter>
            <div>
              <p>Итого: {data.totalPrice} ₴</p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
