import { Meal } from "@/src/types/interface";
import { ORDER_STATUS_TYPES } from "../config/order-config";

export enum OrderStatus {
  PENDING = "PENDING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELED = "CANCELED",
}

export type OrderStatusType = (typeof ORDER_STATUS_TYPES)[number];

export type OrderTable = {
  id: number;
  status: OrderStatus;
  userId: number;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
};

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
