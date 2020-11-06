import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { RestaurantService } from '../restaurant.service';
import { User } from '../_interfaces/user.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  public currentRest: any;
  public restname: string = '';
  public rest: any;
  public managid:string;
  public fullname:string;
  public email:string;
  
  public password:any;
  form = this.fb.group({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    Passwords: this.fb.group({
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  },{validator : this.comparePasswords})
  
  });
  constructor(private fb:FormBuilder, private router: Router, private restaurantService: RestaurantService,private http: HttpClient, private dataService: DataService, private _Activatedroute: ActivatedRoute) {
   // this.getallrest();
  }

  ngOnInit(): void {
  }
  
  comparePasswords(fb:FormGroup){
    let confirm=fb.get('confirmpassword');
    if(confirm.errors == null || 'passwordMismatch' in confirm.errors){
      if(fb.get('password').value != confirm.value){
        confirm.setErrors({passwordMismatch:true });
      }else{
        confirm.setErrors(null);
      }
    }
  }
  createrest() {
    //console.log(this.restname);
    //this.currentRest.RestaurantName = this.restname;
    //this.restaurantService.saveRest(this.restname);
    //imgPath: this.response.dbPath;
    this.http.post<any>('https://localhost:44309/api/ApplicationUser/RegisterR', {
        Email:this.email, 
        FullName: this.fullname, 
        Password: this.password,
        
    }).subscribe(
      (res: User) => {
        console.log(res);
        console.log("manager id="+res.id);
        //this.router.navigateByUrl('/restoinfos');
        this.router.navigateByUrl('/restoinfos/'+res.id);
      }
    );
  };
  public assignrestid(restid) {
    
    this.dataService.restid = restid;
  }
  // getallrest(){
  //   this.restaurantService.getrest().subscribe(result => {
  //     this.rest = result;
  //   }), error => console.error(error);;
  // }
}
