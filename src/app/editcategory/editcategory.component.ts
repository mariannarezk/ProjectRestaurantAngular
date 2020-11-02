import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  displayedit = true;
  displayInitial = false;
  public categid = this.dataService.categid;
  public categname = this.dataService.categname;
  public categdescr = this.dataService.categdescr;
  public categVisible = this.dataService.categvisible;
  public menuid = this.dataService.cmenuid;
  constructor(private categoryService: CategoryService, private dataService: DataService) { }
  BackToInitial() {
    this.dataService.displayeditcategory = false;
    //this.displayInitial = true;
  }
  closeEditCategory(){
    this.displayedit=false;
  }
  savecatgedit() {
    this.categoryService.editCategory(this.categid, this.categname, this.categdescr, this.categVisible, this.menuid);
    this.dataService.displayeditcategory = false;
    //this.displayInitial = true;
   // window.location.reload();

  }

  ngOnInit(): void {
  }

}
