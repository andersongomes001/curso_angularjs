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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortifolioComponent,
    AboutComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    HttpClientModule
  ],
  providers: [
    InformacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
