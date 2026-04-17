import { api } from "@/src/api/api";
import { CartItems } from "../types/main-card.types";

export default async function addToCart(data: CartItems) {
  return await api.post(`/cart`, data);
  // return await api.post(`/cart`, data);
}
