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
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
