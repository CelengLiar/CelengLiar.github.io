import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { timeout } from 'rxjs';
const TIMEOUT = 60000;
@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  public httpGet(url: string, param?: HttpParams, header?: HttpHeaders) {
    const request = new HttpRequest('GET', url, {
      params: param,
      headers: header,
    });
    return this.httpClient.request(request).pipe(timeout(TIMEOUT));
  }
  public httpPost(url: string, jsonString?: string, header?: HttpHeaders) {
    const request = new HttpRequest('POST', url, jsonString, {
      headers: header,
    });
    return this.httpClient.request(request).pipe(timeout(TIMEOUT));
  }
}
