"use client";

import { Card } from "@/src/components/ui/card";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/src/components/ui/toggle-group";
import { useMealFilter } from "../hooks/use-meal-filter";
import { MealInfo } from "../types/meal-types";
import { Dialog, DialogTrigger } from "@/src/components/ui/dialog";
import { MealDialogContent } from "./meal-dialog-content";
import { MEAL_TYPES, MealName } from "../config/meal-config";
import { getMacronutrients } from "../utils/nutrition-utils";

export const MealsInfo = () => {
  const { data, handleTypeChange, selectedTypes } = useMealFilter();

  return (
    <div>
      <div className="flex justify-center my-6">
        <ToggleGroup
          multiple
          variant="outline"
          size="lg"
          spacing={2}
          value={selectedTypes}
          onValueChange={(values) => handleTypeChange(values)}
        >
          {MEAL_TYPES.map((type) => (
            <ToggleGroupItem key={type} value={type}>
              {MealName[type]}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
      <div className="grid grid-cols-4 gap-6 px-8">
        {data?.map((meal: MealInfo) => (
          <Dialog key={meal.id}>
            <DialogTrigger asChild>
              <Card className="group p-0 gap-0 overflow-hidden rounded-(--radius) border-border/60 shadow-none transition-shadow duration-200 hover:shadow-lg cursor-pointer">
                <div className="relative aspect-4/3 overflow-hidden bg-muted">
                  {meal.imageUrl && (
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      src={meal.imageUrl}
                      alt={meal.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  )}
                </div>

                <div className="p-4">
                  <h3 className="text-[15px] font-medium leading-tight tracking-tight">
                    {meal.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-snug line-clamp-2 text-pretty">
                    {meal.description}
                  </p>

                  <div className="mt-3 flex items-center justify-between rounded-(--radius) bg-muted/60 px-4 py-3">
                    {getMacronutrients(meal.macronutrients).map(
                      ({ label, value }) => (
                        <div key={label} className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold tabular-nums leading-none">
                            {value}
                          </span>
                          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                            {label}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <MealDialogContent id={meal.id} />
          </Dialog>
        ))}
      </div>
    </div>
  );
};
