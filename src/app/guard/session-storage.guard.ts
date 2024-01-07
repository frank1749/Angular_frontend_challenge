import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const dataSesion = localStorage.getItem('infoUser');
    if (dataSesion) {
      return true;
    } else if (this.router.url === '/login') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
