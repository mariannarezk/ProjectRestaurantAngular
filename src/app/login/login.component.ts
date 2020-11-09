import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  userDetails;
  public reponse;
  private headers: HttpHeaders;
  public username:string;
  public email:string;
  //public confirmpassword:string;
  public data:string;
  public password:any;
  public restactive:any;
  form = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private appcomponent:AppComponent,private fb:FormBuilder,private toastr: ToastrService,private http: HttpClient,private router: Router,private dataservice:DataService,private service: UserService) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }

  ngOnInit(): void {
    //if (localStorage.getItem('token') != null)
    //  this.router.navigateByUrl('/home');
  }
  loginUser(){
    console.log(this.username);
     console.log(this.password); 
    this.http.post<any>('https://localhost:44309/api/ApplicationUser/Login', {
        
        UserName:this.username,  
        Password: this.password,
    }).subscribe(
      (res: any) => {
        if(res == null) {
          this.toastr.error('Wrong email address or password', 'Login failed', {
          timeOut: 3000
        });
        }
        else{
          localStorage.setItem('token', res.token);
        //console.log("1");
          this.service.getUserProfile().subscribe(
            res => {
              this.userDetails = res;
              localStorage.setItem('role', this.userDetails.role);
              localStorage.setItem('fullname', this.userDetails.fullName);
              localStorage.setItem('id', this.userDetails.id);
              //console.log("2");
              this.appcomponent.logoutbtn=true;
              this.appcomponent.loginbtn=false;
              //console.log(this.userDetails.role);
              //console.log("fn= "+this.userDetails.fullname);
              //console.log(this.userDetails.UserName);
              if(this.userDetails.role=="Super Admin") this.router.navigateByUrl('/homesa');
              if(this.userDetails.role=="Manager") {
                var managerid=localStorage.getItem('id');
                //console.log("3");
                this.http.get('https://localhost:44309/api/Manager/RestActive?managerid='+managerid).subscribe(reslt => {
                  this.restactive=reslt;
                  //console.log("rest id = "+this.restactive);
                  if(this.restactive == null) {
                    this.router.navigateByUrl('/restoinfos/'+managerid);
                    //console.log("wosslit");
                  }else{
                    this.http.get('https://localhost:44309/api/Manager/GetRequest?managerid='+managerid).subscribe(result => {
                    this.reponse=result;
                    localStorage.setItem('restid', this.reponse.restaurantId);
                    //console.log(this.reponse.active);
                    //console.log(this.reponse.restaurantId);
                    if(this.reponse.active == 0) {
                      console.log("active = 0");
                      this.router.navigateByUrl('/login');
                      
                      this.toastr.error('Pending Request', 'Login failed', {
                        timeOut: 3000});
                     } //wait la yen3amallak accept
                    else if(this.reponse.active == 1) {
                      this.router.navigateByUrl('/restbranch/'+this.reponse.restaurantId); 
                      //console.log("active = 1");
                      //window.location.reload();
                    }
                      //okkk
                    else {
                      this.router.navigateByUrl('/login');
                      console.log("active = -1");

                      this.toastr.error('You have been removed', 'Login failed', {
                        timeOut: 3000});
                     } //nrafadit l request
                    });
                  }
                });
              }
             // if(this.userDetails.role=="Waiter") this.router.navigateByUrl('/restorequests');
             // if(this.userDetails.role=="Client") this.router.navigateByUrl('/restorequests');
             // if(this.userDetails.role=="Chef") this.router.navigateByUrl('/restorequests');
        
            },
            err => {
              console.log(err);
            },
          );
        
        //this.router.navigateByUrl('/home');
        //window.location.reload();
      }
    }
    );
    
    
  }

}
