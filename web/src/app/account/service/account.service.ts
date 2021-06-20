import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from 'src/app/common/service/config/config.service';
import { UserHttpObj } from './model/userHttpObj';
import { HttpHeaders } from '@angular/common/http';
import { httpOptions } from 'src/app/common/service/config/httpConfig';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private SERVER_URL: string;

  constructor(private http: HttpClient, private config: ConfigService) {
    this.config.getConfig().subscribe((val) => {
      this.SERVER_URL = val.serverURL;
    });
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  async login(userObj: UserHttpObj): Promise<Observable<UserHttpObj>> {
    let url: string = this.SERVER_URL + '/account';

    return this.http
      .post<UserHttpObj>(url, userObj, httpOptions)
      .pipe(catchError(this.handleError));
  }

  async register(userObj: UserHttpObj): Promise<Observable<UserHttpObj>> {
    let url: string = this.SERVER_URL + '/account/save';

    return this.http
      .post<UserHttpObj>(url, userObj, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
