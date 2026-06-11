"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useAuthMutation<TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  messages: { success: string; error: string },
) {
  const router = useRouter();

  return useMutation({
    mutationFn: mutationFn,
    onSuccess: () => {
      toast.success(messages.success);
      router.push("/meals");
      router.refresh();
    },
    onError: () => {
      toast.error(messages.error);
    },
  });
}
