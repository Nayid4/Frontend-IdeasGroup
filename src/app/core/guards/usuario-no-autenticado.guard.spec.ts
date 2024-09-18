import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usuarioNoAutenticadoGuard } from './usuario-no-autenticado.guard';

describe('usuarioNoAutenticadoGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => usuarioNoAutenticadoGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
