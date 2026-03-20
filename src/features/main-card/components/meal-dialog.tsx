"use client";

import { getMealById } from "../api/get-meal-by-id";
import { Button } from "@/src/components/ui/button";
import addToCart from "../api/add-to-cart";
import Image from "next/image";
import {
  type MealCard,
  type MealCardProps,
} from "../types/main-card.interface";
import { useData } from "@/src/hooks/use-data";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { useCallback } from "react";

export function MealDialog({ id }: MealCardProps) {
  const cachedData = useCallback(() => getMealById(id), [id]);
  const { data } = useData<MealCard>(cachedData);
  console.log("data is here:", data);

  if (!data) return null;

  const mealId = data.id;

  // TODO: update this logic!
  const items = [{ mealId: mealId, quantity: 1 }];

  function cartSubmit() {
    addToCart({ items });
    console.log("submit is worked", { items });
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Подробнее о блюде</Button>
        </DialogTrigger>
        <DialogContent className="max-w-none! w-[50vw]!">
          <DialogHeader>
            <DialogTitle>{data.name}</DialogTitle>
            <DialogDescription>{data.description}</DialogDescription>
          </DialogHeader>

          <div className="flex gap-6">
            {data.imageUrl && (
              <Image
                className="object-cover rounded-md shrink-0"
                src={data.imageUrl}
                alt={data.name}
                width={340}
                height={340}
              />
            )}

            <div className="flex flex-col gap-4 flex-1">
              <div>
                <h1 className="text-xl font-medium mb-1">Состав</h1>
                <p className="text-sm text-muted-foreground">
                  {data.ingredients}
                </p>
              </div>

              <div className="flex gap-8">
                <div>
                  <h2 className="text-lg font-medium mb-2">Макронутриенты</h2>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="text-muted-foreground">Жиры:</span>{" "}
                      {data?.macronutrients?.fat}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Калории:</span>{" "}
                      {data?.macronutrients?.calories}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Углеводы:</span>{" "}
                      {data?.macronutrients?.carbs}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Белки:</span>{" "}
                      {data?.macronutrients?.protein}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Клетчатка:</span>{" "}
                      {data?.macronutrients?.fiber}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Сахара:</span>{" "}
                      {data?.macronutrients?.sugars}
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-medium mb-2">Микронутриенты</h2>
                  <ul className="text-sm space-y-1">
                    <li>
                      <span className="text-muted-foreground">Омега:</span>{" "}
                      {data?.micronutrients?.omega}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Магний:</span>{" "}
                      {data?.micronutrients?.magnesium}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Витамин D:</span>{" "}
                      {data?.micronutrients?.vitaminD}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Витамин B:</span>{" "}
                      {data?.micronutrients?.vitaminB}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Кальций:</span>{" "}
                      {data?.micronutrients?.calcium}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Железо:</span>{" "}
                      {data?.micronutrients?.iron}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Калий:</span>{" "}
                      {data?.micronutrients?.potassium}
                    </li>
                    <li>
                      <span className="text-muted-foreground">Натрий:</span>{" "}
                      {data?.micronutrients?.sodium}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="secondary"
              type="button"
              onClick={cartSubmit}
              className="w-full"
            >
              Add to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
