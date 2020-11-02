import { TestBed } from '@angular/core/testing';

import { AddonesService } from './addones.service';

describe('AddonesService', () => {
  let service: AddonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
