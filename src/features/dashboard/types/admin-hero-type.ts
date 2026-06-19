interface OrderUser {
  name: string;
}

export interface PendingOrder {
  id: number;
  status: string;
  userId: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
  user: OrderUser;
}

export interface AdminHeroCount {
  meals: number;
  users: number;
  orders: number;
  revuene: number;
  pendingOrders: PendingOrder[];
}

export interface AdminConfig {
  label: string;
  value: Extract<
    keyof AdminHeroCount,
    "meals" | "users" | "orders" | "revuene"
  >;
}
