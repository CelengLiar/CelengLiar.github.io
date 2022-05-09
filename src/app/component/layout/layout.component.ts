import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit {
  islogin: boolean = false;
  a: Observable<boolean> | undefined;
  constructor(public auth: AuthService, public router: Router) {
    auth.getIslogin().subscribe((event) => {
      this.islogin = event;
    });
  }
  ngOnInit(): void {}
  logout() {
    sessionStorage.clear();
    this.auth.postIsLogin(false);
    this.router.navigate(['auth/login']);
  }
}
