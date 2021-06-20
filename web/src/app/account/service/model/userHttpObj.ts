import { CategoryListHttpObj } from '../../../common/service/notes/model/categoryListHttpObj';
import { CategoryHttpObj } from '../../../common/service/notes/model/categoryHttpObj';
export interface UserHttpObj {
  user: {
    username: string;
    password: string;
    categories?: CategoryHttpObj[];
  };
}
