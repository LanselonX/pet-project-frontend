"use client";

import getOrders from "../api/get-orders";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui/card";
import { Badge } from "@/src/shared/ui/badge";
import { OrderDialog } from "./order-dialog";
import { useQuery } from "@tanstack/react-query";
import { OrderInfo } from "../model/order.interface";
import { orderBadge } from "@/src/features/order/ui/order-badge";
import { PaginationWithLinks } from "@/src/widgets/pagination-with-link";

export const OrderDetails = () => {
  const { data } = useQuery({
    queryKey: ["order"],
    queryFn: getOrders,
  });

  console.log("data is:", data);

  if (!data) return null;
  // TODO: check this!!!
  const orders = data?.data || [];

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {orders?.map((order: OrderInfo) => (
        <div key={order.id}>
          <Card className="rouneded-xl p-4 m-4">
            <CardHeader className="flex justify-between">
              <CardTitle>Order number #{order.id}</CardTitle>
              {/* TODO: temporary solution */}
              <span>{new Date(order.createdAt).toDateString()}</span>
            </CardHeader>
            <CardContent className="flex justify-between">
              <p>Финальная цена: {order.totalPrice}₴</p>
              <Badge variant={orderBadge(order.status)}>{order.status}</Badge>
            </CardContent>
            <CardFooter>
              <OrderDialog id={order.id} />
            </CardFooter>
          </Card>
        </div>
      ))}
      <div>
        <PaginationWithLinks
          page={data.currentPage}
          pageSize={data.totalCount}
          totalCount={data.totalPages}
        />
      </div>
    </div>
  );
};
