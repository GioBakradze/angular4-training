import { TestBed, inject } from '@angular/core/testing';

import { BasicInterceptorService } from './basic-interceptor.service';

describe('BasicInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicInterceptorService]
    });
  });

  it('should be created', inject([BasicInterceptorService], (service: BasicInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
