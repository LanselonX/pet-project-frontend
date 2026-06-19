import { api } from "@/src/api/api";
import { AdminHeroCount } from "../types/admin-hero-type";

export const getCountDashboard = async (): Promise<AdminHeroCount> => {
  const response = await api.get<AdminHeroCount>("dashboard");
  return response.data;
};
