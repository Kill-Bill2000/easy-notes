import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/helpers/Category';
import { Note } from 'src/app/helpers/Note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor() {}

  public saveCategory(cat: Category): Observable<boolean> {
    return of(true);
  }

  public getCategories(): Observable<Category[]> {
    let cats = new Array<Category>();
    let cat1 = new Category('Category1');
    cat1.id = 1;
    cats.push(cat1);
    let cat2 = new Category('Category2');
    cat2.id = 2;
    cats.push(cat2);
    let cat3 = new Category('Category33');
    cat3.id = 33;
    cats.push(cat3);

    return of(cats);
  }

  public getCategoryFromId(id: number): Observable<Category> {
    let cat: Category;
    switch (id) {
      case 1:
        cat = new Category('Category1');
        cat.id = 1;
        return of(cat);
      case 2:
        cat = new Category('Category2');
        cat.id = 2;
        return of(cat);
      case 33:
        cat = new Category('Category33');
        cat.id = 33;
        return of(cat);
      default:
        return null;
    }
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

      case 'Category33':
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
