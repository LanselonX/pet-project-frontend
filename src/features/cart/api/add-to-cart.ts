import { api } from "@/src/api/api";

// TODO: change any type
export default async function addToCart(data: any) {
  return await api.post(`/cart`, data);
}
