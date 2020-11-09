import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { RestbranchService } from '../restbranch.service';

@Component({
  selector: 'app-restorequests',
  templateUrl: './restorequests.component.html',
  styleUrls: ['./restorequests.component.css']
})
export class RestorequestsComponent implements OnInit {
  public requests: any;
  displayInitial:true;
  public restos: any;
  constructor(private http: HttpClient,private dataService: DataService, private restbranchService: RestbranchService, private _Activatedroute: ActivatedRoute) { 
    this.showrequests();
  }
showrequests(){
  
    this.http.get('https://localhost:44309/api/SuperAdmin/')
    .subscribe(result => {
      this.restos = result;
      console.log(this.restos);
    });
  
}
accept(restid){
  this.http.post('https://localhost:44309/api/SuperAdmin/Accept?restid='+restid,{
    restid:restid
  }).subscribe(result => {
    
    console.log(result);
  });
  window.location.reload();
}
delete(restid){

  this.http.post('https://localhost:44309/api/SuperAdmin/Delete?restid='+restid,{
    restid:restid
  }).subscribe(result => {
    
    console.log(restid);
  });
  window.location.reload();
}
public createImgPath = (serverPath: string) => {
  return `https://localhost:44309/${serverPath}`;
}
  ngOnInit(): void {
  }

}
