import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientinterfaceComponent } from './clientinterface.component';

describe('ClientinterfaceComponent', () => {
  let component: ClientinterfaceComponent;
  let fixture: ComponentFixture<ClientinterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientinterfaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
