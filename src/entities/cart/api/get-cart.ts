import { api } from "@/src/shared/api/api";
import { CartResponse } from "../model/cart.interface";

export const getCart = async (): Promise<CartResponse> => {
  const response = await api.get(`/cart`);
  return response.data;
};
