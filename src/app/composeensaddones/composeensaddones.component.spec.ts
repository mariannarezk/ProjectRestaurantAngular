import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeensaddonesComponent } from './composeensaddones.component';

describe('ComposeensaddonesComponent', () => {
  let component: ComposeensaddonesComponent;
  let fixture: ComponentFixture<ComposeensaddonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeensaddonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeensaddonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
