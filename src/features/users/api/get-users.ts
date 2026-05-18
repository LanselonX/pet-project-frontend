import { api } from "@/src/api/api";
import { UserInfo } from "../types/user.interface";
import { cookies } from "next/headers";

export const getAllUsers = async (): Promise<UserInfo[]> => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const response = await api.get(`/users`, {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return response.data;
};
