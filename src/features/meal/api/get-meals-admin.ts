import { api } from "@/src/api/api";
import { cookies } from "next/headers";

export const getAllMealsAdmin = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const response = await api.get(`/meals/admin`, {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return response.data;
};
