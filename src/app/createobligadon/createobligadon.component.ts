import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AddonesService } from '../addones.service';
@Component({
  selector: 'app-createobligadon',
  templateUrl: './createobligadon.component.html',
  styleUrls: ['./createobligadon.component.css']
})
export class CreateobligadonComponent implements OnInit {

  itemid = this.dataService.itemidaddons;
  displayaddones = true;
  suppaddones;
  displaychoose = false;
  chooseitemid; chooseaddonid;chooseqty;choosePrice;
  constructor(private dataService: DataService, private addonesService: AddonesService) {
    this.showAddOnes();
  }
  showAddOnes() {
    this.addonesService.getAddOnesSupp(this.itemid).subscribe(result => {
      this.suppaddones = result;
    }), error => console.error(error);
  }
  chooseaddone(addonesid) {
    this.displaychoose = true;
    this.chooseitemid = this.itemid;
    this.chooseaddonid = addonesid;
  }
  closeChoose() {
    this.displaychoose = false;
  }
  saveChoose() {
    this.addonesService.saveaddoneqty(this.chooseaddonid, this.chooseitemid, this.chooseqty,this.choosePrice);
    window.location.reload();
   
  }

  ngOnInit(): void {
  }

}
