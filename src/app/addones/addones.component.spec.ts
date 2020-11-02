import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonesComponent } from './addones.component';

describe('AddonesComponent', () => {
  let component: AddonesComponent;
  let fixture: ComponentFixture<AddonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
