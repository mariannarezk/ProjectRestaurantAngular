import { Component, OnInit } from '@angular/core';
import { AddonesService } from '../addones.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-addones',
  templateUrl: './addones.component.html',
  styleUrls: ['./addones.component.css']
})
export class AddonesComponent implements OnInit {
  public addones: any;
  public displayinitial = true;
  public displaycreate = false;
  public displayedit = false;
  public addonename; public addonesize; public addoneprice;
  constructor(private addonesService: AddonesService, private dataService: DataService) {
    this.showAddOnes();
  }
  showAddOnes() {
    this.addonesService.getAddOnes().subscribe(result => {
      this.addones = result;
    }), error => console.error(error);
  }
  showcreate() {
    this.displaycreate = true;
  }
  closeCreate() {
    this.displaycreate = false;
    window.location.reload();
  }
  createAddone() {
    this.addonesService.saveAddOne(this.addonename, this.addonesize, this.addoneprice);
    this.closeCreate();
  }
  editaddone(addoneid, addonename, addonesize, addoneprice) {
    this.dataService.addoneid = addoneid;
    this.dataService.addonename = addonename;
    this.dataService.addonesize = addonesize;
    this.dataService.addoneprice = addoneprice;
    this.displayinitial = false;
    this.displayedit = true;
  }
  ngOnInit(): void {
  }

}
