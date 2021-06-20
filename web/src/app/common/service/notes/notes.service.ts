import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserHttpObj } from 'src/app/account/service/model/userHttpObj';
import { Category } from 'src/app/helpers/Category';
import { Note } from 'src/app/helpers/Note';
import { ConfigService } from '../config/config.service';
import { httpOptions } from '../config/httpConfig';
import { StorageService } from '../storage/storage.service';
import { CategoryListHttpObj } from './model/categoryListHttpObj';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private SERVER_URL: string;
  private userObj: UserHttpObj;

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private storage: StorageService
  ) {
    this.config.getConfig().subscribe((val) => {
      this.SERVER_URL = val.serverURL;
    });
    this.setUserHttpObj();
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  private setUserHttpObj() {
    this.userObj = {
      user: {
        username: this.storage.getUsername(),
        password: this.storage.getPassword(),
      },
    };
  }

  public saveCategory(cat: Category): Observable<boolean> {
    return of(true);
  }

  public getCategories(): Observable<CategoryListHttpObj> {
    let url: string = this.SERVER_URL + '/categories';
    return this.http
      .post<CategoryListHttpObj>(url, this.userObj, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getCategoryFromId(id: number): Observable<Category> {
    // let cat: Category;
    // switch (id) {
    //   case 1:
    //     cat = new Category('Category1');
    //     cat.id = 1;
    //     return of(cat);
    //   case 2:
    //     cat = new Category('Category2');
    //     cat.id = 2;
    //     return of(cat);
    //   case 33:
    //     cat = new Category('Category33');
    //     cat.id = 33;
    //     return of(cat);
    //   default:
    return null;
    // }
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
