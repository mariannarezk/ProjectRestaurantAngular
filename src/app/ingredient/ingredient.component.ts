import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  public ingredients: any;
  public displayinitial = true;
  public displaycreate = false;
  public ingredientname = '';
  public ingredientqty: number; public ingredientcalories = '';
  public displayedit = false;
  constructor(private ingredientService: IngredientService, private dataService: DataService) {
    this.showIngredients();
  }
  showIngredients() {
    this.ingredientService.getIngredients().subscribe(result => {
      this.ingredients = result;
    }), error => console.error(error);
  }

  showcreate() {
    this.displaycreate = true;
  }
  closeCreate() {
    this.displaycreate = false;
    window.location.reload();
  }
  createIngredient() {
    this.ingredientService.saveIngredient(this.ingredientname, this.ingredientcalories, this.ingredientqty);
    this.closeCreate();
  }
  editingredient(ingredientid, ingredientname, ingredientcalories, ingredientqty) {
    this.dataService.ingredientid = ingredientid;
    this.dataService.ingredientname = ingredientname;
    this.dataService.ingredientcalories = ingredientcalories;
    this.dataService.ingredientqty = ingredientqty;

    this.displayinitial = false;
    this.displayedit = true;
  }

  ngOnInit(): void {
  }

}
