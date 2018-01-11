import { TestBed, inject } from '@angular/core/testing';

import { InfomationService } from './infomation.service';

describe('InfomationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfomationService]
    });
  });

  it('should be created', inject([InfomationService], (service: InfomationService) => {
    expect(service).toBeTruthy();
  }));
});
