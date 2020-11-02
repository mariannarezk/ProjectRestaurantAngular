import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { RestaurantService } from '../restaurant.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-registermanager',
  templateUrl: './registermanager.component.html',
  styleUrls: ['./registermanager.component.css']
})
export class RegistermanagerComponent implements OnInit {
  public registered = false;//this is when the manager is successfuly signedup .. he will go to another place
  public showinitial = true;
  public currentRest: any;
  public restname: string = '';
  public rest: any;
  
  
  public fullname:string;
  public email:string;
  
  public password:any;
  UserId;
  constructor(private route:Router,private restaurantService: RestaurantService,private http: HttpClient, private dataService: DataService, private _Activatedroute: ActivatedRoute) {
   // this.getallrest();
  }

  ngOnInit(): void {
  }
  createrest() {
    //console.log(this.restname);
    //this.currentRest.RestaurantName = this.restname;
    //this.restaurantService.saveRest(this.restname);
    this.http.post<any>('https://localhost:44309/api/ApplicationUser/RegisterR', {
        Email:this.email, 
        FullName: this.fullname, 
        Password: this.password,
    }).subscribe(data => { console.log(data) });
   // this.registered=true;
    //this.showinitial=false;
   // this.UserId = this.http.get('https://localhost:44309/api/ApplicationUser/GetId/?username='+this.email);
    this.registered = true;
    this.route.navigate(['/restaurant',this.email]);
  }
 
  // getallrest(){
  //   this.restaurantService.getrest().subscribe(result => {
  //     this.rest = result;
  //   }), error => console.error(error);;
  // }

}
