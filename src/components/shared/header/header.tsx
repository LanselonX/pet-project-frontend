import { cookies } from "next/headers";
import { HeaderClient } from "./header-client";

export async function Header() {
  const cookieStore = await cookies();
  // TODO: mb need boolean
  const isLoggedIn = !!cookieStore.get("Refresh");

  return <HeaderClient isLoggedIn={isLoggedIn} />;
}
