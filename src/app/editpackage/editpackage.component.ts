import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../packages.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editpackage',
  templateUrl: './editpackage.component.html',
  styleUrls: ['./editpackage.component.css']
})
export class EditpackageComponent implements OnInit {

  displayedit=true;
displayInitial = false;
  constructor(private packageService: PackagesService, private dataService: DataService) { }
 packageid=this.dataService.packageid;
 packagename = this.dataService.packagename;
 packageprice = this.dataService.packageprice;
 packagemenuid = this.dataService.packagemenuid;
   BackToInitial() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  savepackageedit() {
    this.packageService.editPackage(
     this.packageid,this.packagename,this.packageprice,this.packagemenuid
    );
    this.displayedit = false;
    this.displayInitial = true;
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
