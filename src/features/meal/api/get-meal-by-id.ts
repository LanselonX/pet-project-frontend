import { api } from "@/src/api/api";
import { z } from "zod";

export const mealInfoSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  description: z.string(),
  ingredients: z.string(),
  imageUrl: z.string(),
  price: z.number(),
  chefId: z.string().nullable(),
  macronutrients: z.object({
    calories: z.number(),
    fat: z.number(),
    carbs: z.number(),
    protein: z.number(),
    fiber: z.number(),
    sugars: z.number(),
  }),
  micronutrients: z.object({
    omega: z.number(),
    magnesium: z.number(),
    vitaminB: z.number(),
    vitaminD: z.number(),
    calcium: z.number(),
    iron: z.number(),
    potassium: z.number(),
    sodium: z.number(),
  }),
});

export type MealInfoSchema = z.infer<typeof mealInfoSchema>;

export const getMealById = async (id: number): Promise<MealInfoSchema> => {
  const response = await api.get(`/meals/${id}`);
  return response.data;
};
