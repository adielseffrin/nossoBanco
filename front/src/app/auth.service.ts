import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    isAuthenticate() {
        const token = localStorage.getItem('cadastro');
        return !!token;

    }
}