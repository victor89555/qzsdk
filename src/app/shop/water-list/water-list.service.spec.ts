import { TestBed, inject } from '@angular/core/testing';

import { WaterListService } from './water-list.service';

describe('WaterListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WaterListService]
    });
  });

  it('should be created', inject([WaterListService], (service: WaterListService) => {
    expect(service).toBeTruthy();
  }));
});
