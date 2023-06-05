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

  // Horarios
  public getAllHorario(horarioType:any){
    return new Promise((ret) => {
      this.atualizaHost(horarioType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  // Monitoria
  public getAllMonitoria(monitoriaType:any){
    return new Promise((ret) => {
      this.atualizaHost(monitoriaType)
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }

  public atualizaHost(userType:any){
    const caminhoTipoUsuario = '/' + userType;

    if (!this.host.includes(caminhoTipoUsuario)) {
      const indiceBarra = this.host.lastIndexOf('/');
      const caminhoSemBarra = this.host.slice(0, indiceBarra);
      this.host = caminhoSemBarra + caminhoTipoUsuario;
    }
  }
}
