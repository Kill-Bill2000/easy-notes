import { Component, OnInit } from '@angular/core';
import { Category } from '../helpers/Category';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.notesService
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
