export class Category {
  public title: string;
  public id: number;

  constructor(title: string, id?: number) {
    this.title = title;
    this.id = id != null ? id : null;
  }
}
