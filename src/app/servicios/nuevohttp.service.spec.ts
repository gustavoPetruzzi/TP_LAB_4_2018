import { TestBed, inject } from '@angular/core/testing';

import { NuevohttpService } from './nuevohttp.service';

describe('NuevohttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NuevohttpService]
    });
  });

  it('should be created', inject([NuevohttpService], (service: NuevohttpService) => {
    expect(service).toBeTruthy();
  }));
});
