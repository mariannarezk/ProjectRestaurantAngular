import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editingredient',
  templateUrl: './editingredient.component.html',
  styleUrls: ['./editingredient.component.css']
})
export class EditingredientComponent implements OnInit {

  displayedit = true;
  displayInitial = false;
 
  constructor(private ingredientService: IngredientService, private dataService: DataService) { }
  private ingredientid = this.dataService.ingredientid;
  private ingredientname = this.dataService.ingredientname;
  private ingredientcalories = this.dataService.ingredientcalories;
  private ingredientqty = this.dataService.ingredientqty;
  private branchid = 1;
  BackToInitial() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  saveingredientedit() {
    this.ingredientService.editIngredient(this.ingredientid, this.ingredientname, this.ingredientcalories, this.ingredientqty, this.branchid);
    this.displayedit = false;
    this.displayInitial = true;
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
