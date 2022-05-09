import { HttpEventType } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RestApiService } from 'src/app/service/rest/rest-api.service';
import { KonfirmasiPembayaran } from '../konfirmasi-pembayaran/konfirmasi-pembayaran.model';
import { ContractExtension, WalltetTrx } from '../Model';

const STATUS = 'PENDING';
@Component({
  selector: 'app-proses-isu',
  templateUrl: './proses-isu.component.html',
  styleUrls: ['./proses-isu.component.css'],
})
export class ProsesIsuComponent implements OnInit {
  displayedColumns = [
    'status',
    'userid',
    'franchiseid',
    'month',
    'amount',
    'image',
    'createdate',
    'aksi',
    'submit',
  ];
  APPROVE = 'APPROVE';
  REJECT = 'REJECT';
  data: ContractExtension[] = [];
  dataSource = new MatTableDataSource<ContractExtension>(this.data);
  @ViewChild(MatSort, { static: false }) sort: MatSort | any;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | any;

  constructor(private rest: RestApiService) {}

  ngOnInit(): void {
    this.getData();
  }
  public getData() {
    this.rest.GetAllContractExtensionn().subscribe((event) => {
      if (event.type == HttpEventType.Response && event.body && event.ok) {
        let respond = Object(event.body)['output_schema'];
        respond.forEach((element: ContractExtension) => {
          this.data.push(element);
        });

        this.dataSource = new MatTableDataSource<ContractExtension>(this.data);
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
