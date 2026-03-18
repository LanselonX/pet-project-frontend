import { api } from "@/src/api/api";

export const getCart = async () => {
  try {
    const response = await api.get(`/cart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
