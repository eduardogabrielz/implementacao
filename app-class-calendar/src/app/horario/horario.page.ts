import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  
  materias:any = [];
  public usuario: any;
  public userType: any;
  disciplinaType:any = 'disciplinas';
  userGroup: any = 'professores';
  itens:any = []

  constructor(private route: ActivatedRoute, private serviceMaterias: DadosService, private service: DadosService, private navCtrl: NavController) { }

  public getAll(){
    this.serviceMaterias.getAll(this.disciplinaType).then(dados => {
      this.materias = dados;
      console.log(this.materias)
    })
  }

  public getAllDados(){
    this.service.getAllDados(this.userGroup).then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irHorarioAgendamento(materia:any){
    this.navCtrl.navigateForward('materia', {
      queryParams: {materia: materia,
                    usuario: this.usuario,
                    userType: this.userType }
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

  ngOnInit() {
    this.getAll();
    this.getAllDados();
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }

}
