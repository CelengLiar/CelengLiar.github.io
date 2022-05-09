import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestApiService } from 'src/app/service/rest/rest-api.service';
import { KonfirmasiPembayaran } from '../konfirmasi-pembayaran/konfirmasi-pembayaran.model';
import { WalltetTrx } from '../Model';

const STATUS = 'PENDING';
@Component({
  selector: 'app-proses-pengisian',
  templateUrl: './proses-pengisian.component.html',
  styleUrls: ['./proses-pengisian.component.css'],
})
export class ProsesPengisianComponent implements OnInit {
  displayedColumns = [
    'status',
    'name',
    'amount',
    'image',
    'createdate',
    'aksi',
    'submit',
  ];
  APPROVE = 'APPROVE';
  REJECT = 'REJECT';
  data: WalltetTrx[] = [];
  dataSource = new MatTableDataSource<WalltetTrx>(this.data);
  @ViewChild(MatSort, { static: false }) sort: MatSort | any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;

  constructor(private rest: RestApiService) {}

  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.rest.GetAllWalletTransactionAdmin().subscribe((event) => {
      if (event.type == HttpEventType.Response && event.body && event.ok) {
        let respond = Object(event.body)['output_schema'];
        respond.forEach((element: WalltetTrx) => {
          if (!element.name.match(/Withdraw/)) this.data.push(element);
        });

        this.dataSource = new MatTableDataSource<WalltetTrx>(this.data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }
  public goToLink(url: string) {
    this.rest.GetImage(url);
  }
  public submit(event: KonfirmasiPembayaran) {
    switch (event.aksi) {
      case this.APPROVE:
        this.rest
          .approveTransactionTransaksi(event.id + '')
          .subscribe((event) => {
            if (event.type == HttpEventType.Response && event.ok) {
              window.location.reload();
            }
          });
        break;
      case this.REJECT:
        this.rest
          .rejectTransactionTransaksi(event.id + '')
          .subscribe((event) => {
            if (event.type == HttpEventType.Response && event.ok) {
              window.location.reload();
            }
          });
        break;
    }
  }
}
