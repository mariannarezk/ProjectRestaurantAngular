import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private headers: HttpHeaders;
  branchid = 1;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
   }
   getIngredients() {
    return this.http.get('https://localhost:44309/api/Ingredients/Get/');
  }
  getAll(itemid) {
    return this.http.get('https://localhost:44309/api/Ingredients/GetAll/?itemid=' + itemid);
  }
  getChoosen(itemid) {
    return this.http.get('https://localhost:44309/api/Ingredients/GetChoosen/?itemid=' + itemid);
  }
  saveIngredient(ingredientname: string, ingredientcalories: string, ingredientqty: number) {
    
    this.http.post<any>('https://localhost:44309/api/Ingredients/Create', {
      IngredientName: ingredientname, IngredientCalories: ingredientcalories, IngredientQty: ingredientqty, BranchId: this.branchid
    }).subscribe(data => { });
  }
  editIngredient(ingredientid, ingredientname, ingredientcalories, ingredientqty, branchid) {
    this.http.post<any>('https://localhost:44309/api/Ingredients/Edit', {
      IngredientId: ingredientid, IngredientName: ingredientname, IngredientCalories: ingredientcalories, IngredientQty: ingredientqty, BranchId: branchid
 }).subscribe(data => { console.log(data); });
  }
  chooseIngredient(ingredientid,itemid,ingquantity){
    this.http.post<any>('https://localhost:44309/api/Items/ChooseIngr', {
      IngredientId: ingredientid, ItemId: itemid, Quantity: ingquantity 
 }).subscribe(data => { console.log(data); });

  }
}
