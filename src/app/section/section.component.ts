import { Component, OnInit } from '@angular/core';
import { SectionService } from '../section.service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  public sections: any;
  public displayinitial = true;
  public displaycreate = false;
  public sectionname: string='';
  public sectionavailable: string = '';
  public displayedit = false;
  
  constructor(private sectionService: SectionService, private dataService: DataService) {
    this.showSections();

   }
  showSections() {
    this.sectionService.getSections().subscribe(result => {
      this.sections = result;
    }), error => console.error(error);

  }
  showcreate() {
    this.displaycreate = true;
  }
  closeCreate() {
    this.displaycreate = false;
    window.location.reload();
  }
  createSection() {
    this.sectionService.saveSection(this.sectionname, this.sectionavailable);
    this.closeCreate();
  }
  editsection(sectionid, sectionname, sectionavailable) {
    this.dataService.sectionid = sectionid;
    this.dataService.sectionname = sectionname;
    this.dataService.sectionavailable = sectionavailable;

    this.displayinitial = false;
    this.displayedit = true;
  }
  ngOnInit(): void {
    this.showSections();

  }

}
