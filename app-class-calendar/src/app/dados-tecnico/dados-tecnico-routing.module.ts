import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosTecnicoPage } from './dados-tecnico.page';

const routes: Routes = [
  {
    path: '',
    component: DadosTecnicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosTecnicoPageRoutingModule {}
