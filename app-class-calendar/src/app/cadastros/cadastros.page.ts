import { CadastroFormService } from './../api/cadastro-form.service';
import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.page.html',
  styleUrls: ['./cadastros.page.scss'],
})
export class CadastrosPage implements OnInit {

  nome : any
  endereco : any
  senha: any
  telefone: any
  turma: any
  cpf: any
  
  constructor(private service: CadastroFormService) {   
  }

  public salvaUsuario(){
    let newObj:any = {    
      cpf   : this.cpf,
      endereco : this.endereco,
      nome  : this.nome,
      senha : this.senha,
      status : true,
      telefone : this.telefone,
      turma : this.turma
    }

    this.service.postDados(newObj).then((newObj) => {
      console.log(newObj)
    })

  }
  ngOnInit() {
  }

}
