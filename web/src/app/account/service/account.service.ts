import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ConfigService } from 'src/app/common/service/config/config.service';

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
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }

  async login(user: User): Promise<boolean> {
    let url: string = this.SERVER_URL + '/account';
    let loggedInUser: boolean = false;

    await this.http
      .post<User>(url, user)
      .pipe(catchError(this.handleError))
      .subscribe((respUser: User) => {
        if (respUser.password === user.password) {
          return (loggedInUser = true);
        } else {
          return (loggedInUser = false);
        }
      });

    return loggedInUser;
  }

  register(user: User) {}
}
