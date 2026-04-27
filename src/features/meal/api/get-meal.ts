import { api } from "@/src/api/api";
import { Meal } from "@/src/types/interface";
import { MealInfo } from "../types/meal-types";

export const getAllMeals = async (types: string[]): Promise<MealInfo[]> => {
  const params = new URLSearchParams();
  types.forEach((type) => params.append("type", type));

  const response = await api.get(`/meals?${params.toString()}`);
  return response.data;
};
