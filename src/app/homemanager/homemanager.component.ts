import { Component, OnInit } from '@angular/core';
import { MenusService } from '../menus.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homemanager',
  templateUrl: './homemanager.component.html',
  styleUrls: ['./homemanager.component.css']
})
export class HomemanagerComponent implements OnInit {
menus;//array for menus;
categories;//array for categories;
categoriesItems;//array for the items inside the category;
branchid;
showedmenuname ;showedmenuid;showedmenuactive;
displayeditcategory;displaycreatecategory=false;
showitemscategory=false;
categoryname;categorydescr;
active1=true;active2=false;active3=false;active4=false;active5=false;
aredisabled = true;
  constructor(private menusService: MenusService,  private _Activatedroute: ActivatedRoute,
    private categoryService: CategoryService,private dataService : DataService) {
    this.showMenus();
    this.assignMenu(-1,"Choose Menu:",null);
    this.branchid= parseInt(this._Activatedroute.snapshot.paramMap.get("branchid"));
    this.showCategories();
   }
   assignActive(name){
     if(name == "active1"){
       this.active1=true;
       this.active2=this.active3=this.active4=this.active5=false;
     }
     if(name == "active2"){
      this.active2=true;
      this.showCategories();
      this.active1=this.active3=this.active4=this.active5=false;
    }
    if(name == "active3"){
      this.active3=true;
      this.active2=this.active1=this.active4=this.active5=false;
    }
    if(name == "active4"){
      this.active4=true;
      this.active2=this.active3=this.active1=this.active5=false;
    }
    if(name == "active5"){
      this.active5=true;
      this.active2=this.active3=this.active1=this.active4=false;
    }
   }
  showMenus(){
    console.log(this.branchid);
  this.menusService.getMenus(this.branchid).subscribe(result => {
    this.menus = result;
  }), error => console.error(error);
}
assignMenu(menuid,menu_Title,menuactive){
  this.showedmenuid = menuid;
  this.showedmenuname = menu_Title;
  this.showedmenuactive = menuactive;
  this.dataService.transmenuid = menuid;
}
editmenu(){
this.aredisabled=false;
}
saveeditmenu(){
  this.aredisabled=true;
this.menusService.editMenu(this.showedmenuid,this.showedmenuname,this.showedmenuactive,this.branchid);
}

//Categories : 
showCategories() {
  this.categoryService.getCategories(this.showedmenuid).subscribe(result => {
    this.categories = result;
  }), error => console.error(error);
 
}
editcategory(categid,categname,categdescr,categvisible,categmenu){
  this.dataService.categid = categid;
  this.dataService.categdescr = categdescr;
  this.dataService.categvisible = categvisible;
  this.dataService.categname = categname;
  this.dataService.cmenuid = categmenu;
  this.displayeditcategory = true;
}
closeEditCategory(){
 this.displayeditcategory=false;
}
showcreatecategory(){
  this.displaycreatecategory = true;
}
closeCreateCategory(){
  this.displaycreatecategory = false;
}
createCategory(){
  this.categoryService.saveCategory(this.categoryname, this.categorydescr, 'yes', this.showedmenuid);
  this.displaycreatecategory = false;
}
getItemsCategory(categid){
  this.showitemscategory=true;
  this.categoryService.getitemcategories(categid).subscribe(result => {
    this.categoriesItems = result;
  }), error => console.error(error);
}
saveItemsCategory(){
  for(var a of this.categoriesItems){
    this.categoryService.saveitemcategory(a.itemId,a.categoryId,a.itemName,a.isChoosed);
   }
   this.closeItemCategories();
}
closeItemCategories(){
  this.showitemscategory=false;
}
  ngOnInit(): void {
    this.showMenus();
    this.assignMenu(-1,"Choose Menu : ",null);
    this.showCategories();
  }

}
