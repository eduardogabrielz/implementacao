import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AlertController, IonicModule, NavController} from '@ionic/angular';
import { DadosService } from '../api/dados.service';
import { EditarFormService } from '../api/editar-form.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  public usuario:any
  public userType:any
  monitoriaType:any='monitoria'
  itens:any
  idMonitoria: any;
  estado:any
  constructor(private alertController: AlertController, private navCtrl: NavController, private route: ActivatedRoute, private service: DadosService, private modificar: EditarFormService) {}
  
  goCadastro(){
    this.navCtrl.navigateForward('cadastros')
  }

  public atualizar(monitoria:any) {
    let newObj: any = {
      idMonitoria: monitoria.idMonitoria,
      estado: false
    };

    this.modificar.putDados(newObj, this.monitoriaType).then(async dados => {
      await this.exibirAlerta('Finalização da Monitoria, por favor, atualize a pagina');
      console.log(dados);
    });
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
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }

  // goProfessores() {
  //   this.navCtrl.navigateForward('dados-professor', {
  //     queryParams: { button: 'professores' }
  //   })
  // }
  
  // goAlunos(){
  //   this.navCtrl.navigateForward('dados-aluno')
  // }

  // goTecnicos(){
  //   this.navCtrl.navigateForward('dados-tecnico')
  // }

  goMaterias() {
    this.navCtrl.navigateForward('dados-professor', {
      queryParams: { button: 'materias' }
    })
  }

  goAgendamento(){
    this.navCtrl.navigateForward('agendamento', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  formatarHorario(horarioNumerico: number): string {
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }

  public getAllDados(){
    this.service.getAllMonitoria(this.monitoriaType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  ngOnInit() {
    this.getAllDados()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
  }

