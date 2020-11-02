import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

import {RestobranchService} from '../restobranch.service';

@Component({
  selector: 'app-restbranch',
  templateUrl: './restbranch.component.html',
  styleUrls: ['./restbranch.component.css']
})
export class RestbranchComponent implements OnInit {
  public branch: any;
  public branches: any;
  public restid: any;
  public branchid: any;
  public displaycreate = false;
  public displayedit = false;
  public displayInitial = true;
  public branchname: string = ''; public branchlocation: string = ''; public branchphonenumber: any; branchnotes:string='';

  constructor(private restobranchService: RestobranchService,private dataService: DataService, private _Activatedroute: ActivatedRoute) {
   
    this.restid = parseInt(this._Activatedroute.snapshot.paramMap.get("restid"));
    this.showbranches();
  }

  ngOnInit(): void {
    this.showbranches();
  }
  showbranches() {
    //restid = 1;
    
    this.restobranchService.gotobranch(this.restid).subscribe(result => {
      this.branches = result;
      //console.log(result)
    }), error => console.error(error);


  }

  homemanager(branchid) {
    this.restobranchService.gotohome(branchid).subscribe(result => {
      this.branches = result;
    }), error => console.error(error);

    
  }
  editbranch(branchid, branchname, branchlocation, branchnotes, branchphonenumber) {
    this.dataService.restid = this.restid;
    this.dataService.branchid = branchid;
    this.dataService.branchname = branchname;
    this.dataService.branchnotes = branchnotes;
    this.dataService.beanchlocation = branchlocation;
    this.dataService.branchphonenumber = branchphonenumber;
    
    this.displayedit = true;
    this.displayInitial = false;
    
  }
 
  backtocategories() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  showcreate() {
    this.displaycreate = true;
  }
  closeCreate() {
    this.displaycreate = false;
    window.location.reload();
  }
  createBranch() {
    this.restobranchService.saveBranch(this.branchname, this.branchlocation, this.branchphonenumber, this.branchnotes, this.restid);
    this.closeCreate();
  }
}