import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditarFormService } from '../api/editar-form.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.page.html',
  styleUrls: ['./professor.page.scss'],
})
export class ProfessorPage implements OnInit {

  public professor: any;
  userType: any = 'professor';
  idProfessor: any;
  nomeATT: any;
  cpfATT: any;
  telefoneATT: any;
  enderecoATT: any;
  senhaATT: any;
  status: any;

  constructor(private route: ActivatedRoute, private service: EditarFormService) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.professor = params['professor'];
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
      nome: this.nomeATT
    };

    this.service.putDados(newObj, this.userType).then(dados => {
      console.log('UPDATE');
      console.log(dados);
    });
  }
}


