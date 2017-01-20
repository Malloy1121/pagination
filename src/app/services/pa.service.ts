import { Injectable } from '@angular/core';

@Injectable()
export class PaService {
  public items=[];
  constructor() {
    for(let i=0;i<101;i++){
      this.items.push(i+1);
    }
  }

}
