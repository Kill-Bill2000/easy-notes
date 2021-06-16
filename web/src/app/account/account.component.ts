import { Component, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  passedData;
  reason: Data;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.passedData = this.route.data.subscribe((v) => (this.reason = v));
  }

  ngOnDestroy() {
    this.passedData.unsubscribe();
  }
}
