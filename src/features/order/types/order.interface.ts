import { Meal } from "@/src/types/interface";

export enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

export interface OrderInfo {
  id: number;
  totalPrice: number;
  status: OrderStatus;
  createdAt: Date;
}

export interface OrderItems {
  price: number;
  quantity: number;
  meal: Meal;
}

export interface OrderInfoId {
  id: number;
  createdAt: Date;
  totalPrice: number;
  status: OrderStatus;
  items: OrderItems[];
}

export interface OrderIdProps {
  id: number;
}
