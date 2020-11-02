import { Component, OnInit } from '@angular/core';
import {PackagesService} from '../packages.service';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  public displaycreate = false;
  public displayedit = false;
  public displayinitial = true;
  public displaycomposeitems=false;
  packagesitems;
  idmenu;
  packages;
  //for create : 
  packageName;packagePrice;
  //for edit :
  editpackageid;editpackageName;editpackagePrice;
  constructor(private dataService: DataService, private packageService: PackagesService,
    private _Activatedroute: ActivatedRoute) { 
      this.idmenu =this.dataService.transmenuid;
    this.showPackages();
   
    }
    showPackages() {
      this.packageService.getPackages(this.idmenu).subscribe(result => {
        this.packages = result;
      }), error => console.error(error);
     
    }

    showcreate() {
      this.displaycreate = true;
    }
    createPackage(){
      this.packageService.savePackage(this.packageName, this.packagePrice, this.idmenu);
      this.closeCreate();
    }
    closeCreate() {
      this.displaycreate = false;
    //   window.location.reload();
    }
    editpackage(packageId,packageName,packagePrice,menu_Id){
  this.dataService.packageid = packageId;
  this.dataService.packagename = packageName;
  this.dataService.packageprice = packagePrice;
  this.dataService.packagemenuid = menu_Id;
  this.displayedit = true;
 this.editpackageid = packageId;
 this.editpackageName = packageName;
 this.editpackagePrice = packagePrice;
  
    }
    saveEditPackage(){
this.packageService.editPackage(this.editpackageid,this.editpackageName,this.editpackagePrice,this.idmenu);
this.closeEdit();    
}
    closeEdit(){
      this.displayedit=false;
    }
    composeitempackage(packageid){
this.displaycomposeitems = true;
this.packageService.showitemspackages(packageid,this.idmenu).subscribe( result =>{
  this.packagesitems = result;
}) ,error => console.error(error);

    }
    closeItemPackages(){
      this.displaycomposeitems = false;
    }
    saveItemPackages(){
      for(var a of this.packagesitems){
        this.packageService.saveItemPackage(a.packageId,a.itemId,a.itemName,a.quantity,a.isChoosed);
       }
       this.closeItemPackages();
    }

  ngOnInit(): void {
    this.showPackages();
  }

}
