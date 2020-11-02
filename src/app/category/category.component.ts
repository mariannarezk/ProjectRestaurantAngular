import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public menuid: number;
  public categories: any;
  public idmenu: number;
  public displaycreate = false;
  public displayedit = false;
  public displayinitial = true;
  public categoryname: string = ''; public categorydescr: string = ''; public categoryvisible: string = '' ;
  
  constructor(private dataService: DataService, private categoryService: CategoryService,
    private _Activatedroute: ActivatedRoute) {
      this.menuid = this.dataService.menuid;
      this.idmenu = parseInt(this._Activatedroute.snapshot.paramMap.get("menuid"));
      this.showCategories();
     }
     showCategories() {
      this.categoryService.getCategories(this.idmenu).subscribe(result => {
        this.categories = result;
      }), error => console.error(error);
     
    }
    showcreate() {
      this.displaycreate = true;
    }
    closeCreate() {
      this.displaycreate = false;
      window.location.reload();
    }
    createCategory() {
      this.categoryService.saveCategory(this.categoryname, this.categorydescr, 'yes', this.idmenu);
     this.closeCreate();
    }
    editcategory(categid,categname,categdescr,categvisible,menuid) {
      this.dataService.categid = categid;
      this.dataService.categdescr = categdescr;
      this.dataService.categvisible = categvisible;
      this.dataService.categname = categname;
      this.dataService.cmenuid = menuid;
      this.displayedit = true;
      this.displayinitial = false;
    }
    backtocategories() {
      this.displayedit = false;
      this.displayinitial = true;
    }
   
  ngOnInit(): void {
    this.showCategories();
  }

}
