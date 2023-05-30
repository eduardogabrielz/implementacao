import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { NavController} from '@ionic/angular';
import { DeletarService } from '../api/deletar.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dados-professor',
  templateUrl: './dados-professor.page.html',
  styleUrls: ['./dados-professor.page.scss'],
})
export class DadosProfessorPage implements OnInit {

  itens : any
  userType: any = 'professor';
  button: any;
  
  constructor(private route: ActivatedRoute, private service: DadosService, private navCtrl: NavController, private exclusaoProfessor : DeletarService) { }

  /* recupera todos os objetos do banco */
  public getAllDados(){
    this.service.getAllDados(this.userType+'es').then(dados => {
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

  public excluirProfessor(professor:any){
    this.exclusaoProfessor.deleteUsuarios(this.userType, professor.idProfessor).then((professor) => {
      console.log('Delete')
      console.log('Materia excluida: '+ professor)
      this.getAllDados();
    })
  }

  ngOnInit() {
    const button = this.route.snapshot.queryParams['button'];
    this.button = button;
    this.getAllDados();
  }


}
