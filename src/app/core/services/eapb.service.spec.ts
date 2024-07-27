import { TestBed } from '@angular/core/testing';

import { EapbService } from './eapb.service';

describe('EapbService', () => {
  let service: EapbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EapbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
