import { CadastroFormService } from './../api/cadastro-form.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  constructor(private service: CadastroFormService) {   
  }

  public salvaUsuario(){
    let newObj:any = {    
      cpf   : '414141',
      endereco : 'rua das dalias',
      nome  : 'carlos',
      senha : 'abacaxi',
      status : true,
      telefone : '141414',
      turma : '5° ESW'
    }

    this.service.postDados(newObj).then((newObj) => {
      console.log(newObj)
    })

  }
  
  public alertButtons = ['OK'];

  public getAllDados(){
    this.service.getAllDados().then(dados => {
      console.log('GET ALL DADOS');
      console.log(dados);
    })
  }

  ngOnInit() {
  }

}
