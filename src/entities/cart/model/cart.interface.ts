import { Meal } from "@/shared/types";

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

// TODO: test interface
export interface AddToCartItemDto {
  mealId: number;
  quantity: number;
}

export interface AddToCartDto {
  items: AddToCartItemDto[];
}
