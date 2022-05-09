import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './module/share/share.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { SideNavComponent } from './component/side-nav/side-nav.component';
import { ListKonfirmasiPembayaranComponent } from './module/konfirmasi-pembayaran/list-konfirmasi-pembayaran/list-konfirmasi-pembayaran.component';
import { ProsesIsuComponent } from './module/proses-isu/proses-isu.component';
import { ProsesPenarikanComponent } from './module/proses-penarikan/proses-penarikan.component';
import { ProsesPengisianComponent } from './module/proses-pengisian/proses-pengisian.component';
import { MatTableModule } from '@angular/material/table';
import { HttpInterceptService } from './service/http-intercept/http-intercept.service';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    SideNavComponent,
    ListKonfirmasiPembayaranComponent,
    ProsesIsuComponent,
    ProsesPenarikanComponent,
    ProsesPengisianComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ShareModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
