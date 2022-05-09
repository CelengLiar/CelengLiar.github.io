import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, timeout } from 'rxjs';
import { TOKEN_KEY } from 'src/app/module/auth/login/login.model';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(this.addToken(req, sessionStorage.getItem(TOKEN_KEY)!))
      .pipe(timeout(60000));
  }
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + `${token}`,
      },
    });
  }
}
