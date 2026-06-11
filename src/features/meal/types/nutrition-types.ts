import { Path } from "react-hook-form";
import { MealInfoSchema } from "../api/get-meal-by-id";

export interface Micronutrients {
  omega: number;
  magnesium: number;
  vitaminD: number;
  vitaminB: number;
  calcium: number;
  iron: number;
  potassium: number;
  sodium: number;
}

export interface Macronutrients {
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
  fiber: number;
  sugars: number;
}

export interface MacroConfig {
  label: string;
  key: keyof Macronutrients;
  dv: number;
  group: "primary" | "secondary";
}

export interface MicroConfig {
  label: string;
  value: keyof Micronutrients;
}

export interface AdminMacroConfig {
  name: Path<MealInfoSchema>;
  label: string;
  unit: string;
}

export interface AdminMicroConfig {
  name: Path<MealInfoSchema>;
  label: string;
  unit: string;
}
