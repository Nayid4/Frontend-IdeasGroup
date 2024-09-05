import { TestBed } from '@angular/core/testing';

import { PqrdService } from './pqrd.service';

describe('PqrsService', () => {
  let service: PqrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PqrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
