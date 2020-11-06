import { Component, OnInit, ViewChild } from '@angular/core';
import { MenusService } from '../menus.service';
import {DataService} from '../data.service';
import { FormBuilder, FormGroup,NgForm  } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  contactForm:FormGroup;
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
  public itemsSelect = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];
  selected=[2,4,8];
  @ViewChild('MySelectForm', { static: false })
  mySelectForm: NgForm;
  constructor(private menusService: MenusService, private dataService: DataService,
    private fb:FormBuilder) {

    this.showMenus();
   }
  
  public showMenus() {
   /* this.menusService.getMenus().subscribe(result => {
      this.menus = result;
    }), error => console.error(error);*/
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
  onFormSubmit(){
  this.confirmedmenuid=this.selectedMenuId.menu_Title;
  }
  selectedMenuId;
  confirmedmenuid;
  ngOnInit(): void {
  
   
    this.showMenus();
  }


}
