"use client";

import { getMealById } from "../api/get-meal-by-id";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import { MacroProgress } from "./macro-progress";
import { useAddToCart } from "../../cart/hooks/use-add-to-cart";
import { MICROS } from "../config/nutrition.config";

export function MealDialogContent({ id }: { id: number }) {
  const { data } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealById(id),
  });

  const mutation = useAddToCart();

  if (!data) return null;

  return (
    <DialogContent className="w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>{data.name}</DialogTitle>
        <DialogDescription>{data.description}</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative w-full md:w-85 shrink-0 self-stretch min-h-60 rounded-md overflow-hidden">
          {data.imageUrl && (
            <Image
              className="object-cover"
              src={data.imageUrl}
              alt={data.name}
              fill
            />
          )}
        </div>
        <div className="flex flex-col gap-4 flex-1 min-w-0">
          <div>
            <h1 className="text-xl font-medium mb-1">Состав</h1>
            <p className="text-sm text-muted-foreground">{data.ingredients}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium mb-2">Макронутриенты:</h2>
            <MacroProgress data={data} />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {MICROS.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center justify-between border-b border-border/40 pb-1"
              >
                <span className="text-muted-foreground">{label}</span>
                <span className="font-medium tabular-nums">
                  {data.micronutrients?.[value]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DialogFooter>
        <Button
          variant="secondary"
          type="button"
          onClick={() => mutation.mutate(data.id)}
          className="w-full"
        >
          Add to Cart
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
