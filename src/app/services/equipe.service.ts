import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EquipeService {
  equipe:any;
  total:number = 9;
  constructor(public http: HttpClient) { }

  getequipe():Observable<any> {
    return this.http.get('https://randomuser.me/api/?results='+this.total);
  }
}
