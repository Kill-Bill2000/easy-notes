import { CategoryHttpObj } from './categoryHttpObj';
export interface CategoryListHttpObj {
  categories: {
    _id: string;
    categories: CategoryHttpObj[];
  };
}
