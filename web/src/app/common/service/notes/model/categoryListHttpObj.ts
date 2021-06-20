import { CategoryHttpObj } from './categoryHttpObj';
export interface CategoryListHttpObj {
  categories: CategoryElementHttpObj[];
}

export interface CategoryElementHttpObj {
  _id: string;
  categories: CategoryHttpObj[];
}
