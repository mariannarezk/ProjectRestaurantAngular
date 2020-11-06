import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestbranchService {

  constructor(private http:HttpClient) { }
  gotobranch(restid) {
    return this.http.get('https://localhost:44369/api/RestBranch/get/?restid='+restid);
  }
  gotohome(branchid) {
    return this.http.get('https://localhost:44369/api/HomeManager/get/?branchid=' + branchid);
  }
  saveBranch(branchname, branchlocation, branchphonenumber,branchnotes, restid) {
    this.http.post<any>('https://localhost:44369/api/RestBranch/Create', {
      BranchName: branchname, BranchLocation: branchlocation,
      BranchPhoneNumber: branchphonenumber, BranchNotes: branchnotes,
      RestaurantId: restid
    }).subscribe(data => { });

  }

  editBranch(branchid, branchname, branchlocation, branchphonenumber,branchnotes, restid) {
    this.http.post<any>('https://localhost:44369/api/RestBranch/Edit', {
      BranchId: branchid, BranchName: branchname, BranchLocation: branchlocation,
      BranchPhoneNumber: branchphonenumber,
      BranchNotes: branchnotes, RestaurantId: restid,
      }).subscribe(data => { console.log(data); });
  }
}
