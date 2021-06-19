import { Component, OnInit } from '@angular/core';
import { CookiesService } from '../common/service/cookies/cookies.service';
import { Category } from '../helpers/Category';
import { NotesService } from '../note-card/service/notes.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[];
  fieldShown = false;
  addButtonShown = true;

  constructor(
    private notesService: NotesService,
    private cookiesService: CookiesService
  ) {}

  ngOnInit(): void {
    this.notesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
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
