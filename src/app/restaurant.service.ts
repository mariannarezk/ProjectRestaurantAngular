import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

   }
   saveRest(restname,restlogo,restnumber,restnotes) {
    this.http.post<any>('https://localhost:44309/api/restaurant/Create',
     { RestaurantName: restname ,  RestaurantLogo : restlogo,
      RestPhoneNumber: restnumber, RestNotes: restnotes
    })
     .subscribe(data => { console.log(data); });
  }
  getManagerId(email){
   return this.http.get('https://localhost:44309/api/ApplicationUser/GetId/?username='+email);
  }
  getrest(){
   return  this.http.get('https://localhost:44309/api/restaurant/Get');
  
   }
  
}
