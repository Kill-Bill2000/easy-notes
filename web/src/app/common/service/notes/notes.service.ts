import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, filter, find } from 'rxjs/operators';
import { UserHttpObj } from 'src/app/account/service/model/userHttpObj';
import { Category } from 'src/app/helpers/Category';
import { Note } from 'src/app/helpers/Note';
import { ConfigService } from '../config/config.service';
import { httpOptions } from '../config/httpConfig';
import { StorageService } from '../storage/storage.service';
import { CategoryListHttpObj } from './model/categoryListHttpObj';
import { CategoryHttpObj } from './model/categoryHttpObj';
import { NoteHttpObj } from './model/noteHttpObj';

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

  public updateCategory(
    updateCategory: CategoryHttpObj,
    categoryList: CategoryListHttpObj
  ): Observable<CategoryListHttpObj> {
    let url: string = this.SERVER_URL + '/category';

    let user = this.userObj;
    let index = categoryList.categories[0].categories.findIndex((category) => {
      return category._id === updateCategory._id;
    });

    if (index < 0) {
      return;
    }

    categoryList.categories[0].categories[index] = updateCategory;
    user.user.categories = categoryList.categories[0].categories;

    console.log(user);

    return this.http
      .post<CategoryListHttpObj>(url, user, httpOptions)
      .pipe(catchError(this.handleError));
  }

  public getCategories(): Observable<CategoryListHttpObj> {
    let url: string = this.SERVER_URL + '/categories';
    return this.http
      .post<CategoryListHttpObj>(url, this.userObj, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
