import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  userType : any;

  goTeste(userType:any){
    switch (userType) {
      case 'aluno':
        this.navCtrl.navigateForward('home')
        break;
      case 'professor':
        this.navCtrl.navigateForward('professor')
        break;
      case 'tecnico':
        this.navCtrl.navigateForward('menu')
        break;
      default:
        console.log('Selecione seu tipo de usuario');
        break;
    }
  }
  
  goHome(){
    this.navCtrl.navigateForward('home')
  }


  ngOnInit() {
  }

}

