import { api } from "@/src/api/api";
import { AddToCartPayload } from "../types/cart.interface";

export default async function addToCart(data: AddToCartPayload) {
  return await api.post<void>(`/cart`, data);
}
