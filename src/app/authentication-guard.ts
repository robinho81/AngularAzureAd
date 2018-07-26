import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { AdalService } from 'adal-angular4';

@Injectable()

export class AuthenticationGuard implements CanActivate {

constructor(private router: Router, private adalService: AdalService) {

    }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

  const navigationExtras: NavigationExtras = {
    queryParams: { 'redirectUrl': route.url }
  };

  if (!this.adalService.userInfo || !this.adalService.userInfo.authenticated) {
    this.router.navigate(['login'], navigationExtras);
  }

  return true;
  }
}
