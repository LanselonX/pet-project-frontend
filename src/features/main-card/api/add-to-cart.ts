import { api } from "@/src/api/api";
import { CartItems } from "../types/main-card.interface";

export default async function addToCart(data: CartItems) {
  try {
    return await api.post(`/cart`, data);
  } catch (error) {
    console.log(error);
  }
}
