import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { CadastroFormService } from '../api/cadastro-form.service';
import { ActivatedRoute } from '@angular/router';
import { DadosService } from '../api/dados.service';
import { DeletarService } from '../api/deletar.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.page.html',
  styleUrls: ['./materia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MateriaPage implements OnInit {

  public materia: any
  public professor:any
  disponivel : any
  horarioFim: any
  horarioInicio: any
  dia:any
  mes:any
  idDisciplina:any
  conjunto:any
  itens:any
  materias:any
  horarioType:any = 'horario'

  constructor(private exclusaoHorario: DeletarService, private route: ActivatedRoute, private navCtrl: NavController, private service: CadastroFormService, private allHorarios: DadosService) { }

  public salvaHorario(){
    let newObj:any = {    
      disponivel   : true,
      horarioFim : this.horarioFim,
      horarioInicio  : this.horarioInicio,
      dia : this.dia,
      mes: this.mes,
      disciplina: {
        idDisciplina: this.materia.idDisciplina
      }
    };
    
    this.service.postHorario(newObj, this.horarioType).then((newObj) => {
      console.log(newObj)
      this.mes = ''
      this.dia = ''
      this.horarioInicio = ''
      this.horarioFim = ''
      this.getAll();
    })
  }

  public getAll(){
    this.allHorarios.getAll(this.horarioType+'s').then(dados => {
      this.conjunto = dados;
      console.log(this.conjunto)
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.materia = params['materia'];
      this.getAll();
    });
  }

  formatarHorario(horarioNumerico: number): string {
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }
  
  public excluirHorario(horario: any) {
    this.exclusaoHorario.deleteDados(this.horarioType, horario.idHorario).then((horario) => {
      console.log('Delete')
      console.log('Horario excluida: '+ horario)
      this.getAll();
    })
  }

  goHome(){
    this.navCtrl.navigateBack('home')
  }
}

