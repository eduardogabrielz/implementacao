import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditarFormService } from '../api/editar-form.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {

  public professor: any;
  public usuario: any;
  public userType : any;
  userGroup: any = 'professor';
  idProfessor: any;
  nomeATT: any;
  cpfATT: any;
  telefoneATT: any;
  enderecoATT: any;
  senhaATT: any;
  status: any;

  constructor(private navCtrl: NavController, private route: ActivatedRoute, private service: EditarFormService) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.professor = params['professor'];
      this.usuario = params['usuario']
      this.userType = params['userType']
      this.idProfessor = this.professor.idProfessor;
      this.nomeATT = this.professor.nome;
      this.cpfATT = this.professor.cpf;
      this.telefoneATT = this.professor.telefone;
      this.enderecoATT = this.professor.endereco;
      this.senhaATT = this.professor.senha;
    });
  }

  public atualizar() {
    let newObj: any = {
      idProfessor: this.idProfessor,
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

}
