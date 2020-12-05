import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonecardComponent } from './zonecard.component';

describe('ZonecardComponent', () => {
  let component: ZonecardComponent;
  let fixture: ComponentFixture<ZonecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
