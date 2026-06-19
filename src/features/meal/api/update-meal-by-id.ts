import { api } from "@/src/api/api";
import { MealInfoSchema } from "./get-meal-by-id";

export type UpdateMealPaylaod = Omit<MealInfoSchema, "id">;

export const updateMeal = async (id: number, values: UpdateMealPaylaod) => {
  const response = await api.patch(`/meals/admin/${id}`, values);
  return response.data;
};
