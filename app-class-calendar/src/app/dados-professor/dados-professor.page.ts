import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { AlertController, NavController} from '@ionic/angular';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados-professor',
  templateUrl: './dados-professor.page.html',
  styleUrls: ['./dados-professor.page.scss'],
})
export class DadosProfessorPage implements OnInit {

  itens : any = []
  public usuario: any
  public userType:any
  userGroup:any = 'professor'
  public button: any
  
  constructor(private alertController: AlertController, private route: ActivatedRoute, private service: DadosService, private navCtrl: NavController, private exclusaoProfessor: DeletarService) { }

  public getAllDados(){
    this.service.getAllDados(this.userGroup+'es').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoProfessor(professor:any) {
    this.navCtrl.navigateForward('professor', {
      queryParams: { professor: professor,
                    usuario: this.usuario,
                    userType: this.userType }
    });
  }

  public irnaDisciplina(professor:any) {
    this.navCtrl.navigateForward('disciplina', {
      queryParams: { professor: professor,
                    usuario: this.usuario,
                    userType: this.userType }
    });
  }

  public async excluirProfessor(professor:any){
    await this.exibirAlerta(professor.nome +' excluido, por favor, atualize a pagina');
    this.exclusaoProfessor.deleteUsuarios(this.userGroup, professor.idProfessor).then(() => {
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
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType'];
      this.button = params['button']});
    this.getAllDados()
  }

}
