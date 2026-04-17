"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/shared/ui/card";
import Image from "next/image";
import { Meal } from "@/src/shared/types/interface";
import { ToggleGroup, ToggleGroupItem } from "@/src/shared/ui/toggle-group";
import { MEAL_TYPES, MealName } from "../model/meal-constants";
import { MealDialog } from "./meal-dialog";
import { useMealFilter } from "@/src/features/meal/model/use-meal.filter";

export const MealsInfo = () => {
  const { data, handleTypeChange, selectedTypes } = useMealFilter();

  return (
    <div>
      <div className="flex justify-center">
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
      <div className="grid grid-cols-3 gap-6 p-6">
        {data?.map((meal: Meal) => (
          <Card key={meal.id} className="w-full rounded-lg overflow-hidden">
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
              <MealDialog id={meal.id} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
