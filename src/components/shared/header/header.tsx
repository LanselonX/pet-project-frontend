import { cookies } from "next/headers";
import { HeaderClient } from "./header-client";

export async function Header() {
  const cookieStore = await cookies();
  // TODO: mb need boolean
  const isLoggedIn = !!cookieStore.get("Authentication");

  return <HeaderClient isLoggedIn={isLoggedIn} />;
}
