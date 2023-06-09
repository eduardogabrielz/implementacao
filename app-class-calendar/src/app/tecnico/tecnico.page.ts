import { Component, OnInit } from '@angular/core';
import { EditarFormService } from '../api/editar-form.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.page.html',
  styleUrls: ['./tecnico.page.scss'],
})
export class TecnicoPage implements OnInit {

  public tecnico: any;
  public usuario: any
  public userType:any
  userGroup: any = 'tecnico';
  idTecnico: any;
  nomeATT: any;
  cpfATT: any;
  telefoneATT: any;
  enderecoATT: any;
  senhaATT: any;
  status: any;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private service: EditarFormService) {
    this.route.queryParams.subscribe(params => {
      this.tecnico = params['tecnico'];
      this.idTecnico = this.tecnico.idTecnico;
      this.nomeATT = this.tecnico.nome;
      this.cpfATT = this.tecnico.cpf;
      this.telefoneATT = this.tecnico.telefone;
      this.enderecoATT = this.tecnico.endereco;
      this.senhaATT = this.tecnico.senha;
    });
   }

   public atualizar() {
    let newObj: any = {
      idTecnico: this.idTecnico,
      cpf: this.cpfATT,
      telefone: this.telefoneATT,
      endereco: this.enderecoATT,
      senha: this.senhaATT,
      nome: this.nomeATT,
    };

    this.service.putDados(newObj, this.userGroup).then(dados => {
      console.log('UPDATE');
      console.log(dados);
    });
  }

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goHome(){
    this.navCtrl.navigateForward('home', {
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
