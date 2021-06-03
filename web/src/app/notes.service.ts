import { Injectable } from '@angular/core';
import { Category } from './helpers/Category';
import { Note } from './helpers/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  saveCategory(cat: Category): boolean {
    return true;
  }

  getCategories(): Category[] {
    return [
      new Category('Category1'),
      new Category('Category2'),
      new Category('Category3'),
    ];
  }

  saveNote(note: Note): boolean {
    return true;
  }

  getNotes(): Note[] {
    let cat1 = new Category('Category1');
    cat1.id = 1;
    let cat2 = new Category('Category2');
    cat2.id = 2;
    let cat3 = new Category('Category3');
    cat3.id = 3;

    return [
      new Note('Note1A', cat1),
      new Note('Note2A', cat2),
      new Note('Note2B', cat2),
      new Note('Note3A', cat3),
      new Note('Note3B', cat3),
      new Note('Note3C', cat3),
    ];
  }
}
