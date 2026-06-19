import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { getAllMeals } from "../api/get-meals";
import { MealType } from "../types/meal-types";

type MealFilter = Exclude<MealType, "ALL">;

export const useMealFilter = () => {
  const [selectedTypes, setSelectedTypes] = useState<MealFilter[]>([]);

  const { data } = useQuery({
    queryKey: ["meals", selectedTypes],
    queryFn: () => getAllMeals(selectedTypes),
    placeholderData: keepPreviousData,
  });

  const handleTypeChange = useCallback((values: MealType[]) => {
    const next = values.includes("ALL") ? [] : (values as MealFilter[]);
    setSelectedTypes(next);
  }, []);

  return { data, handleTypeChange, selectedTypes };
};
