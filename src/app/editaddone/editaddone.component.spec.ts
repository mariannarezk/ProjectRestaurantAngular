import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddoneComponent } from './editaddone.component';

describe('EditaddoneComponent', () => {
  let component: EditaddoneComponent;
  let fixture: ComponentFixture<EditaddoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
