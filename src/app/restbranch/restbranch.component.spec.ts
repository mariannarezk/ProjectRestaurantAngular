import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestbranchComponent } from './restbranch.component';

describe('RestbranchComponent', () => {
  let component: RestbranchComponent;
  let fixture: ComponentFixture<RestbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
