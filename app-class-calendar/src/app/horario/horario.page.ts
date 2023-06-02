import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  
  materias:any;
  disciplinaType:any = 'disciplinas';
  userType: any = 'professores';
  itens:any

  constructor(private serviceMaterias: DadosService, private service: DadosService, private navCtrl: NavController) { }

  public getAll(){
    this.serviceMaterias.getAll(this.disciplinaType).then(dados => {
      this.materias = dados;
      console.log(this.materias)
    })
  }

  public getAllDados(){
    this.service.getAllDados(this.userType).then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irHorarioAgendamento(materia:any){
    this.navCtrl.navigateForward('materia', {
      queryParams: {materia: materia }
    });
  }
  ngOnInit() {
    this.getAll();
    this.getAllDados();
  }

}
