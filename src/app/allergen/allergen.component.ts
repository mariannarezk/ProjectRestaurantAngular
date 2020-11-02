import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import {AllergenService} from '../allergen.service';
@Component({
  selector: 'app-allergen',
  templateUrl: './allergen.component.html',
  styleUrls: ['./allergen.component.css']
})
export class AllergenComponent implements OnInit {
  itemid;itemname;
  choosedallergens;
  otherallergens;
  showothers=false;
  constructor(private allergenService : AllergenService,private itemService: ItemService,private _Activatedroute: ActivatedRoute) { 
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));
    this.getitemname();
    this.getchoosedallergens();
  
  }
  getitemname() {
    this.itemService.getitemanme(this.itemid).subscribe(result => {
      this.itemname = result;
    }), error => console.error(error);
  }
  getchoosedallergens(){
    this.allergenService.getchoosedallergens(this.itemid).subscribe(result => {
      this.choosedallergens = result;
    }), error => console.error(error);
  }
  getotherallergens(){
    this.showothers=true;
    this.allergenService.getallallergens(this.itemid).subscribe(result => {
      this.otherallergens = result;
    }), error => console.error(error);
  }
  chooseallergen(allergenid){
    this.allergenService.chooseAllergen(this.itemid,allergenid);
    window.location.reload();
  }
  deleteallergen(allergenId){
    this.allergenService.deleteAllergen(this.itemid,allergenId);
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
