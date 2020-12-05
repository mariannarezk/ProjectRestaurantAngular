import { TestBed } from '@angular/core/testing';

import { WaitertablesService } from './waitertables.service';

describe('WaitertablesService', () => {
  let service: WaitertablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaitertablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
