import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {isObject} from "util";

@Injectable()
export class InformacaoService {
  infor: any = {};
  carregada: boolean = false;

  constructor(public http:HttpClient ) {
    this.http.get<Object>("assets/data/info.pagina.json")
      .subscribe(data => {
          this.carregada = true;
          this.infor = data;
      },erro => {
          console.log(erro);
      });
  }

}
