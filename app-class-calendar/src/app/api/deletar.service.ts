import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeletarService {

  public host: string = 'http://localhost:8080/api/';
  public options: any = { headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}

  constructor(private http: HttpClient) { }

  public deleteDados(disciplinaType: any,id: any) {
    this.atualizaHost(disciplinaType, id);
    return new Promise((ret) => {

      // Requisição DELETE
      this.http.delete(this.host, this.options).subscribe(dados => {
        ret(dados);
      });
    });
  }

  public deleteUsuarios(userType: any,id: any) {
    this.atualizaHost(userType, id);
    return new Promise((ret) => {

      // Requisição DELETE
      this.http.delete(this.host, this.options).subscribe(dados => {
        ret(dados);
      });
    });
  }
  
  
  public atualizaHost(disciplinaType: any, id: any) {
    const userTypePath = '/' + disciplinaType;
    const idPath = '/' + id;
  
    if (!this.host.includes(userTypePath)) {
      const lastSlashIndex = this.host.lastIndexOf('/');
      const pathWithoutId = this.host.slice(0, lastSlashIndex);
      this.host = pathWithoutId + userTypePath;
    }
  
    if (id && !this.host.endsWith(idPath)) {
      // Remove todas as ocorrências de números seguidos de '/' no final do host
      this.host = this.host.replace(/\/\d+(\/)?$/, '');
      this.host += idPath;
    }
  } 
}
