import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { DadosService } from '../api/dados.service';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados-tecnico',
  templateUrl: './dados-tecnico.page.html',
  styleUrls: ['./dados-tecnico.page.scss'],
})
export class DadosTecnicoPage implements OnInit {

  itens : any = []
  public usuario: any
  public userType:any
  userGroup:any = 'tecnico'
  constructor(private alertController: AlertController, private route: ActivatedRoute, private service: DadosService, private navCtrl: NavController, private exclusaoTecnico: DeletarService) { 
    this.getAllDados()
  }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userGroup+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoTecnico(tecnico:any) {
    this.navCtrl.navigateForward('tecnico', {
      queryParams: { tecnico: tecnico,
                    usuario: this.usuario,
                    userType: this.userType }
    });
  }

  public async excluirTecnico(tecnico:any){
    await this.exibirAlerta(tecnico.nome +' excluido, por favor, atualize a pagina');
    this.exclusaoTecnico.deleteUsuarios(this.userGroup, tecnico.idTecnico).then(() => {
      this.getAllDados();
    })
  }


  async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  goHome(){
    this.navCtrl.navigateForward('home', {
      queryParams:  { usuario: this.usuario,
                    userType: this.userType }
    });
  }

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }
  
  ngOnInit() {
    this.getAllDados()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }


}
