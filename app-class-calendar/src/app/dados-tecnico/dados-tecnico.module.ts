import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosTecnicoPageRoutingModule } from './dados-tecnico-routing.module';

import { DadosTecnicoPage } from './dados-tecnico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosTecnicoPageRoutingModule
  ],
  declarations: [DadosTecnicoPage]
})
export class DadosTecnicoPageModule {}
