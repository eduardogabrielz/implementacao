import { DadosService } from './../api/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  itens : any
  constructor(private service: DadosService) {  }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados().then(dados => {
      this.itens = dados;
    })
  }

  ngOnInit(){
    this.getAllDados()
  }
}