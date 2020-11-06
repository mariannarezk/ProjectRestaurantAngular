import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    
   }
   saveRest(restname) {
    this.http.post<any>('https://localhost:44369/api/restaurant/Create', { RestaurantName: restname }).subscribe(data => { console.log(data); });
  }
  // getrest(){
  //   this.http.get('https://localhost:44369/api/restaurant/Get');
  
  // }
  
}
