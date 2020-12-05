import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalscrollmenuComponent } from './horizontalscrollmenu.component';

describe('HorizontalscrollmenuComponent', () => {
  let component: HorizontalscrollmenuComponent;
  let fixture: ComponentFixture<HorizontalscrollmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalscrollmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalscrollmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
