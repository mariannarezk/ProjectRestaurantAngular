import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { ZoneService } from '../zone.service';
import { ZoneToCreate } from '../_interfaces/zoneToCreate.model';
import { Zone } from '../_interfaces/zone.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  public zoneenabled: any;
  public branchid: any;
  public zonename: any;
  public zoneid: any;
  public displaycreate = false;
  public displayedit = false;
  public displayInitial = true;
  //public zones: any;
  public numberoftables:any;
  public zoneimage:string;
  public zone: ZoneToCreate;
  public response: {dbPath: ''};
  public zones: Zone[] = [];
  constructor(private http: HttpClient,private dataService: DataService, private zoneService: ZoneService, private _Activatedroute: ActivatedRoute) {
   
    this.branchid = parseInt(this._Activatedroute.snapshot.paramMap.get("branchid"));
    this.getZones();
  }

  ngOnInit(): void {
  }

  public onCreate = () => {
    this.zone = {
      zonename: this.zonename,
      zoneimage: this.response.dbPath,
      zoneenabled: this.zoneenabled,
      nboftables: this.numberoftables,
      branchid: this.branchid
    }

    this.http.post('https://localhost:44369/api/zones/create', this.zone)
    .subscribe(res => {
      this.getZones();
      this.closeCreate();
      //console.log(res);
    });
  }

  public uploadFinished = (event) => {
    this.response = event;
  }

  public createImgPath = (serverPath: string) => {
    return `https://localhost:44369/${serverPath}`;
  }
  private getZones() {
    this.http.get('https://localhost:44369/api/zones/get/?branchid=' + this.branchid)
    .subscribe(res => {
     this.zones = res as Zone[];
      //console.log(this.zones);
    });
  }
  
  editzone(z) {
    this.dataService.zone = z;
     this.dataService.zoneid = z.zoneId;
     this.dataService.branchid = z.branchId;
     this.dataService.zonename = z.zoneName;
     this.dataService.zoneenabled = z.zoneenabled;
     //this.dataService.zoneimage = z.zoneImage;

     this.displayedit = true;
     this.displayInitial = false;
    console.log(z.branchId);
  }
  showcreate() {
    this.displaycreate = true;
  }
  createZone() {
    this.zoneService.saveZone(this.zonename, this.branchid, this.response.dbPath);
    this.closeCreate();
  }
  closeCreate() {
    this.displaycreate = false;
    window.location.reload();
  }
  // showzones() {
   
  //   this.zoneService.gotozone(this.branchid).subscribe(result => {
  //     this.zones = result;
  //   }), error => console.error(error);

  // }
}
