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
  horarioType:any='horario'
  itens: any = [];
  items:any = [];
  idMonitoria: any;
  estado:any;

  constructor(private alertController: AlertController, private navCtrl: NavController, private route: ActivatedRoute, private service: DadosService, private modificar: EditarFormService) {}
  
  public atualizar(monitoria:any) {
    let newObj: any = {
      idMonitoria: monitoria.idMonitoria,
      estado: false,
      aluno:{
        idAluno: monitoria.aluno.idAluno,
      },
      horario:{
        idHorario: monitoria.horario.idHorario,
      }
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

  todosMonitoriasIndisponiveis(items: any []): boolean {
    return this.items.every((items: { estado: any; }) => items.estado === false);
  }

  checkHorarioDisponivel(itens: any[]): boolean {
    return itens.some(horario => horario.disponivel === false);
  }

  verificarIdAluno(items: any[], usuario: any): boolean {
    for (let i = 0; i < items.length; i++) {
      if (items[i].aluno.idAluno === usuario.idAluno) {
        return true;
      }
    }
    return false;
  }


  goHome(){
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
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
      this.items = dados;
      console.log(this.items)
    })
  }

  public getAll(){
    this.service.getAllMonitoria(this.horarioType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  ngOnInit() {
    this.getAllDados()
    this.getAll()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }

}


