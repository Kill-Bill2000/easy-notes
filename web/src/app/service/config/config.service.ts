import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './interface/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private readonly configUrl = 'assets/config.json';

  constructor(private http: HttpClient) {}

  getConfig(): Observable<Config> {
    return this.http.get<Config>(this.configUrl);
  }
}
