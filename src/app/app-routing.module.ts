import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListKonfirmasiPembayaranComponent } from './module/konfirmasi-pembayaran/list-konfirmasi-pembayaran/list-konfirmasi-pembayaran.component';
import { ProsesIsuComponent } from './module/proses-isu/proses-isu.component';
import { ProsesPenarikanComponent } from './module/proses-penarikan/proses-penarikan.component';
import { ProsesPengisianComponent } from './module/proses-pengisian/proses-pengisian.component';
import { AuthGuardService } from './service/authGuard/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/module/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'konfirmasiPembayaran',
    component: ListKonfirmasiPembayaranComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'isu',
    component: ProsesIsuComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'penarikan',
    component: ProsesPenarikanComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'pengisian',
    component: ProsesPengisianComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
