import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DadosService } from '../api/dados.service';
import { DeletarService } from '../api/deletar.service';

@Component({
  selector: 'app-dados-tecnico',
  templateUrl: './dados-tecnico.page.html',
  styleUrls: ['./dados-tecnico.page.scss'],
})
export class DadosTecnicoPage implements OnInit {

  itens : any
  userType: any = 'tecnico';

  constructor(private service: DadosService, private navCtrl: NavController, private exclusaoTecnico: DeletarService) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoTecnico(tecnico:any) {
    this.navCtrl.navigateForward('tecnico', {
      queryParams: { tecnico: tecnico }
    });
  }

  public excluirTecnico(tecnico:any){
    this.exclusaoTecnico.deleteUsuarios(this.userType, tecnico.idTecnico).then((tecnico) => {
      console.log('Delete')
      console.log('Tecnico excluida: '+ tecnico)
      this.getAllDados();
    })
  }


  ngOnInit() {
    this.getAllDados()
  }


}
