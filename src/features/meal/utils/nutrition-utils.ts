import { MACROS } from "../config/nutrition.config";
import { Macronutrients } from "../types/nutrition-types";

export const getMacronutrients = (m: Macronutrients) =>
  MACROS.filter(({ group }) => group === "primary").map(({ label, key }) => ({
    label,
    value: m[key],
  }));
