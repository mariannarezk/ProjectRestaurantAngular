import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private headers: HttpHeaders;
  categname: string; categdescr: string; categvisible: string;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }
   getCategories(menuid) {
    return this.http.get('https://localhost:44309/api/Categories/get/?menuid=' + menuid);
  }
  saveCategory(categoryname: string, categorydescription: string, categoryvisible: string, idmenu: number)
  {
    this.http.post<any>('https://localhost:44309/api/Categories/Create', {
      CategName: categoryname, CategDescription: categorydescription,
      CategVisible: categoryvisible, MenuId: idmenu
    }).subscribe(data => {  });

  }
  editCategory(categid, categname, categdescr, categvisible, menuid) {
    this.http.post<any>('https://localhost:44309/api/Categories/Edit', { CategId: categid, CategName: categname, CategDescription: categdescr, CategVisible: categvisible, MenuId: menuid }).subscribe(data => { console.log(data); });
  }
  getitemcategories(categid){
    return this.http.get('https://localhost:44309/api/Categories/GetItems/?CategoryId='+categid);
  }
  saveitemcategory(itemid,categid,itemname,ischoosed){
    this.http.post<any>('https://localhost:44309/api/Categories/SaveItems', {
      ItemId: itemid, CategoryId: categid,
      ItemName: itemname, IsChoosed: ischoosed
    }).subscribe(data => {  });
  }
}
