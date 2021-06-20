import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../service/account.service';
import { StorageService } from 'src/app/common/service/storage/storage.service';
import { UserHttpObj } from '../service/model/userHttpObj';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public readonly userDataGroup: FormGroup;
  loginError: boolean = false;
  errorMessage: string = 'An error occured';

  constructor(
    private accountService: AccountService,
    private storage: StorageService,
    private readonly formBuilder: FormBuilder
  ) {
    this.userDataGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      password_reenter: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  register() {
    this.loginError = false;
    this.errorMessage = 'An error occured';

    if (this.userDataGroup.invalid) {
      this.loginError = true;
      return;
    } else {
      this.loginError = false;
    }

    if (
      this.userDataGroup.get('password').value !==
      this.userDataGroup.get('password_reenter').value
    ) {
      this.errorMessage = 'Both passwords are not equal.';
      this.loginError = true;
      return;
    }

    let user: UserHttpObj = {
      user: {
        username: this.userDataGroup.get('username').value,
        password: this.userDataGroup.get('password').value,
      },
    };

    this.accountService.register(user).then((response) => {
      response.subscribe(
        (userResp) => {
          try {
            if (userResp.user.username !== null) {
              this.loginError = false;
              this.storage.setLogIn(
                userResp.user.username,
                userResp.user.password
              );
            } else {
              this.loginError = true;
            }
          } catch (error) {
            this.loginError = true;
          }
        },
        (err) => {
          this.loginError = true;
        }
      );
    });
  }
}
