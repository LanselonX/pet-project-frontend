import { api } from "@/src/api/api";
import { MealInfo } from "../types/meal-types";

export const getAllMeals = async (types?: string[]): Promise<MealInfo[]> => {
  const params = new URLSearchParams();

  // TODO: check it!
  types?.forEach((type) => params.append("type", type));

  const response = await api.get(`/meals?${params.toString()}`);
  return response.data;
};
