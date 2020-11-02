import { TestBed } from '@angular/core/testing';

import { RegistermanagerService } from './registermanager.service';

describe('RegistermanagerService', () => {
  let service: RegistermanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistermanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
