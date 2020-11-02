import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-optionaladdone',
  templateUrl: './optionaladdone.component.html',
  styleUrls: ['./optionaladdone.component.css']
})
export class OptionaladdoneComponent implements OnInit {

  itemid;
  constructor(private _Activatedroute: ActivatedRoute) {
    this.itemid = parseInt(this._Activatedroute.snapshot.paramMap.get("itemid"));

  }

  ngOnInit(): void {
  }

}
