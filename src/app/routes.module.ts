import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {
  PortifolioComponent,
  ProdutoComponent,
  AboutComponent
} from "./components/index.paginas";


const routes: Routes = [
  { path: '', component: PortifolioComponent},
  { path: 'about', component: AboutComponent},
  { path: 'produto', component: ProdutoComponent }
];

@NgModule({
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: false}),
    CommonModule
  ],
  declarations: []
})
export class RoutesModule { }
