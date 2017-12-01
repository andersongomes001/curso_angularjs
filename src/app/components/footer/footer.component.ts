import { Component } from '@angular/core';
import {InformacaoService} from "../../services/informacao.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent  {
  public ano:number = new Date().getFullYear();

  constructor(public  info: InformacaoService) {
  }
}
