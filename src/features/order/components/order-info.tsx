"use client";

import getOrders from "../api/get-orders";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { OrderDialog } from "./order-dialog";
import { OrderInfo } from "../types/order.types";
import { getBadgeStatus } from "../utils/badge-status.utils";
import { PaginationWithLinks } from "@/src/components/shared/pagination-with-link";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export const OrderDetails = () => {
  const { data } = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
  });

  console.log("data is:", data);

  if (!data) return null;
  // TODO: check this!!!
  const orders = data?.data || [];

  if (orders.length === 0) {
    return (
      <div className="mx-auto max-w-4xl py-20 text-center">
        <h2 className="text-lg font-medium">Заказов пока нет</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Здесь появятся ваши оформленные заказы.
        </p>
        <Button asChild variant="outline" className="mt-5">
          <Link href="/meals">Перейти в меню</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {orders?.map((order: OrderInfo) => (
        <div key={order.id}>
          <Card className="rounded-xl p-4 m-4">
            <CardHeader className="flex justify-between">
              <CardTitle>Order number #{order.id}</CardTitle>
              {/* TODO: temporary solution */}
              <span>{new Date(order.createdAt).toDateString()}</span>
            </CardHeader>
            <CardContent className="flex justify-between">
              <p>Финальная цена: {order.totalPrice}₴</p>
              <Badge variant={getBadgeStatus(order.status)}>
                {order.status}
              </Badge>
            </CardContent>
            <CardFooter>
              <OrderDialog id={order.id} />
            </CardFooter>
          </Card>
        </div>
      ))}
      <div>
        {data.totalPages > 1 && (
          <PaginationWithLinks
            page={data.currentPage}
            pageSize={data.totalCount}
            totalCount={data.totalPages}
          />
        )}
      </div>
    </div>
  );
};
