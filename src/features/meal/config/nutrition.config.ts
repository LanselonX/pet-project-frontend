import {
  AdminMacroConfig,
  AdminMicroConfig,
  MacroConfig,
} from "../types/nutrition-types";

export const MACROS: MacroConfig[] = [
  { label: "Calories", key: "calories", dv: 2000, group: "primary" },
  { label: "Protein", key: "protein", dv: 50, group: "primary" },
  { label: "Carbs", key: "carbs", dv: 275, group: "primary" },
  { label: "Fat", key: "fat", dv: 75, group: "primary" },
  { label: "Sugars", key: "sugars", dv: 28, group: "secondary" },
  { label: "Fiber", key: "fiber", dv: 50, group: "secondary" },
] as const satisfies MacroConfig[];

export const ADMINMACRO: AdminMacroConfig[] = [
  { name: "macronutrients.fat", label: "Жиры", unit: "kcal" },
  { name: "macronutrients.carbs", label: "Углеводы", unit: "g" },
  { name: "macronutrients.protein", label: "Белки", unit: "g" },
  { name: "macronutrients.fiber", label: "Клетчатка", unit: "g" },
  { name: "macronutrients.sugars", label: "Сахара", unit: "g" },
] as const;

export const ADMINMICRO: AdminMicroConfig[] = [
  { name: "micronutrients.omega", label: "Омега", unit: "mg" },
  { name: "micronutrients.magnesium", label: "Магний", unit: "mg" },
  {
    name: "micronutrients.vitaminB",
    label: "Витамин B",
    unit: "μg",
  },
  {
    name: "micronutrients.vitaminD",
    label: "Витамин D",
    unit: "μg",
  },
  { name: "micronutrients.calcium", label: "Кальций", unit: "mg" },
  { name: "micronutrients.iron", label: "Железо", unit: "mg" },
  { name: "micronutrients.potassium", label: "Калий", unit: "mg" },
  { name: "micronutrients.sodium", label: "Натрий", unit: "mg" },
] as const;
