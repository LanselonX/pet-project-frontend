export interface Meal {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export interface IPagination<T> {
  currentPage: number;
  hasNextPage: boolean;
  data: T[];
  totalCount: number;
  totalPages: number;
  // TODO: need to check it
  limit: number;
}
