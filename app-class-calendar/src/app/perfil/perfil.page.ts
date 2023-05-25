import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PerfilPage implements OnInit {

  public dados = [{
    nome: 'Carls',
    cpf: 1111111111 - 1,
    turma: '3°A',
    telefone: '999999999',
    endereco: 'Rua Carls Varls Charls',
    senha: '**********'
  }]

  public alertButtons = ['Enviar'];
  public alertInputs = [
    {
      type: 'string',
      placeholder: 'Nome Completo',
      attributes: {
        maxlength: 100,
      },
    },
    {
      placeholder: 'Celular',
      attributes: {
        minlength: 11,
        maxlength: 11,
      },
    },
    {
      type: 'email',
      placeholder: 'Email',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'Descrição da solicitação',
    },
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHome() {
    this.navCtrl.navigateBack('home')
  }

}


