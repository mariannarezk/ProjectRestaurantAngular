import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor(private route:Router,private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }
  createUser()
  { 
    this.http.post<any>('https://localhost:44309/api/ApplicationUser/RegisterC', {
        Email:this.email, 
        FullName: this.fullname, 
        Password: this.password
        //confirm_password: this.confirmpassword
    }).subscribe(data => { console.log(data) });
    this.route.navigate(['/clientinterface']);
  }
  ngOnInit(): void {
  }

}
