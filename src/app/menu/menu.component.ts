import { Component, OnInit } from '@angular/core';
import { MenusService } from '../menus.service';
import {DataService} from '../data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showinitial=true;
  displaycreate=false;
  showedit=false;
  public menus: any;
  str_r: any;
  public currentMenu: any;
  public menuData: Array<any>;
  public menutitle: string = '';
  public menuactive: string = '';
  public menutitle2 = '';
  public menuid: number = -1;
  constructor(private menusService: MenusService, private dataService: DataService) {

    this.showMenus();
   }
  
  public showMenus() {
    this.menusService.getMenus().subscribe(result => {
      this.menus = result;
    }), error => console.error(error);
  }
  public createMenu() {
    this.displaycreate = true;
  }
  public addmenu = function () {
    this.menusService.saveMenu(this.menutitle, this.menuactive);
    this.closeCreate();
    window.location.reload();
  };
  public closeCreate() {
    this.displaycreate = false;
    this.showMenus();
   //window.location.reload();//!!!IMPORTANT!!!

  }
  public editmenu(menuid,menutitle,menuactive) {
    this.menuid = menuid;
    this.menutitle = menutitle;
    this.menuactive = menuactive;
    this.menusService.menuid = this.menuid;
    this.menusService.menutitle = this.menutitle;
    this.menusService.menuactive = this.menuactive;
    this.dataService.menuid = menuid; 
    this.showedit = true;
    this.showinitial = false;
  }
  public deletemenu = function (menuid, menutitle, menuactive) {
    this.menuid = menuid;
    this.menutitle = menutitle;
    this.menuactive = menuactive;
    this.menusService.menuid = this.menuid;
    this.menusService.menutitle = this.menutitle;
    this.menusService.menuactive = this.menuactive;
    this.menusService.deleteMenu();
    window.location.reload();
  }
  public assignmenuid(menuid) {
    this.dataService.menuid = menuid;
  }
  ngOnInit(): void {
    this.showMenus();
  }

}
