import { Injectable } from '@angular/core';
import { Category } from './helpers/Category';
import { Note } from './helpers/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  saveCategory(cat: Category) {}

  getCategories(): Category[] {
    return [
      new Category('Category1'),
      new Category('Category2'),
      new Category('Category3'),
    ];
  }

  saveNote(note: Note) {}

  getNotes(): Note[] {
    return null;
  }
}
