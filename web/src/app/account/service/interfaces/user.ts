import { Category } from './category';

export interface User {
  username: string;
  password: string;
  categories?: Category[];
}
