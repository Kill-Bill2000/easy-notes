import { Category } from './Category';
export class Note {
  public description: string;
  public checked = false;
  public category: Category;

  constructor(description: string, category: Category) {
    this.description = description;
    this.category = category;
  }
}
