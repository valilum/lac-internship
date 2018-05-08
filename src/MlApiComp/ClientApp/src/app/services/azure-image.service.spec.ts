import { TestBed, inject } from '@angular/core/testing';

import { AzureImageService } from './azure-image.service';

describe('AzureImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzureImageService]
    });
  });

  it('should be created', inject([AzureImageService], (service: AzureImageService) => {
    expect(service).toBeTruthy();
  }));
});
