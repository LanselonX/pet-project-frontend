import { Settings2, ShieldCheck, ShoppingCart } from "lucide-react";

export const HeroLinks = [
  {
    title: "Frontend",
    href: "https://github.com/LanselonX/pet-project-frontend",
  },
  {
    title: "Backend",
    href: "https://github.com/LanselonX/pet-project-backend",
  },
];

export const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Auth",
    description: "JWT + refresh tokens, role-based access control",
  },
  {
    icon: ShoppingCart,
    title: "Cart & orders",
    description: "Add to cart, checkout, track order status",
  },
  {
    icon: Settings2,
    title: "Admin panel",
    description: "Manage meals, users and orders",
  },
];

export const STACK = [
  "NestJS",
  "Next.js 15",
  "Prisma",
  "PostgreSQL",
  "React Query",
  "Tailwind v4",
  "Docker",
];
