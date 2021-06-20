export class Category {
  public title: string;
  public id: string;

  constructor(title: string, id?: string) {
    this.title = title;
    this.id = id != null ? id : '';
  }
}
