import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { Category } from './helpers/Category';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  private readonly categoryId = 'SelectedCategory';

  constructor(private cookieService: CookieService) {}

  public setCategoryCookie(category: Category) {
    console.log(JSON.stringify(category));

    if (this.cookieService.check(this.categoryId)) {
      this.cookieService.delete(this.categoryId);
    }
    this.cookieService.set(this.categoryId, JSON.stringify(category));
  }

  public getCategoryCookie(): Observable<Category> {
    if (this.cookieService.check(this.categoryId)) {
      return of(JSON.parse(this.cookieService.get(this.categoryId)));
    } else {
      return of(null);
    }
  }
}
