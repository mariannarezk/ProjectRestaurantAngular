import { TestBed } from '@angular/core/testing';

import { RestbranchService } from './restbranch.service';

describe('RestbranchService', () => {
  let service: RestbranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestbranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
