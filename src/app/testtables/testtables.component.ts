import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testtables',
  templateUrl: './testtables.component.html',
  styleUrls: ['./testtables.component.css']
})
export class TesttablesComponent implements OnInit {
seatsnb;
  constructor() { 
    this.seatsnb=0;
  }

  ngOnInit(): void {
  }
  getnb(){

  }

}
