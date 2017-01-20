import { Component } from '@angular/core';
import {PaService} from "./services/pa.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private items=[];
  constructor(private service:PaService){
    this.items=this.service.items;
  }
}
