import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'materia',
    loadChildren: () => import('./materia/materia.module').then( m => m.MateriaPageModule)
  },
  {
    path: 'agendamento',
    loadChildren: () => import('./agendamento/agendamento.module').then( m => m.AgendamentoPageModule)
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'professor',
    loadChildren: () => import('./professor/professor.module').then( m => m.ProfessorPageModule)
  },
  {
    path: 'dados-aluno',
    loadChildren: () => import('./dados-aluno/dados-aluno.module').then( m => m.DadosAlunoPageModule)
  },
  {
    path: 'dados-professor',
    loadChildren: () => import('./dados-professor/dados-professor.module').then( m => m.DadosProfessorPageModule)
  },
  {
    path: 'dados-tecnico',
    loadChildren: () => import('./dados-tecnico/dados-tecnico.module').then( m => m.DadosTecnicoPageModule)
  },
  {
    path: 'aluno',
    loadChildren: () => import('./aluno/aluno.module').then( m => m.AlunoPageModule)
  },  {
    path: 'tecnico',
    loadChildren: () => import('./tecnico/tecnico.module').then( m => m.TecnicoPageModule)
  },
  {
    path: 'disciplina',
    loadChildren: () => import('./disciplina/disciplina.module').then( m => m.DisciplinaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
