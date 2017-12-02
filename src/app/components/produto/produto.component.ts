import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styles: []
})
export class ProdutoComponent implements OnInit {

  constructor(private actrou: ActivatedRoute) {
    this.actrou.params.subscribe(parametros => {
       console.log(parametros.id);
    });
  }

  ngOnInit() {
  }

}
