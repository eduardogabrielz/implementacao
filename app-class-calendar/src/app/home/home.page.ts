import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonicModule, NavController} from '@ionic/angular';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  public usuario:any
  public userType:any
  monitoriaType:any='monitorias'
  itens:any
  constructor(private navCtrl: NavController, private route: ActivatedRoute, private service: DadosService) {}
  
  goCadastro(){
    this.navCtrl.navigateForward('cadastros')
  }

  goHome(){
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }

  goProfessores() {
    this.navCtrl.navigateForward('dados-professor', {
      queryParams: { button: 'professores' }
    })
  }
  
  goAlunos(){
    this.navCtrl.navigateForward('dados-aluno')
  }

  goTecnicos(){
    this.navCtrl.navigateForward('dados-tecnico')
  }

  goMaterias() {
    this.navCtrl.navigateForward('dados-professor', {
      queryParams: { button: 'materias' }
    })
  }

  goHorarios(){
    this.navCtrl.navigateForward('horario')
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
    this.service.getAllMonitoria(this.monitoriaType).then(dados => {
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

