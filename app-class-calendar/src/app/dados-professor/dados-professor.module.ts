import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosProfessorPageRoutingModule } from './dados-professor-routing.module';

import { DadosProfessorPage } from './dados-professor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosProfessorPageRoutingModule
  ],
  declarations: [DadosProfessorPage]
})
export class DadosProfessorPageModule {}
