import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionaladdoneComponent } from './optionaladdone.component';

describe('OptionaladdoneComponent', () => {
  let component: OptionaladdoneComponent;
  let fixture: ComponentFixture<OptionaladdoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionaladdoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionaladdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
