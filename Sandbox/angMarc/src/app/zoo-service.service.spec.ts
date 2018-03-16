import { TestBed, inject } from '@angular/core/testing';

import { ZooServiceService } from './zoo-service.service';

describe('ZooServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZooServiceService]
    });
  });

  it('should be created', inject([ZooServiceService], (service: ZooServiceService) => {
    expect(service).toBeTruthy();
  }));
});
