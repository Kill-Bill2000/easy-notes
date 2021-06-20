import { Component } from '@angular/core';
import { StorageService } from './common/service/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'easy-notes';
  closeShown = false;
  loggedIn = false;
  username: string = 'User';
  storageChanges$ = this.storage.changes$;

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.loggedIn = this.storage.isLoggedIn();
  }

  getUsername(): string {
    return this.storage.getUsername();
  }

  isLoggedIn() {
    return this.storage.isLoggedIn();
  }

  logout() {
    this.storage.removeLogin();
  }
}
