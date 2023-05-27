import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditarFormService } from '../api/editar-form.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  public aluno: any;
  userType: any = 'aluno';
  idAluno: any;
  nomeATT: any;
  cpfATT: any;
  telefoneATT: any;
  enderecoATT: any;
  senhaATT: any;
  status: any;
  turmaATT:any

  constructor(private route: ActivatedRoute, private service: EditarFormService) {
    this.route.queryParams.subscribe(params => {
      this.aluno = params['aluno'];
      this.idAluno = this.aluno.idAluno;
      this.nomeATT = this.aluno.nome;
      this.cpfATT = this.aluno.cpf;
      this.telefoneATT = this.aluno.telefone;
      this.enderecoATT = this.aluno.endereco;
      this.senhaATT = this.aluno.senha;
      this.turmaATT = this.aluno.turma;
    });
   }

   public atualizar() {
    let newObj: any = {
      idAluno: this.idAluno,
      cpf: this.cpfATT,
      telefone: this.telefoneATT,
      endereco: this.enderecoATT,
      senha: this.senhaATT,
      nome: this.nomeATT,
      turma : this.turmaATT
    };

    this.service.putDados(newObj, this.userType).then(dados => {
      console.log('UPDATE');
      console.log(dados);
    });
  }

  ngOnInit() {
  }

}
