import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  constructor(private http: HttpClient) {
   }

   gotozone(branchid) {
    return this.http.get('https://localhost:44309/api/Zones/get/?branchid=' + branchid);
  }
  saveZone(zonename, branchid, zoneimage) {
    this.http.post<any>('https://localhost:44309/api/Zones/Create', {
      ZoneName: zonename, 
      BranchId: branchid,
      ZoneImage: zoneimage
    }).subscribe(data => { console.log(data); });

  }

  editZone(z) {
    this.http.post<any>('https://localhost:44309/api/Zones/Edit', {
      ZoneId : z.zoneid,
      ZoneName: z.zonename,
      BranchId: z.branchid,
      ZoneImage:z.zoneimage,
      NbOfTables:z.nboftables
    }).subscribe(data => { console.log(data); });
  }
}