import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitertablesComponent } from './waitertables.component';

describe('WaitertablesComponent', () => {
  let component: WaitertablesComponent;
  let fixture: ComponentFixture<WaitertablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitertablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitertablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
