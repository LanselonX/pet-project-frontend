"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/src/components/ui/toggle-group";
import { useMealFilter } from "../hooks/use-meal-filter";
import { MealInfo } from "../types/meal-types";
import { Dialog, DialogTrigger } from "@/src/components/ui/dialog";
import { MealDialogContent } from "./meal-dialog-content";
import { MEAL_TYPES, MealName } from "../config/meal-config";
import { getMacronutrients } from "../utils/nutrition.config";

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
              <Card className="w-full rounded-lg overflow-hidden">
                <div className="relative w-full h-48">
                  {meal.imageUrl && (
                    <Image
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={meal.imageUrl}
                      alt={meal.name}
                    />
                  )}
                </div>
                <CardHeader className="p-3">
                  <CardTitle>{meal.name}</CardTitle>
                  <CardDescription>{meal.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  {getMacronutrients(meal.macronutrients).map(
                    ({ label, value }) => (
                      <div
                        key={label}
                        className="flex flex-col items-center border rounded-md mx-0.5 px-3 py-1 flex-1"
                      >
                        <span className="font-semibold text-sm">{value}</span>
                        <span className="text-xs text-muted-foreground">
                          {label}
                        </span>
                      </div>
                    ),
                  )}
                </CardFooter>
              </Card>
            </DialogTrigger>
            <MealDialogContent id={meal.id} />
          </Dialog>
        ))}
      </div>
    </div>
  );
};
