"use client";

import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  getOrderByIdAdmin,
  orderInfoSchema,
  OrderInfoSchema,
} from "../api/get-order-by-id-admin";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { MealName } from "../../meal/config/meal-config";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { OrderStatusName } from "../config/order-config";

interface OrderInfoAdminIdProps {
  id: number;
}

export const OrderInfoAdmin = ({ id }: OrderInfoAdminIdProps) => {
  const form = useForm<OrderInfoSchema>({
    resolver: zodResolver(orderInfoSchema),
    defaultValues: {
      id: "",
      status: "PENDING",
      userId: "",
      totalPrice: "",
      items: [],
    },
  });

  const { data } = useQuery({
    queryKey: ["orderId", id],
    queryFn: () => getOrderByIdAdmin(id),
  });

  useEffect(() => {
    if (data) {
      form.reset({
        id: String(data.id) ?? "",
        status: data.status ?? "PENDING",
        userId: data.userId ?? "",
        totalPrice: data.totalPrice ?? "",
        items: data.items.map((item) => ({
          id: item.id,
          orderId: item.orderId,
          mealId: item.mealId,
          price: item.price,
          quantity: item.quantity,
          meal: {
            id: item.meal.id,
            name: item.meal.name,
            type: item.meal.type,
          },
        })),
      });
    }
  }, [data, form]);

  const onSubmit = (values: OrderInfoSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ID</FormLabel>
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Финальная цена: </FormLabel>
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Статус: </FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите статус:" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(OrderStatusName).map(([value, label]) => (
                    <SelectItem key={value} value={label}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <div className="space-y-3 mt-4 grid grid-cols-3 gap-4">
          {form.watch("items").map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg border border-border p-4 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <FormField
                    control={form.control}
                    name={`items.${index}.meal.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs text-muted-foreground">
                          Блюдо
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="h-8 text-sm font-medium"
                            disabled
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-1 flex-wrap">
                    {item.meal.type.map((type) => (
                      <span
                        key={type}
                        className="inline-block text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {MealName[type]}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-muted-foreground mb-1">Цена</p>
                  <p className="text-base font-medium">{item.price} ₴</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="rounded-md bg-muted px-3 py-2">
                  <p className="text-xs text-muted-foreground">Meal ID</p>
                  <p className="text-sm font-medium">#{item.mealId}</p>
                </div>
                <div className="rounded-md bg-muted px-3 py-2">
                  <p className="text-xs text-muted-foreground">Order ID</p>
                  <p className="text-sm font-medium">#{item.orderId}</p>
                </div>
                <div className="rounded-md bg-muted px-3 py-2">
                  <p className="text-xs text-muted-foreground">Количество</p>
                  <p className="text-sm font-medium">× {item.quantity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button type="submit" className="px-6">
          Сохранить
        </Button>
      </form>
    </Form>
  );
};
