import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from './sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectRestaurantAngular';
  logoutbtn=false;
  loginbtn=false;
  activesettings=false;
  activeallrestos=false;
  activerequests=false;
  general=false;
  securityandlogin=false;
  requests=false;
  sidebar=false;
  ismanager=false;
  issuperadmin=false;
  role;
  @Input() navItems: Array<any>;
  constructor(public sidebarservice: SidebarService,private router: Router) {
    this.login();
    this.role=localStorage.getItem('role');
  
   if(localStorage.getItem('role')=="Super Admin"){
    this.ismanager=false;
    this.issuperadmin=true;

     this.navItems=[ 
      {
      name: 'Security'
      } ,
      {
        name: 'General'
      },
      {
        name:'Restaurants requests'
      }
    ];
    this.sidebar=true;
   }else if(this.role == "Manager"){
     this.ismanager=true;
     this.issuperadmin=false;

   }
   }
   

   startfct(name:String){
     console.log(name);
     if(name=="Security"){
       this.securityfct();
     }else if(name=="General"){
        this.generalfct();
     }else if(name=="Restaurants requests"){
       this.requestsfct();
     }
   }
   generalfct(){
    this.general=true;
    this.securityandlogin=false;
    this.requests=false;
    $("#wrapper").toggleClass("toggled");
  }
  securityfct(){
    this.securityandlogin=true;
    this.general=false;
    this.requests=false;
    $("#wrapper").toggleClass("toggled");
  }
  requestsfct(){
    this.securityandlogin=false;
    this.general=false;
    this.requests=true;
    $("#wrapper").toggleClass("toggled");
  }
   onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('fullname');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
    this.logoutbtn=false;
    this.loginbtn=true;
    this.sidebar=false;
    this.securityandlogin=false;
  this.general=false;
  this.requests=false;
  this.ismanager=false;
  this.issuperadmin=false;
  }

  settings(){
    console.log("ok");
    this.activesettings=true;
    this.activeallrestos=false;
    this.activerequests=false;
  }
  allrestos(){
    this.activesettings=false;
    this.activeallrestos=true;
    this.activerequests=false;
  }
  restosrequests(){
    this.activesettings=false;
    this.activeallrestos=false;
    this.activerequests=true;
  }

   login(){
    if(localStorage.getItem('token')!=null){
      this.logoutbtn=true;
      this.loginbtn=false;
  
    }else{
      this.logoutbtn=false;
      this.loginbtn=true;
    }
  }

  

  
}

