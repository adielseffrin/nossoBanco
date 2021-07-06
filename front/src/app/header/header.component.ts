import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public formLogin: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      cpf: ['']
    });
    console.log("Component app-header started...")
  }

}
