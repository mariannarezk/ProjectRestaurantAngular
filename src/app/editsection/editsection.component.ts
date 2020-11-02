import { Component, OnInit } from '@angular/core';
import { SectionService } from '../section.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-editsection',
  templateUrl: './editsection.component.html',
  styleUrls: ['./editsection.component.css']
})
export class EditsectionComponent implements OnInit {
  displayedit = true;
  displayInitial = false;
  public sectionid = this.dataService.sectionid;
  public sectionname = this.dataService.sectionname;
  public sectionavailable = this.dataService.sectionavailable;
  constructor(private sectionService: SectionService, private dataService: DataService) { }
  BackToInitial() {
    this.displayedit = false;
    this.displayInitial = true;
  }
  savesectionedit() {
    this.sectionService.editSection(this.sectionid, this.sectionname, this.sectionavailable);
    this.displayedit = false;
    this.displayInitial = true;
    window.location.reload();
  }
  ngOnInit(): void {
  }

}
