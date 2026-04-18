"use client";

import Image from "next/image";
import cartImage from "../../../public/empty-cart-2.svg";
import { getCart } from "../api/get-cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../../order/api/create.order";
import { Button } from "@/shared/ui/button";

export const Cart = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleCreateOrder = () => {
    return mutation.mutate();
  };

  if (data && data.items.length > 0) {
    return (
      <div>
        <div className="flex gap-8 items-start px-6">
          {/* TODO: need normal styles */}
          <div className="flex-1 border-2 border-indigo-600 ">
            {data?.items?.map((item) => (
              <div
                key={item.meal.id}
                className="border-2 border-indigo-600 p-4 m-4"
              >
                <div className="flex gap-4">
                  <div>
                    {item.meal.imageUrl && (
                      <Image
                        src={item.meal.imageUrl}
                        alt={item.meal.name}
                        width={120}
                        height={120}
                      />
                    )}
                  </div>
                  <div className="flex flex-1 justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <p className="font-bold"> {item.meal.name}</p>
                      <p> description: {item.meal.description}</p>
                      <div className="flex justify-between mt-4 font-light">
                        <p>Количество: {item.quantity}</p>
                        <p>
                          Сумма за все товары: {item.price * item.quantity} ₴
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <p className="font-bold text-xl">{item.price}₴</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-96 border-2 border-indigo-600 rounded-2xl p-6 flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">К оплате</h2>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              {data.items?.map((item) => (
                <div
                  key={item.meal.id}
                  className="bg-gray-100 rounded-xl px-4 py-3 flex justify-between items-center"
                >
                  <div className="flex flex-col">
                    <h1 className="font-medium text-gray-800">
                      {item.meal.name}
                    </h1>
                    <p className="text-gray-600 text-sm">
                      {item.quantity} × {item.price} ₴ ={" "}
                      {item.price * item.quantity} ₴
                    </p>
                  </div>

                  <div className="font-bold text-gray-800 text-lg">
                    {item.price * item.quantity} ₴
                  </div>
                </div>
              ))}

              <div className="mt-4 text-right font-semibold text-lg text-indigo-600">
                Итого: {data.totalPrice} ₴
              </div>
            </div>

            <Button className="mt-6" onClick={handleCreateOrder}>
              Confirm Order
            </Button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <Image src={cartImage} alt="cart-image" width={720} height={420} />;
      </div>
    );
  }
};
