import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitertablesService {

  constructor(private http: HttpClient) { }
  getTables(){
    return this.http.get('https://localhost:44309/api/Waiter');
  }
}
