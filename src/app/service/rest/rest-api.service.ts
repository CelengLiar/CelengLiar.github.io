import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
const BASE_URL = 'https://franchisepedia-app.herokuapp.com';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  constructor(private httpService: HttpClientService) {}

  public postLogin(body: string) {
    let url = BASE_URL + '/api/login';
    let header: HttpHeaders = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.httpService.httpPost(url, body, header);
  }
  public ViewAllTransaction() {
    let url = BASE_URL + '/api/transaction';
    return this.httpService.httpGet(url);
  }
  public GetImage(imageId: string) {
    let url = BASE_URL + '/api/image/' + imageId;
    window.open(url, '_blank');
  }
  public approveTransactionPayment(transactionid: string) {
    let url = BASE_URL + '/api/transaction/' + transactionid + '/approve';
    return this.httpService.httpPost(url);
  }
  public rejectTransactionPayment(transactionid: string) {
    let url = BASE_URL + '/api/transaction/' + transactionid + '/cancel';
    return this.httpService.httpPost(url);
  }
  public GetAllWalletTransactionAdmin() {
    let url = BASE_URL + '/api/admin/wallet/transaction';
    return this.httpService.httpGet(url);
  }
  public approveTransactionTransaksi(transactionid: string) {
    let url =
      BASE_URL + '/api/wallet/transaction/' + transactionid + '/approve';
    return this.httpService.httpPost(url);
  }
  public rejectTransactionTransaksi(transactionid: string) {
    let url = BASE_URL + '/api/wallet/transaction/' + transactionid + '/cancel';
    return this.httpService.httpPost(url);
  }
  public GetAllContractExtensionn() {
    let url = BASE_URL + '/api/admin/contract/extension';
    return this.httpService.httpGet(url);
  }
  // public approveTransactionTransaksi(transactionid: string) {
  //   let url =
  //     BASE_URL + '/api/wallet/transaction/' + transactionid + '/approve';
  //   return this.httpService.httpPost(url);
  // }
  // public rejectTransactionTransaksi(transactionid: string) {
  //   let url = BASE_URL + '/api/wallet/transaction/' + transactionid + '/cancel';
  //   return this.httpService.httpPost(url);
  // }
}
