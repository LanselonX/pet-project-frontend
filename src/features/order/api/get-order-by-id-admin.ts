import { api } from "@/src/api/api";
import { z } from "zod";
import { MEAL_TYPES } from "../../meal/config/meal-config";
import { ORDER_STATUS_TYPES } from "../config/order-config";

export const orderInfoSchema = z.object({
  id: z.string(),
  status: z.enum(ORDER_STATUS_TYPES),
  userId: z.string(),
  totalPrice: z.string(),
  items: z.array(
    z.object({
      id: z.number(),
      orderId: z.number(),
      mealId: z.number(),
      price: z.number(),
      quantity: z.number(),
      meal: z.object({
        id: z.number(),
        name: z.string(),
        type: z.array(z.enum(MEAL_TYPES)),
      }),
    }),
  ),
});

export type OrderInfoSchema = z.infer<typeof orderInfoSchema>;

export const getOrderByIdAdmin = async (
  id: number,
): Promise<OrderInfoSchema> => {
  const response = await api.get(`/orders/admin/${id}`);
  return response.data;
};
