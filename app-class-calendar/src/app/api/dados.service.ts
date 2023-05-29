import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /* importação */

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  /* API gratuita para tratamento de JSON  */
  /* api de objetos JSON */
  public host: string = 'http://localhost:8080/api/';
 
  constructor(private http: HttpClient) { }

  // Usuario, professor e Aluno
  public getAllDados(userType:any){
    return new Promise((ret) => {
      this.atualizaHost(userType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  // Materias
  public getAll(disciplinaType:any){
    return new Promise((ret) => {
      this.atualizaHost(disciplinaType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public atualizaHost(userType:any){
    const userTypePath = '/' + userType 

  if (!this.host.includes(userTypePath)) {
    const slashIndex = this.host.lastIndexOf('/');
    const pathWithoutSlash = this.host.slice(0, slashIndex);
    this.host = pathWithoutSlash + userTypePath;

  }
  }


}
