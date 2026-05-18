"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getMealById,
  mealInfoSchema,
  MealInfoSchema,
} from "../api/get-meal-by-id";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { useEffect } from "react";
import { Textarea } from "@/src/components/ui/textarea";
import { ADMINMACRO, ADMINMICRO } from "../config/nutrition.config";
import UnitInput from "./unit-input";

export const AdminMealForm = ({ id }: { id: number }) => {
  const form = useForm<MealInfoSchema>({
    resolver: zodResolver(mealInfoSchema),
    defaultValues: {
      id: "",
      name: "",
      description: "",
      ingredients: "",
      imageUrl: "",
      price: 0,
      chefId: null,
      macronutrients: {
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
        fiber: 0,
        sugars: 0,
      },
      micronutrients: {
        omega: 0,
        magnesium: 0,
        vitaminB: 0,
        vitaminD: 0,
        calcium: 0,
        iron: 0,
        potassium: 0,
        sodium: 0,
      },
    },
  });

  const { data } = useQuery({
    queryKey: ["meal", id],
    queryFn: () => getMealById(id),
  });

  useEffect(() => {
    if (data) {
      const macro = data.macronutrients;
      const micro = data.micronutrients;

      form.reset({
        id: String(data.id),
        name: data.name ?? "",
        description: data.description ?? "",
        ingredients: data.ingredients ?? "",
        imageUrl: data.imageUrl ?? "",
        price: data.price ?? 0,
        chefId: data.chefId ? String(data.chefId) : null,
        macronutrients: {
          calories: Number(macro?.calories ?? 0),
          fat: Number(macro?.fat ?? 0),
          carbs: Number(macro?.carbs ?? 0),
          protein: Number(macro?.protein ?? 0),
          fiber: Number(macro?.fiber ?? 0),
          sugars: Number(macro?.sugars ?? 0),
        },
        micronutrients: {
          omega: Number(micro?.omega ?? 0),
          magnesium: Number(micro?.magnesium ?? 0),
          vitaminB: Number(micro?.vitaminB ?? 0),
          vitaminD: Number(micro?.vitaminD ?? 0),
          calcium: Number(micro?.calcium ?? 0),
          iron: Number(micro?.iron ?? 0),
          potassium: Number(micro?.potassium ?? 0),
          sodium: Number(micro?.sodium ?? 0),
        },
      });
    }
  }, [data, form]);

  // TODO: update it later!
  const onSubmit = (values: MealInfoSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="pb-10">
        {/* ID — readonly */}
        <div className="mb-6">
          <p className="text-[10px] uppercase tracking-widest font-medium text-muted-foreground mb-1">
            meal / id
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            {form.watch("id") || "—"}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Название
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Цена
                </FormLabel>
                <FormControl>
                  <UnitInput type="number" unit="₴" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Описание
                </FormLabel>
                <FormControl>
                  <Textarea className="resize-none min-h-18" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4">
          <FormField
            control={form.control}
            name="ingredients"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Ингредиенты
                </FormLabel>
                <FormControl>
                  <Textarea className="resize-none min-h-14" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <FormField
            control={form.control}
            name="chefId"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Chef ID
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="не назначен"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => field.onChange(e.target.value || null)}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  URL изображения
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          {ADMINMACRO.map(({ name, label, unit }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <UnitInput
                      type="number"
                      unit={unit}
                      {...field}
                      value={(field.value as number) ?? 0}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {ADMINMICRO.map(({ name, label, unit }) => (
            <FormField
              key={name}
              control={form.control}
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {label}
                  </FormLabel>
                  <FormControl>
                    <UnitInput
                      type="number"
                      unit={unit}
                      value={(field.value as number) ?? 0}
                      onChange={(e) => field.onChange(e.target.valueAsNumber)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </div>

        <div className="flex gap-3 mt-10 pt-6 border-t border-border">
          <Button type="submit" className="px-6">
            Сохранить
          </Button>
          <Button type="button" variant="ghost">
            Отмена
          </Button>
        </div>
      </form>
    </Form>
  );
};
