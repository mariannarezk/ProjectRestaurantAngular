import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllergenService {

  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
   }
   getallallergens(itemid){
    return this.http.get('https://localhost:44309/api/Allergens/GetAllAllergens/?itemid=' + itemid);
   }
   getchoosedallergens(itemid){
    return this.http.get('https://localhost:44309/api/Allergens/GetChoosedAllergens/?itemid=' + itemid);
   }
   chooseAllergen(itemid,allergenid){
    this.http.post<any>('https://localhost:44309/api/Allergens/ChooseAllergen', {
      AllergenId: allergenid, ItemId: itemid
    }).subscribe(data => { console.log(data); });
   }
   deleteAllergen(itemid,allergenid){
    this.http.post<any>('https://localhost:44309/api/Allergens/DeleteChoosedAllergen/?itemid='+itemid+'&allergenId='+allergenid, {
      
    }).subscribe(data => { console.log(data); });
   }
}
