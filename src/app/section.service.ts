import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  }
  getSections() {
    return this.http.get('https://localhost:44309/api/Sections/Get');
  }
  saveSection(sectionname: string, sectionavailable: string) {
    this.http.post<any>('https://localhost:44309/api/Sections/Create', {
      SectionName: sectionname, SectionAvailable: sectionavailable
    }).subscribe(data => { });

  }
  editSection(sectionid, sectionname, sectionavailable) {
    this.http.post<any>('https://localhost:44309/api/Sections/Edit', { SectionId: sectionid, SectionName: sectionname, SectionAvailable: sectionavailable }).subscribe(data => { console.log(data); });

  }
}
