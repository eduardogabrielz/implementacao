import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /* importação */

@Injectable({
  providedIn: 'root'
})
export class CadastroFormService {

  public host: string = 'http://localhost:8080/api/';
  public options: any = { headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}
  
  constructor(private http: HttpClient) {}

  // usuario
  public postDados(obj: any, userType:any){
    this.atualizaHost(userType)
    return new Promise((ret) => {

      this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
        ret(dados)
      });
      })
    }

    // materia
    public postMateria(obj: any, disciplinaType:any){
      this.atualizaHost(disciplinaType)
      return new Promise((ret) => {
  
        this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
          ret(dados)
        });
        })
      }

    // horario
    public postHorario(obj: any, horarioType:any){
      this.atualizaHost(horarioType)
      return new Promise((ret) => {
  
        this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
          ret(dados)
        });
        })
      }

    // agendamento
    public postAgendamento(obj: any, monitoriaType:any){
      this.atualizaHost(monitoriaType)
      return new Promise((ret) => {
    
        this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
          ret(dados)
        });
        })
      }

    public atualizaHost(userType:any){
      const caminho = '/' + userType 
  
      if (!this.host.includes(caminho)) {
        const indiceBarra = this.host.lastIndexOf('/');
        const caminhoSemBarra = this.host.slice(0, indiceBarra);
        this.host = caminhoSemBarra + caminho;
      }      
    }
}
