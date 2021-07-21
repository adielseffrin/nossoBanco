import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export default class ContentComponent implements OnInit {
  private router: Router;

  constructor(private r: Router) {
    this.router = r;
  }

  ngOnInit(): void {
    console.log(this);
  }

  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes']);
  }
}
