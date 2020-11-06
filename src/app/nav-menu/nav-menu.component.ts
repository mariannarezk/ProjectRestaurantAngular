import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent  {
  isExpanded = false;
  public fullname;
  logoutbtn=false;
  loginbtn=false;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  constructor(private router: Router) { 
    this.login();
  }
login(){
  if(localStorage.getItem('token')!=null){
    //console.log('logged in');
    //console.log("token: "+localStorage.getItem('token'));
    this.fullname=localStorage.getItem('fullname');
    this.logoutbtn=true;
    this.loginbtn=false;

  }else{
    this.logoutbtn=false;
    this.loginbtn=true;
  }
  //window.location.reload();
}
  ngOnInit(): void {
  }
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    this.router.navigate(['/login']);
    this.logoutbtn=false;
    this.loginbtn=true;
  }

}
