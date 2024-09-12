import { TestBed } from '@angular/core/testing';

import { TramitesInstitucionesService } from './tramites-instituciones.service';

describe('TramitesInstitucionesService', () => {
  let service: TramitesInstitucionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TramitesInstitucionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
