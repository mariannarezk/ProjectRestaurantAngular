import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getUserProfile() {
    var tokenheaders= new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')});
    console.log("tokenheaders="+tokenheaders);
    return this.http.get('https://localhost:44309/api/UserProfile',{headers:tokenheaders});
  }
}
