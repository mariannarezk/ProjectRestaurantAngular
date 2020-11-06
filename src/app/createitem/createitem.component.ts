import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ItemService } from '../item.service';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {
  public response: {dbPath: ''}; // for upload image
  displaycreate=true;
  displayInitial = false;
  itemname = ''; itemprice = ''; itemdescription = ''; itemcalories = ''; itemsize = ''; itemdiscount = ''; imageFile: File;
  //categid = this.dataService.categoryid;
  itemmenuid = this.dataService.transmenuid;
  categories;
  selectedcategoryid;
  constructor(private categoryService:CategoryService,private dataService: DataService, private itemService: ItemService) {
this.categoryService.getCategories(this.itemmenuid).subscribe(result => {
  this.categories = result;
}), error => console.error(error);
   }
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
      this.itemcalories, this.itemsize, this.itemdiscount, this.itemmenuid,this.selectedcategoryid.categId,this.response.dbPath);
  this.closeCreateItem();
  }
  public uploadFinished = (event) => {
    this.response = event;
  }
  ngOnInit(): void {
    this.categoryService.getCategories(this.itemmenuid).subscribe(result => {
      this.categories = result;
    }), error => console.error(error);
  }

}
