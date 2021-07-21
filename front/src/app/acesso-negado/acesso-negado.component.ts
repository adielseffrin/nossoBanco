import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso-negado',
  templateUrl: './acesso-negado.component.html',
  styleUrls: ['./acesso-negado.component.css'],
})
export default class AcessoNegadoComponent implements OnInit {
  ngOnInit(): void {
    console.log(this);
  }
}
