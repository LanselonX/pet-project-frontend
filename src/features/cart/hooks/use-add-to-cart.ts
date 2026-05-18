import { useMutation } from "@tanstack/react-query";
import addToCart from "../api/add-to-cart";

// TODO: need shadcn alert!
export const useAddToCart = () => {
  return useMutation({
    mutationFn: (mealId: string) =>
      addToCart({ items: [{ mealId, quantity: 1 }] }),
  });
};
