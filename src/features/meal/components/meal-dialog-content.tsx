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

export function MealDialogContent({ id }: { id: number }) {
  const { data } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealById(id),
  });

  const mutation = useAddToCart();

  if (!data) return null;

  return (
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
            <p className="text-sm text-muted-foreground">{data.ingredients}</p>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-2">Микронутриенты:</h2>
            <MacroProgress data={data} />
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
