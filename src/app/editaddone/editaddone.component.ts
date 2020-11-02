import { Component, OnInit } from '@angular/core';
import { AddonesService } from '../addones.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editaddone',
  templateUrl: './editaddone.component.html',
  styleUrls: ['./editaddone.component.css']
})
export class EditaddoneComponent implements OnInit {
  addoneid = this.dataService.addoneid;
  addonename = this.dataService.addonename;
  addonesize = this.dataService.addonesize;
  addoneprice = this.dataService.addoneprice;
  displayedit = true;
  displayInitial = false;
  constructor(private addonesService: AddonesService, private dataService: DataService) { }
  BackToInitial() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  saveaddoneedit() {
    this.addonesService.editaddone(this.addoneid, this.addonename, this.addonesize, this.addoneprice);
    this.displayedit = false;
    this.displayInitial = true;
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
