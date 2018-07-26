import { Routes } from '@angular/router';
import { AdalGuard } from 'adal-angular4';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticationGuard } from './authentication-guard';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard] },
  {path: 'product-list', component: ProductsListComponent, canActivate: [AuthenticationGuard] },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];
