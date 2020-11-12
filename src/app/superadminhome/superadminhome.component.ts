import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-superadminhome',
  templateUrl: './superadminhome.component.html',
  styleUrls: ['./superadminhome.component.css']
})
export class SuperadminhomeComponent implements OnInit {
  activesettings=false;
  activeallrestos=false;
  activerequests=false;
  general=false;
  logoutbtn=false;
  loginbtn=false;
  securityandlogin=false;
  requests=false;
  constructor(private AppComponent:AppComponent) {
    this.login();
    this.AppComponent.navItems=[ 
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
    this.AppComponent.sidebar=true;
    this.AppComponent.issuperadmin=true;
   }
  
  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
    
  }
  isDivider(navItem) {
    return !!navItem.divider
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
isTitle(navItem) {
    return !!navItem.title
}

isHasChild(navItem) {
    return navItem.hasOwnProperty('children') && navItem.children.length > 0;
}
generalfct(){
  this.general=true;
  this.securityandlogin=false;
  this.requests=false;
  $("#wrapper").toggleClass("toggled");
}
securityfct(){
  console.log("security home sa");
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

}
