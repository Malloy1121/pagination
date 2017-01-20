import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input()items=[];
  private currentList=[];
  private buttons=[];
  private currentPage:number=1;
  private totalPages:number=0;
  constructor() {  }

  ngOnInit() {

    this.totalPages=Math.ceil(this.items.length/5);
    if(this.currentList.length%5!=0){
      this.totalPages++;
    }
    console.log(this.totalPages);
    this.currentList=this.items.slice(0,5);
    this.changeButtons(1);
    console.log(this.currentList);
  }

  changeButtons(page){
    let target=page;
    if(page<=2){
      target=3;
    }
    else if(page>=this.totalPages-2){
      target=this.totalPages-2;
    }
    this.buttons=[];
    for(let i=target-2;i<=this.totalPages&&i<target+3;i++){
      this.buttons.push(this.items[i-1]);
    }
    this.currentPage=page;
    this.changeList(page);
    console.log(this.buttons);
  }

  changeList(page){
    const target=(page-1)*5;
    this.currentList=this.items.slice(target,target+5);
  }

}
