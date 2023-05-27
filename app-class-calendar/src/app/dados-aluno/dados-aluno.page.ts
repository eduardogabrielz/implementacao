import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dados-aluno',
  templateUrl: './dados-aluno.page.html',
  styleUrls: ['./dados-aluno.page.scss'],
})
export class DadosAlunoPage implements OnInit {

  itens : any
  userType: any = 'alunos';
  constructor(private service: DadosService, private navCtrl: NavController) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userType).then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoAluno(aluno:any) {
    this.navCtrl.navigateForward('aluno', {
      queryParams: { aluno: aluno }
    });
  }

  ngOnInit() {
    this.getAllDados()
  }

}
