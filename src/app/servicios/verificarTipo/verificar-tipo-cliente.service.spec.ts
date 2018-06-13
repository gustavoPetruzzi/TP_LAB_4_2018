import { TestBed, inject } from '@angular/core/testing';

import { VerificarTipoClienteService } from './verificar-tipo-cliente.service';

describe('VerificarTipoClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificarTipoClienteService]
    });
  });

  it('should be created', inject([VerificarTipoClienteService], (service: VerificarTipoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
