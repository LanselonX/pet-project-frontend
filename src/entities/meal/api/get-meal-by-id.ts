import { api } from "@/shared/api/api";
import { MealCard } from "../model/meal-card.types";

export const getMealById = async (id: number): Promise<MealCard> => {
  const response = await api.get(`/meals/info/${id}`);
  return response.data;
};
