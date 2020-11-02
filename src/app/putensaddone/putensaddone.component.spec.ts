import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutensaddoneComponent } from './putensaddone.component';

describe('PutensaddoneComponent', () => {
  let component: PutensaddoneComponent;
  let fixture: ComponentFixture<PutensaddoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutensaddoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PutensaddoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
