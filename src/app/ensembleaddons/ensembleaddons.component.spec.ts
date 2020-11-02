import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleaddonsComponent } from './ensembleaddons.component';

describe('EnsembleaddonsComponent', () => {
  let component: EnsembleaddonsComponent;
  let fixture: ComponentFixture<EnsembleaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsembleaddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsembleaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
