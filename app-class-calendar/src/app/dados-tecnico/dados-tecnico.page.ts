import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-dados-tecnico',
  templateUrl: './dados-tecnico.page.html',
  styleUrls: ['./dados-tecnico.page.scss'],
})
export class DadosTecnicoPage implements OnInit {

  itens : any
  userType: any = 'tecnicos';

  constructor(private service: DadosService, private navCtrl: NavController) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userType).then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoTecnico(tecnico:any) {
    this.navCtrl.navigateForward('tecnico', {
      queryParams: { tecnico: tecnico }
    });
  }


  ngOnInit() {
    this.getAllDados()
  }


}
