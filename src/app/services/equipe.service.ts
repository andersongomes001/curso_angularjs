import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class EquipeService {
  equipe:any;
  constructor(public http: HttpClient) { }

  getequipe():Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=100');
  }
}
