import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  public formCadastro: any;
  public valoresForm !: Object;
  public conversao !: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    

    this.formCadastro.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((res: any) => {
      console.log(res);
      this.valoresForm = res;
    })
  }

  cadastro(): void{
    //aqui tem que ter uma requisição pra salvar
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('cadastro', this.conversao);
    //console.log(this.formCadastro.controls);
  }

}
