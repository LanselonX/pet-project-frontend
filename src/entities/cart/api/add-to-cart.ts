import { api } from "@/shared/api/api";
import { AddToCartDto } from "../model/cart.interface";

export async function addToCart(data: AddToCartDto) {
  return await api.post(`/cart`, data);
}
