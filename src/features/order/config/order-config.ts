import { OrderStatusType } from "../types/order.types";

export const ORDER_STATUS_TYPES = [
  "PENDING",
  "SHIPPED",
  "DELIVERED",
  "CANCELED",
] as const;

export const OrderStatusName: Record<OrderStatusType, string> = {
  PENDING: "Pending",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELED: "Canceled",
};
