import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public usuario:any
  public userType:any
  
  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }



  public formatarTelefone(telefoneNumerico:any) {
    const telefoneString = telefoneNumerico.toString();
  
    const ddd = telefoneString.substring(0, 2);
    const primeiroBloco = telefoneString.substring(2, 7);
    const segundoBloco = telefoneString.substring(7);
  
    return `(${ddd}) ${primeiroBloco}-${segundoBloco}`;
  }

  goHome(){
    this.navCtrl.navigateForward('home', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goAgendamento(){
    this.navCtrl.navigateForward('agendamento', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }

}
