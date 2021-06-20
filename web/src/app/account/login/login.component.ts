import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AccountService } from '../service/account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../service/interfaces/user';
import { UserHttpObj } from '../service/model/userHttpObj';
import { StorageService } from '../../common/service/storage/storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public readonly userDataGroup: FormGroup;
  loginError: boolean = false;
  errorMessage: string = 'Username or password invalid.';

  constructor(
    private accountService: AccountService,
    private storage: StorageService,
    private readonly formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.userDataGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    this.loginError = false;
    this.errorMessage = 'Username or password invalid.';

    if (this.userDataGroup.invalid) {
      this.loginError = true;
      return;
    } else {
      this.loginError = false;
    }

    let user: UserHttpObj = {
      user: {
        username: this.userDataGroup.get('username').value,
        password: this.userDataGroup.get('password').value,
      },
    };

    this.accountService.login(user).then((response) => {
      response.subscribe(
        (userResp) => {
          try {
            if (userResp.user.username !== null) {
              this.loginError = false;
              this.storage.setLogIn(
                userResp.user.username,
                userResp.user.password
              );

              this.activatedRoute.params.subscribe((parameter) => {
                this.router.navigate(['']);
              });
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
