import { NavController } from '@ionic/angular';
import { DadosService } from './../api/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  itens : any
  constructor(private service: DadosService, private navCtrl: NavController) {  }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados().then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoProfessor(professor:any) {
    this.navCtrl.navigateForward('professor', {
      queryParams: { professor: professor }
    });
  }

  ngOnInit(){
    this.getAllDados()
  }
}