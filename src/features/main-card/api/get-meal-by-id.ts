import { api } from "@/src/api/api";
import { MealCard } from "../types/main-card.interface";

export const getMealById = async (id: number): Promise<MealCard> => {
  const response = await api.get(`/meals/info/${id}`);
  return response.data;
};
