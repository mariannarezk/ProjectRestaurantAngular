import { TestBed } from '@angular/core/testing';

import { RestobranchService } from './restobranch.service';

describe('RestobranchService', () => {
  let service: RestobranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestobranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
