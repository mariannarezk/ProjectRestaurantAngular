import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private headers: HttpHeaders;
  public username:string;
  public email:string;
  //public confirmpassword:string;
  public password:any;
  form = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private fb:FormBuilder,private http: HttpClient,private router: Router) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }

   loginUser(){
    console.log(this.username);
     console.log(this.password); 
    this.http.post<any>('https://localhost:44309/api/ApplicationUser/Login', {
        
        UserName:this.username,  
        Password: this.password,
    }).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      }
    );
    
    
  }


   ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

}
