import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent  {
  public ano:number = new Date().getFullYear();

  constructor() {
  }
}