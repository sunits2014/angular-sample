import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
      const userData = JSON.parse(sessionStorage.getItem('user'));
      if (userData) {
        return true
      } else {
        alert('No user details found. Taking you to Login Page.')
        this.router.navigate(['login']);
      }
  }
  
}
