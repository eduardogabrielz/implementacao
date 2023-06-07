import { NavController } from '@ionic/angular';
import { CadastroFormService } from './../api/cadastro-form.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  public usuario: any
  public userType:any
  userGroup:any
  nome : any
  endereco : any
  senha: any
  telefone: any
  turma: any
  cpf: any

  constructor(private navCtrl: NavController, private service: CadastroFormService, private route: ActivatedRoute) {   
  }

  public salvaAluno(){
    let newObj:any = {    
      cpf   : this.cpf,
      endereco : this.endereco,
      nome  : this.nome,
      senha : this.senha,
      status : true,
      telefone : this.telefone,
      turma : this.turma
    }

    this.service.postDados(newObj, this.userGroup).then((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.endereco = ''
      this.nome = ''
      this.senha = ''
      this.telefone = ''
      this.turma = ''
    })

  }

  public salvaProfessor(){
    let newObj:any = {  
      cpf   : this.cpf,
      endereco : this.endereco,
      nome  : this.nome,
      senha : this.senha,
      status : true,
      telefone : this.telefone,
    }

    this.service.postDados(newObj, this.userGroup).then((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.endereco = ''
      this.nome = ''
      this.senha = ''
      this.telefone = ''
    })

  }

  public salvaTecnico(){
    let newObj:any = {    
      cpf   : this.cpf,
      endereco : this.endereco,
      nome  : this.nome,
      senha : this.senha,
      status : true,
      telefone : this.telefone,
    }

    this.service.postDados(newObj, this.userGroup).then((newObj) => {
      console.log(newObj)
      this.cpf = ''
      this.endereco = ''
      this.nome = ''
      this.senha = ''
      this.telefone = ''
    })

  }

  goHome(){
    this.navCtrl.navigateForward('home', {
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

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }

}
