import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotesService } from '../common/service/notes/notes.service';
import { Category } from '../helpers/Category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[] = [];
  fieldShown = false;
  addButtonShown = true;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  public updateCategories() {
    this.categories = [];

    this.notesService.getCategories().subscribe((result) => {
      for (const cat of result.categories[0].categories) {
        this.categories.push(new Category(cat.title, cat._id));
      }
    });
  }

  private toggleField(fieldVisible: boolean) {
    if (fieldVisible) {
      this.fieldShown = true;
      this.addButtonShown = false;
    } else {
      this.fieldShown = false;
      this.addButtonShown = true;
    }
  }

  public showField() {
    this.toggleField(true);
  }

  public addCategory(categoryName: string) {
    this.notesService.saveCategory(new Category(categoryName));
    console.log(categoryName);
    this.toggleField(false);
  }
}
