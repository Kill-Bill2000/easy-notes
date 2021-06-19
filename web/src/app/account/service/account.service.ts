import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from 'src/app/common/service/config/config.service';
import { UserHttpObj } from './model/user';
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
    // if (error.status === 0) {
    //   // A client-side or network error occurred. Handle it accordingly.
    //   console.error('An error occurred:', error.error);
    // } else {
    //   // The backend returned an unsuccessful response code.
    //   // The response body may contain clues as to what went wrong.
    //   console.error(
    //     `Backend returned code ${error.status}, ` + `body was: ${error.error}`
    //   );
    // }
    // // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  async login(userObj: UserHttpObj): Promise<Observable<UserHttpObj>> {
    let url: string = this.SERVER_URL + '/account';

    return this.http
      .post<UserHttpObj>(url, userObj, httpOptions)
      .pipe(catchError(this.handleError));
  }

  register(user: User) {}
}
