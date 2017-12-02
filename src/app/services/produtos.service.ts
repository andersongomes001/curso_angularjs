import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getProduto_id(id:string = null):Observable<any>{
    return this.http.get("https://paginaangular.firebaseio.com/produtos/"+id+".json");
  }
  getProdutos():Observable<any>{
    return this.http.get("https://paginaangular.firebaseio.com/produtos_ids.json");
  }

}
