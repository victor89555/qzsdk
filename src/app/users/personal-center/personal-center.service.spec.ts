import { TestBed, inject } from '@angular/core/testing';

import { PersonalCenterService } from './personal-center.service';

describe('PersonalCenterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalCenterService]
    });
  });

  it('should be created', inject([PersonalCenterService], (service: PersonalCenterService) => {
    expect(service).toBeTruthy();
  }));
});
