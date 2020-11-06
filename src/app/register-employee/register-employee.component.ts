import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {
  public Cswap=false;
  public Wswap=true;
  private headers: HttpHeaders;
  public username:string;
  public fullname:string;
  public email:string;
  public role:string;
  //public confirmpassword:string;
  public password:any;
  form = this.fb.group({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    Passwords: this.fb.group({
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
  },{validator : this.comparePasswords})
  
  });
  constructor(private fb:FormBuilder,private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

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
swapC(){
this.Cswap=true;
this.Wswap=false;
}
swapW(){
  this.Cswap=false;
  this.Wswap=true;
  }
  ngOnInit(): void {
  }
  createUser()
  {
    if(this.Wswap == true){
      this.role='Waiter';
    }else if(this.Cswap == true){
      this.role='Chef';
    }
     console.log(this.fullname);
     console.log(this.email);
     console.log(this.password);     
     console.log(this.role);
    this.http.post<any>('https://localhost:44369/api/ApplicationUser/Register', {
        Email:this.email, 
        //UserName:this.username, 
        FullName: this.fullname, 
        Password: this.password,
        Role:this.role,
        //confirm_password: this.confirmpassword
    }).subscribe(data => { console.log(data) });

  }
}
