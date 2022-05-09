import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKonfirmasiPembayaranComponent } from './list-konfirmasi-pembayaran.component';

describe('ListKonfirmasiPembayaranComponent', () => {
  let component: ListKonfirmasiPembayaranComponent;
  let fixture: ComponentFixture<ListKonfirmasiPembayaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKonfirmasiPembayaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKonfirmasiPembayaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
