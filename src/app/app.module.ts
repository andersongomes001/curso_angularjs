import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortifolioComponent } from './components/portifolio/portifolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProdutoComponent } from './components/produto/produto.component';
//import { RoutesModule } from './/routes.module';

import { RoutesModule } from './routes.module';
import {InformacaoService} from "./services/informacao.service";
import {HttpClientModule} from "@angular/common/http";
import {EquipeService} from "./services/equipe.service";
import { LoadingComponent } from './components/loading/loading.component';
import {ProdutosService} from "./services/produtos.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortifolioComponent,
    AboutComponent,
    ProdutoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [
    InformacaoService,
    EquipeService,
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
