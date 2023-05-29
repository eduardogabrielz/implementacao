import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-professor',
  templateUrl: './dados-professor.page.html',
  styleUrls: ['./dados-professor.page.scss'],
})
export class DadosProfessorPage implements OnInit {

  itens : any
  userType: any = 'professores';
  constructor(private service: DadosService, private navCtrl: NavController) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userType).then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoProfessor(professor:any) {
    this.navCtrl.navigateForward('professor', {
      queryParams: { professor: professor }
    });
  }

  public irnaDisciplina(professor:any) {
    this.navCtrl.navigateForward('disciplina', {
      queryParams: { professor: professor }
    });
  }

  ngOnInit() {
    this.getAllDados()
  }

}
