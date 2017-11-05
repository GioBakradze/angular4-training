import { TestBed, inject } from '@angular/core/testing';

import { TrapGuardService } from './trap-guard.service';

describe('TrapGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrapGuardService]
    });
  });

  it('should be created', inject([TrapGuardService], (service: TrapGuardService) => {
    expect(service).toBeTruthy();
  }));
});
