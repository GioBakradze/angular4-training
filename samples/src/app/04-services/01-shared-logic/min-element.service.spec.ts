import { TestBed, inject } from '@angular/core/testing';

import { MinElementService } from './min-element.service';

describe('MinElementService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinElementService]
    });
  });

  it('should be created', inject([MinElementService], (service: MinElementService) => {
    expect(service).toBeTruthy();
  }));
});
