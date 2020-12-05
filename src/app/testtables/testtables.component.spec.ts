import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttablesComponent } from './testtables.component';

describe('TesttablesComponent', () => {
  let component: TesttablesComponent;
  let fixture: ComponentFixture<TesttablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
