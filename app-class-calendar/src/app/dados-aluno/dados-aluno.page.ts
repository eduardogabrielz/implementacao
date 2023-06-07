import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { AlertController, NavController } from '@ionic/angular';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados-aluno',
  templateUrl: './dados-aluno.page.html',
  styleUrls: ['./dados-aluno.page.scss'],
})
export class DadosAlunoPage implements OnInit {

  itens : any = []
  public usuario: any
  public userType:any
  userGroup:any = 'aluno'
  constructor(private alertController: AlertController, private route: ActivatedRoute, private service: DadosService, private navCtrl: NavController, private exclusaoAluno: DeletarService) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userGroup+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoAluno(aluno:any) {
    this.navCtrl.navigateForward('aluno', {
      queryParams: { aluno: aluno,
                    usuario: this.usuario,
                    userType: this.userType }
    });
  }

  public async excluirAluno(aluno:any){
    await this.exibirAlerta(aluno.nome +' excluido, por favor, atualize a pagina');
    this.exclusaoAluno.deleteUsuarios(this.userGroup, aluno.idAluno).then(() => {
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

  // goAgendamento(){
  //   this.navCtrl.navigateForward('agendamento', {
  //     queryParams: { usuario: this.usuario,
  //                    userType: this.userType }
  //   });
  // }

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
