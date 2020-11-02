import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageitemComponent } from './packageitem.component';

describe('PackageitemComponent', () => {
  let component: PackageitemComponent;
  let fixture: ComponentFixture<PackageitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
