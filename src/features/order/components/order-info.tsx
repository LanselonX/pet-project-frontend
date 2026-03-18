"use client";

import { useData } from "@/src/hooks/use-data";
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
import { OrderInfo } from "../types/order.interface";
import { getBadgeStatus } from "../utils/badge-status.utils";
import { PaginationWithLinks } from "@/src/components/shared/pagination-with-link";
import { IPagination } from "@/src/types/interface";

export const OrderDetails = () => {
  const { data } = useData<IPagination<OrderInfo>>(getOrders);
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
        <PaginationWithLinks
          page={data.currentPage}
          pageSize={data.totalCount}
          totalCount={data.totalPages}
        />
      </div>
    </div>
  );
};
