import { AdminConfig } from "../types/admin-hero-type";
import { Users, Package, ShoppingCart } from "lucide-react";

export const ADMINHERO: AdminConfig[] = [
  { label: "Всего блюд", value: "meals" },
  { label: "Сделано заказов", value: "orders" },
  { label: "Пользователей", value: "users" },
  { label: "Выручка", value: "revenue" },
] as const;

export const QUICK_LINKS = [
  { label: "Пользователи", href: "/admin/users", icon: Users },
  { label: "Блюда", href: "/admin/meals", icon: Package },
  { label: "Заказы", href: "/admin/orders", icon: ShoppingCart },
];
