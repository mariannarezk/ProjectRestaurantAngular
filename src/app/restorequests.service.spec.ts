import { TestBed } from '@angular/core/testing';

import { RestorequestsService } from './restorequests.service';

describe('RestorequestsService', () => {
  let service: RestorequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestorequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
