"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { PaginationWithLinks } from "@/src/components/shared/pagination-with-link";
import { MealDialog } from "./meal-dialog";
import { IPagination, Meal } from "@/src/types/interface";

export const MealsInfo = ({
  currentPage,
  data,
  totalCount,
  limit,
}: IPagination<Meal>) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 px-8">
        {data.map((meal) => (
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
      <div className="py-4">
        <PaginationWithLinks
          page={currentPage}
          pageSize={limit}
          totalCount={totalCount}
        />
      </div>
    </>
  );
};
