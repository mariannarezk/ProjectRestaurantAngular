import { Component, OnInit } from '@angular/core';
import { MenusService } from '../menus.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.css']
})
export class EditmodalComponent implements OnInit {
  displayedit = true;
  displayInitial = false;
  menuid = this.menusService.menuid;
  menutitle: string = this.menusService.menutitle;
  menuactive = this.menusService.menuactive;
  constructor(private menusService: MenusService, private dataService: DataService) { }
  BackToInitial() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  savemenuedit() {
    this.menusService.menuid = this.menuid;
    this.menusService.menutitle = this.menutitle;
    this.menusService.menuactive = this.menuactive;
   // this.menusService.editMenu();
    this.displayedit = false;
    this.displayInitial = true;
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
