import { api } from "@/src/api/api";

export const getOrderById = async (id: number) => {
  try {
    const response = await api.get(`/orders/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
