import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackagesService} from '../packages.service';
@Component({
  selector: 'app-packageitem',
  templateUrl: './packageitem.component.html',
  styleUrls: ['./packageitem.component.css']
})
export class PackageitemComponent implements OnInit {

  packageid;
  items; itemchoosen;itemqty;
  showChoose=false;
  itemid;
 
  constructor(private _Activatedroute: ActivatedRoute, private packagesService: PackagesService) {
    this.packageid = parseInt(this._Activatedroute.snapshot.paramMap.get("packageid"));
    this.showitemsall();
    this.showchoosen();
  }
  showitemsall() {
    this.packagesService.getAll(this.packageid).subscribe(result => {
      this.items = result;
    }), error => console.error(error);
  }
  showchoosen() {
    this.packagesService.getChoosen(this.packageid).subscribe(result => {
      this.itemchoosen = result;
    }), error => console.error(error);
  }
  displaychoose(itemid){
this.itemid =itemid;
this.showChoose=true;
  }

  chooseitem() {
    this.packagesService.chooseItem(this.packageid,this.itemid,this.itemqty);
   this.showChoose=false;
    window.location.reload();

  }
  closeChoose(){
    this.showChoose = false;
  }

  ngOnInit(): void {
  }

}
