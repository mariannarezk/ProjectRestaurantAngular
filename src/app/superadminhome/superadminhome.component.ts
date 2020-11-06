import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superadminhome',
  templateUrl: './superadminhome.component.html',
  styleUrls: ['./superadminhome.component.css']
})
export class SuperadminhomeComponent implements OnInit {
  activesettings=false;
  activeallrestos=false;
  activerequests=false;
  constructor() { }

  ngOnInit(): void {
  }
  settings(){
    this.activesettings=true;
    this.activeallrestos=false;
    this.activerequests=false;
  }
  allrestos(){
    this.activesettings=false;
    this.activeallrestos=true;
    this.activerequests=false;
  }
  restosrequests(){
    this.activesettings=false;
    this.activeallrestos=false;
    this.activerequests=true;
  }

}
