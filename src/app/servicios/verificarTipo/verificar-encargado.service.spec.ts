import { TestBed, inject } from '@angular/core/testing';

import { VerificarEncargadoService } from './verificar-encargado.service';

describe('VerificarEncargadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificarEncargadoService]
    });
  });

  it('should be created', inject([VerificarEncargadoService], (service: VerificarEncargadoService) => {
    expect(service).toBeTruthy();
  }));
});
