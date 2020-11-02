import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddonesService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
   }
   getAddOnes() {
    return this.http.get('https://localhost:44309/api/AddOnes/Get/');
  }
  saveAddOne(addonename,addonesize,addoneprice) {
    this.http.post<any>('https://localhost:44309/api/AddOnes/Create', {
      AddOnesName: addonename, AddOnesSize: addonesize, AddOnesPrice: addoneprice
    }).subscribe(data => { });
  }
  editaddone(addoneid, addonename, addonesize, addoneprice) {
    this.http.post<any>('https://localhost:44309/api/AddOnes/Edit', {
      AddOnesId: addoneid, AddOnesName: addonename, AddOnesSize: addonesize, AddOnesPrice: addoneprice
    }).subscribe(data => { console.log(data); });
  }
  editaddoneqty(obligid, addoneid, itemid, qty,price) {
    this.http.post<any>('https://localhost:44309/api/AddOnes/Editrlt', {
      ObligId: obligid, ItemId: itemid, AddOnsId: addoneid, Quantity: qty , Price:price
    }).subscribe(data => { console.log(data); });
  }
  saveaddoneqty( addoneid, itemid, qty,price) {
    this.http.post<any>('https://localhost:44309/api/AddOnes/Createrlt', {
      ItemId: itemid, AddOnsId: addoneid, Quantity: qty , Price: price
    }).subscribe(data => { console.log(data); });
  }
  saveRlt(EnsembleId, AddOnId,Quantity,Price) {
    this.http.post<any>('https://localhost:44309/api/AddOnes/CreateRltOptional', {
      EnsembleId: EnsembleId, AddOnId: AddOnId, Quantity: Quantity , Price:Price
    }).subscribe(data => { console.log(data); });
  }
  getAddOnesItem(itemid) {
    return this.http.get('https://localhost:44309/api/AddOnes/GetAddOnes/?itemid=' + itemid);
  }
  getAddOnesSupp(itemid) {
    return this.http.get('https://localhost:44309/api/AddOnes/GetAddOnesSupp/?itemid=' + itemid);
  }
  getaddonesEnsemble(ensembleid) {
    return this.http.get('https://localhost:44309/api/AddOnes/getaddonesEnsemble/?ensembleid=' + ensembleid);

  }
  getaddonesEnsemblesupp(ensembleid) {
    return this.http.get('https://localhost:44309/api/AddOnes/GetExistedOptional/?ensembleid=' + ensembleid);

  }
}
