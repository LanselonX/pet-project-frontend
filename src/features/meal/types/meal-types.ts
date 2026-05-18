import { MEAL_TYPES } from "../config/meal-config";
import { Macronutrients, Micronutrients } from "./nutrition-types";

export type MealType = (typeof MEAL_TYPES)[number];

export type MealTable = {
  id: number;
  name: string;
  price: string;
  chefId: string;
  createdAt: string;
  updatedAt: string;
};

export interface MealCard {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  ingredients: string;
  micronutrients?: Micronutrients;
  macronutrients?: Macronutrients;
}

export interface MealInfo {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  macronutrients: Macronutrients;
}
