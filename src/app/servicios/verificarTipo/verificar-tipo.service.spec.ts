import { TestBed, inject } from '@angular/core/testing';

import { VerificarTipoService } from './verificar-tipo.service';

describe('VerificarTipoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VerificarTipoService]
    });
  });

  it('should be created', inject([VerificarTipoService], (service: VerificarTipoService) => {
    expect(service).toBeTruthy();
  }));
});
