import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateobligadonComponent } from './createobligadon.component';

describe('CreateobligadonComponent', () => {
  let component: CreateobligadonComponent;
  let fixture: ComponentFixture<CreateobligadonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateobligadonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateobligadonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
