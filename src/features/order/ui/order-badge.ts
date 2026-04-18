import { OrderStatus } from "@/entities/order";

export function orderBadge(status: OrderStatus) {
  switch (status) {
    case OrderStatus.PENDING:
      return "outline";
    case OrderStatus.SHIPPED:
      return "outline";
    case OrderStatus.DELIVERED:
      return "secondary";
    case OrderStatus.CANCELED:
      return "destructive";
    default:
      return "outline";
  }
}
