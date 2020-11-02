import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnsembleService } from '../ensemble.service';
@Component({
  selector: 'app-collectionaddons',
  templateUrl: './collectionaddons.component.html',
  styleUrls: ['./collectionaddons.component.css']
})
export class CollectionaddonsComponent implements OnInit {
menuid;//url
ensembles;//array of the ensembles
displaycreate=false;displayinitial=true;
ensembletitle;//this is for creating a new ensemble
showaddons=false;addones;priceaddone;//this is for show adons
constructor(private _Activatedroute: ActivatedRoute,private ensembleService: EnsembleService) {
    this.menuid = 1;
    this.ShowEnsembles();
   }
ShowEnsembles(){
  this.ensembleService.getEnsembles(this.menuid).subscribe(result => {
    this.ensembles = result;
  }), error => console.error(error);
}
showcreate(){
  this.displaycreate = true;
}
closeCreate(){
  this.displaycreate=false;
 // window.location.reload();
}
addensemble(){
this.ensembleService.saveEnsemble(this.ensembletitle,this.menuid);
this.closeCreate();
}
putaddones(ensembleid){
  this.showaddons=true;
  this.ensembleService.getAddones(ensembleid).subscribe(result => {
    this.addones = result;
  }), error => console.error(error);
}
closeSelect(){
this.showaddons=false;
}
deleteEnsemble(ensembleid){
  this.ensembleService.deleteEnsemble(ensembleid);
  window.location.reload();
}
saveAddones(){
 for(var a of this.addones){
  this.ensembleService.saveAddone(a.ensembleid,a.addonid,a.addonName,a.choosed,a.price);
 }
 this.closeSelect();

}
showensembledetails(){}
  ngOnInit(): void {
    this.ShowEnsembles();
  }

}
