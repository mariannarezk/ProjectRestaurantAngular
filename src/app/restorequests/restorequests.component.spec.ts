import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorequestsComponent } from './restorequests.component';

describe('RestorequestsComponent', () => {
  let component: RestorequestsComponent;
  let fixture: ComponentFixture<RestorequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestorequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
