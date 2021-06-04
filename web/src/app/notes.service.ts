import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './helpers/Category';
import { Note } from './helpers/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  public saveCategory(cat: Category): Observable<boolean> {
    return of(true);
  }

  public getCategories(): Observable<Category[]> {
    return of([
      new Category('Category1'),
      new Category('Category2'),
      new Category('Category3'),
    ]);
  }

  public saveNote(note: Note): Observable<boolean> {
    return of(true);
  }

  public getNotesOfCategory(cat: Category): Observable<Note[]> {
    switch (cat.title) {
      case 'Category1':
        return of([new Note('Note1A', cat)]);

      case 'Category2':
        return of([new Note('Note2A', cat), new Note('Note2B', cat)]);

      case 'Category3':
        return of([
          new Note('Note3A', cat),
          new Note('Note3B', cat),
          new Note('Note3C', cat),
        ]);

      default:
        return null;
    }
  }

  public deleteNote(note: Note): Observable<boolean> {
    return of(true);
  }
}
