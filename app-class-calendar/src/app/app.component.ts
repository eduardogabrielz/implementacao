import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public usuario:any
  public userType:any

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  goCadastro(){
    this.navCtrl.navigateForward('cadastros', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType}
    });
  }

  goAlunos(){
    this.navCtrl.navigateForward('dados-aluno', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType}
    });
  }

  goTecnicos(){
    this.navCtrl.navigateForward('dados-tecnico', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType}
    });
  }

  goProfessores() {
    this.navCtrl.navigateForward('dados-professor', {
      queryParams: { button: 'professores',
                    usuario: this.usuario,
                    userType: this.userType }
    })
  }

  goDisciplinas() {
    this.navCtrl.navigateForward('dados-professor', {
      queryParams: { button: 'disciplinas',
                    usuario: this.usuario,
                    userType: this.userType }
    })
  }

  goHorario() {
    this.navCtrl.navigateForward('horario', {
      queryParams: { usuario: this.usuario,
                    userType: this.userType }
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}


