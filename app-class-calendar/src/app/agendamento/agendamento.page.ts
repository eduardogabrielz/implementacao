import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { ActivatedRoute } from '@angular/router';
import { CadastroFormService } from '../api/cadastro-form.service';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  public usuario: any
  public userType: any
  public horarioSelecionado: any;
  horario:any
  idHorario:any
  itens:any
  horarioType:any = 'horario'
  monitoriaType:any='monitoria'
  
  constructor(private postAgendamento: CadastroFormService,private service: DadosService, private route: ActivatedRoute) { }

  public getAllDados(){
    this.service.getAllHorario(this.horarioType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  formatarHorario(horarioNumerico: number): string {
    const horarioString = horarioNumerico.toString();
    const hora = horarioString.substring(0, horarioString.length - 2);
    const minutos = horarioString.substring(horarioString.length - 2);
    return hora + ':' + minutos;
  }

  public salvaAgendamento(horarioSelecionado:any) {
      let newObj: any = {    
        estado: true,
        aluno: {
          idAluno: this.usuario.idAluno
        },
        horario: {
          idHorario: horarioSelecionado.idHorario
        }
      };
  
      this.postAgendamento.postAgendamento(newObj, this.monitoriaType).then((newObj) => {
        console.log(newObj);
      });
  
  }
  
  ngOnInit() {
    this.getAllDados()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}
