import { api } from "@/src/shared/api/api";
import { CartItems } from "../model/meal-card.types";

export default async function addToCart(data: CartItems) {
  return await api.post(`/cart`, data);
}
