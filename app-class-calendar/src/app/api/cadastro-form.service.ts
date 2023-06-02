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

    public atualizaHost(userType:any){
      const userTypePath = '/' + userType 

      if (!this.host.includes(userTypePath)) {
        const slashIndex = this.host.lastIndexOf('/');
        const pathWithoutSlash = this.host.slice(0, slashIndex);
        this.host = pathWithoutSlash + userTypePath;
      }
    }


    // materia
    public postMateria(obj: any, disciplinaType:any){
      this.atualizarHost(disciplinaType)
      return new Promise((ret) => {
  
        this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
          ret(dados)
        });
        })
      }

    public atualizarHost(disciplinaType:any){
      const userTypePath = '/' + disciplinaType 

      if (!this.host.includes(userTypePath)) {
        const slashIndex = this.host.lastIndexOf('/');
        const pathWithoutSlash = this.host.slice(0, slashIndex);
        this.host = pathWithoutSlash + userTypePath;
      }
    }

    // horario
    public postHorario(obj: any, horarioType:any){
      this.attHost(horarioType)
      return new Promise((ret) => {
  
        this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
          ret(dados)
        });
        })
      }

      public attHost(horarioType:any){
        const userTypePath = '/' + horarioType 
  
        if (!this.host.includes(userTypePath)) {
          const slashIndex = this.host.lastIndexOf('/');
          const pathWithoutSlash = this.host.slice(0, slashIndex);
          this.host = pathWithoutSlash + userTypePath;
        }
      }

}
