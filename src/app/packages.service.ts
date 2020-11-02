import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }
   getPackages(menuid) {
    return this.http.get('https://localhost:44309/api/Packages/get/?menuid=' + menuid);
  }
  savePackage(packagename: string, packageprice: number, idmenu: number)
  {
    this.http.post<any>('https://localhost:44309/api/Packages/Create', {
      PackageName: packagename, PackagePrice: packageprice,
       Menu_Id: idmenu
    }).subscribe(data => {  });

  }
  editPackage(packageid,packagename,packageprice,menuid){
    this.http.post<any>('https://localhost:44309/api/Packages/Edit', {
      PackageId : packageid, PackageName: packagename, PackagePrice: packageprice,
       Menu_Id: menuid
    }).subscribe(data => {  });

  }
  getAll(packageid) {
    return this.http.get('https://localhost:44309/api/Packages/getallitems/?packageid=' + packageid);
  }
  getChoosen(packageid) {
    return this.http.get('https://localhost:44309/api/Packages/getchoosenitems/?packageid=' + packageid);
  }
  chooseItem(packageid,itemid,itemqty){
    this.http.post<any>('https://localhost:44309/api/Packages/ChooseItem', {
    PackageId: packageid,  ItemId: itemid, ItemQuantity: itemqty 
 }).subscribe(data => { console.log(data); });

  }
  showitemspackages(packid,menuid){
    return this.http.get('https://localhost:44309/api/Packages/GetPackagesItemsVM/?packid='+packid+'&menuid='+menuid);
  }
  saveItemPackage(packageid,itemid,itemname,qty,ischoosed){
    this.http.post<any>('https://localhost:44309/api/Packages/saveItemPackage', {
      PackageId: packageid,  ItemId: itemid,ItemName:itemname, Quantity: qty,IsChoosed:ischoosed 
   }).subscribe(data => { console.log(data); });
  }

}
