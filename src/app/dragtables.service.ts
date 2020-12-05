import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragtablesService {
  constructor(private http: HttpClient) { }
  saveTables(array:any[]) {
    this.http.post<any>( 'https://localhost:44309/api/TablesDrag/Add', array).subscribe(data => { 
      console.log(data);
     });
  }
  updateTables(array:any[]){
    this.http.post<any>( 'https://localhost:44309/api/TablesDrag/Update', array).subscribe(data => { 
      console.log(data);
     });
  }

  getTables(zoneid){
    return this.http.get('https://localhost:44309/api/TablesDrag?zoneid='+zoneid);
  }
  removeTables(array:any[]){
    this.http.post<any>( 'https://localhost:44309/api/TablesDrag/Remove', array).subscribe(data => { 
      console.log(data);
     });
  }
}
