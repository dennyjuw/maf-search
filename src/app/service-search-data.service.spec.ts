import { TestBed, inject } from '@angular/core/testing';

import { ServiceSearchDataService } from './service-search-data.service';

describe('ServiceSearchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceSearchDataService]
    });
  });

  it('should ...', inject([ServiceSearchDataService], (service: ServiceSearchDataService) => {
    expect(service).toBeTruthy();
  }));
});
