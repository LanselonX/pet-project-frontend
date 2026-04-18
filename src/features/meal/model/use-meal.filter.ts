import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllMeals } from "@/entities/meal";

export const useMealFilter = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const { data } = useQuery({
    queryKey: ["meals", selectedTypes],
    queryFn: () => getAllMeals(selectedTypes),
  });

  // TODO: need best practise
  const handleTypeChange = (values: string[]) => {
    setSelectedTypes(values);
    if (values.includes("ALL") || values.length === 0) {
      setSelectedTypes([]);
    } else {
      setSelectedTypes(values);
    }
  };

  return { data, handleTypeChange, selectedTypes };
};
