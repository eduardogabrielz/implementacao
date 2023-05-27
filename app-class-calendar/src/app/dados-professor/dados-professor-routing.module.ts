import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosProfessorPage } from './dados-professor.page';

const routes: Routes = [
  {
    path: '',
    component: DadosProfessorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosProfessorPageRoutingModule {}
