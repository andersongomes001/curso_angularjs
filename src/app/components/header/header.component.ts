import { Component } from '@angular/core';
import {InformacaoService} from "../../services/informacao.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor( public  info: InformacaoService) {

  }
}
