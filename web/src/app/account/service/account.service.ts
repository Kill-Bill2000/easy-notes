import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './interfaces/user';
import { ConfigService } from '../../service/config/config.service';
import { Observable, of } from 'rxjs';

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

  //TODO implement
  login(user: User): Observable<boolean> {
    let url = this.SERVER_URL + '/account';

    let loggedInUser = this.http.get<User>(url, JSON.stringify(user))

    return of(false);
  }

  register(user: User) {}
}
