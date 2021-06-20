import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CategoryListComponent } from './category-list/category-list.component';
import { StorageService } from './common/service/storage/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'easy-notes';
  closeShown = false;
  loggedIn = false;
  username: string = 'User';
  storageChanges$ = this.storage.changes$;

  @ViewChild(CategoryListComponent)
  private categoryListComponent!: CategoryListComponent;

  constructor(private storage: StorageService) {}

  ngAfterViewInit() {
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

  loadCategories() {
    this.categoryListComponent.updateCategories();
  }
}
