import { Component, OnInit } from '@angular/core';
import {EquipeService} from "../../services/equipe.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  equipe = null;
  private carregando: boolean = true;
  constructor(public eqp:EquipeService) {
    this.eqp.getequipe().subscribe(data => {
      setTimeout(() =>{
        this.equipe = data.results;
        this.carregando = false;
      }, 3000);
    });
  }

  ngOnInit() {

  }

}
