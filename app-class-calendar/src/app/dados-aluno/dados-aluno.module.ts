import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosAlunoPageRoutingModule } from './dados-aluno-routing.module';

import { DadosAlunoPage } from './dados-aluno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosAlunoPageRoutingModule
  ],
  declarations: [DadosAlunoPage]
})
export class DadosAlunoPageModule {}
