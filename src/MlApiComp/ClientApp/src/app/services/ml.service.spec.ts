import { TestBed, inject } from '@angular/core/testing';

import { Ml.ServiceService } from './ml.service.service';

describe('Ml.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ml.ServiceService]
    });
  });

  it('should be created', inject([Ml.ServiceService], (service: Ml.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
