import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProdutos():Observable<any>{
    return this.http.get("https://paginaangular.firebaseio.com/produtos.json");
  }
  getProduto_id():Observable<any>{
    return this.http.get("https://paginaangular.firebaseio.com/produtos_ids.json");
  }

}
