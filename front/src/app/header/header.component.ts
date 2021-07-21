import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export default class HeaderComponent implements OnInit {
  public formLogin: any;

  private fb: FormBuilder

  constructor(private f: FormBuilder) {
    this.fb = f;
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      cpf: [''],
    });
    console.log('Component app-header started...');
  }
}
