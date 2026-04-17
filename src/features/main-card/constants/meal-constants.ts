import { MealType } from "../types/main-card.types";

export const MEAL_TYPES = [
  "ALL",
  "VEGETARIAN",
  "NOT_SPICY",
  "GLUTEN_FREE",
  "LOW_CARB",
] as const;

export const MealName: Record<MealType, string> = {
  ALL: "All",
  VEGETARIAN: "Vegetarian",
  NOT_SPICY: "Not Spicy",
  GLUTEN_FREE: "Gluten Free",
  LOW_CARB: "Low Carb",
};
