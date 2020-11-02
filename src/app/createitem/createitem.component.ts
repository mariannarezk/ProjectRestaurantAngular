import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {
  displaycreate=true;
  displayInitial = false;
  itemname = ''; itemprice = ''; itemdescription = ''; itemcalories = ''; itemsize = ''; itemdiscount = ''; imageFile: File;
  //categid = this.dataService.categoryid;
  itemmenuid = this.dataService.transmenuid;
  constructor(private dataService: DataService, private itemService: ItemService) { }
  BackToInitial() {
    this.displaycreate = false;
    this.displayInitial = true;
    window.location.reload();
  }
  closeCreateItem(){
    this.displaycreate=false;
  }
  saveitem() {
    this.itemService.saveItem(this.itemname, this.itemprice, this.itemdescription,
      this.itemcalories, this.itemsize, this.itemdiscount, this.itemmenuid);
  this.closeCreateItem();
  }
  ngOnInit(): void {
  }

}
