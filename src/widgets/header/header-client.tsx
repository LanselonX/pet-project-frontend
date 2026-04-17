"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../shared/ui/navigation-menu";
import { Button } from "../../shared/ui/button";
import { useMutation } from "@tanstack/react-query";
import { logout } from "@/src/entities/auth/api/logout";

export function HeaderClient({ isLoggedIn }: { isLoggedIn: boolean }) {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: logout,
  });

  const handleLogout = async () => {
    mutation.mutate();
    // TODOL check this!
    router.refresh();
  };

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
                  onClick={handleLogout}
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
