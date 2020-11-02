import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemingredientComponent } from './itemingredient.component';

describe('ItemingredientComponent', () => {
  let component: ItemingredientComponent;
  let fixture: ComponentFixture<ItemingredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemingredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemingredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
