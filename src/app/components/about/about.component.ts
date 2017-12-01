import { Component, OnInit } from '@angular/core';
import {EquipeService} from "../../services/equipe.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  equipe = null;
  constructor(public eqp:EquipeService) {
    this.eqp.getequipe().subscribe(data => {
      this.equipe = data.results;
      console.log(data.results);
    });
  }

  ngOnInit() {

  }

}
