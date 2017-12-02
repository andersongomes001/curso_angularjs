import { Component } from '@angular/core';
import {InformacaoService} from "../../services/informacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor( public  info: InformacaoService, private router:Router) {

  }
  buscar_produto(valor:string = null){
    this.router.navigate(['buscar', valor]);
  }
}
