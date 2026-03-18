interface Micronutrients {
  omega: string;
  magnesium: string;
  vitaminD: string;
  vitaminB: string;
  calcium: string;
  iron: string;
  potassium: string;
  sodium: string;
}

interface Macronutrients {
  calories: string;
  fat: string;
  carbs: string;
  protein: string;
  fiber: string;
  sugars: string;
}

export interface MealCard {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  ingredients: string;
  micronutrients?: Micronutrients;
  macronutrients?: Macronutrients;
}

export interface MealCardProps {
  id: number;
}

export interface Cart {
  mealId: number;
  quantity: number;
}

export interface CartItems {
  items: Cart[];
}
