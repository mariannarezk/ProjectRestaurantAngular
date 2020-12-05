import { TestBed } from '@angular/core/testing';

import { DragtablesService } from './dragtables.service';

describe('DragtablesService', () => {
  let service: DragtablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragtablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
