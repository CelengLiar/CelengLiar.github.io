import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOKEN_KEY } from 'src/app/module/auth/login/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLogin = new BehaviorSubject<boolean>(false);
  constructor() {
    this.checkIslOgin();
  }
  public getIslogin() {
    return this.isLogin.asObservable();
  }
  public postIsLogin(bol: boolean) {
    this.isLogin.next(bol);
  }
  public checkIslOgin() {
    let token = sessionStorage.getItem(TOKEN_KEY);
    if (token != undefined) this.postIsLogin(true);
  }
}
