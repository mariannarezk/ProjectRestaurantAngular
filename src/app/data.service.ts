import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public menuid: number;
  //these variables for the page edit category
  public categid; public categname; public categdescr; public categvisible; public cmenuid;public displayeditcategory=false;
  //these variables for the page edit section
  public sectionid; public sectionname; public sectionavailable;
  //these variables for the page edit ingredient
  public ingredientid; public ingredientname; public ingredientcalories; public ingredientqty;
  //these variables for the page create item
  public categoryid;
  //these variables for the page edit item
  transshowedititem=false;itemid; itemname; itemprice; itemdescr; itemcalories; itemsize; itemdiscount; editcategid;edititemmenuid;
  //these variables for the page edit addone
  addoneid; addonename; addonesize; addoneprice;
  //these variables for the page create item add-ons
  itemidaddons;
  //these variables for the page ensemble add ons
  ensembleid;
  //these variables for the page ensembles :
  enscategid;
  //these variables for the page edit package : 
  packageid;packagename;packageprice;packagemenuid;
  //branch zones et restaurant : 
  public brestid;
  public branchid; public branchname; public beanchlocation; public branchphonenumber; public branchnotes; public restid;
  public zonename; public zoneid;
  //these variables are transmitted btween the components in the one single page :
  public transmenuid;
  constructor() { }
}
