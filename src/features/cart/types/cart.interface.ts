import { Meal } from "@/src/types/interface";

export interface CartItems {
  mealId: number;
  price: number;
  quantity: number;
  meal: Meal;
}

export interface Cart {
  items: CartItems[];
}

export interface CartResponse {
  items: CartItems[];
  totalPrice: number;
}
