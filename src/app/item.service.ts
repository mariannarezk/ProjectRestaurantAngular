import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
   }
   getItems(categid) {
    return this.http.get('https://localhost:44309/api/Items/Get/?categid=' + categid);
  }
  getItemsMenu(menuid){
    return this.http.get('https://localhost:44309/api/Items/GetItemsMenu/?menuid=' + menuid);

  }
  saveItem(itemname,itemprice,itemdescription,itemcalories,itemsize,itemdiscount,menuid,categid,itempic) {
    this.http.post<any>('https://localhost:44309/api/Items/Create', {
      ItemName: itemname, ItemPrice: itemprice,
      ItemDescription: itemdescription, ItemCalories: itemcalories,
      ItemSize: itemsize, ItemDiscount: itemdiscount,
      Menu_Id: menuid , CategId : categid ,
      ItemImage : itempic
    }).subscribe(data => { });

  }
  editItem(itemid,itemname, itemprice, itemdescription, itemcalories, itemsize, itemdiscount,categid, menuid) {
    this.http.post<any>('https://localhost:44309/api/Items/Edit', {
      ItemId: itemid,
      ItemName: itemname, ItemPrice: itemprice,
      ItemDescription: itemdescription, ItemCalories: itemcalories,
      ItemSize: itemsize, ItemDiscount: itemdiscount,
      CategId: categid , Menu_Id:menuid
    }).subscribe(data => { });
  }
  getitemanme(itemid) {
    return this.http.get('https://localhost:44309/api/Items/GetName/?itemid=' + itemid);
  }
  getitemsingredients(itemid){
    return this.http.get('https://localhost:44309/api/Items/GetIngrs/?itemid='+itemid+'&branchid=1');
  }
  saveItemIngredients(itemid,ingredientid,ingredientname,ischoosed,quantity){
    this.http.post<any>('https://localhost:44309/api/Items/SaveItemsIngr',{
      ingredientId:ingredientid,itemId:itemid,
      ingredientName:ingredientname,IsChoosed:ischoosed,
      quantity:quantity
    }).subscribe(data => { });
  }
  getitemsallergens(itemid){
    return this.http.get('https://localhost:44309/api/Items/GetAllergens/?itemid='+itemid);
  }
  saveItemAllergen(itemid,allergenid,allergenname,ischoosed){
    this.http.post<any>('https://localhost:44309/api/Items/SaveAllergenItem',{
      AllergenId:allergenid,itemId:itemid,
      allergenname:allergenname,IsChoosed:ischoosed,
     
    }).subscribe(data => { });
  }

  getObligAddonesItem(itemid){
return this.http.get('https://localhost:44309/api/AddOnes/GetObligAddonsItemVM/?itemid='+itemid);
  }
  saveItemObligAddons(itemid,addoneid,quantity,price,addonename,ischoosed){
    this.http.post<any>('https://localhost:44309/api/AddOnes/SaveObligAddonsItemsVM',{
      itemId: itemid,
      addonId: addoneid,
      addonName: addonename,
     quantity: quantity,
      price: price,
      isChoosed: ischoosed
     
    }).subscribe(data => { });
  }
}
