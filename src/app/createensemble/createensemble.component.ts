import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnsembleService } from '../ensemble.service';
@Component({
  selector: 'app-createensemble',
  templateUrl: './createensemble.component.html',
  styleUrls: ['./createensemble.component.css']
})
export class CreateensembleComponent implements OnInit {

  displaycreate = true;
  displayinitial = false;
  displaycompose = false;
  itemid; mincount; maxcount;
  constructor(private _Activatedroute: ActivatedRoute, private ensembleService: EnsembleService) {
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));

  }
  createEnseemble() {
    //this.ensembleService.saveEnsemble(this.mincount, this.maxcount, this.itemid);
    this.displaycompose = true;
    this.displaycreate = false;
  }
  backtoinitial() {
    this.displayinitial = true;
    this.displaycreate = false;
  }

  ngOnInit(): void {
  }

}
