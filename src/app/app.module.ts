import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdalService, AdalGuard } from 'adal-angular4';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing';
import { AuthenticationGuard } from './authentication-guard';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductsModule,
    AuthModule
  ],
  providers: [
    AdalService,
    AdalGuard,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
