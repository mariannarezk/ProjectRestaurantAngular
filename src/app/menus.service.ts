import { Injectable , Inject } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { Router } from '@angular/router';  


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  number: number;
  
  public menuid: any;
  public menutitle: string;
  public menuactive: string;
  private accessPointUrl: string = 'https://localhost:44309//api/menus';
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
   
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }
  getMenus(branchid : number) {
    
    return this.http.get('https://localhost:44309/api/menus/GetM/?branchid='+branchid);
  }
  saveMenu(menutitle: string, menuactive: string,branchid) {
    this.http.post<any>( 'https://localhost:44309/api/menus/', { Menu_Title: menutitle, Menu_Active: menuactive , BranchId : branchid}).subscribe(data => {  });
  }
  editMenu(menuid,menutitle,menuactive,branchid) {
    this.http.post<any>('https://localhost:44309/api/menus/Edit', { Menu_Id: menuid, Menu_Title: menutitle, Menu_Active: menuactive , BranchId : branchid}).subscribe(data => { console.log(data); });
  }
  deleteMenu(menuid,menutitle,menuactive,branchid) {
    this.http.post<any>('https://localhost:44309/api/menus/delete', { Menu_Id: menuid, Menu_Title: menutitle, Menu_Active: menuactive, BranchId : branchid }).subscribe(data => { console.log(data); });

  }
}
