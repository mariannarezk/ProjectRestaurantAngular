import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionaddonsComponent } from './collectionaddons.component';

describe('CollectionaddonsComponent', () => {
  let component: CollectionaddonsComponent;
  let fixture: ComponentFixture<CollectionaddonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionaddonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionaddonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
