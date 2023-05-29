import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletarService {

  public host: string = 'http://localhost:8080/api/';


  constructor(private http: HttpClient) { }

  public deleteDados(disciplinaType: any,id: any) {
    return new Promise((resolve) => {
      this.atualizaHost(disciplinaType, id);
  
      // Requisição DELETE
      this.http.delete(this.host).subscribe(dados => {
        console.log(dados);
        resolve(dados);
      });
    });
  }
  
  public atualizaHost(disciplinaType: any, id: any) {
    const disciplinaTypePath = '/' + disciplinaType;
  
    if (!this.host.includes(disciplinaTypePath)) {
      const slashIndex = this.host.lastIndexOf('/');
      const pathWithoutSlash = this.host.slice(0, slashIndex);
      this.host = pathWithoutSlash + disciplinaTypePath + '/' + id;
    }
  }
  
}
