import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StorageService } from '../common/service/storage/storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  constructor(private storage: StorageService) {}

  ngOnInit(): void {}

  getUsername() {
    return this.storage.getUsername();
  }

  isLoggedIn() {
    return this.storage.isLoggedIn();
  }
}
