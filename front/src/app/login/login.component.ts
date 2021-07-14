import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 

export class LoginComponent implements OnInit {

  public formLogin?:FormGroup;
  public theEvent?:string;
  public key?:string;
  public regex?:string;
  public keys?:string;
  public getCadastro?:string;
  public message?: string;


  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      cpf:['']
    })
  }

}
