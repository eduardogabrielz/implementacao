import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CadastroFormService } from '../api/cadastro-form.service';
import { DeletarService } from '../api/deletar.service';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-disciplina',
  templateUrl: './disciplina.page.html',
  styleUrls: ['./disciplina.page.scss'],
})
export class DisciplinaPage implements OnInit {

  public professor: any;
  idProfessor:any
  disciplinaType:any = 'disciplina';
  materia:any;
  materias:any;

  constructor(private route: ActivatedRoute, private service: CadastroFormService, private exclusaoMateria : DeletarService, private serviceMaterias: DadosService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.professor = params['professor'];
      this.getAll();
    });
  }

  public adicionarMateria() {
    let newObj: any = {
      materia : this.materia,
      professor : {
        idProfessor: this.professor.idProfessor
      }
    };
    
    this.service.postMateria(newObj, this.disciplinaType).then((newObj) => {
      console.log(newObj)
      this.materia = ''
      this.getAll();
    })
  }

  public excluirMateria(materia: any) {
    this.exclusaoMateria.deleteDados(this.disciplinaType, materia.idDisciplina).then((materia) => {
      console.log('Delete')
      console.log('Materia excluida: '+ materia)
      this.getAll();
    })
  }
 
  public getAll(){
    this.serviceMaterias.getAll(this.disciplinaType+'s').then(dados => {
      this.materias = dados;
      console.log(this.materias)
    })
  }

}
