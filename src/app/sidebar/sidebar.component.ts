import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SidebarService } from './sidebar.service';
// import { MenusService } from './menus.service';
import * as $ from 'jquery';
import { SuperadminhomeComponent } from '../superadminhome/superadminhome.component';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],

})
export class SidebarComponent implements OnInit {
  activesettings=false;
  activeallrestos=false;
  activerequests=false;
  @Input() navItems: Array<any>;
  constructor(public sidebarservice: SidebarService, public sah:SuperadminhomeComponent) {
   this.sah.activeallrestos=false;
   this.sah.activerequests=false;
   this.sah.activesettings=false;
   this.navItems=[ {
      name: 'Settings', 
      fctname: 'settings', 
       
      icon: 'icon-speedometer', 
      badge: { 
        variant: 'info', 
        text: 'NEW' 
        } 
      } ,
      {
        name: 'All requests', 
        fctname:'allrequests',
        icon: 'icon-speedometer', 
        badge: { 
          variant: 'info', 
          text: 'NEW' 
          } 
        } 
    ];
   }
   isDivider(navItem) {
    return !!navItem.divider
}

isTitle(navItem) {
    return !!navItem.title
}

isHasChild(navItem) {
    return navItem.hasOwnProperty('children') && navItem.children.length > 0;
}


settings(){
     console.log("settings");
    //this.sah.settings();
  }
  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  

}
