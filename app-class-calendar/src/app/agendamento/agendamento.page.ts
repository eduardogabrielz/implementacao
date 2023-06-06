import { Component, OnInit } from '@angular/core';
import { DadosService } from '../api/dados.service';
import { ActivatedRoute } from '@angular/router';
import { CadastroFormService } from '../api/cadastro-form.service';
import { AlertController, NavController } from '@ionic/angular';

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
  items:any
  horarioType:any = 'horario'
  monitoriaType:any='monitoria'
  
  constructor(private navCtrl: NavController, private alertController: AlertController, private postAgendamento: CadastroFormService,private service: DadosService, private route: ActivatedRoute) { }

  public getAllDados(){
    this.service.getAllHorario(this.horarioType+'s').then(dados => {
      this.itens = dados;
      console.log(this.itens)
    })
  }

  public getAll(){
    this.service.getAllMonitoria(this.monitoriaType+'s').then(dados => {
      this.items = dados;
      console.log(this.items)
    })
  }

  agendamentoExistente(horario: any){
    return this.items.some((items: { horario: any; }) => items.horario.idHorario === horario.idHorario);
  }
   

  formatarHorario(horarioNumerico: number){
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
  
      this.postAgendamento.postAgendamento(newObj, this.monitoriaType).then(async (newObj) => {
        await this.exibirAlerta('Agendamento marcado, por favor, volta para a home e atualize para visualizar o agendamento');
        console.log(newObj);
      });
  
  }
  
  async exibirAlerta (mensagem: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensagem,
      buttons: ['OK']
    });
  
    await alert.present();
  }
  
  goHome(){
    this.navCtrl.navigateForward('home', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  goPerfil(){
    this.navCtrl.navigateForward('perfil', {
      queryParams: { usuario: this.usuario,
                     userType: this.userType }
    });
  }

  ngOnInit() {
    this.getAllDados()
    this.getAll()
    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
      this.userType = params['userType']});
  }
}
