import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from '../ingredient.service';
@Component({
  selector: 'app-itemingredient',
  templateUrl: './itemingredient.component.html',
  styleUrls: ['./itemingredient.component.css']
})
export class ItemingredientComponent implements OnInit {

  itemid;
  ingrall; ingrchoosen;ingrqty;
  showChoose=false;
  ingrid;
 
  constructor(private _Activatedroute: ActivatedRoute, private ingredientService: IngredientService) {
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));
    this.showingsall();
    this.showchoosen();
  }
  showingsall() {
    this.ingredientService.getAll(this.itemid).subscribe(result => {
      this.ingrall = result;
    }), error => console.error(error);
  }
  showchoosen() {
    this.ingredientService.getChoosen(this.itemid).subscribe(result => {
      this.ingrchoosen = result;
    }), error => console.error(error);
  }
  displaychoose(ingrid){
this.ingrid =ingrid;
this.showChoose=true;
  }

  chooseing() {
    this.ingredientService.chooseIngredient(this.ingrid,this.itemid,this.ingrqty);
   this.showChoose=false;
    window.location.reload();

  }
  closeChoose(){
    this.showChoose = false;
  }
  ngOnInit(): void {
    this.showchoosen();
    this.showingsall();
  }

}
