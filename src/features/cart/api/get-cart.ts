import { api } from "@/src/api/api";
import { CartResponse } from "../types/cart.interface";

export const getCart = async (): Promise<CartResponse> => {
  const response = await api.get(`/cart`);
  return response.data;
};
