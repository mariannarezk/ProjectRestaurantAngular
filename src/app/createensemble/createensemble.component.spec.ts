import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateensembleComponent } from './createensemble.component';

describe('CreateensembleComponent', () => {
  let component: CreateensembleComponent;
  let fixture: ComponentFixture<CreateensembleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateensembleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateensembleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
