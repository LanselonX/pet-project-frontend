import { MacroConfig } from "../types/meal-types";

export const MACROS: MacroConfig[] = [
  { label: "Calories", key: "calories", dv: 2000, group: "primary" },
  { label: "Protein", key: "protein", dv: 50, group: "primary" },
  { label: "Carbs", key: "carbs", dv: 275, group: "primary" },
  { label: "Fat", key: "fat", dv: 75, group: "primary" },
  { label: "Sugars", key: "sugars", dv: 28, group: "secondary" },
  { label: "Fiber", key: "fiber", dv: 50, group: "secondary" },
] as const satisfies MacroConfig[];
