import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EnsembleService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }
   getEnsembles(menuid) {
    return this.http.get('https://localhost:44309/api/EnsembleAddOns/Get/?menuid=' + menuid);

  }
  saveEnsemble(ensembletitle,menuid) {
    this.http.post<any>('https://localhost:44309/api/EnsembleAddOns/Create', {
      EnsembleName : ensembletitle, MenuId: menuid
    }).subscribe(data => { });
  }
  getAddones(ensembleid){
    return this.http.get('https://localhost:44309/api/EnsembleAddOns/getAddOnes/?ensembleid=' + ensembleid);
  }
  saveAddone(ensembleid,addoneid,addonename,choosed,price){
    this.http.post<any>('https://localhost:44309/api/EnsembleAddOns/SaveAddones', {
      addonid : addoneid, ensembleid: ensembleid,addonName:addonename,choosed:choosed,price:price
    }).subscribe(data => { });
  }
  deleteEnsemble(ensembleid){
    this.http.post<any>('https://localhost:44309/api/EnsembleAddOns/Delete/?ensembleid= '+ensembleid, {
      ensembleid : ensembleid
    }).subscribe(data => { });
  }
  getEnsembleItems(itemid,menuid){
    return this.http.get('https://localhost:44309/api/EnsembleAddOns/getEnsemblesVM/?itemid='+itemid+'&menuid='+menuid);
  }
  saveEnsembleItem(ensembleid,itemid,ensemblename,ischoosed){
    this.http.post<any>('https://localhost:44309/api/EnsembleAddOns/saveEnsembleItem', {
      EnsembleId : ensembleid,
      ItemId:itemid,
      EnsembleName:ensemblename,
      IsChoosed:ischoosed
    }).subscribe(data => { });
  }

}
