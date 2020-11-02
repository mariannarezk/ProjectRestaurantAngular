import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { DataService } from '../data.service';
import { AddonesService } from '../addones.service';

@Component({
  selector: 'app-composeaddones',
  templateUrl: './composeaddones.component.html',
  styleUrls: ['./composeaddones.component.css']
})
export class ComposeaddonesComponent implements OnInit {

  itemid; itemname;
  alladdones;
  displaycreate = false;
  //these variables for the edit:
  editobligid; edititemid; editaddonsid;editqty; displayedit = false; editprice;
  constructor(private itemService: ItemService, private dataService: DataService, private addonesService: AddonesService, private _Activatedroute: ActivatedRoute) {
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));
    this.getitemname();
    this.getaddones();
  }
  getitemname() {
    this.itemService.getitemanme(this.itemid).subscribe(result => {
      this.itemname = result;
    }), error => console.error(error);
  }
  getaddones() {
    this.addonesService.getAddOnesItem(this.itemid).subscribe(result => {
      this.alladdones = result;
    }), error => console.error(error);
  }
 
  editquantity(obligid, itemid, addonsid,qty,price) {
    this.editaddonsid = addonsid;
    this.editobligid = obligid;
    this.edititemid = itemid;
    this.editqty = qty;
    this.editprice = price;
    this.displayedit = true;
  }
  saveEdit() {
    this.addonesService.editaddoneqty(this.editobligid, this.editaddonsid, this.edititemid, this.editqty,this.editprice);
    window.location.reload();
  }
  closeEdit() {
    this.displayedit = false;
  }
  createobligadon(itemid) {

    this.dataService.itemidaddons = itemid;
    this.displaycreate = true;

  }
  ngOnInit(): void {
  }

}
