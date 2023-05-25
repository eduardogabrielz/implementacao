import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; /* importação */

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  /* API gratuita para tratamento de JSON  */
  /* api de objetos JSON */
  public host = 'http://localhost:8080/api/horarios';

  constructor(private http: HttpClient) { }

  public getAllDados(){
    return new Promise((ret) => {

      // requisição GET
      this.http.get(this.host).subscribe(dados => {

        ret(dados);

      });
    })
  }
}
