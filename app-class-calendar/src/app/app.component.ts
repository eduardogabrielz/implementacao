import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  exibirMenu(): boolean{
    const excludedRoutes = ['login']; // Adicione as rotas que devem excluir o menu
    
    // Verifique se a rota atual está na lista de rotas excluídas
    const currentRoute = this.router.url.split('/')[1];
    return !excludedRoutes.includes(currentRoute);
}

}
