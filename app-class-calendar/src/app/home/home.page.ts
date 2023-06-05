import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonicModule, NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  public usuario:any
  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}
  
  goTexto(){
      console.log(this.usuario.senha)
      console.log(this.usuario.nome)
      console.log(this.usuario.telefone)
      console.log(this.usuario.endereco)
      console.log(this.usuario.turma)
  }
  goCadastro(){
    this.navCtrl.navigateForward('cadastros')
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

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario']});
  }
  }

