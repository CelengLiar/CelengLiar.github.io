import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { RestApiService } from 'src/app/service/rest/rest-api.service';
import { Login, Token, TOKEN_KEY } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  a: string = '';
  login: Login = { password: '', username: '' };
  constructor(
    private rest: RestApiService,
    private router: Router,
    private auth: AuthService
  ) {
    auth.getIslogin().subscribe((event) => {
      if (event) router.navigate(['home']);
    });
  }

  ngOnInit(): void {}
  public adminLogin() {
    this.rest.postLogin(JSON.stringify(this.login)).subscribe((event) => {
      if (event.type == HttpEventType.Response && event.ok && event) {
        console.log(event.body);
        let token: Token = Object(event.body)['output_schema'];
        sessionStorage.setItem(TOKEN_KEY, token.token);
        this.auth.postIsLogin(true);
        this.router.navigate(['home']);
      }
    });
  }
}
