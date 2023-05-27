import { Component } from '@angular/core';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}

  goCadastro(){
    this.navCtrl.navigateForward('cadastros')
  }

  goProfessores(){
    this.navCtrl.navigateForward('dados-professor')
  }
  
  goAlunos(){
    this.navCtrl.navigateForward('dados-aluno')
  }

  goTecnicos(){
    this.navCtrl.navigateForward('dados-tecnico')
  }

}
