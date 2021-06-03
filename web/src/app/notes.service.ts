import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './helpers/Category';
import { Note } from './helpers/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  saveCategory(cat: Category): Observable<boolean> {
    return of(true);
  }

  getCategories(): Observable<Category[]> {
    return of([
      new Category('Category1'),
      new Category('Category2'),
      new Category('Category3'),
    ]);
  }

  saveNote(note: Note): Observable<boolean> {
    return of(true);
  }

  getNotes(): Observable<Note[]> {
    let cat1 = new Category('Category1');
    cat1.id = 1;
    let cat2 = new Category('Category2');
    cat2.id = 2;
    let cat3 = new Category('Category3');
    cat3.id = 3;

    return of([
      new Note('Note1A', cat1),
      new Note('Note2A', cat2),
      new Note('Note2B', cat2),
      new Note('Note3A', cat3),
      new Note('Note3B', cat3),
      new Note('Note3C', cat3),
    ]);
  }
}
