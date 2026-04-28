import { MEAL_TYPES } from "../config/meal-config";

interface Micronutrients {
  omega: string;
  magnesium: string;
  vitaminD: string;
  vitaminB: string;
  calcium: string;
  iron: string;
  potassium: string;
  sodium: string;
}

export interface Macronutrients {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  fiber: number;
  sugars: number;
}

export interface MealCard {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  ingredients: string;
  micronutrients?: Micronutrients;
  macronutrients?: Macronutrients;
}

export interface MacroConfig {
  label: string;
  key: keyof Macronutrients;
  dv: number;
  group: "primary" | "secondary";
}

export interface MealInfo {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  macronutrients: Macronutrients;
}

export interface MealCardProps {
  id: number;
}

export interface Cart {
  mealId: number;
  quantity: number;
}

export interface CartItems {
  items: Cart[];
}

export type MealType = (typeof MEAL_TYPES)[number];
