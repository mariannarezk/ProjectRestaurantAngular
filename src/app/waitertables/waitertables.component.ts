import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WaitertablesService } from '../waitertables.service';

@Component({
  selector: 'app-waitertables',
  templateUrl: './waitertables.component.html',
  styleUrls: ['./waitertables.component.css']
})
export class WaitertablesComponent implements OnInit {
  public array;
  public array2;
  offset:{x: any, y: any};
  public items;
  constructor(private waiterservice:WaitertablesService,private http: HttpClient) {
    this.items = Array<object>();
    this.getTables();
  }
  getTables() {
    
    this.waiterservice.getTables().subscribe(result => {
      this.array2 = result;
      for (let array of this.array2) {
        this.items.push({ 
          tableId: array.tableId,
          number:this.items.length + 1,
          x:array.x,
          y:array.y,
          height:array.height,
          width:array.width,
          borderRadius:array.borderRadius,
        });
      }
      console.log(this.items);
    }), error => console.error(error);


  }
  ngOnInit(): void {
  }
}
