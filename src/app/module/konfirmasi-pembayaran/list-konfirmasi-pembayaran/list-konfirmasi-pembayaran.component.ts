import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestApiService } from 'src/app/service/rest/rest-api.service';
import { KonfirmasiPembayaran } from '../konfirmasi-pembayaran.model';

const STATUS = 'WAITING_ADMIN_APPROVAL';
@Component({
  selector: 'app-list-konfirmasi-pembayaran',
  templateUrl: './list-konfirmasi-pembayaran.component.html',
  styleUrls: ['./list-konfirmasi-pembayaran.component.css'],
})
export class ListKonfirmasiPembayaranComponent implements OnInit {
  displayedColumns = [
    'id',
    'userid',
    'franchiseid',
    'totalamount',
    'createdate',
    'image',
    'aksi',
    'submit',
  ];
  APPROVE = 'APPROVE';
  REJECT = 'REJECT';
  data: KonfirmasiPembayaran[] = [];
  dataSource = new MatTableDataSource<KonfirmasiPembayaran>(this.data);

  constructor(private rest: RestApiService) {}

  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.rest.ViewAllTransaction().subscribe((event) => {
      if (event.type == HttpEventType.Response && event.body && event.ok) {
        let respond = Object(event.body)['output_schema'];
        respond.forEach((element: KonfirmasiPembayaran) => {
          console.log(element);
          if (element.status == STATUS) this.data.push(element);
        });
        this.dataSource.data = this.data;
      }
    });
  }
  public goToLink(url: string) {
    this.rest.GetImage(url);
  }
  public submit(event: KonfirmasiPembayaran) {
    console.log(event);
    switch (event.aksi) {
      case this.APPROVE:
        this.rest
          .approveTransactionPayment(event.id + '')
          .subscribe((event) => {
            if (event.type == HttpEventType.Response && event.ok) {
              window.location.reload();
            }
          });
        break;
      case this.REJECT:
        this.rest.rejectTransactionPayment(event.id + '').subscribe((event) => {
          if (event.type == HttpEventType.Response && event.ok) {
            window.location.reload();
          }
        });
        break;
    }
  }
}
