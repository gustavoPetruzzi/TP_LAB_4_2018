import { TestBed, inject } from '@angular/core/testing';

import { RemiserosService } from './remiseros.service';

describe('RemiserosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemiserosService]
    });
  });

  it('should be created', inject([RemiserosService], (service: RemiserosService) => {
    expect(service).toBeTruthy();
  }));
});
