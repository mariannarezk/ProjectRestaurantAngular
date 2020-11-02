import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestobranchService {
  private headers: HttpHeaders;
  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  }
  ok(restid){
    return this.http.get('https://localhost:44309/api/RestBranch/get/?restid='+restid);

  }
  gotobranch(restid) {
    return this.http.get('https://localhost:44309/api/RestBranch/get/?restid='+restid);
  }
  gotohome(branchid) {
    return this.http.get('https://localhost:44309/api/HomeManager/get/?branchid=' + branchid);
  }
  saveBranch(branchname, branchlocation, branchphonenumber,branchnotes, restid) {
    this.http.post<any>('https://localhost:44309/api/RestBranch/Create', {
      BranchName: branchname, BranchLocation: branchlocation,
      BranchPhoneNumber: branchphonenumber, BranchNotes: branchnotes,
      RestaurantId: restid
    }).subscribe(data => { });

  }

  editBranch(branchid, branchname, branchlocation, branchphonenumber,branchnotes, restid) {
    this.http.post<any>('https://localhost:44309/api/RestBranch/Edit', {
      BranchId: branchid, BranchName: branchname, BranchLocation: branchlocation,
      BranchPhoneNumber: branchphonenumber,
      BranchNotes: branchnotes, RestaurantId: restid,
      }).subscribe(data => { console.log(data); });
  }
}
