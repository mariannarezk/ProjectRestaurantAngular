import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeaddonesComponent } from './composeaddones.component';

describe('ComposeaddonesComponent', () => {
  let component: ComposeaddonesComponent;
  let fixture: ComponentFixture<ComposeaddonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeaddonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeaddonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
