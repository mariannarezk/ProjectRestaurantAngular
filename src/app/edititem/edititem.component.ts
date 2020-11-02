import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
displayedit=this.dataService.transshowedititem;
displayInitial = false;

  constructor(private itemService: ItemService, private dataService: DataService) { 

this.displayedit = this.dataService.transshowedititem;
this.dataService.itemid = this.itemid;
this.dataService.itemname=this.itemname;
this.dataService.itemprice=this.itemprice;
this.dataService.itemdescr=this.itemdescr;
this.dataService.itemcalories=this.itemcalories;
this.dataService.itemsize =this.itemsize;
this.dataService.itemdiscount=this.itemdiscount;
this.dataService.editcategid=this.categid;
this.dataService.edititemmenuid=this.menuid;
  }
  itemid = this.dataService.itemid ;
  itemname = this.dataService.itemname ;
  itemprice=this.dataService.itemprice ;
  itemdescr=this.dataService.itemdescr;
  itemcalories=this.dataService.itemcalories ;
  itemsize=this.dataService.itemsize ;
  itemdiscount=this.dataService.itemdiscount ;
   categid = this.dataService.editcategid;
   menuid = this.dataService.edititemmenuid;

  // this.dataService.itemid = this.itemid;
  
   BackToInitial() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  saveitemedit() {
    this.itemService.editItem(
      this.itemid, this.itemname, this.itemprice, this.itemdescr, this.itemcalories, this.itemsize,
      this.itemdiscount, this.categid,this.menuid
    );
    this.dataService.transshowedititem=this.displayedit = false;

  }
  closeEditItem(){
    this.dataService.transshowedititem=this.displayedit=false;
  }
  ngOnInit(): void {
    this.dataService.itemid = this.itemid;
this.dataService.itemname=this.itemname;
this.dataService.itemprice=this.itemprice;
this.dataService.itemdescr=this.itemdescr;
this.dataService.itemcalories=this.itemcalories;
this.dataService.itemsize =this.itemsize;
this.dataService.itemdiscount=this.itemdiscount;
this.dataService.editcategid=this.categid;
this.dataService.edititemmenuid=this.menuid;
  }

}
