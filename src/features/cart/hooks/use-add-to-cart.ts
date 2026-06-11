"use client";

import { useMutation } from "@tanstack/react-query";
import addToCart from "../api/add-to-cart";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const useAddToCart = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (mealId: string) =>
      addToCart({ items: [{ mealId, quantity: 1 }] }),
    onSuccess: () => {
      toast.success("Successfully added to cart");
      router.push("/cart");
    },
    onError: () => {
      toast.error("Error adding to cart");
    },
  });
};
