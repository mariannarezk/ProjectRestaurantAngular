import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { DataService } from '../data.service';
import { EnsembleService } from '../ensemble.service';
import { ActivatedRoute } from '@angular/router';
import {CategoryService} from '../category.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public items: any;public itemsmenu :any;menuid;
  public displayinitial = true;
  public displaycreate = false;
  public displayedit = this.dataService.transshowedititem;
  public categid: number;
  public displaycomposeingredients = false;itemsingredients;
  displaycomposeallergens=false;itemsallergens;
  public obligadonesitems:any ;//array
  displayobligaddones=false;
  public ensembleitems:any;
  displayensembleitems = false;
  public allcategories;
  constructor(private categoryService:CategoryService,private ensembleService : EnsembleService,private itemService: ItemService, private dataService: DataService, private _Activatedroute: ActivatedRoute) {
   // this.categid = parseInt(this._Activatedroute.snapshot.paramMap.get("categoryid"));
    //this.dataService.enscategid = this.categid;
    //this.showItems();
    this.menuid = this.dataService.transmenuid;
    this.displayedit = this.dataService.transshowedititem;
    this.getItemsMenu();
  }
  showitemsingr(itemid){
    this.displaycomposeingredients=true;
    this.itemService.getitemsingredients(itemid).subscribe(result=>{
      this.itemsingredients = result;
    }), error => console.error(error);
  }
  saveItemsIngredients(){
    for(var a of this.itemsingredients){
      this.itemService.saveItemIngredients(a.itemId,a.ingredientId,a.ingredientName,a.isChoosed,a.quantity);
     }
     this.closeItemIngredients();
  }
  closeItemIngredients(){
    this.displaycomposeingredients=false;
  }
  showitemsallergens(itemid){
    this.displaycomposeallergens=true;
    this.itemService.getitemsallergens(itemid).subscribe(result=>{
      this.itemsallergens = result;
    }), error => console.error(error);
  }
  saveItemsAllergens(){
    for(var a of this.itemsallergens){
      this.itemService.saveItemAllergen(a.itemId,a.allergenId,a.allergenName,a.isChoosed);
     }
     this.closeItemAllergens();
  }
  closeItemAllergens(){
this.displaycomposeallergens=false;
  }
  showItems() {
  /*  this.itemService.getItems().subscribe(result => {
      this.items = result;
    }), error => console.error(error);*/
    this.itemService.getItems(this.categid).subscribe(result => {
      this.items = result;
    }), error => console.error(error);
  }
  getItemsMenu(){
    this.itemService.getItemsMenu(this.menuid).subscribe(result => {
      this.itemsmenu = result;
    }), error => console.error(error);
  }
  

  showcreate() {
   // this.dataService.categoryid = this.categid;
   this.categoryService.getCategories(this.menuid).subscribe(result => {
    this.allcategories = result;
  }), error => console.error(error);
  this.dataService.allcategoriesitem = this.allcategories;
    this.displaycreate = true;
  
  }
  edititem(itemid, itemname, itemprice, itemdescr, itemcalories, itemsize, itemdiscount, categid,menuid) {
    this.dataService.itemid = itemid;
    this.dataService.itemname = itemname;
    this.dataService.itemprice = itemprice;
    this.dataService.itemdescr = itemdescr;
    this.dataService.itemcalories = itemcalories;
    this.dataService.itemsize = itemsize;
    this.dataService.itemdiscount = itemdiscount;
    this.dataService.editcategid = categid;
this.dataService.edititemmenuid=menuid;
   // this.displayinitial = false;
   // this.displayedit = true;
  this.dataService.transshowedititem = this.displayedit = true;
  }
  closeEditItem(){
    this.displayedit=false;
  }
  saveitemedit(){
    this.itemService.editItem(
      this.dataService.itemid, this.dataService.itemname, this.dataService.itemprice,
       this.dataService.itemdescr, this.dataService.itemcalories, this.dataService.itemsize,
      this.dataService.itemdiscount,this.dataService.categid, this.menuid
    );
    this.dataService.transshowedititem=this.displayedit = false;
  }

  getObligAddonesItem(itemid)
  {
    this.displayobligaddones=true;
    this.itemService.getObligAddonesItem(itemid).subscribe(result => {
      this.obligadonesitems = result;
    }), error => console.error(error);
  }
  closeItemObligAddones(){
    this.displayobligaddones=false;
  }
  saveItemObligAddones(){
    for(var a of this.obligadonesitems){
      this.itemService.saveItemObligAddons(a.itemId,a.addonId,a.quantity,a.price,a.addonName,a.isChoosed);
     }
     this.closeItemObligAddones();
  }
  

  getEnsembleItems(itemId,menu_Id){
    this.displayensembleitems=true;
    this.ensembleService.getEnsembleItems(itemId,menu_Id).subscribe(result=>{
      this.ensembleitems = result;
    }), error => console.error(error);
  }
  closeEnsembleItems()
  {
    this.displayensembleitems=false;
  }
  saveEnsembleItems(){
    for(var a of this.ensembleitems){
      this.ensembleService.saveEnsembleItem(a.ensembleId,a.itemId,a.ensembleName,a.isChoosed);
     }
     this.closeEnsembleItems();
  }
  divshowdetailsensemble=false;
  showedensid;
  showmoredetails(ensid){
this.divshowdetailsensemble=true;
this.showedensid = ensid;
  }
  closedetailsensemble(){
    this.divshowdetailsensemble=false;
  }
  ngOnInit(): void {
    //this.showItems();
    this.menuid = this.dataService.transmenuid;
    this.displayedit = this.dataService.transshowedititem;
    this.getItemsMenu();
  }

}
