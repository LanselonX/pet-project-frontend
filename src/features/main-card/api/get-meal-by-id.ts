import { api } from "@/src/api/api";

export const getMealById = async (id: number) => {
  try {
    const response = await api.get(`/meals/info/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
