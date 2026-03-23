import { api } from "@/src/api/api";

export const getAllMeals = async ({
  page = 1,
  limit = 6,
}: {
  page: number;
  limit: number;
}) => {
  try {
    const response = await api.get(`/meals`, {
      params: { page, limit },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
