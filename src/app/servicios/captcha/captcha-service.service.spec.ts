import { TestBed, inject } from '@angular/core/testing';

import { CaptchaServiceService } from './captcha-service.service';

describe('CaptchaServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaptchaServiceService]
    });
  });

  it('should be created', inject([CaptchaServiceService], (service: CaptchaServiceService) => {
    expect(service).toBeTruthy();
  }));
});
