import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragtablesComponent } from './dragtables.component';

describe('DragtablesComponent', () => {
  let component: DragtablesComponent;
  let fixture: ComponentFixture<DragtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragtablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
