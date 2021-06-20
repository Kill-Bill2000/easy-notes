import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * From https://firstclassjs.com/persist-data-using-local-storage-and-angular/
 */

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  localStorage: Storage;
  changes$ = new Subject();

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): any {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }

  set(key: string, value: any): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));
      this.changes$.next({
        type: 'set',
        key,
        value,
      });
      return true;
    }
    return false;
  }

  remove(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);
      this.changes$.next({
        type: 'remove',
        key,
      });
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.getUsername() !== null;
  }

  setLogIn(username: string, password: string): boolean {
    if (this.set('username', username) && this.set('password', password)) {
      return true;
    }

    return this.remove('username') && this.remove('password');
  }

  getUsername(): string {
    return this.get('username');
  }

  getPassword(): string {
    return this.get('password');
  }

  removeLogin(): boolean {
    return this.remove('username') && this.remove('password');
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
