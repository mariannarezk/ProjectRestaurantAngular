import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../_interfaces/user.model';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private headers: HttpHeaders;
  public username:string;
  
  public fullname:string;
  public email:string;
  
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
  constructor(private fb:FormBuilder,private http: HttpClient,private router: Router) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

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
  createUser()
  { 
    this.http.post<any>('https://localhost:44309/api/ApplicationUser/RegisterC', {
        Email:this.email, 
        FullName: this.fullname, 
        Password: this.password
        //confirm_password: this.confirmpassword
    }).subscribe((data: User) => { console.log(data);
      localStorage.setItem('role', 'Client');
      localStorage.setItem('fullname', this.fullname);
      localStorage.setItem('id', data.id);
      console.log(data.id);
      this.router.navigateByUrl('/customerhome');
    });

  }
  
}
