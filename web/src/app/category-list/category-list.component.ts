import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NotesService } from '../common/service/notes/notes.service';
import { Category } from '../helpers/Category';
import { CategoryHttpObj } from '../common/service/notes/model/categoryHttpObj';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: CategoryHttpObj[] = [];
  fieldShown = false;
  addButtonShown = true;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {}

  public updateCategories() {
    this.categories = [];

    this.notesService.getCategories().subscribe((result) => {
      for (const cat of result.categories[0].categories) {
        this.categories.push({ title: cat.title, _id: cat._id });
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
    let newCategory: CategoryHttpObj = { title: categoryName };

    this.notesService.getCategories().subscribe((catList) => {
      catList.categories[0].categories.push(newCategory);

      this.notesService.updateCategoryList(catList).subscribe(() => {
        this.updateCategories();
        this.toggleField(false);
      });
    });
  }

  public deleteCategory(deleteCat: CategoryHttpObj) {
    this.notesService.getCategories().subscribe((catList) => {
      let indexCat = catList.categories[0].categories.findIndex(
        (elem) => elem._id === deleteCat._id
      );

      if (indexCat < 0) {
        return;
      }

      catList.categories[0].categories.splice(indexCat, 1);

      this.notesService
        .updateCategoryList(catList)
        .subscribe(() => this.updateCategories());
    });
  }
}
