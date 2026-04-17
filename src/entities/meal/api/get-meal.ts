import { api } from "@/src/shared/api/api";
import { Meal } from "@/src/shared/types/interface";

export const getAllMeals = async (types: string[]): Promise<Meal[]> => {
  const params = new URLSearchParams();
  types.forEach((type) => params.append("type", type));

  const response = await api.get(`/meals?${params.toString()}`);
  return response.data;
};
