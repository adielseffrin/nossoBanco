import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import AuthService from './auth.service';

@Injectable()
export default class AuthGuard implements CanActivate {
  baseUrl?: string;

  private authService: AuthService;

  private router: Router;

  constructor(
      private as: AuthService,
      private r: Router,
  ) {
    this.authService = as;
    this.router = r;
  }

  canActivate() {
    if (this.authService.isAuthenticate()) {
      return true;
    }
    this.router.navigate(['/acesso-negado']);
    return false;
  }
}
