import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoinfosComponent } from './restoinfos.component';

describe('RestoinfosComponent', () => {
  let component: RestoinfosComponent;
  let fixture: ComponentFixture<RestoinfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoinfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
