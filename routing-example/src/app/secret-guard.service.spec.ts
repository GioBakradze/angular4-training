import { TestBed, inject } from '@angular/core/testing';

import { SecretGuardService } from './secret-guard.service';

describe('SecretGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretGuardService]
    });
  });

  it('should be created', inject([SecretGuardService], (service: SecretGuardService) => {
    expect(service).toBeTruthy();
  }));
});
