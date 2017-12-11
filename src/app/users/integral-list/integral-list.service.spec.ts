import { TestBed, inject } from '@angular/core/testing';

import { IntegralListService } from './integral-list.service';

describe('IntegralListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntegralListService]
    });
  });

  it('should be created', inject([IntegralListService], (service: IntegralListService) => {
    expect(service).toBeTruthy();
  }));
});
