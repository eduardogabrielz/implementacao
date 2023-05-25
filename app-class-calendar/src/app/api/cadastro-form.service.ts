import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /* importação */

@Injectable({
  providedIn: 'root'
})
export class CadastroFormService {

  public host: string = 'http://localhost:8080/api/aluno';
  public options: any = { headers: new HttpHeaders({'Content-Type':'application/json;charset=UTF-8'})}
  
  constructor(private http: HttpClient) {}

  public postDados(obj: any){
    return new Promise((ret) => {

      this.http.post(this.host, JSON.stringify(obj), this.options).subscribe(dados => {
        ret(dados)
      });
      })
    }

}
