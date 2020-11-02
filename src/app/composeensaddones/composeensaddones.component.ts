import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddonesService } from '../addones.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-composeensaddones',
  templateUrl: './composeensaddones.component.html',
  styleUrls: ['./composeensaddones.component.css']
})
export class ComposeensaddonesComponent implements OnInit {

  itemid;quantity;
  createquantity;createprice; // these are used when i choose a addone
  public addones: any;
  public addonesSupp: any;
  displaychoose = false;
  ensembleid = this.dataService.ensembleid;
  addonesid;
  constructor(private dataService: DataService, private addonesService: AddonesService, private _Activatedroute: ActivatedRoute) {
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));
    this.showaddones();
    this.showaddonessupp();
  }
  chooseaddone(addonesid) {
    this.displaychoose = true;
    this.addonesid = addonesid;
  }
  closeChoose() {
    this.displaychoose = false;
    window.location.reload();

  }
  createRlt() {
    this.addonesService.saveRlt(this.ensembleid, this.addonesid, this.createquantity,this.createprice);
    this.closeChoose();
  }
  showaddones() {
    this.addonesService.getaddonesEnsemble(this.ensembleid).subscribe(result => {
      this.addones = result;
    }), error => console.error(error);
  }
  showaddonessupp() {
    this.addonesService.getaddonesEnsemblesupp(this.ensembleid).subscribe(result => {
      this.addonesSupp = result;
    }), error => console.error(error);
  }

  ngOnInit(): void {
  }

}
