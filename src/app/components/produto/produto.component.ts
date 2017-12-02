import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProdutosService} from "../../services/produtos.service";

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styles: []
})
export class ProdutoComponent implements OnInit {
  dados = null;
  loadProduct:boolean = true;

  constructor(
    private actrou: ActivatedRoute,
    private prodser: ProdutosService
    ) {
    this.actrou.params.subscribe(parametros => {

       this.prodser.getProduto_id(parametros.id).subscribe(data=>{
         setTimeout(()=>{
           this.dados = data;
           this.dados.cod = parametros.id;
           this.loadProduct = false;
         }, 3000);


       }, erro =>{
         console.log(erro);
       });
    });
  }

  ngOnInit() {
  }

}
