import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { NavController } from '@ionic/angular';
import { DeletarService } from '../api/deletar.service';

@Component({
  selector: 'app-dados-aluno',
  templateUrl: './dados-aluno.page.html',
  styleUrls: ['./dados-aluno.page.scss'],
})
export class DadosAlunoPage implements OnInit {

  itens : any
  userType: any = 'aluno';
  constructor(private service: DadosService, private navCtrl: NavController, private exclusaoAluno: DeletarService) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public irnoAluno(aluno:any) {
    this.navCtrl.navigateForward('aluno', {
      queryParams: { aluno: aluno }
    });
  }

  public excluirAluno(aluno:any){
    this.exclusaoAluno.deleteUsuarios(this.userType, aluno.idAluno).then((aluno) => {
      console.log('Delete')
      console.log('Materia excluida: '+ aluno)
      this.getAllDados();
    })
  }

  ngOnInit() {
    this.getAllDados()
  }

}
