import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProdutosService} from "../../services/produtos.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private listaProdutos:any[] = [];
  private loadProduct:boolean = true;
  constructor(private actrout: ActivatedRoute, private ps:ProdutosService) {
    this.actrout.params.subscribe(params => {
      this.search(params.id);

    });
  }

  ngOnInit() {
  }
  search(busca:string){
    this.ps.getSearch(busca).subscribe(data =>{
        data.forEach(item =>{

          if((item.categoria.indexOf(busca) >= 0) || (item.titulo.indexOf(busca) >= 0) ){
            this.listaProdutos.push(item);
          }
        });
        this.loadProduct = false;

    }, erro =>{

    });
  }

}
