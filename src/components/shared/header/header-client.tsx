"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
import { useMutation } from "@tanstack/react-query";
import { authLogout } from "@/src/features/auth/api/authLogout";
import { toast } from "sonner";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

export function HeaderClient({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: authLogout,
    onSuccess: () => {
      toast.success("Logout success");
      router.refresh();
    },
    onError: () => {
      toast.error("Logout Error");
    },
  });

  return (
    <header className="flex justify-between items-center px-8 py-4">
      <Link href="/">
        <h1 className="font-bold text-2xl">Pet Project Frontend/Backend</h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {isLoggedIn ? (
            <>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/cart">Cart</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="order">Order</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="link"
                  onClick={() => mutation.mutate()}
                  className={navigationMenuTriggerStyle()}
                >
                  Logout
                </Button>
              </NavigationMenuItem>
            </>
          ) : (
            <NavigationMenuItem className={navigationMenuTriggerStyle()}>
              <Link href="/auth">Login/Registration</Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
