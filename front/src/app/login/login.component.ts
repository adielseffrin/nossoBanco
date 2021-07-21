import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export default class LoginComponent implements OnInit {
  public formLogin?:any;

  public theEvent?:any;

  public key:string;

  public regex?:RegExp;

  public keys?:string;

  public getCadastro?:string;

  public message?: string;

  private fb : FormBuilder;

  private router : Router;

  constructor(
      private f: FormBuilder,
      private r: Router,
  ) {
    this.fb = f;
    this.router = r;
    this.key = '';
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      cpf: [''],
    });
  }

  login() {
    console.log(this);
  }

  onlynumber(evt:any) {
    this.theEvent = evt || window.event;
    this.key = this.theEvent.key;
    this.regex = /^[0-9]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
}
