import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnsembleService } from '../ensemble.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-ensembleaddons',
  templateUrl: './ensembleaddons.component.html',
  styleUrls: ['./ensembleaddons.component.css']
})
export class EnsembleaddonsComponent implements OnInit {

  ensembles;
  itemid;
  displayinitial = true; displaycreate = false; displayaddons = false;
  categoryid = this.dataService.enscategid;
  constructor(private dataService: DataService, private _Activatedroute: ActivatedRoute, private ensembleService: EnsembleService) {
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));

    this.showEnsembles();
  }
  showEnsembles() {
    this.ensembleService.getEnsembles(this.itemid).subscribe(result => {
      this.ensembles = result;
    }), error => console.error(error);
  }
  showcreate() {
    this.displaycreate = true;
    this.displayinitial = false;
  }
  putaddones(ensembleid) {
    this.displayaddons = true;
    this.displayinitial = false;
    this.dataService.ensembleid = ensembleid;
  }

  ngOnInit(): void {
  }

}
