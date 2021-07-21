import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-concluido',
  templateUrl: './cadastro-concluido.component.html',
  styleUrls: ['./cadastro-concluido.component.css'],
})
export default class CadastroConcluidoComponent implements OnInit {
  private router : Router;

  constructor(private r: Router) {
    this.router = r;
  }

  ngOnInit(): void {
    this.navegarParaLogin();
  }

  navegarParaLogin() {
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 10000);
  }
}
