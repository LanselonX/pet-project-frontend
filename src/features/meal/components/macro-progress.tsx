import { Progress } from "@/src/components/ui/progress";
import { MealCard } from "../types/meal-types";
import { MACROS } from "../config/nutrition.config";

export const MacroProgress = ({ data }: { data: MealCard }) => {
  return (
    <div>
      {MACROS.map(({ key, label, dv }) => {
        const value = data.macronutrients?.[key] ?? 0;
        const pct = Math.min(Math.round((value / dv) * 100), 100);

        return (
          <div key={key} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{label}</span>
              <span>{pct}%</span>
            </div>
            <Progress value={pct} />
          </div>
        );
      })}
    </div>
  );
};
