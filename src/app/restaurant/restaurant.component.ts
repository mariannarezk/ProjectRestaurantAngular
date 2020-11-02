import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  //url parameter : 
  managerid;manageremail;
  //show all restaurants : 
  allrests;showall=true;
 //these variables are for creating the restaurant Informations : 
  restaurantname;restaurantlogo;restaurantphone;restaurantnotes;showcreate=false;
  constructor(private restaurantService: RestaurantService,private http: HttpClient, private dataService: DataService, private _Activatedroute: ActivatedRoute) {
   this.getallrest();
   //this.manageremail = this._Activatedroute.snapshot.paramMap.get("managerid");
//this.getmanagerid();
  }
  createrest(){
    this.restaurantService.saveRest(this.restaurantname,this.restaurantlogo,this.restaurantphone,
      this.restaurantnotes);
      window.location.reload();

  }
  BackToAll(){
    window.location.reload();
  }
  showCreate(){
    this.showall=false;
    this.showcreate=true;
  }
 /* getmanagerid(){
    this.restaurantService.getManagerId(this.manageremail).subscribe(result => {
      this.managerid = result;
    }), error => console.error(error);
  }*/
  getallrest(){
    this.restaurantService.getrest().subscribe(result => {
      this.allrests = result;
    }), error => console.error(error);
  }
  ngOnInit(): void {
   // this.getmanagerid();
  }
  
}