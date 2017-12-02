import { Component } from '@angular/core';
import {ProdutosService} from "../../services/produtos.service";


@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html'
})
export class PortifolioComponent {
  private loadProduct:boolean = true;
  private listaProdutos:any[] = [];
  constructor(private produtos:ProdutosService) {
    this.produtos.getProduto_id().subscribe( data => {
      setTimeout(()=>{
        this.listaProdutos = data;
        this.loadProduct = false;
      }, 3000);

    });
  }


}
