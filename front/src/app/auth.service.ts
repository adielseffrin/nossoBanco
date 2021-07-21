import { Injectable } from '@angular/core';

@Injectable()
export default class AuthService {
  public cadastro: string | null;

  constructor() {
    this.cadastro = localStorage.getItem('cadastro');
  }

  isAuthenticate() {
    const token = this.cadastro;
    return !!token;
  }
}
